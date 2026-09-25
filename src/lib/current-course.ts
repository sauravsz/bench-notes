import { create } from "zustand";
import { persist } from "zustand/middleware";
import { allCourses, getCourse, type Course } from "@/data/courses";

type CurrentCourseState = {
  activeCourseSlug: string;
  setActiveCourseSlug: (slug: string) => void;
  getActiveCourse: () => Course;
};

export const useCurrentCourse = create<CurrentCourseState>()(
  persist(
    (set, get) => ({
      activeCourseSlug: "business-laws",

      setActiveCourseSlug: (slug: string) => {
        const course = getCourse(slug);
        if (course) {
          set({ activeCourseSlug: course.slug });
        }
      },

      getActiveCourse: () => {
        const slug = get().activeCourseSlug;
        return getCourse(slug) || allCourses[2]; // Default to 603 Business Laws
      },
    }),
    {
      name: "bench-notes-active-course-v1",
    },
  ),
);
