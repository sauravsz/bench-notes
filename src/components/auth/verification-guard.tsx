import { useState, type ReactNode } from "react";
import {
  Clock,
  GraduationCap,
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

  // If auth is not required, pass through
  if (!authRequired) {
    return <>{children}</>;
  }

  // 1. Not signed in: Show Gate
  if (!currentUser) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center p-4">
        <div className="w-full max-w-md rounded-2xl border border-line bg-surface p-8 shadow-xl text-center space-y-6">
          <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-accent/15 text-accent shadow-2xs">
            <Lock className="size-8" strokeWidth={1.75} />
          </div>

          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-0.5 font-sans text-xs font-bold uppercase tracking-wider text-accent">
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

          <div className="pt-2">
            <Button
              type="button"
              onClick={() => setShowLoginModal(true)}
              className="w-full h-11 font-sans text-sm font-bold gap-2 shadow-sm"
            >
              <LogIn className="size-4" />
              Sign in with Google
            </Button>
          </div>

          <div className="pt-4 border-t border-line/60 text-[11px] text-muted space-y-1">
            <p>Admin: <strong>varmint-aqua-early@duck.com</strong></p>
            <p>New student accounts require 1-time verification to prevent unauthorized access.</p>
          </div>
        </div>

        <GoogleLoginDialog
          isOpen={showLoginModal}
          onClose={() => setShowLoginModal(false)}
        />
      </div>
    );
  }

  // 2. Signed in, but NOT approved (Pending Verification)
  const approved = isApproved(currentUser.email);
  const admin = isAdmin(currentUser.email);

  if (!approved && !admin) {
    const userReq = accessRequests[currentUser.email.toLowerCase()];
    const isRejected = userReq?.status === "rejected";

    return (
      <div className="min-h-screen bg-bg flex items-center justify-center p-4">
        <div className="w-full max-w-lg rounded-2xl border border-line bg-surface p-8 shadow-xl text-center space-y-6">
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
                  ? "bg-rose-100 text-rose-800 dark:bg-rose-950/40 dark:text-rose-300"
                  : "bg-amber-100 text-amber-900 dark:bg-amber-950/40 dark:text-amber-300"
              }`}
            >
              {isRejected ? "Access Denied / Revoked" : "Verification Pending"}
            </span>

            <h2 className="font-serif text-2xl font-bold tracking-tight text-ink">
              {isRejected ? "Account Not Authorized" : "Awaiting Administrator Verification"}
            </h2>

            <div className="rounded-xl bg-bg-warm/70 p-3.5 border border-line/80 my-4 text-left space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-sans text-xs font-bold text-ink">Google Email:</span>
                <span className="font-sans text-xs text-accent font-semibold">{currentUser.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-sans text-xs font-bold text-ink">Name:</span>
                <span className="font-sans text-xs text-muted">{currentUser.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-sans text-xs font-bold text-ink">Status:</span>
                <span className="font-sans text-xs font-bold text-amber-700 dark:text-amber-300">
                  {isRejected ? "Revoked by Administrator" : "Request Submitted • Pending Admin Approval"}
                </span>
              </div>
            </div>

            <p className="font-sans text-xs text-muted leading-relaxed">
              {isRejected
                ? "Your access request was declined by the administrator. Contact the instructor or administrator if you believe this is in error."
                : "Your Google identity is registered. Access to BenchNotes is restricted to verified MBA cohort students. Please notify the administrator (varmint-aqua-early@duck.com) to verify your email."}
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
              onClick={() => setShowLoginModal(true)}
              className="w-full sm:w-auto text-xs"
            >
              Sign In as Admin
            </Button>
          </div>
        </div>

        <GoogleLoginDialog
          isOpen={showLoginModal}
          onClose={() => setShowLoginModal(false)}
        />
      </div>
    );
  }

  // 3. User is Approved or Admin: Render content
  return <>{children}</>;
}
