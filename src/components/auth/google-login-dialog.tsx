import { useState, useEffect, useRef } from "react";
import {
  CheckCircle2,
  KeyRound,
  Lock,
  LogIn,
  Mail,
  Shield,
  ShieldCheck,
  User,
  Ticket,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { useAccessControl } from "@/lib/auth/access-control";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (config: {
            client_id: string;
            callback: (response: { credential: string }) => void;
            auto_select?: boolean;
            cancel_on_tap_outside?: boolean;
          }) => void;
          renderButton: (
            parent: HTMLElement,
            options: {
              theme?: "outline" | "filled_blue" | "filled_black";
              size?: "large" | "medium" | "small";
              text?: "signin_with" | "signup_with" | "continue_with" | "signin";
              shape?: "rectangular" | "pill" | "circle" | "square";
              width?: string | number;
            },
          ) => void;
          prompt: () => void;
        };
      };
    };
  }
}

export function GoogleLoginDialog({
  isOpen,
  onClose,
  initialTab = "student",
}: {
  isOpen: boolean;
  onClose?: () => void;
  initialTab?: "student" | "admin";
}) {
  const signInWithGoogle = useAccessControl((s) => s.signInWithGoogle);
  const signInWithGoogleToken = useAccessControl((s) => s.signInWithGoogleToken);
  const verifyWithPasscode = useAccessControl((s) => s.verifyWithPasscode);
  const signInAsAdminWithPassword = useAccessControl(
    (s) => s.signInAsAdminWithPassword,
  );

  const [activeTab, setActiveTab] = useState<"student" | "admin">(initialTab);
  const [emailInput, setEmailInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [passcodeInput, setPasscodeInput] = useState("");
  const [showPasscodeOption, setShowPasscodeOption] = useState(false);
  const [adminPasswordInput, setAdminPasswordInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [gsiLoaded, setGsiLoaded] = useState(false);

  const googleBtnRef = useRef<HTMLDivElement>(null);

  // Load Google Identity Services SDK
  useEffect(() => {
    if (!isOpen) return;

    const existingScript = document.getElementById("google-gsi-script");
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "google-gsi-script";
      script.src = "https://accounts.google.com/gsi/client";
      script.async = true;
      script.defer = true;
      script.onload = () => setGsiLoaded(true);
      document.body.appendChild(script);
    } else if (window.google?.accounts?.id) {
      setGsiLoaded(true);
    }
  }, [isOpen]);

  // Render Google Sign-in button if client ID is configured
  useEffect(() => {
    const clientId =
      (import.meta as unknown as { env?: Record<string, string> }).env?.VITE_GOOGLE_CLIENT_ID ||
      "";

    if (gsiLoaded && window.google?.accounts?.id && googleBtnRef.current && clientId) {
      try {
        window.google.accounts.id.initialize({
          client_id: clientId,
          callback: async (response) => {
            if (response.credential) {
              setIsSubmitting(true);
              try {
                const res = await signInWithGoogleToken(response.credential);
                if (res.isApproved || res.isAdmin) {
                  toast.success("Welcome to Bench Notes!", {
                    description: `Signed in as ${res.user.email}`,
                  });
                } else {
                  toast.info("Verification Request Submitted", {
                    description: "Your Google ID has been queued for administrator approval.",
                  });
                }
                onClose?.();
              } catch (err: unknown) {
                toast.error("Google authentication failed", {
                  description: err instanceof Error ? err.message : "Unknown error",
                });
              } finally {
                setIsSubmitting(false);
              }
            }
          },
        });

        googleBtnRef.current.innerHTML = "";
        window.google.accounts.id.renderButton(googleBtnRef.current, {
          theme: "filled_black",
          size: "large",
          text: "continue_with",
          shape: "pill",
          width: 320,
        });
      } catch {
        // non-fatal
      }
    }
  }, [gsiLoaded, signInWithGoogleToken, onClose]);

  if (!isOpen) return null;

  const handleStudentAuth = async () => {
    if (!emailInput || !emailInput.includes("@")) {
      toast.error("Valid email required", {
        description: "Please enter your Google account email address.",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await signInWithGoogle({
        email: emailInput.trim(),
        name: nameInput.trim() || undefined,
        accessCode: passcodeInput.trim() || undefined,
      });

      if (result.isAdmin) {
        toast.success("Welcome Administrator", {
          description: "Full access and administrative control unlocked.",
        });
      } else if (result.status === "approved") {
        toast.success("Access Granted", {
          description: `Welcome to Bench Notes, ${result.user.name}!`,
        });
      } else {
        toast.info("Access Request Submitted", {
          description: `Google ID ${emailInput.trim()} registered. Access granted once verified.`,
        });
      }

      onClose?.();
    } catch {
      toast.error("Authentication error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePasscodeDirectUnlock = async () => {
    if (!passcodeInput.trim()) {
      toast.error("Passcode required");
      return;
    }

    setIsSubmitting(true);
    try {
      const email = emailInput.trim() || `student_${Date.now().toString(36)}@benchnotes.org`;
      const res = await verifyWithPasscode(passcodeInput.trim(), email, nameInput.trim() || undefined);
      if (res.success) {
        toast.success("Passcode Verified!", {
          description: "Full access to syllabus and case notes unlocked.",
        });
        onClose?.();
      } else {
        toast.error("Invalid Passcode", {
          description: res.error || "Please check your passcode with the administrator.",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAdminAuth = async () => {
    if (!adminPasswordInput) {
      toast.error("Admin Password Required");
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await signInAsAdminWithPassword(adminPasswordInput);
      if (result.success) {
        toast.success("Administrator Authenticated", {
          description: "Admin panel and verification gate management active.",
        });
        onClose?.();
      } else {
        toast.error("Authentication Failed", {
          description: result.error || "Invalid administrator credentials.",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xl p-4 animate-in fade-in duration-200">
      <div
        className="w-full max-w-md overflow-hidden rounded-[28px] bg-[#141414] border border-[#262626] shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="border-b border-[#262626] bg-[#181818] px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1c1c1c] border border-[#262626] text-white shadow-xs">
                <ShieldCheck className="h-5 w-5 text-[#0099ff]" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold tracking-tight text-white">
                  Bench Notes
                </h3>
                <p className="font-mono text-xs text-[#999999]">
                  Academic Suite Identity Gate
                </p>
              </div>
            </div>
            {onClose && (
              <button
                type="button"
                onClick={onClose}
                className="rounded-full p-1.5 text-[#666666] hover:bg-[#1c1c1c] hover:text-white transition-colors"
              >
                ✕
              </button>
            )}
          </div>

          {/* Navigation Tabs (Framer Pill Switcher) */}
          <div className="mt-4 flex rounded-full bg-[#1c1c1c] p-1 border border-[#262626]">
            <button
              type="button"
              onClick={() => setActiveTab("student")}
              className={cn(
                "flex flex-1 items-center justify-center gap-2 rounded-full py-1.5 text-xs font-semibold transition-all",
                activeTab === "student"
                  ? "bg-white text-black shadow-xs"
                  : "text-[#999999] hover:text-white",
              )}
            >
              <LogIn className="h-3.5 w-3.5" />
              Student Google
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("admin")}
              className={cn(
                "flex flex-1 items-center justify-center gap-2 rounded-full py-1.5 text-xs font-semibold transition-all",
                activeTab === "admin"
                  ? "bg-white text-black shadow-xs"
                  : "text-[#999999] hover:text-white",
              )}
            >
              <KeyRound className="h-3.5 w-3.5" />
              Admin Portal
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {activeTab === "student" ? (
            <div className="space-y-4">
              <div className="rounded-[18px] border border-[#262626] bg-[#1c1c1c]/70 p-4 text-xs text-[#999999] space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-white">
                  <Sparkles className="h-4 w-4 text-[#0099ff]" />
                  Protected MBA Academic Notes
                </div>
                <p>
                  Sign in with your Google Account. Access is verified to prevent unauthorized distribution of academic materials.
                </p>
              </div>

              {/* Official Google GSI button container */}
              <div ref={googleBtnRef} className="flex justify-center" />

              {/* Divider */}
              <div className="relative my-3">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-[#262626]" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-[#141414] px-2 text-[#666666] font-mono text-[10px]">
                    Google Identity Sign-In
                  </span>
                </div>
              </div>

              {/* Fast Google Email Form */}
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-white mb-1.5">
                    Google Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-2.5 h-4 w-4 text-[#666666]" />
                    <input
                      type="email"
                      placeholder="student@gmail.com or @college.edu"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleStudentAuth()}
                      className="w-full rounded-full border border-[#262626] bg-[#090909] pl-10 pr-4 py-2 text-xs text-white placeholder:text-[#666666] focus:border-[#0099ff] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white mb-1.5">
                    Student / Cohort Name <span className="font-normal text-[#666666]">(Optional)</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-2.5 h-4 w-4 text-[#666666]" />
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      value={nameInput}
                      onChange={(e) => setNameInput(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleStudentAuth()}
                      className="w-full rounded-full border border-[#262626] bg-[#090909] pl-10 pr-4 py-2 text-xs text-white placeholder:text-[#666666] focus:border-[#0099ff] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Optional Passcode Unlock Field */}
                {showPasscodeOption ? (
                  <div className="rounded-[18px] border border-[#262626] bg-[#1c1c1c] p-3.5 space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-semibold text-white flex items-center gap-1.5">
                        <Ticket className="h-3.5 w-3.5 text-[#0099ff]" />
                        Cohort Passcode / Access Token
                      </label>
                      <button
                        type="button"
                        onClick={() => setShowPasscodeOption(false)}
                        className="text-[11px] text-[#666666] hover:text-white"
                      >
                        Hide
                      </button>
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="e.g. BENCH2026"
                        value={passcodeInput}
                        onChange={(e) => setPasscodeInput(e.target.value.toUpperCase())}
                        className="flex-1 rounded-full border border-[#262626] bg-[#090909] px-3.5 py-1.5 text-xs font-mono tracking-wider uppercase text-white focus:border-[#0099ff] focus:outline-none"
                      />
                      <Button
                        type="button"
                        size="sm"
                        onClick={handlePasscodeDirectUnlock}
                        disabled={isSubmitting || !passcodeInput.trim()}
                        className="bg-white text-black hover:bg-white/90 text-xs px-4 rounded-full font-bold"
                      >
                        Unlock
                      </Button>
                    </div>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowPasscodeOption(true)}
                    className="text-xs text-[#0099ff] hover:underline flex items-center gap-1 font-medium transition-colors"
                  >
                    <Ticket className="h-3.5 w-3.5" />
                    Have an instant access passcode? Enter code
                  </button>
                )}

                <Button
                  type="button"
                  onClick={handleStudentAuth}
                  disabled={isSubmitting || !emailInput.trim()}
                  className="w-full bg-white hover:bg-white/90 text-black font-bold py-2.5 rounded-full shadow-sm transition-all flex items-center justify-center gap-2 text-xs mt-2 ios-press"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                  </svg>
                  {isSubmitting ? "Authenticating..." : "Continue with Google ID"}
                </Button>
              </div>
            </div>
          ) : (
            /* Admin Portal Form */
            <div className="space-y-4">
              <div className="rounded-[18px] border border-[#262626] bg-[#1c1c1c]/70 p-4 text-xs text-[#999999] space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-white">
                  <Shield className="h-4 w-4 text-[#0099ff]" />
                  Master Administrator Access
                </div>
                <p>
                  Access verification dashboard to approve pending students, manage whitelists, and configure access permissions.
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-white mb-1.5">
                  Master Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-2.5 h-4 w-4 text-[#666666]" />
                  <input
                    type="password"
                    placeholder="Enter admin password (default: admin)"
                    value={adminPasswordInput}
                    onChange={(e) => setAdminPasswordInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleAdminAuth()}
                    className="w-full rounded-full border border-[#262626] bg-[#090909] pl-10 pr-4 py-2 text-xs text-white placeholder:text-[#666666] focus:border-[#0099ff] focus:outline-none"
                  />
                </div>
              </div>

              <Button
                type="button"
                onClick={handleAdminAuth}
                disabled={isSubmitting || !adminPasswordInput}
                className="w-full bg-white hover:bg-white/90 text-black font-bold py-2.5 rounded-full shadow-sm transition-all flex items-center justify-center gap-2 text-xs ios-press"
              >
                <Lock className="h-4 w-4" />
                {isSubmitting ? "Verifying Credentials..." : "Unlock Administrator Panel"}
              </Button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-[#262626] bg-[#181818] px-6 py-3 text-center">
          <p className="font-mono text-[11px] text-[#666666] flex items-center justify-center gap-1.5">
            <CheckCircle2 className="h-3 w-3 text-[#22c55e]" />
            Bench Notes Verification • MBA Academic Suite
          </p>
        </div>
      </div>
    </div>
  );
}
