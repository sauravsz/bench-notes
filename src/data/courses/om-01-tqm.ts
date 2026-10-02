import { Course } from "./types";

export const tqmCourse: Course = {
  id: "om-01",
  code: "OM 01",
  title: "Total Quality Management",
  slug: "tqm",
  category: "Operations",
  accentColor: "sky",
  instructor: "Prof. Operations & Quality Engineering",
  description:
    "Comprehensive master examination notes, quantitative formulations, analytical frameworks, and 14-mark model exam answers for Total Quality Management (TQM), Statistical Process Control (SPC), Quality Engineering, Strategic Sourcing, and Lean Six Sigma.",
  units: [
    "Mid Sem Important",
    "Principles & Philosophies of TQM",
    "Benchmarking, Customer Needs & Quality Engineering",
    "Operations Quality, SPC & 7 QC Tools",
    "Six Sigma, Lean, Quality Systems & Awards"
  ],
  topics: [
    // ==========================================
    // UNIT: MID SEM IMPORTANT (7 CORE TOPICS)
    // ==========================================
    {
      id: "midsem-om01-topic-1",
      slug: "midsem-benchmarking-12-stages",
      number: 101,
      title: "What is Benchmarking? The 12 Stages of Benchmarking (AT&T Model)",
      unit: "Mid Sem Important",
      marks: 14,
      lecture: "Mid-Sem Master Notes · Benchmarking Foundations",
      summary:
        "Comprehensive 14-mark master note on benchmarking: foundational definitions (APQC, Bogan & English), strategic purpose, and step-by-step breakdown of the 12 stages (AT&T Model) from Subject Selection to Review & Recalibration.",
      tags: [
        "Mid Sem Important",
        "Benchmarking Definition",
        "12 Stages",
        "AT&T Model",
        "Process Differences",
        "Recalibration"
      ],
      blocks: [
        {
          type: "h3",
          text: "Definition & Conceptual Foundations of Benchmarking"
        },
        {
          type: "p",
          text: "Benchmarking is the continuous, systematic process of measuring an organization's products, services, processes, and practices against recognized industry leaders or world-class organizations to identify performance gaps, establish stretch targets, and adapt superior practices for breakthrough operational improvement."
        },
        {
          type: "ul",
          items: [
            "**American Productivity and Quality Center (APQC) Definition**: The process of identifying, understanding, and adapting outstanding practices and processes from organizations anywhere in the world to help an organization improve its performance.",
            "**Bogan and English Definition**: An ongoing outreach activity whose goal is the identification of best operating practices that, when implemented, produce superior performance.",
            "**Core Operating Principle**: Benchmarking focuses on understanding *how* the best-in-class achieve their performance levels and using that knowledge for adaptive creativity. It is not copying or industrial espionage, but an organized framework to avoid reinventing the wheel."
          ]
        },
        {
          type: "quote",
          text: "Benchmarking = Measuring Performance Against Best-in-Class + Understanding Process Differences + Creative Adaptation"
        },
        {
          type: "h3",
          text: "The 12 Stages of the Benchmarking Process (AT&T Model)"
        },
        {
          type: "table",
          headers: ["Stage Number & Name", "Core Operational Action", "Key Deliverables / Methods", "Industrial Benchmark Example"],
          rows: [
            [
              "**1. Select Subject**",
              "Determine critical business processes or bottlenecks directly impacting customer satisfaction and cost structures.",
              "Pareto analysis, Critical-to-Quality (CTQ) trees, customer complaint logs.",
              "*An industrial pump maker targets custom pump delivery lead time (16 weeks) as its primary lost-order driver.*"
            ],
            [
              "**2. Define the Process**",
              "Thoroughly map and document current internal process workflows and baseline performance metrics.",
              "Detailed process flowcharts, cycle time baselines, first-pass yield, defect PPM.",
              "*Mapping all 24 sequential engineering and administrative steps required to process an Engineering Change Order (ECO).*"
            ],
            [
              "**3. Identify Potential Partners**",
              "Screen world-class performers, competitors, or non-competing firms recognized for excellence in the target process.",
              "Internal business units, direct competitors, functional leaders, cross-industry pioneers.",
              "*Southwest Airlines identifying Formula 1 racing pit crews as potential partners for aircraft gate turnaround.*"
            ],
            [
              "**4. Identify Data Sources**",
              "Determine information-gathering avenues and data repositories required to analyze partner practices.",
              "Industry databases (APQC, IBID), trade journals, SEC filings, regulatory disclosures, professional surveys.",
              "*Consulting the Open Standards Benchmarking database and IEEE technical publications.*"
            ],
            [
              "**5. Collect Data and Select Partners**",
              "Establish mutual benchmarking protocols, confidentiality agreements, and conduct structured site visits.",
              "Questionnaires, structured plant walkthroughs, executive interviews, focus groups.",
              "*Conducting structured site visits at a leading Japanese electronics plant to inspect automated pick-and-place lines.*"
            ],
            [
              "**6. Determine the Gap**",
              "Quantify the performance delta between internal operations and the benchmark partner's metrics.",
              "Gap analysis: Negative Gap (lagging), Parity (equal), or Positive Gap (leading).",
              "*Calculating an order fulfillment gap of 5 days (internal: 7 days vs. benchmark partner: 2 days).*"
            ],
            [
              "**7. Establish Process Differences**",
              "Analyze root causes, enabling technologies, and managerial practices driving the partner's superior execution.",
              "Process practice comparison, technology audit, organizational structure mapping.",
              "*Discovering that the partner uses automated wireless barcode scanning and dynamic slotting rather than paper pick lists.*"
            ],
            [
              "**8. Target Future Performance**",
              "Project the future performance trajectory of the partner to avoid aiming at an obsolete standard ('moving target').",
              "Forecasted partner trajectory, internal stretch goals surpassing partner's current baseline.",
              "*Setting a 2-year internal target of 1.5 days lead time when the benchmark partner currently operates at 2.0 days.*"
            ],
            [
              "**9. Communicate**",
              "Disseminate benchmarking findings, gap analyses, and business cases to leadership and process owners.",
              "Executive briefings, shop-floor town halls, change management communication plans.",
              "*Presenting data showing that adopting automated picking workflows will reduce unit labor costs by 32%.*"
            ],
            [
              "**10. Adjust Goal**",
              "Integrate validated benchmarking targets into formal strategic planning, annual budgets, and departmental KPIs.",
              "Revised functional goals, balanced scorecards, managerial performance metrics.",
              "*Tying plant manager annual bonus criteria directly to achieving a 99.2% on-time order dispatch rate.*"
            ],
            [
              "**11. Implement**",
              "Execute action plans: re-engineer workflows, procure tooling, install software, update SOPs, and train staff.",
              "Work Breakdown Structure (WBS), Gantt/PERT charts, standard operating procedures, training modules.",
              "*Installing a modern Warehouse Management System (WMS) and training 120 logistics operators on voice-directed picking.*"
            ],
            [
              "**12. Review & Recalibrate**",
              "Monitor performance against benchmark projections and periodically reset higher standards as industry advances.",
              "Ongoing KPI dashboards, periodic partner re-audits, continuous PDCA improvement cycles.",
              "*Conducting bi-annual reviews of warehouse pick rates to establish new stretch targets once the 2-day goal is met.*"
            ]
          ]
        }
      ]
    },
    {
      id: "midsem-om01-topic-2",
      slug: "midsem-7-types-of-benchmarking",
      number: 102,
      title: "The Seven Strategic Types of Benchmarking and Industrial Applications",
      unit: "Mid Sem Important",
      marks: 14,
      lecture: "Mid-Sem Master Notes · Benchmarking Taxonomy",
      summary:
        "Comprehensive 14-mark master note analyzing the Seven Types of Benchmarking: Process, Performance, Product, Strategic, Functional, Best-in-Class, and Operational Benchmarking with full comparison matrix and case studies.",
      tags: [
        "Mid Sem Important",
        "Types of Benchmarking",
        "Process Benchmarking",
        "Strategic Benchmarking",
        "Functional Benchmarking",
        "Best-in-Class"
      ],
      blocks: [
        {
          type: "h3",
          text: "Taxonomy of the Seven Types of Benchmarking"
        },
        {
          type: "table",
          headers: ["Benchmarking Type", "Core Analytical Focus", "Organizational Scope", "Primary Strategic Benefit", "Benchmark Industrial Example"],
          rows: [
            [
              "**1. Process Benchmarking**",
              "Discrete operational workflows, work methods, and step-by-step cycle times.",
              "Cross-industry or cross-functional",
              "Radically reduces cycle times and eliminates non-value-added waste (Muda).",
              "*Hospital emergency departments benchmarking patient intake and triage against Formula 1 pit-stop coordination.*"
            ],
            [
              "**2. Performance Benchmarking**",
              "Quantitative metric comparison of pricing, technical specifications, and operating speed.",
              "Direct competitors or industry peers",
              "Establishes competitive market positioning and baseline metric targets.",
              "*Smartphone manufacturers comparing processor clock speeds, battery discharge rates, and low-light camera sensors.*"
            ],
            [
              "**3. Product Benchmarking**",
              "Physical product teardowns, reverse engineering, and feature-by-feature cost analysis.",
              "Competing products and direct market substitutes",
              "Uncovers competitor design architectures, material selections, and manufacturing cost structures.",
              "*Automotive OEMs tearing down competitor electric vehicles to analyze chassis metallurgy, weld spacing, and battery pack modularity.*"
            ],
            [
              "**4. Strategic Benchmarking**",
              "High-level business models, core competencies, corporate alliances, and market positioning.",
              "Global industry leaders and diversified corporations",
              "Guides long-term corporate transformations, diversification, and new technology investments.",
              "*Traditional automotive OEMs benchmarking electric vehicle startups' direct-to-consumer sales models and over-the-air software architectures.*"
            ],
            [
              "**5. Functional Benchmarking**",
              "Specific corporate functions (e.g., procurement, billing, logistics, human resources).",
              "Similar functional leaders across non-competing sectors",
              "Overcomes industry-specific blind spots; external partners readily share non-proprietary functional data.",
              "*Commercial airlines benchmarking customer loyalty management and dynamic revenue pricing algorithms against global hotel chains.*"
            ],
            [
              "**6. Best-in-Class Benchmarking**",
              "Universally acknowledged single best performer worldwide for a specific process.",
              "Across all global industries regardless of domain",
              "Yields revolutionary breakthroughs and industry-redefining operational paradigms.",
              "*Xerox benchmarking its logistics and warehouse picking operations against L.L. Bean to achieve a 50% reduction in warehouse labor costs.*"
            ],
            [
              "**7. Operational Benchmarking**",
              "Frontline shop-floor practices, workstation ergonomics, tooling setup, and daily routines.",
              "Internal factory cells or direct manufacturing peers",
              "Drives immediate incremental shop-floor productivity, setup reduction, and equipment availability.",
              "*Machining workshops benchmarking Single-Minute Exchange of Die (SMED) changeover routines against high-speed stamping plants.*"
            ]
          ]
        }
      ]
    },
    {
      id: "midsem-om01-topic-3",
      slug: "midsem-dimensions-of-quality-garvin-servqual",
      number: 103,
      title: "Dimensions of Quality: Garvin's 8 Product Dimensions vs. SERVQUAL 5 Dimensions",
      unit: "Mid Sem Important",
      marks: 14,
      lecture: "Mid-Sem Master Notes · Quality Dimensions",
      summary:
        "Comprehensive 14-mark master note comparing David A. Garvin's Eight Dimensions of Product Quality with Parasuraman, Zeithaml & Berry's Five SERVQUAL Dimensions of Service Quality with concrete examples.",
      tags: [
        "Mid Sem Important",
        "Quality Dimensions",
        "Garvin 8 Dimensions",
        "SERVQUAL",
        "RATER Model",
        "Service Quality"
      ],
      blocks: [
        {
          type: "h3",
          text: "David Garvin's Eight Dimensions of Product Quality"
        },
        {
          type: "table",
          headers: ["Product Dimension", "Strategic Operational Definition", "Engineering / Audit Criteria", "Practical Industrial Example"],
          rows: [
            [
              "**1. Performance**",
              "A product's primary operating characteristics and baseline functional execution.",
              "Speed, acceleration, resolution, processing throughput, fuel economy.",
              "*A high-speed laser printer outputting 45 pages per minute at 1200 DPI resolution.*"
            ],
            [
              "**2. Features**",
              "Secondary characteristics that supplement the basic functioning of the product.",
              "Number of auxiliary options, smart connectivity, ambient lighting, accessory integration.",
              "*An automotive infotainment unit featuring Apple CarPlay, wireless charging, and head-up display.*"
            ],
            [
              "**3. Reliability**",
              "Probability of a product functioning successfully over a specified period under stated operating conditions without breakdown.",
              "Mean Time Between Failures (MTBF), failure rate ($\\lambda$), warranty claims per 1,000 units.",
              "*An aircraft turbine engine operating for 20,000 flight hours without unscheduled shop maintenance.*"
            ],
            [
              "**4. Conformance**",
              "The degree to which a product's physical design and operating characteristics meet established engineering blueprints.",
              "Process capability ($C_p, C_{pk}$), defect PPM, dimensional tolerance limits ($[LSL, USL]$).",
              "*A CNC-machined automotive crankshaft held to an exact diameter of $40.000\\text{ mm} \\pm 0.005\\text{ mm}$.*"
            ],
            [
              "**5. Durability**",
              "Measure of product operational lifespan; amount of use derived before physical deterioration dictates replacement over repair.",
              "Total operational lifespan (hours/years), Mean Time to Failure (MTTF), cyclic stress endurance.",
              "*A cast-iron industrial slurry pump operating for 25 years in an aggressive chemical mining environment.*"
            ],
            [
              "**6. Serviceability**",
              "The speed, courtesy, competence, and ease of product repair and maintenance.",
              "Mean Time to Repair (MTTR), modular replacement design, availability of spare parts.",
              "*An electric commercial delivery van designed with modular battery trays that can be swapped in under 10 minutes.*"
            ],
            [
              "**7. Aesthetics**",
              "Subjective sensory evaluation including visual appearance, tactile feel, sound profile, taste, or aroma.",
              "Surface finish, haptic feedback, acoustic resonance, panel gap alignment.",
              "*The acoustic dampening and solid tactile latching sound ('thud') of a luxury automobile door.*"
            ],
            [
              "**8. Perceived Quality**",
              "Subjective assessment based on brand reputation, corporate image, advertising, and country-of-origin signals.",
              "Net Promoter Score (NPS), brand equity valuation, consumer trust index.",
              "*A hospital purchasing diagnostic imaging hardware based on the manufacturer's 60-year global clinical reputation.*"
            ]
          ]
        },
        {
          type: "h3",
          text: "Parasuraman, Zeithaml & Berry's 5 SERVQUAL Service Quality Dimensions"
        },
        {
          type: "table",
          headers: ["SERVQUAL Dimension", "Operational Definition", "Key Service Audit Criteria", "Service Industry Benchmark"],
          rows: [
            [
              "**1. Reliability**",
              "Ability to perform the promised service dependably, accurately, and consistently without administrative errors.",
              "Zero billing errors, on-time flight arrival, accurate ledger reconciliation.",
              "*An automated securities stock exchange clearing 100,000 trades per second with zero ledger reconciliation discrepancies.*"
            ],
            [
              "**2. Responsiveness**",
              "Willingness to help customers and provide prompt, agile, and enthusiastic service.",
              "Average speed of answer (ASA), queue wait times, complaint resolution velocity.",
              "*An emergency roadside assistance provider dispatching a support vehicle to an accident scene within 15 minutes.*"
            ],
            [
              "**3. Assurance**",
              "Knowledge, competence, courtesy, and trustworthiness of employees that inspire customer confidence.",
              "Professional certifications, technical expertise, transparent explanation of procedural risks.",
              "*A board-certified wealth manager explaining fiduciary portfolio risk allocations with clarity to alleviate client anxiety.*"
            ],
            [
              "**4. Empathy**",
              "Caring, individualized, and compassionate attention provided to every individual customer.",
              "Personalized interaction, customized scheduling, understanding unique client constraints.",
              "*A specialized pediatric clinic offering personalized treatment schedules and dedicated parent counseling.*"
            ],
            [
              "**5. Tangibles**",
              "Physical facilities, equipment, communication materials, and clean appearance of personnel.",
              "Modern architecture, clean clinical spaces, intuitive digital user interfaces.",
              "*Clean, sterile hospital diagnostic suites equipped with modern digital monitoring displays and neatly groomed staff.*"
            ]
          ]
        }
      ]
    },
    {
      id: "midsem-om01-topic-4",
      slug: "midsem-strategic-purchasing-traditional-vs-strategic",
      number: 104,
      title: "Strategic Purchasing: Upstream Quality Genesis & Traditional vs. Strategic Comparison",
      unit: "Mid Sem Important",
      marks: 14,
      lecture: "Mid-Sem Master Notes · Strategic Procurement",
      summary:
        "Comprehensive 14-mark master note on Strategic Purchasing: the upstream genesis of quality, the 1-10-100 cost rule, and an in-depth 10-point architectural comparison between Traditional and Strategic Purchasing.",
      tags: [
        "Mid Sem Important",
        "Strategic Purchasing",
        "Traditional Purchasing",
        "TCO",
        "1-10-100 Rule",
        "Dock-to-Stock"
      ],
      blocks: [
        {
          type: "diagram",
          kind: "coq-paf-model",
          caption: "Cost of Quality PAF Architecture & 1-10-100 Prevention Leverage Multiplier"
        },
        {
          type: "h3",
          text: "The Strategic Role & Upstream Genesis of Purchasing"
        },
        {
          type: "p",
          text: "In modern Total Quality Management, quality begins upstream in Product Conceptual Design and Strategic Procurement / Supplier Relationships. Quality cannot be inspected into a finished product; it must be designed into the blueprint and built into purchased raw materials and sub-assemblies."
        },
        {
          type: "ul",
          items: [
            "**Definition of Strategic Purchasing**: The systematic planning, evaluation, acquisition, and management of an enterprise's external resources, aligning procurement capabilities directly with long-term corporate strategic goals.",
            "**The 1-10-100 Rule of Quality Costs**:",
            "• *Design/Procurement Stage ($1.00)*: Cost to prevent a defect during supplier qualification and material specification.",
            "• *Manufacturing Stage ($10.00)*: Cost to catch, sort, and rework a defective component internally on the assembly line.",
            "• *Customer Hands ($100.00+)*: Cost of handling warranty claims, product recalls, and legal liabilities once a defect escapes into the field."
          ]
        },
        {
          type: "h3",
          text: "Traditional vs. Strategic Purchasing Comparison"
        },
        {
          type: "table",
          headers: ["Architectural Dimension", "Traditional Purchasing", "Strategic Purchasing (TQM Paradigm)"],
          rows: [
            [
              "**1. Relationship Model**",
              "Adversarial, arm's-length, and zero-sum; buyer exploits market power over supplier.",
              "Collaborative, long-term partnering; mutual win-win value creation and joint problem-solving."
            ],
            [
              "**2. Supply Base Structure**",
              "Large, fragmented supplier base to foster aggressive price bidding wars.",
              "Rationalized, small base of high-capability, certified tier-one suppliers."
            ],
            [
              "**3. Contract Duration**",
              "Short-term (annual or transaction-by-transaction purchase orders).",
              "Multi-year long-term agreements with shared risk and gain-sharing frameworks."
            ],
            [
              "**4. Selection Metric**",
              "Lowest unit purchase price tag at the point of quotation.",
              "Lowest **Total Cost of Ownership (TCO)**, evaluating acquisition, quality, logistics, maintenance, and disposal costs."
            ],
            [
              "**5. Quality Verification**",
              "Massive receiving inspection, counting, sorting, and scrapping at the factory receiving dock.",
              "**Dock-to-Stock Certification**: Supplier quality is guaranteed at source, eliminating incoming inspection entirely."
            ],
            [
              "**6. Information Exchange**",
              "Guarded, secretive, and restricted strictly to basic purchase orders and invoices.",
              "Transparent and open; real-time Electronic Data Interchange (EDI), shared demand forecasts, and joint CAD files."
            ],
            [
              "**7. Design Involvement**",
              "Late involvement; suppliers bid on finalized engineering drawings after design freeze.",
              "**Early Supplier Involvement (ESI)**: Suppliers participate during conceptual design, prototyping, and DFMEA stages."
            ],
            [
              "**8. Cost Reduction**",
              "Aggressive price haggling and supplier margin compression.",
              "Joint target costing, Value Analysis / Value Engineering (VAVE), and open-book cost breakdown modeling."
            ],
            [
              "**9. Process Capability**",
              "Acceptance of Acceptable Quality Levels (AQL) and scrap allowances.",
              "Mandatory statistical process capability ($C_p \\ge 1.33, C_{pk} \\ge 1.33$) and continuous pursuit of Zero Defects."
            ],
            [
              "**10. Supplier Development**",
              "Zero technical assistance; failing suppliers are immediately dropped.",
              "Active technical assistance: deploying customer quality engineers to train suppliers in SPC, Kaizen, and Lean."
            ]
          ]
        }
      ]
    },
    {
      id: "midsem-om01-topic-5",
      slug: "midsem-supplier-qualification-lifecycle",
      number: 105,
      title: "The 7-Stage Supplier Qualification Lifecycle and Scorecard Rating System",
      unit: "Mid Sem Important",
      marks: 14,
      lecture: "Mid-Sem Master Notes · Supplier Quality Assurance",
      summary:
        "Comprehensive 14-mark master note on the Supplier Qualification System: step-by-step lifecycle flow (Screen -> Audit -> Sample Approval -> Trial Run -> Monitor -> Tier -> Requalify), PPAP requirements, and Supplier Performance Index (SPI).",
      tags: [
        "Mid Sem Important",
        "Supplier Qualification",
        "PPAP",
        "Vendor Audit",
        "SPI",
        "Dock-to-Stock"
      ],
      blocks: [
        {
          type: "h3",
          text: "Concept & Purpose of Supplier Qualification"
        },
        {
          type: "p",
          text: "A Supplier Qualification System is a structured, multi-stage evaluation framework deployed by procurement and quality assurance to verify that a prospective vendor possesses the technical competence, process capability, financial stability, and quality management infrastructure required to deliver zero-defect materials consistently."
        },
        {
          type: "h3",
          text: "The 7-Stage Supplier Qualification Lifecycle Flow"
        },
        {
          type: "table",
          headers: ["Stage", "Lifecycle Phase", "Audit & Technical Action", "Acceptance Criteria / Deliverables"],
          rows: [
            [
              "**1. Screen**",
              "Initial Prequalification & Survey",
              "Evaluate candidate vendor financial solvency, facility capacity, and management stability.",
              "Preliminary supplier survey, ISO 9001 / IATF 16949 certificates, credit rating review."
            ],
            [
              "**2. Audit**",
              "On-Site Quality & Process Audit",
              "Cross-functional team audits plant machinery, SPC records, calibration, and Poka-Yoke mistake-proofing.",
              "Formal audit report scoring process capability, tool maintenance, and operator training matrices."
            ],
            [
              "**3. Sample Approval**",
              "First Article Inspection & PPAP",
              "Supplier fabricates initial prototype lots on production tooling for destructive and dimensional tests.",
              "Production Part Approval Process (PPAP 19 elements), 100% CMM inspection, Gage R&R ($<10\\%$)."
            ],
            [
              "**4. Trial Run**",
              "Pilot Production Batch",
              "Supplier runs full-speed pilot batch (500-5000 units) processed through buyer assembly lines.",
              "Verification of line fit, absence of assembly jams, and initial process capability ($C_{pk} \\ge 1.33$)."
            ],
            [
              "**5. Monitor**",
              "Ongoing Scorecard Rating",
              "Continuously track supplier quality, delivery, cost, and service using monthly scorecards.",
              "Mathematical Supplier Performance Index: $\\text{SPI} = 0.40(Q) + 0.30(D) + 0.20(C) + 0.10(S)$."
            ],
            [
              "**6. Tier**",
              "Supplier Classification",
              "Segment suppliers into performance tiers to drive commercial allocation and development.",
              "Tier 1 (Certified Dock-to-Stock), Tier 2 (Approved), Tier 3 (Conditional/Probation), Tier 4 (De-listed)."
            ],
            [
              "**7. Requalify**",
              "Periodic Recertification",
              "Conduct mandatory annual re-audits or event-driven requalification upon major tool/facility changes.",
              "Recertification audit, re-PPAP approval for major engineering changes, continuous development plans."
            ]
          ]
        }
      ]
    },
    {
      id: "midsem-om01-topic-6",
      slug: "midsem-pareto-chart-analysis",
      number: 106,
      title: "Pareto Chart Analysis: 80/20 Rule, Construction Protocol, and Diagram",
      unit: "Mid Sem Important",
      marks: 14,
      lecture: "Mid-Sem Master Notes · Quality Tools",
      summary:
        "Comprehensive 14-mark master note on Pareto Chart Analysis: Vilfredo Pareto origin, Juran's vital few vs. useful many principle, 5-step construction methodology, categorical vs. histogram distinction, and worked industrial case studies.",
      tags: [
        "Mid Sem Important",
        "Pareto Chart",
        "80/20 Rule",
        "Vital Few",
        "Juran",
        "Quality Tools"
      ],
      blocks: [
        {
          type: "h3",
          text: "Theoretical Principles & Origin of the Pareto Diagram"
        },
        {
          type: "p",
          text: "A Pareto diagram is a specialized dual-axis column graph that ranks categorical data classifications in descending numerical order from left to right, superimposed with a cumulative percentage line (ogive). Developed from Italian economist Vilfredo Pareto's wealth distribution studies and adapted by Dr. Joseph M. Juran as a universal quality management principle: **The Pareto Principle (80/20 Rule)**."
        },
        {
          type: "ul",
          items: [
            "**The Core 80/20 Law**: Approximately **80% of process problems, scrap costs, or customer complaints stem from 20% of the vital few root causes**, while the remaining 20% of issues are dispersed across the 80% useful many (trivial many).",
            "**Distinction from Histograms**: A Pareto chart features a *categorical* horizontal axis (machine numbers, defect types, suppliers), whereas a histogram features a *continuous numerical* horizontal axis (dimensions, temperature, time).",
            "**Economic Return Leverage**: A 50% improvement in the vital few yields dramatically higher financial returns and is far easier to achieve than a 50% improvement in the useful many."
          ]
        },
        {
          type: "h3",
          text: "Step-by-Step Construction Protocol (5 Steps)"
        },
        {
          type: "ol",
          items: [
            "**Step 1: Determine Data Classification**: Select the classification category (by defect type, machine number, operator shift, supplier, or department).",
            "**Step 2: Select Ranking Metric**: Choose the ranking measure—**monetary cost / dollars** is the most effective metric, followed by defect frequency.",
            "**Step 3: Collect Data**: Gather empirical inspection records over a representative operating time interval.",
            "**Step 4: Summarize and Rank**: Tabulate categories in descending order from largest to smallest; combine small residual categories into an 'Other' category placed at the far right.",
            "**Step 5: Construct Dual-Axis Diagram**: Plot categorical bars against the left vertical axis (cost/frequency) and superimpose a cumulative percentage ogive line against the right vertical axis (0% to 100%)."
          ]
        },
        {
          type: "h3",
          text: "Worked Industrial Benchmark Case: Coating Machine Scrap Analysis"
        },
        {
          type: "table",
          headers: ["Coating Machine ID", "Annual Scrap Cost ($)", "Percentage Share (%)", "Cumulative Cost ($)", "Cumulative Percentage (%)", "Pareto Category"],
          rows: [
            [
              "**Machine 51**",
              "$53,000",
              "53.0%",
              "$53,000",
              "53.0%",
              "**Vital Few** (Target 1)"
            ],
            [
              "**Machine 35**",
              "$21,000",
              "21.0%",
              "$74,000",
              "**74.0%**",
              "**Vital Few** (Target 2)"
            ],
            [
              "**Machine 44**",
              "$10,000",
              "10.0%",
              "$84,000",
              "84.0%",
              "Useful Many"
            ],
            [
              "**Machine 47**",
              "$7,000",
              "7.0%",
              "$91,000",
              "91.0%",
              "Useful Many"
            ],
            [
              "**Machine 29**",
              "$4,000",
              "4.0%",
              "$95,000",
              "95.0%",
              "Useful Many"
            ],
            [
              "**Other (Machine 31 + misc)**",
              "$5,000",
              "5.0%",
              "$100,000",
              "100.0%",
              "Useful Many"
            ]
          ]
        },
        {
          type: "p",
          text: "**Managerial Decision**: Coating machines 51 and 35 alone account for **74% of all scrap dollars**. Engineering resources are allocated exclusively to investigating Machine 51 and 35, ignoring the remaining machines until primary scrap drivers are resolved."
        }
      ]
    },
    {
      id: "midsem-om01-topic-7",
      slug: "midsem-cause-and-effect-ishikawa-6ms",
      number: 107,
      title: "Cause and Effect (Ishikawa / Fishbone) Diagram: Origin, Construction, and The 6Ms",
      unit: "Mid Sem Important",
      marks: 14,
      lecture: "Mid-Sem Master Notes · Root Cause Analysis",
      summary:
        "Comprehensive 14-mark master note on the Cause-and-Effect Diagram: Dr. Kaoru Ishikawa origin, step-by-step construction protocol with brainstorming rules, comprehensive breakdown of the 6Ms, and worked industrial case studies.",
      tags: [
        "Mid Sem Important",
        "Cause and Effect",
        "Ishikawa Diagram",
        "Fishbone Diagram",
        "6Ms",
        "5 Whys",
        "Root Cause"
      ],
      blocks: [
        {
          type: "h3",
          text: "Origin & Purpose of the Cause-and-Effect Diagram"
        },
        {
          type: "p",
          text: "Developed in 1943 by **Dr. Kaoru Ishikawa** at the University of Tokyo, the Cause-and-Effect (C&E) diagram is a structured graphical analysis tool composed of lines and symbols designed to illustrate the meaningful relationship between an operational effect (problem or goal) and all contributing causal factors. It is commonly termed the **Ishikawa Diagram** or **Fishbone Diagram** due to its skeletal geometry."
        },
        {
          type: "ul",
          items: [
            "**Why It Is Used**: Systematically guides cross-functional teams to identify and structure root causes rather than treating superficial symptoms; prevents jumping to premature solutions; acts as a permanent visual training guide.",
            "**Dual Applicability**: Used to investigate 'bad effects' (defects, line jams, delays) to eliminate root causes, or 'good effects' (record yield, customer praise) to standardize best operating practices."
          ]
        },
        {
          type: "h3",
          text: "Detailed Breakdown of the Six Ms (Manufacturing 6Ms)"
        },
        {
          type: "table",
          headers: ["Category (6Ms)", "Operational Definition", "Key Diagnostic Factors Examined", "Industrial Case Example"],
          rows: [
            [
              "**1. Man (People / Manpower)**",
              "Human factors, operator competence, training, and psychological states influencing task execution.",
              "Operator training, technical skill level, worker fatigue, turnover, adherence to standard work instructions, supervision.",
              "*Night-shift operator not trained on digital micrometer zeroing protocol.*"
            ],
            [
              "**2. Machine (Equipment / Tooling)**",
              "Physical machinery, automated systems, fixtures, cutting tools, and computers used in production.",
              "Tool wear, mechanical backlash, spindle vibration, machine capability ($C_m$), calibration drift, hydraulic pressure stability.",
              "*CNC lathe main spindle bearing exhibiting $0.008\\text{ mm}$ thermal runout after 4 hours of continuous operation.*"
            ],
            [
              "**3. Method (Work Methods / Processes)**",
              "Operating procedures, task sequences, operational parameters, and execution techniques.",
              "Standard Operating Procedures (SOPs), cutting feed rates, welding speeds, cycle times, mixing sequences, setup routines.",
              "*Feed rate set at $0.25\\text{ mm/rev}$ instead of SOP standard $0.15\\text{ mm/rev}$, causing tool chatter.*"
            ],
            [
              "**4. Material (Raw Materials / Components)**",
              "Incoming raw materials, sub-assemblies, consumables, chemicals, and packaging.",
              "Material hardness variability, tensile strength, chemical composition, vendor dimensional tolerances, contamination, moisture content.",
              "*Raw alloy steel bar stock hardness fluctuating from 28 HRC to 38 HRC across vendor shipments.*"
            ],
            [
              "**5. Measurement (Inspection / Gauges)**",
              "Metrology equipment, inspection techniques, calibration standards, and sensory evaluations.",
              "Gauge Repeatability and Reproducibility (Gage R&R), instrument resolution, calibration expiration, operator measurement bias.",
              "*Vernier caliper jaw worn by $0.004\\text{ mm}$, producing false out-of-spec readings.*"
            ],
            [
              "**6. Milieu / Environment**",
              "Ambient physical and environmental working conditions surrounding the manufacturing process.",
              "Ambient temperature fluctuations, relative humidity, airborne dust/particulate contamination, lighting intensity, floor vibration.",
              "*Afternoon ambient shop temperature rising by $14^\\circ\\text{C}$, causing thermal workpiece expansion during measurement.*"
            ]
          ]
        },
        {
          type: "h3",
          text: "Brainstorming & Construction Protocol"
        },
        {
          type: "ol",
          items: [
            "**1. Define the Effect**: Write the specific quality problem in a box on the far right of a large working board (2 ft $\\times$ 3 ft).",
            "**2. Draw Main Spine**: Draw a horizontal backbone pointing directly to the effect box.",
            "**3. Establish Major 6M Branches**: Draw primary diagonal branches for Man, Machine, Method, Material, Measurement, and Environment.",
            "**4. Conduct Brainstorming (5 Whys)**: Use round-robin participation (one idea per person per turn), encourage idea quantity over quality, forbid criticism, and drill down using *Why? What? Where? When? Who? How?*.",
            "**5. Incubation & Voting**: Allow ideas to incubate overnight, then have team members vote on the minor causes to circle the 4–5 primary root suspects.",
            "**6. Implement Countermeasures**: Collect empirical verification data and deploy permanent corrective actions (Poka-Yoke, SOP updates)."
          ]
        }
      ]
    },

    // ==========================================
    // REMAINING SYLLABUS TOPICS
    // ==========================================
    {
      id: "tqm-t-1",
      slug: "defining-quality-philosophies-gurus",
      number: 1,
      title: "Defining Quality: Mathematical Quality Ratio, Quality Gurus, and Garvin's 5 Approaches",
      unit: "Principles & Philosophies of TQM",
      summary:
        "Mathematical definition of quality (Q = P/E), foundational philosophies of Deming, Juran, Crosby, Feigenbaum, Ishikawa, and Garvin's 5 conceptual approaches to defining quality.",
      tags: ["Quality Definition", "Garvin 5 Approaches", "Deming", "Juran", "Crosby", "Feigenbaum", "Ishikawa"],
      blocks: [
        {
          type: "diagram",
          kind: "deming-pdca",
          caption: "Deming PDCA Cycle & Quality Gurus Strategic Comparison Matrix"
        },
        {
          type: "h3",
          text: "Mathematical & Conceptual Definitions of Quality"
        },
        {
          type: "p",
          text: "Quality is fundamentally defined as the degree to which a set of inherent characteristics fulfills customer requirements. Mathematically, quality is expressed as the Quality Ratio ($Q = P/E$)."
        }
      ]
    },
    {
      id: "tqm-t-4",
      slug: "deming-14-points-system-of-profound-knowledge",
      number: 4,
      title: "Total Quality Leadership: Deming's 14 Points for Management and System of Profound Knowledge",
      unit: "Principles & Philosophies of TQM",
      summary:
        "W. Edwards Deming's 14 Points for Management, System of Profound Knowledge (SoPK), 7 Deadly Diseases of Management, and the Shewhart/Deming PDCA cycle.",
      tags: ["Deming", "14 Points", "SoPK", "PDCA", "Continuous Improvement"],
      blocks: [
        {
          type: "diagram",
          kind: "deming-pdca",
          caption: "Deming Continuous Improvement PDCA Cycle"
        },
        {
          type: "h3",
          text: "Deming's System of Profound Knowledge (SoPK)"
        },
        {
          type: "p",
          text: "Deming's System of Profound Knowledge comprises four interrelated parts: (1) Appreciation for a System, (2) Knowledge of Variation, (3) Theory of Knowledge, and (4) Understanding Psychology."
        }
      ]
    },
    {
      id: "tqm-t-5",
      slug: "juran-quality-trilogy-copq",
      number: 5,
      title: "The Juran Quality Trilogy (Planning, Control, Improvement) and Cost of Poor Quality (COPQ)",
      unit: "Principles & Philosophies of TQM",
      summary:
        "Joseph M. Juran's Quality Trilogy (Quality Planning, Quality Control, Quality Improvement), application of the Pareto Principle to quality, Cost of Poor Quality (COPQ), and the Breakthrough Sequence.",
      tags: ["Juran", "Trilogy", "Quality Planning", "Quality Control", "COPQ", "Pareto"],
      blocks: [
        {
          type: "h3",
          text: "The Juran Quality Trilogy Architecture"
        },
        {
          type: "p",
          text: "Juran identified three core processes: Quality Planning (designing processes capable of meeting goals), Quality Control (maintaining current performance and acting on sporadic spikes), and Quality Improvement (driving chronic waste down to breakthrough levels)."
        }
      ]
    },
    {
      id: "tqm-t-8",
      slug: "qfd-house-of-quality-architecture",
      number: 8,
      title: "Quality Function Deployment (QFD) and the House of Quality (HOQ) Architecture",
      unit: "Benchmarking, Customer Needs & Quality Engineering",
      summary:
        "Deconstructing Quality Function Deployment (QFD), the 6 structural rooms of the House of Quality (HOQ), and Clausing's 4-phase cascading QFD process.",
      tags: ["QFD", "House of Quality", "HOQ", "Clausing", "Engineering Design"],
      blocks: [
        {
          type: "diagram",
          kind: "house-of-quality",
          caption: "House of Quality (HOQ) 6-Room Structural Matrix Architecture"
        },
        {
          type: "h3",
          text: "Core Philosophy of Quality Function Deployment (QFD)"
        },
        {
          type: "p",
          text: "QFD translates qualitative customer requirements (WHATs) into quantitative engineering parameters (HOWs), part characteristics, process parameters, and production controls."
        }
      ]
    },
    {
      id: "tqm-t-9",
      slug: "fmea-risk-priority-number-rpn",
      number: 9,
      title: "Failure Mode and Effects Analysis (FMEA): DFMEA vs. PFMEA and RPN Risk Modeling",
      unit: "Benchmarking, Customer Needs & Quality Engineering",
      summary:
        "Proactive engineering risk management using FMEA, contrasting DFMEA and PFMEA, mathematical formulation of Risk Priority Number (RPN = S x O x D), and the AIAG-VDA Action Priority matrix.",
      tags: ["FMEA", "DFMEA", "PFMEA", "RPN", "Risk Management"],
      blocks: [
        {
          type: "diagram",
          kind: "fmea-matrix",
          caption: "Failure Mode and Effects Analysis (FMEA) & RPN Risk Priority Calculator"
        },
        {
          type: "h3",
          text: "Foundations and Purpose of FMEA"
        },
        {
          type: "p",
          text: "FMEA is a proactive risk assessment tool that evaluates potential failure modes across Severity ($S$), Occurrence ($O$), and Detection ($D$) to compute the Risk Priority Number ($RPN = S \\times O \\times D$)."
        }
      ]
    },
    {
      id: "tqm-t-10",
      slug: "taguchi-quality-loss-function-robust-design",
      number: 10,
      title: "Taguchi's Quality Loss Function: Philosophy, Mathematical Formulations, and Process Loss",
      unit: "Benchmarking, Customer Needs & Quality Engineering",
      summary:
        "Genichi Taguchi's philosophy of quality loss, rejection of the traditional goalpost mentality, mathematical formulation for Nominal-the-Best, Smaller-the-Better, and Larger-the-Better, and average societal loss modeling.",
      tags: ["Taguchi", "Quality Loss Function", "Robust Design", "Nominal-the-Best", "Societal Loss"],
      blocks: [
        {
          type: "diagram",
          kind: "taguchi-loss",
          caption: "Taguchi Quadratic Loss Function vs. Traditional Goalpost Model"
        },
        {
          type: "h3",
          text: "Taguchi's Quality Philosophy & Rejection of Goalpost Mentality"
        },
        {
          type: "p",
          text: "Taguchi proved that economic and societal loss increases quadratically as dimensions drift away from nominal target: $L(y) = k(y-m)^2$."
        }
      ]
    },
    {
      id: "tqm-t-13",
      slug: "seven-new-management-planning-tools",
      number: 13,
      title: "The Seven New Management and Planning Tools (JUSE / MP Tools) and Their 7-Step Integration Sequence",
      unit: "Operations Quality, SPC & 7 QC Tools",
      summary:
        "The 7 New Management and Planning Tools (Affinity Diagram, Relations Diagram, Tree Diagram, Matrix Diagram, Prioritization Matrix, PDPC, Arrow Diagram) developed by JUSE and their seamless 7-step integration sequence.",
      tags: ["7 New Tools", "JUSE", "Affinity Diagram", "Relations Diagram", "Tree Diagram", "PDPC", "Arrow Diagram"],
      blocks: [
        {
          type: "h3",
          text: "The Seven New Management & Planning (MP) Tools"
        },
        {
          type: "p",
          text: "The 7 MP tools organize unstructured qualitative ideas, map cause-and-effect networks, decompose tasks, assign responsibilities, mitigate risks, and sequence project critical paths."
        }
      ]
    },
    {
      id: "tqm-t-14",
      slug: "spc-shewhart-control-charts-western-electric-rules",
      number: 14,
      title: "Statistical Process Control (SPC): Common vs. Special Cause Variation, Shewhart Control Chart Architecture, and Western Electric Sensitizing Rules",
      unit: "Operations Quality, SPC & 7 QC Tools",
      summary:
        "Statistical foundations of SPC, Common vs. Special Cause Variation, Shewhart Control Chart mathematical architecture (+/- 3 sigma), Western Electric out-of-control sensitizing rules, and variable vs. attribute chart selection.",
      tags: ["SPC", "Shewhart", "Control Charts", "Western Electric Rules", "Process Stability"],
      blocks: [
        {
          type: "diagram",
          kind: "spc-control-chart",
          caption: "Shewhart Control Chart Architecture & Western Electric Out-of-Control Sensitizing Rules"
        },
        {
          type: "h3",
          text: "Mathematical Architecture of Shewhart Control Charts"
        },
        {
          type: "p",
          text: "Control charts set limits at $\\pm 3\\sigma$ around the centerline. Western Electric rules detect non-random special causes before out-of-spec defects occur."
        }
      ]
    },
    {
      id: "tqm-t-15",
      slug: "process-capability-indices-cp-cpk-cpm",
      number: 15,
      title: "Process Capability Analysis: Cp, Cpk, Cpm Indices, Interpretation Matrix, and Statistical Inferences",
      unit: "Operations Quality, SPC & 7 QC Tools",
      summary:
        "Mathematical formulation and interpretation of Process Capability ($C_p$), Process Capability Index ($C_{pk}$), and Taguchi Capability Index ($C_{pm}$), including the capability interpretation matrix and process centering.",
      tags: ["Process Capability", "Cp", "Cpk", "Cpm", "Tolerance", "Six Sigma Quality"],
      blocks: [
        {
          type: "h3",
          text: "Mathematical Formulations of Capability Indices"
        },
        {
          type: "p",
          text: "Potential capability $C_p = \\frac{USL - LSL}{6\\sigma}$ evaluates process spread, while actual capability $C_{pk} = \\min(\\frac{USL-\\mu}{3\\sigma}, \\frac{\\mu-LSL}{3\\sigma})$ accounts for process centering."
        }
      ]
    },
    {
      id: "tqm-t-16",
      slug: "six-sigma-dmaic-roadmap-dpmo-engine",
      number: 16,
      title: "Six Sigma Methodology: DMAIC Roadmap, DPMO Mathematical Engine, and 1.5-Sigma Process Shift",
      unit: "Six Sigma, Lean, Quality Systems & Awards",
      summary:
        "Six Sigma operational architecture, Bill Smith & Motorola origins, the 5-phase DMAIC roadmap with tollgate reviews, mathematical DPMO formulations, and the 1.5-sigma long-term process shift.",
      tags: ["Six Sigma", "DMAIC", "DPMO", "1.5 Sigma Shift", "Motorola", "Operational Excellence"],
      blocks: [
        {
          type: "diagram",
          kind: "dmaic-roadmap",
          caption: "Six Sigma DMAIC Phase-Gate Roadmap & DPMO Mathematical Engine"
        },
        {
          type: "h3",
          text: "Origins and Core Definition of Six Sigma"
        },
        {
          type: "p",
          text: "Six Sigma targets 3.4 Defects Per Million Opportunities (DPMO) assuming a standard $1.5\\sigma$ long-term process drift across the DMAIC roadmap."
        }
      ]
    },
    {
      id: "tqm-t-17",
      slug: "lean-manufacturing-8-wastes-5s-vsm",
      number: 17,
      title: "Lean Manufacturing and Waste Elimination: 8 Wastes of Lean (DOWNTIME), 5S Methodology, and Value Stream Mapping",
      unit: "Six Sigma, Lean, Quality Systems & Awards",
      summary:
        "Principles of Lean Production (Toyota Production System), the 8 Wastes of Lean (DOWNTIME acronym), the 5S Workplace Organization Methodology, and Value Stream Mapping (VSM).",
      tags: ["Lean", "8 Wastes", "DOWNTIME", "5S", "Value Stream Mapping", "TPS"],
      blocks: [
        {
          type: "h3",
          text: "The 8 Wastes of Lean Manufacturing (DOWNTIME)"
        },
        {
          type: "p",
          text: "Lean targets the elimination of 8 operational wastes: Defects, Overproduction, Waiting, Non-utilized talent, Transportation, Inventory, Motion, and Extra processing."
        }
      ]
    },
    {
      id: "tqm-t-18",
      slug: "tpm-overall-equipment-effectiveness-oee",
      number: 18,
      title: "Total Productive Maintenance (TPM) and Overall Equipment Effectiveness (OEE) Metric Architecture",
      unit: "Six Sigma, Lean, Quality Systems & Awards",
      summary:
        "Total Productive Maintenance (TPM) 8 pillars, Autonomous Maintenance (Jishu Hozen), and the Overall Equipment Effectiveness (OEE = Availability x Performance x Quality) mathematical framework with the Six Big Equipment Losses.",
      tags: ["TPM", "OEE", "Autonomous Maintenance", "Availability", "Six Big Losses"],
      blocks: [
        {
          type: "h3",
          text: "Mathematical Architecture of Overall Equipment Effectiveness (OEE)"
        },
        {
          type: "quote",
          text: "\\text{OEE} = \\text{Availability (A)} \\times \\text{Performance Rate (P)} \\times \\text{Quality Rate (Q)}"
        }
      ]
    },
    {
      id: "tqm-t-19",
      slug: "cost-of-quality-coq-paf-model",
      number: 19,
      title: "Cost of Quality (COQ) PAF Model: Prevention, Appraisal, Internal Failure, External Failure Costs, and the 1-10-100 Rule",
      unit: "Six Sigma, Lean, Quality Systems & Awards",
      summary:
        "Armand Feigenbaum's Prevention, Appraisal, and Failure (PAF) Cost of Quality model, exposing the 'Hidden Plant', and the 1-10-100 prevention leverage rule.",
      tags: ["Cost of Quality", "COQ", "PAF Model", "Hidden Plant", "1-10-100 Rule"],
      blocks: [
        {
          type: "diagram",
          kind: "coq-paf-model",
          caption: "Cost of Quality (COQ) PAF Architecture & 1-10-100 Prevention Leverage Multiplier"
        },
        {
          type: "h3",
          text: "The Four Categories of the PAF Cost of Quality Model"
        },
        {
          type: "p",
          text: "Cost of Quality classifies costs into Conformance (Prevention, Appraisal) and Non-Conformance (Internal Failure, External Failure), governed by the 1-10-100 prevention leverage rule."
        }
      ]
    },
    {
      id: "tqm-t-20",
      slug: "iso-9001-2015-standards-risk-based-thinking",
      number: 20,
      title: "International Quality Standards: ISO 9001:2015 High-Level Structure (Annex SL), Risk-Based Thinking, and Audit Lifecycle",
      unit: "Six Sigma, Lean, Quality Systems & Awards",
      summary:
        "ISO 9001:2015 Quality Management System architecture, the 10-clause High-Level Structure (Annex SL), Risk-Based Thinking, Seven Quality Management Principles (QMPs), and the certification audit lifecycle.",
      tags: ["ISO 9001", "Annex SL", "Quality Management Systems", "Risk-Based Thinking", "Auditing"],
      blocks: [
        {
          type: "h3",
          text: "The Seven Quality Management Principles (QMPs) of ISO 9001:2015"
        },
        {
          type: "p",
          text: "ISO 9001:2015 establishes 7 QMPs and a 10-clause Annex SL High-Level Structure centered on Risk-Based Thinking and PDCA."
        }
      ]
    },
    {
      id: "tqm-t-21",
      slug: "quality-awards-mbnqa-deming-prize-efqm",
      number: 21,
      title: "Quality Award Frameworks: Malcolm Baldrige National Quality Award (MBNQA) vs. Deming Prize vs. EFQM Excellence Model",
      unit: "Six Sigma, Lean, Quality Systems & Awards",
      summary:
        "Comprehensive comparative analysis of world-class quality awards: Malcolm Baldrige National Quality Award (MBNQA - 1,000 points), the Deming Prize (Japan), and the EFQM Excellence Model (Europe).",
      tags: ["MBNQA", "Deming Prize", "EFQM", "Quality Awards", "Business Excellence"],
      blocks: [
        {
          type: "h3",
          text: "Comparative Analysis of the Three Global Quality Award Frameworks"
        },
        {
          type: "p",
          text: "MBNQA (USA, 1,000 points across 7 categories with 450 points on Results), Deming Prize (Japan, statistical CWQC), and EFQM (Europe, RADAR logic matrix)."
        }
      ]
    }
  ],
  examQuestions: [
    {
      id: "om01-eq-1",
      number: 1,
      title: "What is Benchmarking? The 12 Stages of Benchmarking (AT&T Model)",
      marks: 14,
      relatedSlugs: ["midsem-benchmarking-12-stages"],
      question:
        "What is benchmarking? Explain the 12 stages of benchmarking based on the AT&T Model (Select subject, Define process, Identify potential partners, Identify data sources, Collect data and select partners, Determine gap, Establish process differences, Target future performance, Communicate, Adjust goal, Implement, Review and recalibrate) with concrete industrial examples for each stage.",
      blocks: [
        {
          type: "h3",
          text: "1. Definition and Conceptual Foundations of Benchmarking"
        },
        {
          type: "p",
          text: "Benchmarking is the continuous, systematic process of measuring an organization's products, services, processes, and practices against recognized industry leaders or world-class organizations to identify performance gaps, establish stretch targets, and adapt superior practices for breakthrough operational improvement."
        },
        {
          type: "h3",
          text: "2. The 12 Stages of the Benchmarking Process (AT&T Model)"
        },
        {
          type: "table",
          headers: ["Stage", "Operational Action", "Methods / Deliverables", "Industrial Case Example"],
          rows: [
            ["**1. Select Subject**", "Determine critical processes impacting customer satisfaction.", "Pareto analysis, CTQ trees.", "*Industrial pump maker targeting 16-week delivery lead time.*"],
            ["**2. Define Process**", "Map internal workflows and baseline performance metrics.", "Flowcharts, cycle times, defect PPM.", "*Mapping 24 steps of Engineering Change Order (ECO) workflow.*"],
            ["**3. Potential Partners**", "Screen world-class performers and industry leaders.", "Internal units, rivals, functional pioneers.", "*Southwest Airlines identifying F1 racing pit crews.*"],
            ["**4. Data Sources**", "Determine information gathering repositories.", "APQC databases, trade journals, SEC filings.", "*Consulting APQC Open Standards Benchmarking database.*"],
            ["**5. Collect Data**", "Execute confidentiality protocols and site visits.", "Questionnaires, plant walkthroughs, interviews.", "*Plant visits to Japanese electronics assembly lines.*"],
            ["**6. Determine Gap**", "Quantify performance delta vs. partner.", "Gap analysis: Negative, Parity, Positive.", "*Calculating 5-day order fulfillment gap (7d vs. 2d).*"],
            ["**7. Process Differences**", "Analyze underlying enablers driving superior execution.", "Technology audit, workflow comparison.", "*Discovering partner uses automated barcode scanning vs paper.*"],
            ["**8. Target Future**", "Project partner trajectory to avoid moving target trap.", "Forecasted partner trajectory, stretch goals.", "*Setting 2-year goal of 1.5 days when partner is at 2.0 days.*"],
            ["**9. Communicate**", "Disseminate findings to leadership and process owners.", "Executive briefings, change management plans.", "*Presenting business case showing 32% unit labor reduction.*"],
            ["**10. Adjust Goal**", "Integrate targets into formal strategic planning & KPIs.", "Balanced scorecards, annual department KPIs.", "*Tying plant manager bonus to 99.2% on-time dispatch.*"],
            ["**11. Implement**", "Execute action plans, reconfigure workflows, update SOPs.", "WBS, SOP updates, operator training.", "*Installing Warehouse Management System and training 120 staff.*"],
            ["**12. Recalibrate**", "Audit results and continuously reset higher standards.", "KPI dashboards, periodic partner re-audits.", "*Bi-annual reviews to set new stretch targets once 2-day goal met.*"]
          ]
        }
      ]
    },
    {
      id: "om01-eq-2",
      number: 2,
      title: "The Seven Strategic Types of Benchmarking and Industrial Applications",
      marks: 14,
      relatedSlugs: ["midsem-7-types-of-benchmarking"],
      question:
        "What are the types of benchmarking? Explain all seven types of benchmarking: (1) Process benchmarking, (2) Performance benchmarking, (3) Product benchmarking, (4) Strategic benchmarking, (5) Functional benchmarking, (6) Best-in-class benchmarking, and (7) Operational benchmarking with suitable industrial examples.",
      blocks: [
        {
          type: "h3",
          text: "Comprehensive Taxonomy of the Seven Types of Benchmarking"
        },
        {
          type: "table",
          headers: ["Type", "Core Analytical Focus", "Organizational Scope", "Strategic Benefit", "Benchmark Industrial Example"],
          rows: [
            ["**1. Process**", "Workflows, work methods, cycle times.", "Cross-industry/functional", "Radically cuts cycle times and waste.", "*Hospital ER benchmarking triage vs F1 pit-stop coordination.*"],
            ["**2. Performance**", "Quantitative metrics (pricing, specs, speed).", "Direct competitors/peers", "Establishes competitive market positioning.", "*Smartphones comparing processor clock speed and battery life.*"],
            ["**3. Product**", "Teardowns, reverse engineering, feature costs.", "Competing products", "Reveals competitor material and cost architecture.", "*Automotive OEMs tearing down competitor electric vehicles.*"],
            ["**4. Strategic**", "High-level business models, core competencies.", "Global industry leaders", "Guides corporate pivots and tech investments.", "*Automakers benchmarking EV startups' direct-to-consumer sales.*"],
            ["**5. Functional**", "Corporate functions (procurement, billing, HR).", "Non-competing sector leaders", "Breaks industry blind spots; data shared freely.", "*Airlines benchmarking customer loyalty vs global hotel chains.*"],
            ["**6. Best-in-Class**", "Single best performer worldwide for a process.", "Across all global industries", "Yields revolutionary breakthrough paradigms.", "*Xerox benchmarking warehouse picking vs L.L. Bean (50% cut).*"],
            ["**7. Operational**", "Frontline shop-floor practices, setups, 5S.", "Internal cells / factory peers", "Drives immediate shop-floor equipment uptime.", "*Machine shops benchmarking SMED changeovers vs stamping plants.*"]
          ]
        }
      ]
    },
    {
      id: "om01-eq-3",
      number: 3,
      title: "Dimensions of Quality: Garvin's 8 Product Dimensions vs. SERVQUAL 5 Dimensions",
      marks: 14,
      relatedSlugs: ["midsem-dimensions-of-quality-garvin-servqual"],
      question:
        "What are the dimensions of quality? Explain David Garvin's eight dimensions of product quality and Parasuraman, Zeithaml & Berry's five SERVQUAL dimensions of service quality, providing operational criteria and concrete examples for each.",
      blocks: [
        {
          type: "h3",
          text: "Part 1: David Garvin's Eight Dimensions of Product Quality"
        },
        {
          type: "table",
          headers: ["Dimension", "Strategic Definition", "Evaluation Metric", "Corporate Benchmark Example"],
          rows: [
            ["**1. Performance**", "Primary operating characteristics.", "Speed, resolution, acceleration, throughput.", "*Laser printer outputting 45 ppm at 1200 DPI resolution.*"],
            ["**2. Features**", "Secondary supplemental characteristics.", "Auxiliary options, smart connectivity.", "*Automotive CarPlay, wireless charging, head-up display.*"],
            ["**3. Reliability**", "Probability of non-failure over specified time.", "MTBF, failure rate ($\\lambda$), warranty claims.", "*Aircraft turbine engine operating 20,000 flight hours without unscheduled maintenance.*"],
            ["**4. Conformance**", "Degree to which design meets blueprints.", "Process capability ($C_{pk}$), defect PPM, tolerances.", "*CNC crankshaft machined within $\\pm 0.005\\text{ mm}$.*"],
            ["**5. Durability**", "Measure of operational lifespan before replacement.", "MTTF, cyclic stress fatigue limits.", "*Cast-iron industrial slurry pump operating 25 years.*"],
            ["**6. Serviceability**", "Speed, courtesy, and ease of repair.", "MTTR, modular replacement, spare parts access.", "*Electric delivery van modular battery swapped in < 10 min.*"],
            ["**7. Aesthetics**", "Subjective sensory feel, look, sound, smell.", "Haptic feedback, acoustic resonance.", "*Acoustic dampening and solid 'thud' of luxury car door.*"],
            ["**8. Perceived Quality**", "Subjective assessment based on reputation.", "Net Promoter Score (NPS), brand valuation.", "*Hospital purchasing MRI scanners based on 60-year brand reputation.*"]
          ]
        },
        {
          type: "h3",
          text: "Part 2: The 5 SERVQUAL Service Quality Dimensions"
        },
        {
          type: "table",
          headers: ["Dimension", "Operational Definition", "Audit Criteria", "Service Industry Benchmark"],
          rows: [
            ["**1. Reliability**", "Performing promised service dependably & accurately.", "Zero billing errors, on-time arrivals.", "*Securities exchange clearing 100k trades/sec with 0 errors.*"],
            ["**2. Responsiveness**", "Willingness to help & provide prompt service.", "Speed of answer, resolution velocity.", "*Emergency roadside assistance arriving within 15 minutes.*"],
            ["**3. Assurance**", "Knowledge, courtesy, and competence inspiring trust.", "Certifications, transparent risk explanation.", "*Wealth manager explaining fiduciary portfolio risk clearly.*"],
            ["**4. Empathy**", "Caring, individualized, compassionate attention.", "Personalized greeting, custom schedules.", "*Pediatric clinic offering tailored parent counseling.*"],
            ["**5. Tangibles**", "Physical facilities, equipment, staff grooming.", "Cleanliness, modern UI/UX design.", "*Clean, sterile hospital diagnostic suites with modern displays.*"]
          ]
        }
      ]
    },
    {
      id: "om01-eq-4",
      number: 4,
      title: "Strategic Purchasing: Upstream Quality Genesis & Traditional vs. Strategic Comparison",
      marks: 14,
      relatedSlugs: ["midsem-strategic-purchasing-traditional-vs-strategic"],
      question:
        "What do you mean by strategic purchasing? Explain where quality begins in operations, detail the 1-10-100 Cost of Quality Rule, and provide an in-depth architectural comparison between traditional and strategic purchasing across key operational dimensions.",
      blocks: [
        {
          type: "diagram",
          kind: "coq-paf-model",
          caption: "Cost of Quality PAF Architecture & 1-10-100 Prevention Leverage Multiplier"
        },
        {
          type: "h3",
          text: "Part 1: The Upstream Genesis of Quality & The 1-10-100 Rule"
        },
        {
          type: "p",
          text: "Quality begins in Product Design and Procurement. Quality cannot be inspected into a product; it must be built into raw materials and blueprints. Under the 1-10-100 Rule, spending $1.00 in prevention during procurement prevents $10.00 in factory rework and $100.00+ in field warranty and recall liabilities."
        },
        {
          type: "h3",
          text: "Part 2: Traditional vs. Strategic Purchasing Comparison"
        },
        {
          type: "table",
          headers: ["Dimension", "Traditional Purchasing", "Strategic Purchasing (TQM Paradigm)"],
          rows: [
            ["**Relationship**", "Adversarial, arm's-length, zero-sum.", "Collaborative, long-term partnering, win-win."],
            ["**Supply Base**", "Large, fragmented base to foster price wars.", "Rationalized, small base of certified partners."],
            ["**Contract Term**", "Short-term annual or spot purchase orders.", "Multi-year agreements with shared gain-sharing."],
            ["**Selection Metric**", "Lowest unit purchase price tag.", "Lowest Total Cost of Ownership (TCO)."],
            ["**Quality Control**", "Massive receiving inspection at factory dock.", "Dock-to-Stock Certification (0 incoming inspection)."],
            ["**Information**", "Guarded, secretive, POs/invoices only.", "Open EDI, shared forecasts, joint CAD files."],
            ["**Design Role**", "Late; bid after engineering freeze.", "Early Supplier Involvement (ESI) during concept."],
            ["**Cost Strategy**", "Aggressive price haggling and margin squeezing.", "Joint target costing and Value Engineering (VAVE)."],
            ["**Capability Target**", "Acceptable Quality Levels (AQL) / scrap quotas.", "Process capability ($C_{pk} \\ge 1.33$) & Zero Defects."],
            ["**Development**", "Zero technical support; failing vendors dropped.", "Active supplier training in SPC, Kaizen, and Lean."]
          ]
        }
      ]
    },
    {
      id: "om01-eq-5",
      number: 5,
      title: "The 7-Stage Supplier Qualification Lifecycle and Scorecard Rating System",
      marks: 14,
      relatedSlugs: ["midsem-supplier-qualification-lifecycle"],
      question:
        "What do you mean by a supplier qualification system? Explain the complete multi-stage qualification lifecycle flowing from Screen to Audit to Sample Approval to Trial Run to Monitor to Tier to Requalify, and explain the mathematical formulation of a Supplier Performance Index (SPI).",
      blocks: [
        {
          type: "h3",
          text: "The 7-Stage Supplier Qualification Lifecycle Flow"
        },
        {
          type: "table",
          headers: ["Stage", "Phase Name", "Audit & Technical Action", "Acceptance Deliverables"],
          rows: [
            ["**1. Screen**", "Initial Prequalification", "Evaluate financial solvency, facility capacity, QMS.", "Survey questionnaires, ISO 9001 certificates."],
            ["**2. Audit**", "On-Site Process Audit", "Audit plant machinery, SPC records, Poka-Yoke fixtures.", "Scored audit report covering maintenance and training."],
            ["**3. Sample Approval**", "First Article / PPAP", "Fabricate prototype lots on production tooling for tests.", "PPAP 19 elements, CMM inspection, Gage R&R ($<10\\%$)."],
            ["**4. Trial Run**", "Pilot Production Batch", "Full-speed pilot batch (500-5000 units) on assembly lines.", "Verification of line fit, 0 jams, $C_{pk} \\ge 1.33$."],
            ["**5. Monitor**", "Ongoing Scorecard Tracking", "Track quality, delivery, cost, and service in real time.", "$\\text{SPI} = 0.40(Q) + 0.30(D) + 0.20(C) + 0.10(S)$."],
            ["**6. Tier**", "Supplier Classification", "Classify into performance tiers for commercial allocation.", "Tier 1 (Dock-to-Stock), Tier 2 (Approved), Tier 3 (Conditional)."],
            ["**7. Requalify**", "Periodic Recertification", "Annual re-audits or re-PPAP upon major tooling/facility moves.", "Recertification audit, continuous improvement plans."]
          ]
        }
      ]
    },
    {
      id: "om01-eq-6",
      number: 6,
      title: "Pareto Chart Analysis: 80/20 Rule, Construction Protocol, and Diagram",
      marks: 14,
      relatedSlugs: ["midsem-pareto-chart-analysis"],
      question:
        "What do you mean by a Pareto chart? When is it used? Explain its theoretical principles (Vilfredo Pareto and Joseph Juran's 80/20 rule), distinguish it from histograms, provide step-by-step construction instructions with diagrams, and discuss a practical industrial example.",
      blocks: [
        {
          type: "h3",
          text: "Part 1: Principles & 5-Step Construction Methodology"
        },
        {
          type: "p",
          text: "A Pareto diagram ranks categorical data in descending order from left to right with a cumulative percentage line. Based on Juran's 80/20 rule, 80% of scrap and defects arise from 20% of vital few causes. The horizontal axis is categorical (unlike continuous numerical histograms)."
        },
        {
          type: "h3",
          text: "Part 2: Worked Industrial Coating Machine Scrap Case"
        },
        {
          type: "table",
          headers: ["Machine ID", "Annual Scrap ($)", "Share (%)", "Cumulative ($)", "Cumulative (%)", "Pareto Category"],
          rows: [
            ["**Machine 51**", "$53,000", "53.0%", "$53,000", "53.0%", "**Vital Few** (Target 1)"],
            ["**Machine 35**", "$21,000", "21.0%", "$74,000", "**74.0%**", "**Vital Few** (Target 2)"],
            ["**Machine 44**", "$10,000", "10.0%", "$84,000", "84.0%", "Useful Many"],
            ["**Machine 47**", "$7,000", "7.0%", "$91,000", "91.0%", "Useful Many"],
            ["**Machine 29**", "$4,000", "4.0%", "$95,000", "95.0%", "Useful Many"],
            ["**Other (31+misc)**", "$5,000", "5.0%", "$100,000", "100.0%", "Useful Many"]
          ]
        },
        {
          type: "p",
          text: "**Conclusion**: Machines 51 and 35 account for 74% of scrap dollars; corrective resources are focused exclusively on these two vital few machines."
        }
      ]
    },
    {
      id: "om01-eq-7",
      number: 7,
      title: "Cause and Effect (Ishikawa / Fishbone) Diagram: Origin, Construction, and The 6Ms",
      marks: 14,
      relatedSlugs: ["midsem-cause-and-effect-ishikawa-6ms"],
      question:
        "What do you mean by a cause and effect diagram? Why is it used and how is it used? Explain its six Ms (Man, Machine, Method, Material, Measurement, Milieu/Environment) with proper diagrammatic structure, brainstorming rules, and industrial examples.",
      blocks: [
        {
          type: "h3",
          text: "Part 1: The Six Ms (Manufacturing 6Ms) Diagnostic Framework"
        },
        {
          type: "table",
          headers: ["6M Category", "Operational Definition", "Diagnostic Factors Examined", "Industrial Case Example"],
          rows: [
            ["**1. Man**", "Human factors, operator competence, training.", "Training, fatigue, turnover, SOP compliance.", "*Night-shift worker not trained on micrometer zeroing.*"],
            ["**2. Machine**", "Machinery, automated systems, fixtures, tools.", "Tool wear, backlash, vibration, spindle runout.", "*CNC lathe spindle exhibiting $0.008\\text{ mm}$ thermal runout.*"],
            ["**3. Method**", "Operating procedures, task sequences, feeds.", "SOPs, feed rates, cycle times, setup routines.", "*Feed rate set at $0.25\\text{ mm/rev}$ instead of $0.15\\text{ mm/rev}$.*"],
            ["**4. Material**", "Incoming raw materials, chemicals, components.", "Hardness, tensile strength, vendor tolerances.", "*Raw steel bar hardness fluctuating from 28 to 38 HRC.*"],
            ["**5. Measurement**", "Gauges, inspection tools, calibration.", "Gage R&R, instrument wear, parallax bias.", "*Vernier caliper jaw worn by $0.004\\text{ mm}$ giving false error.*"],
            ["**6. Milieu (Environment)**", "Ambient conditions surrounding manufacturing.", "Temperature swings, humidity, dust, vibration.", "*Afternoon ambient temp rising by $14^\\circ\\text{C}$ expanding metal.*"]
          ]
        },
        {
          type: "h3",
          text: "Part 2: Brainstorming Protocol & 5 Whys"
        },
        {
          type: "p",
          text: "Teams use round-robin participation (one idea per turn), prioritize quantity over quality, forbid criticism during ideation, allow ideas to incubate overnight, and vote to circle the 4–5 most critical root causes for empirical verification and Poka-Yoke countermeasure design."
        }
      ]
    }
  ]
};
