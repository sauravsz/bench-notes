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
    tags: ["capacity", "section 11", "consent", "coercion", "fraud", "undue influence", "minor"],
    blocks: [
      {
        type: "p",
        text: "Capacity to contract refers to the legal competence of a person to enter into a binding contract. Section 11 of the Indian Contract Act, 1872 lays down the criteria for competence, while Section 14 ensures that agreements entered into by competent parties are backed by voluntary, uncoerced consent.",
      },
      {
        type: "def",
        term: "Who are competent to contract (Section 11)",
        section: "Section 11",
        body: "Every person is competent to contract who is of the age of majority according to the law to which he is subject, and who is of sound mind, and is not disqualified from contracting by any law to which he is subject.",
      },
      {
        type: "h3",
        text: "1. Law Relating to Minors' Agreements (The Five Core Principles)",
      },
      {
        type: "ul",
        items: [
          "_1. Absolutely Void ab initio (*Mohori Bibee v. Dharmodas Ghose [1903] Privy Council*)_: A minor has no capacity to contract; an agreement entered into by a minor is an absolute nullity from the beginning. _Facts_: Dharmodas Ghose, a minor, mortgaged his property to moneylender Brahmo Dutt for ₹20,000. Held: The mortgage deed was completely void, and the moneylender could not enforce the loan or recover the money under contract law.",
          "_2. No Estoppel Against Minor_: Even if a minor fraudulently misrepresents his age as major to induce the other party to enter into an agreement, the minor is not estopped from pleading his minority in defence (*Sadiq Ali Khan v. Jai Kishori*).",
          "_3. No Ratification on Attaining Majority_: An agreement that is void _ab initio_ cannot be validated or ratified upon the minor reaching 18 years of age, because a void agreement has no legal existence and cannot form consideration for a subsequent promise (*Indran Ramaswamy v. Anthappa Chettiar*).",
          "_4. Doctrine of Restitution (Section 33, Specific Relief Act, 1963)_: If a minor obtains property or goods by misrepresenting his age, the court may compel the minor to restore the traceable property/goods to the other party, but he cannot be compelled to repay money if it has been spent (*Leslie Ltd. v. Sheill*).",
          "_5. Liability for Necessaries (Section 68 - Quasi-Contract)_: If a person incapable of entering into a contract (or a minor) is supplied by another with necessaries suited to his condition in life, the person who furnished such supplies is entitled to be reimbursed from the **property / estate** of such incapable person. The minor is **never personally liable**; only his estate is liable.",
        ],
      },
      {
        type: "h3",
        text: "2. Soundness of Mind for Contracting (Section 12)",
      },
      {
        type: "p",
        text: "Section 12 provides that a person is of sound mind for the purpose of making a contract if, at the time of making it, he is capable of understanding it and forming a rational judgment as to its effect upon his interests.",
      },
      {
        type: "ul",
        items: [
          "_Person usually of unsound mind, but occasionally of sound mind_: May make a contract when he is of sound mind (during a **lucid interval**). _Example_: A patient in a mental asylum who experiences temporary periods of lucidity can enter into valid commercial contracts during those lucid intervals.",
          "_Person usually of sound mind, but occasionally of unsound mind_: Cannot make a contract when he is of unsound mind. _Example_: A sane person who is delirious with severe fever or so intoxicated by alcohol/drugs that he cannot understand terms cannot enter into a binding contract while in that state.",
        ],
      },
      {
        type: "h3",
        text: "3. Disqualified Persons by Law",
      },
      {
        type: "ul",
        items: [
          "_Alien Enemies_: Citizens of a foreign country with which India is at war. Contracts entered into during wartime are void; pre-existing peacetime contracts are either suspended or dissolved.",
          "_Foreign Sovereigns & Ambassadors_: Enjoy diplomatic immunity under the *Vienna Convention*; they can sue in Indian courts, but cannot be sued without prior sanction of the Central Government (Section 86, CPC).",
          "_Insolvent Persons_: An undischarged insolvent cannot enter into contracts dealing with his estate, as all property vests in the Official Receiver / Liquidator.",
          "_Convicts_: While serving a sentence of imprisonment in jail, a convict is incapable of entering into contracts, except when on parole or with special license.",
        ],
      },
      {
        type: "h3",
        text: "4. Consent vs. Free Consent (Sections 13 & 14)",
      },
      {
        type: "def",
        term: "Consent (Consensus ad idem)",
        section: "Section 13",
        body: "Two or more persons are said to consent when they agree upon the same thing in the same sense.",
      },
      {
        type: "def",
        term: "Free Consent",
        section: "Section 14",
        body: "Consent is said to be free when it is not caused by: (1) Coercion (Sec 15), (2) Undue Influence (Sec 16), (3) Fraud (Sec 17), (4) Misrepresentation (Sec 18), or (5) Mistake (Sec 20, 21, 22).",
      },
      {
        type: "diagram",
        kind: "free-consent",
        title: "Free Consent and Vitiating Factors Map",
        caption: "Section 14 requires that consent is not caused by coercion, undue influence, fraud, misrepresentation, or bilateral mistake.",
      },
      {
        type: "h3",
        text: "5. The Five Vitiating Factors in Free Consent",
      },
      {
        type: "ul",
        items: [
          "_Coercion (Section 15)_: Committing or threatening to commit any act forbidden by the Indian Penal Code, or the unlawful detaining or threatening to detain any property, to prejudice any person, with the intention of causing any person to enter into an agreement. _Landmark Case_: Threatening to commit suicide constitutes coercion (*Chikham Amiraju v. Seshamma*). _Legal Effect_: Contract is voidable at the option of the coerced party (Section 19).",
          "_Undue Influence (Section 16)_: A contract where relations subsisting between parties are such that one of the parties is in a position to dominate the will of the other and uses that position to obtain an unfair advantage over the other. Occurs in real/apparent authority (master-servant, police-accused), fiduciary relationships (doctor-patient, lawyer-client, spiritual guru-disciple), or mental distress. _Landmark Case_: Spiritual guru inducing a devotee to gift all property to him (*Mannu Singh v. Umadat Pandey*). _Legal Effect_: Voidable at the option of the dominated party (Section 19A).",
          "_Fraud (Section 17)_: Intentional deception with intent to deceive another party. Includes: (a) Suggestion of a false fact by one who does not believe it to be true (*Derry v. Peek*), (b) Active concealment of a known defect, (c) A promise made without any intention of performing it. _Legal Effect_: Voidable + Right to sue for damages in tort/deceit (Section 19).",
          "_Misrepresentation (Section 18)_: An innocent, unwarranted false assertion of a material fact made without any intent to deceive, believing it to be true. _Legal Effect_: Voidable at the option of the misled party (Section 19).",
          "_Mistake of Fact (Section 20)_: Where both parties are under a mutual (bilateral) mistake as to a matter of fact essential to the agreement, the agreement is completely **void ab initio**.",
        ],
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
      "Contracts are classified across validity, formation, and performance dimensions. Misrepresentation and bilateral mistake carry different legal consequences.",
    tags: ["classification", "misrepresentation", "mistake", "idiot", "lunatic", "formation", "performance"],
    blocks: [
      {
        type: "p",
        text: "Contract law classifies legal agreements into structured categories based on three primary operational criteria: (1) Enforceability & Validity, (2) Mode of Formation, and (3) Extent of Performance.",
      },
      {
        type: "diagram",
        kind: "contract-classification",
        title: "Three-Dimensional Classification of Contracts",
        caption: "Systematic categorization based on legal validity, formation mechanics, and performance milestones.",
      },
      {
        type: "h3",
        text: "1. Classification by Enforceability & Validity",
      },
      {
        type: "ul",
        items: [
          "_Valid Contract (Section 2(h) & Sec 10)_: Enforceable by law; satisfies all statutory essentials. _Example_: A written commercial purchase order for raw steel with agreed price and delivery terms.",
          "_Voidable Contract (Section 2(i))_: Enforceable at the option of the aggrieved party whose consent was caused by coercion, undue influence, fraud, or misrepresentation (Sections 19 & 19A). Remains valid until legally rescinded.",
          "_Void Agreement (Section 2(g))_: Void from the very beginning (_void ab initio_); creates no legal rights or remedies. _Example_: Agreement with a minor or wagering bet.",
          "_Void Contract (Section 2(j))_: A contract that was valid when made, but subsequently ceases to be enforceable due to supervening impossibility or destruction of subject matter (Section 56).",
          "_Illegal Agreement (Section 23)_: Prohibited by law, criminal, or opposed to public policy. All collateral transactions are also void. _Example_: Agreement to smuggle restricted electronics.",
          "_Unenforceable Contract_: Valid in substance, but barred from legal enforcement due to technical defects (lack of stamp duty, registration, or limitation expiry).",
        ],
      },
      {
        type: "h3",
        text: "2. Classification by Mode of Formation",
      },
      {
        type: "ul",
        items: [
          "_Express Contract (Section 9)_: Created through express spoken words or written documents. _Example_: A signs a formal lease agreement with landlord B to rent an office at ₹50,000/month for 11 months.",
          "_Implied / Tacit Contract (Section 9)_: Formed by the acts, conduct of the parties, or surrounding circumstances without verbal communication. _Example 1_: A commuter boards a public metro or bus; by boarding, an implied contract is formed to pay the fare. _Example 2_: Taking cash out of an automated bank ATM.",
          "_Quasi-Contract (Sections 68–72: Relations Resembling Contract)_: Not created by mutual consent, but imposed by law to prevent **unjust enrichment** (*Nemo debet locupletari ex aliena jactura*). _Example 1 (Sec 71)_: A finder of lost goods has the legal duties of a bailee to find the true owner. _Example 2 (Sec 72)_: A person to whom money has been paid or goods delivered by mistake or under coercion must repay or return it.",
          "_E-Contract (Cyber / Digital Contract)_: Formed through digital media, EDI, email exchanges, or electronic signatures under Section 10A of the Information Technology Act, 2000. Includes Click-wrap (e.g. clicking 'I Accept Terms' when buying software) and Shrink-wrap contracts.",
        ],
      },
      {
        type: "h3",
        text: "3. Classification by Extent of Performance",
      },
      {
        type: "ul",
        items: [
          "_Executed Contract_: Both contracting parties have completely fulfilled their reciprocal obligations. _Example_: A pays ₹1,000 cash at a pharmacy and receives the medicines immediately.",
          "_Executory Contract_: The obligations of one or both parties remain to be performed in the future. It is subdivided into:",
          "  • _Unilateral Contract (One-Sided Executory)_: One party has already performed their obligation at the time of contract formation, while the other party's promise is outstanding. _Example_: A finds a lost briefcase pursuant to a public reward offer of ₹10,000 announced by B. A has executed his part; B's duty to pay ₹10,000 remains executory.",
          "  • _Bilateral Contract (Two-Sided Executory)_: Both parties make reciprocal promises to be executed at a future date. _Example_: A builder promises to construct an office block in 18 months, and the client promises to pay monthly progress billing installments.",
        ],
      },
      {
        type: "h3",
        text: "4. Fraud vs. Misrepresentation (Comprehensive Comparative Table)",
      },
      {
        type: "table",
        headers: ["Parameter", "Fraud (Section 17)", "Misrepresentation (Section 18)"],
        rows: [
          [
            "Intention to Deceive",
            "Deliberate, intentional deceit to induce the other party into the contract.",
            "Innocent false statement made without any fraudulent intent to deceive.",
          ],
          [
            "Knowledge of Truth",
            "The person making the representation knows it is false or does not believe it to be true.",
            "The person making the representation genuinely believes it to be true based on his information.",
          ],
          [
            "Remedies Available",
            "Rescission of contract + Right to claim damages for the tort of deceit.",
            "Rescission of contract, but NO damages can be claimed in tort (except under specific statutory warranty provisions).",
          ],
          [
            "Defence of Due Diligence",
            "Party committing fraud cannot defend by saying the victim had means of discovering the truth (except in cases of silent fraud).",
            "If the aggrieved party had the ordinary means of discovering the truth with ordinary diligence, the contract cannot be rescinded.",
          ],
          [
            "Practical Illustration",
            "A sells a horse to B, knowing the horse is unsound, and fits false horseshoes to conceal hoof disease.",
            "A tells B that his agricultural land yields 1,000 kg/acre based on an outdated revenue certificate, while output was 700 kg.",
          ],
        ],
      },
      {
        type: "h3",
        text: "5. The Law of Mistake (Sections 20, 21, and 22)",
      },
      {
        type: "ul",
        items: [
          "_Bilateral Mistake of Fact (Section 20)_: When both parties are under a mutual mistake regarding a matter of fact essential to the agreement, the agreement is **void ab initio**. _Example_: A agrees to buy B's cargo of wheat believed to be sailing on ship 'Empress'; unknown to both parties, the ship had sunk the previous day (*Couturier v. Hastie*).",
          "_Unilateral Mistake of Fact (Section 22)_: A contract is NOT voidable merely because it was caused by one of the parties being under a mistake as to a matter of fact (unless the mistake relates to the identity of the person or nature of document (*Balfour v. Jones*, *Foster v. Mackinnon*)).",
          "_Mistake of Law (Section 21)_: A contract is not voidable because it was caused by a mistake as to any law in force in India (*Ignorantia juris non excusat* — ignorance of law is no excuse). However, a mistake as to foreign law is treated as a mistake of fact and makes the agreement void under Section 20.",
        ],
      },
    ],
  },
];
