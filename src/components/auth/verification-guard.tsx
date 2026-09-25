import { useState, type ReactNode } from "react";
import {
  Clock,
  GraduationCap,
  KeyRound,
  Lock,
  LogIn,
  LogOut,
  Mail,
  Shield,
  ShieldAlert,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import { useAccessControl } from "@/lib/auth/access-control";
import { GoogleLoginDialog } from "./google-login-dialog";
import { Button } from "@/components/ui/button";

export function VerificationGuard({ children }: { children: ReactNode }) {
  const currentUser = useAccessControl((s) => s.currentUser);
  const isApproved = useAccessControl((s) => s.isApproved);
  const isAdmin = useAccessControl((s) => s.isAdmin);
  const authRequired = useAccessControl((s) => s.authRequired);
  const signOut = useAccessControl((s) => s.signOut);
  const accessRequests = useAccessControl((s) => s.accessRequests);

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginModalTab, setLoginModalTab] = useState<"student" | "admin">("student");

  // If auth is not required, pass through
  if (!authRequired) {
    return <>{children}</>;
  }

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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-2xl">
          <div className="w-full max-w-md rounded-3xl border border-white/20 bg-surface/95 dark:bg-surface/90 p-8 shadow-2xl text-center space-y-6 animate-in fade-in zoom-in-95 duration-200">
            <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-accent/15 text-accent shadow-2xs">
              <Lock className="size-8" strokeWidth={1.75} />
            </div>

            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3 py-0.5 font-sans text-xs font-bold uppercase tracking-wider text-accent">
                <GraduationCap className="size-3.5" />
                MBA Academic Suite
              </span>
              <h1 className="font-serif text-3xl font-bold tracking-tight text-ink">
                Bench Notes
              </h1>
              <p className="font-sans text-xs text-muted leading-relaxed max-w-xs mx-auto">
                Access is restricted to verified MBA cohort students. Please authenticate with your Google account.
              </p>
            </div>

            <div className="pt-2 space-y-2.5">
              <Button
                type="button"
                onClick={() => {
                  setLoginModalTab("student");
                  setShowLoginModal(true);
                }}
                className="w-full h-11 font-sans text-sm font-bold gap-2 shadow-sm"
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
                className="w-full py-2 font-sans text-xs font-semibold text-muted hover:text-ink flex items-center justify-center gap-1.5 transition-colors"
              >
                <KeyRound className="size-3.5" />
                <span>Administrator Access</span>
              </button>
            </div>

            <div className="pt-4 border-t border-line/60 text-[11px] text-muted">
              <p>New student accounts require 1-time verification to prevent unauthorized access.</p>
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-2xl">
          <div className="w-full max-w-lg rounded-3xl border border-white/20 bg-surface/95 dark:bg-surface/90 p-8 shadow-2xl text-center space-y-6 animate-in fade-in zoom-in-95 duration-200">
            <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-600 shadow-2xs">
              {isRejected ? (
                <ShieldAlert className="size-8 text-rose-600" strokeWidth={1.75} />
              ) : (
                <Clock className="size-8 text-amber-600" strokeWidth={1.75} />
              )}
            </div>

            <div className="space-y-2">
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-0.5 font-sans text-xs font-bold uppercase tracking-wider ${
                  isRejected
                    ? "bg-rose-100 text-rose-900 dark:bg-rose-950/60 dark:text-rose-200"
                    : "bg-amber-100 text-amber-900 dark:bg-amber-950/60 dark:text-amber-200"
                }`}
              >
                {isRejected ? "Access Denied / Revoked" : "Verification Pending"}
              </span>

              <h2 className="font-serif text-2xl font-bold tracking-tight text-ink">
                {isRejected ? "Account Not Authorized" : "Awaiting Administrator Verification"}
              </h2>

              <div className="rounded-xl bg-bg-warm/90 p-4 border border-line my-4 text-left space-y-1.5 shadow-2xs">
                <div className="flex items-center gap-2">
                  <span className="font-sans text-xs font-bold text-ink">Google Email:</span>
                  <span className="font-sans text-xs text-accent font-bold">{currentUser.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-sans text-xs font-bold text-ink">Name:</span>
                  <span className="font-sans text-xs text-ink-soft">{currentUser.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-sans text-xs font-bold text-ink">Status:</span>
                  <span className={`font-sans text-xs font-bold ${isRejected ? "text-rose-700 dark:text-rose-300" : "text-amber-800 dark:text-amber-300"}`}>
                    {isRejected ? "Revoked by Administrator" : "Request Submitted • Pending Admin Approval"}
                  </span>
                </div>
              </div>

              <p className="font-sans text-xs text-muted leading-relaxed max-w-md mx-auto">
                {isRejected
                  ? "Your access request was declined by the administrator. Contact the instructor if you believe this is in error."
                  : "Your Google identity is registered. Access to BenchNotes is restricted to verified MBA cohort students. Please notify the administrator to approve your email."}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={signOut}
                className="w-full sm:w-auto text-xs"
              >
                <LogOut className="size-3.5 mr-1.5" />
                Sign Out / Switch Account
              </Button>
              <Button
                type="button"
                onClick={() => {
                  setLoginModalTab("admin");
                  setShowLoginModal(true);
                }}
                className="w-full sm:w-auto text-xs font-bold"
              >
                <KeyRound className="size-3.5 mr-1.5" />
                Admin Password Login
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
