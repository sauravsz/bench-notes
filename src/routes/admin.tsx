import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  Check,
  CheckCircle2,
  Clock,
  Globe,
  Lock,
  Mail,
  Plus,
  RotateCcw,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Trash2,
  UserCheck,
  UserPlus,
  Users,
  X,
  XCircle,
} from "lucide-react";
import { useAccessControl } from "@/lib/auth/access-control";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/admin")({ component: AdminDashboard });

function AdminDashboard() {
  const currentUser = useAccessControl((s) => s.currentUser);
  const isAdmin = useAccessControl((s) => s.isAdmin(s.currentUser?.email));
  const adminEmails = useAccessControl((s) => s.adminEmails);
  const whitelistedEmails = useAccessControl((s) => s.whitelistedEmails);
  const accessRequests = useAccessControl((s) => s.accessRequests);
  const authRequired = useAccessControl((s) => s.authRequired);
  const setAuthRequired = useAccessControl((s) => s.setAuthRequired);
  const syncWithServer = useAccessControl((s) => s.syncWithServer);
  const approveRequest = useAccessControl((s) => s.approveRequest);
  const rejectRequest = useAccessControl((s) => s.rejectRequest);
  const deleteRequest = useAccessControl((s) => s.deleteRequest);
  const addWhitelistEntry = useAccessControl((s) => s.addWhitelistEntry);
  const removeWhitelistEntry = useAccessControl((s) => s.removeWhitelistEntry);

  const [newEmailInput, setNewEmailInput] = useState("");
  const [activeTab, setActiveTab] = useState<"pending" | "approved" | "whitelist">("pending");

  // Real-time server sync every 3 seconds
  useEffect(() => {
    syncWithServer();
    const interval = setInterval(() => {
      syncWithServer();
    }, 3000);
    return () => clearInterval(interval);
  }, [syncWithServer]);

  // Non-Admin protection
  if (!currentUser || !isAdmin) {
    return (
      <main className="min-h-screen px-4 py-16 sm:px-10 flex items-center justify-center">
        <div className="w-full max-w-md rounded-2xl border border-line bg-surface p-8 text-center space-y-4 shadow-xl">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-rose-500/15 text-rose-600">
            <ShieldAlert className="size-7" />
          </div>
          <h1 className="font-serif text-2xl font-bold text-ink">
            Administrator Access Required
          </h1>
          <p className="font-sans text-xs text-muted leading-relaxed">
            This verification panel is restricted to the administrator account (<strong>varmint-aqua-early@duck.com</strong>).
          </p>
          <div className="pt-2">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-2 font-sans text-xs font-bold text-white shadow-sm hover:bg-accent/90"
            >
              <ArrowLeft className="size-4" />
              Return to Syllabus
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const allRequests = Object.values(accessRequests);
  const pendingRequests = allRequests.filter((r) => r.status === "pending");
  const approvedRequests = allRequests.filter((r) => r.status === "approved");

  const handleAddWhitelist = () => {
    const clean = newEmailInput.trim().toLowerCase();
    if (!clean) return;
    addWhitelistEntry(clean);
    toast.success(`Added ${clean} to pre-approved whitelist`);
    setNewEmailInput("");
  };

  return (
    <main className="px-4 py-8 sm:px-10 sm:py-10 ios-fade-up">
      <div className="mx-auto max-w-4xl space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-line pb-6">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary text-white px-2.5 py-0.5 font-sans text-xs font-bold">
                <ShieldCheck className="size-3.5" />
                Administrator Panel
              </span>
              <span className="font-sans text-xs text-muted">
                Signed in as: <strong>{currentUser.email}</strong>
              </span>
            </div>
            <h1 className="font-serif text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              User Access & Verification Gate
            </h1>
            <p className="mt-1 font-sans text-xs text-muted">
              Verify student Google accounts, manage whitelist domains, and protect notes from unauthorized access.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="flex items-center gap-2">
            <div className="rounded-xl border border-line bg-surface px-3 py-2 text-center shadow-2xs transition-transform duration-200 hover:-translate-y-0.5">
              <span className="text-[10px] font-semibold text-muted block">Pending</span>
              <span className="font-serif text-lg font-bold text-amber-600">{pendingRequests.length}</span>
            </div>
            <div className="rounded-xl border border-line bg-surface px-3 py-2 text-center shadow-2xs transition-transform duration-200 hover:-translate-y-0.5">
              <span className="text-[10px] font-semibold text-muted block">Approved</span>
              <span className="font-serif text-lg font-bold text-emerald-600">{approvedRequests.length}</span>
            </div>
          </div>
        </div>

        {/* Global Protection Toggle Card */}
        <div className="rounded-2xl border border-line bg-surface p-5 shadow-xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 transition-all duration-200 ios-card">
          <div className="space-y-1">
            <span className="font-serif text-base font-bold text-ink block">
              Google Sign-In & Verification Gate: {authRequired ? "ENFORCED (ACTIVE)" : "DISABLED"}
            </span>
            <p className="font-sans text-xs text-muted max-w-xl">
              When enforced, all visitors must authenticate with Google and have their email approved by you before accessing study notes.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-sans text-xs font-bold text-ink">
              {authRequired ? "Gate Active" : "Gate Off"}
            </span>
            <Switch
              checked={authRequired}
              onCheckedChange={(checked) => {
                setAuthRequired(checked);
                if (checked) {
                  toast.success("Verification Gate enabled");
                } else {
                  toast.warning("Verification Gate disabled - all visitors can access");
                }
              }}
            />
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 border-b border-line pb-1 text-xs">
          <button
            type="button"
            onClick={() => setActiveTab("pending")}
            className={cn(
              "flex items-center gap-1.5 rounded-lg px-3 py-2 font-sans font-bold transition-all duration-200 ios-press",
              activeTab === "pending"
                ? "bg-ink text-surface shadow-2xs scale-102"
                : "text-muted hover:text-ink hover:bg-bg-warm",
            )}
          >
            <Clock className="size-3.5" />
            <span>Pending Requests</span>
            {pendingRequests.length > 0 ? (
              <span className="rounded-full bg-amber-500 text-white px-1.5 py-0.2 text-[10px]">
                {pendingRequests.length}
              </span>
            ) : null}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("approved")}
            className={cn(
              "flex items-center gap-1.5 rounded-lg px-3 py-2 font-sans font-bold transition-all duration-200 ios-press",
              activeTab === "approved"
                ? "bg-ink text-surface shadow-2xs scale-102"
                : "text-muted hover:text-ink hover:bg-bg-warm",
            )}
          >
            <CheckCircle2 className="size-3.5" />
            <span>Approved Students ({approvedRequests.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("whitelist")}
            className={cn(
              "flex items-center gap-1.5 rounded-lg px-3 py-2 font-sans font-bold transition-all duration-200 ios-press",
              activeTab === "whitelist"
                ? "bg-ink text-surface shadow-2xs scale-102"
                : "text-muted hover:text-ink hover:bg-bg-warm",
            )}
          >
            <UserPlus className="size-3.5" />
            <span>Pre-Approved Whitelist ({whitelistedEmails.length})</span>
          </button>
        </div>

        {/* Tab 1: Pending Requests Queue */}
        {activeTab === "pending" && (
          <div className="space-y-4">
            {pendingRequests.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-line p-10 text-center space-y-2">
                <CheckCircle2 className="mx-auto size-8 text-emerald-600/60" />
                <p className="font-serif text-base font-bold text-ink">
                  No Pending Access Requests
                </p>
                <p className="font-sans text-xs text-muted max-w-sm mx-auto">
                  When students sign in with Google for the first time, their verification requests will appear here for 1-click approval.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {pendingRequests.map((req) => (
                  <div
                    key={req.email}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-xl border border-amber-300 dark:border-amber-900 bg-amber-50/40 dark:bg-amber-950/20 p-4 shadow-2xs"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-serif text-base font-bold text-ink">
                          {req.name || req.email.split("@")[0]}
                        </span>
                        <span className="rounded bg-amber-200/80 dark:bg-amber-900/60 text-amber-900 dark:text-amber-200 px-2 py-0.2 text-[10px] font-bold">
                          Pending Approval
                        </span>
                      </div>
                      <p className="font-sans text-xs font-semibold text-accent flex items-center gap-1">
                        <Mail className="size-3.5" />
                        {req.email}
                      </p>
                      <span className="font-sans text-[10px] text-muted block">
                        Requested on: {new Date(req.requestedAt).toLocaleString()}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button
                        type="button"
                        size="sm"
                        onClick={() => {
                          approveRequest(req.email);
                          toast.success(`Approved access for ${req.email}`);
                        }}
                        className="h-8 gap-1 font-sans text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white"
                      >
                        <Check className="size-3.5" />
                        Approve & Verify
                      </Button>
                      <Button
                        type="button"
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          rejectRequest(req.email);
                          toast.error(`Declined access for ${req.email}`);
                        }}
                        className="h-8 gap-1 font-sans text-xs font-semibold text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40"
                      >
                        <X className="size-3.5" />
                        Decline
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Approved Students List */}
        {activeTab === "approved" && (
          <div className="space-y-4">
            {approvedRequests.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-line p-10 text-center space-y-2">
                <Users className="mx-auto size-8 text-muted/40" />
                <p className="font-serif text-base font-bold text-ink">
                  No Approved Student Accounts Yet
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                {approvedRequests.map((req) => (
                  <div
                    key={req.email}
                    className="flex items-center justify-between rounded-xl border border-line bg-surface p-3.5 shadow-2xs"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-serif text-sm font-bold text-ink">
                          {req.name}
                        </span>
                        <span className="rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 px-2 py-0.2 text-[10px] font-bold">
                          Verified Student
                        </span>
                      </div>
                      <p className="font-sans text-xs text-muted mt-0.5">
                        {req.email}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button
                        type="button"
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          rejectRequest(req.email);
                          toast.info(`Revoked access for ${req.email}`);
                        }}
                        className="h-7 text-xs text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30"
                      >
                        Revoke Access
                      </Button>
                      <button
                        type="button"
                        onClick={() => deleteRequest(req.email)}
                        className="rounded p-1 text-muted hover:text-rose-600 transition-colors"
                        title="Delete record"
                      >
                        <Trash2 className="size-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Pre-Approved Whitelist Manager */}
        {activeTab === "whitelist" && (
          <div className="space-y-5">
            {/* Add Whitelist Card */}
            <div className="rounded-2xl border border-line bg-surface p-4 shadow-xs space-y-3">
              <span className="font-serif text-sm font-bold text-ink block">
                Add Pre-Approved Student Email or University Domain
              </span>
              <p className="font-sans text-xs text-muted leading-relaxed">
                Enter an individual student's Google email (e.g. <code>classmate@gmail.com</code>) or an entire college domain (e.g. <code>@college.edu</code>). Anyone matching these entries gets instant verified access.
              </p>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={newEmailInput}
                  onChange={(e) => setNewEmailInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleAddWhitelist();
                    }
                  }}
                  placeholder="e.g. classmate@gmail.com or @college.edu"
                  className="h-10 flex-1 rounded-lg border border-line bg-surface px-3 font-sans text-xs text-ink placeholder:text-muted focus:border-accent focus:outline-none"
                />
                <Button
                  type="button"
                  onClick={handleAddWhitelist}
                  disabled={!newEmailInput.trim()}
                  className="h-10 px-4 font-sans text-xs font-bold gap-1.5"
                >
                  <Plus className="size-4" />
                  Add to Whitelist
                </Button>
              </div>
            </div>

            {/* Whitelist Entries */}
            <div className="space-y-2">
              <span className="font-sans text-xs font-bold text-ink block">
                Active Pre-Approved Whitelist Entries:
              </span>
              <div className="grid gap-2 sm:grid-cols-2">
                {whitelistedEmails.map((entry) => {
                  const isDomain = entry.startsWith("@");
                  const isAdminEntry = adminEmails.includes(entry.toLowerCase());

                  return (
                    <div
                      key={entry}
                      className="flex items-center justify-between rounded-xl border border-line bg-surface p-3 shadow-2xs"
                    >
                      <div className="flex items-center gap-2">
                        {isDomain ? (
                          <Globe className="size-4 text-sky-600" />
                        ) : (
                          <Mail className="size-4 text-accent" />
                        )}
                        <div>
                          <span className="font-sans text-xs font-bold text-ink block">
                            {entry}
                          </span>
                          <span className="font-sans text-[10px] text-muted">
                            {isAdminEntry
                              ? "Admin Master Account"
                              : isDomain
                                ? "Full Domain Whitelist"
                                : "Individual Pre-Approved Email"}
                          </span>
                        </div>
                      </div>

                      {!isAdminEntry ? (
                        <button
                          type="button"
                          onClick={() => {
                            removeWhitelistEntry(entry);
                            toast.info(`Removed ${entry} from whitelist`);
                          }}
                          className="rounded p-1 text-muted hover:text-rose-600 transition-colors"
                          title="Remove from whitelist"
                        >
                          <Trash2 className="size-3.5" />
                        </button>
                      ) : (
                        <span className="rounded bg-primary text-white px-2 py-0.5 text-[9px] font-bold">
                          Admin
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
