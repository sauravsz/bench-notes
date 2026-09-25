import type { Course } from "./types";

export const businessEnvironmentCourse: Course = {
  id: "601",
  slug: "business-environment",
  code: "601",
  title: "Analysis of Business Environment",
  category: "Core",
  description:
    "Systematic analysis of macroeconomic, political, socio-cultural, technological, and international business environments influencing corporate strategy.",
  instructor: "Core Faculty",
  accentColor: "#0284C7",
  units: [
    "Introduction to Business Environment",
    "Economic & Political Environment",
    "Technological & Socio-Cultural Environment",
    "International Business & Global Trends",
  ],
  topics: [
    {
      id: "env-01",
      slug: "nature-scope-business-environment",
      number: 1,
      title: "Nature, Scope and Components of Business Environment",
      unit: "Introduction to Business Environment",
      summary:
        "Business environment comprises all external and internal factors that influence organizational decisions, operational performance, and strategic survival.",
      tags: ["environment", "internal", "external", "micro", "macro", "swot"],
      blocks: [
        {
          type: "p",
          text: "The business environment refers to the aggregate of all conditions, events, and influences that surround and affect an enterprise. It is dynamic, complex, multi-faceted, and exerts a profound impact on organizational longevity.",
        },
        {
          type: "h3",
          text: "1. Environmental Taxonomy: Internal vs. External Environment",
        },
        {
          type: "table",
          headers: ["Dimension", "Internal Environment (Controllable)", "External Environment (Uncontrollable)"],
          rows: [
            [
              "Definition",
              "Factors existing within the organizational boundary that can be directly managed and modified.",
              "Broad macro forces operating outside the firm that create opportunities and pose existential threats.",
            ],
            [
              "Key Components",
              "Value system, corporate mission, management structure, physical assets, R&D capability, and organizational culture.",
              "Divided into Micro (Customers, Competitors, Suppliers, Intermediaries) and Macro (PESTLE forces).",
            ],
            [
              "Strategic Tool",
              "Evaluated via VRIO Framework and Internal Value Chain Analysis.",
              "Evaluated via PESTLE Analysis, Porter's 5 Forces, and Scenario Planning.",
            ],
          ],
        },
        {
          type: "h3",
          text: "2. The PESTLE Analytical Framework",
        },
        {
          type: "ul",
          items: [
            "**Political Factors**: Government stability, taxation policy, foreign trade regulations, and political risk.",
            "**Economic Factors**: GDP growth rate, inflation rates, interest rates, exchange rates, and business cycles.",
            "**Socio-Cultural Factors**: Population demographics, consumer lifestyle shifts, cultural attitudes toward work and leisure.",
            "**Technological Factors**: R&D incentives, automation, artificial intelligence integration, and digital infrastructure.",
            "**Legal Factors**: Labor legislation, consumer protection laws, intellectual property rights, and antitrust regulations.",
            "**Environmental / Ecological Factors**: Carbon emission caps, climate risk mitigation, renewable energy mandates, and ESG standards.",
          ],
        },
      ],
    },
    {
      id: "env-02",
      slug: "monetary-fiscal-policies",
      number: 2,
      title: "Monetary and Fiscal Policies in India",
      unit: "Economic & Political Environment",
      summary:
        "Analysis of RBI's monetary instruments (Repo, Reverse Repo, CRR, SLR) and Government fiscal mechanisms (taxation, public expenditure, fiscal deficit).",
      tags: ["monetary", "fiscal", "rbi", "repo rate", "deficit", "inflation"],
      blocks: [
        {
          type: "p",
          text: "Monetary and fiscal policies represent the twin macroeconomic levers used to regulate economic growth, stabilize inflation, and foster capital formation in India.",
        },
        {
          type: "h3",
          text: "1. Monetary Policy Instruments (Reserve Bank of India)",
        },
        {
          type: "table",
          headers: ["Instrument", "Mechanism of Action", "Economic Impact on Business"],
          rows: [
            [
              "Repo Rate",
              "Interest rate at which RBI lends short-term funds to commercial banks against government securities.",
              "Rate hike increases corporate borrowing costs, curtailing capital expenditure and cooling demand-pull inflation.",
            ],
            [
              "Reverse Repo Rate / SDF",
              "Rate at which RBI absorbs surplus liquidity from commercial banks.",
              "Higher rates incentivize banks to park funds with RBI rather than lending to corporate borrowers.",
            ],
            [
              "Cash Reserve Ratio (CRR)",
              "Mandatory percentage of bank deposits (NDTL) that must be maintained in cash reserves with RBI.",
              "CRR hike immediately reduces lending capacity across the banking system.",
            ],
            [
              "Statutory Liquidity Ratio (SLR)",
              "Minimum percentage of deposits banks must invest in approved government securities and liquid assets.",
              "Ensures sovereign debt subscription and bank solvency.",
            ],
          ],
        },
      ],
    },
  ],
  examQuestions: [
    {
      id: "env-q1",
      number: 1,
      title: "PESTLE Analysis Framework in Strategic Decision Making",
      question:
        "Define the Business Environment. Critically examine the PESTLE analytical framework with practical examples from Indian industry.",
      relatedSlugs: ["nature-scope-business-environment"],
      blocks: [
        {
          type: "p",
          text: "The business environment comprises the totality of external forces, institutions, and factors that influence a firm's operational capabilities and competitive strategy. The PESTLE framework provides a structured macro-environmental scanning tool.",
        },
        {
          type: "h3",
          text: "Detailed Breakdown of PESTLE Dimensions with Indian Industry Applications",
        },
        {
          type: "table",
          headers: ["Dimension", "Core Macro Factors", "Indian Industry Case Illustration"],
          rows: [
            [
              "Political",
              "Policy stability, Ease of Doing Business initiatives, trade agreements, and Make in India incentives.",
              "Production Linked Incentive (PLI) schemes driving multi-billion dollar investments in electronics (Apple Foxconn, Tata Electronics).",
            ],
            [
              "Economic",
              "Interest rates, retail inflation (CPI), foreign exchange fluctuations, and infrastructure capital outlays.",
              "High capital expenditure allocation in Union Budget accelerating demand in infrastructure, cement, and steel sectors.",
            ],
            [
              "Socio-Cultural",
              "Urbanization, rising disposable income, nuclear family trends, and health consciousness.",
              "Surge in demand for organic foods, quick-commerce grocery delivery (Blinkit, Zepto), and fitness wearables.",
            ],
            [
              "Technological",
              "UPI digital payments infrastructure, 5G rollouts, cloud computing, and AI process automation.",
              "Fintech disruption transforming retail credit scoring and digital merchant payments.",
            ],
            [
              "Legal",
              "Insolvency and Bankruptcy Code (IBC 2016), GST regime, Consumer Protection Act 2019, and Digital Personal Data Protection (DPDP) Act.",
              "Mandatory compliance with DPDP data privacy standards for e-commerce and fintech platforms.",
            ],
            [
              "Environmental",
              "National Green Hydrogen Mission, EV subsidies (FAME policy), and Extended Producer Responsibility (EPR) on plastic packaging.",
              "Automobile OEMs (Tata Motors, Mahindra) transitioning vehicle portfolios to Electric Vehicles (EVs).",
            ],
          ],
        },
      ],
    },
  ],
  glossary: [
    {
      id: "env-g1",
      term: "PESTLE Analysis",
      body: "Strategic management framework used to scan the macro-environmental forces: Political, Economic, Socio-cultural, Technological, Legal, and Environmental.",
      topicSlug: "nature-scope-business-environment",
    },
  ],
};
