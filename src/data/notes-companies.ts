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
      "The 2013 Act replaced the 1956 statute to modernize corporate governance, introduce One Person Companies, mandate CSR, and establish the National Company Law Tribunal (NCLT).",
    tags: ["companies act", "2013", "1956", "CSR", "OPC", "salomon", "corporate veil"],
    blocks: [
      {
        type: "p",
        text: "The Companies Act, 2013 (Act No. 18 of 2013) received Presidential assent on 29th August 2013. It completely overhauled Indian corporate jurisprudence, replacing the legacy Companies Act, 1956. Engineered for economic liberalization, digital compliance, investor empowerment, and corporate social accountability, the 2013 Act contains 470 Sections organized into 29 Chapters and 7 Schedules.",
      },
      {
        type: "h3",
        text: "1. Core Characteristics of a Company (*Salomon Principle*)",
      },
      {
        type: "ul",
        items: [
          "_Independent Corporate Personality (*Salomon v. Salomon & Co. Ltd. [1897] AC 22*)_: A company is a distinct legal entity in the eyes of law, separate and independent from its shareholders, promoters, and directors. Aron Salomon sold his boot business to a company formed by him and his family. Upon liquidation, unsecured creditors claimed priority over Salomon's debentures. House of Lords held: The company is an independent legal person; Salomon as secured debenture holder was entitled to priority over unsecured creditors.",
          "_Perpetual Succession_: The existence of a company is not affected by the death, insanity, insolvency, or exit of its members. *'Members may come and members may go, but the company goes on forever.'*",
          "_Limited Liability_: Liability of members is limited to the unpaid amount on shares held by them (in companies limited by shares), or the guaranteed sum agreed in the MoA (in guarantee companies).",
          "_Separate Property (*Macaura v. Northern Assurance Co. [1925]*)_: Company assets belong to the company, not to individual shareholders.",
          "_Capacity to Sue and Be Sued_: A company can institute legal suits in its own corporate name and can be sued by third parties.",
          "_Common Seal_: Optional under the 2015 Amendment Act. Documents can be authenticated by two directors, or one director and the Company Secretary.",
        ],
      },
      {
        type: "h3",
        text: "2. Doctrine of Lifting / Piercing the Corporate Veil",
      },
      {
        type: "p",
        text: "Although a company is a separate legal person, courts will lift or disregard the corporate veil to look at the real human agents behind the company where the corporate form is abused for fraud, tax evasion, or illegal conduct:",
      },
      {
        type: "table",
        headers: ["Ground for Lifting the Veil", "Landmark Case Law", "Legal Principle & Practical Application"],
        rows: [
          [
            "Prevention of Fraud or Improper Conduct",
            "*Gilford Motor Co. v. Horne [1933]*",
            "A former employee bound by a non-compete covenant formed a dummy company to solicit his former employer's clients. Injunction was granted against both him and his company.",
          ],
          [
            "Protection of Revenue / Tax Evasion",
            "*Sir Dinshaw Maneckjee Petit [1927]*",
            "An assessee created four dummy private investment companies solely to divert dividend income and evade super-tax. Court disregarded the separate entities and taxed him directly.",
          ],
          [
            "Determination of Enemy Character in Wartime",
            "*Daimler Co. Ltd. v. Continental Tyre & Rubber Co. [1916]*",
            "A company incorporated in England whose entire share capital (except one share) was held by German nationals was held to possess enemy character during WWI.",
          ],
          [
            "Avoidance of Welfare / Labour Legislation",
            "*Workmen of Associated Rubber Industry Ltd. [1986] SC*",
            "A company created a wholly owned subsidiary to siphon off profits and reduce statutory bonus payable to workmen. Supreme Court pierced the veil and merged profits for bonus calculation.",
          ],
        ],
      },
      {
        type: "h3",
        text: "3. Major Structural Shifts: 1956 vs. 2013 Companies Act",
      },
      {
        type: "table",
        headers: ["Feature / Parameter", "Companies Act, 1956", "Companies Act, 2013"],
        rows: [
          [
            "Sections & Structure",
            "658 Sections, 15 Schedules. Rigid, bulky, process-heavy.",
            "470 Sections, 29 Chapters, 7 Schedules. Agile, rule-based delegated legislation.",
          ],
          [
            "One Person Company (OPC)",
            "Not recognized. Minimum 2 members required.",
            "Introduced under Section 2(62) for individual entrepreneurs.",
          ],
          [
            "Private Company Limit",
            "Maximum 50 members.",
            "Maximum 200 members (Section 2(68)).",
          ],
          [
            "Corporate Social Responsibility",
            "Voluntary philanthropy; zero statutory mandate.",
            "Mandatory under Section 135 (2% net profits for qualifying companies).",
          ],
          [
            "Adjudication Forum",
            "Company Law Board (CLB) and High Courts.",
            "National Company Law Tribunal (NCLT) & NCLAT.",
          ],
          [
            "Board Diversity",
            "No statutory mandate for women or independent directors.",
            "Mandatory at least 1 Woman Director and 1/3rd Independent Directors for listed firms.",
          ],
          [
            "Fraud Investigation & Penalties",
            "General Department of Company Affairs inspections.",
            "Statutory Serious Fraud Investigation Office (SFIO) under Sec 211; stringent Sec 447 fraud penalties.",
          ],
        ],
      },
      {
        type: "h3",
        text: "4. Deep Dive: Mandatory CSR Framework (Section 135)",
      },
      {
        type: "ul",
        items: [
          "_Applicability Thresholds (Any ONE during immediately preceding financial year)_: (a) Net Worth ≥ ₹500 Crore, OR (b) Turnover ≥ ₹1,000 Crore, OR (c) Net Profit ≥ ₹5 Crore.",
          "_CSR Committee Composition_: 3 or more directors, including at least one Independent Director.",
          "_Mandatory Spend Formula_: Minimum **2% of the average net profits** of the company made during the three immediately preceding financial years.",
          "_Approved Schedule VII Activities_: Eradicating hunger/poverty, healthcare, education, gender equality, environmental sustainability, PM National Relief Fund / PM CARES.",
          "_Treatment of Unspent CSR Funds_: Unspent amounts relating to ongoing projects must be transferred to a special 'Unspent CSR Account' in a scheduled bank within 30 days and spent within 3 fiscal years; otherwise transferred to specified Schedule VII funds within 6 months.",
        ],
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
      "Enterprises are classified by liability, membership, control, and special purpose. Incorporation is streamlined via SPICe+, while fraudulent incorporation incurs Section 447 penal liability.",
    tags: ["OPC", "private company", "public company", "incorporation", "prospectus", "SPICe+", "section 8"],
    blocks: [
      {
        type: "p",
        text: "Modern commercial enterprise law categorizes business organizations into corporate and non-corporate entities, with registered companies classified based on liability, membership scale, ownership control, and special statutory objectives.",
      },
      {
        type: "h3",
        text: "1. Broad Classification of Business Enterprises",
      },
      {
        type: "ul",
        items: [
          "_Corporate Enterprises_: Registered Companies (under Companies Act, 2013), Statutory Corporations (established by special Acts of Parliament, e.g. LIC, RBI, SBI), and Co-operative Societies.",
          "_Non-Corporate Enterprises_: Sole Proprietorships, Partnership Firms (*Indian Partnership Act, 1932*), Hindu Undivided Family (HUF) businesses governed by Hindu Succession Act, and Joint Ventures.",
        ],
      },
      {
        type: "h3",
        text: "2. Types of Companies Under the Companies Act, 2013",
      },
      {
        type: "h4",
        text: "Classification by Liability of Members",
      },
      {
        type: "ul",
        items: [
          "_Company Limited by Shares (Section 2(22))_: The liability of each member is limited to the amount, if any, unpaid on the shares held by him. Most commercial companies (e.g. Tata Motors Ltd, Infosys Ltd) belong to this category.",
          "_Company Limited by Guarantee (Section 2(21))_: The liability of members is limited to such amount as the members undertake to contribute to the assets of the company in the event of winding up. Common in trade associations, clubs, and research societies.",
          "_Unlimited Company (Section 2(92))_: A company where there is no statutory limit on the personal liability of its members; members are liable to contribute to company debts in full upon liquidation.",
        ],
      },
      {
        type: "h4",
        text: "Classification by Number of Members & Scale",
      },
      {
        type: "ul",
        items: [
          "_One Person Company (OPC) (Section 2(62))_: A private company with only **one natural Indian citizen member**. Requires nomination of another person who shall become the member in the event of the sole member's death or incapacity.",
          "_Private Company (Section 2(68))_: Requires a minimum of 2 members and restricts maximum members to **200** (excluding current/former employees). By its Articles of Association, it: (a) Restricts the right to transfer shares, and (b) Prohibits any invitation to the public to subscribe for securities.",
          "_Public Company (Section 2(71))_: A company which is NOT a private company. Requires a minimum of **7 members** with **no upper ceiling** on membership, and minimum 3 directors. Can invite public subscription for shares and debentures.",
          "_Small Company (Section 2(85))_: A private company whose: (a) Paid-up share capital does not exceed ₹4 Crore, AND (b) Turnover does not exceed ₹40 Crore. Enjoys simplified compliance, fewer board meetings, and exemption from cash flow statements.",
        ],
      },
      {
        type: "h4",
        text: "Classification by Ownership & Control",
      },
      {
        type: "ul",
        items: [
          "_Holding Company (Section 2(46))_: A company of which other companies are subsidiary companies.",
          "_Subsidiary Company (Section 2(87))_: A company in which the holding company: (a) Controls the composition of the Board of Directors, OR (b) Exercises or controls more than one-half (50%) of the total voting power.",
          "_Associate Company (Section 2(6))_: A company in which another company has significant commercial influence (at least **20% of total voting power** or control of business decisions), but which is not a subsidiary.",
          "_Government Company (Section 2(45))_: A company in which not less than **51% of the paid-up share capital** is held by the Central Government, State Government(s), or jointly (e.g. BHEL, ONGC, SAIL).",
          "_Foreign Company (Section 2(42))_: A company incorporated outside India that has an established place of business in India (physically or electronically) and conducts business operations in India.",
          "_Section 8 Company (Charitable / Non-Profit Company)_: Formed for promoting commerce, art, science, sports, education, research, social welfare, charity, or environmental protection. Profits must be applied solely toward promoting its objects; payment of dividends to members is strictly prohibited.",
        ],
      },
      {
        type: "h3",
        text: "3. Memorandum of Association (MoA) and Articles of Association (AoA)",
      },
      {
        type: "table",
        headers: ["Parameter", "Memorandum of Association (MoA - Section 4)", "Articles of Association (AoA - Section 5)"],
        rows: [
          [
            "Nature & Purpose",
            "Fundamental charter of the company; defines its constitution, powers, and outer operational boundaries with the outside world.",
            "Internal regulations and bylaws governing the day-to-day management and internal administration of the company.",
          ],
          [
            "Mandatory Clauses",
            "6 Clauses: (1) Name Clause, (2) Registered Office Clause, (3) Objects Clause, (4) Liability Clause, (5) Capital Clause, (6) Association/Subscription Clause.",
            "Rules regarding share allotment, transfer, forfeiture, director appointment, board meetings, voting, and dividend distribution.",
          ],
          [
            "Doctrine of Ultra Vires",
            "Any act done beyond the scope of the Objects Clause of the MoA is **ultra vires** (beyond powers) and void *ab initio*; it cannot be ratified even by unanimous shareholder vote (*Ashbury Railway Carriage v. Riche*).",
            "Acts ultra vires the Articles but intra vires the Memorandum can be ratified by a special resolution of shareholders.",
          ],
          [
            "Doctrine of Indoor Management",
            "Not applicable to MoA (Constructive Notice applies).",
            "*Turquand Rule*: Outsiders dealing with the company are entitled to assume that internal regulations of the AoA have been complied with (*Royal British Bank v. Turquand*).",
          ],
        ],
      },
      {
        type: "h3",
        text: "4. Incorporation Reforms & Section 447 Fraud Liability",
      },
      {
        type: "ul",
        items: [
          "_Simplified Digital Incorporation (SPICe+ Form)_: Integrated single-window electronic filing on MCA21 portal covering Name Reservation (RUN), Incorporation, DIN allocation, PAN, TAN, EPFO, ESIC, Professional Tax, and mandatory Bank Account opening in one submission.",
          "_Section 447 (Punishment for Corporate Fraud)_: Providing false, deceptive, or misleading information or suppressing material facts during incorporation is a severe **non-bailable criminal offence**. Punishment: Imprisonment from 6 months to 10 years + fine up to 3 times the amount involved in the fraud.",
          "_NCLT Powers on Fraudulent Incorporation (Section 7(7))_: The National Company Law Tribunal is empowered to: (a) Regulate management, (b) Make member liability unlimited, (c) Remove company name from RoC, or (d) Order compulsory winding up.",
        ],
      },
    ],
  },
];
