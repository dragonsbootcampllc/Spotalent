import React, { Suspense } from "react";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

// Only importing and using Devtools in Development
const TanStackRouterDevtools =
    process.env.NODE_ENV === "production"
        ? () => null // Render nothing in production
        : React.lazy(() =>
              // Lazy load in development
              import("@tanstack/router-devtools").then((res) => ({
                  default: res.TanStackRouterDevtools,
                  // For Embedded Mode
                  // default: res.TanStackRouterDevtoolsPanel
              }))
          );
          
// Only importing and using Devtools in Development
const ReactQueryDevtools =
    process.env.NODE_ENV === "production"
        ? () => null // Render nothing in production
        : React.lazy(() =>
              // Lazy load in development
              import("@tanstack/react-query-devtools").then((res) => ({
                  default: res.ReactQueryDevtools,
                  // For Embedded Mode
                  // default: res.ReactQueryDevtoolsPanel
              }))
          );

export const Route = createRootRoute({
    component: () => (
        <div className="w-full flex overflow-hidden flex-col h-dvh">
            <div className="p-2 flex gap-2">
                <Link to="/" className="[&.active]:font-bold">
                    Home
                </Link>
                <Link to="/login" className="[&.active]:font-bold">
                    Login
                </Link>
                <Link to="/signup" className="[&.active]:font-bold">
                    Signup
                </Link>
            </div>
            <hr />
            <Outlet />
            <Suspense>
                <TanStackRouterDevtools />
                <ReactQueryDevtools buttonPosition="bottom-right" />
            </Suspense>
        </div>
    ),
    notFoundComponent: () => (
        <div className="w-full h-full text-5xl font-bold text-dark-main overflow-hidden flex justify-center items-center">
            404 Not Found
        </div>
    ),
});
