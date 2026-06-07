import type { PropsWithChildren } from "react";

import { NavigationChrome } from "@/components/dashboard/navigation-chrome";

export function NavigationShell({ children }: PropsWithChildren) {
  return (
    <div className="min-h-dvh bg-[#050510] text-slate-100 [--sidebar-compact:4.75rem] [--sidebar-expanded:12.5rem] [--sidebar-width:var(--sidebar-compact)] min-[1025px]:[--sidebar-width:var(--sidebar-expanded)]">
      <NavigationChrome />

      <main className="min-h-dvh px-4 pb-[calc(9rem+env(safe-area-inset-bottom))] pt-5 md:pb-6 md:pl-[calc(var(--sidebar-width)+2.25rem)] md:pr-6 md:pt-6">
        <div id="dashboard" className="mx-auto w-full max-w-[1500px]">
          {children}
        </div>
      </main>
    </div>
  );
}
