import { BentoDashboard } from "@/components/dashboard/bento-dashboard";
import { NavigationShell } from "@/components/dashboard/navigation-shell";
import { getCourses } from "@/lib/courses";

export const dynamic = "force-dynamic";

export default async function Home() {
  const courseState = await getCourses();

  return (
    <NavigationShell>
      <BentoDashboard courseState={courseState} />
    </NavigationShell>
  );
}
