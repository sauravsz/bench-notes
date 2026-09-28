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

  // 1. Not signed in: Hard Blur Background + Centered Gate Modal
  if (!currentUser) {
    return (
      <div className="relative min-h-screen overflow-hidden">
        {/* Hard-blurred background content */}
        <div
          aria-hidden="true"
          className="pointer-events-none select-none filter blur-xl opacity-30 contrast-125 scale-102 transition-all duration-300"
        >
          {children}
        </div>

        {/* Hard Blur Backdrop Overlay */}
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-2xl">
          <div className="w-full max-w-md rounded-3xl border border-[#e6dfce] bg-[#fffcf7] p-8 shadow-2xl text-center space-y-6 animate-in fade-in zoom-in-95 duration-200">
            <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-[#2f4553] text-[#fffcf7] shadow-md">
              <Lock className="size-8" strokeWidth={1.75} />
            </div>

            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ebd9c2] px-3 py-0.5 font-sans text-xs font-bold uppercase tracking-wider text-[#bf7538]">
                <GraduationCap className="size-3.5" />
                MBA Academic Suite
              </span>
              <h1 className="font-serif text-3xl font-bold tracking-tight text-[#1c2826]">
                Bench Notes
              </h1>
              <p className="font-sans text-xs text-[#636c78] leading-relaxed max-w-xs mx-auto">
                Access is restricted to verified MBA cohort students. Authenticate with your Google account to unlock case notes & syllabus.
              </p>
            </div>

            <div className="pt-2 space-y-2.5">
              <Button
                type="button"
                onClick={() => {
                  setLoginModalTab("student");
                  setShowLoginModal(true);
                }}
                className="w-full h-11 bg-[#bf7538] hover:bg-[#a6622b] text-white font-sans text-sm font-bold gap-2 shadow-sm rounded-xl"
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
                className="w-full py-2 font-sans text-xs font-semibold text-[#636c78] hover:text-[#1c2826] flex items-center justify-center gap-1.5 transition-colors"
              >
                <KeyRound className="size-3.5" />
                <span>Administrator Access Portal</span>
              </button>
            </div>

            <div className="pt-4 border-t border-[#e6dfce] text-[11px] text-[#88909b]">
              <p>Student accounts require 1-time verification to prevent unauthorized access.</p>
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

  // 2. Signed in, but NOT approved (Pending Verification Gate with Hard Blur)
  const approved = isApproved(currentUser.email);
  const admin = isAdmin(currentUser.email);

  if (!approved && !admin) {
    const userReq = accessRequests[currentUser.email.toLowerCase()];
    const isRejected = userReq?.status === "rejected";

    return (
      <div className="relative min-h-screen overflow-hidden">
        {/* Hard-blurred background content */}
        <div
          aria-hidden="true"
          className="pointer-events-none select-none filter blur-xl opacity-30 contrast-125 scale-102 transition-all duration-300"
        >
          {children}
        </div>

        {/* Hard Blur Backdrop Overlay */}
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-2xl">
          <div className="w-full max-w-lg rounded-3xl border border-[#e6dfce] bg-[#fffcf7] p-8 shadow-2xl text-center space-y-6 animate-in fade-in zoom-in-95 duration-200">
            <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-[#ebd9c2] text-[#bf7538] shadow-md">
              {isRejected ? (
                <ShieldAlert className="size-8 text-rose-600" strokeWidth={1.75} />
              ) : (
                <Clock className="size-8 text-[#bf7538] animate-pulse" strokeWidth={1.75} />
              )}
            </div>

            <div className="space-y-2">
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-0.5 font-sans text-xs font-bold uppercase tracking-wider ${
                  isRejected
                    ? "bg-rose-100 text-rose-900 border border-rose-200"
                    : "bg-[#ebd9c2] text-[#bf7538] border border-[#d6cfbe]"
                }`}
              >
                {isRejected ? "Access Denied" : "Verification Pending"}
              </span>

              <h2 className="font-serif text-2xl font-bold tracking-tight text-[#1c2826]">
                {isRejected ? "Account Not Authorized" : "Awaiting Administrator Approval"}
              </h2>

              <div className="rounded-xl bg-[#fbf8f0] p-4 border border-[#e6dfce] my-4 text-left space-y-1.5 shadow-2xs">
                <div className="flex items-center gap-2">
                  <span className="font-sans text-xs font-bold text-[#1c2826]">Google ID:</span>
                  <span className="font-sans text-xs text-[#bf7538] font-bold font-mono">{currentUser.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-sans text-xs font-bold text-[#1c2826]">Name:</span>
                  <span className="font-sans text-xs text-[#4b5563]">{currentUser.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-sans text-xs font-bold text-[#1c2826]">Status:</span>
                  <span className={`font-sans text-xs font-bold ${isRejected ? "text-rose-700" : "text-[#bf7538]"}`}>
                    {isRejected ? "Declined by Administrator" : "Request Submitted • Polling for approval..."}
                  </span>
                </div>
              </div>

              <p className="font-sans text-xs text-[#636c78] leading-relaxed max-w-md mx-auto">
                {isRejected
                  ? "Your access request was declined by the administrator. Contact your cohort lead if you believe this is in error."
                  : "Your Google identity is queued for verification. Once the administrator approves your email, this screen will automatically unlock."}
              </p>
            </div>

            {/* Passcode Unlock Drawer */}
            {showPasscodeField ? (
              <div className="rounded-xl border border-[#e1d5c0] bg-[#f9f5eb] p-3.5 space-y-2 text-left animate-in fade-in">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-[#2f4553] flex items-center gap-1.5">
                    <Ticket className="h-3.5 w-3.5 text-[#bf7538]" />
                    Enter Instant Unlock Passcode
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowPasscodeField(false)}
                    className="text-[11px] text-[#88909b] hover:underline"
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
                    className="flex-1 rounded-md border border-[#cfc4b0] bg-white px-3 py-1.5 text-xs font-mono tracking-wider uppercase text-[#1c2826]"
                  />
                  <Button
                    type="button"
                    size="sm"
                    onClick={handlePasscodeUnlock}
                    className="bg-[#2f4553] text-white hover:bg-[#20313c] text-xs px-3"
                  >
                    Unlock
                  </Button>
                </div>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setShowPasscodeField(true)}
                className="text-xs text-[#bf7538] hover:underline flex items-center justify-center gap-1 mx-auto font-medium"
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
                className="w-full sm:w-auto text-xs border-[#d6cfbe] text-[#2f4553]"
              >
                <RefreshCw className={`size-3.5 mr-1.5 ${isCheckingStatus ? "animate-spin" : ""}`} />
                {isCheckingStatus ? "Checking..." : "Check Status Now"}
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={signOut}
                className="w-full sm:w-auto text-xs border-[#d6cfbe] text-[#636c78]"
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
                className="w-full sm:w-auto text-xs font-bold bg-[#2f4553] text-white hover:bg-[#20313c]"
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
