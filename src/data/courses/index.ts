import type { Course, CourseCategory, NoteBlock } from "./types";
import { businessEnvironmentCourse } from "./601-business-environment";
import { businessCommunicationsCourse } from "./602-business-communications";
import { businessLawsCourse } from "./603-business-laws";
import { operationsResearchCourse } from "./604-operations-research";
import { consumerBehaviourCourse } from "./mm-01-consumer-behaviour";
import { salesManagementCourse } from "./mm-02-sales-management";
import { tqmCourse } from "./om-01-tqm";
import { logisticsScmCourse } from "./om-02-logistics-scm";

export const allCourses: Course[] = [
  businessEnvironmentCourse, // 601
  businessCommunicationsCourse, // 602
  businessLawsCourse, // 603
  operationsResearchCourse, // 604
  consumerBehaviourCourse, // MM 01
  salesManagementCourse, // MM 02
  tqmCourse, // OM 01
  logisticsScmCourse, // OM 02
];

export const courseCategories: CourseCategory[] = ["Core", "Marketing", "Operations"];

export function getCourse(slugOrId: string): Course | undefined {
  const clean = slugOrId.toLowerCase().trim();
  return allCourses.find(
    (c) =>
      c.slug.toLowerCase() === clean ||
      c.id.toLowerCase() === clean ||
      c.code.toLowerCase().replace(/\s+/g, "-") === clean ||
      c.code.toLowerCase() === clean,
  );
}

export function coursesByCategory(category: CourseCategory): Course[] {
  return allCourses.filter((c) => c.category === category);
}

export type GlobalSearchHit = {
  courseCode: string;
  courseSlug: string;
  courseTitle: string;
  kind: "topic" | "exam" | "glossary" | "maxim";
  title: string;
  snippet: string;
  href: string;
};

export function searchGlobalNotes(
  query: string,
  filterCourseSlug?: string,
): GlobalSearchHit[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];

  const targetCourses = filterCourseSlug
    ? allCourses.filter((c) => c.slug === filterCourseSlug)
    : allCourses;

  const hits: GlobalSearchHit[] = [];

  for (const course of targetCourses) {
    // 1. Search Topics
    for (const topic of course.topics) {
      const hay = [
        topic.title,
        topic.summary,
        topic.tags.join(" "),
        topic.blocks.map(extractBlockText).join(" "),
      ]
        .join(" ")
        .toLowerCase();

      if (hay.includes(q)) {
        hits.push({
          courseCode: course.code,
          courseSlug: course.slug,
          courseTitle: course.title,
          kind: "topic",
          title: topic.title,
          snippet: topic.summary,
          href: course.slug === "business-laws" ? `/topic/${topic.slug}` : `/${course.slug}/topic/${topic.slug}`,
        });
      }
    }

    // 2. Search Exam Questions
    for (const exam of course.examQuestions) {
      const hay = [
        exam.title,
        exam.question,
        exam.blocks.map(extractBlockText).join(" "),
      ]
        .join(" ")
        .toLowerCase();

      if (hay.includes(q)) {
        hits.push({
          courseCode: course.code,
          courseSlug: course.slug,
          courseTitle: course.title,
          kind: "exam",
          title: `Question ${exam.number}: ${exam.title}`,
          snippet: exam.question,
          href: course.slug === "business-laws" ? `/exam/${exam.id}` : `/${course.slug}/exam/${exam.id}`,
        });
      }
    }

    // 3. Search Glossary
    if (course.glossary) {
      for (const entry of course.glossary) {
        const hay = `${entry.term} ${entry.section ?? ""} ${entry.body}`.toLowerCase();
        if (hay.includes(q)) {
          hits.push({
            courseCode: course.code,
            courseSlug: course.slug,
            courseTitle: course.title,
            kind: "glossary",
            title: entry.term,
            snippet: entry.body,
            href: course.slug === "business-laws" ? `/glossary#${entry.id}` : `/${course.slug}/glossary#${entry.id}`,
          });
        }
      }
    }

    // 4. Search Maxims
    if (course.maxims) {
      for (const maxim of course.maxims) {
        const hay = `${maxim.latin} ${maxim.meaning}`.toLowerCase();
        if (hay.includes(q)) {
          hits.push({
            courseCode: course.code,
            courseSlug: course.slug,
            courseTitle: course.title,
            kind: "maxim",
            title: maxim.latin,
            snippet: maxim.meaning,
            href: `/maxims#${maxim.id}`,
          });
        }
      }
    }
  }

  return hits.slice(0, 50);
}

function extractBlockText(block: NoteBlock): string {
  if (!block) return "";
  switch (block.type) {
    case "h3":
    case "h4":
    case "p":
      return block.text || "";
    case "ul":
    case "ol":
      return (block.items || []).join(" ");
    case "table":
      return [block.caption, ...(block.headers || []), ...(block.rows || []).flat()]
        .filter(Boolean)
        .join(" ");
    case "quote":
      return `${block.text || ""} ${block.cite || ""}`;
    case "def":
      return `${block.term || ""} ${block.section || ""} ${block.body || ""}`;
    case "maxim":
      return `${block.latin || ""} ${block.meaning || ""}`;
    case "callout":
      return `${block.label || ""} ${block.body || ""}`;
    case "diagram":
      return `${block.title || ""} ${block.caption || ""}`;
    default:
      return "";
  }
}

export * from "./types";
