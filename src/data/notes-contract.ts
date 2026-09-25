import type { Topic } from "./types";

export const contractTopics: Topic[] = [
  {
    id: "contract-foundations",
    slug: "contract-agreement-promise",
    number: 3,
    title: "Contract, Agreement and Promise",
    unit: "Indian Contract Act, 1872",
    marks: 14,
    lecture: "Unit 1",
    summary:
      "A contract is an agreement enforceable by law. Every contract is an agreement, but every agreement is not a contract.",
    tags: ["contract", "agreement", "promise", "section 2"],
    blocks: [
      {
        type: "p",
        text: "The Indian Contract Act, 1872 defines the path from proposal to contract. For 14 marks, state the statutory definitions, add the juristic definitions, then draw the distinction between agreement and contract, and close with why every contract is an agreement but not vice versa.",
      },
      {
        type: "h3",
        text: "Statutory definitions",
      },
      {
        type: "def",
        term: "Contract",
        section: "Section 2(h)",
        body: "An agreement enforceable by law is a contract.",
      },
      {
        type: "def",
        term: "Agreement",
        section: "Section 2(e)",
        body: "Every promise and every set of promises, forming the consideration for each other, is an agreement.",
      },
      {
        type: "def",
        term: "Promise",
        section: "Section 2(b)",
        body: "When the person to whom the proposal is made signifies his assent thereto, the proposal is said to be accepted. A proposal, when accepted, becomes a promise.",
      },
      {
        type: "h3",
        text: "Juristic definitions of contract",
      },
      {
        type: "ul",
        items: [
          "_Pollock_: Every agreement and promise enforceable at law is a contract.",
          "_Salmond_: An agreement creating and defining obligation between parties.",
          "_Anson_: A legally binding agreement between two or more persons by which rights are acquired by one or more to acts or forbearances on the part of the other.",
        ],
      },
      {
        type: "h3",
        text: "Distinction between agreement and contract",
      },
      {
        type: "table",
        caption: "Agreement compared with contract",
        headers: ["Basis", "Agreement", "Contract"],
        rows: [
          [
            "Formula",
            "Offer + Acceptance",
            "Agreement + Enforceability",
          ],
          [
            "Binding nature",
            "Not necessarily legally binding",
            "Strictly binding on all concerned parties",
          ],
          [
            "Legal obligation",
            "May or may not create a legal obligation",
            "Necessarily creates a legal obligation",
          ],
          [
            "Scope",
            "Wider term (all contracts are agreements)",
            "Narrower term (all agreements are not contracts)",
          ],
        ],
      },
      {
        type: "h3",
        text: "Why contracts are agreements, but not vice versa",
      },
      {
        type: "p",
        text: "An agreement is formed when a proposal is accepted and the promises form consideration for each other. That agreement becomes a contract only when it is enforceable by law. Enforceability requires the essentials of a valid contract under Section 10, including lawful consideration and object, capacity, free consent, certainty, possibility of performance, and the absence of an express statutory bar. Social and domestic arrangements may be agreements, but they lack the intention to create legal relations, so they are not contracts. Void agreements are also not contracts. Hence the class is wider than the subclass: every contract is an agreement, but every agreement is not a contract.",
      },
      {
        type: "h3",
        text: "Taxonomy of the Indian Contract Act, 1872",
      },
      {
        type: "ul",
        items: [
          "General Principles of Law of Contract (Sections 1–75).",
          "Special Contracts: Indemnity and Guarantee (Sections 124–147); Bailment and Pledge (Sections 148–181); Agency (Sections 182–238).",
          "Sale of Goods was originally Sections 76–123 and Partnership was originally Sections 239–266. Those parts were later codified into separate Acts in 1930 and 1932.",
        ],
      },
      {
        type: "h3",
        text: "Closing point for a 14-mark answer",
      },
      {
        type: "p",
        text: "Proposal plus acceptance gives a promise. Reciprocal promises give an agreement. Agreement plus enforceability by law gives a contract. That is why the two terms are not interchangeable.",
      },
    ],
  },
  {
    id: "definitions-essentials",
    slug: "definitions-essentials",
    number: 4,
    title: "Statutory Definitions and Essentials of a Valid Contract",
    unit: "Indian Contract Act, 1872",
    marks: 14,
    summary:
      "Section 2 defines the working vocabulary of the Act. Section 10 then lists what an agreement must have before the law will enforce it.",
    tags: ["section 2", "section 10", "essentials", "definitions"],
    blocks: [
      {
        type: "p",
        text: "A 14-mark answer on essentials should first define the key terms in Section 2, then list the ten essentials of a valid contract. Keep the statutory wording. Do not substitute a paraphrase for the definition itself.",
      },
      {
        type: "h3",
        text: "Core contractual terms",
      },
      {
        type: "def",
        term: "Proposal / Offer",
        section: "Section 2(a)",
        body: "When one person signifies to another his willingness to do or to abstain from doing anything, with a view to obtaining the assent of that other to such act or abstinence.",
      },
      {
        type: "def",
        term: "Promise",
        section: "Section 2(b)",
        body: "A proposal when accepted.",
      },
      {
        type: "def",
        term: "Promisor and Promisee",
        section: "Section 2(c)",
        body: "The person making the proposal is the Promisor; the person accepting is the Promisee.",
      },
      {
        type: "def",
        term: "Consideration",
        section: "Section 2(d)",
        body: "When, at the desire of the promisor, the promisee or any other person has done or abstained from doing, or does or abstains from doing, or promises to do or to abstain from doing, something, such act or abstinence or promise is called a consideration for the promise.",
      },
      {
        type: "def",
        term: "Agreement",
        section: "Section 2(e)",
        body: "Every promise and every set of promises forming consideration for each other.",
      },
      {
        type: "def",
        term: "Reciprocal promises",
        section: "Section 2(f)",
        body: "Promises which form the consideration or part of the consideration for each other.",
      },
      {
        type: "def",
        term: "Void agreement",
        section: "Section 2(g)",
        body: "An agreement not enforceable by law is void. Void ab initio means void from the beginning.",
      },
      {
        type: "def",
        term: "Contract",
        section: "Section 2(h)",
        body: "An agreement enforceable by law.",
      },
      {
        type: "def",
        term: "Voidable contract",
        section: "Section 2(i)",
        body: "An agreement enforceable by law at the option of one or more of the parties thereto, but not at the option of the other or others.",
      },
      {
        type: "def",
        term: "Void contract",
        section: "Section 2(j)",
        body: "A contract which ceases to be enforceable by law becomes void when it ceases to be enforceable.",
      },
      {
        type: "callout",
        label: "Void agreement and void contract",
        body: "A void agreement never becomes a contract. It is unenforceable from the start (_void ab initio_). A void contract starts as a contract and later ceases to be enforceable.",
      },
      {
        type: "h3",
        text: "Ten essentials of a valid contract (Section 10)",
      },
      {
        type: "ol",
        items: [
          "Proper offer and its proper acceptance.",
          "Intention to create legal relationship (not mere social or domestic agreements).",
          "Lawful consideration.",
          "Lawful object.",
          "Capacity of parties to contract (competency).",
          "Free consent (must not be vitiated by coercion, undue influence, fraud, misrepresentation, or mistake).",
          "Certainty and definiteness of terms.",
          "Possibility of performance (physical and legal).",
          "Agreement not expressly declared to be void by law (for example, in restraint of trade, marriage, or legal proceedings).",
          "Legal formalities (compliance with writing, registration, and stamp duty where mandated).",
        ],
      },
      {
        type: "h3",
        text: "Intention to create legal relations",
      },
      {
        type: "p",
        text: "Social and domestic agreements, including ordinary household arrangements, are not contracts because they lack the intention to create legal relations. The offer itself must also be intended to give rise to legal consequences upon acceptance.",
      },
      {
        type: "h3",
        text: "Closing point for a 14-mark answer",
      },
      {
        type: "p",
        text: "Section 2 supplies the vocabulary. Section 10 supplies the test. An agreement that misses any essential is not a contract, even if the parties used the word contract.",
      },
    ],
  },
];
