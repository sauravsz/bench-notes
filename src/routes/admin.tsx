import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  Check,
  CheckCircle2,
  Clock,
  Copy,
  Globe,
  KeyRound,
  Lock,
  Mail,
  Plus,
  RefreshCw,
  RotateCcw,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Ticket,
  Trash2,
  UserCheck,
  UserPlus,
  Users,
  X,
  XCircle,
} from "lucide-react";
import { useAccessControl, DEFAULT_PASSCODES } from "@/lib/auth/access-control";
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
  const signInAsAdminWithPassword = useAccessControl(
    (s) => s.signInAsAdminWithPassword,
  );

  const [passwordInput, setPasswordInput] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [newEmailInput, setNewEmailInput] = useState("");
  const [activeTab, setActiveTab] = useState<"pending" | "approved" | "whitelist" | "passcodes">("pending");
  const [isSyncing, setIsSyncing] = useState(false);

  // Real-time server sync every 3 seconds
  useEffect(() => {
    syncWithServer();
    const interval = setInterval(() => {
      syncWithServer();
    }, 3000);
    return () => clearInterval(interval);
  }, [syncWithServer]);

  // If not logged in as admin: provide direct inline admin login form
  if (!currentUser || !isAdmin) {
    const handleDirectAdminLogin = async () => {
      if (!passwordInput.trim()) {
        toast.error("Please enter admin password");
        return;
      }
      setIsLoggingIn(true);
      try {
        const res = await signInAsAdminWithPassword(passwordInput);
        if (res.success) {
          toast.success("Welcome Administrator", {
            description: "Admin panel unlocked.",
          });
          setPasswordInput("");
        } else {
          toast.error("Access Denied", {
            description: res.error || "Incorrect admin password.",
          });
        }
      } finally {
        setIsLoggingIn(false);
      }
    };

    return (
      <main className="min-h-screen px-4 py-16 sm:px-10 flex items-center justify-center bg-[#f4f0e6]">
        <div className="w-full max-w-md rounded-3xl border border-[#d6cfbe] bg-[#fffcf7] p-8 text-center space-y-6 shadow-2xl">
          <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-[#2f4553] text-white shadow-md">
            <ShieldCheck className="size-8" strokeWidth={1.75} />
          </div>
          
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ebd9c2] px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-[#bf7538]">
              <Lock className="size-3.5" />
              Restricted Area
            </span>
            <h1 className="font-serif text-2xl font-bold text-[#1c2826]">
              Administrator Login
            </h1>
            <p className="font-sans text-xs text-[#636c78] leading-relaxed">
              Enter master password to access student verification, whitelist controls, and security settings.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <div className="relative">
              <KeyRound className="absolute left-3.5 top-3 h-4 w-4 text-[#88909b]" />
              <input
                type="password"
                placeholder="Enter admin password (default: admin)"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleDirectAdminLogin()}
                className="w-full rounded-xl border border-[#cfc4b0] bg-white pl-10 pr-4 py-2.5 text-sm text-[#1c2826] placeholder:text-[#a09c94] focus:border-[#2f4553] focus:outline-none focus:ring-1 focus:ring-[#2f4553]"
              />
            </div>

            <Button
              type="button"
              onClick={handleDirectAdminLogin}
              disabled={isLoggingIn || !passwordInput.trim()}
              className="w-full bg-[#2f4553] hover:bg-[#20313c] text-white font-medium py-2.5 rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 text-sm"
            >
              <Lock className="size-4" />
              {isLoggingIn ? "Verifying..." : "Unlock Administrator Panel"}
            </Button>
          </div>

          <div className="pt-2 border-t border-[#e6dfce]">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-[#636c78] hover:text-[#1c2826] transition-colors"
            >
              <ArrowLeft className="size-3.5" />
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

  const handleManualSync = async () => {
    setIsSyncing(true);
    try {
      await syncWithServer();
      toast.success("Synchronized with server", {
        description: "Latest access requests and approvals fetched.",
      });
    } finally {
      setIsSyncing(false);
    }
  };

  const handleApproveAllPending = async () => {
    if (pendingRequests.length === 0) return;
    let count = 0;
    for (const req of pendingRequests) {
      await approveRequest(req.email);
      count++;
    }
    toast.success(`Approved ${count} pending requests`);
  };

  const handleAddWhitelist = () => {
    const raw = newEmailInput.trim();
    if (!raw) return;

    // Support comma or whitespace separated entries
    const items = raw.split(/[\s,]+/).filter(Boolean);
    for (const item of items) {
      const clean = item.toLowerCase().trim();
      if (clean) {
        addWhitelistEntry(clean);
      }
    }

    toast.success(`Added ${items.length} entry/entries to whitelist`);
    setNewEmailInput("");
  };

  const copyInviteLink = () => {
    const inviteUrl = `${window.location.origin}/?code=BENCH2026`;
    navigator.clipboard.writeText(inviteUrl);
    toast.success("Instant Invite Link Copied!", {
      description: inviteUrl,
    });
  };

  return (
    <main className="px-4 py-8 sm:px-10 sm:py-10 animate-in fade-in duration-200">
      <div className="mx-auto max-w-4xl space-y-8">
        {/* Header Ribbon */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-[#e2d8c5] pb-6">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#2f4553] text-[#fffcf7] px-2.5 py-0.5 font-sans text-xs font-bold">
                <ShieldCheck className="size-3.5" />
                Administrator Panel
              </span>
              <span className="font-sans text-xs text-[#636c78]">
                Master: <strong>{currentUser.email}</strong>
              </span>
            </div>
            <h1 className="font-serif text-3xl font-bold tracking-tight text-[#1c2826] sm:text-4xl">
              User Access & Verification Gate
            </h1>
            <p className="mt-1 font-sans text-xs text-[#636c78]">
              Verify student Google accounts, manage whitelist domains, and configure instant access passcodes.
            </p>
          </div>

          {/* Quick Actions & Stats */}
          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleManualSync}
              disabled={isSyncing}
              className="border-[#d6cfbe] text-[#2f4553] text-xs h-9"
            >
              <RefreshCw className={`size-3.5 mr-1.5 ${isSyncing ? "animate-spin" : ""}`} />
              Sync
            </Button>
            <div className="rounded-xl border border-[#d6cfbe] bg-[#fffcf7] px-3 py-1.5 text-center shadow-2xs">
              <span className="text-[10px] font-semibold text-[#88909b] block">Pending</span>
              <span className="font-serif text-base font-bold text-[#bf7538]">{pendingRequests.length}</span>
            </div>
            <div className="rounded-xl border border-[#d6cfbe] bg-[#fffcf7] px-3 py-1.5 text-center shadow-2xs">
              <span className="text-[10px] font-semibold text-[#88909b] block">Approved</span>
              <span className="font-serif text-base font-bold text-emerald-700">{approvedRequests.length}</span>
            </div>
          </div>
        </div>

        {/* Quick Invite Link & Protection Card */}
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Protection Toggle */}
          <div className="rounded-2xl border border-[#d6cfbe] bg-[#fffcf7] p-5 shadow-xs flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-serif text-sm font-bold text-[#1c2826]">
                  Google Verification Gate
                </span>
                <Switch
                  checked={authRequired}
                  onCheckedChange={(checked) => {
                    setAuthRequired(checked);
                    if (checked) {
                      toast.success("Verification Gate enforced");
                    } else {
                      toast.warning("Verification Gate disabled - all visitors can access");
                    }
                  }}
                />
              </div>
              <p className="font-sans text-xs text-[#636c78] mt-1">
                {authRequired
                  ? "Active: All students must authenticate with Google and be approved."
                  : "Off: Anyone with link can view notes without authentication."}
              </p>
            </div>
            <div className="text-[11px] text-[#88909b] flex items-center gap-1.5">
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Live Server Sync Active (cross-device sync)
            </div>
          </div>

          {/* Instant Invite Link & Passcode */}
          <div className="rounded-2xl border border-[#d6cfbe] bg-[#fbf8f0] p-5 shadow-xs flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-serif text-sm font-bold text-[#1c2826] flex items-center gap-1.5">
                  <Ticket className="size-4 text-[#bf7538]" />
                  Instant Passcode: <code className="bg-[#ebd9c2] px-1.5 py-0.5 rounded text-[#bf7538]">BENCH2026</code>
                </span>
              </div>
              <p className="font-sans text-xs text-[#636c78] mt-1">
                Share this passcode or instant link with cohort students for 1-click verification bypass.
              </p>
            </div>
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={copyInviteLink}
              className="border-[#cfc4b0] text-[#2f4553] text-xs w-full bg-white hover:bg-[#ebd9c2]/40 gap-1.5"
            >
              <Copy className="size-3.5" />
              Copy Instant Invite Link
            </Button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 border-b border-[#e2d8c5] pb-1 text-xs">
          <button
            type="button"
            onClick={() => setActiveTab("pending")}
            className={cn(
              "flex items-center gap-1.5 rounded-lg px-3 py-2 font-sans font-bold transition-all",
              activeTab === "pending"
                ? "bg-[#2f4553] text-[#fffcf7] shadow-2xs"
                : "text-[#636c78] hover:text-[#1c2826] hover:bg-[#ebd9c2]/50",
            )}
          >
            <Clock className="size-3.5" />
            <span>Pending Requests</span>
            {pendingRequests.length > 0 && (
              <span className="rounded-full bg-[#bf7538] text-white px-1.5 py-0.2 text-[10px]">
                {pendingRequests.length}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("approved")}
            className={cn(
              "flex items-center gap-1.5 rounded-lg px-3 py-2 font-sans font-bold transition-all",
              activeTab === "approved"
                ? "bg-[#2f4553] text-[#fffcf7] shadow-2xs"
                : "text-[#636c78] hover:text-[#1c2826] hover:bg-[#ebd9c2]/50",
            )}
          >
            <CheckCircle2 className="size-3.5" />
            <span>Approved Students ({approvedRequests.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("whitelist")}
            className={cn(
              "flex items-center gap-1.5 rounded-lg px-3 py-2 font-sans font-bold transition-all",
              activeTab === "whitelist"
                ? "bg-[#2f4553] text-[#fffcf7] shadow-2xs"
                : "text-[#636c78] hover:text-[#1c2826] hover:bg-[#ebd9c2]/50",
            )}
          >
            <UserPlus className="size-3.5" />
            <span>Pre-Approved Whitelist ({whitelistedEmails.length})</span>
          </button>
        </div>

        {/* Tab 1: Pending Requests Queue */}
        {activeTab === "pending" && (
          <div className="space-y-4">
            {pendingRequests.length > 0 && (
              <div className="flex justify-end">
                <Button
                  type="button"
                  size="sm"
                  onClick={handleApproveAllPending}
                  className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs gap-1.5"
                >
                  <Check className="size-3.5" />
                  Approve All Pending ({pendingRequests.length})
                </Button>
              </div>
            )}

            {pendingRequests.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-[#d6cfbe] p-10 text-center space-y-2 bg-[#fbf8f0]">
                <CheckCircle2 className="mx-auto size-8 text-emerald-700/60" />
                <p className="font-serif text-base font-bold text-[#1c2826]">
                  No Pending Access Requests
                </p>
                <p className="font-sans text-xs text-[#636c78] max-w-sm mx-auto">
                  When students sign in with Google, their verification requests will appear here for 1-click approval.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {pendingRequests.map((req) => (
                  <div
                    key={req.email}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-xl border border-[#e1d5c0] bg-[#fffcf7] p-4 shadow-2xs"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-serif text-base font-bold text-[#1c2826]">
                          {req.name || req.email.split("@")[0]}
                        </span>
                        <span className="rounded bg-[#ebd9c2] text-[#bf7538] px-2 py-0.2 text-[10px] font-bold">
                          Pending Approval
                        </span>
                      </div>
                      <p className="font-sans text-xs font-semibold text-[#bf7538] flex items-center gap-1 font-mono">
                        <Mail className="size-3.5" />
                        {req.email}
                      </p>
                      <span className="font-sans text-[10px] text-[#88909b] block">
                        Requested: {new Date(req.requestedAt).toLocaleString()}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button
                        type="button"
                        size="sm"
                        onClick={async () => {
                          await approveRequest(req.email);
                          toast.success(`Approved access for ${req.email}`);
                        }}
                        className="h-8 gap-1 font-sans text-xs font-bold bg-emerald-700 hover:bg-emerald-800 text-white"
                      >
                        <Check className="size-3.5" />
                        Approve & Verify
                      </Button>
                      <Button
                        type="button"
                        size="sm"
                        variant="outline"
                        onClick={async () => {
                          await rejectRequest(req.email);
                          toast.error(`Declined access for ${req.email}`);
                        }}
                        className="h-8 gap-1 font-sans text-xs font-semibold text-rose-600 hover:bg-rose-50 border-rose-200"
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
              <div className="rounded-2xl border border-dashed border-[#d6cfbe] p-10 text-center space-y-2 bg-[#fbf8f0]">
                <Users className="mx-auto size-8 text-[#88909b]/60" />
                <p className="font-serif text-base font-bold text-[#1c2826]">
                  No Approved Student Accounts Yet
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                {approvedRequests.map((req) => (
                  <div
                    key={req.email}
                    className="flex items-center justify-between rounded-xl border border-[#e1d5c0] bg-[#fffcf7] p-3.5 shadow-2xs"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-serif text-sm font-bold text-[#1c2826]">
                          {req.name}
                        </span>
                        <span className="rounded bg-emerald-100 text-emerald-800 px-2 py-0.2 text-[10px] font-bold">
                          Verified Student
                        </span>
                      </div>
                      <p className="font-sans text-xs text-[#636c78] mt-0.5 font-mono">
                        {req.email}
                      </p>
                      {req.note && (
                        <p className="font-sans text-[10px] text-[#88909b] italic">
                          {req.note}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <Button
                        type="button"
                        size="sm"
                        variant="outline"
                        onClick={async () => {
                          await rejectRequest(req.email);
                          toast.info(`Revoked access for ${req.email}`);
                        }}
                        className="h-7 text-xs text-rose-600 hover:bg-rose-50 border-rose-200"
                      >
                        Revoke Access
                      </Button>
                      <button
                        type="button"
                        onClick={() => deleteRequest(req.email)}
                        className="rounded p-1 text-[#88909b] hover:text-rose-600 transition-colors"
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
            <div className="rounded-2xl border border-[#d6cfbe] bg-[#fffcf7] p-5 shadow-xs space-y-3">
              <span className="font-serif text-sm font-bold text-[#1c2826] block">
                Add Pre-Approved Student Email or University Domain
              </span>
              <p className="font-sans text-xs text-[#636c78] leading-relaxed">
                Enter an individual student's Google email (e.g. <code>student@gmail.com</code>) or an entire college domain (e.g. <code>@iima.ac.in</code> or <code>@gmail.com</code>). Anyone matching these entries gets instant verified access upon login. You can paste multiple emails separated by commas.
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
                  placeholder="e.g. student@gmail.com, @iima.ac.in"
                  className="h-10 flex-1 rounded-xl border border-[#cfc4b0] bg-white px-3 font-sans text-xs text-[#1c2826] placeholder:text-[#a09c94] focus:border-[#2f4553] focus:outline-none"
                />
                <Button
                  type="button"
                  onClick={handleAddWhitelist}
                  disabled={!newEmailInput.trim()}
                  className="h-10 px-4 font-sans text-xs font-bold gap-1.5 bg-[#2f4553] hover:bg-[#20313c] text-white rounded-xl"
                >
                  <Plus className="size-4" />
                  Add to Whitelist
                </Button>
              </div>
            </div>

            {/* Whitelist Entries */}
            <div className="space-y-2">
              <span className="font-sans text-xs font-bold text-[#1c2826] block">
                Active Pre-Approved Whitelist Entries:
              </span>
              <div className="grid gap-2 sm:grid-cols-2">
                {whitelistedEmails.map((entry) => {
                  const isDomain = entry.startsWith("@");
                  const isAdminEntry = adminEmails.includes(entry.toLowerCase());

                  return (
                    <div
                      key={entry}
                      className="flex items-center justify-between rounded-xl border border-[#e1d5c0] bg-[#fffcf7] p-3 shadow-2xs"
                    >
                      <div className="flex items-center gap-2">
                        {isDomain ? (
                          <Globe className="size-4 text-sky-600" />
                        ) : (
                          <Mail className="size-4 text-[#bf7538]" />
                        )}
                        <div>
                          <span className="font-sans text-xs font-bold text-[#1c2826] block font-mono">
                            {entry}
                          </span>
                          <span className="font-sans text-[10px] text-[#88909b]">
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
                          onClick={async () => {
                            await removeWhitelistEntry(entry);
                            toast.info(`Removed ${entry} from whitelist`);
                          }}
                          className="rounded p-1 text-[#88909b] hover:text-rose-600 transition-colors"
                          title="Remove from whitelist"
                        >
                          <Trash2 className="size-3.5" />
                        </button>
                      ) : (
                        <span className="rounded bg-[#2f4553] text-white px-2 py-0.5 text-[9px] font-bold">
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
