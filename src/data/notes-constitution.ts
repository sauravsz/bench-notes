import type { Topic } from "./types";

export const constitutionTopics: Topic[] = [
  {
    id: "constitution",
    slug: "constitution-fundamental-rights",
    number: 5,
    title: "Constitution, Fundamental Rights, Duties and Jurisprudence",
    unit: "Constitution and Legal Environment",
    marks: 14,
    lecture: "20/08/26",
    summary:
      "The Constitution of India is the supreme Grundnorm. Fundamental rights protect individual liberties while fundamental duties and jurisprudence shape societal, commercial, and financial governance.",
    tags: ["constitution", "fundamental rights", "duties", "jurisprudence", "part III", "article 21", "article 19"],
    blocks: [
      {
        type: "p",
        text: "The Constitution of India is the supreme law of the land (*Grundnorm*). Adopted on 26th November 1949 and coming into full effect on 26th January 1950, it establishes the constitutional architecture governing the Legislature, Executive, and Judiciary, while providing enforceable fundamental rights and socio-economic governance directives.",
      },
      {
        type: "h3",
        text: "1. Constitutional Architecture and Supreme Authority",
      },
      {
        type: "ul",
        items: [
          "_Supreme Law of the Land_: The Constitution overrides all ordinary statutory enactments. Under **Article 13**, any law inconsistent with or in derogation of Fundamental Rights is void to the extent of the inconsistency.",
          "_Comprehensive Structure_: Originally comprised 395 Articles in 22 Parts and 8 Schedules; now expanded through constitutional amendments to 25 Parts and 12 Schedules.",
          "_Article 141 (Binding Precedent)_: The law declared by the Supreme Court of India is binding on all courts, tribunals, and authorities across India.",
        ],
      },
      {
        type: "h4",
        text: "Constitutional & Historical Milestones",
      },
      {
        type: "ul",
        items: [
          "_Government of India Act, 1935_: Served as the primary structural blueprint for federal distribution of legislative powers (Union, State, and Concurrent Lists).",
          "_Cabinet Mission Plan, 1946_: Provided the mechanism for setting up the Constituent Assembly.",
          "_Indian Independence Act, 1947_: Transferred sovereign power from the British Crown to the Constituent Assemblies of India and Pakistan.",
          "_Drafting Committee (Dr. B.R. Ambedkar)_: Finalized the Constitution after extensive debate and synthesis of international constitutional best practices.",
        ],
      },
      {
        type: "h3",
        text: "2. Fundamental Rights (Part III, Articles 12–35)",
      },
      {
        type: "table",
        headers: ["Fundamental Right", "Constitutional Articles", "Core Legal Principle & Business Impact", "Key Case Law / Scenario"],
        rows: [
          [
            "Right to Equality",
            "Articles 14–18",
            "Equality before law and equal protection of laws (Art 14). Prohibition of discrimination (Art 15). Equality of opportunity in public employment (Art 16). Abolition of Untouchability (Art 17).",
            "Strikes down arbitrary government tenders, arbitrary corporate licensing, and discriminatory state actions (*E.P. Royappa v. State of Tamil Nadu*).",
          ],
          [
            "Right to Freedom of Speech & Expression",
            "Article 19(1)(a)",
            "Protects commercial speech, corporate advertising, journalistic freedom, and right to information.",
            "Commercial advertisements enjoy constitutional protection under Art 19(1)(a) subject to reasonable restrictions (*Tata Press Ltd. v. MTNL*).",
          ],
          [
            "Right to Trade, Profession & Business",
            "Article 19(1)(g)",
            "Guarantees the freedom to practice any profession or carry on any occupation, trade, or business across India.",
            "State can impose reasonable restrictions in the interest of general public (e.g. professional qualifications, environmental licensing, state monopolies).",
          ],
          [
            "Right to Life & Personal Liberty",
            "Article 21",
            "Expansive interpretation: Right to live with dignity, right to clean environment, right to privacy, and right against arbitrary procedure.",
            "*Maneka Gandhi v. UOI (1978)* established that state procedure must be just, fair, and reasonable; *K.S. Puttaswamy (2017)* affirmed privacy as a fundamental right.",
          ],
          [
            "Right to Constitutional Remedies",
            "Article 32 & 226",
            "Right to move the Supreme Court (Art 32) and High Courts (Art 226) for the enforcement of rights via 5 prerogative writs.",
            "Writs: Habeas Corpus (illegal detention), Mandamus (compel public duty), Prohibition, Certiorari (quash lower tribunal orders), Quo Warranto (challenge public office title).",
          ],
        ],
      },
      {
        type: "h3",
        text: "3. Fundamental Duties (Part IV-A, Article 51A)",
      },
      {
        type: "p",
        text: "Enacted through the 42nd Constitutional Amendment Act, 1976 upon the recommendation of the Swaran Singh Committee. Article 51A prescribes 11 fundamental duties expected of every Indian citizen, promoting civic responsibility and constitutional morality:",
      },
      {
        type: "ul",
        items: [
          "To abide by the Constitution and respect its ideals, institutions, National Flag, and National Anthem (Art 51A(a)).",
          "To cherish and follow the noble ideals of the national freedom struggle (Art 51A(b)).",
          "To uphold and protect the sovereignty, unity, and integrity of India (Art 51A(c)).",
          "To protect and improve the natural environment including forests, lakes, rivers, and wildlife (Art 51A(g)) — forms the constitutional foundation for corporate environmental laws.",
          "To safeguard public property and abjure violence (Art 51A(i)).",
          "To strive towards excellence in all spheres of individual and collective activity (Art 51A(j)).",
        ],
      },
      {
        type: "h3",
        text: "4. The Four Major Branches of Applied Jurisprudence",
      },
      {
        type: "ul",
        items: [
          "_1. Commercial & Business Jurisprudence_: The philosophy and doctrines governing markets, contractual enforceability, merchant credit, competition law, intellectual property rights, and fair trading practices.",
          "_2. Industrial & Labour Jurisprudence_: Principles balancing capital and labour, safeguarding worker welfare, minimum wages, industrial democracy, and safe working conditions under tri-partite socio-economic standards.",
          "_3. Financial Jurisprudence_: Legal frameworks regulating capital markets, banking operations, foreign exchange (FEMA), taxation statutes, and insolvency resolution mechanisms (IBC).",
          "_4. Judicial & Social Jurisprudence_: The evolving doctrines of social justice, public interest litigation (PIL), judicial review, and the treatment of companies as social institutions with corporate social responsibilities.",
        ],
      },
    ],
  },
  {
    id: "legal-environment",
    slug: "legal-environment-labour",
    number: 6,
    title: "Legal Environment, Labour Codes and Recent Judicial Trends",
    unit: "Constitution and Legal Environment",
    marks: 14,
    lecture: "20/08/26",
    summary:
      "Analysis of conducive and non-conducive factors in the Indian legal environment, the consolidation into four new Labour Codes, and modern judicial digitization trends.",
    tags: ["legal environment", "labour codes", "e-courts", "PIL", "commercial courts"],
    blocks: [
      {
        type: "p",
        text: "The legal environment in India plays a decisive role in determining the ease of doing business, investor confidence, and socio-economic development. In recent years, India has undertaken massive structural reforms, including the codification of labour laws and the digitization of judicial processes.",
      },
      {
        type: "h3",
        text: "1. Critical Evaluation of the Indian Legal Environment",
      },
      {
        type: "table",
        headers: ["Dimension", "Conducive Factors (Strengths)", "Non-Conducive Factors (Challenges)"],
        rows: [
          [
            "Constitutional & Institutional",
            "Strong Rule of Law; independent judiciary; single unified court hierarchy ensuring commercial predictability.",
            "Severe judicial backlog (over 5 crore pending cases across Indian courts); frequent litigation adjournments.",
          ],
          [
            "Language & Uniformity",
            "Universal use of English in the Supreme Court and High Courts facilitates seamless international contracts and M&A.",
            "Complex archaic legal jargon and procedural technicalities (*'Lawyers' Paradise'*).",
          ],
          [
            "Evidentiary Standards",
            "Clear evidentiary bifurcation: Preponderance of probabilities in civil matters vs. Proof beyond reasonable doubt in criminal cases.",
            "High costs of litigation in superior courts making legal remedies expensive for MSMEs and startups.",
          ],
          [
            "Commercial Dispute Focus",
            "Enactment of Commercial Courts Act, 2015 and establishment of specialized National Company Law Tribunals (NCLT).",
            "Delays in the execution of civil court money decrees and enforcement of domestic arbitral awards.",
          ],
        ],
      },
      {
        type: "h3",
        text: "2. The Four Modern Labour Codes (2019–2020 Reforms)",
      },
      {
        type: "p",
        text: "To streamline 29 legacy colonial-era labour statutes (such as the *Factories Act 1948*, *Industrial Disputes Act 1947*, and *Payment of Wages Act 1936*), Parliament consolidated and modernized Indian labour legislation into Four Comprehensive Codes:",
      },
      {
        type: "ol",
        items: [
          "_Code on Wages, 2019_: Consolidates 4 statutes (Payment of Wages Act, Minimum Wages Act, Payment of Bonus Act, Equal Remuneration Act). Introduces a universal statutory **National Floor Wage** applicable across all sectors (organized and unorganized) without gender discrimination.",
          "_Industrial Relations Code, 2020_: Consolidates 3 statutes (Trade Unions Act 1926, Industrial Employment Standing Orders Act 1946, Industrial Disputes Act 1947). Raises the threshold for requiring prior government permission for lay-offs, retrenchment, and closure from 100 workers to **300 workers**, promoting manufacturing scalability.",
          "_Occupational Safety, Health and Working Conditions (OSH) Code, 2020_: Consolidates 13 statutes (Factories Act, Mines Act, Contract Labour Act, Inter-State Migrant Workmen Act). Standardizes safety equipment, health audits, annual medical examinations, and enables the employment of women in night shifts with mandatory safety and transport safeguards.",
          "_Code on Social Security, 2020_: Consolidates 9 statutes (EPF Act, ESI Act, Maternity Benefit Act, Payment of Gratuity Act). Landmark feature: Formally defines and extends statutory social security funds, disability cover, and health insurance to **Gig Workers and Platform Workers** (e.g. delivery drivers, ride-hailing drivers, freelance contractors).",
        ],
      },
      {
        type: "h3",
        text: "3. Recent Trends in the Indian Judiciary",
      },
      {
        type: "ul",
        items: [
          "_Digitization & e-Courts Project_: Nationwide deployment of virtual courts, video-conferencing hearings, e-filing of plaints, digital summons delivery via email/WhatsApp, and live-streaming of Supreme Court Constitutional Bench proceedings.",
          "_Expansion of Public Interest Litigation (PIL)_: Pioneered under Article 32 and 226, relaxing strict *locus standi* to protect human rights, eliminate child labour, eradicate bonded labour, and enforce corporate environmental emission norms (*M.C. Mehta environmental jurisprudence*).",
          "_Specialized Commercial Courts_: Fast-track adjudication of high-value commercial disputes with mandatory pre-institution mediation under the *Commercial Courts Act, 2015*.",
          "_Corporate Social Responsibility & Trustee Model_: Shift toward treating corporations as social organs holding duties to consumers, workers, suppliers, and the environment under Section 135 of the Companies Act, 2013.",
        ],
      },
    ],
  },
];
