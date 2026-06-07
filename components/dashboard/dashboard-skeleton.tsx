const tileBase =
  "bento-tile surface-grain relative isolate overflow-hidden rounded-lg border border-[#9d95ff]/25 bg-[#0a0a18]/90 p-5 shadow-[0_24px_80px_rgba(3,4,15,0.72)]";

const shimmer = "animate-pulse rounded bg-[#d8d4ff]/10";

export function DashboardSkeleton() {
  return (
    <section
      aria-label="Loading learning dashboard"
      className="dashboard-stage relative isolate grid grid-cols-1 gap-4 md:grid-cols-2 min-[1025px]:auto-rows-[128px] min-[1025px]:grid-cols-12"
    >
      <div
        aria-hidden="true"
        className="learning-core pointer-events-none absolute left-1/2 top-[49%] z-30 hidden -translate-x-1/2 -translate-y-1/2 min-[1025px]:block"
      >
        <span className="learning-core-shell opacity-70" />
        <span className="learning-core-progress learning-core-progress-primary" />
        <span className="learning-core-progress learning-core-progress-secondary" />
        <span className="learning-core-panel opacity-60">
          <span className="learning-core-scan" />
          <span className="learning-core-center" />
        </span>
      </div>

      <article className={`${tileBase} min-h-[320px] md:order-2 md:col-span-1 min-[1025px]:col-start-1 min-[1025px]:row-start-1 min-[1025px]:col-span-3 min-[1025px]:row-span-3 min-[1025px]:min-h-0`}>
        <div className="h-full animate-pulse">
          <div className="h-14 w-14 rounded-lg bg-white/10" />
          <div className="mt-8 h-10 w-4/5 rounded bg-white/10" />
          <div className="mt-3 h-10 w-3/5 rounded bg-white/10" />
          <div className="absolute bottom-5 left-5 right-5 grid gap-3">
            <div className="h-8 rounded bg-white/10" />
            <div className="h-8 rounded bg-white/10" />
            <div className="h-8 rounded bg-white/10" />
          </div>
        </div>
      </article>

      <article
        className={`${tileBase} bento-hero-notch min-h-[560px] md:order-1 md:col-span-2 md:min-h-[500px] min-[1025px]:col-start-4 min-[1025px]:row-start-1 min-[1025px]:col-span-6 min-[1025px]:row-span-3 min-[1025px]:min-h-0`}
      >
        <div className="hero-mesh-bg absolute inset-0" />
        <div className="relative z-10 mx-auto flex h-full max-w-xl flex-col items-center justify-between pb-7 pt-6 text-center">
          <div className="flex w-full flex-col items-center">
            <div className={`${shimmer} h-7 w-32`} />
            <div className={`${shimmer} mt-8 h-16 w-4/5`} />
            <div className={`${shimmer} mt-3 h-16 w-3/5`} />
            <div className={`${shimmer} mt-6 h-4 w-2/3`} />
            <div className={`${shimmer} mt-5 h-7 w-28`} />
          </div>
          <div className="hero-core-preview min-[1025px]:hidden">
            <div className="learning-core hero-core-preview-inner opacity-60">
              <span className="learning-core-shell opacity-70" />
              <span className="learning-core-progress learning-core-progress-primary" />
              <span className="learning-core-progress learning-core-progress-secondary" />
              <span className="learning-core-panel opacity-70">
                <span className="learning-core-scan" />
                <span className="learning-core-center" />
              </span>
            </div>
          </div>
        </div>
      </article>

      <article className={`${tileBase} min-h-[160px] md:order-3 md:min-h-[320px] min-[1025px]:col-start-10 min-[1025px]:row-start-1 min-[1025px]:col-span-3 min-[1025px]:row-span-1 min-[1025px]:min-h-0`}>
        <div className="flex h-full items-center justify-center">
          <div className={`${shimmer} h-16 w-40 rounded-full`} />
        </div>
      </article>

      <article className={`${tileBase} min-h-[320px] md:order-4 min-[1025px]:col-start-10 min-[1025px]:row-start-2 min-[1025px]:col-span-3 min-[1025px]:row-span-2 min-[1025px]:min-h-0`}>
        <div className={`${shimmer} h-9 w-9`} />
        <div className={`${shimmer} mt-5 h-6 w-36`} />
        <div className={`${shimmer} mt-3 h-4 w-44 max-w-full`} />
        <div className="mt-5 grid grid-cols-8 gap-1.5">
          {Array.from({ length: 48 }).map((_, index) => (
            <div key={index} className="h-3 rounded border border-white/[0.04] bg-white/[0.06]" />
          ))}
        </div>
      </article>

      <article className={`${tileBase} min-h-[360px] md:order-5 min-[1025px]:col-start-1 min-[1025px]:row-start-4 min-[1025px]:col-span-3 min-[1025px]:row-span-3 min-[1025px]:min-h-0`}>
        <div className={`${shimmer} h-11 w-11 rounded-full`} />
        <div className={`${shimmer} mt-5 h-6 w-3/5`} />
        <div className="mt-5 grid gap-3">
          <div className={`${shimmer} h-10`} />
          <div className={`${shimmer} h-10`} />
          <div className={`${shimmer} h-10`} />
          <div className={`${shimmer} h-10`} />
        </div>
        <div className={`${shimmer} absolute bottom-5 left-5 right-5 h-9`} />
      </article>

      <article className={`${tileBase} bento-course-notch-left min-h-[300px] md:order-6 min-[1025px]:col-start-4 min-[1025px]:row-start-4 min-[1025px]:col-span-3 min-[1025px]:row-span-3 min-[1025px]:min-h-0`}>
        <SkeletonFeature />
      </article>

      <article className={`${tileBase} bento-course-notch-right min-h-[300px] md:order-7 min-[1025px]:col-start-7 min-[1025px]:row-start-4 min-[1025px]:col-span-3 min-[1025px]:row-span-3 min-[1025px]:min-h-0`}>
        <SkeletonFeature />
      </article>

      <article className={`${tileBase} min-h-[300px] md:order-8 md:col-span-2 min-[1025px]:col-start-10 min-[1025px]:row-start-4 min-[1025px]:col-span-3 min-[1025px]:row-span-3 min-[1025px]:min-h-0`}>
        <div className={`${shimmer} h-4 w-36`} />
        <div className={`${shimmer} mt-3 h-8 w-28`} />
        <div className={`${shimmer} mt-4 h-4 w-4/5`} />
        <div className="absolute bottom-8 left-5 right-5 grid gap-4">
          <div className={`${shimmer} h-12`} />
          <div className={`${shimmer} h-12`} />
        </div>
      </article>
    </section>
  );
}

function SkeletonFeature() {
  return (
    <div className="flex h-full flex-col justify-end">
      <div className={`${shimmer} mb-6 h-14 w-14 rounded-full`} />
      <div className={`${shimmer} h-7 w-40`} />
      <div className={`${shimmer} mt-4 h-4 w-4/5`} />
      <div className={`${shimmer} mt-2 h-4 w-3/5`} />
    </div>
  );
}
