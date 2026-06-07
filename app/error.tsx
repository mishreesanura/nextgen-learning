"use client";

import { RotateCcw, TriangleAlert } from "lucide-react";

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-dvh items-center justify-center bg-[#050510] px-6 text-slate-100">
      <section className="surface-grain bento-tile relative isolate w-full max-w-xl overflow-hidden rounded-lg border border-[#9d95ff]/24 bg-[#0a0a18]/90 p-6 shadow-[0_24px_80px_rgba(3,4,15,0.72)]">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-red-300/30 bg-red-400/10 text-red-200">
          <TriangleAlert aria-hidden="true" className="h-6 w-6" />
        </div>
        <h1 className="text-2xl font-semibold tracking-normal">Dashboard render failed</h1>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          {error.message || "An unexpected dashboard error occurred."}
        </p>
        <button
          className="focus-ring mt-6 inline-flex items-center gap-2 rounded-md border border-[#e2e0ff]/20 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/15"
          type="button"
          onClick={reset}
        >
          <RotateCcw aria-hidden="true" className="h-4 w-4" />
          Retry
        </button>
      </section>
    </main>
  );
}
