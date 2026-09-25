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
  | { type: "tree"; title?: string; lines: string[] };

export type Topic = {
  id: string;
  slug: string;
  number: number;
  title: string;
  unit: string;
  marks: 14;
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
  marks: 14;
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
