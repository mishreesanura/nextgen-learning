"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart3,
  BookOpen,
  CalendarDays,
  GraduationCap,
  LayoutDashboard,
  MessageSquareText,
  Settings
} from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "courses", label: "Courses", icon: BookOpen },
  { id: "calendar", label: "Calendar", icon: CalendarDays },
  { id: "analytics", label: "Progress", icon: BarChart3 },
  { id: "mentor", label: "Mentor", icon: MessageSquareText }
] as const;

const mobileNavItems = [navItems[0], navItems[2], navItems[1], navItems[3], navItems[4]] as const;

export function NavigationChrome() {
  const [activeItem, setActiveItem] = useState<(typeof navItems)[number]["id"]>("dashboard");

  return (
    <>
      <aside className="fixed inset-y-4 left-4 z-40 hidden w-[var(--sidebar-width)] rounded-lg border border-[#9d95ff]/20 bg-[#090918]/86 p-3 shadow-[0_24px_80px_rgba(3,4,15,0.74)] backdrop-blur-xl transition-[width] duration-300 md:block min-[1025px]:p-4">
        <nav aria-label="Primary" className="flex h-full flex-col">
          <a className="focus-ring flex min-h-14 items-center justify-center gap-3 rounded-md px-2 min-[1025px]:justify-start min-[1025px]:px-3" href="#dashboard">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-white/20 bg-gradient-to-br from-[#f3f1ff] via-[#b7b0ff] to-[#7262ff] text-[#080812] shadow-[0_0_36px_rgba(139,128,255,0.42)]">
              <GraduationCap aria-hidden="true" className="h-5 w-5" />
            </span>
            <span className="hidden min-w-0 min-[1025px]:block">
              <span className="block truncate text-sm font-semibold leading-5 text-white">LearnOS</span>
              <span className="block truncate text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#b9b4ff]">Dashboard</span>
            </span>
          </a>

          <div className="mt-8 flex flex-1 flex-col gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeItem === item.id;

              return (
                <button
                  key={item.id}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "focus-ring relative flex h-12 items-center justify-center gap-3 overflow-hidden rounded-md px-3 text-sm font-medium transition-colors min-[1025px]:justify-start",
                    isActive ? "text-white" : "text-slate-400 hover:text-slate-100"
                  )}
                  type="button"
                  onClick={() => setActiveItem(item.id)}
                  title={item.label}
                >
                  <AnimatePresence>
                    {isActive ? (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-md border border-[#c8c3ff]/18 bg-[#8a7cff]/12 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                        transition={{ type: "spring", stiffness: 420, damping: 34 }}
                      />
                    ) : null}
                  </AnimatePresence>
                  <Icon aria-hidden="true" className="relative h-5 w-5 shrink-0" />
                  <span className="relative hidden min-w-0 truncate min-[1025px]:block">{item.label}</span>
                </button>
              );
            })}
          </div>

          <button
            className="focus-ring relative flex h-12 items-center justify-center gap-3 rounded-md px-3 text-sm font-medium text-slate-400 transition-colors hover:text-slate-100 min-[1025px]:justify-start"
            type="button"
            title="Settings"
          >
            <Settings aria-hidden="true" className="h-5 w-5" />
            <span className="hidden min-w-0 truncate min-[1025px]:block">Settings</span>
          </button>
        </nav>
      </aside>

      <nav
        aria-label="Mobile primary"
        className="mobile-dock fixed bottom-[calc(0.75rem+env(safe-area-inset-bottom))] left-1/2 z-50 w-[min(calc(100vw-2rem),24rem)] -translate-x-1/2 overflow-visible rounded-[1.75rem] border border-[#d8d4ff]/26 bg-[#10101b]/92 px-4 py-3 shadow-[0_24px_80px_rgba(3,4,15,0.82),0_0_48px_rgba(111,91,255,0.16)] backdrop-blur-xl md:hidden"
      >
        <div className="relative z-10 grid h-16 grid-cols-[minmax(0,1fr)_minmax(0,1fr)_5rem_minmax(0,1fr)_minmax(0,1fr)] items-center gap-1">
          {mobileNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;
            const isCenter = item.id === "courses";

            return (
              <button
                key={item.id}
                aria-current={isActive ? "page" : undefined}
                aria-label={item.label}
                className={cn(
                  "focus-ring relative mx-auto grid place-items-center transition-colors",
                  isCenter
                    ? "z-20 h-20 w-20 -translate-y-4 text-white"
                    : "h-12 w-12 rounded-full text-[#9da2bd] hover:text-[#efedff]",
                  isActive && !isCenter ? "text-white" : null
                )}
                type="button"
                onClick={() => setActiveItem(item.id)}
                title={item.label}
              >
                {isCenter ? (
                  <>
                    <span className="pointer-events-none absolute inset-x-0 top-1 h-16 rounded-full bg-[#8174ff]/28 blur-2xl" />
                    <span className="pointer-events-none absolute top-[3.45rem] h-2 w-12 rounded-full bg-[#b7b0ff]/25 blur-md" />
                    <span className="pointer-events-none relative grid h-[4.25rem] w-[4.25rem] place-items-center rounded-full border border-[#d8d4ff]/30 bg-gradient-to-br from-[#6758dd] via-[#342b87] to-[#0a0a18] shadow-[0_0_0_0.42rem_rgba(33,28,78,0.88),0_0_42px_rgba(124,110,255,0.36),inset_0_1px_0_rgba(255,255,255,0.18)]">
                      {isActive ? (
                        <>
                          <motion.span
                            layoutId="mobile-nav-active"
                            className="pointer-events-none absolute inset-3 rounded-full opacity-0"
                            transition={{ type: "spring", stiffness: 420, damping: 34 }}
                          />
                          <motion.span
                            className="pointer-events-none absolute inset-1.5 rounded-full border border-[#f7f5ff]/80 bg-gradient-to-br from-[#f8f7ff] via-[#b9b2ff] to-[#7564ff] shadow-[0_0_28px_rgba(198,191,255,0.55),inset_0_1px_0_rgba(255,255,255,0.5)]"
                            initial={{ opacity: 0.82, scale: 0.94 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ type: "spring", stiffness: 420, damping: 34 }}
                          />
                        </>
                      ) : (
                        <span className="pointer-events-none absolute inset-2 rounded-full bg-gradient-to-br from-[#c5c0ff] via-[#8c7cff] to-[#6552f2] shadow-[0_0_18px_rgba(124,110,255,0.26),inset_0_1px_0_rgba(255,255,255,0.3)]" />
                      )}
                      <Icon aria-hidden="true" className="pointer-events-none relative h-6 w-6 text-[#070714]" />
                    </span>
                    <span className="sr-only">{item.label}</span>
                  </>
                ) : (
                  <>
                    {isActive ? (
                      <motion.span
                        layoutId="mobile-nav-active"
                        className="pointer-events-none absolute inset-0 rounded-full border border-[#d8d4ff]/22 bg-[#8a7cff]/14 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_24px_rgba(124,110,255,0.2)]"
                        transition={{ type: "spring", stiffness: 420, damping: 34 }}
                      />
                    ) : null}
                    <Icon aria-hidden="true" className="pointer-events-none relative h-5 w-5" />
                    <span className="sr-only">{item.label}</span>
                  </>
                )}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
