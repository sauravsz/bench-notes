import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  Check,
  CheckCircle2,
  Clock,
  Copy,
  Database,
  Globe,
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
import { isSupabaseReady, getSupabaseConfig } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
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
  const [activeTab, setActiveTab] = useState<"pending" | "approved" | "whitelist" | "database">("pending");
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
      <main className="min-h-screen px-4 py-16 sm:px-10 flex items-center justify-center bg-[#090909]">
        <div className="w-full max-w-md rounded-[28px] border border-[#262626] bg-[#141414] p-8 text-center space-y-6 shadow-2xl">
          <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-[#1c1c1c] border border-[#262626] text-white shadow-md">
            <ShieldCheck className="size-7 text-[#0099ff]" strokeWidth={2} />
          </div>
          
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1c1c1c] border border-[#262626] px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[#999999]">
              <Lock className="size-3.5 text-[#0099ff]" />
              Restricted Area
            </span>
            <h1 className="font-display text-2xl font-bold tracking-tight text-white">
              Administrator Login
            </h1>
            <p className="font-sans text-xs text-[#999999] leading-relaxed">
              Enter master password to access student verification, whitelist controls, and security settings.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <div className="relative">
              <KeyRound className="absolute left-3.5 top-3 h-4 w-4 text-[#666666]" />
              <input
                type="password"
                placeholder="Enter admin password (default: admin)"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleDirectAdminLogin()}
                className="w-full rounded-full border border-[#262626] bg-[#090909] pl-10 pr-4 py-2.5 text-xs text-white placeholder:text-[#666666] focus:border-[#0099ff] focus:outline-none"
              />
            </div>

            <Button
              type="button"
              onClick={handleDirectAdminLogin}
              disabled={isLoggingIn || !passwordInput.trim()}
              className="w-full bg-white hover:bg-white/90 text-black font-bold py-2.5 rounded-full shadow-xs transition-all flex items-center justify-center gap-2 text-xs ios-press"
            >
              <Lock className="size-4" />
              {isLoggingIn ? "Verifying..." : "Unlock Administrator Panel"}
            </Button>
          </div>

          <div className="pt-3 border-t border-[#1f1f1f]">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-[#999999] hover:text-white transition-colors"
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
    <main className="px-4 py-8 sm:px-10 sm:py-12 animate-in fade-in duration-200 bg-[#090909]">
      <div className="mx-auto max-w-5xl space-y-8">
        {/* Header Ribbon */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-[#262626] pb-6">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1c1c1c] border border-[#262626] text-[#0099ff] px-3 py-0.5 font-mono text-xs font-bold">
                <ShieldCheck className="size-3.5" />
                Administrator Panel
              </span>
              <span className="font-mono text-xs text-[#999999]">
                Master: <strong>{currentUser.email}</strong>
              </span>
            </div>
            <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              User Access & Verification Gate
            </h1>
            <p className="mt-1 font-sans text-xs text-[#999999]">
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
              className="border-[#262626] bg-[#141414] text-white hover:bg-[#1c1c1c] text-xs h-9 rounded-full"
            >
              <RefreshCw className={`size-3.5 mr-1.5 ${isSyncing ? "animate-spin text-[#0099ff]" : ""}`} />
              Sync
            </Button>
            <div className="rounded-xl border border-[#262626] bg-[#141414] px-3.5 py-1.5 text-center shadow-2xs">
              <span className="text-[10px] font-mono text-[#666666] block">Pending</span>
              <span className="font-display text-base font-bold text-amber-400">{pendingRequests.length}</span>
            </div>
            <div className="rounded-xl border border-[#262626] bg-[#141414] px-3.5 py-1.5 text-center shadow-2xs">
              <span className="text-[10px] font-mono text-[#666666] block">Approved</span>
              <span className="font-display text-base font-bold text-[#22c55e]">{approvedRequests.length}</span>
            </div>
          </div>
        </div>

        {/* Quick Invite Link & Protection Card */}
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Protection Toggle */}
          <div className="rounded-[20px] border border-[#262626] bg-[#141414] p-5 shadow-xs flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-display text-sm font-bold text-white">
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
              <p className="font-sans text-xs text-[#999999] mt-1">
                {authRequired
                  ? "Active: All students must authenticate with Google and be approved."
                  : "Off: Anyone with link can view notes without authentication."}
              </p>
            </div>
            <div className="text-[11px] text-[#666666] font-mono flex items-center gap-1.5">
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Live Server Sync Active (cross-device sync)
            </div>
          </div>

          {/* Instant Invite Link & Passcode */}
          <div className="rounded-[20px] border border-[#262626] bg-[#141414] p-5 shadow-xs flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-display text-sm font-bold text-white flex items-center gap-1.5">
                  <Ticket className="size-4 text-[#0099ff]" />
                  Instant Passcode: <code className="bg-[#1c1c1c] border border-[#262626] px-2 py-0.5 rounded-full text-[#0099ff] font-mono text-xs">BENCH2026</code>
                </span>
              </div>
              <p className="font-sans text-xs text-[#999999] mt-1">
                Share this passcode or instant link with cohort students for 1-click verification bypass.
              </p>
            </div>
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={copyInviteLink}
              className="border-[#262626] bg-[#1c1c1c] hover:bg-[#262626] text-white text-xs w-full rounded-full gap-1.5"
            >
              <Copy className="size-3.5" />
              Copy Instant Invite Link
            </Button>
          </div>
        </div>

        {/* Tab Navigation (Framer Pills) */}
        <div className="flex items-center gap-2 border-b border-[#262626] pb-2 text-xs">
          <button
            type="button"
            onClick={() => setActiveTab("pending")}
            className={cn(
              "flex items-center gap-1.5 rounded-full px-4 py-2 font-sans font-bold transition-all",
              activeTab === "pending"
                ? "bg-white text-black shadow-xs"
                : "bg-[#141414] text-[#999999] border border-[#262626] hover:text-white",
            )}
          >
            <Clock className="size-3.5" />
            <span>Pending Requests</span>
            {pendingRequests.length > 0 && (
              <span className="rounded-full bg-amber-500 text-white px-2 py-0.2 text-[10px]">
                {pendingRequests.length}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("approved")}
            className={cn(
              "flex items-center gap-1.5 rounded-full px-4 py-2 font-sans font-bold transition-all",
              activeTab === "approved"
                ? "bg-white text-black shadow-xs"
                : "bg-[#141414] text-[#999999] border border-[#262626] hover:text-white",
            )}
          >
            <CheckCircle2 className="size-3.5" />
            <span>Approved Students ({approvedRequests.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("whitelist")}
            className={cn(
              "flex items-center gap-1.5 rounded-full px-4 py-2 font-sans font-bold transition-all",
              activeTab === "whitelist"
                ? "bg-white text-black shadow-xs"
                : "bg-[#141414] text-[#999999] border border-[#262626] hover:text-white",
            )}
          >
            <UserPlus className="size-3.5" />
            <span>Pre-Approved Whitelist ({whitelistedEmails.length})</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("database")}
            className={cn(
              "flex items-center gap-1.5 rounded-full px-4 py-2 font-sans font-bold transition-all",
              activeTab === "database"
                ? "bg-white text-black shadow-xs"
                : "bg-[#141414] text-[#999999] border border-[#262626] hover:text-white",
            )}
          >
            <Database className="size-3.5 text-[#0099ff]" />
            <span>Supabase Database</span>
            <span className={cn("size-2 rounded-full", isSupabaseReady() ? "bg-[#22c55e]" : "bg-amber-400")} />
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
                  className="bg-[#22c55e] hover:bg-[#16a34a] text-black font-bold text-xs gap-1.5 rounded-full px-4"
                >
                  <Check className="size-3.5" />
                  Approve All Pending ({pendingRequests.length})
                </Button>
              </div>
            )}

            {pendingRequests.length === 0 ? (
              <div className="rounded-[20px] border border-dashed border-[#262626] p-10 text-center space-y-2 bg-[#141414]">
                <CheckCircle2 className="mx-auto size-8 text-[#22c55e]/60" />
                <p className="font-display text-base font-bold text-white">
                  No Pending Access Requests
                </p>
                <p className="font-sans text-xs text-[#999999] max-w-sm mx-auto">
                  When students sign in with Google, their verification requests will appear here for 1-click approval.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {pendingRequests.map((req) => (
                  <div
                    key={req.email}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-[18px] border border-[#262626] bg-[#141414] p-4 shadow-2xs"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-display text-base font-bold text-white">
                          {req.name || req.email.split("@")[0]}
                        </span>
                        <span className="rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 px-2 py-0.2 text-[10px] font-bold">
                          Pending Approval
                        </span>
                      </div>
                      <p className="font-mono text-xs font-semibold text-[#0099ff] flex items-center gap-1">
                        <Mail className="size-3.5" />
                        {req.email}
                      </p>
                      <span className="font-mono text-[10px] text-[#666666] block">
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
                        className="h-8 gap-1 font-sans text-xs font-bold bg-[#22c55e] hover:bg-[#16a34a] text-black rounded-full px-3.5"
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
                        className="h-8 gap-1 font-sans text-xs font-semibold text-rose-400 hover:bg-rose-950/40 border border-rose-800/40 rounded-full px-3.5"
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
              <div className="rounded-[20px] border border-dashed border-[#262626] p-10 text-center space-y-2 bg-[#141414]">
                <Users className="mx-auto size-8 text-[#666666]" />
                <p className="font-display text-base font-bold text-white">
                  No Approved Student Accounts Yet
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                {approvedRequests.map((req) => (
                  <div
                    key={req.email}
                    className="flex items-center justify-between rounded-[18px] border border-[#262626] bg-[#141414] p-4 shadow-2xs"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-display text-sm font-bold text-white">
                          {req.name}
                        </span>
                        <span className="rounded-full bg-[#22c55e]/15 border border-[#22c55e]/30 text-[#22c55e] px-2.5 py-0.2 text-[10px] font-bold">
                          Verified Student
                        </span>
                      </div>
                      <p className="font-mono text-xs text-[#999999] mt-0.5">
                        {req.email}
                      </p>
                      {req.note && (
                        <p className="font-sans text-[10px] text-[#666666] italic">
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
                        className="h-7 text-xs text-rose-400 hover:bg-rose-950/40 border-rose-800/40 rounded-full px-3"
                      >
                        Revoke Access
                      </Button>
                      <button
                        type="button"
                        onClick={() => deleteRequest(req.email)}
                        className="rounded-full p-1.5 text-[#666666] hover:text-rose-400 transition-colors"
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
          <div className="space-y-6">
            {/* Add Whitelist Card */}
            <div className="rounded-[20px] border border-[#262626] bg-[#141414] p-5 shadow-xs space-y-3">
              <span className="font-display text-sm font-bold text-white block">
                Add Pre-Approved Student Email or University Domain
              </span>
              <p className="font-sans text-xs text-[#999999] leading-relaxed">
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
                  className="h-10 flex-1 rounded-full border border-[#262626] bg-[#090909] px-4 font-sans text-xs text-white placeholder:text-[#666666] focus:border-[#0099ff] focus:outline-none"
                />
                <Button
                  type="button"
                  onClick={handleAddWhitelist}
                  disabled={!newEmailInput.trim()}
                  className="h-10 px-5 font-sans text-xs font-bold gap-1.5 bg-white text-black hover:bg-white/90 rounded-full"
                >
                  <Plus className="size-4" />
                  Add to Whitelist
                </Button>
              </div>
            </div>

            {/* Whitelist Entries */}
            <div className="space-y-3">
              <span className="font-display text-xs font-bold text-white block">
                Active Pre-Approved Whitelist Entries:
              </span>
              <div className="grid gap-3 sm:grid-cols-2">
                {whitelistedEmails.map((entry) => {
                  const isDomain = entry.startsWith("@");
                  const isAdminEntry = adminEmails.includes(entry.toLowerCase());

                  return (
                    <div
                      key={entry}
                      className="flex items-center justify-between rounded-[18px] border border-[#262626] bg-[#141414] p-3.5 shadow-2xs"
                    >
                      <div className="flex items-center gap-2.5">
                        {isDomain ? (
                          <Globe className="size-4 text-[#0099ff]" />
                        ) : (
                          <Mail className="size-4 text-[#999999]" />
                        )}
                        <div>
                          <span className="font-mono text-xs font-bold text-white block">
                            {entry}
                          </span>
                          <span className="font-sans text-[10px] text-[#666666]">
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
                          className="rounded-full p-1.5 text-[#666666] hover:text-rose-400 transition-colors"
                          title="Remove from whitelist"
                        >
                          <Trash2 className="size-3.5" />
                        </button>
                      ) : (
                        <span className="rounded-full bg-[#1c1c1c] border border-[#262626] text-white px-2 py-0.5 text-[9px] font-bold font-mono">
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
        {/* Tab 4: Supabase PostgreSQL Database Status & Schema */}
        {activeTab === "database" && (
          <div className="space-y-6">
            <div className="rounded-[20px] border border-[#262626] bg-[#141414] p-5 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-[#262626] pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-[#1c1c1c] border border-[#262626]">
                    <Database className="size-5 text-[#0099ff]" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-white">
                      Supabase PostgreSQL User Highlights Sync
                    </h3>
                    <p className="font-sans text-xs text-[#999999]">
                      User-isolated highlight and annotation persistence linked to Google email IDs.
                    </p>
                  </div>
                </div>
                <span
                  className={cn(
                    "rounded-full px-3 py-1 font-mono text-xs font-bold border",
                    isSupabaseReady()
                      ? "bg-[#22c55e]/15 border-[#22c55e]/30 text-[#22c55e]"
                      : "bg-amber-500/15 border-amber-500/30 text-amber-400",
                  )}
                >
                  {isSupabaseReady() ? "Connected to Supabase" : "Local Partition Mode (Active)"}
                </span>
              </div>

              <div className="space-y-2 text-xs font-sans text-[#cccccc] leading-relaxed">
                <p>
                  Each authenticated user's highlights are strictly isolated to their Google email profile (<code>user_email</code>). User A cannot see or modify User B's annotations.
                </p>
                <div className="rounded-xl bg-[#090909] p-3 border border-[#262626] font-mono text-[11px] text-[#999999] space-y-1">
                  <div><strong>Supabase Project URL:</strong> {getSupabaseConfig().url}</div>
                  <div><strong>Status:</strong> {isSupabaseReady() ? "Active PostgreSQL Realtime Sync" : "Waiting for VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in Vercel environment"}</div>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-white">
                    PostgreSQL Table Schema (supabase/schema.sql):
                  </span>
                  <Button
                    type="button"
                    size="sm"
                    onClick={() => {
                      const sql = `-- Create user_highlights table in Supabase
create table if not exists public.user_highlights (
  id text primary key,
  user_email text not null,
  doc_id text not null,
  doc_title text,
  block_index integer,
  block_id text,
  text text not null,
  color text not null default 'yellow',
  note text,
  tags text[] default '{}',
  created_at bigint not null,
  updated_at bigint not null
);

create index if not exists idx_user_highlights_email on public.user_highlights(user_email);
create index if not exists idx_user_highlights_email_doc on public.user_highlights(user_email, doc_id);

alter table public.user_highlights enable row level security;

create policy "Allow access to user highlights by email"
  on public.user_highlights
  for all
  using (true)
  with check (true);`;
                      navigator.clipboard.writeText(sql);
                      toast.success("SQL Schema copied to clipboard", {
                        description: "Paste and run in Supabase SQL Editor.",
                      });
                    }}
                    className="bg-white text-black hover:bg-white/90 text-xs rounded-full font-bold h-8 gap-1.5"
                  >
                    <Copy className="size-3.5" />
                    Copy SQL Script
                  </Button>
                </div>

                <pre className="rounded-[16px] border border-[#262626] bg-[#090909] p-4 font-mono text-[11px] leading-relaxed text-[#999999] overflow-x-auto">
{`create table if not exists public.user_highlights (
  id text primary key,
  user_email text not null,
  doc_id text not null,
  doc_title text,
  block_index integer,
  block_id text,
  text text not null,
  color text not null default 'yellow',
  note text,
  tags text[] default '{}',
  created_at bigint not null,
  updated_at bigint not null
);

create index if not exists idx_user_highlights_email on public.user_highlights(user_email);
create index if not exists idx_user_highlights_email_doc on public.user_highlights(user_email, doc_id);`}
                </pre>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
