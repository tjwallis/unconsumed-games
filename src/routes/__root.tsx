import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { NotFound } from "@/components/not-found";
import appCss from "../styles.css?url";

const APP_NAME = "Unconsumed Games";
const DESCRIPTION =
  "Unconsumed Games makes video games grounded in the Word of God. First title: Covenanter, a tale of the Scottish Reformation.";

/* Self-hosted static build (`npm run build:static`): no Grok middleware runs, so the share
   card and manifest are declared here. The Grok/Vercel build leaves these to its injector,
   which owns og:* and twitter:* tags there. */
const STATIC_SITE = import.meta.env.VITE_STATIC_SITE === "1";
const SITE_URL = (import.meta.env.VITE_SITE_URL || "https://unconsumedgames.com").replace(
  /\/$/,
  "",
);

const shareMeta = STATIC_SITE
  ? [
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: APP_NAME },
      { property: "og:title", content: `${APP_NAME} · Faithful stories, well made` },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:image", content: `${SITE_URL}/og.jpg` },
      { name: "twitter:card", content: "summary_large_image" },
    ]
  : [];

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      { name: "description", content: DESCRIPTION },
      { name: "theme-color", content: "#14213D" },
      ...shareMeta,
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      {
        rel: "manifest",
        href: STATIC_SITE ? "/site.webmanifest" : "/__grok/manifest.webmanifest",
      },
      {
        rel: "apple-touch-icon",
        href: STATIC_SITE ? "/brand/app-icon.png" : "/__grok/icon-180.png",
      },
    ],
  }),
  notFoundComponent: NotFound,
  component: () => (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
