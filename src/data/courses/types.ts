export type DiagramKind =
  | "judiciary-hierarchy"
  | "contract-formation"
  | "contract-classification"
  | "free-consent"
  | "discharge-remedies"
  | "company-types"
  | "pestle-framework"
  | "communication-process"
  | "linear-programming"
  | "consumer-decision"
  | "sales-funnel"
  | "tqm-house"
  | "supply-chain-flow";

export type NoteBlock =
  | { type: "h3"; text: string }
  | { type: "h4"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | {
      type: "table";
      caption?: string;
      headers: string[];
      rows: string[][];
    }
  | { type: "quote"; text: string; cite?: string }
  | { type: "def"; term: string; section?: string; body: string }
  | { type: "maxim"; latin: string; meaning: string }
  | { type: "callout"; label: string; body: string }
  | { type: "tree"; title?: string; lines: string[] }
  | { type: "diagram"; kind: DiagramKind; title?: string; caption?: string };

export type Topic = {
  id: string;
  slug: string;
  number: number;
  title: string;
  unit: string;
  marks?: number;
  lecture?: string;
  summary: string;
  tags: string[];
  blocks: NoteBlock[];
};

export type ExamQuestion = {
  id: string;
  number: number;
  title: string;
  question: string;
  marks?: number;
  relatedSlugs: string[];
  blocks: NoteBlock[];
};

export type GlossaryEntry = {
  id: string;
  term: string;
  section?: string;
  body: string;
  topicSlug: string;
};

export type Maxim = {
  id: string;
  latin: string;
  meaning: string;
};

export type CourseCategory = "Core" | "Marketing" | "Operations";

export type Course = {
  id: string;
  slug: string;
  code: string;
  title: string;
  category: CourseCategory;
  description: string;
  instructor?: string;
  accentColor: string; // e.g. 'amber', 'sky', 'emerald', 'indigo', 'rose', 'purple'
  units: string[];
  topics: Topic[];
  examQuestions: ExamQuestion[];
  glossary?: GlossaryEntry[];
  maxims?: Maxim[];
};
