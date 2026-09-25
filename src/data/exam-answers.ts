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
        text: "The Indian Contract Act, 1872 treats contract as a narrower class inside the wider class of agreement. The statutory definitions themselves produce the result that every contract is an agreement, but every agreement is not a contract.",
      },
      {
        type: "h3",
        text: "Statutory path from proposal to contract",
      },
      {
        type: "ul",
        items: [
          "Section 2(a): a proposal is a signification of willingness to do or to abstain, made with a view to obtaining assent.",
          "Section 2(b): when the person to whom the proposal is made signifies assent, the proposal is accepted and becomes a promise.",
          "Section 2(e): every promise and every set of promises forming the consideration for each other is an agreement.",
          "Section 2(h): an agreement enforceable by law is a contract.",
        ],
      },
      {
        type: "p",
        text: "The formula taught in class is therefore: Offer + Acceptance = Agreement. Agreement + Enforceability = Contract.",
      },
      {
        type: "h3",
        text: "Juristic support",
      },
      {
        type: "ul",
        items: [
          "Pollock: every agreement and promise enforceable at law is a contract.",
          "Salmond: an agreement creating and defining obligation between parties.",
          "Anson: a legally binding agreement between two or more persons by which rights are acquired by one or more to acts or forbearances on the part of the other.",
        ],
      },
      {
        type: "p",
        text: "Each juristic definition adds enforceability or legal obligation to agreement. None of them treats a bare agreement as a contract.",
      },
      {
        type: "h3",
        text: "Differences between agreement and contract",
      },
      {
        type: "table",
        headers: ["Basis", "Agreement", "Contract"],
        rows: [
          ["Formula", "Offer + Acceptance", "Agreement + Enforceability"],
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
            "Wider term. All contracts are agreements.",
            "Narrower term. All agreements are not contracts.",
          ],
        ],
      },
      {
        type: "h3",
        text: "When an agreement is not a contract",
      },
      {
        type: "ul",
        items: [
          "There is no intention to create legal relations, as in mere social or domestic agreements.",
          "The agreement is a void agreement under Section 2(g): an agreement not enforceable by law is void, including an agreement void _ab initio_.",
          "Any essential of Section 10 is missing: proper offer and acceptance, lawful consideration, lawful object, capacity, free consent, certainty, possibility of performance, absence of an express statutory bar (for example restraint of trade, marriage, or legal proceedings), or required legal formalities.",
          "The maxim _Ex Maleficio Non Oritur Contractus_ states the same limit: no contract arises out of a misconduct or illegal act.",
        ],
      },
      {
        type: "h3",
        text: "Conclusion",
      },
      {
        type: "p",
        text: "An agreement is the genus. A contract is the species that the law will enforce. That is why it is correct to say that contracts are agreements, but it is not correct to say that agreements are contracts.",
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
        text: "The lecture classifies contracts in three ways and, separately, defines consent and free consent. Both heads are examination material. The safe 14-mark structure is: classify first, then explain consent.",
      },
      {
        type: "h3",
        text: "Classification by enforceability",
      },
      {
        type: "ul",
        items: [
          "_Valid contract_: an agreement enforceable by law (Section 2(h)).",
          "_Voidable contract (Section 2(i))_: an agreement enforceable by law at the option of one or more of the parties, but not at the option of the other or others. Coercion, undue influence, fraud, and misrepresentation produce this result.",
          "_Void agreement (Section 2(g))_: not enforceable by law; _void ab initio_ means void from the beginning. Bilateral mistake of essential fact (Section 20) is an example.",
          "_Void contract (Section 2(j))_: a contract which ceases to be enforceable by law becomes void when it ceases to be enforceable. Supervening impossibility under Section 56 is an example.",
          "_Illegal_: no contract arises out of an illegal act.",
          "_Unenforceable_: the agreement exists but cannot be enforced, typically for want of a required formality.",
        ],
      },
      {
        type: "h3",
        text: "Classification by formation",
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
        type: "h3",
        text: "Classification by extent of performance",
      },
      {
        type: "ul",
        items: [
          "_Executed_: already performed.",
          "_Executory_: still to be performed. An executory contract may be unilateral or bilateral.",
        ],
      },
      {
        type: "h3",
        text: "Consent and free consent",
      },
      {
        type: "p",
        text: "Consent (Section 13) exists when two or more persons agree upon the same thing in the same sense (_consensus ad idem_). Free consent (Section 14) is consent that is not caused by coercion (Section 15), undue influence (Section 16), fraud (Section 17), misrepresentation (Section 18), or mistake (Sections 20–22).",
      },
      {
        type: "p",
        text: "The difference is therefore this: consent is agreement in the same sense; free consent is that agreement without a vitiating cause. A contract may show consent and still not show free consent. Where consent is not free because of coercion, undue influence, fraud, or misrepresentation, the contract is voidable at the option of the aggrieved party. Where both parties are under a mistake as to a matter of fact essential to the agreement, the agreement is void. A unilateral mistake does not make the contract voidable, except in cases of mistaken identity of person or nature of the transaction. A mistake of Indian law gives no relief, because ignorance of the law is no excuse.",
      },
      {
        type: "h3",
        text: "Conclusion",
      },
      {
        type: "p",
        text: "Types of contract tell the examiner how the agreement is formed, whether it can be enforced, and whether it has been performed. Consent tells the examiner whether the parties meant the same thing. Free consent tells the examiner whether that meaning was obtained without coercion, influence, deceit, or mistake.",
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
        text: "The Indian judiciary is an independent body, separate from the executive and the legislature, based on the British legal system. It maintains law and order and decides civil and criminal offences. Its working cannot be described without both the hierarchy of courts and the sources of law those courts apply.",
      },
      {
        type: "h3",
        text: "How the structure works",
      },
      {
        type: "ul",
        items: [
          "The Supreme Court of India is the apex court.",
          "High Courts sit at the state level.",
          "Subordinate or lower courts sit in the districts and split into civil courts, criminal courts, and revenue courts.",
          "Lok Adalats sit at the village and Panchayat level.",
          "Civil courts include the District Judge, the Sub-Judge, and Family Courts.",
          "Criminal courts include the Sessions Judge, the Chief Judicial Magistrate, Assistant Sessions, and the Judicial Magistrate.",
          "Revenue courts include the Board of Revenue, the Commissioner, the Collector, the Tehsildar, and the Assistant Tehsildar.",
        ],
      },
      {
        type: "p",
        text: "Civil cases are decided on a preponderance of probabilities. Criminal cases require proof beyond reasonable doubt. The Supreme Court and High Courts sit in a bench system rather than a jury system. English is used in the superior courts. Article 141 makes Supreme Court decisions binding on all courts. Recent working methods include e-Courts, digital evidence, virtual hearings, evening courts, special courts for petty and commercial cases, and a broader Public Interest Litigation jurisdiction.",
      },
      {
        type: "h3",
        text: "Sources of law adapted by this structure",
      },
      {
        type: "h4",
        text: "Primary sources",
      },
      {
        type: "ul",
        items: [
          "Constitution of India — supreme law of the land (395 Articles, 12 Schedules, numerous amendments).",
          "Enactments — Acts of the Union Parliament or State Legislatures (codified law). Statutory law cannot be changed easily by customs.",
          "Ordinances — promulgated by the President (Article 123) or the Governor (Article 213); they lapse 6 weeks from the re-assembly of Parliament or the State Legislature.",
        ],
      },
      {
        type: "h4",
        text: "Secondary sources",
      },
      {
        type: "ul",
        items: [
          "Judicial precedents — judgments of the Supreme Court and High Courts establishing binding case law.",
          "Custom and usages.",
          "Legal theory and jurisprudence, including interpretation on English Common Law principles.",
        ],
      },
      {
        type: "p",
        text: "The system therefore adapts English common law history together with Indian statutory and constitutional developments. Schools of thought and jurisprudential theory, classification of law, and that mixed history are the map of the Indian legal system taught in Unit 1.",
      },
      {
        type: "h3",
        text: "Conclusion",
      },
      {
        type: "p",
        text: "The judiciary works as an independent hierarchy from the Supreme Court down to Lok Adalats, with specialised civil, criminal, and revenue streams at the district level. The law it applies is first the Constitution, then statute and ordinance, then precedent, custom, and legal theory.",
      },
    ],
  },
  {
    id: "q4",
    number: 4,
    title: "How society and law are related",
    question: "How is society related to law?",
    marks: 14,
    relatedSlugs: ["constitution-rights-duties", "legal-environment-labour"],
    blocks: [
      {
        type: "p",
        text: "Law organises society. Society, in turn, supplies the rights, duties, and institutions that law must protect. The lecture locates that relationship in the Constitution, the judiciary, fundamental rights and duties, and the socio-economic view of the corporation.",
      },
      {
        type: "h3",
        text: "Law as the organiser of social order",
      },
      {
        type: "p",
        text: "The Judiciary of India takes care of maintenance of law and order in the country, along with solving problems related to civil and criminal offences. It is independent and separate from the executive and the legislature. A system of rule of law, a federal structure promoting legal uniformity, and the bench system in the superior courts are treated as conducive to this work. Procedural delay, cost, complex legal jargon, and the want of widespread legal aid are treated as non-conducive.",
      },
      {
        type: "h3",
        text: "The Constitution as the social compact",
      },
      {
        type: "p",
        text: "The Constitution of India is the supreme law of the land. It is the product of the Government of India Act, 1935, the Cabinet Mission Plan, 1946, the Indian Independence Act, 1947, and the drafting and adoption of the Constitution in 1949–1950. It states both what the person may claim from the State and what the person owes to the nation.",
      },
      {
        type: "h4",
        text: "Fundamental rights (Part III)",
      },
      {
        type: "p",
        text: "These include the Right to Equality (Articles 14–18); freedom from discrimination on grounds of religion, race, caste, sex, or place of birth (Article 15); equality of opportunity in public employment (Article 16); freedom of speech and expression (Article 19(1)(a)); the right to assemble peaceably and without arms (Article 19(1)(b)); freedom to move and reside anywhere in India (Article 19(1)(d), (e)); protection of life and personal liberty (Article 21); and freedom of conscience and religion (Article 25).",
      },
      {
        type: "h4",
        text: "Fundamental duties (Part IV-A, Article 51A)",
      },
      {
        type: "p",
        text: "Added by the 42nd Constitutional Amendment Act, 1976, the duties taught in class are: to abide by the Constitution and respect its ideals, institutions, National Flag, and National Anthem; to cherish and follow the noble ideals of the national struggle for freedom; and to value and preserve the rich heritage of our composite culture.",
      },
      {
        type: "h3",
        text: "Law reaching social wrongs",
      },
      {
        type: "p",
        text: "The courts have promoted \"Justice at Door-Step\" through Lok Adalats and Evening Courts. Public Interest Litigation has been broadened to child labour, bonded labour, environmental protection, and neglected children. Jurisprudence itself is split into commercial and business, industrial and labour, financial, and judicial and social branches, which shows that law studies society in several registers at once.",
      },
      {
        type: "h3",
        text: "The company as a social institution",
      },
      {
        type: "p",
        text: "In the traditional capitalist view, a company is private property and shareholders are the absolute owners. In the modern socio-economic view, a company is a social institution. Shareholders are capital suppliers entitled to a reasonable return, while the company owes duties to employees, consumers, suppliers, and society.",
      },
      {
        type: "h3",
        text: "Conclusion",
      },
      {
        type: "p",
        text: "Society without law has no settled order. Law without society has no subject. The Constitution, the independent courts, fundamental rights and duties, public interest jurisdiction, and the modern view of the company are the points at which the two meet.",
      },
    ],
  },
  {
    id: "q5",
    number: 5,
    title: "How commercial society and law are related",
    question: "How is commercial society related to law?",
    marks: 14,
    relatedSlugs: [
      "sources-maxims-foundations",
      "legal-environment-labour",
      "companies-act-2013",
    ],
    blocks: [
      {
        type: "p",
        text: "Commercial society is a system of promises. The law of contract is the foundation upon which the superstructure of modern business is built. Company law, labour codes, and the legal environment then supply the rest of the frame.",
      },
      {
        type: "h3",
        text: "Promises as the base of business",
      },
      {
        type: "ul",
        items: [
          "Business is a system built on promises made between parties and their performance.",
          "Breaking a promise without incurring liability leads to endless complications in commercial transactions.",
          "The law of contract lays down legal rules relating to promises, their formation, performance, and enforcement.",
          "The maxim _Contractus Legem Ex Conventione Accipiunt_ states that contracts receive, or become, law from the agreement of their parties.",
          "The maxim _Ex Maleficio Non Oritur Contractus_ states that no contract arises out of a misconduct or illegal act.",
          "The maxim _Emptor Emit Quam Minimo Potest, Venditor Vendit Quam Maximo Potest_ states the ordinary commercial stance: the buyer buys as cheap as he can; the seller sells as dear as he can. _Caveat emptor_ (let the buyer beware) is the related principle in the law of fraud and silence.",
        ],
      },
      {
        type: "h3",
        text: "The legal environment of business",
      },
      {
        type: "p",
        text: "Conducive factors include the rule of law, a federal structure promoting legal uniformity, the use of English in superior courts, known standards of proof, and the bench system. Non-conducive factors include delay, backlog, cost, and complex jargon. Special courts for commercial cases, e-Courts, and virtual hearings are later attempts to make that environment usable for commerce.",
      },
      {
        type: "h3",
        text: "Labour and the commercial enterprise",
      },
      {
        type: "p",
        text: "The legacy framework was the Factories Act, 1948; the Industrial Disputes Act, 1947; the Trade Unions Act, 1926; and the Industrial Employment (Standing Orders) Act, 1946. These have been recast into four labour codes: the Code on Wages, 2019; the Industrial Relations Code, 2020; the Occupational Safety, Health and Working Conditions Code, 2020; and the Code on Social Security, 2020.",
      },
      {
        type: "h3",
        text: "Company law as commercial public law",
      },
      {
        type: "p",
        text: "Business enterprises are corporate (registered companies, statutory corporations, co-operative societies) or non-corporate (sole proprietorship, partnership, HUF, PPP and joint ventures). Corporations can only do what is permitted by law (_Universitates Nihil/Tantum Possunt Quod Per Legem Ipsis Datum Est_). The Companies Act, 2013 simplifies company law and eases doing business, while making governance, transparency, class action, women directors, independent directors, auditor rotation, and CSR spending statutory. CSR of 2% of average net profits under Section 135 is the clearest statutory statement that commercial profit is tied to social duty. Nothing is useful nor honourable that is contrary to law (_Nil Utile Aut Honestum Quod Legibus Contrarium_).",
      },
      {
        type: "h3",
        text: "Conclusion",
      },
      {
        type: "p",
        text: "Commercial society cannot stand if promises can be broken without liability. Contract law enforces those promises. Labour codes and company law then place the enterprise inside a wider set of duties to workers, investors, and society.",
      },
    ],
  },
  {
    id: "q6",
    number: 6,
    title: "Companies Act, 2013 compared with 1956",
    question:
      "Compare the Companies Act, 2013 with the Companies Act, 1956. Cover structure, members, One Person Company, incorporation, directors, e-governance, MoA, AoA, bonus shares, exit option, and CSR.",
    marks: 14,
    relatedSlugs: ["companies-act-2013"],
    blocks: [
      {
        type: "p",
        text: "The Companies Act, 2013 replaced the Companies Act, 1956 after political, economic, and social change. The Bill was introduced in 2008–2009, reviewed by the Parliamentary Standing Committee in 2010–2012, passed by the Lok Sabha in December 2012, and passed by the Rajya Sabha with Presidential assent in 2013.",
      },
      {
        type: "h3",
        text: "Structural comparison",
      },
      {
        type: "table",
        headers: ["Parameter", "1956 Act", "2013 Act"],
        rows: [
          [
            "Structure",
            "13 Parts, 658 Sections, 15 Schedules",
            "29 Chapters, 470 Sections, 7 Schedules, 95 Definitions",
          ],
          [
            "Maximum members of a private company",
            "50",
            "200 (Section 2(68))",
          ],
          [
            "One Person Company",
            "Did not exist",
            "Introduced (Section 2(62))",
          ],
          [
            "Certificate of Incorporation",
            "Treated as conclusive evidence",
            "Conclusive of registration; penal action permitted for fraud (Sections 7(7), 447)",
          ],
          [
            "Applicability",
            "India, with exceptions for Jammu and Kashmir / Sikkim",
            "Entire territory of India (Section 1)",
          ],
          [
            "Maximum directors",
            "12; Central Government approval to exceed",
            "15; increase beyond 15 by Special Resolution, no government approval (Section 149(1))",
          ],
          [
            "Women director",
            "No statutory requirement",
            "Mandatory for listed companies and public companies with paid-up capital ≥ ₹100 crore or turnover ≥ ₹300 crore (Section 149(1))",
          ],
          [
            "Resident director",
            "No requirement",
            "At least one director resident in India for ≥ 182 days in the financial year (Section 149(3))",
          ],
          [
            "E-governance",
            "Physical documentation and manual filings",
            "Mandatory electronic filings, electronic records, and e-voting",
          ],
          [
            "MoA object clause",
            "Main, Ancillary, and Other Objects",
            "Bifurcation eliminated; Main Objects and matters necessary in furtherance thereof",
          ],
          [
            "AoA entrenchment",
            "No specific provision",
            "Statutory recognition (Section 5(3))",
          ],
          [
            "Exit option",
            "No exit if unutilised IPO funds changed purpose",
            "Promoters must provide an exit to dissenting shareholders if objects change after a public issue (Sections 13(8), 27)",
          ],
          [
            "Bonus shares",
            "Guidelines and articles",
            "Statutory rules under Section 63",
          ],
          [
            "CSR",
            "Voluntary",
            "Mandatory CSR Committee and 2% of average net profits (Section 135)",
          ],
        ],
      },
      {
        type: "h3",
        text: "Governance reforms that go beyond the table",
      },
      {
        type: "ul",
        items: [
          "Class Action Suits (Section 245) to safeguard minority shareholders.",
          "At least one-third Independent Directors for listed companies, with a maximum of two consecutive terms of 5 years.",
          "Mandatory consolidated financial statements covering unlisted subsidiaries and joint ventures.",
          "Mandatory statutory auditor rotation (individual: 5 years; firm: 10 years).",
          "Stronger oversight through NFRA, SFIO, and NCLT.",
        ],
      },
      {
        type: "h3",
        text: "Conclusion",
      },
      {
        type: "p",
        text: "The 2013 Act is shorter in sections, larger in definitions, and stricter in governance. It raises the private-company ceiling, creates the One Person Company, nationalises applicability, and turns women directors, resident directors, e-governance, bonus-share rules, dissenters' exit, and CSR from practice or silence into statute.",
      },
    ],
  },
];
