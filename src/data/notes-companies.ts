import type { Topic } from "./types";

export const companiesTopics: Topic[] = [
  {
    id: "companies-2013",
    slug: "companies-act-2013",
    number: 12,
    title: "Companies Act, 2013 — Objectives, Structure and Comparison with 1956",
    unit: "Companies Act, 2013",
    marks: 14,
    lecture: "11/09/26",
    summary:
      "The 2013 Act replaced the 1956 Act after political, economic and social change. It shortens the statute, raises private-company membership, introduces the One Person Company, and makes several governance rules mandatory.",
    tags: ["companies act", "2013", "1956", "CSR", "OPC"],
    blocks: [
      {
        type: "p",
        text: "The lecture introduces the Companies Act, 2013 by comparing it with the Companies Act, 1956, against a background of political, economic, and social change.",
      },
      {
        type: "quote",
        text: "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.",
        cite: "Charles Darwin",
      },
      {
        type: "h3",
        text: "Legislative milestones",
      },
      {
        type: "ul",
        items: [
          "2008–2009: introduction of the Companies Bill.",
          "2010–2012: Parliamentary Standing Committee reviews.",
          "2012: passed by the Lok Sabha (December 2012).",
          "2013: passed by the Rajya Sabha (August 2013) and received Presidential assent.",
        ],
      },
      {
        type: "h3",
        text: "Major objectives and governance reforms",
      },
      {
        type: "ul",
        items: [
          "Simplify company law and enhance ease of doing business.",
          "Improve corporate governance, transparency, and accountability.",
          "Provide stronger regulatory oversight (for example NFRA, SFIO, NCLT).",
          "Introduce Class Action Suits (Section 245) to safeguard minority shareholders.",
          "Enforce gender diversity: mandatory appointment of Women Directors.",
          "Ensure board independence: mandate at least one-third Independent Directors for listed companies.",
          "Limit tenure of Independent Directors (maximum two consecutive terms of 5 years).",
          "Make Corporate Social Responsibility (CSR) spending de facto mandatory (Section 135: 2% of average net profits).",
          "Improve reporting quality: mandatory consolidated financial statements covering unlisted subsidiaries and joint ventures.",
          "Mandatory statutory auditor rotation (individual: 5 years; firm: 10 years).",
        ],
      },
      {
        type: "h3",
        text: "Structural comparison: 1956 versus 2013",
      },
      {
        type: "table",
        headers: ["Parameter", "Companies Act, 1956", "Companies Act, 2013"],
        rows: [
          [
            "Structure",
            "13 Parts, 658 Sections, 15 Schedules",
            "29 Chapters, 470 Sections, 7 Schedules, 95 Definitions",
          ],
          [
            "Maximum members (private company)",
            "Maximum 50 members",
            "Maximum 200 members (Section 2(68))",
          ],
          [
            "One Person Company",
            "Did not exist",
            "Introduced One Person Company (OPC) (Section 2(62))",
          ],
          [
            "Certificate of Incorporation",
            "Treated as conclusive evidence",
            "Conclusive of registration; penal action permitted for fraud (Sections 7(7), 447)",
          ],
        ],
      },
      {
        type: "h3",
        text: "Key provisions compared",
      },
      {
        type: "ol",
        items: [
          "_Applicability_. 1956: extended to India with exceptions for Jammu and Kashmir / Sikkim. 2013: applicable to the entire territory of India (Section 1).",
          "_Maximum number of directors_. 1956: maximum 12; Central Government approval needed to exceed. 2013: maximum 15; can be increased beyond 15 by a Special Resolution without government approval (Section 149(1)).",
          "_Women director_. 1956: no statutory requirement. 2013: mandatory for all listed companies and public companies with paid-up capital ≥ ₹100 crore or turnover ≥ ₹300 crore (Section 149(1)).",
          "_Resident director_. 1956: no requirement. 2013: every company must have at least one director resident in India for ≥ 182 days in the financial year (Section 149(3)).",
          "_E-governance_. 1956: physical documentation and manual filings. 2013: mandatory electronic filings, electronic maintenance of records, and e-voting.",
          "_Memorandum of Association — object clause_. 1956: split into Main, Ancillary, and Other Objects. 2013: bifurcation eliminated; the MoA lists Main Objects and matters considered necessary in furtherance thereof.",
          "_Articles of Association — entrenchment_. 1956: no specific entrenchment provisions. 2013: specific statutory recognition of entrenchment clauses (Section 5(3)).",
          "_Exit option for dissenting shareholders_. 1956: no exit mechanism if unutilised IPO funds changed purpose. 2013: promoters must provide an exit option to dissenting shareholders if changing objects after raising money from the public (Sections 13(8), 27).",
          "_Bonus shares_. 1956: regulated by guidelines and articles. 2013: comprehensive statutory rules enacted under Section 63.",
          "_Corporate Social Responsibility_. 1956: voluntary; no statutory mandate. 2013: mandatory CSR Committee and 2% net profit allocation for qualifying companies (Section 135).",
        ],
      },
      {
        type: "maxim",
        latin: "Nil Utile Aut Honestum Quod Legibus Contrarium",
        meaning: "Nothing is useful nor honourable that is contrary to law.",
      },
      {
        type: "h3",
        text: "Closing point for a 14-mark answer",
      },
      {
        type: "p",
        text: "The 2013 Act is shorter, more definition-heavy, and more governance-driven than the 1956 Act. Private companies may have 200 members. A single person may form an OPC. Women directors, resident directors, independent directors, auditor rotation, class action, and CSR are statutory, not optional.",
      },
    ],
  },
  {
    id: "company-types",
    slug: "companies-types-incorporation",
    number: 13,
    title: "Business Enterprises, Types of Companies, Incorporation and Securities",
    unit: "Companies Act, 2013",
    marks: 14,
    lecture: "18/09/26",
    summary:
      "Enterprises are corporate or non-corporate. Companies are then typed by liability, membership, control, and special status. Incorporation has been simplified, and fraud at incorporation is a non-bailable offence.",
    tags: ["OPC", "private company", "public company", "incorporation", "prospectus"],
    blocks: [
      {
        type: "p",
        text: "Finish company law by classifying business enterprises, listing the types of company under the 2013 Act, and stating the incorporation and prospectus reforms.",
      },
      {
        type: "h3",
        text: "Classification of business enterprises",
      },
      {
        type: "h4",
        text: "Corporate",
      },
      {
        type: "ul",
        items: [
          "Registered companies (limited by shares, limited by guarantee, unlimited).",
          "Statutory corporations (created by special Acts of Parliament or a State Legislature).",
          "Co-operative societies.",
        ],
      },
      {
        type: "h4",
        text: "Non-corporate",
      },
      {
        type: "ul",
        items: [
          "Sole proprietorship",
          "Partnership firm (Indian Partnership Act, 1932)",
          "Hindu Undivided Family (HUF)",
          "Public-Private Partnerships (PPP) and Joint Ventures",
        ],
      },
      {
        type: "h3",
        text: "Socio-economic jurisprudence of a corporation",
      },
      {
        type: "ul",
        items: [
          "_Traditional / capitalist view_: a company is private property; shareholders are the absolute owners.",
          "_Modern socio-economic view_: a company is a social institution; shareholders are capital suppliers entitled to a reasonable return, while the company owes duties to employees, consumers, suppliers, and society.",
        ],
      },
      {
        type: "h3",
        text: "Types of companies by liability",
      },
      {
        type: "ul",
        items: [
          "_Company limited by shares (Section 2(22))_: liability of members limited by the MoA to the amount unpaid on shares held.",
          "_Company limited by guarantee (Section 2(21))_: liability limited to the amount undertaken to be contributed to company assets in the event of winding up.",
          "_Unlimited company (Section 2(92))_: no limit on the liability of its members.",
        ],
      },
      {
        type: "h3",
        text: "Types of companies by number of members and scale",
      },
      {
        type: "ul",
        items: [
          "_One Person Company (OPC) (Section 2(62))_: a private company with only 1 person as a member.",
          "_Private company (Section 2(68))_: restricts share transferability, limits members to 200, and prohibits public subscription.",
          "_Public company (Section 2(71))_: not a private company; minimum 7 members, no upper limit.",
          "_Small company (Section 2(85))_: other than a public company; paid-up share capital does not exceed ₹50 lakhs (or prescribed up to ₹4 crore / ₹10 crore); turnover does not exceed ₹2 crore (or prescribed up to ₹40 crore / ₹100 crore). This does not apply to holding or subsidiary companies, Section 8 companies, or statutory companies.",
        ],
      },
      {
        type: "h3",
        text: "Types of companies by control and relationship",
      },
      {
        type: "ul",
        items: [
          "_Holding company (Section 2(46))_: a company of which other companies are subsidiaries.",
          "_Subsidiary company (Section 2(87))_: a company where the holding company controls board composition or holds more than 50% of voting power.",
          "_Associate company (Section 2(6))_: a company in which another company has significant influence (≥ 20% voting power or control of business decisions), not being a subsidiary, including a joint venture.",
        ],
      },
      {
        type: "h3",
        text: "Special categories",
      },
      {
        type: "ul",
        items: [
          "_Section 8 company_: charitable companies for promoting commerce, art, science, sports, education, research, social welfare, religion, charity, or environmental protection. Profits are applied to objects; dividend distribution is prohibited.",
          "_Government company (Section 2(45))_: ≥ 51% paid-up share capital held by the Central Government, State Government(s), or jointly.",
          "_Foreign company (Section 2(42))_: incorporated outside India with a place of business in India (physically or electronically) and conducting business activities in India.",
          "_Listed company (Section 2(52))_: has any of its securities listed on a recognised stock exchange.",
        ],
      },
      {
        type: "h3",
        text: "Key preliminary definitions",
      },
      {
        type: "ul",
        items: [
          "_Key Managerial Personnel (KMP) (Section 2(51))_: CEO, Managing Director, Manager, Company Secretary (CS), Whole-time Director, CFO.",
          "_Independent Director (Section 149(6))_: defined with objective criteria of independence and integrity.",
          "_Auditing standards (NFRA)_: statutory recognition and enforcement of mandatory auditing and accounting standards.",
          "_Promoter (Section 2(69))_: statutorily defined based on control and role in the prospectus or annual return.",
          "_Related party (Section 2(76)) and related party transactions (Section 188)_: comprehensive coverage of directors, KMP, relatives, holding, subsidiary, and associate entities.",
          "_Officer in default (Section 2(60))_: scope expanded to include KMP, share transfer agents, merchant bankers, and registrars.",
          "_Subsidiary of a public company_: deemed to be a public company for statutory purposes even if its articles retain private company restrictions.",
          "_Employee Stock Option (ESOP)_: defined and statutorily permitted for employees or directors of holding and subsidiary companies.",
        ],
      },
      {
        type: "h3",
        text: "Reforms in company incorporation",
      },
      {
        type: "ul",
        items: [
          "Simplified MoA objects clause: elimination of the \"other objects\" category; focus on main objects and matters incidental thereto.",
          "OPC introduction: single entrepreneur incorporation with limited liability.",
          "Streamlined conversion between private, public, and OPC structures.",
          "Standard financial year: uniform fiscal year (1 April to 31 March) for all companies (NCLT exceptions for foreign consolidation).",
          "RoC enforcement: powers granted to the Registrar of Companies to strike off names of defunct companies or those incorporated through false representations.",
        ],
      },
      {
        type: "h3",
        text: "Fraudulent incorporation and penalties",
      },
      {
        type: "ul",
        items: [
          "_Section 447 (Punishment for fraud)_: any person deliberately furnishing false or incorrect information or suppressing material facts during incorporation is liable under Section 447. It is a non-bailable criminal offence, with imprisonment from 6 months up to 10 years and fine.",
          "_Powers of the Tribunal (Section 7(7))_: any person can challenge the validity of incorporation before the National Company Law Tribunal (NCLT). NCLT can order regulation of management, direct changes in MoA or AoA, make liability of members unlimited, or order winding up.",
        ],
      },
      {
        type: "h3",
        text: "Prospectus and allotment of securities (Chapter III)",
      },
      {
        type: "ul",
        items: [
          "The chapter covers all securities (shares, debentures, bonds, derivatives) rather than just shares.",
          "Public companies raise funds by public offer (IPO / FPO), private placement (Section 42), and rights issue or bonus issue (Sections 62 and 63).",
          "If a company varies the terms of a contract or the objects stated in the prospectus, it is statutorily prohibited from using prospectus funds to buy, trade, or deal in equity shares of any other listed company.",
        ],
      },
      {
        type: "h3",
        text: "Closing point for a 14-mark answer",
      },
      {
        type: "p",
        text: "Classify first (corporate or not; then by liability, membership, control, and special status). Then state that incorporation is simpler, but false incorporation is a serious criminal offence, and that public fundraising is now about securities, not only shares.",
      },
    ],
  },
];
