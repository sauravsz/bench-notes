import { useState } from "react";
import { CheckCircle2, Lock, LogIn, Mail, ShieldAlert, ShieldCheck, User } from "lucide-react";
import { useAccessControl } from "@/lib/auth/access-control";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function GoogleLoginDialog({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose?: () => void;
}) {
  const signInWithGoogle = useAccessControl((s) => s.signInWithGoogle);
  const [emailInput, setEmailInput] = useState("");
  const [nameInput, setNameInput] = useState("");

  if (!isOpen) return null;

  const handleGoogleAuth = (email: string, name: string) => {
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid Google email address");
      return;
    }

    const result = signInWithGoogle({
      email: email.trim(),
      name: name.trim() || email.split("@")[0],
    });

    if (result.isAdmin) {
      toast.success(`Welcome Administrator (${result.user.email})`, {
        description: "Full administrative and verification privileges granted.",
      });
    } else if (result.status === "approved") {
      toast.success(`Welcome back, ${result.user.name}!`, {
        description: "Your Google account is verified.",
      });
    } else {
      toast.info("Access request submitted for verification", {
        description: "The administrator will review and verify your email.",
      });
    }

    onClose?.();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 animate-in fade-in duration-150">
      <div className="w-full max-w-md rounded-2xl border border-line bg-surface p-6 shadow-2xl animate-in zoom-in-95 duration-150 space-y-5">
        {/* Header */}
        <div className="text-center space-y-1.5">
          <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-accent/15 text-accent shadow-2xs">
            <Lock className="size-6" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-ink">
            Google Identity Sign-In
          </h3>
          <p className="font-sans text-xs text-muted max-w-xs mx-auto">
            BenchNotes uses verified Google accounts to protect notes and prevent unauthorized access.
          </p>
        </div>

        {/* 1-Click Quick Accounts for Instant Demo & Admin */}
        <div className="space-y-2">
          <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-muted block">
            Select Your Google Account:
          </span>

          {/* Admin Quick Login */}
          <button
            type="button"
            onClick={() => handleGoogleAuth("varmint-aqua-early@duck.com", "Admin Saurav")}
            className="flex w-full items-center justify-between rounded-xl border border-primary/40 bg-primary/5 p-3 text-left transition-all hover:border-primary hover:bg-primary/10 shadow-2xs"
          >
            <div className="flex items-center gap-2.5">
              <div className="flex size-8 items-center justify-center rounded-full bg-primary text-white font-sans text-xs font-bold">
                A
              </div>
              <div>
                <span className="font-sans text-xs font-bold text-ink block">
                  varmint-aqua-early@duck.com
                </span>
                <span className="font-sans text-[10px] text-accent font-semibold">
                  System Administrator (Full Privileges)
                </span>
              </div>
            </div>
            <span className="rounded bg-primary text-white px-2 py-0.5 text-[10px] font-bold">
              Sign In
            </span>
          </button>
        </div>

        {/* Custom Google Email Input */}
        <div className="space-y-3 pt-2 border-t border-line">
          <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-muted block">
            Or Sign In with Any Student / Cohort Google Email:
          </span>

          <div className="space-y-2">
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
                  placeholder="yourname@gmail.com or @college.edu"
                  className="h-10 w-full rounded-lg border border-line bg-surface pl-9 pr-3 font-sans text-xs text-ink placeholder:text-muted focus:border-accent focus:outline-none"
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
                  placeholder="Student Name"
                  className="h-10 w-full rounded-lg border border-line bg-surface pl-9 pr-3 font-sans text-xs text-ink placeholder:text-muted focus:border-accent focus:outline-none"
                />
              </div>
            </div>
          </div>

          <Button
            type="button"
            onClick={() => handleGoogleAuth(emailInput, nameInput)}
            disabled={!emailInput}
            className="w-full h-10 font-sans text-xs font-bold"
          >
            <LogIn className="size-4 mr-1.5" />
            Authenticate with Google
          </Button>
        </div>

        <p className="text-center font-sans text-[11px] text-muted">
          New student accounts require 1-time administrator verification before accessing study materials.
        </p>
      </div>
    </div>
  );
}
