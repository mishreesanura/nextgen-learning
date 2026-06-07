export type Course = {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
  created_at: string;
};

export type CourseQueryState =
  | {
      status: "success";
      courses: Course[];
    }
  | {
      status: "error";
      message: string;
      detail?: string;
    };
