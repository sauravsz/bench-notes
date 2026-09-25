import type { Course } from "./types";

export const businessCommunicationsCourse: Course = {
  id: "602",
  slug: "business-communications",
  code: "602",
  title: "Business Communications",
  category: "Core",
  description:
    "Mastery of managerial communication, 7 Cs principles, corporate negotiation, executive reporting, cross-cultural barriers, and digital workplace correspondence.",
  instructor: "Core Faculty",
  accentColor: "#7C3AED",
  units: [
    "Foundations of Business Communication",
    "Written & Executive Correspondence",
    "Oral, Non-Verbal & Group Dynamics",
    "Corporate & Crisis Communication",
  ],
  topics: [
    {
      id: "comm-01",
      slug: "process-and-7cs-communication",
      number: 1,
      title: "The Communication Process and the 7 Cs Framework",
      unit: "Foundations of Business Communication",
      summary:
        "The transmission model of communication (Sender, Encoding, Channel, Receiver, Decoding, Feedback, Noise) and the Seven Cs of effective managerial messaging.",
      tags: ["communication", "7cs", "encoding", "decoding", "feedback", "barriers"],
      blocks: [
        {
          type: "p",
          text: "Communication is the lifeblood of management. It is a two-way dynamic process of transferring information, ideas, feelings, and understanding between a sender and a receiver with measurable feedback.",
        },
        {
          type: "h3",
          text: "1. The 7 Cs of Effective Business Communication",
        },
        {
          type: "table",
          headers: ["Principle", "Core Operational Rule", "Managerial Application"],
          rows: [
            [
              "1. Completeness",
              "Message must contain all necessary facts and information required for the receiver to make an informed decision without follow-up ambiguity.",
              "An RFP or email meeting invitation specifying date, time, virtual link, agenda, and pre-read attachments.",
            ],
            [
              "2. Conciseness",
              "Expressing the message in the fewest possible words without sacrificing clarity or courtesy. Eliminate redundant wordiness.",
              "Executive summaries, pitch memos, and dashboard executive bullet points.",
            ],
            [
              "3. Clarity",
              "Using precise language and unambiguous sentence structure so the reader understands the exact intended meaning.",
              "Avoiding technical jargon with non-technical clients; defining metrics clearly.",
            ],
            [
              "4. Concreteness",
              "Using specific facts, verified figures, and actionable data rather than vague generalizations.",
              "'Revenue increased by 18.4% YoY to ₹42.6 Cr' instead of 'Sales grew significantly'.",
            ],
            [
              "5. Courtesy",
              "Respectful, empathetic, and professional tone that values the receiver's perspective and fosters goodwill.",
              "Prompt acknowledgment of client emails, constructive performance feedback.",
            ],
            [
              "6. Correctness",
              "Grammatical precision, accurate statutory/financial facts, and appropriate formal styling.",
              "Error-free audit reports, legal contracts, and financial prospectuses.",
            ],
            [
              "7. Consideration",
              "Adopting the 'You-Attitude' by focusing on the receiver's needs, interests, and benefits rather than the sender's ego.",
              "'You can now track your shipments in real-time' instead of 'We have launched a tracking feature'.",
            ],
          ],
        },
      ],
    },
  ],
  examQuestions: [
    {
      id: "comm-q1",
      number: 1,
      title: "The 7 Cs Framework and Barriers to Communication",
      question:
        "Explain the 7 Cs of effective business communication with corporate examples. Identify major organizational and psychological barriers to communication.",
      relatedSlugs: ["process-and-7cs-communication"],
      blocks: [
        {
          type: "p",
          text: "Effective managerial communication is determined by the 7 Cs principles and the systematic removal of environmental, semantic, psychological, and organizational barriers.",
        },
        {
          type: "h3",
          text: "Major Barriers to Business Communication",
        },
        {
          type: "ul",
          items: [
            "**Semantic / Linguistic Barriers**: Jargon, technical acronyms, words with multiple connotations, and poorly translated cross-border communications.",
            "**Psychological & Emotional Barriers**: Preconceived biases, selective perception, halo effect, emotional resistance to change, and defensive attitudes.",
            "**Organizational Barriers**: Excessive organizational hierarchy layers (filtering of information), rigid status differences, and lack of upward feedback channels.",
            "**Physical & Environmental Noise**: Distance, background noise, digital connectivity disruptions, and information overload from unmanaged email streams.",
          ],
        },
      ],
    },
  ],
  glossary: [
    {
      id: "comm-g1",
      term: "You-Attitude",
      body: "Communication approach that focuses on the audience's point of view, needs, and benefits rather than the writer's self-interest.",
      topicSlug: "process-and-7cs-communication",
    },
  ],
};
