import { useState, useEffect, type ReactNode } from "react";
import {
  CheckCircle2,
  Clock,
  GraduationCap,
  KeyRound,
  Lock,
  LogIn,
  LogOut,
  RefreshCw,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Ticket,
  UserCheck,
} from "lucide-react";
import { useAccessControl } from "@/lib/auth/access-control";
import { GoogleLoginDialog } from "./google-login-dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function VerificationGuard({ children }: { children: ReactNode }) {
  const currentUser = useAccessControl((s) => s.currentUser);
  const isApproved = useAccessControl((s) => s.isApproved);
  const isAdmin = useAccessControl((s) => s.isAdmin);
  const authRequired = useAccessControl((s) => s.authRequired);
  const signOut = useAccessControl((s) => s.signOut);
  const syncWithServer = useAccessControl((s) => s.syncWithServer);
  const verifyWithPasscode = useAccessControl((s) => s.verifyWithPasscode);
  const accessRequests = useAccessControl((s) => s.accessRequests);

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginModalTab, setLoginModalTab] = useState<"student" | "admin">("student");
  const [isCheckingStatus, setIsCheckingStatus] = useState(false);
  const [passcodeInput, setPasscodeInput] = useState("");
  const [showPasscodeField, setShowPasscodeField] = useState(false);

  // Check URL query parameters for instant invite code (e.g. ?code=BENCH2026 or ?access_token=...)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code") || params.get("passcode") || params.get("token");
    if (code) {
      verifyWithPasscode(code).then((res) => {
        if (res.success) {
          toast.success("Access Code Verified!", {
            description: "Full access to syllabus and case notes unlocked.",
          });
        }
      });
    }
  }, [verifyWithPasscode]);

  // Periodic sync with server so approvals reflect in real-time
  useEffect(() => {
    syncWithServer();
    const interval = setInterval(() => {
      syncWithServer();
    }, 3000);
    return () => clearInterval(interval);
  }, [syncWithServer]);

  // If auth is not required, pass through
  if (!authRequired) {
    return <>{children}</>;
  }

  const handleManualCheckStatus = async () => {
    setIsCheckingStatus(true);
    try {
      const approved = await syncWithServer();
      if (approved) {
        toast.success("Access Approved!", {
          description: "Welcome to Bench Notes. Your access has been unlocked.",
        });
      } else {
        toast.info("Status Checked", {
          description: "Your verification request is still pending administrator review.",
        });
      }
    } finally {
      setIsCheckingStatus(false);
    }
  };

  const handlePasscodeUnlock = async () => {
    if (!passcodeInput.trim()) {
      toast.error("Passcode required");
      return;
    }
    const res = await verifyWithPasscode(passcodeInput.trim());
    if (res.success) {
      toast.success("Passcode Verified!", {
        description: "Full access to study notes unlocked.",
      });
      setShowPasscodeField(false);
    } else {
      toast.error("Invalid Passcode", {
        description: res.error || "Please verify the passcode with your administrator.",
      });
    }
  };

  // 1. Not signed in: Dark Canvas + Centered Gate Card
  if (!currentUser) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-[#090909]">
        {/* Hard-blurred background content */}
        <div
          aria-hidden="true"
          className="pointer-events-none select-none filter blur-2xl opacity-15 scale-102 transition-all duration-300"
        >
          {children}
        </div>

        {/* Backdrop Overlay */}
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
          <div className="w-full max-w-md rounded-[28px] border border-[#262626] bg-[#141414] p-8 shadow-2xl text-center space-y-6 animate-in fade-in zoom-in-95 duration-200">
            <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-[#1c1c1c] border border-[#262626] text-white shadow-md">
              <Lock className="size-6 text-[#0099ff]" strokeWidth={2} />
            </div>

            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1c1c1c] border border-[#262626] px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[#999999]">
                <GraduationCap className="size-3.5 text-[#0099ff]" />
                MBA Academic Suite
              </span>
              <h1 className="font-display text-3xl font-bold tracking-[-0.03em] text-white">
                Bench Notes
              </h1>
              <p className="font-sans text-xs text-[#999999] leading-relaxed max-w-xs mx-auto">
                Access is restricted to verified MBA cohort students. Authenticate with your Google account to unlock notes & syllabus.
              </p>
            </div>

            <div className="pt-2 space-y-3">
              <Button
                type="button"
                onClick={() => {
                  setLoginModalTab("student");
                  setShowLoginModal(true);
                }}
                className="w-full h-11 bg-white text-black hover:bg-white/90 font-sans text-xs font-bold gap-2 shadow-sm rounded-full transition-all ios-press"
              >
                <LogIn className="size-4" />
                Sign in with Google
              </Button>

              <button
                type="button"
                onClick={() => {
                  setLoginModalTab("admin");
                  setShowLoginModal(true);
                }}
                className="w-full py-2 font-sans text-xs font-semibold text-[#999999] hover:text-white flex items-center justify-center gap-1.5 transition-colors"
              >
                <KeyRound className="size-3.5" />
                <span>Administrator Access Portal</span>
              </button>
            </div>

            <div className="pt-4 border-t border-[#1f1f1f] text-[11px] text-[#666666]">
              <p>Student accounts require 1-time verification to protect academic material.</p>
            </div>
          </div>
        </div>

        <GoogleLoginDialog
          isOpen={showLoginModal}
          initialTab={loginModalTab}
          onClose={() => setShowLoginModal(false)}
        />
      </div>
    );
  }

  // 2. Signed in, but NOT approved (Pending Verification Gate)
  const approved = isApproved(currentUser.email);
  const admin = isAdmin(currentUser.email);

  if (!approved && !admin) {
    const userReq = accessRequests[currentUser.email.toLowerCase()];
    const isRejected = userReq?.status === "rejected";

    return (
      <div className="relative min-h-screen overflow-hidden bg-[#090909]">
        {/* Hard-blurred background content */}
        <div
          aria-hidden="true"
          className="pointer-events-none select-none filter blur-2xl opacity-15 scale-102 transition-all duration-300"
        >
          {children}
        </div>

        {/* Backdrop Overlay */}
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
          <div className="w-full max-w-lg rounded-[28px] border border-[#262626] bg-[#141414] p-8 shadow-2xl text-center space-y-6 animate-in fade-in zoom-in-95 duration-200">
            <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-[#1c1c1c] border border-[#262626] text-white shadow-md">
              {isRejected ? (
                <ShieldAlert className="size-6 text-rose-500" strokeWidth={2} />
              ) : (
                <Clock className="size-6 text-[#0099ff] animate-pulse" strokeWidth={2} />
              )}
            </div>

            <div className="space-y-2">
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider ${
                  isRejected
                    ? "bg-rose-950/60 text-rose-300 border border-rose-800/40"
                    : "bg-[#1c1c1c] text-[#0099ff] border border-[#0099ff]/30"
                }`}
              >
                {isRejected ? "Access Denied" : "Verification Pending"}
              </span>

              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-[-0.03em] text-white">
                {isRejected ? "Account Not Authorized" : "Awaiting Administrator Approval"}
              </h2>

              <div className="rounded-[18px] bg-[#1c1c1c] p-4 border border-[#262626] my-4 text-left space-y-2 shadow-2xs">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[#999999]">Google ID:</span>
                  <span className="font-mono text-xs text-[#0099ff] font-bold">{currentUser.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[#999999]">Name:</span>
                  <span className="font-sans text-xs text-white">{currentUser.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[#999999]">Status:</span>
                  <span className={`font-sans text-xs font-bold ${isRejected ? "text-rose-400" : "text-amber-400"}`}>
                    {isRejected ? "Declined by Administrator" : "Request Queued • Auto-checking status..."}
                  </span>
                </div>
              </div>

              <p className="font-sans text-xs text-[#999999] leading-relaxed max-w-md mx-auto">
                {isRejected
                  ? "Your access request was declined by the administrator. Contact your cohort lead if you believe this is in error."
                  : "Your Google identity is registered. Once the administrator approves your email from the Admin panel, this screen will instantly unlock."}
              </p>
            </div>

            {/* Passcode Unlock Drawer */}
            {showPasscodeField ? (
              <div className="rounded-[18px] border border-[#262626] bg-[#1c1c1c] p-4 space-y-2.5 text-left animate-in fade-in">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-white flex items-center gap-1.5">
                    <Ticket className="h-3.5 w-3.5 text-[#0099ff]" />
                    Enter Instant Unlock Passcode
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowPasscodeField(false)}
                    className="text-[11px] text-[#666666] hover:text-white"
                  >
                    Cancel
                  </button>
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="e.g. BENCH2026"
                    value={passcodeInput}
                    onChange={(e) => setPasscodeInput(e.target.value.toUpperCase())}
                    onKeyDown={(e) => e.key === "Enter" && handlePasscodeUnlock()}
                    className="flex-1 rounded-full border border-[#262626] bg-[#090909] px-4 py-2 text-xs font-mono tracking-wider uppercase text-white focus:border-[#0099ff] focus:outline-none"
                  />
                  <Button
                    type="button"
                    size="sm"
                    onClick={handlePasscodeUnlock}
                    className="bg-white text-black hover:bg-white/90 text-xs px-4 rounded-full font-bold"
                  >
                    Unlock
                  </Button>
                </div>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setShowPasscodeField(true)}
                className="text-xs text-[#0099ff] hover:underline flex items-center justify-center gap-1 mx-auto font-medium"
              >
                <Ticket className="h-3.5 w-3.5" />
                Have an access passcode? Enter code
              </button>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 pt-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleManualCheckStatus}
                disabled={isCheckingStatus}
                className="w-full sm:w-auto text-xs border-[#262626] bg-[#1c1c1c] text-white rounded-full hover:bg-[#262626]"
              >
                <RefreshCw className={`size-3.5 mr-1.5 ${isCheckingStatus ? "animate-spin" : ""}`} />
                {isCheckingStatus ? "Checking..." : "Check Status Now"}
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={signOut}
                className="w-full sm:w-auto text-xs border-[#262626] bg-[#1c1c1c] text-[#999999] rounded-full hover:text-white hover:bg-[#262626]"
              >
                <LogOut className="size-3.5 mr-1.5" />
                Switch Account
              </Button>
              <Button
                type="button"
                size="sm"
                onClick={() => {
                  setLoginModalTab("admin");
                  setShowLoginModal(true);
                }}
                className="w-full sm:w-auto text-xs font-bold bg-white text-black hover:bg-white/90 rounded-full"
              >
                <KeyRound className="size-3.5 mr-1.5" />
                Admin Portal
              </Button>
            </div>
          </div>
        </div>

        <GoogleLoginDialog
          isOpen={showLoginModal}
          initialTab={loginModalTab}
          onClose={() => setShowLoginModal(false)}
        />
      </div>
    );
  }

  // 3. User is Approved or Admin: Render content clearly
  return <>{children}</>;
}
