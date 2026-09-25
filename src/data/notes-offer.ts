import type { Topic } from "./types";

export const offerTopics: Topic[] = [
  {
    id: "offer",
    slug: "offer-and-rules",
    number: 7,
    title: "Offer — Meaning, Essentials and Legal Rules",
    unit: "Offer, Acceptance and Communication",
    marks: 14,
    lecture: "18/08/26",
    summary:
      "An offer is a willingness to do or to abstain, made to obtain assent. It must be certain, communicated, and distinct from an invitation to offer or a mere declaration of intention.",
    tags: ["offer", "proposal", "section 2(a)", "invitation to offer"],
    blocks: [
      {
        type: "p",
        text: "Offer is the first step toward a contract. A 14-mark answer should define Section 2(a), list the essential elements, classify offers, then state the mandatory legal rules, including the difference between an offer, an invitation to offer, and a mere declaration of intention.",
      },
      {
        type: "h3",
        text: "Offer / Proposal (Section 2(a))",
      },
      {
        type: "def",
        term: "Proposal",
        section: "Section 2(a)",
        body: "When one person signifies to another his willingness to do or to abstain from doing anything, with a view to obtaining the assent of that other to such act or abstinence, he is said to make a proposal.",
      },
      {
        type: "h4",
        text: "Essential elements",
      },
      {
        type: "ul",
        items: [
          "Must involve at least two parties (one person making it to another).",
          "Must be an expression of readiness or willingness to do (positive act) or to abstain from doing (negative act).",
          "Must be made with a view to obtaining the assent of the other person.",
        ],
      },
      {
        type: "h4",
        text: "Classification of offers",
      },
      {
        type: "ul",
        items: [
          "Express offer versus implied offer.",
          "Specific offer versus general offer.",
        ],
      },
      {
        type: "h3",
        text: "Legal rules as to a valid offer",
      },
      {
        type: "ol",
        items: [
          "_Intention to create legal relations_: the offer must be intended to give rise to legal consequences upon acceptance.",
          "_Certain, definite, and unambiguous terms_: vague or indefinite terms prevent contract formation.",
          "_Communication_: the offer must be communicated to the offeree. An offer cannot be accepted in ignorance of it.",
          "_Made with a view to obtaining assent_: this is distinct from casual inquiries or statements.",
          "_Cannot contain a non-compliance clause_: an offer cannot state that silence or non-communication shall be deemed acceptance.",
          "_Distinguished from invitation to offer_: catalogues, price tags, advertisements, tenders, and auction notices are invitations to offer, not offers.",
          "_Distinguished from a mere declaration of intention_: announcing an auction or an intention to sell is not an offer.",
          "_Communication of special terms_: specific conditions on receipts or tickets must be reasonably brought to notice.",
        ],
      },
      {
        type: "h3",
        text: "Offer distinguished from invitation to offer and declaration of intention",
      },
      {
        type: "p",
        text: "An invitation to offer invites others to make offers. Catalogues, price tags, advertisements, tenders, and auction notices fall in this class. A mere declaration of intention, such as announcing an auction or an intention to sell, is also not an offer. A valid offer is a definite expression of willingness, communicated to another, with a view to obtaining that person's assent, and intended to create legal relations.",
      },
      {
        type: "h3",
        text: "Closing point for a 14-mark answer",
      },
      {
        type: "p",
        text: "Without a valid offer there is no acceptance, no promise, and no contract. Certainty, communication, and an intention to obtain assent are the points most often tested.",
      },
    ],
  },
  {
    id: "acceptance",
    slug: "acceptance-communication-revocation",
    number: 8,
    title: "Acceptance, Communication and Revocation",
    unit: "Offer, Acceptance and Communication",
    marks: 14,
    lecture: "25/08/26",
    summary:
      "Acceptance must be absolute, communicated, and given while the offer is alive. Sections 3, 4 and 5 fix when communication and revocation are complete.",
    tags: ["acceptance", "communication", "revocation", "section 4", "section 5"],
    blocks: [
      {
        type: "p",
        text: "A proposal becomes a promise only when it is accepted. For 14 marks, define acceptance, list the legal rules, then explain communication and revocation under Sections 4 and 5. Keep the \"as against the proposer\" and \"as against the acceptor\" distinction exact.",
      },
      {
        type: "h3",
        text: "Acceptance (Section 2(b))",
      },
      {
        type: "def",
        term: "Acceptance",
        section: "Section 2(b)",
        body: "When the person to whom the proposal is made signifies his assent thereto, the proposal is said to be accepted. A proposal, when accepted, becomes a promise.",
      },
      {
        type: "p",
        text: "Mode: acceptance can be express or implied.",
      },
      {
        type: "h3",
        text: "Legal rules as to valid acceptance",
      },
      {
        type: "ol",
        items: [
          "_Absolute and unqualified_: it must match the offer exactly (Mirror Image Rule). Any conditional acceptance or modification operates as a counter-offer.",
          "_Expressed in the usual or prescribed manner_: if a specific mode is prescribed, acceptance must follow that mode.",
          "_Communicated to the offeror_: acceptance must be actively communicated; mere mental assent is insufficient.",
          "_By whom_: it must be accepted by the person or group to whom the offer is directed.",
          "_To whom_: it must be communicated to the offeror or an authorised agent.",
          "_Before lapse or revocation of the offer_: it must be given while the offer is alive.",
        ],
      },
      {
        type: "h3",
        text: "Communication of offer and acceptance (Sections 3 and 4)",
      },
      {
        type: "h4",
        text: "Communication of offer (Section 4)",
      },
      {
        type: "p",
        text: "Complete when it comes to the knowledge of the person to whom it is made.",
      },
      {
        type: "h4",
        text: "Communication of acceptance (Section 4)",
      },
      {
        type: "ul",
        items: [
          "_As against the proposer_: when put into the course of transmission so as to be out of the power of the acceptor.",
          "_As against the acceptor_: when it comes to the knowledge of the proposer.",
        ],
      },
      {
        type: "h3",
        text: "Revocation of offer and acceptance (Section 5)",
      },
      {
        type: "ul",
        items: [
          "_Offer_: may be revoked at any time before communication of its acceptance is complete as against the proposer.",
          "_Acceptance_: may be revoked at any time before communication of the acceptance is complete as against the acceptor.",
        ],
      },
      {
        type: "callout",
        label: "Exam caution",
        body: "Do not write that an offer can be revoked at any time, or that acceptance cannot be revoked. The Act ties both to the moment communication is complete as against the relevant party.",
      },
      {
        type: "h3",
        text: "Closing point for a 14-mark answer",
      },
      {
        type: "p",
        text: "Acceptance turns a proposal into a promise. It must be a mirror of the offer, communicated in the proper way, by the proper person, while the offer still lives. Communication and revocation are complete at different moments for the proposer and the acceptor.",
      },
    ],
  },
];
