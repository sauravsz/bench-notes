import type { ExamQuestion } from "./types";

export const examQuestions: ExamQuestion[] = [
  {
    id: "q1",
    number: 1,
    title: "Contracts are agreements, but not vice versa",
    question:
      "Justify why contracts are agreements but not vice versa. Include the differences between an agreement and a contract.",
    marks: 14,
    relatedSlugs: ["contract-agreement-promise", "definitions-essentials"],
    blocks: [
      {
        type: "p",
        text: "The Indian Contract Act, 1872 treats a contract as a specific, legally enforceable subset of the broader universe of agreements. Every contract necessarily passes through the stage of an agreement, but only those agreements that satisfy the statutory test of legal enforceability under Section 10 ripen into contracts. Hence, the legal aphorism: 'All contracts are agreements, but all agreements are not necessarily contracts.'",
      },
      {
        type: "h3",
        text: "Statutory path from proposal to contract",
      },
      {
        type: "ul",
        items: [
          "_Section 2(a) — Proposal_: When one person signifies to another his willingness to do or to abstain from doing anything, with a view to obtaining the assent of that other to such act or abstinence, he is said to make a proposal.",
          "_Section 2(b) — Promise_: When the person to whom the proposal is made signifies his assent thereto, the proposal is said to be accepted. A proposal, when accepted, becomes a promise.",
          "_Section 2(e) — Agreement_: Every promise and every set of promises, forming the consideration for each other, is an agreement.",
          "_Section 2(h) — Contract_: An agreement enforceable by law is a contract.",
        ],
      },
      {
        type: "callout",
        label: "The Two-Step Mathematical Legal Formula",
        body: "Step 1: Offer + Acceptance = Agreement (Consensus ad idem).\nStep 2: Agreement + Legal Enforceability (Section 10 Essentials) = Contract.",
      },
      {
        type: "h3",
        text: "Juristic definitions",
      },
      {
        type: "ul",
        items: [
          "_Sir Frederick Pollock_: 'Every agreement and promise enforceable at law is a contract.'",
          "_Sir John Salmond_: 'A contract is an agreement creating and defining obligations between the parties.'",
          "_Sir William Anson_: 'A legally binding agreement between two or more persons by which rights are acquired by one or more to acts or forbearances on the part of the other.'",
        ],
      },
      {
        type: "p",
        text: "Each jurist confirms that legal enforceability is the defining element that separates a binding commercial contract from a bare mutual understanding.",
      },
      {
        type: "h3",
        text: "Comprehensive difference between agreement and contract",
      },
      {
        type: "table",
        headers: ["Basis of Distinction", "Agreement (Section 2(e))", "Contract (Section 2(h))"],
        rows: [
          [
            "Definition & Meaning",
            "Any promise or set of mutual promises backed by reciprocal consideration.",
            "An agreement that is strictly enforceable by an established court of law.",
          ],
          [
            "Fundamental Formula",
            "Offer + Acceptance = Agreement.",
            "Agreement + Legal Enforceability (Section 10) = Contract.",
          ],
          [
            "Legal Obligation",
            "Does not necessarily create a legal duty; may create purely social, domestic, religious, or moral obligations.",
            "Necessarily creates an actionable legal obligation (_jus in personam_) between the contracting parties.",
          ],
          [
            "Binding Nature",
            "Not legally enforceable in a court of law if either party reneges.",
            "Strictly binding; breach results in statutory remedies (damages, specific performance, injunction).",
          ],
          [
            "Scope & Genus",
            "Wider concept (Genus). It encompasses social promises, domestic understandings, void bargains, and valid contracts.",
            "Narrower concept (Species). It is restricted exclusively to valid, enforceable agreements.",
          ],
          [
            "Remedies on Breach",
            "No judicial remedy is available to the aggrieved party.",
            "Aggrieved party can file a civil suit for breach under the Contract Act and Specific Relief Act, 1963.",
          ],
        ],
      },
      {
        type: "h3",
        text: "When an agreement fails to become a contract (With Concrete Examples)",
      },
      {
        type: "ul",
        items: [
          "_1. Social and Domestic Agreements (Absence of Legal Intention)_: In social arrangements, parties do not intend to incur legal consequences. _Example_: A invites B to dinner at a restaurant, and B accepts. If A fails to host or B fails to attend, neither can sue for damages because there was no intention to create legal relations (*Balfour v. Balfour [1919]*).",
          "_2. Agreements with Minors or Incompetent Persons (Section 11)_: Capacity is mandatory. _Example_: A loan agreement executed with a minor (under 18 years) is void _ab initio_ (*Mohori Bibee v. Dharmodas Ghose [1903]*). It remains a bare agreement and can never become a contract.",
          "_3. Agreements Lacking Free Consent (Sections 14–18)_: Where assent is procured by coercion, undue influence, fraud, or misrepresentation, the agreement is voidable and not an absolute contract. _Example_: A points a gun at B to sign a property sale deed for ₹10,000 (Coercion under Sec 15).",
          "_4. Unlawful Consideration or Object (Section 23)_: If consideration or purpose is prohibited by law, immoral, or opposed to public policy. _Example_: An agreement where X pays Y ₹50,000 to assault Z is void and criminal.",
          "_5. Expressly Declared Void Agreements (Sections 26–30)_: Agreements in absolute restraint of marriage (Sec 26), trade (Sec 27), legal proceedings (Sec 28), or wagering pacts (Sec 30) remain unenforceable agreements.",
          "_6. Uncertain or Impossible Agreements (Sections 29 & 56)_: _Example_: A agrees to sell B '100 tons of oil' without specifying type, viscosity, or grade (void for uncertainty); A agrees to discover treasure by magic (void for physical impossibility).",
        ],
      },
      {
        type: "h3",
        text: "Conclusion",
      },
      {
        type: "p",
        text: "Agreement is the genus, while contract is the species. An agreement is the preliminary foundation, but only when infused with legal intention, competence, free consent, lawful consideration, and lawful object under Section 10 does it attain the force of a contract. Therefore, while all contracts must originate as agreements, only legally enforceable agreements become contracts.",
      },
    ],
  },
  {
    id: "q2",
    number: 2,
    title: "Types of contract, and consent",
    question:
      "Distinguish the different types of contract. Also explain consent and free consent, and how they differ.",
    marks: 14,
    relatedSlugs: ["classification-mistake-incapacity", "capacity-free-consent"],
    blocks: [
      {
        type: "p",
        text: "Under the Indian Contract Act, 1872, contracts are systematically classified across three core dimensions: (1) Enforceability/Validity, (2) Mode of Formation, and (3) Extent of Performance. In addition, the validity of any contract fundamentally hinges upon genuine *consensus ad idem* (consent) and the absence of vitiating factors (free consent).",
      },
      {
        type: "h3",
        text: "1. Classification of contracts by enforceability & validity",
      },
      {
        type: "ul",
        items: [
          "_Valid Contract (Section 2(h) & Section 10)_: An agreement that satisfies all statutory requirements of Section 10. It is fully binding on both parties and enforceable in a court of law. _Example_: A signs a written agreement to sell his car to B for ₹3,00,000, and B agrees to pay on delivery.",
          "_Voidable Contract (Section 2(i))_: An agreement which is enforceable by law at the option of one or more of the parties thereto (the aggrieved/injured party), but not at the option of the other or others. It occurs when consent is caused by coercion, undue influence, fraud, or misrepresentation (Sections 19 & 19A). It remains valid until rescinded. _Example_: A threatens to burn B's warehouse unless B sells his property at half market price. B can elect to affirm the contract or rescind it through court.",
          "_Void Agreement (Section 2(g))_: An agreement not enforceable by law from the very inception (_void ab initio_). It confers no legal rights or obligations on either party. _Example_: An agreement with a minor (*Mohori Bibee case*) or a bilateral mistake regarding the existence of the subject matter (Section 20).",
          "_Void Contract (Section 2(j))_: A contract which was completely valid when entered into, but subsequently ceases to be enforceable by law due to supervening impossibility, destruction of subject matter, or change in government law (Section 56). _Example_: A contracts to sing at B's theatre on a future date. Before that date, A loses his voice due to illness or the theatre is destroyed by an earthquake.",
          "_Illegal Agreement_: An agreement whose object or consideration is unlawful, forbidden by law, or opposed to public policy under Section 23. All illegal agreements are void, and all collateral transactions connected to them are also tainted and void. _Example_: An agreement to smuggle contraband, or borrowing money specifically to finance illegal narcotics trafficking.",
          "_Unenforceable Contract_: A contract which is good in substance, but cannot be enforced in a court of law due to some technical defect, such as absence of written form, lack of registration, or expiry of limitation period under the Limitation Act. Once the technical defect is remedied (e.g. stamping or registration), it becomes enforceable.",
        ],
      },
      {
        type: "h3",
        text: "2. Classification of contracts by mode of formation",
      },
      {
        type: "ul",
        items: [
          "_Express Contract (Section 9)_: A contract where terms, promises, and mutual obligations are stated expressly in spoken words or written language. _Example_: A writes a formal email to B: 'I offer to sell my MacBook Pro M2 for ₹80,000', and B replies: 'I accept your offer'.",
          "_Implied / Tacit Contract (Section 9)_: A contract that comes into existence through the acts, conduct of the parties, or circumstances of the case, rather than spoken or written words. _Example 1_: A passenger boards a public city bus (DTC/BEST); by boarding, an implied contract is formed to pay the scheduled fare. _Example 2_: A consumer inserts coins or scans a UPI QR code at an automated vending machine to dispense a beverage.",
          "_Quasi-Contract (Sections 68–72: Certain Relations Resembling Contract)_: A legal obligation created by law in the absence of any agreement, based on the equitable doctrine of unjust enrichment (*Nemo debet locupletari ex aliena jactura* — no man should grow rich at the expense of another's loss). _Example 1 (Sec 71)_: A person who finds goods belonging to another and takes them into custody is subject to the same responsibility as a bailee. _Example 2 (Sec 70)_: A tradesman leaves goods at B's house by mistake; B treats the goods as his own and consumes them. B is bound in quasi-contract to compensate the tradesman.",
          "_E-Contract (Electronic / Cyber Contract)_: A contract modeled and executed through digital channels, email exchanges, electronic data interchange (EDI), or digital signatures under the Information Technology Act, 2000 (Section 10A). Includes Click-wrap (clicking 'I Agree'), Shrink-wrap (breaking software packaging seal), and Browse-wrap agreements.",
        ],
      },
      {
        type: "h3",
        text: "3. Classification of contracts by extent of performance",
      },
      {
        type: "ul",
        items: [
          "_Executed Contract_: A contract where both parties have completely performed their respective obligations and nothing remains to be done. _Example_: A goes to a bookstore, pays ₹500 in cash, and immediately takes possession of the textbook.",
          "_Executory Contract_: A contract where the obligations of one or both parties remain to be performed in the future. It can be divided into:",
          "  • _Unilateral Contract (One-Sided Executory)_: A contract where one party has performed their part at the time of formation, while the obligation of the other party remains outstanding. _Example_: A finds B's lost dog pursuant to a public reward announcement of ₹10,000. A has executed his part; B's obligation to pay the reward is executory.",
          "  • _Bilateral Contract (Two-Sided Executory)_: A contract where both parties make reciprocal promises that are to be performed at a future date. _Example_: A real estate developer promises to deliver an apartment in 12 months, and the buyer promises to pay in structured quarterly construction-linked installments.",
        ],
      },
      {
        type: "h3",
        text: "4. Consent vs. Free Consent (Detailed Comparative Matrix)",
      },
      {
        type: "p",
        text: "Section 13 defines *Consent*: Two or more persons are said to consent when they agree upon the same thing in the same sense (*consensus ad idem*). If there is no meeting of minds regarding the identity of the subject matter, price, or fundamental nature of the transaction, there is no contract at all.",
      },
      {
        type: "p",
        text: "Section 14 defines *Free Consent*: Consent is said to be free when it is NOT caused by any of the five statutory vitiating factors:",
      },
      {
        type: "table",
        headers: ["Vitiating Factor", "Statutory Section", "Core Legal Principle & Practical Scenario", "Legal Effect on Contract"],
        rows: [
          [
            "Coercion",
            "Section 15",
            "Committing or threatening to commit any act forbidden by the Indian Penal Code, or unlawfully detaining property. _Example_: A threatens to shoot B or commit suicide unless B signs a property deed (*Chikham Amiraju v. Seshamma*).",
            "Voidable at the option of the aggrieved party (Section 19).",
          ],
          [
            "Undue Influence",
            "Section 16",
            "Dominating the will of another through real/apparent authority, fiduciary relationship, or mental distress. _Example_: A doctor induces an elderly, ailing patient to transfer property at a fraction of value (*Mannu Singh v. Umadat Pandey*).",
            "Voidable at the option of the aggrieved party (Section 19A).",
          ],
          [
            "Fraud",
            "Section 17",
            "Intentional deceit, suggestion of false fact without belief in truth, or active concealment of a defect (*Derry v. Peek*). _Example_: A seller paints over structural cracks in an automobile engine to deceive an unsuspecting buyer.",
            "Voidable + Right to sue for damages in tort/deceit (Section 19).",
          ],
          [
            "Misrepresentation",
            "Section 18",
            "Innocent, unwarranted false assertion made without intent to deceive, believing it to be true. _Example_: A innocently tells B that his factory produces 500 units/day based on old records, when output has dropped to 300.",
            "Voidable at the option of the aggrieved party (Section 19).",
          ],
          [
            "Bilateral Mistake of Fact",
            "Section 20",
            "Both parties are under a mutual mistake regarding a matter of fact essential to the contract. _Example_: A agrees to buy cargo of wheat on ship 'Highflyer'; unknown to both, the ship sank the previous night.",
            "Void ab initio (Section 20). No contract comes into existence.",
          ],
        ],
      },
      {
        type: "h3",
        text: "Conclusion",
      },
      {
        type: "p",
        text: "Consent guarantees that the minds of the parties met (*consensus ad idem*). Free consent guarantees that the assent was voluntary, informed, and unpolluted by pressure, deception, or mutual error. In an examination, state that while consent is the necessary starting point, free consent is the indispensable statutory condition for legal enforceability.",
      },
    ],
  },
  {
    id: "q3",
    number: 3,
    title: "How the judiciary works, and the sources of law",
    question:
      "How does the structure of the Indian judiciary actually work? Which sources of law does it adapt?",
    marks: 14,
    relatedSlugs: ["indian-judiciary", "sources-maxims-foundations"],
    blocks: [
      {
        type: "p",
        text: "The Indian Judiciary is an integrated, hierarchical, and independent institution established under the Constitution of India. It operates under a single unified judicial pyramid, unlike federal dual-court systems (such as in the USA), ensuring constitutional supremacy, commercial predictability, and uniform interpretation of central and state laws.",
      },
      {
        type: "h3",
        text: "1. The Four-Tier Structural Hierarchy",
      },
      {
        type: "tree",
        title: "Integrated Judicial Pyramid of India",
        lines: [
          "Supreme Court of India (Apex Constitutional Court - New Delhi)",
          "                  |",
          "High Courts (Apex Judicial Body at State / UT Level - 25 High Courts)",
          "                  |",
          "District & Sessions Courts (District Headquarters)",
          "   _______________|_______________________________",
          "  |                       |                       |",
          "Civil Stream          Criminal Stream         Revenue Stream",
          "  |                       |                       |",
          "District Judge         Sessions Judge          Board of Revenue",
          "Senior Civil Judge     Chief Judicial Mag.     Divisional Commissioner",
          "Junior Civil Judge     Judicial Mag. (Class I) Collector / DM",
          "Small Causes Court     Judicial Mag. (Class II)Tehsildar / Naib Tehsildar",
          "                  |",
          "Lok Adalats & Nyaya Panchayats (Grassroots & Alternative Dispute Resolution)",
        ],
      },
      {
        type: "h3",
        text: "2. Detailed operational mechanisms across court streams",
      },
      {
        type: "ul",
        items: [
          "_Supreme Court of India (Articles 124–147)_: The apex guardian of the Constitution. It possesses Original Jurisdiction (inter-state disputes, Art 131), Writ Jurisdiction for fundamental rights (Art 32), Appellate Jurisdiction over civil/criminal High Court appeals (Arts 132–134), Special Leave Petitions (Art 136), and Advisory Jurisdiction (Art 143). Under **Article 141**, the law declared by the Supreme Court is binding on all courts within the territory of India.",
          "_High Courts (Articles 214–231)_: The highest judicial authority in each state. High Courts possess supervisory jurisdiction over all subordinate tribunals (Art 227) and wide writ powers under **Article 226** (enforcing fundamental rights and any other legal rights).",
          "_District Civil Courts_: Adjudicate monetary disputes, breach of commercial contracts, property title, injunctions, and specific performance based on the *Code of Civil Procedure (CPC), 1908*. Cases are decided on a *Preponderance of Probabilities*.",
          "_District Criminal Courts_: Administer criminal justice under the *Bharatiya Nagarik Suraksha Sanhita (BNSS) / CrPC* and *Bharatiya Nyaya Sanhita (BNS) / IPC*. Sessions Judges can pass any sentence authorized by law (including death sentence, subject to High Court confirmation). Offences must be proven *Beyond Reasonable Doubt*.",
          "_Revenue Courts_: Special statutory forums governing agricultural land titles, tenancy disputes, land revenue assessment, and mutation of land records under state land revenue codes.",
          "_Alternative Dispute Resolution (ADR) & Lok Adalats_: Operating under the *Legal Services Authorities Act, 1987*. Lok Adalats provide conciliation, zero court fees, fast disposal, and awards that have the binding status of a civil court decree with no appeal.",
        ],
      },
      {
        type: "h3",
        text: "3. Primary and secondary sources of Indian law",
      },
      {
        type: "table",
        headers: ["Source Classification", "Legal Source", "Constitutional Basis & Commercial Relevance", "Example in Practice"],
        rows: [
          [
            "Primary Source",
            "Constitution of India",
            "The organic _Grundnorm_ and supreme legal authority of India. Any statute violating constitutional provisions is declared void under Judicial Review (Article 13).",
            "Articles 14, 19(1)(g) (freedom of trade/business), Article 21, and Article 300A (right to property).",
          ],
          [
            "Primary Source",
            "Statutes & Parliamentary Enactments",
            "Codified primary legislations passed by Union Parliament (List I & III) and State Legislatures (List II & III) under Seventh Schedule.",
            "Indian Contract Act 1872, Companies Act 2013, Sale of Goods Act 1930, IBC 2016, IT Act 2000.",
          ],
          [
            "Primary Source",
            "Ordinances & Delegated Legislation",
            "Executive law-making promulgated when legislative houses are not in session (President under Art 123; Governor under Art 213). Includes statutory rules, notifications (e.g. MCA, RBI, SEBI regulations).",
            "MCA Companies (CSR Policy) Rules, RBI Master Directions on digital lending.",
          ],
          [
            "Secondary Source",
            "Judicial Precedent (Stare Decisis)",
            "Binding legal principles (*Ratio Decidendi*) established by the Supreme Court and High Courts. Built upon English Common Law principles of equity, justice, and good conscience.",
            "*Salomon v. Salomon* (Corporate personality); *Hadley v. Baxendale* (Measure of breach damages).",
          ],
          [
            "Secondary Source",
            "Customs and Usages",
            "Ancient, continuous, certain, and reasonable trade practices that have obtained the force of law. Must not be contrary to express statutes or public policy.",
            "*Hundis* and mercantile credit instruments in Indian merchant guilds (*Lex Mercatoria*).",
          ],
        ],
      },
      {
        type: "h3",
        text: "Conclusion",
      },
      {
        type: "p",
        text: "The Indian judiciary functions as a unified constitutional apparatus integrating statutory codifications with common law judicial precedents. In examination answers, emphasize Article 141 (binding precedent), Article 50 (separation of powers), and the dual civil/criminal evidentiary standards.",
      },
    ],
  },
  {
    id: "q4",
    number: 4,
    title: "How society and law are related",
    question: "How is society related to law?",
    marks: 14,
    relatedSlugs: ["constitution-fundamental-rights", "legal-environment-labour"],
    blocks: [
      {
        type: "p",
        text: "Law and society exist in an organic, symbiotic relationship. Law serves as an instrument of social control, dispute resolution, and economic facilitation, while society provides the values, customs, and commercial needs that shape legislation. As Roscoe Pound observed in his sociological jurisprudence, law functions as an instrument of *'Social Engineering'* to balance competing societal interests.",
      },
      {
        type: "h3",
        text: "1. Jurisprudential perspectives on law and society",
      },
      {
        type: "ul",
        items: [
          "_Sociological School (Roscoe Pound, Ihering)_: Treats law as social engineering designed to satisfy maximum human desires with minimum friction and waste.",
          "_Historical School (Friedrich Carl von Savigny)_: Law is not arbitrarily created by rulers; it grows with the growth and strengthens with the strength of the people, originating from the common consciousness of the people (*Volksgeist*).",
          "_Positivist / Analytical School (John Austin)_: Defines law as the command of the sovereign, backed by sanctions. In modern constitutional societies, the sovereign command is channeled through democratic legislative institutions.",
          "_Natural Law School_: Law is grounded in universal reason, justice, and moral ethics. Reflected in the Indian Constitution under Article 21's doctrine of 'Just, Fair, and Reasonable' procedure (*Maneka Gandhi v. Union of India [1978]*).",
        ],
      },
      {
        type: "h3",
        text: "2. The Constitution as the fundamental social compact",
      },
      {
        type: "ul",
        items: [
          "_Part III: Fundamental Rights (Civil Liberties)_: Protects individual autonomy against arbitrary state overreach. Key provisions include Article 14 (Equality before law), Article 19(1)(g) (Freedom of trade, occupation, and business), and Article 21 (Right to life, dignity, and privacy).",
          "_Part IV: Directive Principles of State Policy (Socio-Economic Charter)_: Guides legislation toward social welfare, living wages (Art 43), workplace health, and wealth decentralization (Art 39(b) & (c)).",
          "_Part IV-A: Fundamental Duties (Article 51A)_: Enacted via the 42nd Amendment (1976), prescribing ethical obligations for citizens to uphold sovereignty, environmental preservation, and public property.",
        ],
      },
      {
        type: "h3",
        text: "3. Modern legal mechanisms advancing social & economic justice",
      },
      {
        type: "table",
        headers: ["Mechanism / Domain", "Social Problem Addressed", "Statutory & Judicial Response", "Business Impact"],
        rows: [
          [
            "Public Interest Litigation (PIL)",
            "Marginalized communities lacking access to justice due to poverty, illiteracy, or systemic exploitation.",
            "Relaxation of _Locus Standi_ by Supreme Court (Justice P.N. Bhagwati & V.R. Krishna Iyer).",
            "Mandated corporate environmental audits, emission standards, and workplace safety norms.",
          ],
          [
            "Labour Law Reforms",
            "Consolidation into 4 Modern Labour Codes (Code on Wages 2019, Industrial Relations 2020, Social Security 2020, OSH Code 2020).",
            "Universal minimum wage, statutory gig-worker social security, and ease of doing business.",
          ],
          [
            "Corporate Social Responsibility",
            "Corporate concentration of wealth without social reinvestment.",
            "Section 135 of Companies Act, 2013: Mandatory 2% net profit allocation for eligible enterprises.",
            "Businesses legally institutionalized as social trustees contributing to education, healthcare, and ecology.",
          ],
          [
            "Consumer Protection Act, 2019",
            "E-commerce fraud, misleading celebrity advertisements, and product liability hazards in digital markets.",
            "Establishment of Central Consumer Protection Authority (CCPA) and statutory product liability rules.",
            "Direct accountability for e-commerce platforms and strict penalties for false advertising claims.",
          ],
        ],
      },
      {
        type: "h3",
        text: "Conclusion",
      },
      {
        type: "p",
        text: "Law is neither static nor insulated from social reality. As society modernizes through commerce, industrialization, and digital transactions, the legal system adapts through constitutional interpretation, legislative codification, and corporate social accountability to maintain social equilibrium.",
      },
    ],
  },
  {
    id: "q5",
    number: 5,
    title: "Evolution of business and commercial law",
    question:
      "Trace the historical evolution of business and commercial law, highlighting key statutory milestones.",
    marks: 14,
    relatedSlugs: ["sources-maxims-foundations", "legal-environment-labour"],
    blocks: [
      {
        type: "p",
        text: "Commercial law (*Mercantile Law*) is the body of law that governs the rights, relations, and conduct of persons and enterprises engaged in business, merchandising, trade, and sales. It evolved from medieval international trade customs into structured common law doctrines, and subsequently into modern digital and insolvency statutes.",
      },
      {
        type: "h3",
        text: "1. Chronological Evolution Phases",
      },
      {
        type: "ul",
        items: [
          "_Phase 1: Medieval Lex Mercatoria (The Law Merchant)_: In medieval European trade fairs and Mediterranean ports, merchants created self-enforcing customs. These principles (*good faith*, *prompt dispute resolution*, *negotiability of bills*, and *charter-party rules*) operated independently of local feudal courts.",
          "_Phase 2: Common Law Incorporation (Lord Mansfield Era)_: In 18th-century England, Lord Mansfield systematically incorporated merchant customs into English Common Law, establishing legal principles for insurance, promissory notes, and maritime contracts.",
          "_Phase 3: Colonial Indian Codification (1870–1930)_: British administration codified English common law principles into comprehensive Indian statutes:",
          "  • **Indian Contract Act, 1872**: Originally encompassed general contract principles, sale of goods, indemnity, guarantee, bailment, pledge, agency, and partnership.",
          "  • **Negotiable Instruments Act, 1881**: Codified law on promissory notes, bills of exchange, and cheques.",
          "_Phase 4: Specialization & Modern Industrial Statutes (1930–2000)_: As commerce grew, specialized provisions were carved out into dedicated statutes:",
          "  • **Sale of Goods Act, 1930**: Carved out from Chapter VII of the Contract Act.",
          "  • **Indian Partnership Act, 1932**: Carved out from Chapter XI of the Contract Act.",
          "  • **Companies Act, 1956**: Established independent post-independence corporate framework.",
          "  • **Arbitration and Conciliation Act, 1996**: UNCITRAL-aligned domestic and international commercial dispute resolution.",
          "_Phase 5: Digital & 21st-Century Economic Code Era (2000–Present)_:",
          "  • **Information Technology Act, 2000**: Digital signatures and electronic contract validity (Sec 10A).",
          "  • **Competition Act, 2002**: Prohibits anti-competitive agreements and abuse of dominance.",
          "  • **Companies Act, 2013**: Modern corporate governance, NCLT, and CSR institutionalization.",
          "  • **Insolvency and Bankruptcy Code (IBC), 2016**: Time-bound corporate resolution and creditor-in-control framework.",
        ],
      },
      {
        type: "h3",
        text: "2. Key Statutory Milestones in Business Law",
      },
      {
        type: "table",
        headers: ["Statutory Milestone", "Year", "Core Commercial Objective", "Key Business Mechanism"],
        rows: [
          [
            "Indian Contract Act",
            "1872",
            "Basic foundation of all commercial transactions and enforceable reciprocal promises.",
            "Section 10 essentials, offer & acceptance rules, breach damages (*Hadley v. Baxendale*).",
          ],
          [
            "Negotiable Instruments Act",
            "1881",
            "Facilitate mercantile credit and liquidity through transferable negotiable paper.",
            "Promissory notes, bills of exchange, cheques, and Section 138 criminal penalties for cheque dishonour.",
          ],
          [
            "Sale of Goods Act",
            "1930",
            "Specific framework for the transfer of property in movable goods for price.",
            "Conditions vs. Warranties, *Caveat Emptor*, passing of property and risk, unpaid seller rights.",
          ],
          [
            "Indian Partnership Act",
            "1932",
            "Regulate unincorporated business associations based on mutual agency.",
            "Definition of partnership (Sec 4), mutual agency test (*Cox v. Hickman*), partner rights & dissolution.",
          ],
          [
            "Companies Act",
            "2013",
            "Comprehensive corporate charter replacing the rigid 1956 enactment.",
            "One Person Company (OPC), Independent Directors, mandatory CSR (Sec 135), NCLT tribunals.",
          ],
          [
            "Insolvency & Bankruptcy Code (IBC)",
            "2016",
            "Consolidated, time-bound corporate insolvency resolution and creditor value maximization.",
            "Corporate Insolvency Resolution Process (CIRP), 180+90 day resolution timeline, Committee of Creditors (CoC).",
          ],
        ],
      },
      {
        type: "h3",
        text: "Conclusion",
      },
      {
        type: "p",
        text: "Commercial law has transformed from customary merchant codes into an agile statutory framework supporting global digital commerce, corporate transparency, and speedy dispute resolution.",
      },
    ],
  },
  {
    id: "q6",
    number: 6,
    title: "Companies Act, 1956 vs. 2013 comparison",
    question:
      "Provide a detailed comparison between the Companies Act, 1956 and the Companies Act, 2013. Explain the major structural changes.",
    marks: 14,
    relatedSlugs: ["companies-act-2013", "companies-types-incorporation"],
    blocks: [
      {
        type: "p",
        text: "The enactment of the Companies Act, 2013 marked a monumental shift in Indian corporate jurisprudence. It replaced the bulky, process-heavy Companies Act of 1956 (which had 658 Sections and 15 Schedules) with a streamlined, governance-driven framework (470 Sections, 29 Chapters, and 7 Schedules) engineered for modern digital business realities, investor protection, and social accountability.",
      },
      {
        type: "h3",
        text: "1. Comprehensive 12-Point Comparative Matrix",
      },
      {
        type: "table",
        headers: ["Parameter / Feature", "Companies Act, 1956", "Companies Act, 2013", "Governance Impact"],
        rows: [
          [
            "Statutory Architecture",
            "658 Sections, 15 Schedules. Heavily fragmented and prescriptive.",
            "470 Sections, 29 Chapters, 7 Schedules. Principle-based and rule-driven delegated framework.",
            "Streamlined structure with operational details relegated to MCA Rules.",
          ],
          [
            "One Person Company (OPC)",
            "Not recognized. Minimum 2 members required for any private company.",
            "Introduced under Section 2(62). Single natural Indian citizen member can incorporate with nominee.",
            "Encourages individual entrepreneurship with corporate limited liability shield.",
          ],
          [
            "Maximum Private Company Members",
            "Capped at a maximum of 50 members.",
            "Increased to a maximum of 200 members (excluding employee shareholders).",
            "Enables private startups to raise angel/venture equity without forcing public conversion.",
          ],
          [
            "Corporate Social Responsibility (CSR)",
            "Voluntary corporate philanthropy with zero statutory backing.",
            "Mandatory under Section 135 for qualifying companies (2% of average net profits of preceding 3 years).",
            "India became the first country in the world to legislate mandatory corporate CSR spending.",
          ],
          [
            "Independent & Women Directors",
            "No statutory mandate for independent or women directors in the primary Act.",
            "Mandatory: At least 1 Woman Director (Sec 149(1)) and 1/3rd Independent Directors for listed public firms.",
            "Drives boardroom diversity and independent oversight over promoters.",
          ],
          [
            "Key Managerial Personnel (KMP)",
            "Concept did not exist in integrated statutory form.",
            "Formally defined under Section 2(51): CEO/MD, CS, Whole-Time Director, CFO, and Manager.",
            "Pinpoints direct legal accountability for corporate governance failures.",
          ],
          [
            "Judicial Adjudication Body",
            "Company Law Board (CLB) and High Courts with dual jurisdiction leading to years of delay.",
            "National Company Law Tribunal (NCLT) and NCLAT established under Sections 407–434.",
            "Single-window, specialized tribunal for company petitions, mergers, and insolvency.",
          ],
          [
            "Corporate Fraud Investigation",
            "Standard Department of Company Affairs inspections with weak penal provisions.",
            "Serious Fraud Investigation Office (SFIO) granted statutory teeth under Section 211; stringent Section 447 fraud penalties.",
            "Criminal liability and non-bailable prosecution for serious corporate economic fraud.",
          ],
          [
            "Class Action Suits",
            "No statutory class action provision for aggrieved minority shareholders.",
            "Introduced under Section 245, allowing specified groups of shareholders/depositors to sue directors/auditors.",
            "Empowers retail investors against promoter fraud (*Satyam-type scandals*).",
          ],
          [
            "Auditor Rotation & Restrictions",
            "No mandatory rotation; auditors could continue indefinitely.",
            "Mandatory rotation (Sec 139): 5 consecutive years for individuals, 10 years for audit firms; prohibition on non-audit services.",
            "Prevents auditor-management collusion and maintains statutory audit independence.",
          ],
          [
            "Mergers & Amalgamations",
            "Mandatory High Court sanction required; cross-border outward mergers not permitted.",
            "Fast-track merger for small companies (Sec 233) without court; cross-border mergers permitted (Sec 234).",
            "Reduces M&A transaction timelines and costs significantly.",
          ],
          [
            "Electronic Compliance & Governance",
            "Physical paper filings, physical shareholder meetings, physical registers.",
            "Mandatory e-voting, virtual board meetings through video conferencing, and MCA21 digital document registry.",
            "Digital-first corporate administration and remote shareholder participation.",
          ],
        ],
      },
      {
        type: "h3",
        text: "2. Deep Dive: CSR Thresholds & Formula (Section 135)",
      },
      {
        type: "p",
        text: "Under Section 135(1), every company having any of the following during the immediately preceding financial year must constitute a CSR Committee of the Board:",
      },
      {
        type: "ul",
        items: [
          "_Net Worth_ of ₹500 Crore or more, OR",
          "_Turnover_ of ₹1,000 Crore or more, OR",
          "_Net Profit_ of ₹5 Crore or more.",
        ],
      },
      {
        type: "callout",
        label: "Mandatory Spending Formula",
        body: "Eligible companies MUST spend at least 2% of their average net profits earned during the three immediately preceding financial years on Schedule VII activities (education, healthcare, poverty alleviation, rural development, environmental sustainability). Unspent amounts must be transferred to specified government funds or escrow within statutory deadlines.",
      },
      {
        type: "h3",
        text: "Conclusion",
      },
      {
        type: "p",
        text: "The Companies Act, 2013 transitioned Indian company law from command-and-control state regulation to transparent self-regulation, enhanced minority protection, mandatory social responsibility, and specialized tribunal adjudication under the NCLT.",
      },
    ],
  },
];
