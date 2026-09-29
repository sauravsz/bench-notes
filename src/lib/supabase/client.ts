import { createClient, type SupabaseClient } from "@supabase/supabase-js";

function getEnvVar(key: string): string {
  if (typeof import.meta !== "undefined" && import.meta.env) {
    const val = import.meta.env[key];
    if (typeof val === "string") return val;
  }
  if (typeof process !== "undefined" && process.env) {
    const val = process.env[key];
    if (typeof val === "string") return val;
  }
  return "";
}

const supabaseUrl = getEnvVar("VITE_SUPABASE_URL") || getEnvVar("SUPABASE_URL");
const supabaseAnonKey = getEnvVar("VITE_SUPABASE_ANON_KEY") || getEnvVar("SUPABASE_ANON_KEY");

let supabaseInstance: SupabaseClient | null = null;

if (supabaseUrl && supabaseAnonKey) {
  try {
    supabaseInstance = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      },
    });
  } catch {
    supabaseInstance = null;
  }
}

export const supabase = supabaseInstance;

export function isSupabaseReady(): boolean {
  return Boolean(supabaseInstance && supabaseUrl && supabaseAnonKey);
}

export function getSupabaseConfig(): {
  url: string;
  isConfigured: boolean;
} {
  return {
    url: supabaseUrl || "Not configured",
    isConfigured: isSupabaseReady(),
  };
}
