import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { AppShell } from "@/components/app-shell";
import { VerificationGuard } from "@/components/auth/verification-guard";
import appCss from "../styles.css?url";

const APP_NAME = "Bench Notes";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      { name: "theme-color", content: "#090909" },
      {
        name: "description",
        content:
          "MBA Business Law (Paper 603) and core curriculum interactive examination and lecture revision suite.",
      },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,400;0,14..32,500;0,14..32,600;0,14..32,700;1,14..32,400&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap",
      },
    ],
  }),
  component: () => (
    <html lang="en" className="dark bg-[#090909] text-white antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen bg-[#090909] text-white selection:bg-[#0099ff]/30 selection:text-white">
        <PreviewHostBridge />
        <AuthProvider>
          <VerificationGuard>
            <AppShell>
              <Outlet />
            </AppShell>
          </VerificationGuard>
          <Toaster position="bottom-right" theme="dark" richColors />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
