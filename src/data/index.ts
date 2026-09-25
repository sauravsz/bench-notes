import type { NoteBlock, Topic } from "./types";
import { judiciaryTopics } from "./notes-judiciary";
import { contractTopics } from "./notes-contract";
import { constitutionTopics } from "./notes-constitution";
import { offerTopics } from "./notes-offer";
import { consentTopics } from "./notes-consent";
import { dischargeTopics } from "./notes-discharge";
import { companiesTopics } from "./notes-companies";
import { examQuestions } from "./exam-answers";
import { glossary } from "./glossary";
import { maxims } from "./maxims";

export const topics: Topic[] = [
  ...judiciaryTopics,
  ...contractTopics,
  ...constitutionTopics,
  ...offerTopics,
  ...consentTopics,
  ...dischargeTopics,
  ...companiesTopics,
];

export const units = [
  "Judiciary and Legal System",
  "Indian Contract Act, 1872",
  "Constitution and Legal Environment",
  "Offer, Acceptance and Communication",
  "Capacity, Consent and Classification",
  "Discharge, Breach and Remedies",
  "Companies Act, 2013",
] as const;

export function topicsByUnit(unit: string): Topic[] {
  return topics.filter((t) => t.unit === unit);
}

export function getTopic(slug: string): Topic | undefined {
  return topics.find((t) => t.slug === slug);
}

export function adjacentTopics(slug: string): {
  prev?: Topic;
  next?: Topic;
} {
  const i = topics.findIndex((t) => t.slug === slug);
  if (i < 0) return {};
  return {
    prev: i > 0 ? topics[i - 1] : undefined,
    next: i < topics.length - 1 ? topics[i + 1] : undefined,
  };
}

export function getExam(id: string) {
  return examQuestions.find((q) => q.id === id);
}

function blockText(block: NoteBlock): string {
  switch (block.type) {
    case "h3":
    case "h4":
    case "p":
      return block.text;
    case "ul":
    case "ol":
      return block.items.join(" ");
    case "table":
      return [block.caption, ...block.headers, ...block.rows.flat()]
        .filter(Boolean)
        .join(" ");
    case "quote":
      return `${block.text} ${block.cite ?? ""}`;
    case "def":
      return `${block.term} ${block.section ?? ""} ${block.body}`;
    case "maxim":
      return `${block.latin} ${block.meaning}`;
    case "callout":
      return `${block.label} ${block.body}`;
    case "tree":
      return `${block.title ?? ""} ${block.lines.join(" ")}`;
    default:
      return "";
  }
}

export type SearchHit = {
  kind: "topic" | "exam" | "glossary" | "maxim";
  title: string;
  snippet: string;
  href: string;
};

export function searchNotes(query: string): SearchHit[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];
  const hits: SearchHit[] = [];

  for (const topic of topics) {
    const hay = [
      topic.title,
      topic.summary,
      topic.tags.join(" "),
      topic.blocks.map(blockText).join(" "),
    ]
      .join(" ")
      .toLowerCase();
    if (hay.includes(q)) {
      hits.push({
        kind: "topic",
        title: topic.title,
        snippet: topic.summary,
        href: `/topic/${topic.slug}`,
      });
    }
  }

  for (const exam of examQuestions) {
    const hay = [
      exam.title,
      exam.question,
      exam.blocks.map(blockText).join(" "),
    ]
      .join(" ")
      .toLowerCase();
    if (hay.includes(q)) {
      hits.push({
        kind: "exam",
        title: `Q${exam.number}. ${exam.title}`,
        snippet: exam.question,
        href: `/exam/${exam.id}`,
      });
    }
  }

  for (const entry of glossary) {
    const hay = `${entry.term} ${entry.section ?? ""} ${entry.body}`.toLowerCase();
    if (hay.includes(q)) {
      hits.push({
        kind: "glossary",
        title: entry.term,
        snippet: entry.body,
        href: `/glossary#${entry.id}`,
      });
    }
  }

  for (const maxim of maxims) {
    const hay = `${maxim.latin} ${maxim.meaning}`.toLowerCase();
    if (hay.includes(q)) {
      hits.push({
        kind: "maxim",
        title: maxim.latin,
        snippet: maxim.meaning,
        href: `/maxims#${maxim.id}`,
      });
    }
  }

  return hits.slice(0, 40);
}

export { examQuestions, glossary, maxims };
