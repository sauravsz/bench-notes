import type { Topic } from "./types";

export const midSemImportantTopics: Topic[] = [
  {
    id: "midsem-foundational-legal-maxims",
    slug: "midsem-foundational-legal-maxims",
    number: 201,
    title: "Foundational Legal Maxims in Commercial Law",
    unit: "Mid Sem Important",
    marks: 10,
    lecture: "Mid-Sem Master Notes · Legal Maxims",
    summary:
      "Comprehensive examination notes on 6 essential Latin legal maxims: Ignorantia Legis non excusat, Emptor emit quam minimo potest, Caveat emptor, Contractus legem ex conventione accipit, Quantum meruit, and Void ab initio.",
    tags: [
      "mid-sem",
      "maxims",
      "ignorantia legis",
      "emptor emit",
      "caveat emptor",
      "contractus legem",
      "quantum meruit",
      "void ab initio",
    ],
    blocks: [
      {
        type: "p",
        text: "Legal maxims are distilled Latin principles of universal jurisprudence that encapsulate core doctrines governing contractual obligations, statutory interpretation, and commercial liabilities.",
      },
      {
        type: "h3",
        text: "1. Ignorantia Legis Non Excusat (Ignorance of the Law is No Excuse)",
      },
      {
        type: "ul",
        items: [
          "_Meaning and Concept_: Ignorance of the law does not excuse anyone from legal liability or penalty. Every person subject to the jurisdiction of a legal authority is conclusively presumed to know the law of the land.",
          "_Juridical Basis_: If ignorance of law were permitted as a valid defense, the administration of justice would collapse, as any defaulting party or lawbreaker would simply plead lack of knowledge.",
          "_Statutory Links_: **Section 21 of the Indian Contract Act, 1872** provides that a contract is not voidable because it was caused by a mistake as to any law in force in India. A mistake regarding domestic law leaves the contract fully valid and binding.",
          "_Exception for Foreign Law_: A mistake as to a foreign law is treated not as a mistake of law, but as a **mistake of fact** under Section 20, rendering the agreement void if bilateral and essential.",
          "_Corporate and Regulatory Link_: Under the Companies Act 2013 and SEBI regulations, directors and corporate officers cannot avoid penalties for non-disclosure or delayed statutory filings by claiming they were unaware of recent notifications.",
          "_Business Situation_: A business imports electronic equipment without obtaining a mandatory regulatory license, claiming unawareness of the new notification. Customs authorities confiscate the goods and impose statutory fines; the company cannot plead ignorance of the gazetted notification.",
          "_Landmark Case_: *State of Maharashtra v. Mayer Hans George (AIR 1965 SC 722)* — The Supreme Court held that once a regulatory notification is published in the Official Gazette, it is deemed to be known by all persons, and ignorance cannot be pleaded.",
        ],
      },
      {
        type: "h3",
        text: "2. Emptor Emit Quam Minimo Potest; Venditor Vendit Quam Maximo Potest",
      },
      {
        type: "ul",
        items: [
          "_Meaning and Concept_: 'The buyer buys as cheap as he can; the seller sells as dear (costly) as he can.' It encapsulates the fundamental economic reality of free-market commercial transactions.",
          "_Juridical Basis_: In arm's-length commercial bargaining, both parties act in their own economic self-interest. The law does not guarantee equality of bargaining power or fairness of price.",
          "_Statutory Links_: **Section 25, Explanation 2 of the Indian Contract Act, 1872** provides that an agreement is not void merely because the consideration is inadequate. The adequacy of consideration is for the parties to determine at the time of making the bargain.",
          "_Evidence of Vitiated Consent_: While inadequacy of consideration does not void a contract, the court may take it into account as evidence when determining whether the consent of the promisor was genuinely free under Section 14.",
          "_Sale of Goods Act, 1930_: Section 9 allows parties complete freedom to ascertain price by contract or course of dealing.",
          "_Competition Law Boundary_: The Competition Act 2002 sets the limit: a dominant enterprise cannot abuse its market position through predatory pricing or exploitative price-fixing.",
          "_Business Situation_: A company purchases industrial equipment from a liquidating factory at 40% below market value. The liquidator cannot subsequently cancel the sale claiming that the consideration was inadequate.",
          "_Landmark Case_: *Chappell & Co Ltd v. Nestlé Co Ltd [1960] AC 87* — The House of Lords held that consideration need not have substantial economic value; parties are free to negotiate their own commercial terms.",
        ],
      },
      {
        type: "h3",
        text: "3. Caveat Emptor (Buyer Beware)",
      },
      {
        type: "ul",
        items: [
          "_Meaning and Concept_: 'Let the buyer beware.' In a sale of goods, the fundamental burden rests upon the buyer to examine, inspect, and satisfy themselves regarding the quality and suitability of the goods.",
          "_Absence of General Duty to Disclose_: The seller is under no general legal obligation to point out patent defects that a buyer could discover through reasonable inspection.",
          "_Statutory Links_: **Section 16 of the Sale of Goods Act, 1930** establishes that there is no implied warranty or condition as to the quality or fitness for any particular purpose of goods supplied under a contract of sale.",
          "_Indian Contract Act Link_: **Explanation to Section 17** provides that *mere silence as to facts likely to affect the willingness of a person to enter into a contract is not fraud*, unless there is a specific duty to speak.",
          "_Statutory Exceptions where Caveat Emptor Does Not Apply_:\n• *Fitness for Particular Purpose (Section 16(1))*: When buyer informs seller of the specific purpose and relies on seller's skill/judgment.\n• *Merchantable Quality (Section 16(2))*: Goods bought by description must be free from latent defects.\n• *Sale by Sample (Section 17)*: Bulk must correspond with the sample.\n• *Fraud / Active Concealment*: Where seller deliberately conceals a latent defect.",
          "_Business Situation_: A textile manufacturer purchases fabric without inspecting available swatches and later finds it unsuitable for winter garments. Under caveat emptor, the buyer has no remedy unless they made the specific requirement a term of the contract.",
          "_Landmark Case_: *Ward v. Hobbs (1878) 4 App Cas 13* — Pigs sold at an auction were infected with typhoid; the seller was held not liable because he made no warranty and did not actively conceal the disease.",
        ],
      },
      {
        type: "h3",
        text: "4. Contractus Legem Ex Conventione Accipit",
      },
      {
        type: "ul",
        items: [
          "_Meaning and Concept_: 'Contracts receive their legal force from the agreement of the parties.' The lawful agreement entered into by consenting parties constitutes the private law between them.",
          "_Sanctity of Contracts (*Pacta Sunt Servanda*)_: When competent parties enter into a lawful agreement, courts will enforce the agreed covenants and will not rewrite commercial terms.",
          "_Statutory Links_: **Section 2(h) and Section 37 of the Indian Contract Act, 1872** mandate that parties to a contract must perform, or offer to perform, their respective promises.",
          "_Arbitration Law Link_: The Arbitration and Conciliation Act 1996 recognizes party autonomy, enabling parties to choose their governing law, procedure, and dispute resolution forum.",
          "_Business Situation_: Two companies enter into a master service agreement stipulating that all payment delays attract 18% annual interest. The court will enforce this clause because the contract establishes the law between the parties.",
          "_Landmark Case_: *Energy Watchdog v. Central Electricity Regulatory Commission (2017) 14 SCC 80* — The Supreme Court held that courts cannot alter or relieve parties from freely negotiated price terms merely because performance has become commercially burdensome.",
        ],
      },
      {
        type: "h3",
        text: "5. Quantum Meruit (As Much as Earned)",
      },
      {
        type: "ul",
        items: [
          "_Meaning and Concept_: 'As much as he has earned' or 'according to the measure of work done.' A restitutionary remedy allowing a party to recover reasonable compensation for partial performance.",
          "_Prevention of Unjust Enrichment_: The law prevents one party from retaining the benefit of goods or services without paying fair value for the work actually done.",
          "_Statutory Links_:\n• **Section 65 (ICA 1872)**: When an agreement is discovered to be void, any person who received an advantage is bound to restore it or make compensation.\n• **Section 70 (ICA 1872)**: Where a person lawfully does anything for another, not intending to do so gratuitously, and the other enjoys the benefit, the latter must make compensation.",
          "_When Quantum Meruit Arises_:\n1. Where one party is wrongfully prevented by the other from completing an indivisible contract.\n2. Where work is done under a contract discovered to be void.\n3. Where a divisible contract is partly performed and accepted.\n4. Where non-gratuitous services are accepted.",
          "_Business Situation_: A software firm is contracted to build 5 database modules. After 3 modules are delivered and deployed, the client cancels the project. The software firm can sue under *quantum meruit* for the value of the 3 completed modules.",
          "_Landmark Case_: *Planche v. Colburn (1831) 5 C & P 58* — An author engaged to write a book for a series was entitled to recover reasonable compensation on a *quantum meruit* basis when the publisher abandoned the series midway.",
        ],
      },
      {
        type: "h3",
        text: "6. Void Ab Initio (Null & Void from the Beginning)",
      },
      {
        type: "ul",
        items: [
          "_Meaning and Concept_: 'Void from the very beginning.' An agreement that is completely destitute of legal effect from its inception, creating zero rights and zero obligations.",
          "_Distinction from Voidable Contracts_: A voidable contract is valid until repudiated by the aggrieved party. An agreement that is *void ab initio* never has any legal existence and cannot be ratified.",
          "_Statutory Links (Indian Contract Act, 1872)_:\n• **Section 2(g)**: An agreement not enforceable by law is void.\n• **Section 11**: Agreements with minors or persons of unsound mind are void ab initio.\n• **Section 20**: Bilateral mistake as to essential matter of fact.\n• **Section 23**: Unlawful object or consideration.\n• **Sections 26–30**: Agreements in restraint of marriage, trade, legal proceedings, uncertain agreements, and wagers.",
          "_Company Law Link_: Any corporate action that is *ultra vires* the Memorandum of Association is void ab initio (*Ashbury Railway v. Riche*).",
          "_Business Situation_: A lender advances money on a loan agreement signed by a minor. The agreement is void ab initio; the lender cannot enforce the agreement in court.",
          "_Landmark Case_: *Mohori Bibee v. Dharmodas Ghose (1903) 30 IA 114* — The Privy Council established that agreements entered into by minors are **void ab initio** and completely unenforceable.",
        ],
      },
    ],
  },
  {
    id: "midsem-indian-contract-act-1872",
    slug: "midsem-indian-contract-act-1872",
    number: 202,
    title: "The Indian Contract Act, 1872: Architecture & General Principles",
    unit: "Mid Sem Important",
    marks: 14,
    lecture: "Mid-Sem Master Notes · Contract Act Overview",
    summary:
      "14-mark master note on the Indian Contract Act 1872: legislative origin, structural scheme (Sections 1-75 vs Special Contracts 124-238), Section 10 enforceability pillars, and commercial significance.",
    tags: [
      "mid-sem",
      "contract act 1872",
      "section 10",
      "general principles",
      "special contracts",
      "14 marks",
    ],
    blocks: [
      {
        type: "p",
        text: "The Indian Contract Act, 1872 (Act No. IX of 1872) came into force on **1st September 1872**. It constitutes the fundamental legal backbone for doing business, trade, and commercial transactions in India.",
      },
      {
        type: "h3",
        text: "1. Legislative Origin and Structural Scheme",
      },
      {
        type: "ul",
        items: [
          "_Original Structure (266 Sections)_: Enacted to consolidate principles of contract law based on English common law adapted to Indian mercantile customs.",
          "_Subsequent Codifications_:\n• Sections 76–123 repealed and enacted as the **Sale of Goods Act, 1930**.\n• Sections 239–266 repealed and enacted as the **Indian Partnership Act, 1932**.",
          "_Current Two-Part Structure_:\n• **Part I: General Principles of Contract Law (Sections 1–75)** — Formation, consent, consideration, void agreements, performance, discharge, and breach.\n• **Part II: Special Contracts (Sections 124–238)** — Indemnity & Guarantee (Sec 124–147), Bailment & Pledge (Sec 148–181), and Agency (Sec 182–238).",
        ],
      },
      {
        type: "h3",
        text: "2. The Contract Formation Chain",
      },
      {
        type: "ul",
        items: [
          "**Proposal / Offer (Section 2(a))**: Signifying willingness to do or abstain from doing something with a view to obtaining assent.",
          "**Acceptance & Promise (Section 2(b))**: When the person to whom proposal is made signifies assent, proposal becomes a promise.",
          "**Consideration (Section 2(d))**: Act, abstinence, or promise done at the desire of the promisor (*Quid Pro Quo*).",
          "**Agreement (Section 2(e))**: Every promise and set of promises forming consideration for each other.",
          "**Contract (Section 2(h))**: An agreement enforceable by law.",
        ],
      },
      {
        type: "h3",
        text: "3. Essential Elements of Enforceability under Section 10",
      },
      {
        type: "ul",
        items: [
          "_Free Consent (Sections 13–22)_: Parties must agree upon the same thing in the same sense without Coercion, Undue Influence, Fraud, Misrepresentation, or Mistake.",
          "_Competency of Parties (Sections 11–12)_: Parties must be of the age of majority, sound mind, and not disqualified by law.",
          "_Lawful Consideration and Lawful Object (Section 23)_: Must not be forbidden by law, fraudulent, injurious, or opposed to public policy.",
          "_Not Expressly Declared Void (Sections 24–30)_: Must not be in restraint of trade (Sec 27), legal proceedings (Sec 28), or wagering (Sec 30).",
          "_Certainty of Terms (Section 29) & Possibility of Performance (Section 56)_: Terms must be definite and performance physically and legally possible.",
        ],
      },
    ],
  },
  {
    id: "midsem-taxonomy-of-indian-contract-act",
    slug: "midsem-taxonomy-of-indian-contract-act",
    number: 203,
    title: "Taxonomy & Classification of Contracts (Indian Contract Act)",
    unit: "Mid Sem Important",
    marks: 10,
    lecture: "Mid-Sem Master Notes · Contract Taxonomy",
    summary:
      "10-mark structured taxonomy classifying contracts across four analytical axes: Enforceability/Validity, Formation Mode, Extent of Performance, and Extent of Obligation.",
    tags: [
      "mid-sem",
      "taxonomy",
      "classification",
      "void",
      "voidable",
      "quasi-contract",
      "10 marks",
    ],
    blocks: [
      {
        type: "p",
        text: "The Indian Contract Act, 1872 classifies contracts across four distinct analytical axes:",
      },
      {
        type: "h3",
        text: "1. Classification by Validity and Enforceability",
      },
      {
        type: "ul",
        items: [
          "**Valid Contract**: Satisfies all Section 10 requirements and is fully enforceable by both parties.",
          "**Void Agreement (Sec 2(g))**: Not enforceable by law from inception (*void ab initio*). Example: Minor's agreement.",
          "**Voidable Contract (Sec 2(i))**: Enforceable at the option of the aggrieved party whose consent was vitiated by Coercion, Fraud, or Misrepresentation.",
          "**Illegal Agreement (Sec 23)**: Forbidden by law or opposed to public policy; collateral transactions are also void.",
          "**Unenforceable Contract**: Substantively valid but defective in procedural form (e.g., unstamped document, lack of written registration).",
        ],
      },
      {
        type: "h3",
        text: "2. Classification by Mode of Formation",
      },
      {
        type: "ul",
        items: [
          "**Express Contract (Sec 9)**: Formed through spoken or written words.",
          "**Implied Contract (Sec 9)**: Inferred from the conduct of parties or surrounding circumstances.",
          "**Quasi-Contract (Sec 68–72)**: Obligations created by law to prevent unjust enrichment (e.g., finder of lost goods).",
          "**E-Contract**: Executed via electronic means under Section 10A of the IT Act 2000.",
        ],
      },
      {
        type: "h3",
        text: "3. Classification by Performance & Obligation",
      },
      {
        type: "table",
        headers: ["Classification Axis", "Contract Category", "Definition & Legal Nature"],
        rows: [
          [
            "Performance State",
            "Executed Contract",
            "Both parties have completely performed their respective obligations.",
          ],
          [
            "Performance State",
            "Executory Contract",
            "Obligations remain to be performed in the future by one or both parties.",
          ],
          [
            "Extent of Obligation",
            "Bilateral Contract",
            "Mutual exchange of executory promises (two-sided pending obligations).",
          ],
          [
            "Extent of Obligation",
            "Unilateral Contract",
            "One party performs their part; other party's obligation remains pending.",
          ],
        ],
      },
    ],
  },
  {
    id: "midsem-free-consent-and-punishments",
    slug: "midsem-free-consent-and-punishments",
    number: 204,
    title: "Free Consent, Vitiating Elements & Statutory Punishments",
    unit: "Mid Sem Important",
    marks: 14,
    lecture: "Mid-Sem Master Notes · Free Consent",
    summary:
      "Comprehensive analysis of Section 13 Consensus ad Idem, Section 14 Free Consent, the 5 vitiating elements (Coercion, Undue Influence, Fraud, Misrepresentation, Mistake), and related criminal/corporate penalties.",
    tags: [
      "mid-sem",
      "free consent",
      "coercion",
      "undue influence",
      "fraud",
      "misrepresentation",
      "mistake",
      "punishments",
      "14 marks",
    ],
    blocks: [
      {
        type: "p",
        text: "Consent under **Section 13** requires *Consensus ad Idem* (two or more persons agreeing on the same thing in the same sense). Under **Section 14**, consent is free when it is not caused by Coercion, Undue Influence, Fraud, Misrepresentation, or Mistake.",
      },
      {
        type: "h3",
        text: "1. The Five Vitiating Elements (Sections 15–22)",
      },
      {
        type: "ul",
        items: [
          "**Coercion (Section 15)**: Committing or threatening any act forbidden by IPC/BNS, or unlawful detaining of property. Contract is **voidable under Section 19**. *Leading Case*: *Chikkam Ammiraju v. Seshamma* (threat to commit suicide held coercion).",
          "**Undue Influence (Section 16)**: Domination of will via real/apparent authority or fiduciary relations. Contract is **voidable under Section 19A**. *Leading Case*: *Mannu Singh v. Umadat Pande* (spiritual guru inducing gift deed).",
          "**Fraud (Section 17)**: Intentional false assertion, active concealment, or deceitful promise. Contract is **voidable under Section 19** plus **damages in tort for deceit**. *Leading Case*: *Derry v. Peek* (fraud requires proof of knowing falsehood).",
          "**Misrepresentation (Section 18)**: Innocent false statement made without intent to deceive. Contract is **voidable under Section 19**; no tort damages.",
          "**Mistake (Sections 20–22)**: Bilateral mistake of essential fact renders agreement **VOID AB INITIO (Section 20)** (*Couturier v. Hastie*). Unilateral mistake leaves contract valid (Section 22).",
        ],
      },
      {
        type: "h3",
        text: "2. Statutory and Criminal Punishments for Vitiating Conduct",
      },
      {
        type: "ul",
        items: [
          "_Criminal Penalties for Coercion_: Prosecuted under IPC/BNS for extortion, criminal intimidation, and wrongful confinement.",
          "_Criminal Penalties for Fraud_: Cheating under Section 318 BNS / Section 420 IPC (imprisonment up to 7 years).",
          "_Corporate Fraud under Companies Act 2013 (Section 447)_: Imprisonment from 6 months up to **10 years**, and fine not less than the amount involved up to **3 times the amount involved** in the fraud.",
        ],
      },
    ],
  },
  {
    id: "midsem-performance-of-contract",
    slug: "midsem-performance-of-contract",
    number: 205,
    title: "Performance of Contract & Valid Tender Rules (Sections 37–43)",
    unit: "Mid Sem Important",
    marks: 5,
    lecture: "Mid-Sem Master Notes · Performance",
    summary:
      "5-mark crisp exam note on Section 37 obligation to perform, binding on legal representatives, and rules of valid tender (attempted performance) under Section 38.",
    tags: ["mid-sem", "performance", "section 37", "tender", "section 38", "5 marks"],
    blocks: [
      {
        type: "p",
        text: "**Section 37 of the Indian Contract Act, 1872** mandates that parties to a contract must either perform, or offer to perform (*tender*), their respective promises, unless performance is dispensed with or excused under law.",
      },
      {
        type: "h3",
        text: "1. Core Rules of Performance",
      },
      {
        type: "ul",
        items: [
          "_Binding on Representatives_: In the event of death of the promisor, promises bind their legal representatives up to the value of inherited property, unless personal skill was involved.",
          "_By Whom Performed (Section 40)_: By promisor personally if personal skill is required (e.g., painting, surgery); otherwise by competent agents.",
          "_Performance by Third Person (Section 41)_: When promisee accepts performance from a third person, they cannot afterward enforce it against the promisor.",
        ],
      },
      {
        type: "h3",
        text: "2. Valid Tender / Offer of Performance (Section 38)",
      },
      {
        type: "ul",
        items: [
          "Tender must be **unconditional**.",
          "Tender must be made at a **proper time and place**.",
          "Promisee must have a **reasonable opportunity to inspect** and ascertain that the thing offered corresponds with the contract.",
          "_Legal Effect_: A valid tender refused by the promisee discharges the promisor from liability for non-performance.",
        ],
      },
    ],
  },
  {
    id: "midsem-breach-of-contract-and-remedies",
    slug: "midsem-breach-of-contract-and-remedies",
    number: 206,
    title: "Breach of Contract & Its Judicial Remedies (Sections 73–75)",
    unit: "Mid Sem Important",
    marks: 14,
    lecture: "Mid-Sem Master Notes · Breach & Remedies ★",
    summary:
      "14-mark high-yield note on Actual vs Anticipatory breach (Sec 39), the 6 judicial remedies (Rescission, Damages, Quantum Meruit, Specific Performance, Injunction, Rectification), and Hadley v. Baxendale damages calculus.",
    tags: [
      "mid-sem",
      "breach",
      "remedies",
      "section 73",
      "section 74",
      "hadley v baxendale",
      "specific performance",
      "14 marks",
    ],
    blocks: [
      {
        type: "p",
        text: "A breach of contract occurs when a contracting party fails, neglects, or refuses to fulfill their contractual obligations without a lawful excuse.",
      },
      {
        type: "h3",
        text: "1. Types of Breach",
      },
      {
        type: "ul",
        items: [
          "**Actual Breach**: Failure or refusal to perform at the due date, or during the course of performance.",
          "**Anticipatory Breach (Section 39)**: Repudiation of obligation before the date of performance arrives (expressly by words or impliedly by disabling conduct). Aggrieved party can sue immediately or wait until the due date.",
        ],
      },
      {
        type: "h3",
        text: "2. The Six Judicial Remedies for Breach",
      },
      {
        type: "table",
        headers: ["Remedy", "Governing Law", "Nature & Mechanism"],
        rows: [
          [
            "1. Rescission of Contract",
            "Section 39, ICA 1872; Sec 27 SRA 1963",
            "Injured party cancels contract and is discharged from further obligations.",
          ],
          [
            "2. Suit for Damages",
            "Sections 73–75, ICA 1872",
            "Compensatory monetary recovery for losses arising naturally (*Restitutio in Integrum*).",
          ],
          [
            "3. Suit upon Quantum Meruit",
            "Sections 65 & 70, ICA 1872",
            "Recovery of reasonable value for work already performed before wrongful cancellation.",
          ],
          [
            "4. Specific Performance",
            "Specific Relief Act, 1963 (2018 Amendment)",
            "Mandatory court order directing defaulting party to perform the contract.",
          ],
          [
            "5. Suit for Injunction",
            "Sections 36–42, Specific Relief Act, 1963",
            "Order restraining party from breaching a negative covenant (*Lumley v. Wagner*).",
          ],
          [
            "6. Rectification / Cancellation",
            "Sections 26 & 31, Specific Relief Act, 1963",
            "Correction of an instrument that fails to express true mutual intent due to mistake or fraud.",
          ],
        ],
      },
      {
        type: "h3",
        text: "3. Principles of Damages Assessment (Hadley v. Baxendale & Section 73)",
      },
      {
        type: "ul",
        items: [
          "_General / Ordinary Damages_: Losses arising naturally in the usual course of things from the breach (recoverable automatically).",
          "_Special Damages_: Losses arising from unusual circumstances, recoverable **only if** brought to the knowledge of the defaulting party at the time of contract.",
          "_Remoteness Bar_: No compensation for remote or indirect losses.",
          "_Duty to Mitigate_: Aggrieved party must take reasonable steps to mitigate the inconvenience and loss caused by breach.",
          "_Liquidated Damages vs Penalty (Section 74)_: Court awards **reasonable compensation** not exceeding the amount stipulated in the contract (*Fateh Chand v. Balkishan Dass*).",
        ],
      },
    ],
  },
  {
    id: "midsem-companies-act-2013",
    slug: "midsem-companies-act-2013",
    number: 207,
    title: "The Companies Act, 2013: Architecture & Governance Reforms",
    unit: "Mid Sem Important",
    marks: 14,
    lecture: "Mid-Sem Master Notes · Companies Act 2013",
    summary:
      "14-mark master note on Companies Act 2013: structural scheme (470 sections, 29 chapters), key innovations (OPC, Small Company, CSR Section 135), board reforms, auditor oversight, and NCLT/NCLAT.",
    tags: [
      "mid-sem",
      "companies act 2013",
      "opc",
      "csr",
      "section 135",
      "independent directors",
      "nclt",
      "14 marks",
    ],
    blocks: [
      {
        type: "p",
        text: "The Companies Act, 2013 (Act No. 18 of 2013) replaced the Companies Act 1956. It comprises **470 Sections, 29 Chapters, and 7 Schedules**, modernizing Indian corporate law to match global benchmarks.",
      },
      {
        type: "h3",
        text: "1. Key Structural Innovations",
      },
      {
        type: "ul",
        items: [
          "**One Person Company (OPC - Sec 2(62))**: Enables single entrepreneurs to incorporate a separate corporate entity with limited liability.",
          "**Small Company (Sec 2(85))**: Reduced compliance requirements for companies below prescribed capital/turnover limits.",
          "**Private Company Membership Cap (Sec 2(68))**: Maximum limit raised from 50 to 200 members.",
          "**Dormant Company (Sec 455)**: Statutory status for inactive companies holding assets or intellectual property.",
        ],
      },
      {
        type: "h3",
        text: "2. Corporate Governance & Board Accountability",
      },
      {
        type: "ul",
        items: [
          "_Independent Directors (Sec 149(4))_: Mandatory for listed companies (at least one-third of the board).",
          "_Women Directors (Sec 149(1))_: Mandatory appointment of at least one woman director for prescribed classes of companies.",
          "_Resident Director (Sec 149(3))_: At least one director must stay in India for $\ge 182$ days in a financial year.",
          "_Codified Director Duties (Sec 166)_: Fiduciary duty to act in good faith, exercise due care, and promote the objects of the company for stakeholders.",
        ],
      },
      {
        type: "h3",
        text: "3. Corporate Social Responsibility (CSR - Section 135)",
      },
      {
        type: "ul",
        items: [
          "_Applicability Threshold_: Companies with Net Worth $\ge ₹500\text{ Cr}$, Turnover $\ge ₹1,000\text{ Cr}$, or Net Profit $\ge ₹5\text{ Cr}$.",
          "_Mandate_: Must spend at least **2% of average net profits** of the preceding 3 financial years on Schedule VII social activities (education, healthcare, poverty eradication, sustainability).",
        ],
      },
      {
        type: "h3",
        text: "4. Regulatory & Adjudicatory Reforms",
      },
      {
        type: "ul",
        items: [
          "_NFRA (Section 132)_: National Financial Reporting Authority oversees accounting standards and auditor discipline.",
          "_Auditor Rotation (Section 139)_: Mandatory rotation of individual auditors every 5 years, audit firms every 10 years.",
          "_Specialized Tribunals_: Dispute resolution consolidated under the **National Company Law Tribunal (NCLT)** and **NCLAT**, with a complete civil court bar (**Section 430**).",
        ],
      },
    ],
  },
  {
    id: "midsem-revamping-of-companies-act",
    slug: "midsem-revamping-of-companies-act",
    number: 208,
    title: "Reasons Behind Revamping of Companies Act: 1956 vs 2013 Transition",
    unit: "Mid Sem Important",
    marks: 15,
    lecture: "Mid-Sem Master Notes · Revamping Rationale",
    summary:
      "10-15 mark exam note analyzing reasons behind replacing the 1956 Act from policy, business context, globalization, and environmental perspectives.",
    tags: [
      "mid-sem",
      "revamping",
      "companies act 1956 vs 2013",
      "jj irani committee",
      "satyam scandal",
      "15 marks",
    ],
    blocks: [
      {
        type: "p",
        text: "The Companies Act, 1956 governed Indian corporate enterprise for over five decades (658 Sections). The transition to the Companies Act, 2013 was driven by economic liberalization, globalization, corporate governance crises, and the recommendations of the **Dr. J.J. Irani Committee (2005)**.",
      },
      {
        type: "h3",
        text: "1. Policy & Environmental Drivers of Change",
      },
      {
        type: "ul",
        items: [
          "**Shift from Control to Disclosure**: Transition from a command-and-control licensing regime to a market-driven self-regulatory disclosure model.",
          "**Growth of Corporate Enterprise**: Growth from ~30,000 domestic companies in 1956 to over 800,000 globally active companies by 2013.",
          "**Technological Modernization**: Replacement of physical registers and paperwork with the MCA21 digital e-governance platform, electronic voting, and video-conferenced board meetings.",
          "**Response to Corporate Scandals**: The Satyam Scam (2009) highlighted the need for independent directors, auditor rotation (Sec 139), NFRA (Sec 132), and strict fraud penalties (Sec 447).",
        ],
      },
      {
        type: "h3",
        text: "2. Comparative Matrix: 1956 Act vs. 2013 Act",
      },
      {
        type: "table",
        headers: ["Dimension", "Companies Act, 1956", "Companies Act, 2013"],
        rows: [
          [
            "Volume & Structure",
            "658 Sections, 15 Schedules (cumbersome, fragmented)",
            "470 Sections, 29 Chapters, 7 Schedules (compact, modern)",
          ],
          [
            "Entrepreneurial Forms",
            "Recognized only standard Private & Public Companies",
            "Introduced One Person Company (OPC) & Small Company",
          ],
          [
            "Director Governance",
            "Uncodified duties; no statutory independent directors",
            "Codified Duties (Sec 166), Mandatory Independent & Women Directors",
          ],
          [
            "CSR Obligations",
            "Entirely voluntary and philanthropic",
            "Mandatory 2% statutory CSR spending under Section 135",
          ],
          [
            "Shareholder Remedies",
            "Limited remedies; no collective action framework",
            "Class Action Suits under Section 245",
          ],
          [
            "Dispute Adjudication",
            "Company Law Board + High Courts (prolonged delays)",
            "NCLT & NCLAT with complete civil court bar (Sec 430)",
          ],
        ],
      },
    ],
  },
  {
    id: "midsem-jurisprudence-rule-of-law-and-equity",
    slug: "midsem-jurisprudence-rule-of-law-and-equity",
    number: 209,
    title: "Natural vs Legal Justice, Rule of Law, Equity & Legal Systems",
    unit: "Mid Sem Important",
    marks: 15,
    lecture: "Mid-Sem Master Notes · Jurisprudence & Systems",
    summary:
      "Structured 5-mark short answers covering: Natural Justice vs Legal Justice, Rule of Law (Dicey), Rule of Equity, and Common Law vs Civil Law systems.",
    tags: [
      "mid-sem",
      "natural justice",
      "legal justice",
      "rule of law",
      "equity",
      "common law",
      "civil law",
      "5 marks",
    ],
    blocks: [
      {
        type: "h3",
        text: "1. Natural Justice vs. Legal Justice (5 Marks)",
      },
      {
        type: "table",
        headers: ["Parameter", "Natural Justice (Jus Naturale)", "Legal Justice (Jus Civile)"],
        rows: [
          [
            "Source",
            "Universal moral reason, fairness, and unwritten equity",
            "Codified statutes, legislative enactments, and legal codes",
          ],
          [
            "Formality",
            "Substantive procedural fairness; flexible",
            "Rigid, formalistic, and strictly bound by statutory wording",
          ],
          [
            "Pillars",
            "1. Nemo Judex In Causa Sua (Rule against bias)\n2. Audi Alteram Partem (Fair hearing)",
            "Strict procedural and evidentiary compliance under statutes",
          ],
          [
            "Synthesis",
            "In *Maneka Gandhi v. UOI (1978)*, the Supreme Court held that statutory procedure must be 'just, fair, and reasonable', integrating natural justice into constitutional law.",
            "Operates in civil/criminal trials through positive statutory enactments.",
          ],
        ],
      },
      {
        type: "h3",
        text: "2. The Rule of Law (5 Marks)",
      },
      {
        type: "ul",
        items: [
          "_Concept_: Governance based on established legal principles rather than arbitrary ruler discretion (*A government of laws, not of men*).",
          "_A.V. Dicey's Three Postulates_:\n1. **Supremacy of Law**: Absolute predominance of regular law over arbitrary power.\n2. **Equality Before Law**: Universal subjection of all citizens and officials to ordinary law.\n3. **Predominance of Legal Spirit**: Rights established through judicial decisions.",
          "_Indian Matrix_: In *Kesavananda Bharati (1973)*, the Supreme Court held that the Rule of Law is an inviolable basic structure of the Constitution.",
        ],
      },
      {
        type: "h3",
        text: "3. The Rule of Equity (5 Marks)",
      },
      {
        type: "ul",
        items: [
          "_Origin_: Developed by the English Court of Chancery to mitigate the rigidity of early Common Law.",
          "_Cardinal Maxims_:\n• *Equity follows the law* (*Aequitas sequitur legem*)\n• *He who seeks equity must do equity*\n• *He who comes into equity must come with clean hands*\n• *Delay defeats equities* (*Vigilantibus non dormientibus jura subveniunt*)",
          "_Codification in India_: Integrated into the Specific Relief Act 1963 (injunctions, specific performance) and Indian Trusts Act 1882.",
        ],
      },
      {
        type: "h3",
        text: "4. Common Law vs. Civil Law Legal Systems (5 Marks)",
      },
      {
        type: "table",
        headers: ["Feature", "Common Law (India, UK, US)", "Civil Law (France, Germany, Japan)"],
        rows: [
          [
            "Primary Source",
            "Judicial Precedents (*Stare Decisis*) & Statutes",
            "Comprehensive, exhaustive Codified Statutes",
          ],
          [
            "Role of Judge",
            "Adversarial System (Judge is an impartial umpire)",
            "Inquisitorial System (Judge actively investigates facts)",
          ],
          [
            "Precedent Status",
            "Binding authority (**Article 141 in India**)",
            "Persuasive authority; prior rulings do not strictly bind",
          ],
        ],
      },
    ],
  },
];
