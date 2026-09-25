import type { Topic } from "./types";

export const dischargeTopics: Topic[] = [
  {
    id: "discharge-remedies",
    slug: "discharge-and-remedies",
    number: 11,
    title: "Discharge of Contract and Remedies for Breach",
    unit: "Discharge, Breach and Remedies",
    marks: 14,
    summary:
      "A contract is discharged when the rights and obligations created by it come to an end. Breach is one mode of discharge. The remedies include rescission, damages, quantum meruit, specific performance, and injunction.",
    tags: ["discharge", "breach", "damages", "quantum meruit", "specific performance"],
    blocks: [
      {
        type: "p",
        text: "Write this answer in two halves: how a contract ends, and what the injured party may ask the court to do. Begin with the definition of discharge.",
      },
      {
        type: "h3",
        text: "Meaning of discharge",
      },
      {
        type: "def",
        term: "Discharge of contract",
        body: "A contract is said to be discharged when it ceases to operate, that is, when the rights and obligations created by it come to an end.",
      },
      {
        type: "h3",
        text: "Modes of discharge of contract",
      },
      {
        type: "h4",
        text: "By performance (Sections 37–40)",
      },
      {
        type: "ul",
        items: [
          "_Actual performance_: the parties fulfil their respective obligations.",
          "_Attempted performance / Tender (Section 38)_: a valid offer of performance refused by the promisee.",
        ],
      },
      {
        type: "h4",
        text: "By mutual agreement / consent (Sections 62–64)",
      },
      {
        type: "ul",
        items: [
          "_Novation (Section 62)_: substituting a new contract for the original one (with the same or new parties).",
          "_Rescission (Section 62)_: mutual cancellation of the contract.",
          "_Alteration (Section 62)_: changing terms with mutual consent.",
          "_Remission / Waiver (Section 63)_: dispensing with or remitting part of performance.",
          "_Accord and satisfaction (Section 63)_: settlement by accepting an alternative performance.",
        ],
      },
      {
        type: "h4",
        text: "By subsequent or supervening impossibility (Section 56)",
      },
      {
        type: "p",
        text: "This is the Doctrine of Frustration. It covers destruction of the subject matter, death or incapacity in personal contracts, change of law, and war.",
      },
      {
        type: "h4",
        text: "By lapse of time",
      },
      {
        type: "p",
        text: "Expiry of the limitation period under the Limitation Act (for example, 3 years for debt recovery).",
      },
      {
        type: "h4",
        text: "By operation of law",
      },
      {
        type: "ul",
        items: [
          "Death (in personal performance contracts).",
          "Insolvency / bankruptcy.",
          "Merger of inferior rights into superior rights.",
          "Unauthorised material alteration (renders the contract void).",
        ],
      },
      {
        type: "h4",
        text: "By breach of contract (Section 39)",
      },
      {
        type: "ul",
        items: [
          "_Actual breach_: failure to perform on the due date or during performance.",
          "_Anticipatory breach_: repudiation before the due date.",
        ],
      },
      {
        type: "h4",
        text: "By the promisee's failure to afford facilities (Section 67)",
      },
      {
        type: "p",
        text: "If the promisee does not afford reasonable facilities for performance, the contract may be discharged on that ground.",
      },
      {
        type: "h3",
        text: "Remedies for breach of contract",
      },
      {
        type: "h4",
        text: "Suit for rescission (Sections 39, 64, 65)",
      },
      {
        type: "p",
        text: "The injured party may treat the contract as cancelled.",
      },
      {
        type: "h4",
        text: "Suit for damages (Sections 73, 74)",
      },
      {
        type: "ul",
        items: [
          "_Ordinary / general damages_: naturally arising from the breach.",
          "_Special damages_: arising from special circumstances that were communicated.",
          "_Exemplary / punitive / vindictive damages_: for breach of promise to marry, or a banker wrongfully dishonouring a cheque.",
          "_Nominal damages_: to recognise a legal injury where no actual loss occurred.",
          "_Liquidated damages and penalty_.",
        ],
      },
      {
        type: "h4",
        text: "Suit upon quantum meruit",
      },
      {
        type: "p",
        text: "_Quantum meruit_ means \"as much as earned\" or \"in proportion to work done\".",
      },
      {
        type: "h4",
        text: "Suit for specific performance",
      },
      {
        type: "p",
        text: "Sought under the Specific Relief Act, 1963. Specific performance will not be granted where monetary damages are an adequate remedy; where the contract terms are uncertain or inequitable; where the contract is by its nature revocable; where the contract is made by trustees in breach of their trust; or where the contract is of a personal nature (for example, a contract to marry, paint, or perform).",
      },
      {
        type: "h4",
        text: "Suit for injunction",
      },
      {
        type: "p",
        text: "A court order restraining a person from doing a specific act. It is a mode of securing the specific performance of negative terms or covenants of a contract.",
      },
      {
        type: "h3",
        text: "Closing point for a 14-mark answer",
      },
      {
        type: "p",
        text: "Discharge ends the contract. Performance is the ordinary end. Breach is the pathological end. The injured party may then seek rescission, damages, a sum for work already done, an order to perform, or an order not to act.",
      },
    ],
  },
];
