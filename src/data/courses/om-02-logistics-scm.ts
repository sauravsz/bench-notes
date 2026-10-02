import { Course } from "./types";

export const logisticsScmCourse: Course = {
  id: "om-02",
  code: "OM 02",
  title: "Logistics and SCM",
  slug: "logistics-scm",
  category: "Operations",
  accentColor: "indigo",
  instructor: "Prof. Logistics & Supply Chain Operations",
  description:
    "Comprehensive master examination notes, mathematical forecasting and inventory models, reverse logistics architecture, and 14-mark model exam answers for Logistics Management, Supply Chain Planning, Big Data Analytics, and SCM Coordination.",
  units: [
    "Mid Sem Important",
    "Logistics Concepts & Operations",
    "Logistical Design & Inventory Control",
    "Supply Chain Strategy & Process Views",
    "Supply Chain Coordination & Sourcing",
    "Supply Chain Technologies & Emerging Trends"
  ],
  topics: [
    // ===================================================
    // UNIT: MID SEM IMPORTANT (8 HIGH-YIELD MASTER TOPICS)
    // ===================================================
    {
      id: "midsem-om02-topic-1",
      slug: "midsem-big-data-analytics-supply-chain",
      number: 101,
      title: "Big Data Analytics in Supply Chain Decision Making: Forecasting, Inventory & Risk Management",
      unit: "Mid Sem Important",
      marks: 14,
      lecture: "Mid-Sem Master Notes · Big Data in SCM",
      summary:
        "Comprehensive 14-mark master note on Big Data Analytics in Supply Chain Management: 3V definition (Volume, Velocity, Variety), transformation of decision making, and in-depth analysis of Demand Forecasting, Inventory Optimization, and Risk Management.",
      tags: [
        "Mid Sem Important",
        "Big Data Analytics",
        "Demand Forecasting",
        "Inventory Optimization",
        "Risk Management",
        "Machine Learning"
      ],
      blocks: [
        {
          type: "h3",
          text: "Definition & Conceptual Foundations of Big Data in SCM"
        },
        {
          type: "p",
          text: "Big Data in Supply Chain Management refers to massive, high-velocity, semi-structured, and unstructured data sets (characterized by the 3Vs: Volume, Velocity, and Variety) that exceed the storage, management, and processing capacity of traditional database systems. Supply Chain Analytics applies advanced statistical algorithms, machine learning, and optimization to convert raw data into descriptive, diagnostic, predictive, and prescriptive intelligence."
        },
        {
          type: "h3",
          text: "1. Big Data in Demand Forecasting"
        },
        {
          type: "table",
          headers: ["Forecasting Dimension", "Traditional Forecasting Approach", "Big Data Analytics Transformation"],
          rows: [
            [
              "**Data Sources & Breadth**",
              "Relies solely on internal historical sales time-series data.",
              "Integrates hundreds of real-time variables: web search trends, social media sentiment, live weather radar, competitor price scraping, macro indicators."
            ],
            [
              "**Modeling Mechanism**",
              "Linear parametric models (Moving averages, standard exponential smoothing).",
              "Non-linear machine learning algorithms (Random Forests, Gradient Boosted Trees, Artificial Neural Networks) without assuming static normal distributions."
            ],
            [
              "**Granularity & Frequency**",
              "Aggregated monthly or quarterly forecasts at regional DC level.",
              "Granular daily and hourly probabilistic demand distributions down to individual store shelves and specific SKUs."
            ],
            [
              "**Industrial Case Example**",
              "*Quarterly sales average calculations in spreadsheets.*",
              "*Blue Yonder processing 130,000 SKUs across 200 influencing variables to generate 150 million daily probability distributions for retail replenishment.*"
            ]
          ]
        },
        {
          type: "h3",
          text: "2. Big Data in Inventory Optimization"
        },
        {
          type: "table",
          headers: ["Inventory Dimension", "Traditional Practice", "Big Data Analytics Transformation"],
          rows: [
            [
              "**Safety Stock Sizing**",
              "Static safety stock calculations ($SS = Z\\sigma_L$) based on fixed historical assumptions.",
              "Dynamic multi-echelon buffer sizing continuously updated based on live supplier lead-time variance, transit delays, and weather."
            ],
            [
              "**Bullwhip Mitigation**",
              "Distorted batch orders placing severe demand amplification upstream.",
              "Real-time Point-of-Sale (POS) and RFID scan telemetry streaming directly from retail cash registers to Tier-1 suppliers to eliminate order batching."
            ],
            [
              "**Inventory Allocation**",
              "Centralized allocation based on periodic regional manager requisitions.",
              "Predictive inventory positioning placing stock in forward micro-fulfillment centers near anticipated customer purchase clusters."
            ],
            [
              "**Industrial Case Example**",
              "*Monthly safety stock recalculations.*",
              "*Walmart and Procter & Gamble automating continuous Vendor-Managed Inventory (VMI) replenishment via live POS register scan data.*"
            ]
          ]
        },
        {
          type: "h3",
          text: "3. Big Data in Supply Chain Risk Management"
        },
        {
          type: "table",
          headers: ["Risk Domain", "Traditional Risk Response", "Big Data Analytics Transformation"],
          rows: [
            [
              "**Network Visibility**",
              "Fragmented milestone check-ins with severe visibility blind spots.",
              "Centralized Supply Chain Control Towers aggregating live GPS telematics, vessel AIS tracking, port congestion feeds, and weather radars."
            ],
            [
              "**Disruption Mitigation**",
              "Reactive expediting after shipments are physically stalled at ports.",
              "Predictive disruption sensing identifying port strikes or extreme weather days in advance, triggering automated freight rerouting."
            ],
            [
              "**Cold-Chain Integrity**",
              "Manual post-delivery temperature log verification.",
              "Active IoT sensor tags streaming ambient temperature, humidity, and shock data in real time, alerting carriers to prevent cargo spoilage."
            ],
            [
              "**Industrial Case Example**",
              "*Handling cargo claims after delivery failure.*",
              "*FedEx SenseAware sensor tags deployed inside high-value biological cargo to monitor temperature and GPS coordinates in real time.*"
            ]
          ]
        }
      ]
    },
    {
      id: "midsem-om02-topic-2",
      slug: "midsem-reverse-logistics-strategic-opportunity",
      number: 102,
      title: "Reverse Logistics as a Strategic Opportunity: Value Streams, 4 R's & Circular Economy",
      unit: "Mid Sem Important",
      marks: 14,
      lecture: "Mid-Sem Master Notes · Reverse Logistics Strategy",
      summary:
        "Comprehensive 14-mark master note critically evaluating Reverse Logistics: transition from waste stream to value stream, economic value recapture, marketing differentiation, closed-loop quality intelligence, and the 4 R's of sustainability.",
      tags: [
        "Mid Sem Important",
        "Reverse Logistics",
        "Strategic Opportunity",
        "4 Rs of Sustainability",
        "Closed-Loop Supply Chain",
        "Circular Economy"
      ],
      blocks: [
        {
          type: "h3",
          text: "Definition & The Paradigm Shift in Reverse Flows"
        },
        {
          type: "p",
          text: "Reverse Logistics is the process of planning, implementing, and controlling the efficient, cost-effective flow of raw materials, in-process inventory, finished goods, and related information from the point of consumption back to the point of origin or proper disposal for value recapture or environmentally compliant disposition."
        },
        {
          type: "ul",
          items: [
            "**Traditional Perspective**: Reverse logistics was regarded as an unavoidable cost center, a 'necessary evil,' or 'zombie inventory' that clutters warehouse space and consumes labor.",
            "**Strategic TQM Perspective**: Reverse logistics is recognized as a strategic value stream that drives margin recovery, customer loyalty, closed-loop quality intelligence, and compliance with environmental regulations."
          ]
        },
        {
          type: "h3",
          text: "Four Strategic Value Drivers of Reverse Logistics"
        },
        {
          type: "table",
          headers: ["Strategic Value Driver", "Operational Mechanism", "Strategic Business & Environmental Benefit", "Benchmark Industrial Case"],
          rows: [
            [
              "**1. Economic Value Recapture**",
              "Multi-tiered disposition routing: Restock as New $\\rightarrow$ Refurbish $\\rightarrow$ Remanufacture $\\rightarrow$ Parts Harvesting $\\rightarrow$ Recycling.",
              "Recaptures residual economic value rather than writing off returned merchandise as a 100% loss.",
              "*Kodak and Fuji remanufacturing single-use camera bodies collected from photo processing labs at a fraction of initial tooling costs.*"
            ],
            [
              "**2. Marketing Differentiation & Customer Retention**",
              "Hassle-free, transparent returns policy reducing perceived purchase risk for consumers.",
              "Increases initial checkout conversion rates; prompt refunds transform dissatisfied buyers into loyal repeat purchasers.",
              "*Leading online apparel retailers utilizing pre-printed return labels and instant QR-code drop-offs to gain market share.*"
            ],
            [
              "**3. Closed-Loop Quality Intelligence**",
              "Capturing return root-cause failure codes and customer feedback in databases connected to R&D and QA.",
              "Identifies design defects, misleading web catalog specifications, or transit packaging flaws to correct forward blueprints.",
              "*Computer manufacturers analyzing return technician tear-down logs to identify that 40% of returns were due to confusing setup manuals.*"
            ],
            [
              "**4. Environmental Sustainability & The 4 R's**",
              "Implementing the 4 R's of Sustainability: **Reuse, Remanufacture, Refurbish, Recycle**.",
              "Complies with Extended Producer Responsibility (EPR) mandates like EU WEEE and RoHS directives while harvesting precious raw materials.",
              "*Global smartphone OEMs operating closed-loop take-back programs to harvest lithium, cobalt, and gold from obsolete devices.*"
            ]
          ]
        }
      ]
    },
    {
      id: "midsem-om02-topic-3",
      slug: "midsem-ecommerce-reverse-logistics-big-data-solution",
      number: 103,
      title: "E-Commerce Reverse Logistics Design & Big Data Return Reduction Solution",
      unit: "Mid Sem Important",
      marks: 14,
      lecture: "Mid-Sem Master Notes · E-Commerce Returns Solution",
      summary:
        "Comprehensive 14-mark consultant solution for an e-commerce firm facing a 20% return rate: (1) 5-stage reverse logistics process design, (2) Big Data tools to predict and prevent returns upstream, and (3) Operational challenges with tactical solutions.",
      tags: [
        "Mid Sem Important",
        "E-Commerce Returns",
        "Reverse Logistics Design",
        "Big Data Return Reduction",
        "Predictive Sizing",
        "NLP Feedback"
      ],
      blocks: [
        {
          type: "h3",
          text: "1. Reverse Logistics Process Design (5-Stage Architecture)"
        },
        {
          type: "table",
          headers: ["Process Stage", "Operational Workflow & Rules", "Key Deliverables & Technology"],
          rows: [
            [
              "**Stage 1: Digital Gatekeeping & RMA**",
              "Self-service customer portal generating a dynamic Return Merchandise Authorization (RMA) and QR code; mandatory capture of return reason; automated 'keep it' refunds for low-value items.",
              "Dynamic RMA QR codes, reason capture dropdowns, automated cost-benefit disposition rules."
            ],
            [
              "**Stage 2: Multi-Channel Inbound Collection**",
              "Consolidate returns via parcel lockers, retail drop-off points, and courier home pickups with origin barcoding for tracking.",
              "Origin barcode tracking, consolidated parcel staging, drop-off network integration."
            ],
            [
              "**Stage 3: Centralized Returns Center (CRC)**",
              "Dedicated returns facility separating backward flows from forward fulfillment lines; instant customer refund on initial dock scan.",
              "Dedicated receiving docks, automated dock scanning, instant payment gateway refund triggers."
            ],
            [
              "**Stage 4: Automated Triage & Grading**",
              "High-speed inspection testing and grading: Grade A (New), Grade B (Open Box), Grade C (Defective/Repairable), Grade D (Scrap/Recycle).",
              "Visual inspection workstations, barcode-driven grading workflows, testing jigs."
            ],
            [
              "**Stage 5: Dynamic Disposition Routing**",
              "Grade A restocked to forward inventory within 24h; Grade B listed on outlet channel; Grade C liquidated to B2B brokers; Grade D recycled.",
              "Fast-track bin putaway, secondary market liquidation channels, certified recycling protocols."
            ]
          ]
        },
        {
          type: "h3",
          text: "2. Big Data Analytics Tools to Predict & Reduce Returns Upstream"
        },
        {
          type: "ul",
          items: [
            "**1. Predictive Sizing & 3D Virtual Fitting Algorithms**: Machine learning compares customer body profiles against garment blueprints, displaying personalized fit recommendations (*'85% of buyers with your build preferred Size L'*) to eliminate 'bracketing' (buying multiple sizes with intent to return).",
            "**2. Customer Return Propensity Clustering**: Machine learning segments user accounts based on historical Return Propensity Scores, identifying serial wardrobers and dynamically adjusting return policies or promotional incentives.",
            "**3. Natural Language Processing (NLP) on Customer Reviews**: Real-time text parsing of customer reviews and return notes to spot recurring manufacturing defects, zipper failures, or misleading photos, pausing listings before returns compound.",
            "**4. Dynamic Product Catalog Accuracy Auditing**: Computer vision algorithms matching physical warehouse inventory colors and textures against website photography to eliminate visual calibration errors."
          ]
        },
        {
          type: "h3",
          text: "3. Operational Challenges & Systematic Solutions"
        },
        {
          type: "table",
          headers: ["Operational Challenge", "Root Cause in E-Commerce", "Consultant Countermeasure & Systematic Solution"],
          rows: [
            [
              "**High Handling & Freight Costs**",
              "Fragmented single-item parcel shipments and high processing labor.",
              "**Consolidated 3PL Reverse Networks**: Aggregate return parcels into full truckload (FTL) line-hauls via specialized 3PLs (e.g., FedEx Genco, Happy Returns)."
            ],
            [
              "**Highly Variable Return Condition**",
              "Customers return items unboxed, missing components, or worn.",
              "**Standardized Triage Barcoding & Optical Grading**: Visual inspection stations with standardized barcode-driven decision workflows to grade items in under 60 seconds."
            ],
            [
              "**Inventory Depreciation ('Zombie Stock')**",
              "Returned items sit unprocessed for weeks, missing peak seasonal demand windows.",
              "**Item-Level RFID & 24-Hour Fast-Track Putaway**: Fast-track Grade-A returns back into active forward picking bins within 24 hours of dock receipt."
            ],
            [
              "**Return Fraud & Wardrobing**",
              "Customers wear garments for an event and return them for a full refund.",
              "**Tamper-Evident Security Tags & Policy Controls**: Affix visible external tags that prevent use without removal; restrict returns once tags are detached."
            ]
          ]
        }
      ]
    },
    {
      id: "midsem-om02-topic-4",
      slug: "midsem-unitization-palletization-containerization",
      number: 104,
      title: "Unitization, Palletization, and Containerization: Principles, Formats & Multimodal Economics",
      unit: "Mid Sem Important",
      marks: 14,
      lecture: "Mid-Sem Master Notes · Packaging & Freight Units",
      summary:
        "Comprehensive 14-mark master note on freight unitization: The Unit Load Principle, packaging hierarchy, Palletization formats ($48\\times40$ GMA and Euro-Pallet), and Containerization intermodal mechanics (ISO TEU, FEU, Reefer, High-Cube).",
      tags: [
        "Mid Sem Important",
        "Unitization",
        "Palletization",
        "Containerization",
        "Unit Load Principle",
        "TEU",
        "Packaging Hierarchy"
      ],
      blocks: [
        {
          type: "h3",
          text: "The Unit Load Principle & Packaging Hierarchy"
        },
        {
          type: "p",
          text: "The Unit Load Principle states that materials and packages should be consolidated into as large a single unit load as practical to minimize individual handling touchpoints, reduce handling labor, maximize vehicle space utilization, and prevent transit damage."
        },
        {
          type: "ul",
          items: [
            "**Primary Packaging**: The consumer container holding the physical product (e.g., a plastic shampoo bottle).",
            "**Secondary Packaging**: The master carton holding multiple primary containers (e.g., a corrugated box of 24 shampoo bottles).",
            "**Tertiary / Transport Packaging**: The unitized load combining secondary cartons onto pallets or into containers for freight transport."
          ]
        },
        {
          type: "h3",
          text: "Comprehensive Comparison: Unitization vs. Palletization vs. Containerization"
        },
        {
          type: "table",
          headers: ["Dimension", "Unitization", "Palletization", "Containerization"],
          rows: [
            [
              "**Core Definition**",
              "Consolidation of multiple individual items/boxes into a single cohesive unit.",
              "Stacking secondary cartons onto a standardized wooden/plastic platform for forklift tines.",
              "Loading unitized pallets into standardized, weatherproof, reusable steel shipping containers."
            ],
            [
              "**Structural Scale**",
              "Package / Master Carton Level",
              "Intermediate Unit Load Level ($1 - 2\\text{ tons}$)",
              "Macro Freight / Intermodal Level ($20 - 30\\text{ tons}$)"
            ],
            [
              "**Standard Base**",
              "Stretch-wrap, shrink-wrap, strapping, slip-sheets.",
              "GMA ($48\\times40\\text{ in}$) / Euro-Pallet ($1200\\times800\\text{ mm}$).",
              "ISO Intermodal Steel Container (20ft TEU / 40ft FEU)."
            ],
            [
              "**Handling Equipment**",
              "Automated stretch wrappers, conveyors.",
              "Forklifts, pallet jacks, AS/RS cranes.",
              "Ship-to-shore gantry cranes, straddle carriers, reach stackers."
            ],
            [
              "**Primary Operating Domain**",
              "Packaging lines & warehouse staging areas.",
              "Storage racking & highway trailer interiors.",
              "Intercontinental ocean, rail, and highway multimodal corridors."
            ],
            [
              "**Key Economic Benefit**",
              "Package integrity and ease of manual handling.",
              "Cuts truck loading time from 4 hours to 30 minutes; racking density.",
              "Frictionless intermodal transfer; eliminates pilferage and maritime damage."
            ],
            [
              "**Industrial Case Example**",
              "*Applying rotational stretch-film around 48 cartons of motor oil.*",
              "*Robotic palletizer stacking 80 cases of cereal on a $48\\times40$ wooden pallet.*",
              "*40-ft ISO container moving from Shenzhen ocean ship to US double-stack rail flatcar.*"
            ]
          ]
        }
      ]
    },
    {
      id: "midsem-om02-topic-5",
      slug: "midsem-cycle-view-supply-chain-processes",
      number: 105,
      title: "The Cycle View of Supply Chain Processes: Order, Replenishment, Manufacturing & Procurement Cycles",
      unit: "Mid Sem Important",
      marks: 14,
      lecture: "Mid-Sem Master Notes · Cycle View",
      summary:
        "Comprehensive 14-mark master note on Sunil Chopra's Cycle View of supply chain processes: detailed analysis of the 4 cycles (Customer Order, Replenishment, Manufacturing, Procurement), interfacing stages, sub-processes, and operational triggers.",
      tags: [
        "Mid Sem Important",
        "Cycle View",
        "Customer Order Cycle",
        "Replenishment Cycle",
        "Manufacturing Cycle",
        "Procurement Cycle",
        "Chopra"
      ],
      blocks: [
        {
          type: "diagram",
          kind: "supply-chain-flow",
          caption: "Supply Chain 4-Cycle Pipeline Architecture"
        },
        {
          type: "h3",
          text: "Conceptual Foundations of the Cycle View"
        },
        {
          type: "p",
          text: "Sunil Chopra's Cycle View defines supply chain processes as divided into a series of distinct cycles, each performed at the interface between two successive stages of the supply chain. While each cycle shares 6 fundamental sub-processes, they differ significantly in demand uncertainty, batch size, and lead time."
        },
        {
          type: "h3",
          text: "Detailed Breakdown of the Four Supply Chain Cycles"
        },
        {
          type: "table",
          headers: ["Supply Chain Cycle", "Interfacing Stages", "Demand Characteristics", "Key Sequential Activities", "Operational Trigger"],
          rows: [
            [
              "**1. Customer Order Cycle**",
              "Customer $\\leftrightarrow$ Retailer",
              "External, stochastic, highly uncertain.",
              "Customer arrival, order entry, order fulfillment (checkout/picking), order receiving.",
              "Customer places an order or selects goods from a retail shelf."
            ],
            [
              "**2. Replenishment Cycle**",
              "Retailer $\\leftrightarrow$ Distributor",
              "Driven by retail inventory depletion; batched in case/pallet quantities.",
              "Retail order trigger based on ROP, distributor order picking, transport dispatch, retail receiving & restocking.",
              "Store inventory drops below safety stock / reorder point (ROP)."
            ],
            [
              "**3. Manufacturing Cycle**",
              "Distributor $\\leftrightarrow$ Manufacturer",
              "Scheduled on distributor orders or MPS; large production batch sizes.",
              "MPS scheduling, machine setup, component assembly, QA testing, finished goods shipping.",
              "Distributor replenishment order or forecasted production schedule."
            ],
            [
              "**4. Procurement Cycle**",
              "Manufacturer $\\leftrightarrow$ Tier-1 Supplier",
              "**Dependent Demand** calculated from BOM via MRP; deterministic once MPS locked.",
              "MRP calculation, purchase order release, supplier machining, QA testing, factory dock receiving.",
              "Manufacturer releases supplier POs to support assembly line schedule."
            ]
          ]
        },
        {
          type: "h3",
          text: "Six Sub-Processes Common to Every Cycle"
        },
        {
          type: "ol",
          items: [
            "**1. Supplier Marketing**: Communicating product availability, lead times, and pricing to the buyer.",
            "**2. Buyer Order Arrival**: Buyer generating and transmitting an order to the supplier.",
            "**3. Supplier Order Receiving**: Supplier logging the order into ERP and committing delivery dates.",
            "**4. Supplier Order Fulfillment**: Supplier producing, picking, and dispatching the shipment.",
            "**5. Buyer Order Receiving**: Buyer taking physical delivery, inspecting, and updating inventory ledgers.",
            "**6. Reverse Flows**: Returning defective items, reusable pallets, or transit packaging back to the supplier."
          ]
        }
      ]
    },
    {
      id: "midsem-om02-topic-6",
      slug: "midsem-supply-chain-definition-processes",
      number: 106,
      title: "What is a Supply Chain and Supply Chain Process? End-to-End Workflow with Detergent Case",
      unit: "Mid Sem Important",
      marks: 14,
      lecture: "Mid-Sem Master Notes · SCM Fundamentals",
      summary:
        "Comprehensive 14-mark master note defining a supply chain and supply chain process, detailing physical, informational, and financial dimensions, and walking through an end-to-end industrial example of a liquid laundry detergent supply chain.",
      tags: [
        "Mid Sem Important",
        "Supply Chain Definition",
        "Supply Chain Process",
        "End-to-End Workflow",
        "Supply Chain Surplus",
        "Detergent Example"
      ],
      blocks: [
        {
          type: "h3",
          text: "1. Definition of a Supply Chain & Supply Chain Surplus"
        },
        {
          type: "p",
          text: "A Supply Chain encompasses all facilities, functions, activities, and organizations involved in the flow and transformation of goods and services from the raw materials stage through to the end consumer, along with associated two-way information, financial, and reverse flows. Its primary objective is to satisfy customer demand while maximizing total Supply Chain Surplus:"
        },
        {
          type: "quote",
          text: "\\text{Supply Chain Surplus} = \\text{Revenue Generated from Customer} - \\text{Total Supply Chain Costs across all Tiers}"
        },
        {
          type: "h3",
          text: "2. Definition of a Supply Chain Process"
        },
        {
          type: "p",
          text: "A Supply Chain Process is a structured, ordered sequence of activities and business workflows designed to convert operational inputs (raw materials, capital, labor, demand data) into valuable outputs (finished products, customer fulfillment, services) across organizational boundaries."
        },
        {
          type: "h3",
          text: "3. End-to-End Supply Chain Process Example: Liquid Laundry Detergent"
        },
        {
          type: "table",
          headers: ["Stage", "Supply Chain Echelon", "Operational Process Tasks", "Physical & Information Flow"],
          rows: [
            [
              "**Stage 1**",
              "**Raw Material Sourcing (Petrochemical & Agriculture)**",
              "Petroleum refiners extract crude oil; chemical plants synthesize active cleaning agents (surfactants, builders, enzymes, fragrances).",
              "Chemical bulk tankers ship liquid surfactants; resin plants supply HDPE plastic pellets."
            ],
            [
              "**Stage 2**",
              "**Packaging & Manufacturing Plant**",
              "Blow-molding machines convert HDPE pellets into bottles/caps; vats blend surfactant formulas; high-speed conveyor lines fill, cap, label, and pack 6 bottles per case.",
              "Master cartons packed; MRP updates raw material consumption."
            ],
            [
              "**Stage 3**",
              "**Warehousing & Unitization**",
              "Robotic palletizers stack 40 master cartons per wooden pallet in interlocking patterns with stretch-wrap; stored in high-bay racks.",
              "WMS logs pallet barcodes and updates finished goods stock."
            ],
            [
              "**Stage 4**",
              "**Transportation & Distribution Center**",
              "Full Truckload (FTL) carriers haul pallets to regional retail DC (e.g., Walmart DC); cross-docked into mixed store delivery pallets.",
              "Electronic Advance Shipping Notice (ASN) transmitted to retail DC."
            ],
            [
              "**Stage 5**",
              "**Retail Store & Consumer Fulfillment**",
              "Delivery trucks unload at store; clerks stock display shelves; consumer selects bottle, scans barcode at POS, and pays.",
              "POS scanner records sale, deducts store stock, and sends EDI replenishment signal upstream."
            ]
          ]
        }
      ]
    },
    {
      id: "midsem-om02-topic-7",
      slug: "midsem-supply-chain-planning-five-forecasting-methods",
      number: 107,
      title: "Supply Chain Planning & Five Forecasting Estimation Methods: Naïve, Moving Averages & Smoothing",
      unit: "Mid Sem Important",
      marks: 14,
      lecture: "Mid-Sem Master Notes · Forecasting Models",
      summary:
        "Comprehensive 14-mark master note on Supply Chain Planning and the Five Common Time-Series Forecasting Methods: Last Value (Naïve), Simple Average, Moving Average, Weighted Moving Average, and Exponential Smoothing with mathematical derivations and numerical examples.",
      tags: [
        "Mid Sem Important",
        "Supply Chain Planning",
        "Forecasting Methods",
        "Moving Average",
        "Weighted Moving Average",
        "Exponential Smoothing",
        "Naive Forecast"
      ],
      blocks: [
        {
          type: "h3",
          text: "Supply Chain Planning (SCP) & Role of Forecasting"
        },
        {
          type: "p",
          text: "Supply Chain Planning (SCP) is the forward-looking coordination of demand forecasts, inventory targets, production schedules, procurement commitments, and transportation capacity across a specified planning horizon to balance supply with demand profitably. Forecasting provides the foundational numerical estimates driving Aggregate Planning, Master Production Scheduling (MPS), and Material Requirements Planning (MRP)."
        },
        {
          type: "h3",
          text: "The Five Common Time-Series Forecasting Methods"
        },
        {
          type: "table",
          headers: ["Method", "Mathematical Formula", "Core Operational Principle", "Numerical Worked Example"],
          rows: [
            [
              "**1. Last Value (Naïve) Method**",
              "$F_{t+1} = A_t$",
              "Assumes past history has zero relevance; most recent observation is the best estimator of the immediate future.",
              "Actual March demand $A_{\\text{Mar}} = 450\\text{ units} \\implies F_{\\text{Apr}} = \\mathbf{450\\text{ units}}$."
            ],
            [
              "**2. Simple Average Method**",
              "$F_{t+1} = \\frac{1}{t} \\sum_{i=1}^{t} A_i$",
              "Gives equal weight ($\\frac{1}{t}$) to every historical observation; best for mature, stationary demand with zero trend.",
              "Past 4 quarters: $100, 120, 110, 130\\text{ units} \\implies F_5 = \\frac{460}{4} = \\mathbf{115\\text{ units}}$."
            ],
            [
              "**3. Moving Average (n-Period)**",
              "$F_{t+1} = \\frac{\\sum_{i=t-n+1}^{t} A_i}{n}$",
              "Averages demand over a fixed rolling window of $n$ periods, dropping older data; smooths random noise.",
              "Demand for Jan, Feb, Mar is $200, 220, 240 \\implies F_{\\text{Apr}} = \\frac{660}{3} = \\mathbf{220\\text{ units}}$."
            ],
            [
              "**4. Weighted Moving Average**",
              "$F_{t+1} = \\sum_{i=1}^{n} w_i A_{t-i+1}$ (where $\\sum w_i = 1.0$)",
              "Assigns unequal weights to historical periods within window; places highest weight on most recent data.",
              "Weights $0.50, 0.30, 0.20$ on demand $150, 120, 100 \\implies F = (0.5\\times150)+(0.3\\times120)+(0.2\\times100) = \\mathbf{131\\text{ units}}$."
            ],
            [
              "**5. Exponential Smoothing**",
              "$F_{t+1} = \\alpha A_t + (1 - \\alpha) F_t = F_t + \\alpha (A_t - F_t)$",
              "Weights decline exponentially with age of data; new forecast equals old forecast plus fraction $\\alpha$ of error $e_t$.",
              "Last forecast $F_t = 1600$, Actual $A_t = 1800$, $\\alpha = 0.30 \\implies F_{t+1} = 1600 + 0.30(1800-1600) = \\mathbf{1660\\text{ units}}$."
            ]
          ]
        }
      ]
    },
    {
      id: "midsem-om02-topic-8",
      slug: "midsem-multi-layer-supply-chain-three-flows",
      number: 108,
      title: "Multi-Layer Supply Chain Architecture: Product Flow, Cash Flow & Information / Data Flow",
      unit: "Mid Sem Important",
      marks: 14,
      lecture: "Mid-Sem Master Notes · Multi-Layer Flows",
      summary:
        "Comprehensive 14-mark master note analyzing the multi-layer (multi-echelon) supply chain architecture and the three synchronized flows: (1) Product/Physical Flow, (2) Information & Data Flow, and (3) Financial & Cash Flow with Cash-to-Cash (C2C) cycle dynamics.",
      tags: [
        "Mid Sem Important",
        "Multi-Layer Supply Chain",
        "Product Flow",
        "Information Flow",
        "Cash Flow",
        "Cash-to-Cash Cycle",
        "Multi-Echelon"
      ],
      blocks: [
        {
          type: "h3",
          text: "1. Architecture of a Multi-Layer (Multi-Echelon) Supply Chain"
        },
        {
          type: "p",
          text: "A Multi-Layer Supply Chain is an interconnected network of sequential echelons spanning from primary raw material extraction through manufacturing and distribution stages to the final consumer. It is structured into Tier-2 Suppliers (raw materials), Tier-1 Suppliers (modular sub-assemblies), Focal Manufacturer (assembly), Distributors (bulk warehousing), Retailers (point-of-sale), and End Consumers."
        },
        {
          type: "h3",
          text: "2. The Three Core Synchronized Supply Chain Flows"
        },
        {
          type: "table",
          headers: ["Flow Dimension", "Flow Direction & Nature", "Operational Content & Mechanisms", "Industrial Case Example"],
          rows: [
            [
              "**1. Product / Physical Flow**",
              "**Forward (Downstream)**: Raw materials $\\rightarrow$ Finished goods.\\n**Reverse (Upstream)**: Defective returns, recalls, packaging.",
              "Movement and storage of raw materials, parts, sub-assemblies, and finished goods; packaging protection, palletization, transport.",
              "*Steel coils shipped from steel mill to stamping plant, to auto assembly plant, through dealer network to car driver.*"
            ],
            [
              "**2. Information & Data Flow**",
              "**Two-Way (Bi-Directional)**:\\n• Upstream: POS scans, orders, forecasts.\\n• Downstream: ASNs, tracking, manuals.",
              "Transmission of customer demand signals, electronic purchase orders (EDI 850), Advance Shipping Notices (ASN 856), GPS telematics.",
              "*EDI systems automatically sending ASNs as a truck departs a DC, alerting store receiving docks to stage cross-dock labor.*"
            ],
            [
              "**3. Financial / Cash Flow**",
              "**Backward (Upstream)**: Consumer payment $\\rightarrow$ Supplier payment.\\n**Forward (Downstream)**: Refunds, rebates.",
              "Transmission of payments, electronic fund transfers (EFT), invoice settlements, credit terms; governed by Cash-to-Cash (C2C) cycle time.",
              "*Dell collecting payment online immediately ($DSO \\approx 0$), holding minimal stock ($DIO \\approx 4\\text{d}$), paying vendors in 60d ($DPO \\approx 60\\text{d}$), yielding negative C2C.*"
            ]
          ]
        },
        {
          type: "h3",
          text: "The Cash-to-Cash (C2C) Operating Metric"
        },
        {
          type: "quote",
          text: "\\text{Cash-to-Cash Cycle Time (C2C)} = \\text{Days Inventory Outstanding (DIO)} + \\text{Days Sales Outstanding (DSO)} - \\text{Days Payables Outstanding (DPO)}"
        }
      ]
    },

    // ===================================================
    // REMAINING SYLLABUS TOPICS
    // ===================================================
    {
      id: "om02-topic-1",
      slug: "logistics-7rs-total-cost",
      number: 1,
      title: "Integrated Logistics Management: Definition, The 7 R's, Inbound vs. Outbound Logistics, and Total Cost Concept",
      unit: "Logistics Concepts & Operations",
      marks: 14,
      lecture: "Lecture 1: Foundations of Integrated Logistics",
      summary:
        "Comprehensive 14-mark master note on Integrated Logistics Management: Council of Supply Chain Management Professionals (CSCMP) definition, the Seven Rights (7 R's) of Logistics, Inbound vs. Outbound logistics architecture, and Total Cost Concept trade-offs.",
      tags: ["Logistics Management", "7 Rs of Logistics", "Inbound vs Outbound", "Total Cost Concept"],
      blocks: [
        {
          type: "h3",
          text: "Definition & Conceptual Foundations of Logistics"
        },
        {
          type: "p",
          text: "Logistics Management is defined by CSCMP as that part of Supply Chain Management that plans, implements, and controls the efficient flow and storage of goods, services, and related information from origin to consumption."
        }
      ]
    },
    {
      id: "om02-topic-2",
      slug: "transportation-modes-carrier-selection",
      number: 2,
      title: "Transportation Infrastructure & Intermodal Logistics: 5 Modes Comparison, Carrier Selection Matrix & Containerization",
      unit: "Logistics Concepts & Operations",
      marks: 14,
      lecture: "Lecture 2: Freight Transportation Infrastructure",
      summary:
        "Comprehensive 14-mark master note on Logistical Transportation: operating and cost characteristics of the 5 basic transportation modes (Rail, Road, Water, Air, Pipeline), Carrier Selection Decision Matrix, and Intermodal Containerization.",
      tags: ["Transportation Modes", "Carrier Selection", "Intermodal Freight", "Containerization"],
      blocks: [
        {
          type: "h3",
          text: "Five Transportation Modes Comparative Architecture"
        },
        {
          type: "p",
          text: "Road (high accessibility, door-to-door), Rail (heavy bulk overland), Water (lowest cost per ton-mile global mass freight), Air (fastest transit velocity for high-value items), Pipeline (continuous fluid flow)."
        }
      ]
    },
    {
      id: "om02-topic-3",
      slug: "inventory-models-eoq-rop-selective-control",
      number: 3,
      title: "Logistical Inventory Models: EOQ Derivation, Safety Stock, Reorder Point (ROP) & Selective Inventory Control",
      unit: "Logistical Design & Inventory Control",
      marks: 14,
      lecture: "Lecture 3: Inventory Control Systems",
      summary:
        "Comprehensive 14-mark master note on Logistical Inventory Management: mathematical derivation of Economic Order Quantity (EOQ), Total Annual Cost equations, Safety Stock ($SS = Z\\sigma_L$), Reorder Point (ROP), and Selective Inventory Control techniques.",
      tags: ["Inventory Models", "EOQ Derivation", "Safety Stock", "ROP", "ABC Analysis"],
      blocks: [
        {
          type: "diagram",
          kind: "eoq-model",
          caption: "Economic Order Quantity (EOQ) Cost Trade-off Parabola & Optimal Batch Size"
        },
        {
          type: "h3",
          text: "1. Mathematical Derivation of Economic Order Quantity (EOQ)"
        },
        {
          type: "quote",
          text: "Q^* = \\sqrt{\\frac{2DS}{H}}"
        }
      ]
    },
    {
      id: "om02-topic-4",
      slug: "facility-location-center-of-gravity",
      number: 4,
      title: "Logistical Network Design: Center-of-Gravity Method & Network Cost Trade-off Curves",
      unit: "Logistical Design & Inventory Control",
      marks: 14,
      lecture: "Lecture 4: Network Design & Facility Location",
      summary:
        "Comprehensive 14-mark master note on Logistical Network Design: qualitative and quantitative facility location drivers, Center-of-Gravity (Centroid) mathematical model, and network cost trade-off curves.",
      tags: ["Network Design", "Center of Gravity", "Facility Location", "Square Root Law"],
      blocks: [
        {
          type: "h3",
          text: "1. Center-of-Gravity (Centroid) Mathematical Model"
        },
        {
          type: "quote",
          text: "X^* = \\frac{\\sum (W_i X_i)}{\\sum W_i}, \\quad Y^* = \\frac{\\sum (W_i Y_i)}{\\sum W_i}"
        }
      ]
    },
    {
      id: "om02-topic-5",
      slug: "logistics-vs-supply-chain-management",
      number: 5,
      title: "Logistics vs. Supply Chain Management: Evolution, Boundary Scope & 10-Point Comparison Matrix",
      unit: "Supply Chain Strategy & Process Views",
      marks: 14,
      lecture: "Lecture 5: Evolution & Boundaries of SCM",
      summary:
        "Comprehensive 14-mark master note contrasting Logistics Management with Supply Chain Management across strategic, operational, and structural axes.",
      tags: ["Logistics vs SCM", "SCM Evolution", "Value Chain"],
      blocks: [
        {
          type: "h3",
          text: "Logistics vs. Supply Chain Management 10-Point Comparison Matrix"
        },
        {
          type: "p",
          text: "Logistics focuses on single-firm physical flow and storage at lowest total cost; SCM orchestrates multi-tier cross-enterprise value chains to maximize total Supply Chain Surplus."
        }
      ]
    },
    {
      id: "om02-topic-7",
      slug: "strategic-fit-fisher-model-drivers",
      number: 7,
      title: "Achieving Strategic Fit: Implied Demand Uncertainty, Efficient vs. Responsive Chains & The 6 Drivers",
      unit: "Supply Chain Strategy & Process Views",
      marks: 14,
      lecture: "Lecture 7: Strategic Fit & Supply Chain Drivers",
      summary:
        "Comprehensive 14-mark master note on achieving Strategic Fit in supply chains: Marshall Fisher's model, Implied Demand Uncertainty curve, and Sunil Chopra's 6 Drivers.",
      tags: ["Strategic Fit", "Fisher Model", "Supply Chain Drivers"],
      blocks: [
        {
          type: "diagram",
          kind: "strategic-fit-grid",
          caption: "Marshall Fisher's Strategic Fit Frontier: Matching Products with Supply Chains"
        },
        {
          type: "h3",
          text: "Fisher's Framework (Functional vs. Innovative Products)"
        },
        {
          type: "p",
          text: "Functional products with predictable demand match physically efficient supply chains; innovative products with volatile demand match market-responsive supply chains."
        }
      ]
    },
    {
      id: "om02-topic-8",
      slug: "bullwhip-effect-causes-countermeasures",
      number: 8,
      title: "The Bullwhip Effect: Demand Variance Amplification, 4 Root Causes & Countermeasure Levers",
      unit: "Supply Chain Coordination & Sourcing",
      marks: 14,
      lecture: "Lecture 8: Bullwhip Dynamics & Coordination",
      summary:
        "Comprehensive 14-mark master note on the Bullwhip Effect: Hau Lee's variance amplification theory, 4 operational root causes, and systemic countermeasures.",
      tags: ["Bullwhip Effect", "Hau Lee", "VMI", "CPFR", "EDLP"],
      blocks: [
        {
          type: "diagram",
          kind: "bullwhip-effect",
          caption: "Upstream Demand Variance Amplification Wave & 4 Root Causes"
        },
        {
          type: "h3",
          text: "The Four Root Causes & Countermeasure Framework"
        },
        {
          type: "p",
          text: "Forecast updating (VMI/CPFR), Order batching (EDI/Milk runs), Price promotions (EDLP), and Shortage gaming (Capacity allocation by past sales)."
        }
      ]
    },
    {
      id: "om02-topic-9",
      slug: "3pl-4pl-logistics-service-providers",
      number: 9,
      title: "Third-Party Logistics (3PL) vs. Fourth-Party Logistics (4PL): Capabilities & Sourcing Architecture",
      unit: "Supply Chain Coordination & Sourcing",
      marks: 14,
      lecture: "Lecture 9: Logistics Outsourcing & 3PL/4PL Models",
      summary:
        "Comprehensive 14-mark master note on Logistics Service Providers: definitions and capabilities of 1PL, 2PL, 3PL, and 4PL, comparative architecture, and the outsourcing matrix.",
      tags: ["3PL", "4PL", "Logistics Outsourcing", "Lead Logistics Provider"],
      blocks: [
        {
          type: "h3",
          text: "Third-Party Logistics (3PL) vs. Fourth-Party Logistics (4PL) Comparison"
        },
        {
          type: "p",
          text: "3PL executes asset-based warehousing and transport operations; 4PL acts as a non-asset-based master supply chain architect and technology integrator."
        }
      ]
    }
  ],
  examQuestions: [
    {
      id: "om02-eq-1",
      number: 1,
      title: "Big Data Analytics in Supply Chain Decision Making: Forecasting, Inventory & Risk Management",
      marks: 14,
      relatedSlugs: ["midsem-big-data-analytics-supply-chain"],
      question:
        "Big data analytics has transformed decision making in supply chain. Discuss the significance of big data in supply chain with reference to: (1) Demand forecasting, (2) Inventory optimization, and (3) Risk management, citing industrial examples and analytical methodologies.",
      blocks: [
        {
          type: "h3",
          text: "1. Definition of Big Data in SCM"
        },
        {
          type: "p",
          text: "Big data refers to massive, high-velocity datasets (Volume, Velocity, Variety) processed through machine learning and advanced analytics to convert raw operational feeds into predictive and prescriptive intelligence."
        },
        {
          type: "h3",
          text: "2. Strategic Significance Across 3 Key Domains"
        },
        {
          type: "table",
          headers: ["SCM Domain", "Traditional Practice", "Big Data Analytics Transformation", "Industrial Case"],
          rows: [
            ["**Demand Forecasting**", "Historical sales time series in isolation.", "Multi-variable demand sensing (web trends, weather, sentiment, competitor pricing).", "*Blue Yonder generating 150M daily probability distributions.*"],
            ["**Inventory Optimization**", "Static safety stock ($SS = Z\\sigma_L$).", "Dynamic multi-echelon buffer sizing & direct POS-driven continuous replenishment.", "*Walmart & P&G automating live register VMI replenishment.*"],
            ["**Risk Management**", "Reactive expediting after cargo delays.", "Centralized control towers, predictive AIS vessel tracking & active IoT temperature tags.", "*FedEx SenseAware sensor tags tracking biological shipments.*"]
          ]
        }
      ]
    },
    {
      id: "om02-eq-2",
      number: 2,
      title: "Reverse Logistics as a Strategic Opportunity: Value Streams, 4 R's & Circular Economy",
      marks: 14,
      relatedSlugs: ["midsem-reverse-logistics-strategic-opportunity"],
      question:
        "'Reverse logistics is just not about return. It is a strategic opportunity.' Critically evaluate this statement. Discuss the transition from waste stream to value stream, economic value recapture, marketing differentiation, closed-loop quality intelligence, and the 4 R's of sustainability.",
      blocks: [
        {
          type: "h3",
          text: "Critical Evaluation: Waste Stream to Strategic Value Stream"
        },
        {
          type: "table",
          headers: ["Strategic Value Driver", "Operational Mechanism", "Business & Environmental Benefit", "Benchmark Industrial Case"],
          rows: [
            ["**1. Economic Value Recapture**", "Tiered disposition (Restock $\\rightarrow$ Refurbish $\\rightarrow$ Remanufacture $\\rightarrow$ Harvest).", "Extracts residual margin rather than 100% write-off loss.", "*Kodak remanufacturing single-use camera bodies.*"],
            ["**2. Marketing & Retention**", "Frictionless, transparent returns reducing purchase risk.", "Increases checkout conversion and customer lifetime value.", "*Online apparel retailers with pre-printed return labels.*"],
            ["**3. Quality Intelligence**", "Failure code databases linked directly to R&D and QA.", "Eliminates forward design defects and misleading catalogs.", "*Computer OEMs fixing setup manuals to cut 40% returns.*"],
            ["**4. The 4 R's & Compliance**", "Reuse, Remanufacture, Refurbish, Recycle.", "Meets EPR / WEEE mandates and harvests precious metals.", "*Smartphone OEMs harvesting gold, cobalt, lithium.*"]
          ]
        }
      ]
    },
    {
      id: "om02-eq-3",
      number: 3,
      title: "E-Commerce Reverse Logistics Design & Big Data Return Reduction Solution",
      marks: 14,
      relatedSlugs: ["midsem-ecommerce-reverse-logistics-big-data-solution"],
      question:
        "An e-commerce company experienced a 20% return rate on products and wants to design an effective reverse logistics system while using big data analytics to reduce future returns. As a supply chain consultant, prepare a solution addressing: (1) Reverse logistics process design, (2) Big data tools to predict/reduce returns, and (3) Key challenges and how to overcome them.",
      blocks: [
        {
          type: "h3",
          text: "1. 5-Stage Reverse Logistics Process Design"
        },
        {
          type: "p",
          text: "Stage 1 (Digital Gatekeeping & Dynamic RMA) $\\rightarrow$ Stage 2 (Multi-Channel Inbound Collection) $\\rightarrow$ Stage 3 (Centralized Returns Center Receiving) $\\rightarrow$ Stage 4 (Automated Triage & Grading) $\\rightarrow$ Stage 5 (Dynamic Disposition Routing: Restock, Outlet, Liquidate, Recycle)."
        },
        {
          type: "h3",
          text: "2. Big Data Predictive Reduction Tools & Key Challenges"
        },
        {
          type: "table",
          headers: ["Big Data Tool / Challenge", "Operational Mechanism", "Strategic Mitigation Solution"],
          rows: [
            ["**Predictive Sizing AI**", "3D computer vision comparing body measurements with garment blueprints.", "Eliminates bracketing (buying multiple sizes)."],
            ["**NLP Feedback Parsing**", "Real-time text mining of customer review transcripts.", "Catches manufacturing defects and pauses bad batches."],
            ["**High Handling Costs**", "Fragmented single parcel return movements.", "**Consolidated 3PL Reverse Line-Hauls** (FedEx Genco)."],
            ["**Return Fraud & Wardrobing**", "Wearing garments for an event then returning.", "**Tamper-Evident Security Shark Tags** & policy limits."]
          ]
        }
      ]
    },
    {
      id: "om02-eq-4",
      number: 4,
      title: "Unitization, Palletization, and Containerization: Principles, Formats & Multimodal Economics",
      marks: 14,
      relatedSlugs: ["midsem-unitization-palletization-containerization"],
      question:
        "Explain the Unit Load Principle. Detail the definitions, operational mechanisms, equipment, standard dimensions, and industrial examples for: (1) Unitization, (2) Palletization (GMA and Euro-Pallet standards), and (3) Containerization (ISO TEU, FEU, Reefer).",
      blocks: [
        {
          type: "h3",
          text: "Unitization vs. Palletization vs. Containerization Comparison"
        },
        {
          type: "table",
          headers: ["Dimension", "Unitization", "Palletization", "Containerization"],
          rows: [
            ["**Scale**", "Package / Master Carton Level", "Intermediate Load ($1 - 2\\text{ tons}$)", "Macro Intermodal ($20 - 30\\text{ tons}$)"],
            ["**Standard Base**", "Stretch-wrap, shrink-wrap, strapping.", "GMA ($48\\times40\\text{ in}$) / Euro-Pallet ($1200\\times800\\text{ mm}$).", "ISO Intermodal Steel Container (20ft TEU / 40ft FEU)."],
            ["**Handling Tool**", "Automated stretch wrappers, conveyors.", "Forklifts, pallet jacks, AS/RS cranes.", "Ship-to-shore gantry cranes, reach stackers."],
            ["**Economic Benefit**", "Package integrity & ease of handling.", "Cuts truck loading time from 4h to 30 min.", "Frictionless multimodal transfer & security."],
            ["**Example**", "*Stretch-wrapping 48 oil cartons.*", "*80 cases of cereal on $48\\times40$ wooden pallet.*", "*40-ft ISO container on ocean vessel to double-stack rail.*"]
          ]
        }
      ]
    },
    {
      id: "om02-eq-5",
      number: 5,
      title: "The Cycle View of Supply Chain Processes: Order, Replenishment, Manufacturing & Procurement Cycles",
      marks: 14,
      relatedSlugs: ["midsem-cycle-view-supply-chain-processes"],
      question:
        "Explain the cycle view of supply chain processes. Detail the four constituent cycles: (1) Customer Order cycle, (2) Replenishment cycle, (3) Manufacturing cycle, and (4) Procurement cycle, explaining interfacing stages, demand uncertainty, and standard sub-processes with diagrams and examples.",
      blocks: [
        {
          type: "diagram",
          kind: "supply-chain-flow",
          caption: "Supply Chain 4-Cycle Pipeline Architecture"
        },
        {
          type: "h3",
          text: "The Four Cycles in the Cycle View"
        },
        {
          type: "table",
          headers: ["Supply Chain Cycle", "Interfacing Stages", "Demand Characteristics", "Operational Trigger"],
          rows: [
            ["**1. Customer Order Cycle**", "Customer $\\leftrightarrow$ Retailer", "External, stochastic, highly uncertain.", "Customer places order or buys from shelf."],
            ["**2. Replenishment Cycle**", "Retailer $\\leftrightarrow$ Distributor", "Driven by inventory depletion; case/pallet batches.", "Store inventory drops below reorder point (ROP)."],
            ["**3. Manufacturing Cycle**", "Distributor $\\leftrightarrow$ Manufacturer", "Scheduled on distributor orders / MPS; large batches.", "Distributor replenishment order or production MPS."],
            ["**4. Procurement Cycle**", "Manufacturer $\\leftrightarrow$ Tier-1 Supplier", "**Dependent Demand** calculated from BOM via MRP.", "Manufacturer releases supplier purchase orders."]
          ]
        }
      ]
    },
    {
      id: "om02-eq-6",
      number: 6,
      title: "What is a Supply Chain and Supply Chain Process? End-to-End Workflow with Detergent Case",
      marks: 14,
      relatedSlugs: ["midsem-supply-chain-definition-processes"],
      question:
        "What is a supply chain? What do you mean by a supply chain process? Explain the end-to-end supply chain process with a detailed worked example from raw material extraction to final customer consumption and feedback.",
      blocks: [
        {
          type: "h3",
          text: "1. Supply Chain & Supply Chain Process Definitions"
        },
        {
          type: "p",
          text: "A Supply Chain is a network of facilities, functions, and organizations transforming raw materials into finished goods for consumers to maximize Supply Chain Surplus. A Supply Chain Process is a structured, ordered sequence of activities converting inputs into customer outputs."
        },
        {
          type: "h3",
          text: "2. End-to-End Liquid Laundry Detergent Supply Chain Example"
        },
        {
          type: "table",
          headers: ["Stage", "Supply Chain Echelon", "Operational Process Tasks", "Physical & Information Flow"],
          rows: [
            ["**Stage 1**", "**Raw Material Sourcing**", "Petrochemical refiners extract oil; chemical plants synthesize surfactants; resin plants supply HDPE pellets.", "Bulk chemical tankers ship active surfactants."],
            ["**Stage 2**", "**Manufacturing Plant**", "Blow-molding bottles; blending vats mixing formula; automated lines filling, labeling, packing 6 bottles/case.", "Master cartons packed; MRP updates stock."],
            ["**Stage 3**", "**Warehousing & Unitization**", "Robotic palletizers stacking 40 cases/pallet with stretch-wrap; high-bay storage racks.", "WMS logs pallet barcodes and stock."],
            ["**Stage 4**", "**Transport & Distribution**", "FTL carriers haul pallets to regional retail DC; cross-docked into store delivery pallets.", "Electronic Advance Shipping Notice (ASN) sent."],
            ["**Stage 5**", "**Retail Store & Consumer**", "Night delivery unloads; clerks stock shelves; consumer scans at checkout, pays by card.", "POS scanner triggers EDI replenishment signal."]
          ]
        }
      ]
    },
    {
      id: "om02-eq-7",
      number: 7,
      title: "Supply Chain Planning & Five Forecasting Estimation Methods: Naïve, Moving Averages & Smoothing",
      marks: 14,
      relatedSlugs: ["midsem-supply-chain-planning-five-forecasting-methods"],
      question:
        "What is supply chain planning? Explain the five common forecasting methods for estimating demand: (1) Last value (Naïve) method, (2) Simple average method, (3) Moving average method, (4) Weighted moving average method, and (5) Exponential smoothing method, including mathematical formulas and worked examples.",
      blocks: [
        {
          type: "h3",
          text: "The Five Common Time-Series Forecasting Methods"
        },
        {
          type: "table",
          headers: ["Method", "Mathematical Formula", "Core Principle", "Numerical Worked Example"],
          rows: [
            ["**1. Last Value (Naïve)**", "$F_{t+1} = A_t$", "Most recent actual demand is best estimator of next period.", "Actual March $A_{\\text{Mar}} = 450 \\implies F_{\\text{Apr}} = \\mathbf{450\\text{ units}}$."],
            ["**2. Simple Average**", "$F_{t+1} = \\frac{1}{t} \\sum A_i$", "Equal weight to all past history; best for stationary demand.", "Past 4 quarters: $100, 120, 110, 130 \\implies F_5 = \\frac{460}{4} = \\mathbf{115\\text{ units}}$."],
            ["**3. Moving Average (n-Period)**", "$F_{t+1} = \\frac{\\sum_{i=t-n+1}^{t} A_i}{n}$", "Rolling window average of $n$ periods; smooths random noise.", "Demand for Jan, Feb, Mar is $200, 220, 240 \\implies F_{\\text{Apr}} = \\frac{660}{3} = \\mathbf{220\\text{ units}}$."],
            ["**4. Weighted Moving Average**", "$F_{t+1} = \\sum w_i A_{t-i+1}$", "Unequal weights summing to 1.0; highest weight on recent data.", "Weights $0.5, 0.3, 0.2$ on $150, 120, 100 \\implies F = 75+36+20 = \\mathbf{131\\text{ units}}$."],
            ["**5. Exponential Smoothing**", "$F_{t+1} = F_t + \\alpha (A_t - F_t)$", "Weights decline exponentially; adjusts old forecast by fraction $\\alpha$ of error.", "Last $F_t = 1600$, Actual $A_t = 1800$, $\\alpha = 0.30 \\implies F_{t+1} = 1600+0.3(200) = \\mathbf{1660\\text{ units}}$."]
          ]
        }
      ]
    },
    {
      id: "om02-eq-8",
      number: 8,
      title: "Multi-Layer Supply Chain Architecture: Product Flow, Cash Flow & Information / Data Flow",
      marks: 14,
      relatedSlugs: ["midsem-multi-layer-supply-chain-three-flows"],
      question:
        "Explain the multi-layer (multi-echelon) supply chain architecture. Detail the three core synchronized supply chain flows: (1) Product/Physical flow, (2) Cash/Financial flow, and (3) Information and data flow, explaining their directions, operational mechanisms, and the Cash-to-Cash (C2C) metric.",
      blocks: [
        {
          type: "h3",
          text: "The Three Core Synchronized Supply Chain Flows"
        },
        {
          type: "table",
          headers: ["Flow Dimension", "Flow Direction & Nature", "Operational Content & Mechanisms", "Industrial Case Example"],
          rows: [
            [
              "**1. Product / Physical Flow**",
              "**Forward**: Raw materials $\\rightarrow$ Finished goods.\\n**Reverse**: Defective returns, packaging.",
              "Movement and transformation of materials; packaging protection, palletization, multimodal transport.",
              "*Steel coils from steel mill to stamping plant, to auto assembly, through dealer network to driver.*"
            ],
            [
              "**2. Information & Data Flow**",
              "**Two-Way (Bi-Directional)**:\\n• Upstream: POS scans, orders, forecasts.\\n• Downstream: ASNs, tracking data.",
              "Electronic Data Interchange (EDI 850/856), POS scanner feeds, Advance Shipping Notices, GPS tracking.",
              "*EDI automatically generating ASNs as truck departs DC, alerting store receiving dock for cross-docking.*"
            ],
            [
              "**3. Financial / Cash Flow**",
              "**Backward**: Customer payment $\\rightarrow$ Supplier payment.\\n**Forward**: Refunds, rebates.",
              "Electronic fund transfers (EFT), invoice settlements, credit terms; Cash-to-Cash (C2C) cycle time.",
              "*Dell collecting payment online immediately ($DSO \\approx 0$), holding minimal stock ($DIO \\approx 4\\text{d}$), paying vendors in 60d ($DPO \\approx 60\\text{d}$), yielding negative C2C.*"
            ]
          ]
        },
        {
          type: "h3",
          text: "The Cash-to-Cash (C2C) Operating Metric"
        },
        {
          type: "quote",
          text: "\\text{Cash-to-Cash Cycle Time (C2C)} = \\text{Days Inventory Outstanding (DIO)} + \\text{Days Sales Outstanding (DSO)} - \\text{Days Payables Outstanding (DPO)}"
        }
      ]
    }
  ]
};
