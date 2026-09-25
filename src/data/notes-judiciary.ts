import type { Topic } from "./types";

export const judiciaryTopics: Topic[] = [
  {
    id: "judiciary",
    slug: "indian-judiciary",
    number: 1,
    title: "Structure of the Indian Judiciary",
    unit: "Judiciary and Legal System",
    marks: 14,
    lecture: "11/08/26",
    summary:
      "The judiciary is an independent body, separate from the executive and the legislature, headed by the Supreme Court and organised down to Lok Adalats.",
    tags: ["judiciary", "courts", "hierarchy", "lok adalat"],
    blocks: [
      {
        type: "p",
        text: "The Judiciary of India is the organ that maintains law and order in the country and solves problems related to civil and criminal offences. It is based on the British Legal System. In examination answers, begin by stating that it is independent and separate from the other two organs of the State, then set out the hierarchy and the work of each layer.",
      },
      {
        type: "h3",
        text: "Characteristics and functions",
      },
      {
        type: "ul",
        items: [
          "It is an independent body.",
          "It is separate from the Executive and the Legislative bodies.",
          "The apex body is the Supreme Court.",
          "Below the Supreme Court come High Courts at the state level, District Courts at the district level, and Lok Adalats at the village and Panchayat level.",
          "The system is based on the British Legal System.",
          "Its function is maintenance of law and order, together with the resolution of civil and criminal offences.",
        ],
      },
      {
        type: "h3",
        text: "Hierarchy of courts in India",
      },
      {
        type: "p",
        text: "The courts stand in a clear chain of authority. The Supreme Court of India is at the apex. High Courts stand next. Subordinate or lower courts operate in the districts. Those district courts then split into three streams: civil, criminal, and revenue.",
      },
      {
        type: "tree",
        title: "Hierarchy of courts",
        lines: [
          "Supreme Court of India (Apex)",
          "        |",
          "   High Courts",
          "        |",
          "Subordinate or Lower Courts in Districts",
          "   ______|______________________________",
          "  |                 |                   |",
          "Civil Courts   Criminal Courts    Revenue Courts",
        ],
      },
      {
        type: "h4",
        text: "Civil courts",
      },
      {
        type: "ul",
        items: [
          "District Judge",
          "Sub-Judge",
          "Family Courts",
        ],
      },
      {
        type: "h4",
        text: "Criminal courts",
      },
      {
        type: "ul",
        items: [
          "Sessions Judge",
          "Chief Judicial Magistrate",
          "Assistant Sessions",
          "Judicial Magistrate",
        ],
      },
      {
        type: "h4",
        text: "Revenue courts",
      },
      {
        type: "ul",
        items: [
          "Board of Revenue",
          "Commissioner",
          "Collector",
          "Tehsildar",
          "Assistant Tehsildar",
        ],
      },
      {
        type: "h3",
        text: "How the structure actually works",
      },
      {
        type: "p",
        text: "Work moves from the local level upward. Village and Panchayat disputes may go to Lok Adalats. District-level civil, criminal, and revenue matters go to the corresponding subordinate courts. State-level matters go to High Courts. The Supreme Court is the final court. Civil cases are decided on a preponderance of probabilities. Criminal cases require proof beyond reasonable doubt. The Supreme Court and High Courts sit in a bench system, not a jury system.",
      },
      {
        type: "h3",
        text: "Closing point for a 14-mark answer",
      },
      {
        type: "p",
        text: "The Indian judiciary is independent, hierarchical, and inherited from the British legal model. Independence from the executive and the legislature, a clear ladder from the Supreme Court down to Lok Adalats, and specialised civil, criminal, and revenue courts together keep law and order and decide disputes.",
      },
    ],
  },
  {
    id: "sources-maxims",
    slug: "sources-maxims-foundations",
    number: 2,
    title: "Sources of Law, Legal Maxims and Foundations of Contract Law",
    unit: "Judiciary and Legal System",
    marks: 14,
    lecture: "18/08/26 · 13/08/26 · Unit 1",
    summary:
      "Law is drawn from statute, precedent, custom and interpretation. Contract law is the foundation of modern business, and a set of Latin maxims states its first principles.",
    tags: ["sources", "maxims", "contract", "business"],
    blocks: [
      {
        type: "p",
        text: "Unit 1 of the course places contract law inside a wider map of the Indian legal system. An examination answer should cover classification and sources of law, the core Latin maxims, and why the law of contract is treated as the foundation of modern business.",
      },
      {
        type: "h3",
        text: "Classification and sources of law",
      },
      {
        type: "p",
        text: "Codification of law means statutory Acts, for example the LICI Act. The sources of law are:",
      },
      {
        type: "ol",
        items: [
          "_Statutory / Legislation_: cannot be changed easily by customs.",
          "_Precedent_: judgments that establish binding case laws.",
          "_Custom_: established customs and usage.",
          "_Interpretation of Law_: English Common Law principles.",
        ],
      },
      {
        type: "h4",
        text: "Indian legal system — the wider map",
      },
      {
        type: "ul",
        items: [
          "Schools of Thought and Jurisprudential Theory",
          "Classification of Law",
          "History of Indian Law (English Common Law and statutory developments)",
        ],
      },
      {
        type: "h3",
        text: "Primary and secondary sources",
      },
      {
        type: "h4",
        text: "Primary sources",
      },
      {
        type: "ul",
        items: [
          "_Constitution of India_: supreme law of the land (395 Articles, 12 Schedules, numerous amendments).",
          "_Enactments_: Acts passed by the Union Parliament or State Legislatures (codified law).",
          "_Ordinances_: promulgated by the President (Art. 123) or Governor (Art. 213); they lapse 6 weeks from the re-assembly of Parliament or the State Legislature.",
        ],
      },
      {
        type: "h4",
        text: "Secondary sources",
      },
      {
        type: "ul",
        items: [
          "Judicial precedents (decisions of the Supreme Court and High Courts; Art. 141 makes Supreme Court decisions binding on all courts).",
          "Custom and usages.",
          "Legal theory and jurisprudence.",
        ],
      },
      {
        type: "h3",
        text: "Core Latin legal maxims",
      },
      {
        type: "maxim",
        latin: "Ignorantia Juris Non Excusat / Ignorantia Legis Non Excusat",
        meaning: "Ignorance of the law is no excuse.",
      },
      {
        type: "maxim",
        latin: "Emptor Emit Quam Minimo Potest, Venditor Vendit Quam Maximo Potest",
        meaning:
          "The buyer buys as cheap as he can; the seller sells as dear or high as he can.",
      },
      {
        type: "maxim",
        latin: "Contractus Legem Ex Conventione Accipiunt",
        meaning:
          "Contracts receive, or become, law from the agreement of their parties.",
      },
      {
        type: "maxim",
        latin: "Ex Maleficio Non Oritur Contractus",
        meaning: "No contract arises out of a misconduct or illegal act.",
      },
      {
        type: "maxim",
        latin: "Nemo Debet In Communione Invitus Teneri",
        meaning:
          "No one should be kept in co-ownership or partnership against their will.",
      },
      {
        type: "maxim",
        latin: "Nil Temere Novandum",
        meaning: "Nothing should be rashly altered or innovated.",
      },
      {
        type: "maxim",
        latin: "Universitates Nihil/Tantum Possunt Quod Per Legem Ipsis Datum Est",
        meaning: "Corporations can only do what is permitted by law.",
      },
      {
        type: "maxim",
        latin: "Aequitas Neminem Laedit Cum Injuria",
        meaning: "Equity injures no one.",
      },
      {
        type: "h3",
        text: "Foundations of contract law",
      },
      {
        type: "def",
        term: "Business",
        body: "A system built on promises made between parties and their performance.",
      },
      {
        type: "def",
        term: "Breaking of a promise",
        body: "Breaking a promise without incurring liability leads to endless complications in commercial transactions.",
      },
      {
        type: "def",
        term: "Law of Contract",
        body: "The foundation upon which the superstructure of modern business is built. It lays down legal rules relating to promises, their formation, performance, and enforcement.",
      },
      {
        type: "h3",
        text: "Closing point for a 14-mark answer",
      },
      {
        type: "p",
        text: "Law in India is sourced from the Constitution, statutes, ordinances, precedent, custom, and legal theory. Contract law sits on that base. Business is a system of promises. If a promise can be broken without liability, commercial life becomes unworkable. The maxims state the same idea in short form: a contract takes its law from the parties' agreement, and no contract arises from an illegal act.",
      },
    ],
  },
];
