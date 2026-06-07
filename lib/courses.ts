import "server-only";

import { createSupabaseServerClient, hasSupabaseConfig } from "@/lib/supabase/server";
import type { Course, CourseQueryState } from "@/types/course";

type CourseRow = {
  id: string | null;
  title: string | null;
  progress: number | null;
  icon_name: string | null;
  created_at: string | null;
};

const COURSE_FETCH_TIMEOUT_MS = 8000;

export async function getCourses(): Promise<CourseQueryState> {
  if (!hasSupabaseConfig()) {
    return {
      status: "error",
      message: "Supabase is not configured yet.",
      detail: "Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local."
    };
  }

  try {
    const supabase = await createSupabaseServerClient();
    const signal = AbortSignal.timeout(COURSE_FETCH_TIMEOUT_MS);
    const { data, error } = await supabase
      .from("courses")
      .select("id,title,progress,icon_name,created_at")
      .order("created_at", { ascending: false })
      .abortSignal(signal);

    if (error) {
      return {
        status: "error",
        message: "Could not load courses from Supabase.",
        detail: error.message
      };
    }

    return {
      status: "success",
      courses: ((data ?? []) as CourseRow[]).map(normalizeCourse).filter(Boolean)
    };
  } catch (error) {
    return {
      status: "error",
      message: "The dashboard could not reach Supabase.",
      detail: error instanceof Error ? error.message : "Unknown Supabase error."
    };
  }
}

function normalizeCourse(row: CourseRow): Course {
  return {
    id: row.id ?? crypto.randomUUID(),
    title: row.title?.trim() || "Untitled course",
    progress: clampProgress(row.progress),
    icon_name: row.icon_name?.trim() || "book",
    created_at: row.created_at ?? new Date(0).toISOString()
  };
}

function clampProgress(value: number | null) {
  const progress = Number(value ?? 0);

  if (!Number.isFinite(progress)) {
    return 0;
  }

  return Math.min(100, Math.max(0, Math.round(progress)));
}
