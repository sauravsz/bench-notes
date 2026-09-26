import { useState } from "react";
import { CheckCircle2, KeyRound, Lock, LogIn, Mail, Shield, ShieldCheck, User } from "lucide-react";
import { useAccessControl } from "@/lib/auth/access-control";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

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
  const signInAsAdminWithPassword = useAccessControl(
    (s) => s.signInAsAdminWithPassword,
  );

  const [activeTab, setActiveTab] = useState<"student" | "admin">(initialTab);
  const [emailInput, setEmailInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [adminPasswordInput, setAdminPasswordInput] = useState("");

  if (!isOpen) return null;

  const handleStudentAuth = async () => {
    if (!emailInput || !emailInput.includes("@")) {
      toast.error("Please enter a valid Google email address");
      return;
    }

    const result = await signInWithGoogle({
      email: emailInput.trim(),
      name: nameInput.trim() || emailInput.split("@")[0],
    });
    if (result.isAdmin) {
      toast.success("Administrator privileges active", {
        description: "Full management and verification privileges granted.",
      });
    } else if (result.status === "approved") {
      toast.success(`Welcome back, ${result.user.name}!`, {
        description: "Your account is verified.",
      });
    } else {
      toast.info("Access request submitted for verification", {
        description: "The administrator will review and verify your access.",
      });
    }

    onClose?.();
  };

  const handleAdminAuth = async () => {
    if (!adminPasswordInput) {
      toast.error("Please enter the administrator password");
      return;
    }

    const res = await signInAsAdminWithPassword(adminPasswordInput);
    if (res.success) {
      toast.success("Administrator Authenticated", {
        description: "Full master administrative privileges unlocked.",
      });
      setAdminPasswordInput("");
      onClose?.();
    } else {
      toast.error("Incorrect administrator password");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 transition-opacity duration-300">
      <div className="w-full max-w-md rounded-2xl border border-line bg-surface p-6 shadow-2xl ios-scale-in space-y-5">
        {/* Header */}
        <div className="text-center space-y-1.5">
          <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-accent/15 text-accent shadow-2xs">
            <Lock className="size-6" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-ink">
            BenchNotes Identity Access
          </h3>
          <p className="font-sans text-xs text-muted max-w-xs mx-auto">
            Protected academic portal for verified MBA cohort students and faculty.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex rounded-xl bg-bg-warm p-1 text-xs font-semibold">
          <button
            type="button"
            onClick={() => setActiveTab("student")}
            className={cn(
              "flex-1 rounded-lg py-2 transition-all duration-200 ios-press-subtle flex items-center justify-center gap-1.5",
              activeTab === "student"
                ? "bg-surface text-ink font-bold shadow-xs scale-102"
                : "text-muted hover:text-ink",
            )}
          >
            <User className="size-3.5" />
            <span>Student Sign-In</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("admin")}
            className={cn(
              "flex-1 rounded-lg py-2 transition-all duration-200 ios-press-subtle flex items-center justify-center gap-1.5",
              activeTab === "admin"
                ? "bg-surface text-ink font-bold shadow-xs scale-102"
                : "text-muted hover:text-ink",
            )}
          >
            <KeyRound className="size-3.5" />
            <span>Admin Login</span>
          </button>
        </div>

        {/* Tab 1: Student Google Sign In */}
        {activeTab === "student" && (
          <div className="space-y-4">
            <div className="space-y-3">
              <div>
                <label className="block mb-1 font-sans text-xs font-semibold text-ink">
                  Google Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-2.5 size-4 text-muted" />
                  <input
                    type="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleStudentAuth();
                      }
                    }}
                    placeholder="student@gmail.com or @college.edu"
                    className="h-10 w-full rounded-lg border border-line bg-surface pl-9 pr-3 font-sans text-xs text-ink placeholder:text-muted focus:border-accent focus:outline-none"
                    autoFocus
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1 font-sans text-xs font-semibold text-ink">
                  Full Name (Optional)
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-2.5 size-4 text-muted" />
                  <input
                    type="text"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleStudentAuth();
                      }
                    }}
                    placeholder="Your Full Name"
                    className="h-10 w-full rounded-lg border border-line bg-surface pl-9 pr-3 font-sans text-xs text-ink placeholder:text-muted focus:border-accent focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <Button
              type="button"
              onClick={handleStudentAuth}
              disabled={!emailInput}
              className="w-full h-10 font-sans text-xs font-bold gap-2 shadow-sm ios-press"
            >
              <LogIn className="size-4" />
              Sign in with Google
            </Button>

            <p className="text-center font-sans text-[11px] text-muted">
              First-time sign-ins are verified by the administrator to prevent unauthorized access.
            </p>
          </div>
        )}

        {/* Tab 2: Admin Password Access */}
        {activeTab === "admin" && (
          <div className="space-y-4">
            <div>
              <label className="block mb-1 font-sans text-xs font-semibold text-ink">
                Master Administrator Password
              </label>
              <div className="relative">
                <KeyRound className="absolute left-3 top-2.5 size-4 text-muted" />
                <input
                  type="password"
                  value={adminPasswordInput}
                  onChange={(e) => setAdminPasswordInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleAdminAuth();
                    }
                  }}
                  placeholder="Enter administrator password"
                  className="h-10 w-full rounded-lg border border-line bg-surface pl-9 pr-3 font-sans text-xs text-ink placeholder:text-muted focus:border-accent focus:outline-none"
                  autoFocus
                />
              </div>
            </div>

            <Button
              type="button"
              onClick={handleAdminAuth}
              disabled={!adminPasswordInput}
              className="w-full h-10 font-sans text-xs font-bold gap-2 bg-primary hover:bg-primary/90 text-white shadow-sm ios-press"
            >
              <ShieldCheck className="size-4" />
              Unlock Administrator Access
            </Button>

            <p className="text-center font-sans text-[11px] text-muted">
              Authorized administrator access unlocks full verification controls at <code>/admin</code>.
            </p>
          </div>
        )}

        {onClose && (
          <div className="pt-2 border-t border-line/60 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="text-xs font-medium text-muted hover:text-ink transition-all duration-200 ios-press"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
