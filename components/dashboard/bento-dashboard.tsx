"use client";

import { motion, type Variants } from "framer-motion";
import {
  AlertTriangle,
  Atom,
  BadgeCheck,
  BookOpen,
  BrainCircuit,
  Code2,
  Database,
  Flame,
  Layers3,
  LineChart,
  Orbit,
  Palette,
  PlayCircle,
  Sigma,
  Sparkles,
  Target,
  Zap,
  type LucideIcon
} from "lucide-react";
import { useMemo, useState } from "react";

import { cn } from "@/lib/utils";
import type { Course, CourseQueryState } from "@/types/course";

const iconMap: Record<string, LucideIcon> = {
  atom: Atom,
  book: BookOpen,
  brain: BrainCircuit,
  code: Code2,
  database: Database,
  layers: Layers3,
  orbit: Orbit,
  palette: Palette,
  sigma: Sigma,
  sparkles: Sparkles
};

const activity = [2, 4, 1, 3, 5, 0, 4, 3, 1, 2, 5, 4, 6, 3, 0, 2, 4, 5, 3, 1, 2, 6, 5, 4, 3, 2, 1, 5, 6, 4, 3, 0, 2, 4, 5, 3, 6, 2, 1, 3, 5, 4, 2, 6, 3, 1, 4, 5];

const tileVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 26, mass: 0.9 }
  }
};

export function BentoDashboard({ courseState }: { courseState: CourseQueryState }) {
  return (
    <motion.section
      aria-label="Student dashboard Bento grid"
      className="dashboard-stage relative isolate grid grid-cols-1 gap-4 md:grid-cols-2 min-[1025px]:auto-rows-[128px] min-[1025px]:grid-cols-12"
      initial="hidden"
      animate="show"
      variants={{ show: { transition: { staggerChildren: 0.065, delayChildren: 0.05 } } }}
    >
      <CentralCore />
      <IntroTile />
      <HeroTile />
      <FocusTile courseState={courseState} />
      <ActivityTile />
      <CourseArea courseState={courseState} />
      <SupportTile courseState={courseState} />
    </motion.section>
  );
}

function BentoTile({
  children,
  className,
  ariaLabel
}: {
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <motion.article
      aria-label={ariaLabel}
      className={cn(
        "bento-tile surface-grain group relative isolate overflow-hidden rounded-lg border border-[#9d95ff]/25 bg-[#0a0a18]/90 p-5 shadow-[0_24px_80px_rgba(3,4,15,0.72)] will-change-transform",
        className
      )}
      variants={tileVariants}
      whileHover={{ y: -4, scale: 1.012 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          boxShadow: "inset 0 0 0 1px rgba(213, 210, 255, 0.34), 0 18px 74px rgba(106, 90, 255, 0.26)"
        }}
      />
      {children}
    </motion.article>
  );
}

function CentralCore() {
  return (
    <div
      aria-hidden="true"
      className="learning-core pointer-events-none absolute left-1/2 top-[49%] z-30 hidden -translate-x-1/2 -translate-y-1/2 min-[1025px]:block"
    >
      <LearningCoreBody />
    </div>
  );
}

function HeroCorePreview() {
  return (
    <div aria-hidden="true" className="hero-core-preview pointer-events-none min-[1025px]:hidden">
      <div className="learning-core hero-core-preview-inner">
        <LearningCoreBody />
      </div>
    </div>
  );
}

function LearningCoreBody() {
  return (
    <>
      <span className="learning-core-shell" />
      <span className="learning-core-progress learning-core-progress-primary" />
      <span className="learning-core-progress learning-core-progress-secondary" />
      <span className="learning-core-connection learning-core-connection-a" />
      <span className="learning-core-connection learning-core-connection-b" />
      <span className="learning-core-connection learning-core-connection-c" />
      <span className="learning-core-panel">
        <span className="learning-core-scan" />
        <span className="learning-core-card learning-core-card-a">
          <Code2 aria-hidden="true" className="h-4 w-4" />
          <span>75</span>
        </span>
        <span className="learning-core-card learning-core-card-b">
          <Database aria-hidden="true" className="h-4 w-4" />
          <span>62</span>
        </span>
        <span className="learning-core-card learning-core-card-c">
          <BrainCircuit aria-hidden="true" className="h-4 w-4" />
          <span>AI</span>
        </span>
        <span className="learning-core-center">
          <BookOpen aria-hidden="true" className="h-8 w-8" />
        </span>
        <span className="learning-core-node learning-core-node-a">
          <Palette aria-hidden="true" className="h-3.5 w-3.5" />
        </span>
        <span className="learning-core-node learning-core-node-b">
          <Target aria-hidden="true" className="h-3.5 w-3.5" />
        </span>
        <span className="learning-core-node learning-core-node-c">
          <BadgeCheck aria-hidden="true" className="h-3.5 w-3.5" />
        </span>
      </span>
    </>
  );
}

function IntroTile() {
  return (
    <BentoTile className="min-h-[320px] md:order-2 md:col-span-1 min-[1025px]:col-start-1 min-[1025px]:row-start-1 min-[1025px]:col-span-3 min-[1025px]:row-span-3 min-[1025px]:min-h-0">
      <div className="relative z-10 flex h-full flex-col justify-between gap-8">
        <header>
          <span className="mb-8 grid h-14 w-14 place-items-center rounded-lg border border-[#b9b3ff]/15 bg-[#8b7bff]/15 text-[#e2e0ff] shadow-[0_0_46px_rgba(131,116,255,0.38)]">
            <Orbit aria-hidden="true" className="h-7 w-7" />
          </span>
          <h2 className="max-w-[11ch] text-4xl font-semibold leading-tight tracking-normal text-white md:text-5xl min-[1025px]:text-4xl">
            Learning flow, without friction.
          </h2>
        </header>
        <footer className="grid gap-3">
          <MetricRow icon={Flame} label="Streak" value="12 days" tone="text-[#f3f1ff]" />
          <MetricRow icon={Target} label="Daily target" value="84%" tone="text-[#aab2ff]" />
          <MetricRow icon={BadgeCheck} label="Focus blocks" value="3 queued" tone="text-[#d4cfff]" />
        </footer>
      </div>
    </BentoTile>
  );
}

function HeroTile() {
  return (
    <BentoTile className="bento-hero-notch min-h-[560px] md:order-1 md:col-span-2 md:min-h-[500px] min-[1025px]:col-start-4 min-[1025px]:row-start-1 min-[1025px]:col-span-6 min-[1025px]:row-span-3 min-[1025px]:min-h-0">
      <div aria-hidden="true" className="hero-mesh-bg absolute inset-0" />
      <div className="relative z-10 flex h-full flex-col items-center justify-between gap-7 pb-7 min-[1025px]:justify-start min-[1025px]:gap-7 min-[1025px]:pb-0">
        <header className="mx-auto max-w-3xl text-center min-[1025px]:pt-1">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <p className="inline-flex items-center gap-2 rounded-md border border-[#d7d3ff]/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#f4f2ff] shadow-[0_0_30px_rgba(209,205,255,0.12)]">
              <Zap aria-hidden="true" className="h-3.5 w-3.5" />
              LearnOS
            </p>
            <span className="inline-flex items-center gap-2 rounded-md border border-[#f3f1ff]/18 bg-black/18 px-3 py-1 text-xs font-semibold text-[#f4f2ff] shadow-[0_0_24px_rgba(201,197,255,0.12)]">
              <Flame aria-hidden="true" className="h-3.5 w-3.5 text-[#f3f1ff]" />
              12 day streak
            </span>
          </div>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-normal text-white sm:text-6xl min-[1025px]:text-6xl">
            Welcome back, Mishree.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#eeeaff]/80">
            Your next focus block is ready. Finish one course milestone and keep the streak alive.
          </p>
        </header>
        <HeroCorePreview />
      </div>
    </BentoTile>
  );
}

function MetricRow({
  icon: Icon,
  label,
  value,
  tone
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  tone: string;
}) {
  return (
    <div className="flex items-center gap-3 border-l border-[#c7c2ff]/18 pl-3">
      <Icon aria-hidden="true" className={cn("h-4 w-4 shrink-0", tone)} />
      <div>
        <p className="text-xs text-[#dcd8ff]/55">{label}</p>
        <p className="text-sm font-semibold text-white">{value}</p>
      </div>
    </div>
  );
}

function FocusTile({ courseState }: { courseState: CourseQueryState }) {
  const focusCourse =
    courseState.status === "success" && courseState.courses.length > 0
      ? [...courseState.courses].sort((a, b) => a.progress - b.progress)[0]
      : null;
  const Icon = focusCourse ? getCourseIcon(focusCourse.icon_name) : Target;

  return (
    <BentoTile className="min-h-[160px] md:order-3 md:min-h-[320px] min-[1025px]:col-start-10 min-[1025px]:row-start-1 min-[1025px]:col-span-3 min-[1025px]:row-span-1 min-[1025px]:min-h-0" ariaLabel="Next learning focus">
      <div className="relative z-10 flex h-full items-center justify-between gap-4">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#cfcaff]/75">Next focus</p>
          <h2 className="mt-2 truncate text-xl font-semibold tracking-normal text-white">{focusCourse?.title ?? "Course queue"}</h2>
          <p className="mt-1 text-xs text-[#b4b7d2]">{focusCourse ? `${focusCourse.progress}% complete · review next` : "Add courses to begin"}</p>
        </div>
        <div className="relative grid h-16 w-16 shrink-0 place-items-center rounded-full border border-[#c8c3ff]/16 bg-black/25 shadow-inner shadow-black/40">
          <span className="absolute right-1.5 top-1.5 h-2.5 w-2.5 rounded-full bg-[#d7d3ff] shadow-[0_0_14px_rgba(215,211,255,0.8)]" />
          <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-[#f5f3ff] via-[#b7b0ff] to-[#6f5cff] text-[#090915] shadow-[0_0_42px_rgba(144,132,255,0.46)]">
            <Icon aria-hidden="true" className="h-5 w-5" />
          </span>
        </div>
      </div>
    </BentoTile>
  );
}

function ActivityTile() {
  const [selectedDay, setSelectedDay] = useState(() => activity.indexOf(Math.max(...activity)));
  const selectedSessions = activity[selectedDay] ?? 0;

  return (
    <BentoTile className="min-h-[320px] md:order-4 min-[1025px]:col-start-10 min-[1025px]:row-start-2 min-[1025px]:col-span-3 min-[1025px]:row-span-2 min-[1025px]:min-h-0 min-[1025px]:p-4" ariaLabel="Learning activity graph">
      <div className="relative flex h-full min-h-0 flex-col">
        <header className="flex shrink-0 items-start justify-between gap-4">
          <div>
            <div className="mb-3 grid h-9 w-9 place-items-center rounded-md border border-[#c9c4ff]/14 bg-[#8a7cff]/12 text-[#d7d3ff] min-[1025px]:mb-2 min-[1025px]:h-8 min-[1025px]:w-8">
              <LineChart aria-hidden="true" className="h-5 w-5 min-[1025px]:h-4 min-[1025px]:w-4" />
            </div>
            <h2 className="text-xl font-semibold tracking-normal text-white min-[1025px]:text-lg">Activity pulse</h2>
            <p className="mt-2 text-sm leading-6 text-[#b4b7d2] min-[1025px]:mt-1 min-[1025px]:max-w-[13rem] min-[1025px]:text-xs min-[1025px]:leading-5">48 learning signals across the last sprint.</p>
          </div>
          <span className="rounded-md border border-[#c8c3ff]/14 bg-white/[0.07] px-2 py-1 text-xs text-[#d9d6ff]">+18%</span>
        </header>

        <div className="mt-4 grid shrink-0 grid-cols-8 gap-1.5 min-[1025px]:mt-3 min-[1025px]:gap-1" aria-label="Mock contribution graph" role="group">
          {activity.map((value, index) => (
            <button
              key={index}
              aria-label={`Day ${index + 1}: ${value} learning sessions`}
              aria-pressed={selectedDay === index}
              className={cn(
                "focus-ring h-3 rounded border border-white/[0.04] transition-opacity hover:opacity-90 min-[1025px]:h-2.5",
                selectedDay === index && "ring-1 ring-[#e6e3ff]/85",
                value === 0 && "bg-white/[0.035]",
                value === 1 && "bg-[#5c57a6]/35",
                value === 2 && "bg-[#756dff]/38",
                value === 3 && "bg-[#8f86ff]/48",
                value === 4 && "bg-[#aaa5ff]/58",
                value === 5 && "bg-[#c5c3ff]/70",
                value >= 6 && "bg-[#f1f0ff]/85 shadow-[0_0_18px_rgba(201,197,255,0.5)]"
              )}
              type="button"
              onBlur={() => setSelectedDay(activity.indexOf(Math.max(...activity)))}
              onFocus={() => setSelectedDay(index)}
              onMouseEnter={() => setSelectedDay(index)}
            />
          ))}
        </div>

        <p className="mt-auto shrink-0 pt-3 text-xs font-medium leading-5 text-[#d9d6ff]/80 min-[1025px]:pt-2 min-[1025px]:text-[0.68rem]">
          Day {selectedDay + 1}: {selectedSessions} sessions / 91% review rate
        </p>
      </div>
    </BentoTile>
  );
}

function CourseArea({ courseState }: { courseState: CourseQueryState }) {
  if (courseState.status === "success" && courseState.courses.length > 0) {
    const [primaryCourse, secondaryCourse] = courseState.courses;

    return (
      <>
        <CourseListTile courses={courseState.courses} />
        <CourseTile course={primaryCourse} className="bento-course-notch-left md:order-6 min-[1025px]:col-start-4 min-[1025px]:row-start-4 min-[1025px]:col-span-3 min-[1025px]:row-span-3" />
        <CourseTile
          course={secondaryCourse ?? primaryCourse}
          className="bento-course-notch-right md:order-7 min-[1025px]:col-start-7 min-[1025px]:row-start-4 min-[1025px]:col-span-3 min-[1025px]:row-span-3"
        />
      </>
    );
  }

  return (
    <>
      {courseState.status === "error" ? (
        <CourseStatusTile message={courseState.message} detail={courseState.detail} />
      ) : (
        <CourseStatusTile message="No active courses yet" detail="Supabase responded successfully, but the courses table returned no rows." />
      )}
      <ResumeTile />
      <LearningPathTile />
      <KeywordTile />
    </>
  );
}

function getCourseIcon(iconName: string) {
  return iconMap[iconName.toLowerCase()] ?? BookOpen;
}

function CourseListTile({ courses }: { courses: Course[] }) {
  const activeAverage = Math.round(courses.reduce((total, course) => total + course.progress, 0) / courses.length);

  return (
    <BentoTile className="min-h-[360px] md:order-5 min-[1025px]:col-start-1 min-[1025px]:row-start-4 min-[1025px]:col-span-3 min-[1025px]:row-span-3 min-[1025px]:min-h-0" ariaLabel="Active courses list">
      <div className="relative z-10 flex h-full min-h-0 flex-col gap-4">
        <header className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#cfcaff]/75">Active courses</p>
            <h2 className="mt-2 text-2xl font-semibold leading-tight tracking-normal text-white">{courses.length} in progress</h2>
          </div>
          <span className="rounded-md border border-[#c8c3ff]/14 bg-white/[0.07] px-2 py-1 text-xs text-[#d9d6ff]">{activeAverage}% avg</span>
        </header>

        <div className="course-scroll min-h-0 flex-1 overflow-y-auto pr-1" aria-label="All active courses">
          <ul className="grid gap-3">
            {courses.map((course) => (
              <CourseListRow key={course.id} course={course} />
            ))}
          </ul>
        </div>
      </div>
    </BentoTile>
  );
}

function CourseListRow({ course }: { course: Course }) {
  const Icon = getCourseIcon(course.icon_name);

  return (
    <li className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-md border border-[#bdb8ff]/10 bg-[#151529]/45 p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
      <span className="grid h-9 w-9 place-items-center rounded-md border border-[#c9c4ff]/10 bg-[#8a7cff]/12 text-[#dedbff]">
        <Icon aria-hidden="true" className="h-4 w-4" />
      </span>
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold text-white">{course.title}</p>
        <ProgressBar progress={course.progress} label={`${course.title} mini progress`} compact />
      </div>
      <span className="text-xs font-semibold text-[#d9d6ff]">{course.progress}%</span>
    </li>
  );
}

function CourseTile({ course, className }: { course: Course; className: string }) {
  const Icon = getCourseIcon(course.icon_name);
  const nextMilestone = course.progress >= 90 ? "Final review" : course.progress >= 70 ? "Capstone lab" : "Next lesson";

  return (
    <BentoTile className={cn("min-h-[300px] min-[1025px]:min-h-0", className)} ariaLabel={`${course.title} course progress`}>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(224,222,255,0.13),transparent_28%),linear-gradient(145deg,rgba(118,105,255,0.18),transparent_46%),linear-gradient(320deg,rgba(208,204,255,0.12),transparent_40%)]"
      />
      <div className="relative z-10 flex h-full flex-col justify-end gap-5 min-[1025px]:pt-48">
        <header>
          <div className="mb-5 flex items-start justify-between gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-full border border-[#c8c3ff]/14 bg-[#8a7cff]/13 text-[#ebe9ff] shadow-[0_0_34px_rgba(133,120,255,0.2)]">
              <Icon aria-hidden="true" className="h-5 w-5" />
            </span>
            <span className="rounded-md border border-[#c8c3ff]/14 bg-black/20 px-2 py-1 text-xs font-medium text-[#d9d6ff]">{course.progress}%</span>
          </div>
          <h2 className="text-2xl font-semibold leading-7 tracking-normal text-white">{course.title}</h2>
          <p className="mt-2 text-sm text-[#b4b7d2]">{nextMilestone}</p>
        </header>
        <ProgressBar progress={course.progress} label={`${course.title} progress`} />
      </div>
    </BentoTile>
  );
}

function CourseStatusTile({ message, detail }: { message: string; detail?: string }) {
  return (
    <BentoTile className="min-h-[260px] md:order-5 min-[1025px]:col-start-1 min-[1025px]:row-start-4 min-[1025px]:col-span-3 min-[1025px]:row-span-2 min-[1025px]:min-h-0" ariaLabel="Course data status">
      <div className="relative z-10 flex h-full flex-col justify-between gap-5">
        <header>
          <div className="mb-5 grid h-11 w-11 place-items-center rounded-full border border-[#ffb7d0]/15 bg-[#ff6b9d]/10 text-[#ffc4d8]">
            <AlertTriangle aria-hidden="true" className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-semibold leading-tight tracking-normal text-white">
            {message === "Supabase is not configured yet." ? "Supabase setup pending." : message}
          </h2>
          {detail ? <p className="mt-3 text-sm leading-6 text-[#b4b7d2]">{detail}</p> : null}
        </header>
        <p className="border-l border-[#c8c3ff]/14 pl-3 text-xs leading-5 text-[#d9d6ff]">
          Seed courses.sql to unlock live course tiles.
        </p>
      </div>
    </BentoTile>
  );
}

function ResumeTile() {
  return (
    <BentoTile className="min-h-[130px] md:order-6 min-[1025px]:col-start-1 min-[1025px]:row-start-6 min-[1025px]:col-span-3 min-[1025px]:row-span-1 min-[1025px]:min-h-0" ariaLabel="Resume learning">
      <div className="relative z-10 flex h-full items-center justify-center">
        <button
          className="focus-ring inline-flex items-center gap-2 rounded-full border border-[#e2e0ff]/25 bg-gradient-to-r from-[#7c69ff] via-[#8c7bff] to-[#6b5cff] px-7 py-3 text-sm font-semibold text-white shadow-[0_0_42px_rgba(128,112,255,0.42)] transition hover:brightness-110"
          type="button"
        >
          <PlayCircle aria-hidden="true" className="h-5 w-5" />
          Resume block
        </button>
      </div>
    </BentoTile>
  );
}

function LearningPathTile() {
  return (
    <BentoTile className="bento-course-notch-left min-h-[300px] md:order-7 min-[1025px]:col-start-4 min-[1025px]:row-start-4 min-[1025px]:col-span-3 min-[1025px]:row-span-3 min-[1025px]:min-h-0" ariaLabel="Branching learning paths">
      <FeatureTileBody
        icon={Layers3}
        title="Branching paths"
        body="Explore multiple learning directions with one guided study map."
        tone="from-[#f4f2ff] via-[#bbb5ff] to-[#7b6cff]"
      />
    </BentoTile>
  );
}

function KeywordTile() {
  return (
    <BentoTile className="bento-course-notch-right min-h-[300px] md:order-8 min-[1025px]:col-start-7 min-[1025px]:row-start-4 min-[1025px]:col-span-3 min-[1025px]:row-span-3 min-[1025px]:min-h-0" ariaLabel="Concept enhancer">
      <FeatureTileBody
        icon={Sparkles}
        title="Concept enhancer"
        body="Turn weak tags into targeted drills before the next checkpoint."
        tone="from-[#dfe2ff] via-[#a5a2ff] to-[#6656ff]"
      />
    </BentoTile>
  );
}

function FeatureTileBody({ icon: Icon, title, body, tone }: { icon: LucideIcon; title: string; body: string; tone: string }) {
  return (
    <div className="relative z-10 flex h-full flex-col justify-end">
      <span className={cn("mb-5 grid h-14 w-14 place-items-center rounded-full border border-white/20 bg-gradient-to-br text-[#090915] shadow-[0_0_42px_rgba(139,128,255,0.34)]", tone)}>
        <Icon aria-hidden="true" className="h-6 w-6" />
      </span>
      <h2 className="text-2xl font-semibold tracking-normal text-white">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-[#b4b7d2]">{body}</p>
    </div>
  );
}

function CoachTile() {
  return (
    <BentoTile className="min-h-[300px] md:order-9 min-[1025px]:col-start-10 min-[1025px]:row-start-4 min-[1025px]:col-span-3 min-[1025px]:row-span-3 min-[1025px]:min-h-0" ariaLabel="AI study coach">
      <div className="relative z-10 flex h-full flex-col justify-between">
        <header>
          <h2 className="text-2xl font-semibold tracking-normal text-white">AI study coach</h2>
          <p className="mt-3 text-sm leading-6 text-[#b4b7d2]">Recommended next: pair a concept review with a timed code drill.</p>
        </header>
        <div className="relative h-48">
          <FloatingChip className="left-5 top-3 rotate-[-24deg]" label="Rewrite" />
          <FloatingChip className="right-5 top-8 rotate-[18deg]" label="PDF" />
          <FloatingChip className="bottom-10 left-2 rotate-[15deg]" label="Recall" />
          <FloatingChip className="bottom-4 right-4 rotate-[-12deg]" label="Quiz" />
          <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-gradient-to-br from-[#f4f2ff] via-[#bbb5ff] to-[#7567ff] text-[#090915] shadow-[0_0_48px_rgba(151,139,255,0.45)]">
            <BrainCircuit aria-hidden="true" className="h-7 w-7" />
          </span>
        </div>
      </div>
    </BentoTile>
  );
}

function SupportTile({ courseState }: { courseState: CourseQueryState }) {
  if (courseState.status === "success" && courseState.courses.length > 0) {
    return <LearningMomentumTile courses={courseState.courses} />;
  }

  return <CoachTile />;
}

function LearningMomentumTile({ courses }: { courses: Course[] }) {
  const summary = useMemo(() => {
    const averageProgress = Math.round(courses.reduce((total, course) => total + course.progress, 0) / courses.length);
    const closestToFinish = [...courses].sort((a, b) => b.progress - a.progress)[0];
    const needsAttention = [...courses].sort((a, b) => a.progress - b.progress)[0];

    return { averageProgress, closestToFinish, needsAttention };
  }, [courses]);

  return (
    <BentoTile className="min-h-[300px] md:order-8 md:col-span-2 min-[1025px]:col-start-10 min-[1025px]:row-start-4 min-[1025px]:col-span-3 min-[1025px]:row-span-3 min-[1025px]:min-h-0" ariaLabel="Learning momentum summary">
      <div className="relative z-10 flex h-full flex-col justify-between gap-6">
        <header>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#cfcaff]/75">Weekly momentum</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-normal text-white">{summary.averageProgress}% on track</h2>
          <p className="mt-3 text-sm leading-6 text-[#b4b7d2]">Keep the pace steady with one course milestone before review.</p>
        </header>

        <div className="grid gap-4">
          <SummaryMetric label="Finish next" value={summary.closestToFinish.title} detail={`${summary.closestToFinish.progress}% complete`} />
          <SummaryMetric label="Review queue" value={summary.needsAttention.title} detail={`${summary.needsAttention.progress}% complete`} />
        </div>
      </div>
    </BentoTile>
  );
}

function SummaryMetric({ label, value, detail }: { label: string; value: string; detail: string }) {
  return (
    <div className="border-l border-[#c8c3ff]/14 pl-3">
      <p className="text-xs text-[#858aa8]">{label}</p>
      <p className="mt-1 truncate text-sm font-semibold text-white">{value}</p>
      <p className="mt-1 text-xs text-[#d9d6ff]/70">{detail}</p>
    </div>
  );
}

function FloatingChip({ label, className }: { label: string; className: string }) {
  return (
    <span className={cn("absolute rounded-full border border-[#c8c3ff]/16 bg-white/[0.09] px-4 py-2 text-xs font-semibold text-[#e5e2ff] shadow-lg shadow-black/20 backdrop-blur", className)}>
      {label}
    </span>
  );
}

function ProgressBar({ progress, label, compact = false }: { progress: number; label: string; compact?: boolean }) {
  return (
    <div aria-label={label} role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}>
      <div className={cn("overflow-hidden rounded-full bg-white/10 shadow-inner shadow-black/35", compact ? "mt-2 h-1.5" : "h-2")}>
        <motion.span
          className="block h-full origin-left rounded-full bg-gradient-to-r from-[#f4f2ff] via-[#aaa4ff] to-[#6757ff] shadow-[0_0_18px_rgba(174,166,255,0.52)]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: progress / 100 }}
          transition={{ delay: 0.25, type: "spring", stiffness: 115, damping: 22 }}
        />
      </div>
    </div>
  );
}
