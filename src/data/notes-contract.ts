import type { Topic } from "./types";

export const contractTopics: Topic[] = [
  {
    id: "contract-agreement-promise",
    slug: "contract-agreement-promise",
    number: 3,
    title: "Contract, Agreement and Promise",
    unit: "Indian Contract Act, 1872",
    marks: 14,
    lecture: "18/08/26",
    summary:
      "A contract is an agreement enforceable by law. An agreement is an accepted proposal backed by reciprocal consideration. Legal intention separates commercial contracts from bare social pacts.",
    tags: ["contract", "agreement", "promise", "section 2(h)", "section 2(e)", "balfour"],
    blocks: [
      {
        type: "p",
        text: "The Indian Contract Act, 1872 (Act No. 9 of 1872) came into force on 1st September 1872. It establishes the basic legal framework for all trade, commerce, and industry in India. The Act does not lay down the whole law of contracts, but sets forth the general principles governing the creation, performance, and enforceability of contractual obligations.",
      },
      {
        type: "h3",
        text: "The Statutory Staircase: From Proposal to Enforceable Contract",
      },
      {
        type: "def",
        term: "Proposal / Offer",
        section: "Section 2(a)",
        body: "When one person signifies to another his willingness to do or to abstain from doing anything, with a view to obtaining the assent of that other to such act or abstinence, he is said to make a proposal.",
      },
      {
        type: "def",
        term: "Promise",
        section: "Section 2(b)",
        body: "When the person to whom the proposal is made signifies his assent thereto, the proposal is said to be accepted. A proposal, when accepted, becomes a promise.",
      },
      {
        type: "def",
        term: "Agreement",
        section: "Section 2(e)",
        body: "Every promise and every set of promises, forming the consideration for each other, is an agreement.",
      },
      {
        type: "def",
        term: "Contract",
        section: "Section 2(h)",
        body: "An agreement enforceable by law is a contract.",
      },
      {
        type: "callout",
        label: "The Definitive 2-Stage Mathematical Formula",
        body: "Stage 1: Proposal (Offer) + Assent (Acceptance) = Promise.\nStage 2: Promise + Consideration (Quid Pro Quo) = Agreement.\nStage 3: Agreement + Legal Enforceability (Section 10) = Contract.",
      },
      {
        type: "h3",
        text: "Juristic Formulations & Authoritative Views",
      },
      {
        type: "ul",
        items: [
          "_Sir Frederick Pollock_: 'Every agreement and promise enforceable at law is a contract.'",
          "_Sir John Salmond_: 'A contract is an agreement creating and defining obligations between the parties.'",
          "_Sir William Anson_: 'The law of contract is intended to ensure that what a man has been led to expect shall come to pass; that what has been promised to him shall be performed.'",
        ],
      },
      {
        type: "h3",
        text: "Why 'All Contracts are Agreements, but All Agreements are Not Contracts'",
      },
      {
        type: "p",
        text: "An agreement is the genus, whereas a contract is the species. To ripen into an enforceable contract, an agreement must possess the intention to create legal relations and satisfy the statutory conditions of Section 10.",
      },
      {
        type: "table",
        headers: ["Category of Agreement", "Status under Law", "Legal Reason & Landmark Case", "Practical Illustration"],
        rows: [
          [
            "Social Agreement",
            "Not a Contract (Unenforceable)",
            "Absence of intention to create legal relations. Presumption that social/family invitations carry no legal consequence (*Balfour v. Balfour [1919]*).",
            "A invites his colleague B to a dinner party. B accepts but fails to attend. A suffers culinary expense but cannot sue B.",
          ],
          [
            "Domestic Agreement",
            "Not a Contract (Unless Expressly Formalized)",
            "Promises between spouses living in harmony lack legal intent (*Balfour v. Balfour*), unless executed under formal separation (*Merritt v. Merritt [1970]*).",
            "A husband promises to send his wife £30 monthly maintenance while working abroad. The promise is domestic and unenforceable.",
          ],
          [
            "Commercial Agreement",
            "Contract (Presumed Enforceable)",
            "In business transactions, law strongly presumes that parties intended legal consequences (*Rose & Frank Co. v. Crompton Bros*).",
            "Supplier A agrees to deliver 500 tons of cement to Builder B at ₹350/bag. Non-delivery gives rise to a suit for breach damages.",
          ],
          [
            "Void / Illegal Agreement",
            "Not a Contract (Void ab initio)",
            "Forbidden by law, immoral, or contrary to public policy under Section 23.",
            "Agreement to share proceeds of stolen goods or pay a bribe for a government contract.",
          ],
        ],
      },
      {
        type: "h3",
        text: "Key Differences: Agreement versus Contract",
      },
      {
        type: "table",
        headers: ["Basis of Comparison", "Agreement (Section 2(e))", "Contract (Section 2(h))"],
        rows: [
          [
            "Composition & Origin",
            "Offer + Acceptance + Consideration.",
            "Agreement + Enforceability by Law (Section 10).",
          ],
          [
            "Legal Obligation Created",
            "May or may not create a legal obligation (often creates social, religious, or moral duties).",
            "Strictly creates an actionable legal obligation (_jus in personam_) between the parties.",
          ],
          [
            "Scope / Genus",
            "Wider concept (Genus) encompassing all promises.",
            "Narrower concept (Species) limited to enforceable agreements.",
          ],
          [
            "Court Remedies",
            "No judicial remedy is available if a party reneges.",
            "Aggrieved party can file a civil suit for damages, specific performance, or injunction.",
          ],
        ],
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
    lecture: "18/08/26 · Unit 2",
    summary:
      "Section 10 provides that all agreements are contracts if made by free consent of competent parties, for lawful consideration and object, and not expressly declared void.",
    tags: ["section 10", "essentials", "free consent", "capacity", "consideration", "validity"],
    blocks: [
      {
        type: "p",
        text: "Section 10 of the Indian Contract Act, 1872 is the master statutory gatekeeper that dictates which agreements become valid contracts. Without meeting these requirements, an agreement remains either void, voidable, or unenforceable.",
      },
      {
        type: "def",
        term: "What agreements are contracts (Section 10)",
        section: "Section 10",
        body: "All agreements are contracts if they are made by the free consent of parties competent to contract, for a lawful consideration and with a lawful object, and are not hereby expressly declared to be void.",
      },
      {
        type: "h3",
        text: "The Six Indispensable Pillars of Section 10 (With Concrete Examples)",
      },
      {
        type: "ul",
        items: [
          "_1. Proper Offer and Acceptance (Agreement)_: There must be at least two distinct parties, a lawful proposal by one party, and an absolute, unqualified acceptance by the other (*Consensus ad idem*). _Example_: A offers to sell his laptop to B for ₹40,000, and B unequivocally agrees to pay ₹40,000 on delivery.",
          "_2. Intention to Create Legal Relations_: The parties must contemplate that legal consequences will attach to their agreement. In commercial dealings, this is presumed (*Edwards v. Skyways Ltd*). In social/domestic settings, it must be explicitly proven.",
          "_3. Free Consent (Sections 13 & 14)_: The consent of the parties must be genuine and free from the five statutory vitiations: Coercion (Sec 15), Undue Influence (Sec 16), Fraud (Sec 17), Misrepresentation (Sec 18), and Bilateral Mistake (Sec 20). If consent is vitiated by coercion or fraud, the contract is voidable under Section 19.",
          "_4. Competency / Capacity of Parties (Sections 11 & 12)_: Every person is competent to contract who is of the age of majority (18 years under the Majority Act), of sound mind, and not disqualified from contracting by any law (e.g., alien enemies, insolvent convicts). _Example_: An agreement entered into by a minor is completely void from the beginning (*Mohori Bibee v. Dharmodas Ghose*).",
          "_5. Lawful Consideration & Lawful Object (Section 23)_: The consideration (*Quid pro quo*) and the objective must not be: (a) forbidden by law, (b) defeat the provisions of any law, (c) fraudulent, (d) involve injury to the person or property of another, or (e) regarded by the court as immoral or opposed to public policy. _Example_: A promises to pay B ₹1,00,000 if B obtains a government employment post for A through corruption (Void for unlawful object).",
          "_6. Not Expressly Declared Void by Law (Sections 24–30)_: The agreement must not fall into the categories expressly declared void by the Contract Act: agreements in restraint of marriage (Sec 26), restraint of trade (Sec 27), restraint of legal proceedings (Sec 28), uncertain agreements (Sec 29), and wagering/betting agreements (Sec 30).",
        ],
      },
      {
        type: "h3",
        text: "Additional Formalities (Writing, Stamping, and Registration)",
      },
      {
        type: "p",
        text: "While oral contracts are generally valid under Indian law, certain special statutes require specific formalities. For instance, the *Transfer of Property Act, 1882* requires contracts for the sale of immovable property valued over ₹100 to be in writing, duly stamped under the *Indian Stamp Act, 1899*, and registered under the *Registration Act, 1908*.",
      },
      {
        type: "h3",
        text: "Summary Checklist for Section 10 (14-Mark University Exam Template)",
      },
      {
        type: "table",
        headers: ["Statutory Essential", "Governing Sections", "Legal Failure Mode", "Resulting Legal Status"],
        rows: [
          ["Agreement", "Sec 2(a), 2(b), 2(e)", "No meeting of minds (*No consensus*)", "No contract formed"],
          ["Free Consent", "Sec 13, 14, 15-18", "Coercion, Undue Influence, Fraud", "Voidable contract (Sec 19/19A)"],
          ["Capacity", "Sec 11, 12", "Minor or unsound mind", "Void ab initio (Sec 11)"],
          ["Consideration", "Sec 2(d), 23, 25", "No consideration / Unlawful", "Void (Sec 25 / Sec 23)"],
          ["Lawful Object", "Sec 23", "Forbidden by law / Immoral", "Void & Illegal (Sec 23)"],
          ["Not Declared Void", "Sec 26 to 30", "Restraint of trade / Wagering", "Void agreement (Sec 26-30)"],
        ],
      },
    ],
  },
];
