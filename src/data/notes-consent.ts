import type { Topic } from "./types";

export const consentTopics: Topic[] = [
  {
    id: "capacity-consent",
    slug: "capacity-free-consent",
    number: 9,
    title: "Capacity of Parties and Free Consent",
    unit: "Capacity, Consent and Classification",
    marks: 14,
    lecture: "27/08/26",
    summary:
      "Only a major of sound mind who is not disqualified by law can contract. Consent is free when it is not caused by coercion, undue influence, fraud, misrepresentation, or mistake.",
    tags: ["capacity", "section 11", "consent", "coercion", "fraud"],
    blocks: [
      {
        type: "p",
        text: "Capacity and free consent are two separate essentials of a valid contract. A 14-mark answer should treat Section 11 first, then Sections 13 and 14, then the vitiating factors taught in class: coercion, undue influence, and fraud. Misrepresentation and mistake belong with the next topic, but they are named in Section 14 and should be listed here.",
      },
      {
        type: "h3",
        text: "Capacity to contract (Section 11)",
      },
      {
        type: "p",
        text: "Every person is competent to contract who:",
      },
      {
        type: "ol",
        items: [
          "Is of the age of majority according to the law to which they are subject (18 years under the Indian Majority Act, 1875).",
          "Is of sound mind.",
          "Is not disqualified from contracting by any law to which they are subject.",
        ],
      },
      {
        type: "h4",
        text: "Disqualified persons",
      },
      {
        type: "ul",
        items: [
          "_Minors_: agreements are _void ab initio_.",
          "_Persons of unsound mind_: idiots, lunatics, drunkards or intoxicated persons.",
          "_Disqualified by law_: alien enemies, foreign sovereigns, convicts, undischarged insolvents.",
        ],
      },
      {
        type: "h3",
        text: "Free consent (Sections 13 and 14)",
      },
      {
        type: "def",
        term: "Consent",
        section: "Section 13",
        body: "Two or more persons are said to consent when they agree upon the same thing in the same sense (_consensus ad idem_).",
      },
      {
        type: "def",
        term: "Free consent",
        section: "Section 14",
        body: "Consent is free when not caused by coercion (Section 15), undue influence (Section 16), fraud (Section 17), misrepresentation (Section 18), or mistake (Sections 20–22).",
      },
      {
        type: "h3",
        text: "Coercion (Section 15)",
      },
      {
        type: "p",
        text: "Coercion is committing or threatening to commit any act forbidden by the Indian Penal Code, or unlawfully detaining or threatening to detain property, to prejudice any person, with the intention of causing any person to enter into an agreement.",
      },
      {
        type: "h4",
        text: "Types and illustrations of coercion",
      },
      {
        type: "ul",
        items: [
          "Committing an act forbidden by the Indian Penal Code.",
          "Threatening to commit an act forbidden by the Indian Penal Code.",
          "Unlawful detention of property.",
          "Threat to detain property.",
          "Threat to commit suicide constitutes coercion (_Chikkam Ammiraju v. Seshamma_).",
          "Threat to file a legitimate suit is not coercion.",
        ],
      },
      {
        type: "h4",
        text: "Effect of coercion (Section 19)",
      },
      {
        type: "p",
        text: "The contract is voidable at the option of the aggrieved party.",
      },
      {
        type: "h3",
        text: "Undue influence (Section 16)",
      },
      {
        type: "p",
        text: "Undue influence exists when relations between the parties are such that one is in a position to dominate the will of the other and uses that position to obtain an unfair advantage. It arises in real or apparent authority, fiduciary relationships, or mental distress.",
      },
      {
        type: "p",
        text: "Effect (Section 19A): the contract is voidable at the option of the aggrieved party.",
      },
      {
        type: "h3",
        text: "Fraud (Section 17)",
      },
      {
        type: "p",
        text: "Fraud is intentional deception to induce agreement. It includes:",
      },
      {
        type: "ol",
        items: [
          "Suggesting as a fact that which is not true by one who does not believe it to be true.",
          "Active concealment of a fact by one having knowledge or belief of it.",
          "A promise made without any intention of performing it.",
          "Any other act fitted to deceive.",
          "Any act or omission specifically declared fraudulent by law.",
        ],
      },
      {
        type: "h4",
        text: "Mere silence is not fraud",
      },
      {
        type: "p",
        text: "Mere silence as to facts is generally not fraud, except where there is a duty to speak (_contracts uberrimae fidei_ such as insurance, marriage, family settlement, share allotment) or where silence is equivalent to speech. The principle of _caveat emptor_ (let the buyer beware) also applies.",
      },
      {
        type: "h3",
        text: "Closing point for a 14-mark answer",
      },
      {
        type: "p",
        text: "A person who is not competent cannot make a contract. A person who is competent still does not make a free contract if consent is obtained by coercion, undue influence, or fraud. Those contracts are voidable at the option of the aggrieved party.",
      },
    ],
  },
  {
    id: "classification-mistake",
    slug: "classification-mistake-incapacity",
    number: 10,
    title: "Classification of Contracts, Misrepresentation, Mistake and Mental Incapacity",
    unit: "Capacity, Consent and Classification",
    marks: 14,
    lecture: "27/08/26",
    summary:
      "Contracts are classified by enforceability, formation, and performance. Misrepresentation and bilateral mistake of fact have different effects. Idiots, lunatics, and drunkards are treated separately.",
    tags: ["classification", "misrepresentation", "mistake", "idiot", "lunatic"],
    blocks: [
      {
        type: "p",
        text: "This topic combines two examination favourites: the classification of contracts, and the remaining vitiating factors of misrepresentation and mistake, together with the detailed rules on mental incapacity.",
      },
      {
        type: "h3",
        text: "Classification of contracts",
      },
      {
        type: "h4",
        text: "By enforceability",
      },
      {
        type: "ul",
        items: [
          "_Valid_: an agreement enforceable by law.",
          "_Voidable_: enforceable at the option of one or more parties, but not at the option of the other or others.",
          "_Void_: a void agreement is unenforceable from the beginning (_void ab initio_). A void contract is one which later ceases to be enforceable.",
          "_Illegal_: an agreement that the law does not permit.",
          "_Unenforceable_: an agreement that cannot be enforced, for example for want of a required formality.",
        ],
      },
      {
        type: "h4",
        text: "By formation",
      },
      {
        type: "ul",
        items: [
          "Express",
          "Implied",
          "Quasi-contract",
          "E-contract",
        ],
      },
      {
        type: "h4",
        text: "By extent of performance",
      },
      {
        type: "ul",
        items: [
          "_Executed_: performed.",
          "_Executory_: still to be performed (unilateral or bilateral).",
        ],
      },
      {
        type: "callout",
        label: "How to keep the types distinct",
        body: "Enforceability asks whether the law will compel performance. Formation asks how the contract came into being. Performance asks whether the obligations have already been carried out.",
      },
      {
        type: "h3",
        text: "Misrepresentation (Section 18)",
      },
      {
        type: "ul",
        items: [
          "Unwarranted positive assertions without deceptive intent.",
          "Breach of duty without intent to deceive (constructive fraud).",
          "Inducing an innocent mistake of fact.",
        ],
      },
      {
        type: "p",
        text: "Effect (Section 19): voidable at the option of the aggrieved party.",
      },
      {
        type: "h3",
        text: "Mistake (Sections 20, 21, 22)",
      },
      {
        type: "p",
        text: "Mistake of law plus mistake of fact together make up mistake as a vitiating factor.",
      },
      {
        type: "h4",
        text: "Mistake of law",
      },
      {
        type: "ul",
        items: [
          "Indian law: _Ignorantia juris non excusat_. No relief; the contract remains valid.",
          "Foreign law: treated as a mistake of fact (void).",
        ],
      },
      {
        type: "h4",
        text: "Mistake of fact",
      },
      {
        type: "ul",
        items: [
          "_Bilateral mistake (Section 20)_: both parties under a mistake as to a matter of fact essential to the agreement. The agreement is void.",
          "_Unilateral mistake (Section 22)_: only one party under a mistake. The contract is not voidable (it remains valid), except in cases of mistaken identity of person or nature of the transaction.",
        ],
      },
      {
        type: "h3",
        text: "Mental incapacity and legal status",
      },
      {
        type: "def",
        term: "Idiot",
        body: "Devoid of rational thinking from birth. All agreements (except for necessaries of life) are absolutely void.",
      },
      {
        type: "def",
        term: "Lunatic",
        body: "Deranged mental faculties due to disease or strain. Agreements are void, except those made during lucid intervals.",
      },
      {
        type: "def",
        term: "Drunkard / intoxicated",
        body: "Temporarily incapable of rational judgment. Agreements made while intoxicated are void.",
      },
      {
        type: "p",
        text: "Persons disqualified by law include alien enemies, convicts, insolvents, and corporations acting _ultra vires_.",
      },
      {
        type: "h3",
        text: "Closing point for a 14-mark answer",
      },
      {
        type: "p",
        text: "Classification tells you what kind of contract you are looking at. Misrepresentation makes a contract voidable. A bilateral mistake of essential fact makes the agreement void. An idiot's agreement is absolutely void; a lunatic may contract in a lucid interval.",
      },
    ],
  },
];
