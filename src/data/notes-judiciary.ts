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
      "The judiciary is an independent constitutional organ, separate from the executive and legislature, structured in a strict hierarchy from the Supreme Court down to district streams and Lok Adalats.",
    tags: ["judiciary", "courts", "hierarchy", "lok adalat", "civil", "criminal", "revenue"],
    blocks: [
      {
        type: "p",
        text: "The Judiciary of India is the integrated constitutional organ charged with upholding the rule of law, protecting fundamental rights, maintaining public order, and resolving civil, commercial, criminal, and revenue disputes. Unlike federal systems with separate state and federal courts (e.g., the United States), India possesses a single unified judicial hierarchy based largely on the common law model inherited from the British legal system.",
      },
      {
        type: "h3",
        text: "Core Characteristics and Constitutional Foundations",
      },
      {
        type: "ul",
        items: [
          "_Constitutional Independence (Article 50)_: The Constitution mandates the separation of the judiciary from the executive in the public services of the State, insulating judges from political interference.",
          "_Single Unified Pyramid_: A singular chain of judicial hierarchy where the law declared by the Supreme Court is binding on all courts within the territory of India (**Article 141**).",
          "_Bench System (No Jury)_: Following the landmark *K.M. Nanavati case (1959)*, jury trials were abolished in India; cases are adjudicated directly by trained professional judges sitting singly or in benches (Division Bench, Full Bench, Constitutional Bench).",
          "_Dual Standards of Proof_: Civil and commercial suits are decided on a *Preponderance of Probabilities*, whereas criminal offences require proof *Beyond Reasonable Doubt*.",
          "_Comprehensive Jurisdictional Reach_: Maintenance of civil commercial order, corporate dispute adjudication, criminal sanctions, revenue collection oversight, and constitutional judicial review.",
        ],
      },
      {
        type: "h3",
        text: "Hierarchy of Courts in India",
      },
      {
        type: "p",
        text: "The Indian court system operates across four primary structural tiers, with district-level adjudication dividing into three specialized streams: Civil, Criminal, and Revenue.",
      },
      {
        type: "tree",
        title: "Integrated Judicial Pyramid of India",
        lines: [
          "Supreme Court of India (Apex Constitutional Court - New Delhi)",
          "                  |",
          "   High Courts of States & Union Territories (25 High Courts)",
          "                  |",
          "District & Sessions Courts (Principal Court of Original Jurisdiction)",
          "   _______________|_______________________________",
          "  |                       |                       |",
          "Civil Courts Stream   Criminal Courts Stream  Revenue Courts Stream",
          "  |                       |                       |",
          "District Judge         Sessions Judge          Board of Revenue",
          "Senior Civil Judge     Chief Judicial Mag.     Divisional Commissioner",
          "Junior Civil Judge     Judicial Mag. (Class I) Collector / DM",
          "Small Causes Court     Judicial Mag. (Class II)Tehsildar / Naib Tehsildar",
          "                  |",
          "Lok Adalats & Village Nyaya Panchayats (Grassroots ADR)",
        ],
      },
      {
        type: "h4",
        text: "1. Civil Courts Stream (Property, Contracts, Commercial Disputes)",
      },
      {
        type: "ul",
        items: [
          "_District Judge (Principal Civil Court)_: Highest civil judicial authority in the district. Possesses unlimited pecuniary (monetary) jurisdiction and hears original civil suits of high valuation as well as appeals from subordinate judges. _Example_: Multi-crore commercial breach of contract suit, trademark infringement injunctions, and probate of wills.",
          "_Senior Civil Judge / Sub-Judge_: Adjudicates civil suits of substantial valuation up to the limit prescribed by state high court rules. _Example_: Suits for recovery of business debts (₹10 Lakhs – ₹50 Lakhs), specific performance of property sale agreements, and partnership dissolution claims.",
          "_Junior Civil Judge / Munsif Court_: Adjudicates small-scale civil matters, eviction petitions, and lower-value recovery claims.",
          "_Family Courts (Family Courts Act, 1984)_: Specialized statutory civil forum for matrimonial disputes, divorce, restitution of conjugal rights, child custody, and maintenance.",
          "_Courts of Small Causes_: Established under the *Provincial Small Cause Courts Act, 1887* for the summary trial of simple debt and movable property disputes with no right of appeal on facts.",
        ],
      },
      {
        type: "h4",
        text: "2. Criminal Courts Stream (Offences, Penalties, Public Order)",
      },
      {
        type: "ul",
        items: [
          "_Sessions Judge / Additional Sessions Judge_: Highest criminal court in the district. Tries grave and heinous offences (murder, dacoity, major economic frauds). Has the power to pass any sentence authorized by law, including life imprisonment and the **death penalty** (capital punishment is subject to mandatory confirmation by the High Court under BNSS/CrPC).",
          "_Assistant Sessions Judge_: Can try serious criminal offences and pass any sentence except death, life imprisonment, or imprisonment exceeding 10 years.",
          "_Chief Judicial Magistrate (CJM) / Chief Metropolitan Magistrate (CMM)_: Administrative head of magistrates in the district/metropolis. Empowered to pass prison sentences of up to **7 years** and impose fines.",
          "_Judicial Magistrate First Class (JMFC) / Metropolitan Magistrate (MM)_: Handles general cognizable and non-cognizable criminal trials. Empowered to award imprisonment up to **3 years** and fines up to ₹10,000. _Key Commercial Example_: Primary trial court for corporate and commercial complaints of dishonour of cheques under **Section 138 of the Negotiable Instruments Act, 1881**.",
          "_Judicial Magistrate Second Class (JMSC)_: Handles minor offences; empowered to pass sentences of imprisonment up to 1 year and fines up to ₹5,000.",
        ],
      },
      {
        type: "h4",
        text: "3. Revenue Courts Stream (Land, Tenancy, Agricultural Revenue)",
      },
      {
        type: "ul",
        items: [
          "_Board of Revenue_: The supreme appellate and administrative authority in the state for agricultural land matters, land tax assessment, and tenancy disputes.",
          "_Divisional Commissioner_: Hears revenue appeals against orders passed by District Collectors.",
          "_Collector / District Magistrate (DM)_: Head of revenue administration in the district; hears land title, public premises eviction, and stamp duty disputes.",
          "_Tehsildar & Naib Tehsildar_: Primary revenue court of original jurisdiction. Handles mutation of land records, demarcation of boundaries, partition of agricultural holdings, and collection of land revenue.",
        ],
      },
      {
        type: "h3",
        text: "How the Hierarchy Operates in Practice",
      },
      {
        type: "ul",
        items: [
          "_Grassroots Level (Lok Adalats)_: Operates under the *Legal Services Authorities Act, 1987*. Pre-litigation and pending civil/compoundable criminal disputes are resolved via amicable conciliation. No court fees; award has the binding force of a civil decree with zero appeal, drastically reducing judicial backlog.",
          "_Subordinate Courts_: Form the initial point of filing for criminal charge-sheets, civil plaints, and revenue partitions. Evidence (documentary & oral witness examination) is recorded at this trial stage.",
          "_High Courts (Article 226 & 227)_: Hear regular first and second appeals, revision petitions, and exercise expansive writ jurisdiction (Habeas Corpus, Mandamus, Certiorari, Prohibition, Quo Warranto).",
          "_Supreme Court (Article 32 & 136)_: The final appellate court of the land and custodian of constitutional rights. Special Leave Petitions (SLPs) under Article 136 allow discretionary appeals against any judgment or order from any court or tribunal in India.",
        ],
      },
      {
        type: "h3",
        text: "Key Exam Takeaway for 14 Marks",
      },
      {
        type: "p",
        text: "In your university answer, structure your response into four distinct pillars: (1) Constitutional basis (Article 50 separation, Article 141 binding precedent), (2) The 4-tier structural pyramid, (3) The 3 specialized district streams (Civil, Criminal, Revenue) with statutory sentencing and monetary powers, and (4) The difference in evidentiary standards (Preponderance of Probabilities vs Proof Beyond Reasonable Doubt).",
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
      "Indian law derives from the Constitution, statutory enactments, binding judicial precedents, and customs. Contract law serves as the bedrock of commerce, underpinned by classic Latin maxims.",
    tags: ["sources", "maxims", "contract", "business", "precedent", "legislation"],
    blocks: [
      {
        type: "p",
        text: "The Indian legal system synthesizes codified statutory enactments, constitutional mandates, ancient commercial customs, and Anglo-Indian common law principles. Contract law forms the core foundation of modern mercantile transactions, providing the legal machinery to convert reciprocal promises into actionable rights.",
      },
      {
        type: "h3",
        text: "1. Primary and Secondary Sources of Law",
      },
      {
        type: "table",
        headers: ["Source", "Nature & Authority", "Legal Mechanics", "Commercial Example"],
        rows: [
          [
            "The Constitution of India",
            "Primary / Supreme Grundnorm",
            "All statutes derive validity from the Constitution. Any law violating fundamental rights is void under Article 13.",
            "Article 19(1)(g) guarantees freedom of trade and profession, subject to reasonable state restrictions.",
          ],
          [
            "Legislation (Statutes / Acts)",
            "Primary Codified Source",
            "Laws enacted by Union Parliament or State Legislatures under the Seventh Schedule lists.",
            "Indian Contract Act 1872, Companies Act 2013, Sale of Goods Act 1930, Consumer Protection Act 2019.",
          ],
          [
            "Delegated Legislation",
            "Subordinate Rule-Making",
            "Executive notifications, rules, and circulars framed under parent statutes.",
            "SEBI Listing Obligations (LODR) Regulations, RBI Master Circulars on commercial lending.",
          ],
          [
            "Judicial Precedent (Stare Decisis)",
            "Binding Case Law Authority",
            "Principles (*Ratio Decidendi*) established by superior courts. Article 141 makes Supreme Court rulings binding on all courts.",
            "*Salomon v. Salomon* (Separate legal personality); *Hadley v. Baxendale* (Measure of breach damages).",
          ],
          [
            "Customs & Usages",
            "Historical Mercantile Source",
            "Unbroken, ancient, reasonable trade practices recognized by courts if not contrary to statutory law.",
            "Indigenous negotiable instruments (*Hundis*) developed by Indian trading communities.",
          ],
        ],
      },
      {
        type: "h3",
        text: "2. Essential Latin Legal Maxims in Commercial Law",
      },
      {
        type: "maxim",
        latin: "Consensus ad idem",
        meaning:
          "Meeting of the minds. The parties must agree upon the same thing in the same sense (Section 13). Without consensus ad idem, no valid contract comes into existence. Example: A owns two cars (a Honda and a BMW). A offers to sell 'his car' thinking of the Honda; B accepts thinking of the BMW. No contract is formed.",
      },
      {
        type: "maxim",
        latin: "Quid pro quo",
        meaning:
          "Something in return; consideration (Section 2(d)). A promise made without consideration is gratuitous and void (*Nudum Pactum*). Example: A promises to gift B ₹50,000 out of goodwill. If A fails to pay, B cannot sue because there is no quid pro quo.",
      },
      {
        type: "maxim",
        latin: "Caveat emptor",
        meaning:
          "Let the buyer beware. In sales of goods, the buyer must examine the goods and satisfy himself regarding quality and fitness before purchasing, unless the seller actively conceals latent defects or commits fraud.",
      },
      {
        type: "maxim",
        latin: "Nemo dat quod non habet",
        meaning:
          "No one can transfer a better title than he himself possesses (Section 27, Sale of Goods Act). A thief or finder of goods cannot pass good title to a third party, except in statutory mercantile exceptions.",
      },
      {
        type: "maxim",
        latin: "Quantum meruit",
        meaning:
          "As much as earned / deserved (Section 65 & 70). Where one party has partially performed a contract and the contract is terminated without his fault, he is entitled to claim reasonable compensation for the work actually done. Example: An author writes 5 chapters of a 10-chapter book before the publisher cancels publication; the author can sue on quantum meruit.",
      },
      {
        type: "maxim",
        latin: "Uberrima fides",
        meaning:
          "Utmost good faith. Contracts where full voluntary disclosure of all material facts is mandatory, such as contracts of insurance, family settlements, and prospectus allotments in company law.",
      },
      {
        type: "maxim",
        latin: "Ex nudo pacto non oritur actio",
        meaning:
          "No action arises from a bare promise made without consideration. Reaffirms Section 25 of the Contract Act that agreements without consideration are void.",
      },
      {
        type: "maxim",
        latin: "Damnum sine injuria",
        meaning:
          "Damage without legal injury. Actual monetary loss suffered by a party without any violation of a recognized legal right gives no cause of action. Example: Opening a competing school or restaurant that reduces a rival's profits (*Gloucester Grammar School case*).",
      },
      {
        type: "maxim",
        latin: "Injuria sine damno",
        meaning:
          "Legal injury without actual financial damage. Violation of an absolute legal right entitles the plaintiff to nominal damages even if no actual monetary loss was incurred (*Ashby v. White [1703]*).",
      },
      {
        type: "maxim",
        latin: "Volenti non fit injuria",
        meaning:
          "To a willing person, no injury is done. One who voluntarily consents to take a known risk cannot claim legal damages for the resulting harm (e.g., spectators injured by a flying ball at a cricket match).",
      },
      {
        type: "h3",
        text: "3. Foundations of Business Law & Economic Order",
      },
      {
        type: "p",
        text: "Commercial law exists to secure three indispensable business goals: (1) **Predictability** (ensuring promises made today are enforceable tomorrow), (2) **Risk Allocation** (determining who bears loss when unexpected events or defaults occur), and (3) **Dispute Resolution** (providing structured judicial and arbitral forums to resolve commercial deadlock).",
      },
    ],
  },
];
