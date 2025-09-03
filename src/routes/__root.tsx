/// <reference types="vite/client" />

import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import globalCss from "#/styles/globals.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Experiments" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
      },
      { rel: "icon", href: "/favicon.png" },

      { rel: "stylesheet", href: globalCss },
    ],
  }),

  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className="text-foreground bg-background h-full font-sans"
      data-theme="system"
    >
      <head>
        <HeadContent />
      </head>
      <body className="min-h-svh">
        {children}

        <Scripts />
      </body>
    </html>
  );
}
