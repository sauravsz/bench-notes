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
          theme: "outline",
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4 animate-in fade-in duration-200">
      <div
        className="w-full max-w-md overflow-hidden rounded-2xl bg-[#fffcf7] border border-[#d6cfbe] shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="border-b border-[#e6dfce] bg-[#f7f2e6] px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2f4553] text-[#fffcf7] shadow-xs">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold tracking-tight text-[#1c2826]">
                  Bench Notes
                </h3>
                <p className="text-xs text-[#636c78]">
                  Academic Suite Identity & Access Gate
                </p>
              </div>
            </div>
            {onClose && (
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg p-1.5 text-[#88909b] hover:bg-[#eadecc] hover:text-[#1c2826] transition-colors"
              >
                ✕
              </button>
            )}
          </div>

          {/* Navigation Tabs */}
          <div className="mt-4 flex rounded-lg bg-[#ebd9c2]/50 p-1 border border-[#e1d5c2]">
            <button
              type="button"
              onClick={() => setActiveTab("student")}
              className={cn(
                "flex flex-1 items-center justify-center gap-2 rounded-md py-1.5 text-xs font-semibold transition-all",
                activeTab === "student"
                  ? "bg-[#fffcf7] text-[#1c2826] shadow-xs"
                  : "text-[#68707a] hover:text-[#1c2826]",
              )}
            >
              <LogIn className="h-3.5 w-3.5" />
              Student Google Access
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("admin")}
              className={cn(
                "flex flex-1 items-center justify-center gap-2 rounded-md py-1.5 text-xs font-semibold transition-all",
                activeTab === "admin"
                  ? "bg-[#fffcf7] text-[#1c2826] shadow-xs"
                  : "text-[#68707a] hover:text-[#1c2826]",
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
              <div className="rounded-xl border border-[#e0d6c4] bg-[#fbf8f0] p-4 text-xs text-[#4b5563] space-y-1">
                <div className="flex items-center gap-1.5 font-semibold text-[#1c2826]">
                  <Sparkles className="h-4 w-4 text-[#bf7538]" />
                  Protected Study Notes Access
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
                  <span className="w-full border-t border-[#e2d8c5]" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-[#fffcf7] px-2 text-[#88909b] font-mono text-[10px]">
                    Google Identity Sign-In
                  </span>
                </div>
              </div>

              {/* Fast Google Email Form */}
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-[#2f4553] mb-1">
                    Google Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 h-4 w-4 text-[#88909b]" />
                    <input
                      type="email"
                      placeholder="student@gmail.com or @college.edu"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleStudentAuth()}
                      className="w-full rounded-lg border border-[#cfc4b0] bg-white pl-9 pr-3 py-2 text-sm text-[#1c2826] placeholder:text-[#a09c94] focus:border-[#2f4553] focus:outline-none focus:ring-1 focus:ring-[#2f4553]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2f4553] mb-1">
                    Student / Cohort Name <span className="font-normal text-[#88909b]">(Optional)</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 h-4 w-4 text-[#88909b]" />
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      value={nameInput}
                      onChange={(e) => setNameInput(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleStudentAuth()}
                      className="w-full rounded-lg border border-[#cfc4b0] bg-white pl-9 pr-3 py-2 text-sm text-[#1c2826] placeholder:text-[#a09c94] focus:border-[#2f4553] focus:outline-none focus:ring-1 focus:ring-[#2f4553]"
                    />
                  </div>
                </div>

                {/* Optional Passcode Unlock Field */}
                {showPasscodeOption ? (
                  <div className="rounded-lg border border-[#e1d5c0] bg-[#f9f5eb] p-3 space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-semibold text-[#2f4553] flex items-center gap-1.5">
                        <Ticket className="h-3.5 w-3.5 text-[#bf7538]" />
                        Cohort Passcode / Access Token
                      </label>
                      <button
                        type="button"
                        onClick={() => setShowPasscodeOption(false)}
                        className="text-[11px] text-[#88909b] hover:underline"
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
                        className="flex-1 rounded-md border border-[#cfc4b0] bg-white px-3 py-1.5 text-xs font-mono tracking-wider uppercase text-[#1c2826]"
                      />
                      <Button
                        type="button"
                        size="sm"
                        onClick={handlePasscodeDirectUnlock}
                        disabled={isSubmitting || !passcodeInput.trim()}
                        className="bg-[#2f4553] text-white hover:bg-[#20313c] text-xs px-3"
                      >
                        Unlock
                      </Button>
                    </div>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowPasscodeOption(true)}
                    className="text-xs text-[#bf7538] hover:text-[#9c5923] flex items-center gap-1 font-medium transition-colors"
                  >
                    <Ticket className="h-3.5 w-3.5" />
                    Have an instant access passcode? Enter code
                  </button>
                )}

                <Button
                  type="button"
                  onClick={handleStudentAuth}
                  disabled={isSubmitting || !emailInput.trim()}
                  className="w-full bg-[#bf7538] hover:bg-[#a6622b] text-white font-medium py-2.5 rounded-lg shadow-xs transition-all flex items-center justify-center gap-2 text-sm mt-2"
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
              <div className="rounded-xl border border-[#e0d6c4] bg-[#fbf8f0] p-4 text-xs text-[#4b5563] space-y-1">
                <div className="flex items-center gap-1.5 font-semibold text-[#1c2826]">
                  <Shield className="h-4 w-4 text-[#2f4553]" />
                  Master Administrator Access
                </div>
                <p>
                  Access verification dashboard to approve pending students, manage whitelists, and configure access permissions.
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2f4553] mb-1">
                  Master Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-2.5 h-4 w-4 text-[#88909b]" />
                  <input
                    type="password"
                    placeholder="Enter admin password (default: admin)"
                    value={adminPasswordInput}
                    onChange={(e) => setAdminPasswordInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleAdminAuth()}
                    className="w-full rounded-lg border border-[#cfc4b0] bg-white pl-9 pr-3 py-2 text-sm text-[#1c2826] placeholder:text-[#a09c94] focus:border-[#2f4553] focus:outline-none focus:ring-1 focus:ring-[#2f4553]"
                  />
                </div>
              </div>

              <Button
                type="button"
                onClick={handleAdminAuth}
                disabled={isSubmitting || !adminPasswordInput}
                className="w-full bg-[#2f4553] hover:bg-[#20313c] text-white font-medium py-2.5 rounded-lg shadow-xs transition-all flex items-center justify-center gap-2 text-sm"
              >
                <Lock className="h-4 w-4" />
                {isSubmitting ? "Verifying Credentials..." : "Unlock Administrator Panel"}
              </Button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-[#e6dfce] bg-[#fbf8f0] px-6 py-3 text-center">
          <p className="text-[11px] text-[#88909b] flex items-center justify-center gap-1">
            <CheckCircle2 className="h-3 w-3 text-[#2f4553]" />
            Bench Notes Verification System • IIM Ahmedabad Academic Suite
          </p>
        </div>
      </div>
    </div>
  );
}
