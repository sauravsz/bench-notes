import type { ExamQuestion } from "./types";

export const examQuestions: ExamQuestion[] = [
  {
    "id": "q1",
    "number": 1,
    "title": "Contracts are agreements, but not vice versa",
    "question": "Justify why contracts are agreements but not vice versa. Include the differences between an agreement and a contract.",
    "relatedSlugs": [
      "contract-agreement-promise",
      "definitions-essentials"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "The Indian Contract Act, 1872 treats a contract as a specific, legally enforceable subset of the broader universe of agreements. Every contract necessarily passes through the stage of an agreement, but only those agreements that satisfy the statutory test of legal enforceability under Section 10 ripen into contracts. Hence, the legal aphorism: 'All contracts are agreements, but all agreements are not necessarily contracts.'"
      },
      {
        "type": "h3",
        "text": "Statutory path from proposal to contract"
      },
      {
        "type": "ul",
        "items": [
          "_Section 2(a) — Proposal_: When one person signifies to another his willingness to do or to abstain from doing anything, with a view to obtaining the assent of that other to such act or abstinence, he is said to make a proposal.",
          "_Section 2(b) — Promise_: When the person to whom the proposal is made signifies his assent thereto, the proposal is said to be accepted. A proposal, when accepted, becomes a promise.",
          "_Section 2(e) — Agreement_: Every promise and every set of promises, forming the consideration for each other, is an agreement.",
          "_Section 2(h) — Contract_: An agreement enforceable by law is a contract."
        ]
      },
      {
        "type": "callout",
        "label": "The Two-Step Mathematical Legal Formula",
        "body": "Step 1: Offer + Acceptance = Agreement (Consensus ad idem).\nStep 2: Agreement + Legal Enforceability (Section 10 Essentials) = Contract."
      },
      {
        "type": "h3",
        "text": "Juristic definitions"
      },
      {
        "type": "ul",
        "items": [
          "_Sir Frederick Pollock_: 'Every agreement and promise enforceable at law is a contract.'",
          "_Sir John Salmond_: 'A contract is an agreement creating and defining obligations between the parties.'",
          "_Sir William Anson_: 'A legally binding agreement between two or more persons by which rights are acquired by one or more to acts or forbearances on the part of the other.'"
        ]
      },
      {
        "type": "p",
        "text": "Each jurist confirms that legal enforceability is the defining element that separates a binding commercial contract from a bare mutual understanding."
      },
      {
        "type": "h3",
        "text": "Comprehensive difference between agreement and contract"
      },
      {
        "type": "table",
        "headers": [
          "Basis of Distinction",
          "Agreement (Section 2(e))",
          "Contract (Section 2(h))"
        ],
        "rows": [
          [
            "Definition & Meaning",
            "Any promise or set of mutual promises backed by reciprocal consideration.",
            "An agreement that is strictly enforceable by an established court of law."
          ],
          [
            "Fundamental Formula",
            "Offer + Acceptance = Agreement.",
            "Agreement + Legal Enforceability (Section 10) = Contract."
          ],
          [
            "Legal Obligation",
            "Does not necessarily create a legal duty; may create purely social, domestic, religious, or moral obligations.",
            "Necessarily creates an actionable legal obligation (_jus in personam_) between the contracting parties."
          ],
          [
            "Binding Nature",
            "Not legally enforceable in a court of law if either party reneges.",
            "Strictly binding; breach results in statutory remedies (damages, specific performance, injunction)."
          ],
          [
            "Scope & Genus",
            "Wider concept (Genus). It encompasses social promises, domestic understandings, void bargains, and valid contracts.",
            "Narrower concept (Species). It is restricted exclusively to valid, enforceable agreements."
          ],
          [
            "Remedies on Breach",
            "No judicial remedy is available to the aggrieved party.",
            "Aggrieved party can file a civil suit for breach under the Contract Act and Specific Relief Act, 1963."
          ]
        ]
      },
      {
        "type": "h3",
        "text": "When an agreement fails to become a contract (With Concrete Examples)"
      },
      {
        "type": "ul",
        "items": [
          "_1. Social and Domestic Agreements (Absence of Legal Intention)_: In social arrangements, parties do not intend to incur legal consequences. _Example_: A invites B to dinner at a restaurant, and B accepts. If A fails to host or B fails to attend, neither can sue for damages because there was no intention to create legal relations (*Balfour v. Balfour [1919]*).",
          "_2. Agreements with Minors or Incompetent Persons (Section 11)_: Capacity is mandatory. _Example_: A loan agreement executed with a minor (under 18 years) is void _ab initio_ (*Mohori Bibee v. Dharmodas Ghose [1903]*). It remains a bare agreement and can never become a contract.",
          "_3. Agreements Lacking Free Consent (Sections 14–18)_: Where assent is procured by coercion, undue influence, fraud, or misrepresentation, the agreement is voidable and not an absolute contract. _Example_: A points a gun at B to sign a property sale deed for ₹10,000 (Coercion under Sec 15).",
          "_4. Unlawful Consideration or Object (Section 23)_: If consideration or purpose is prohibited by law, immoral, or opposed to public policy. _Example_: An agreement where X pays Y ₹50,000 to assault Z is void and criminal.",
          "_5. Expressly Declared Void Agreements (Sections 26–30)_: Agreements in absolute restraint of marriage (Sec 26), trade (Sec 27), legal proceedings (Sec 28), or wagering pacts (Sec 30) remain unenforceable agreements.",
          "_6. Uncertain or Impossible Agreements (Sections 29 & 56)_: _Example_: A agrees to sell B '100 tons of oil' without specifying type, viscosity, or grade (void for uncertainty); A agrees to discover treasure by magic (void for physical impossibility)."
        ]
      },
      {
        "type": "h3",
        "text": "Conclusion"
      },
      {
        "type": "p",
        "text": "Agreement is the genus, while contract is the species. An agreement is the preliminary foundation, but only when infused with legal intention, competence, free consent, lawful consideration, and lawful object under Section 10 does it attain the force of a contract. Therefore, while all contracts must originate as agreements, only legally enforceable agreements become contracts."
      }
    ]
  },
  {
    "id": "q2",
    "number": 2,
    "title": "Types of contract, and consent",
    "question": "Distinguish the different types of contract. Also explain consent and free consent, and how they differ.",
    "relatedSlugs": [
      "classification-mistake-incapacity",
      "capacity-free-consent"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Under the Indian Contract Act, 1872, contracts are systematically classified across three core dimensions: (1) Enforceability/Validity, (2) Mode of Formation, and (3) Extent of Performance. In addition, the validity of any contract fundamentally hinges upon genuine *consensus ad idem* (consent) and the absence of vitiating factors (free consent)."
      },
      {
        "type": "h3",
        "text": "1. Classification of contracts by enforceability & validity"
      },
      {
        "type": "ul",
        "items": [
          "_Valid Contract (Section 2(h) & Section 10)_: An agreement that satisfies all statutory requirements of Section 10. It is fully binding on both parties and enforceable in a court of law. _Example_: A signs a written agreement to sell his car to B for ₹3,00,000, and B agrees to pay on delivery.",
          "_Voidable Contract (Section 2(i))_: An agreement which is enforceable by law at the option of one or more of the parties thereto (the aggrieved/injured party), but not at the option of the other or others. It occurs when consent is caused by coercion, undue influence, fraud, or misrepresentation (Sections 19 & 19A). It remains valid until rescinded. _Example_: A threatens to burn B's warehouse unless B sells his property at half market price. B can elect to affirm the contract or rescind it through court.",
          "_Void Agreement (Section 2(g))_: An agreement not enforceable by law from the very inception (_void ab initio_). It confers no legal rights or obligations on either party. _Example_: An agreement with a minor (*Mohori Bibee case*) or a bilateral mistake regarding the existence of the subject matter (Section 20).",
          "_Void Contract (Section 2(j))_: A contract which was completely valid when entered into, but subsequently ceases to be enforceable by law due to supervening impossibility, destruction of subject matter, or change in government law (Section 56). _Example_: A contracts to sing at B's theatre on a future date. Before that date, A loses his voice due to illness or the theatre is destroyed by an earthquake.",
          "_Illegal Agreement_: An agreement whose object or consideration is unlawful, forbidden by law, or opposed to public policy under Section 23. All illegal agreements are void, and all collateral transactions connected to them are also tainted and void. _Example_: An agreement to smuggle contraband, or borrowing money specifically to finance illegal narcotics trafficking.",
          "_Unenforceable Contract_: A contract which is good in substance, but cannot be enforced in a court of law due to some technical defect, such as absence of written form, lack of registration, or expiry of limitation period under the Limitation Act. Once the technical defect is remedied (e.g. stamping or registration), it becomes enforceable."
        ]
      },
      {
        "type": "h3",
        "text": "2. Classification of contracts by mode of formation"
      },
      {
        "type": "ul",
        "items": [
          "_Express Contract (Section 9)_: A contract where terms, promises, and mutual obligations are stated expressly in spoken words or written language. _Example_: A writes a formal email to B: 'I offer to sell my MacBook Pro M2 for ₹80,000', and B replies: 'I accept your offer'.",
          "_Implied / Tacit Contract (Section 9)_: A contract that comes into existence through the acts, conduct of the parties, or circumstances of the case, rather than spoken or written words. _Example 1_: A passenger boards a public city bus (DTC/BEST); by boarding, an implied contract is formed to pay the scheduled fare. _Example 2_: A consumer inserts coins or scans a UPI QR code at an automated vending machine to dispense a beverage.",
          "_Quasi-Contract (Sections 68–72: Certain Relations Resembling Contract)_: A legal obligation created by law in the absence of any agreement, based on the equitable doctrine of unjust enrichment (*Nemo debet locupletari ex aliena jactura* — no man should grow rich at the expense of another's loss). _Example 1 (Sec 71)_: A person who finds goods belonging to another and takes them into custody is subject to the same responsibility as a bailee. _Example 2 (Sec 70)_: A tradesman leaves goods at B's house by mistake; B treats the goods as his own and consumes them. B is bound in quasi-contract to compensate the tradesman.",
          "_E-Contract (Electronic / Cyber Contract)_: A contract modeled and executed through digital channels, email exchanges, electronic data interchange (EDI), or digital signatures under the Information Technology Act, 2000 (Section 10A). Includes Click-wrap (clicking 'I Agree'), Shrink-wrap (breaking software packaging seal), and Browse-wrap agreements."
        ]
      },
      {
        "type": "h3",
        "text": "3. Classification of contracts by extent of performance"
      },
      {
        "type": "ul",
        "items": [
          "_Executed Contract_: A contract where both parties have completely performed their respective obligations and nothing remains to be done. _Example_: A goes to a bookstore, pays ₹500 in cash, and immediately takes possession of the textbook.",
          "_Executory Contract_: A contract where the obligations of one or both parties remain to be performed in the future. It can be divided into:",
          "  • _Unilateral Contract (One-Sided Executory)_: A contract where one party has performed their part at the time of formation, while the obligation of the other party remains outstanding. _Example_: A finds B's lost dog pursuant to a public reward announcement of ₹10,000. A has executed his part; B's obligation to pay the reward is executory.",
          "  • _Bilateral Contract (Two-Sided Executory)_: A contract where both parties make reciprocal promises that are to be performed at a future date. _Example_: A real estate developer promises to deliver an apartment in 12 months, and the buyer promises to pay in structured quarterly construction-linked installments."
        ]
      },
      {
        "type": "h3",
        "text": "4. Consent vs. Free Consent (Detailed Comparative Matrix)"
      },
      {
        "type": "p",
        "text": "Section 13 defines *Consent*: Two or more persons are said to consent when they agree upon the same thing in the same sense (*consensus ad idem*). If there is no meeting of minds regarding the identity of the subject matter, price, or fundamental nature of the transaction, there is no contract at all."
      },
      {
        "type": "p",
        "text": "Section 14 defines *Free Consent*: Consent is said to be free when it is NOT caused by any of the five statutory vitiating factors:"
      },
      {
        "type": "table",
        "headers": [
          "Vitiating Factor",
          "Statutory Section",
          "Core Legal Principle & Practical Scenario",
          "Legal Effect on Contract"
        ],
        "rows": [
          [
            "Coercion",
            "Section 15",
            "Committing or threatening to commit any act forbidden by the Indian Penal Code, or unlawfully detaining property. _Example_: A threatens to shoot B or commit suicide unless B signs a property deed (*Chikham Amiraju v. Seshamma*).",
            "Voidable at the option of the aggrieved party (Section 19)."
          ],
          [
            "Undue Influence",
            "Section 16",
            "Dominating the will of another through real/apparent authority, fiduciary relationship, or mental distress. _Example_: A doctor induces an elderly, ailing patient to transfer property at a fraction of value (*Mannu Singh v. Umadat Pandey*).",
            "Voidable at the option of the aggrieved party (Section 19A)."
          ],
          [
            "Fraud",
            "Section 17",
            "Intentional deceit, suggestion of false fact without belief in truth, or active concealment of a defect (*Derry v. Peek*). _Example_: A seller paints over structural cracks in an automobile engine to deceive an unsuspecting buyer.",
            "Voidable + Right to sue for damages in tort/deceit (Section 19)."
          ],
          [
            "Misrepresentation",
            "Section 18",
            "Innocent, unwarranted false assertion made without intent to deceive, believing it to be true. _Example_: A innocently tells B that his factory produces 500 units/day based on old records, when output has dropped to 300.",
            "Voidable at the option of the aggrieved party (Section 19)."
          ],
          [
            "Bilateral Mistake of Fact",
            "Section 20",
            "Both parties are under a mutual mistake regarding a matter of fact essential to the contract. _Example_: A agrees to buy cargo of wheat on ship 'Highflyer'; unknown to both, the ship sank the previous night.",
            "Void ab initio (Section 20). No contract comes into existence."
          ]
        ]
      },
      {
        "type": "h3",
        "text": "Conclusion"
      },
      {
        "type": "p",
        "text": "Consent guarantees that the minds of the parties met (*consensus ad idem*). Free consent guarantees that the assent was voluntary, informed, and unpolluted by pressure, deception, or mutual error. In an examination, state that while consent is the necessary starting point, free consent is the indispensable statutory condition for legal enforceability."
      }
    ]
  },
  {
    "id": "q3",
    "number": 3,
    "title": "How the judiciary works, and the sources of law",
    "question": "How does the structure of the Indian judiciary actually work? Which sources of law does it adapt?",
    "relatedSlugs": [
      "indian-judiciary",
      "sources-maxims-foundations"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "The Indian Judiciary is an integrated, hierarchical, and independent institution established under the Constitution of India. It operates under a single unified judicial pyramid, unlike federal dual-court systems (such as in the USA), ensuring constitutional supremacy, commercial predictability, and uniform interpretation of central and state laws."
      },
      {
        "type": "h3",
        "text": "1. The Four-Tier Structural Hierarchy"
      },
      {
        "type": "tree",
        "title": "Integrated Judicial Pyramid of India",
        "lines": [
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
          "Lok Adalats & Nyaya Panchayats (Grassroots & Alternative Dispute Resolution)"
        ]
      },
      {
        "type": "h3",
        "text": "2. Detailed operational mechanisms across court streams"
      },
      {
        "type": "ul",
        "items": [
          "_Supreme Court of India (Articles 124–147)_: The apex guardian of the Constitution. It possesses Original Jurisdiction (inter-state disputes, Art 131), Writ Jurisdiction for fundamental rights (Art 32), Appellate Jurisdiction over civil/criminal High Court appeals (Arts 132–134), Special Leave Petitions (Art 136), and Advisory Jurisdiction (Art 143). Under **Article 141**, the law declared by the Supreme Court is binding on all courts within the territory of India.",
          "_High Courts (Articles 214–231)_: The highest judicial authority in each state. High Courts possess supervisory jurisdiction over all subordinate tribunals (Art 227) and wide writ powers under **Article 226** (enforcing fundamental rights and any other legal rights).",
          "_District Civil Courts_: Adjudicate monetary disputes, breach of commercial contracts, property title, injunctions, and specific performance based on the *Code of Civil Procedure (CPC), 1908*. Cases are decided on a *Preponderance of Probabilities*.",
          "_District Criminal Courts_: Administer criminal justice under the *Bharatiya Nagarik Suraksha Sanhita (BNSS) / CrPC* and *Bharatiya Nyaya Sanhita (BNS) / IPC*. Sessions Judges can pass any sentence authorized by law (including death sentence, subject to High Court confirmation). Offences must be proven *Beyond Reasonable Doubt*.",
          "_Revenue Courts_: Special statutory forums governing agricultural land titles, tenancy disputes, land revenue assessment, and mutation of land records under state land revenue codes.",
          "_Alternative Dispute Resolution (ADR) & Lok Adalats_: Operating under the *Legal Services Authorities Act, 1987*. Lok Adalats provide conciliation, zero court fees, fast disposal, and awards that have the binding status of a civil court decree with no appeal."
        ]
      },
      {
        "type": "h3",
        "text": "3. Primary and secondary sources of Indian law"
      },
      {
        "type": "table",
        "headers": [
          "Source Classification",
          "Legal Source",
          "Constitutional Basis & Commercial Relevance",
          "Example in Practice"
        ],
        "rows": [
          [
            "Primary Source",
            "Constitution of India",
            "The organic _Grundnorm_ and supreme legal authority of India. Any statute violating constitutional provisions is declared void under Judicial Review (Article 13).",
            "Articles 14, 19(1)(g) (freedom of trade/business), Article 21, and Article 300A (right to property)."
          ],
          [
            "Primary Source",
            "Statutes & Parliamentary Enactments",
            "Codified primary legislations passed by Union Parliament (List I & III) and State Legislatures (List II & III) under Seventh Schedule.",
            "Indian Contract Act 1872, Companies Act 2013, Sale of Goods Act 1930, IBC 2016, IT Act 2000."
          ],
          [
            "Primary Source",
            "Ordinances & Delegated Legislation",
            "Executive law-making promulgated when legislative houses are not in session (President under Art 123; Governor under Art 213). Includes statutory rules, notifications (e.g. MCA, RBI, SEBI regulations).",
            "MCA Companies (CSR Policy) Rules, RBI Master Directions on digital lending."
          ],
          [
            "Secondary Source",
            "Judicial Precedent (Stare Decisis)",
            "Binding legal principles (*Ratio Decidendi*) established by the Supreme Court and High Courts. Built upon English Common Law principles of equity, justice, and good conscience.",
            "*Salomon v. Salomon* (Corporate personality); *Hadley v. Baxendale* (Measure of breach damages)."
          ],
          [
            "Secondary Source",
            "Customs and Usages",
            "Ancient, continuous, certain, and reasonable trade practices that have obtained the force of law. Must not be contrary to express statutes or public policy.",
            "*Hundis* and mercantile credit instruments in Indian merchant guilds (*Lex Mercatoria*)."
          ]
        ]
      },
      {
        "type": "h3",
        "text": "Conclusion"
      },
      {
        "type": "p",
        "text": "The Indian judiciary functions as a unified constitutional apparatus integrating statutory codifications with common law judicial precedents. In examination answers, emphasize Article 141 (binding precedent), Article 50 (separation of powers), and the dual civil/criminal evidentiary standards."
      }
    ]
  },
  {
    "id": "q4",
    "number": 4,
    "title": "How society and law are related",
    "question": "How is society related to law?",
    "relatedSlugs": [
      "constitution-fundamental-rights",
      "legal-environment-labour"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Law and society exist in an organic, symbiotic relationship. Law serves as an instrument of social control, dispute resolution, and economic facilitation, while society provides the values, customs, and commercial needs that shape legislation. As Roscoe Pound observed in his sociological jurisprudence, law functions as an instrument of *'Social Engineering'* to balance competing societal interests."
      },
      {
        "type": "h3",
        "text": "1. Jurisprudential perspectives on law and society"
      },
      {
        "type": "ul",
        "items": [
          "_Sociological School (Roscoe Pound, Ihering)_: Treats law as social engineering designed to satisfy maximum human desires with minimum friction and waste.",
          "_Historical School (Friedrich Carl von Savigny)_: Law is not arbitrarily created by rulers; it grows with the growth and strengthens with the strength of the people, originating from the common consciousness of the people (*Volksgeist*).",
          "_Positivist / Analytical School (John Austin)_: Defines law as the command of the sovereign, backed by sanctions. In modern constitutional societies, the sovereign command is channeled through democratic legislative institutions.",
          "_Natural Law School_: Law is grounded in universal reason, justice, and moral ethics. Reflected in the Indian Constitution under Article 21's doctrine of 'Just, Fair, and Reasonable' procedure (*Maneka Gandhi v. Union of India [1978]*)."
        ]
      },
      {
        "type": "h3",
        "text": "2. The Constitution as the fundamental social compact"
      },
      {
        "type": "ul",
        "items": [
          "_Part III: Fundamental Rights (Civil Liberties)_: Protects individual autonomy against arbitrary state overreach. Key provisions include Article 14 (Equality before law), Article 19(1)(g) (Freedom of trade, occupation, and business), and Article 21 (Right to life, dignity, and privacy).",
          "_Part IV: Directive Principles of State Policy (Socio-Economic Charter)_: Guides legislation toward social welfare, living wages (Art 43), workplace health, and wealth decentralization (Art 39(b) & (c)).",
          "_Part IV-A: Fundamental Duties (Article 51A)_: Enacted via the 42nd Amendment (1976), prescribing ethical obligations for citizens to uphold sovereignty, environmental preservation, and public property."
        ]
      },
      {
        "type": "h3",
        "text": "3. Modern legal mechanisms advancing social & economic justice"
      },
      {
        "type": "table",
        "headers": [
          "Mechanism / Domain",
          "Social Problem Addressed",
          "Statutory & Judicial Response",
          "Business Impact"
        ],
        "rows": [
          [
            "Public Interest Litigation (PIL)",
            "Marginalized communities lacking access to justice due to poverty, illiteracy, or systemic exploitation.",
            "Relaxation of _Locus Standi_ by Supreme Court (Justice P.N. Bhagwati & V.R. Krishna Iyer).",
            "Mandated corporate environmental audits, emission standards, and workplace safety norms."
          ],
          [
            "Labour Law Reforms",
            "Consolidation into 4 Modern Labour Codes (Code on Wages 2019, Industrial Relations 2020, Social Security 2020, OSH Code 2020).",
            "Universal minimum wage, statutory gig-worker social security, and ease of doing business."
          ],
          [
            "Corporate Social Responsibility",
            "Corporate concentration of wealth without social reinvestment.",
            "Section 135 of Companies Act, 2013: Mandatory 2% net profit allocation for eligible enterprises.",
            "Businesses legally institutionalized as social trustees contributing to education, healthcare, and ecology."
          ],
          [
            "Consumer Protection Act, 2019",
            "E-commerce fraud, misleading celebrity advertisements, and product liability hazards in digital markets.",
            "Establishment of Central Consumer Protection Authority (CCPA) and statutory product liability rules.",
            "Direct accountability for e-commerce platforms and strict penalties for false advertising claims."
          ]
        ]
      },
      {
        "type": "h3",
        "text": "Conclusion"
      },
      {
        "type": "p",
        "text": "Law is neither static nor insulated from social reality. As society modernizes through commerce, industrialization, and digital transactions, the legal system adapts through constitutional interpretation, legislative codification, and corporate social accountability to maintain social equilibrium."
      }
    ]
  },
  {
    "id": "q5",
    "number": 5,
    "title": "Evolution of business and commercial law",
    "question": "Trace the historical evolution of business and commercial law, highlighting key statutory milestones.",
    "relatedSlugs": [
      "sources-maxims-foundations",
      "legal-environment-labour"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Commercial law (*Mercantile Law*) is the body of law that governs the rights, relations, and conduct of persons and enterprises engaged in business, merchandising, trade, and sales. It evolved from medieval international trade customs into structured common law doctrines, and subsequently into modern digital and insolvency statutes."
      },
      {
        "type": "h3",
        "text": "1. Chronological Evolution Phases"
      },
      {
        "type": "ul",
        "items": [
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
          "  • **Insolvency and Bankruptcy Code (IBC), 2016**: Time-bound corporate resolution and creditor-in-control framework."
        ]
      },
      {
        "type": "h3",
        "text": "2. Key Statutory Milestones in Business Law"
      },
      {
        "type": "table",
        "headers": [
          "Statutory Milestone",
          "Year",
          "Core Commercial Objective",
          "Key Business Mechanism"
        ],
        "rows": [
          [
            "Indian Contract Act",
            "1872",
            "Basic foundation of all commercial transactions and enforceable reciprocal promises.",
            "Section 10 essentials, offer & acceptance rules, breach damages (*Hadley v. Baxendale*)."
          ],
          [
            "Negotiable Instruments Act",
            "1881",
            "Facilitate mercantile credit and liquidity through transferable negotiable paper.",
            "Promissory notes, bills of exchange, cheques, and Section 138 criminal penalties for cheque dishonour."
          ],
          [
            "Sale of Goods Act",
            "1930",
            "Specific framework for the transfer of property in movable goods for price.",
            "Conditions vs. Warranties, *Caveat Emptor*, passing of property and risk, unpaid seller rights."
          ],
          [
            "Indian Partnership Act",
            "1932",
            "Regulate unincorporated business associations based on mutual agency.",
            "Definition of partnership (Sec 4), mutual agency test (*Cox v. Hickman*), partner rights & dissolution."
          ],
          [
            "Companies Act",
            "2013",
            "Comprehensive corporate charter replacing the rigid 1956 enactment.",
            "One Person Company (OPC), Independent Directors, mandatory CSR (Sec 135), NCLT tribunals."
          ],
          [
            "Insolvency & Bankruptcy Code (IBC)",
            "2016",
            "Consolidated, time-bound corporate insolvency resolution and creditor value maximization.",
            "Corporate Insolvency Resolution Process (CIRP), 180+90 day resolution timeline, Committee of Creditors (CoC)."
          ]
        ]
      },
      {
        "type": "h3",
        "text": "Conclusion"
      },
      {
        "type": "p",
        "text": "Commercial law has transformed from customary merchant codes into an agile statutory framework supporting global digital commerce, corporate transparency, and speedy dispute resolution."
      }
    ]
  },
  {
    "id": "q6",
    "number": 6,
    "title": "Companies Act, 1956 vs. 2013 comparison",
    "question": "Provide a detailed comparison between the Companies Act, 1956 and the Companies Act, 2013. Explain the major structural changes.",
    "relatedSlugs": [
      "companies-act-2013",
      "companies-types-incorporation"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "The enactment of the Companies Act, 2013 marked a monumental shift in Indian corporate jurisprudence. It replaced the bulky, process-heavy Companies Act of 1956 (which had 658 Sections and 15 Schedules) with a streamlined, governance-driven framework (470 Sections, 29 Chapters, and 7 Schedules) engineered for modern digital business realities, investor protection, and social accountability."
      },
      {
        "type": "h3",
        "text": "1. Comprehensive 12-Point Comparative Matrix"
      },
      {
        "type": "table",
        "headers": [
          "Parameter / Feature",
          "Companies Act, 1956",
          "Companies Act, 2013",
          "Governance Impact"
        ],
        "rows": [
          [
            "Statutory Architecture",
            "658 Sections, 15 Schedules. Heavily fragmented and prescriptive.",
            "470 Sections, 29 Chapters, 7 Schedules. Principle-based and rule-driven delegated framework.",
            "Streamlined structure with operational details relegated to MCA Rules."
          ],
          [
            "One Person Company (OPC)",
            "Not recognized. Minimum 2 members required for any private company.",
            "Introduced under Section 2(62). Single natural Indian citizen member can incorporate with nominee.",
            "Encourages individual entrepreneurship with corporate limited liability shield."
          ],
          [
            "Maximum Private Company Members",
            "Capped at a maximum of 50 members.",
            "Increased to a maximum of 200 members (excluding employee shareholders).",
            "Enables private startups to raise angel/venture equity without forcing public conversion."
          ],
          [
            "Corporate Social Responsibility (CSR)",
            "Voluntary corporate philanthropy with zero statutory backing.",
            "Mandatory under Section 135 for qualifying companies (2% of average net profits of preceding 3 years).",
            "India became the first country in the world to legislate mandatory corporate CSR spending."
          ],
          [
            "Independent & Women Directors",
            "No statutory mandate for independent or women directors in the primary Act.",
            "Mandatory: At least 1 Woman Director (Sec 149(1)) and 1/3rd Independent Directors for listed public firms.",
            "Drives boardroom diversity and independent oversight over promoters."
          ],
          [
            "Key Managerial Personnel (KMP)",
            "Concept did not exist in integrated statutory form.",
            "Formally defined under Section 2(51): CEO/MD, CS, Whole-Time Director, CFO, and Manager.",
            "Pinpoints direct legal accountability for corporate governance failures."
          ],
          [
            "Judicial Adjudication Body",
            "Company Law Board (CLB) and High Courts with dual jurisdiction leading to years of delay.",
            "National Company Law Tribunal (NCLT) and NCLAT established under Sections 407–434.",
            "Single-window, specialized tribunal for company petitions, mergers, and insolvency."
          ],
          [
            "Corporate Fraud Investigation",
            "Standard Department of Company Affairs inspections with weak penal provisions.",
            "Serious Fraud Investigation Office (SFIO) granted statutory teeth under Section 211; stringent Section 447 fraud penalties.",
            "Criminal liability and non-bailable prosecution for serious corporate economic fraud."
          ],
          [
            "Class Action Suits",
            "No statutory class action provision for aggrieved minority shareholders.",
            "Introduced under Section 245, allowing specified groups of shareholders/depositors to sue directors/auditors.",
            "Empowers retail investors against promoter fraud (*Satyam-type scandals*)."
          ],
          [
            "Auditor Rotation & Restrictions",
            "No mandatory rotation; auditors could continue indefinitely.",
            "Mandatory rotation (Sec 139): 5 consecutive years for individuals, 10 years for audit firms; prohibition on non-audit services.",
            "Prevents auditor-management collusion and maintains statutory audit independence."
          ],
          [
            "Mergers & Amalgamations",
            "Mandatory High Court sanction required; cross-border outward mergers not permitted.",
            "Fast-track merger for small companies (Sec 233) without court; cross-border mergers permitted (Sec 234).",
            "Reduces M&A transaction timelines and costs significantly."
          ],
          [
            "Electronic Compliance & Governance",
            "Physical paper filings, physical shareholder meetings, physical registers.",
            "Mandatory e-voting, virtual board meetings through video conferencing, and MCA21 digital document registry.",
            "Digital-first corporate administration and remote shareholder participation."
          ]
        ]
      },
      {
        "type": "h3",
        "text": "2. Deep Dive: CSR Thresholds & Formula (Section 135)"
      },
      {
        "type": "p",
        "text": "Under Section 135(1), every company having any of the following during the immediately preceding financial year must constitute a CSR Committee of the Board:"
      },
      {
        "type": "ul",
        "items": [
          "_Net Worth_ of ₹500 Crore or more, OR",
          "_Turnover_ of ₹1,000 Crore or more, OR",
          "_Net Profit_ of ₹5 Crore or more."
        ]
      },
      {
        "type": "callout",
        "label": "Mandatory Spending Formula",
        "body": "Eligible companies MUST spend at least 2% of their average net profits earned during the three immediately preceding financial years on Schedule VII activities (education, healthcare, poverty alleviation, rural development, environmental sustainability). Unspent amounts must be transferred to specified government funds or escrow within statutory deadlines."
      },
      {
        "type": "h3",
        "text": "Conclusion"
      },
      {
        "type": "p",
        "text": "The Companies Act, 2013 transitioned Indian company law from command-and-control state regulation to transparent self-regulation, enhanced minority protection, mandatory social responsibility, and specialized tribunal adjudication under the NCLT."
      }
    ]
  },
  {
    "id": "q7",
    "number": 7,
    "title": "Essentials of a Valid Contract",
    "question": "Explain the essential elements of a valid contract according to Section 10 of the Indian Contract Act, 1872. When does an agreement fail to become a contract?",
    "relatedSlugs": [
      "contract-agreement-promise",
      "definitions-essentials"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Under Section 2(h) of the Indian Contract Act, 1872, 'An agreement enforceable by law is a contract.' Section 10 serves as the primary statutory filter that defines which agreements possess the force of law. Every contract is an agreement, but only those agreements that satisfy the statutory conditions of Section 10 attain the status of a contract."
      },
      {
        "type": "def",
        "term": "What agreements are contracts",
        "section": "Section 10",
        "body": "All agreements are contracts if they are made by the free consent of parties competent to contract, for a lawful consideration and with a lawful object, and are not hereby expressly declared to be void."
      },
      {
        "type": "diagram",
        "kind": "contract-formation",
        "title": "Statutory Path from Proposal to Enforceable Contract",
        "caption": "Step 1: Offer + Acceptance = Agreement. Step 2: Agreement + Section 10 Enforceability = Contract."
      },
      {
        "type": "h3",
        "text": "The Essential Elements of a Valid Contract (Section 10 & General Principles)"
      },
      {
        "type": "ol",
        "items": [
          "_1. Proper Offer and Acceptance (Agreement)_: There must be at least two distinct parties (*promisor* and *promisee*), a lawful proposal signifying willingness to do or abstain (Sec 2(a)), and an absolute, unqualified acceptance (Sec 2(b)) resulting in a genuine meeting of minds (*Consensus ad idem*).",
          "_2. Intention to Create Legal Relations_: Parties must contemplate legal consequences. In commercial transactions, this intention is presumed (*Edwards v. Skyways Ltd*). In purely social or domestic agreements, there is a strong presumption against legal intent (*Balfour v. Balfour [1919]*).",
          "_3. Free Consent (Sections 13 & 14)_: Consent must be voluntary and unpolluted by any of the five statutory vitiating factors: Coercion (Sec 15), Undue Influence (Sec 16), Fraud (Sec 17), Misrepresentation (Sec 18), or Bilateral Mistake of essential fact (Sec 20).",
          "_4. Capacity of Parties (Sections 11 & 12)_: Parties must be of the age of majority (18 years under the Majority Act), of sound mind (Section 12), and not disqualified by any law (e.g., alien enemies, insolvent convicts). Agreements with minors are void *ab initio* (*Mohori Bibee v. Dharmodas Ghose [1903]*).",
          "_5. Lawful Consideration (Section 2(d) & 23)_: The agreement must be supported by *Quid pro quo* (something in return). Consideration must be real, lawful, and not opposed to public policy.",
          "_6. Lawful Object (Section 23)_: The purpose of the contract must not be forbidden by law, defeat the provisions of any law, be fraudulent, cause injury to person or property, or be regarded by the court as immoral.",
          "_7. Certainty and Definiteness (Section 29)_: The terms must be clear and capable of being made certain. An agreement to sell '100 tons of oil' without specifying the grade is void for uncertainty.",
          "_8. Possibility of Performance (Section 56)_: An agreement to do an impossible act (physical or legal impossibility, such as discovering treasure by magic) is void *ab initio*.",
          "_9. Not Expressly Declared Void by Law (Sections 26–30)_: Agreements in restraint of marriage (Sec 26), restraint of trade (Sec 27), restraint of legal proceedings (Sec 28), and wagering pacts (Sec 30) are expressly void.",
          "_10. Legal Formalities (Writing, Stamping, and Registration)_: Where mandated by special statutes (e.g. transfer of immovable property under the Transfer of Property Act, 1882), the agreement must be in writing, properly stamped, and registered."
        ]
      },
      {
        "type": "h3",
        "text": "Summary Conclusion"
      },
      {
        "type": "p",
        "text": "An agreement is the genus, while a contract is the species. An agreement missing any single essential of Section 10 remains a bare promise, void agreement, or voidable transaction, and cannot be enforced through the courts."
      }
    ]
  },
  {
    "id": "q8",
    "number": 8,
    "title": "What is Consideration and its Nature",
    "question": "Define Consideration under the Indian Contract Act, 1872. Explain its essential characteristics and importance in contract law.",
    "relatedSlugs": [
      "definitions-essentials",
      "contract-agreement-promise"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Consideration is the foundational pillar of contract law, encapsulated in the Latin maxim *Quid pro quo* (something in return). Under common law and the Indian Contract Act, 1872, a bare promise made without consideration is gratuitous (*Nudum Pactum*) and does not create an actionable legal obligation (*Ex nudo pacto non oritur actio*)."
      },
      {
        "type": "def",
        "term": "Consideration",
        "section": "Section 2(d)",
        "body": "When, at the desire of the promisor, the promisee or any other person has done or abstained from doing, or does or abstains from doing, or promises to do or to abstain from doing, something, such act or abstinence or promise is called a consideration for the promise."
      },
      {
        "type": "h3",
        "text": "Juristic Definitions & Benefit-Detriment Theory"
      },
      {
        "type": "ul",
        "items": [
          "_Currie v. Misa (1875)_: 'A valuable consideration, in the sense of the law, may consist either in some right, interest, profit, or benefit accruing to the one party, or some forbearance, detriment, loss, or responsibility, given, suffered, or undertaken by the other.'",
          "_Pollock's Definition_: 'Consideration is the price for which the promise of the other is bought, and the promise thus given for value is enforceable.'"
        ]
      },
      {
        "type": "h3",
        "text": "The Three Temporal Forms of Consideration (Section 2(d))"
      },
      {
        "type": "table",
        "headers": [
          "Type of Consideration",
          "Temporal Dimension in Section 2(d)",
          "Legal Mechanics & Practical Scenario"
        ],
        "rows": [
          [
            "Past Consideration",
            "'...has done or abstained from doing...'",
            "An act performed before the date of the promise, done at the promisor's request. Recognized as valid consideration in India (unlike English law). Example: A saves B's property from fire at B's request; B subsequently promises to pay ₹5,000."
          ],
          [
            "Present / Executed Consideration",
            "'...does or abstains from doing...'",
            "Consideration supplied simultaneously with the promise (spot cash sales, supermarket checkout)."
          ],
          [
            "Future / Executory Consideration",
            "'...promises to do or to abstain from doing...'",
            "Reciprocal promises where performance will take place at a future date (e.g. delivery of machinery next month against payment upon delivery)."
          ]
        ]
      },
      {
        "type": "h3",
        "text": "Core Legal Characteristics of Consideration"
      },
      {
        "type": "ul",
        "items": [
          "_1. Must Move at the Desire of the Promisor_: Voluntary acts performed without the promisor's request do not constitute consideration (*Durga Prasad v. Baldeo*).",
          "_2. May Move from the Promisee or Any Other Person (Stranger to Consideration)_: Unlike English law, in India a stranger to consideration can enforce the contract if he is a party to the contract (*Chinnaya v. Ramayya*).",
          "_3. Consideration May be Positive (Act) or Negative (Abstinence / Forbearance)_: A promise not to file a lawsuit or not to open a competing business in a specific territory constitutes valid consideration.",
          "_4. Need Not Be Adequate, But Must Be Real_: Courts do not evaluate whether a bargain is economically balanced; nominal consideration is legally valid provided it is real and not illusory (*Thomas v. Thomas*)."
        ]
      }
    ]
  },
  {
    "id": "q9",
    "number": 9,
    "title": "Legal Rules Regarding Valid Consideration",
    "question": "State and explain the legal rules regarding valid consideration under the Indian Contract Act, 1872 with relevant case laws.",
    "relatedSlugs": [
      "definitions-essentials",
      "contract-agreement-promise"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "For consideration to be valid in the eyes of law, it must conform to strict statutory and common law rules governing desire, privity, reality, and legality."
      },
      {
        "type": "h3",
        "text": "The Seven Mandatory Legal Rules of Consideration"
      },
      {
        "type": "ol",
        "items": [
          "_1. Consideration Must Move at the Desire of the Promisor (*Durga Prasad v. Baldeo [1880]*)*: An act done at the desire of a third party or voluntarily without the promisor's request is no consideration. _Case Facts_: The plaintiff constructed market shops on the order of the District Collector. The defendant shopkeeper later promised to pay a commission to the plaintiff. Held: The promise was void for want of consideration because the construction was done at the Collector's order, not at the defendant's desire.",
          "_2. Consideration May Move from the Promisee or Any Other Person (*Chinnaya v. Ramayya [1882]*)*: Under Indian law, privity of consideration does not exist. A stranger to consideration can sue, provided he is a party to the contract. _Case Facts_: An old lady gifted property to her daughter with a direction to pay an annual annuity to the lady's sister (maternal aunt). The daughter executed an agreement promising the aunt to pay. The daughter later stopped payments, pleading no consideration moved from the aunt. Held: The daughter was liable; consideration had moved from the mother, which was sufficient under Section 2(d).",
          "_3. Consideration May Be Past, Present, or Future_: Section 2(d) expressly covers past services rendered at request, present cash payments, and executory future promises.",
          "_4. Consideration Need Not Be Adequate (Explanation 2 to Section 25)_: The law requires consideration to be real, but does not insist on market adequacy. _Example_: A agrees to sell a luxury car worth ₹20 Lakhs for ₹50,000. If consent was free, the agreement is a valid contract despite extreme inadequacy of price.",
          "_5. Consideration Must Be Real and Not Illusory_: It must not be physically impossible (discovering treasure by magic), legally impossible, or uncertain.",
          "_6. Performance of Pre-Existing Legal or Official Duty is No Consideration_: Doing what one is already legally bound to do under statutory law is no consideration (*Collins v. Godefroy* — witness subpoenaed to give evidence promised payment).",
          "_7. Consideration Must Be Lawful (Section 23)_: It must not be forbidden by law, fraudulent, injurious to others, or opposed to public policy."
        ]
      },
      {
        "type": "callout",
        "label": "Privity of Contract vs. Privity of Consideration",
        "body": "• Privity of Contract: Only parties to a contract can sue and be sued (Stranger to a contract cannot sue, with exceptions like trust beneficiaries, family settlements).\n• Privity of Consideration: In India, consideration may be supplied by a third party (Chinnaya v. Ramayya); stranger to consideration CAN sue."
      }
    ]
  },
  {
    "id": "q10",
    "number": 10,
    "title": "Validity of Agreement Without Consideration (Exceptions to Section 25)",
    "question": "'An agreement made without consideration is void.' Discuss this general rule and examine the statutory exceptions recognized under Section 25.",
    "relatedSlugs": [
      "definitions-essentials",
      "contract-agreement-promise"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Section 25 of the Indian Contract Act, 1872 establishes the general rule: *'An agreement made without consideration is void.'* This codifies the classic common law doctrine *Ex nudo pacto non oritur actio* (no cause of action arises from a bare promise). However, to prevent commercial hardship and respect solemn family and charitable commitments, Section 25 and related provisions recognize six well-defined statutory exceptions."
      },
      {
        "type": "h3",
        "text": "The Six Statutory Exceptions to Section 25 (When Agreements Without Consideration are Valid)"
      },
      {
        "type": "table",
        "headers": [
          "Exception Category",
          "Statutory Provision",
          "Mandatory Legal Conditions",
          "Illustrative Example / Landmark Case"
        ],
        "rows": [
          [
            "1. Natural Love & Affection",
            "Section 25(1)",
            "Must be: (a) Expressed in writing, (b) Registered under the Registration Act, (c) Made on account of natural love and affection, (d) Between parties standing in a near relation to each other.",
            "A father, out of natural love, promises in a registered written deed to give ₹5,00,000 to his son. Valid. Note: If near relations execute deed due to marital disputes/quarrels, it is void for want of love (*Rajlukhy Dabee v. Bhootnath Mookerjee*)."
          ],
          [
            "2. Compensation for Past Voluntary Services",
            "Section 25(2)",
            "Must be a promise to compensate, wholly or in part, a person who has already voluntarily done something for the promisor, or something the promisor was legally compellable to do.",
            "A finds B's lost wallet and gives it to him. B voluntarily promises to pay A ₹1,000. The promise is a valid and binding contract."
          ],
          [
            "3. Promise to Pay a Time-Barred Debt",
            "Section 25(3)",
            "Must be: (a) A promise in writing, (b) Signed by the debtor or his authorized agent, (c) To pay wholly or in part a debt barred by the Limitation Act.",
            "A owes B ₹50,000, barred by the 3-year limitation period. A signs a written undertaking to pay ₹25,000 in settlement. B can legally sue on this new promise."
          ],
          [
            "4. Completed Gifts",
            "Explanation 1 to Section 25",
            "Nothing in Section 25 affects the validity of any gift actually made and completed as between donor and donee.",
            "A transfers ownership of jewelry to his friend as an unconditional gift. A cannot later demand it back for want of consideration."
          ],
          [
            "5. Contract of Agency",
            "Section 185",
            "No consideration is necessary to create an agency relationship.",
            "A authorizes B to act as his broker or sales agent. The appointment is legally valid without any consideration passing between them."
          ],
          [
            "6. Charitable Subscription & Promissory Estoppel",
            "Judicial Doctrine",
            "A promise to subscribe to charity is generally unenforceable, UNLESS the promisee (charity/builder) incurs a financial liability relying on the promise (*Kedarnath v. Gorie Mohammad [1886]*).",
            "Kedarnath case: The commissioner of a town hall started construction relying on defendant's ₹100 subscription promise. Held: Defendant was bound to pay because a financial liability was incurred on his promise."
          ]
        ]
      }
    ]
  },
  {
    "id": "q11",
    "number": 11,
    "title": "Difference Between Void Contract and Voidable Contract",
    "question": "Distinguish between a Void Contract and a Voidable Contract under the Indian Contract Act, 1872. Highlight statutory definitions and legal effects.",
    "relatedSlugs": [
      "classification-mistake-incapacity",
      "definitions-essentials"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "The Indian Contract Act draws a sharp distinction between an agreement that is void, a contract that becomes void, and a contract that is voidable at the option of an aggrieved party."
      },
      {
        "type": "h3",
        "text": "Comprehensive Comparative Distinction Matrix"
      },
      {
        "type": "table",
        "headers": [
          "Basis of Distinction",
          "Void Contract (Section 2(j))",
          "Voidable Contract (Section 2(i))"
        ],
        "rows": [
          [
            "Statutory Definition",
            "'A contract which ceases to be enforceable by law becomes void when it ceases to be enforceable.'",
            "'An agreement enforceable by law at the option of one or more parties thereto, but not at the option of the other or others.'"
          ],
          [
            "Status at Inception",
            "Valid and binding when originally entered into, but becomes void subsequently due to external events.",
            "Valid, binding, and operational from inception until it is formally rescinded by the aggrieved party."
          ],
          [
            "Cause of Creation",
            "Supervening impossibility, destruction of subject matter (Sec 56), change in law, or outbreak of war.",
            "Absence of free consent caused by Coercion (Sec 15), Undue Influence (Sec 16), Fraud (Sec 17), or Misrepresentation (Sec 18)."
          ],
          [
            "Option / Right to Rescind",
            "Neither party has any option to affirm or enforce; the contract is completely dead in law.",
            "The aggrieved party alone has the legal right to either affirm (ratify) or repudiate (rescind) the contract."
          ],
          [
            "Effect of Lapse of Time",
            "Lapse of time cannot make a void contract valid.",
            "If the aggrieved party does not exercise the option to rescind within a reasonable time, the contract remains valid."
          ],
          [
            "Right to Damages",
            "Neither party can claim breach damages because the contract was discharged by frustration without fault.",
            "The aggrieved party can rescind AND sue for damages in tort/deceit (in cases of fraud under Section 19)."
          ],
          [
            "Third Party Rights",
            "No third party can acquire legal rights under a void contract.",
            "A third party who acquires goods in good faith for value before the contract is rescinded obtains a valid title."
          ]
        ]
      }
    ]
  },
  {
    "id": "q12",
    "number": 12,
    "title": "Valid Contract vs. Invalid / Void / Illegal Agreements",
    "question": "Differentiate between a Valid Contract, a Void Agreement, a Void Contract, an Illegal Agreement, and an Unenforceable Contract.",
    "relatedSlugs": [
      "classification-mistake-incapacity",
      "definitions-essentials"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "The taxonomy of contractual validity encompasses distinct legal categories ranging from fully enforceable contracts to void bargains and criminal illegal agreements."
      },
      {
        "type": "diagram",
        "kind": "contract-classification",
        "title": "Taxonomy of Contractual Validity and Enforceability",
        "caption": "Categorization based on enforceability, formation mechanics, and performance milestones."
      },
      {
        "type": "h3",
        "text": "5-Way Comparative Spectrum of Validity"
      },
      {
        "type": "table",
        "headers": [
          "Legal Category",
          "Statutory Definition",
          "Enforceability & Legal Status",
          "Collateral Transactions Impact",
          "Real-World Example"
        ],
        "rows": [
          [
            "Valid Contract",
            "Section 2(h) & Section 10",
            "Fully enforceable in court by all parties.",
            "All collateral contracts are valid.",
            "Written purchase order for 50 laptops with advance payment."
          ],
          [
            "Void Agreement",
            "Section 2(g) (Void ab initio)",
            "Never had legal existence; zero rights created.",
            "Collateral transactions are not tainted unless illegal.",
            "Agreement entered into with a minor (*Mohori Bibee*)."
          ],
          [
            "Void Contract",
            "Section 2(j)",
            "Valid when formed; ceases enforceability subsequently.",
            "Collateral agreements remain unaffected.",
            "Contract to export wheat where government imposes export ban (*Sec 56*)."
          ],
          [
            "Illegal Agreement",
            "Section 23 (Unlawful Object)",
            "Void ab initio and criminal/punishable under penal law.",
            "All collateral transactions are strictly tainted and VOID.",
            "Borrowing ₹5,00,000 specifically to finance contraband smuggling."
          ],
          [
            "Unenforceable Contract",
            "General Law",
            "Good in substance, but barred by technical defect (stamp/registration/limitation).",
            "Becomes enforceable once technical defect is cured.",
            "Oral agreement for property sale requiring registered deed under Transfer of Property Act."
          ]
        ]
      }
    ]
  },
  {
    "id": "q13",
    "number": 13,
    "title": "Obligation of Parties to Contracts and Performance",
    "question": "Explain the statutory obligations of parties to perform contracts under Section 37. By whom and under what circumstances must contracts be performed?",
    "relatedSlugs": [
      "discharge-and-remedies",
      "contract-agreement-promise"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Section 37 of the Indian Contract Act, 1872 lays down the fundamental rule governing contractual performance: parties to a contract must either perform, or offer to perform, their respective promises, unless performance is dispensed with or excused under the provisions of this Act or any other law."
      },
      {
        "type": "h3",
        "text": "1. The Two Statutory Alternatives: Actual Performance vs. Tender"
      },
      {
        "type": "ul",
        "items": [
          "_Actual Performance_: Fulfilling the promise according to terms, time, and place agreed upon.",
          "_Tender / Offer of Performance (Section 38)_: When the promisor offers performance to the promisee, but the promisee refuses to accept. To be valid, tender must be: (a) Unconditional, (b) At a proper time and place, and (c) Give the promisee a reasonable opportunity to ascertain that goods/money conform to contract."
        ]
      },
      {
        "type": "h3",
        "text": "2. By Whom Must Contracts Be Performed? (Sections 40–45)"
      },
      {
        "type": "table",
        "headers": [
          "Performing Party",
          "Governing Section",
          "Applicability & Legal Rules",
          "Practical Example"
        ],
        "rows": [
          [
            "The Promisor Himself",
            "Section 40",
            "Where it appears from the nature of the case that it was the intention of the parties that the promise should be performed by the promisor personally (personal skill, taste, artistic talent).",
            "A contracts to paint a portrait or perform as an opera singer. A must perform personally; he cannot delegate."
          ],
          [
            "Promisor's Agent",
            "Section 40",
            "In commercial and impersonal contracts, the promisor or his representatives may employ a competent person to perform.",
            "A promises to deliver 100 bags of cement to B. A may deliver through his transport agent or employee."
          ],
          [
            "Legal Representatives",
            "Section 37 & 40",
            "Upon the death of the promisor before performance, his legal representatives are bound to perform, unless the contract involved personal skill.",
            "A promises to pay ₹1,00,000 for goods. A dies. A's legal heirs are liable to pay out of inherited estate (limited to assets inherited)."
          ],
          [
            "Third Person",
            "Section 41",
            "When a promisee accepts performance of the promise from a third person, he cannot afterwards enforce it against the original promisor.",
            "A owes B ₹10,000. C (A's father) pays B ₹10,000 in full discharge. B accepts. B cannot subsequently sue A."
          ],
          [
            "Joint Promisors",
            "Sections 42–44",
            "When two or more persons make a joint promise, all joint promisors must fulfill the promise. Under Section 43, the promisee may compel ANY ONE of the joint promisors to perform the whole promise (*Joint and Several Liability*).",
            "A, B, and C jointly promise to pay D ₹3,00,000. D may compel A alone to pay the full ₹3,00,000. A can then claim equal contribution (₹1,00,000 each) from B and C."
          ]
        ]
      }
    ]
  },
  {
    "id": "q14",
    "number": 14,
    "title": "Sale and Agreement to Sell (Sale of Goods Act, 1930)",
    "question": "Define a Contract of Sale. Distinguish between a 'Sale' and an 'Agreement to Sell' under Section 4 of the Sale of Goods Act, 1930.",
    "relatedSlugs": [
      "sources-maxims-foundations",
      "contract-agreement-promise"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Section 4(1) of the Sale of Goods Act, 1930 defines a Contract of Sale: 'A contract of sale of goods is a contract whereby the seller transfers or agrees to transfer the property in goods to the buyer for a price.' It encompasses both an absolute Sale (executed contract) and an Agreement to Sell (executory contract)."
      },
      {
        "type": "h3",
        "text": "Comprehensive Comparative Distinction Table"
      },
      {
        "type": "table",
        "headers": [
          "Basis of Distinction",
          "Sale (Executed Contract)",
          "Agreement to Sell (Executory Contract)"
        ],
        "rows": [
          [
            "Transfer of Property (Ownership)",
            "Property (ownership) in goods passes immediately from seller to buyer at the time of contract.",
            "Property in goods passes at a future date or subject to the fulfillment of some subsequent condition."
          ],
          [
            "Nature of Rights Created",
            "Creates *Jus in rem* (a right against the whole world to enjoy goods).",
            "Creates *Jus in personam* (a personal right only against the defaulting seller)."
          ],
          [
            "Passage of Risk (*Res perit domino*)",
            "Risk of loss follows ownership. If goods are destroyed, the buyer bears the loss even if goods are in seller's possession.",
            "Risk remains with the seller until ownership passes to the buyer upon fulfillment of conditions."
          ],
          [
            "Remedy on Buyer's Breach",
            "Seller can sue for the full contract price and exercise lien over goods.",
            "Seller can only sue for damages for non-acceptance, not for the price."
          ],
          [
            "Remedy on Seller's Breach",
            "Buyer can sue the seller for damages AND for recovery of goods (*conversion*).",
            "Buyer can only claim monetary damages for non-delivery; cannot claim goods."
          ],
          [
            "Insolvency of Buyer",
            "If buyer becomes insolvent before paying, seller must deliver goods to Official Receiver (unless unpaid seller lien exists).",
            "Seller may refuse delivery and retain goods."
          ],
          [
            "Insolvency of Seller",
            "Buyer is entitled to recover goods from Official Receiver as owner.",
            "Buyer can only claim a pro-rata dividend for price paid."
          ]
        ]
      }
    ]
  },
  {
    "id": "q15",
    "number": 15,
    "title": "Contingent Contracts and Rules of Enforcement",
    "question": "Define a Contingent Contract under Section 31 of the Indian Contract Act, 1872. Explain the statutory rules regarding its enforcement and distinguish it from a Wagering Agreement.",
    "relatedSlugs": [
      "contract-agreement-promise",
      "definitions-essentials"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "A contract may be absolute (where the promisor binds himself to perform unconditionally) or contingent (where performance depends upon the happening or non-happening of an uncertain future event)."
      },
      {
        "type": "def",
        "term": "Contingent Contract",
        "section": "Section 31",
        "body": "A contingent contract is a contract to do or not to do something, if some event, collateral to such contract, does or does not happen."
      },
      {
        "type": "h3",
        "text": "The Essential Characteristics of a Contingent Contract"
      },
      {
        "type": "ul",
        "items": [
          "_Performance Depends on a Future Event_: The event must be uncertain (e.g. ship arriving, house catching fire).",
          "_The Event Must Be Collateral to the Contract_: It must not be part of the consideration itself, but an external contingency.",
          "_The Event Must Not Be Within the Mere Will of Promisor_: If performance depends solely on the promisor's arbitrary whim, it is an illusory promise."
        ]
      },
      {
        "type": "h3",
        "text": "Statutory Rules for Enforcement of Contingent Contracts (Sections 32–36)"
      },
      {
        "type": "ol",
        "items": [
          "_1. Enforcement on Happening of Event (Section 32)_: Enforceable only when the event happens. If the event becomes impossible, the contract becomes void. _Example_: A contracts to pay B ₹1,00,000 if B marries C. C dies without marrying B. Contract becomes void.",
          "_2. Enforcement on Non-Happening of Event (Section 33)_: Enforceable when the happening of the event becomes impossible, and not before. _Example_: A agrees to pay B if a ship does not return. The ship sinks. Contract becomes enforceable.",
          "_3. Event Deemed Impossible by Conduct of a Person (Section 34)_: If the event is the future conduct of a living person, the event is deemed impossible if that person acts so as to make it impossible within any definite time. _Example_: A agrees to pay B if B marries C. C marries D. The event is deemed impossible.",
          "_4. Contingent on Event Happening within Fixed Time (Section 35, Para 1)_: Void if time expires without event happening or if event becomes impossible before time expires.",
          "_5. Contingent on Impossible Events (Section 36)_: Contingent agreements to do or not to do anything if an impossible event happens are **void ab initio**, whether the impossibility was known or not. _Example_: A agrees to pay B ₹1,000 if two straight lines should enclose a space."
        ]
      },
      {
        "type": "h3",
        "text": "Contingent Contract vs. Wagering Agreement"
      },
      {
        "type": "table",
        "headers": [
          "Basis of Distinction",
          "Contingent Contract (Section 31)",
          "Wagering Agreement (Section 30)"
        ],
        "rows": [
          [
            "Statutory Validity",
            "Completely valid and legally enforceable.",
            "Strictly void *ab initio* under Section 30."
          ],
          [
            "Insurable / Real Interest",
            "Parties possess a real commercial or insurable interest in the subject matter.",
            "Parties have no interest except the stake money to be won or lost."
          ],
          [
            "Reciprocal Promises",
            "May not involve mutual winning and losing (e.g. marine insurance).",
            "Always consists of mutual promises to win or lose on uncertain event."
          ],
          [
            "Practical Example",
            "Contracts of insurance, indemnity, and guarantee.",
            "Betting on a cricket match or lottery result."
          ]
        ]
      }
    ]
  },
  {
    "id": "q16",
    "number": 16,
    "title": "Distinction Between Succession and Assignment",
    "question": "Distinguish between Succession and Assignment in the transfer of contractual rights and obligations.",
    "relatedSlugs": [
      "discharge-and-remedies",
      "contract-agreement-promise"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Transfer of contractual rights and liabilities from the original contracting parties to third parties takes place either by operation of law (Succession) or by voluntary act of parties (Assignment)."
      },
      {
        "type": "h3",
        "text": "Comprehensive Comparative Distinction Table"
      },
      {
        "type": "table",
        "headers": [
          "Basis of Distinction",
          "Succession (Devolution by Operation of Law)",
          "Assignment (Transfer by Act of Parties)"
        ],
        "rows": [
          [
            "Mode of Origin",
            "Takes place automatically by operation of law upon the death or insolvency of a party.",
            "Takes place by the voluntary, deliberate act of the contracting parties through a written deed."
          ],
          [
            "Transfer of Liabilities",
            "Both benefits (rights) AND liabilities (debts) pass to the legal heirs / successors (limited to estate inherited).",
            "Only contractual rights/benefits and actionable claims can be assigned. **Liabilities cannot be assigned** without the promisee's consent (Novation)."
          ],
          [
            "Consent of Other Party",
            "No consent is required; the law automatically vests rights and duties in legal representatives.",
            "Assignment of rights does not require debtor's consent, but assignment of obligations strictly requires consent."
          ],
          [
            "Scope & Personal Skills",
            "Contracts involving personal skill and talent (painting, singing, authorship) terminate on death and do NOT pass to successors.",
            "Contracts of personal nature cannot be assigned to any third party."
          ],
          [
            "Statutory Formalities",
            "Governed by Indian Succession Act, 1925 / Insolvency laws (Succession certificate / Letters of administration).",
            "Governed by Section 130 of the Transfer of Property Act, 1882 (Must be in writing and signed)."
          ]
        ]
      }
    ]
  },
  {
    "id": "q17",
    "number": 17,
    "title": "Elements of Vitiating Free Consent",
    "question": "What is Free Consent? Critically examine the five elements that vitiate free consent under the Indian Contract Act, 1872 and state their legal consequences.",
    "relatedSlugs": [
      "capacity-free-consent",
      "classification-mistake-incapacity"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Section 14 of the Indian Contract Act, 1872 provides that consent is free when it is not caused by Coercion, Undue Influence, Fraud, Misrepresentation, or Mistake. When consent is vitiated, the essential foundation of *consensus ad idem* is compromised."
      },
      {
        "type": "diagram",
        "kind": "free-consent",
        "title": "Free Consent and Vitiating Factors Map",
        "caption": "Section 14 requires that consent is not caused by coercion, undue influence, fraud, misrepresentation, or bilateral mistake."
      },
      {
        "type": "h3",
        "text": "The Five Vitiating Factors Examined"
      },
      {
        "type": "table",
        "headers": [
          "Vitiating Factor",
          "Statutory Definition & Section",
          "Key Legal Principle & Case Law",
          "Legal Consequence on Contract"
        ],
        "rows": [
          [
            "1. Coercion",
            "Section 15: Committing/threatening acts forbidden by IPC, or unlawful property detention.",
            "Threat to commit suicide constitutes coercion (*Chikham Amiraju v. Seshamma*).",
            "Voidable at the option of the coerced party (Section 19)."
          ],
          [
            "2. Undue Influence",
            "Section 16: Dominating the will of another through authority, fiduciary relation, or mental distress.",
            "Spiritual guru inducing devotee to gift all property (*Mannu Singh v. Umadat Pandey*).",
            "Voidable at the option of the dominated party (Section 19A)."
          ],
          [
            "3. Fraud",
            "Section 17: Deliberate false statement without belief in truth, or active concealment.",
            "Intentional deception to induce contract (*Derry v. Peek*).",
            "Voidable + Right to sue for damages in tort/deceit (Section 19)."
          ],
          [
            "4. Misrepresentation",
            "Section 18: Innocent false statement made without intention to deceive.",
            "Positive assertion of untrue fact believing it to be true.",
            "Voidable at the option of the misled party (Section 19)."
          ],
          [
            "5. Bilateral Mistake",
            "Section 20: Mutual mistake of fact essential to the contract by both parties.",
            "Cargo believed alive was already destroyed at sea (*Couturier v. Hastie*).",
            "Completely Void ab initio (Section 20)."
          ]
        ]
      }
    ]
  },
  {
    "id": "q18",
    "number": 18,
    "title": "Communication of Offer and Acceptance",
    "question": "Explain the statutory rules regarding the communication of an Offer and an Acceptance under Section 4 of the Indian Contract Act, 1872 with relevant case laws.",
    "relatedSlugs": [
      "offer-meaning-essentials",
      "acceptance-communication-revocation"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Section 4 of the Indian Contract Act, 1872 fixes the exact moments in time when the communication of a proposal and an acceptance becomes legally complete as against the respective parties."
      },
      {
        "type": "h3",
        "text": "1. Communication of Offer (Section 4, Para 1)"
      },
      {
        "type": "p",
        "text": "The communication of an offer is complete **when it comes to the knowledge of the person to whom it is made**. An offeree cannot accept an offer in ignorance of its existence (*Lalman Shukla v. Gauri Datt [1913]*)."
      },
      {
        "type": "h3",
        "text": "2. Communication of Acceptance (Section 4, Para 2)"
      },
      {
        "type": "table",
        "headers": [
          "Party Bound",
          "Moment Communication is Complete",
          "Legal Mechanics & Landmark Ruling"
        ],
        "rows": [
          [
            "As Against the Proposer (Offeror)",
            "When the acceptance is put in a course of transmission to him, so as to be out of the power of the acceptor.",
            "The moment the letter of acceptance is posted into the letterbox, the proposer is irrevocably bound (*Adams v. Lindsell [1818]*)."
          ],
          [
            "As Against the Acceptor (Offeree)",
            "When the acceptance comes to the actual knowledge of the proposer.",
            "The acceptor is not bound until the letter reaches the proposer. The acceptor can revoke his acceptance before it reaches the proposer."
          ]
        ]
      },
      {
        "type": "h3",
        "text": "3. Special Rule for Instantaneous Electronic Communications"
      },
      {
        "type": "p",
        "text": "In contracts concluded through telephone, telex, or electronic email, the contract is complete only when the acceptance is **actually received and heard** by the offeror at his place of business (*Entores Ltd. v. Miles Far East Corp [1955]*; *Bhagwandas Goverdhandas Kedia v. Girdharilal Parshottamdas & Co. [1966] SC*)."
      }
    ]
  },
  {
    "id": "q19",
    "number": 19,
    "title": "Revocation of Offer and Acceptance",
    "question": "State the legal rules governing the revocation of an offer and an acceptance under Section 5. Enumerate the various modes of revocation under Section 6.",
    "relatedSlugs": [
      "acceptance-communication-revocation",
      "offer-meaning-essentials"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Revocation means taking back, canceling, or withdrawing an offer or an acceptance before it has matured into a binding contract. Sections 5 and 6 govern the time limits and statutory modes of revocation."
      },
      {
        "type": "h3",
        "text": "1. Time Limits for Revocation (Section 5 Statutory Rules)"
      },
      {
        "type": "ul",
        "items": [
          "_Revocation of Proposal (Sec 5, Para 1)_: A proposal may be revoked at any time **before** the communication of its acceptance is complete as against the proposer (i.e. before the offeree posts the letter of acceptance), but not afterwards.",
          "_Revocation of Acceptance (Sec 5, Para 2)_: An acceptance may be revoked at any time **before** the communication of the acceptance is complete as against the acceptor (i.e. before the letter reaches the proposer), but not afterwards."
        ]
      },
      {
        "type": "h3",
        "text": "2. Modes of Revocation of Offer (Section 6)"
      },
      {
        "type": "ol",
        "items": [
          "_By Notice of Revocation (Sec 6(1))_: Communicated by the offeror to the offeree before acceptance is posted.",
          "_By Lapse of Stipulated or Reasonable Time (Sec 6(2))_: Expiry of fixed deadline, or reasonable time (*Ramsgate Victoria Hotel Co. v. Montefiore*).",
          "_By Failure to Fulfill Condition Precedent (Sec 6(3))_: Failure to pay advance deposit before acceptance.",
          "_By Death or Insanity of Proposer (Sec 6(4))_: If fact of death/insanity comes to acceptor's knowledge before acceptance.",
          "_By Counter-Offer_: A counter-offer extinguishes original proposal (*Hyde v. Wrench*).",
          "_By Rejection of Offer_: Explicit rejection terminates proposal."
        ]
      }
    ]
  }
];
