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
    "Comprehensive master examination notes, mathematical inventory formulations, transportation network models, and 14-mark model exam answers for Logistics Management, Supply Chain Strategy, Bullwhip Mitigation, and SCM Coordination.",
  units: [
    "Mid Sem Important",
    "Logistics Foundations & Total Cost Concept",
    "Transportation Modes & Network Design",
    "Inventory Management & Warehousing",
    "Supply Chain Strategy & Coordination",
    "Sourcing, 3PL/4PL & Digital Technologies"
  ],
  topics: [
    // ===================================================
    // UNIT 1: MID SEM IMPORTANT (9 MASTER EXAM MODULES)
    // ===================================================
    {
      id: "midsem-om02-topic-1",
      slug: "midsem-logistics-7rs-total-cost",
      number: 101,
      title: "Integrated Logistics Management: Definition, The 7 R's, Inbound vs. Outbound Logistics, and Total Cost Concept",
      unit: "Mid Sem Important",
      marks: 14,
      lecture: "Mid-Sem Master Notes · Logistics Foundations",
      summary:
        "Comprehensive 14-mark master note on Integrated Logistics Management: Council of Supply Chain Management Professionals (CSCMP) definition, the Seven Rights (7 R's) of Logistics, Inbound vs. Outbound logistics architecture, and Total Cost Concept trade-offs.",
      tags: [
        "Mid Sem Important",
        "Logistics Management",
        "7 Rs of Logistics",
        "Inbound vs Outbound",
        "Total Cost Concept",
        "Cost Trade-offs"
      ],
      blocks: [
        {
          type: "h3",
          text: "Definition & Conceptual Foundations of Logistics"
        },
        {
          type: "p",
          text: "Logistics Management is defined by the Council of Supply Chain Management Professionals (CSCMP) as that part of Supply Chain Management that plans, implements, and controls the efficient, effective forward and reverse flow and storage of goods, services, and related information between the point of origin and the point of consumption to meet customers' requirements."
        },
        {
          type: "h3",
          text: "The Seven Rights (7 R's) of Logistics"
        },
        {
          type: "table",
          headers: ["The 7 R's Pillar", "Operational Meaning & Strategic Requirement", "Industrial Benchmark Example"],
          rows: [
            [
              "**1. Right Product**",
              "Delivering the exact item, specification, variant, and SKU ordered by the customer without picking errors.",
              "*An e-commerce fulfillment center shipping the exact 256GB Midnight Blue smartphone model rather than a 128GB variant.*"
            ],
            [
              "**2. Right Quantity**",
              "Delivering the exact shipment volume requested; zero under-shipment (shortage) and zero over-shipment.",
              "*An automotive assembly plant receiving precisely 500 stamped door brackets for a scheduled 8-hour shift.*"
            ],
            [
              "**3. Right Condition**",
              "Ensuring goods arrive undamaged, structurally intact, and functionally operational with zero transit spoilage.",
              "*Cold-chain refrigerated transport delivering biopharmaceutical vaccines maintained strictly between 2°C and 8°C.*"
            ],
            [
              "**4. Right Place**",
              "Transporting materials to the precise designated destination, receiving dock, or point of use.",
              "*Direct-to-workstation dock delivery at an aerospace manufacturing facility rather than general central stores.*"
            ],
            [
              "**5. Right Time**",
              "Delivering within the agreed customer time window; avoiding early delivery (excess holding cost) and late delivery (line stoppage).",
              "*Just-in-Time (JIT) delivery of vehicle seats arriving at the assembly line 15 minutes prior to chassis fitment.*"
            ],
            [
              "**6. Right Customer**",
              "Ensuring delivery documentation and physical freight reach the authentic authorized consignee.",
              "*Express courier biometric signature verification upon high-value diamond jewelry delivery.*"
            ],
            [
              "**7. Right Cost**",
              "Achieving customer service satisfaction at the lowest total logistical expenditure to preserve profit margins.",
              "*Optimizing truckload cube utilization to achieve a competitive freight cost per kilogram ($0.12/kg).*"
            ]
          ]
        },
        {
          type: "h3",
          text: "Inbound vs. Outbound Logistics Comparison"
        },
        {
          type: "table",
          headers: ["Operational Dimension", "Inbound Logistics (Upstream)", "Outbound Logistics (Downstream)"],
          rows: [
            [
              "**Primary Focus**",
              "Procurement, movement, and storage of incoming raw materials, parts, and sub-assemblies from suppliers.",
              "Storage, packaging, order picking, and distribution of finished goods to wholesalers, retailers, and end-consumers."
            ],
            [
              "**Key Stakeholders**",
              "Tier-1 and Tier-2 component vendors, freight forwarders, customs brokers, purchasing department.",
              "Finished goods distribution centers (DCs), wholesale distributors, retail store managers, end-consumers."
            ],
            [
              "**Demand Nature**",
              "Dependent demand derived mathematically from Master Production Schedule (MPS) and Material Requirements Planning (MRP).",
              "Independent demand driven by stochastic consumer buying patterns, seasonality, and promotional campaigns."
            ],
            [
              "**Critical Optimization Goal**",
              "Minimizing material acquisition lead times, raw material holding costs, and preventing factory line shutdowns.",
              "Maximizing order fill rates, on-time delivery percentages (OTIF), and minimizing final-mile parcel delivery costs."
            ],
            [
              "**Core Operations**",
              "Supplier dock scheduling, customs clearance, receiving inspection, raw material warehouse kitting.",
              "Finished goods picking, pallet stretch-wrapping, transportation route dispatch, parcel tracking, reverse logistics."
            ]
          ]
        },
        {
          type: "h3",
          text: "The Total Cost Concept and Inter-Functional Trade-offs"
        },
        {
          type: "p",
          text: "The Total Cost Concept states that logistical decisions must be evaluated based on their impact on **Total Logistical System Cost** rather than minimizing individual functional costs in isolation. Sub-optimizing a single activity (e.g., choosing slow ocean freight to minimize transportation budget) often causes massive cost explosions in other areas (huge pipeline inventory holding costs and buffer safety stocks)."
        },
        {
          type: "quote",
          text: "\\text{Total Logistical Cost} = \\text{Transportation Cost} + \\text{Warehousing Cost} + \\text{Inventory Holding Cost} + \\text{Order Processing Cost} + \\text{Cost of Lost Sales / Stockouts}"
        },
        {
          type: "table",
          headers: ["Logistical Trade-off Scenario", "Functional Cost 1 Impact", "Functional Cost 2 Impact", "Net Total Logistical System Impact"],
          rows: [
            [
              "**Faster Freight Mode (Air vs. Rail)**",
              "Transportation Costs **increase substantially** ($$$).",
              "In-transit inventory holding costs and safety stock levels **decrease dramatically** ($).",
              "**Net Positive** for high-value, perishable, or short-lifecycle electronics (e.g., smartphones, semiconductors)."
            ],
            [
              "**Consolidating 10 Warehouses into 2 Centralized DCs**",
              "Outbound transportation delivery distances **increase** ($$).",
              "Facility overhead costs and safety stock pooling requirements **drop significantly** ($$$) via the Square Root Law.",
              "**Net Positive** for slow-moving spare parts and medical diagnostic instruments."
            ],
            [
              "**Large Production Batch Runs**",
              "Manufacturing setup costs per unit **decrease** ($).",
              "Finished goods inventory storage, holding costs, and obsolescence risks **increase substantially** ($$$).",
              "**Net Negative** in volatile consumer fashion markets."
            ]
          ]
        }
      ]
    },
    {
      id: "midsem-om02-topic-2",
      slug: "midsem-logistics-vs-supply-chain-management",
      number: 102,
      title: "Logistics vs. Supply Chain Management: Evolution, Boundary Scope & 10-Point Comparison Matrix",
      unit: "Mid Sem Important",
      marks: 14,
      lecture: "Mid-Sem Master Notes · SCM Evolution",
      summary:
        "Comprehensive 14-mark master note contrasting Logistics Management with Supply Chain Management: historical evolution from physical distribution to integrated value chains, boundary scope, and a detailed 10-point architectural comparison matrix.",
      tags: [
        "Mid Sem Important",
        "Logistics vs SCM",
        "SCM Evolution",
        "Value Chain",
        "Supply Chain Architecture"
      ],
      blocks: [
        {
          type: "h3",
          text: "Historical Evolution from Physical Distribution to SCM"
        },
        {
          type: "ul",
          items: [
            "**1. Fragmented Era (1960s)**: Functional silos; purchasing, warehousing, transportation, and customer service operated independently with conflicting objectives.",
            "**2. Integrated Logistics Era (1980s)**: Integration of Materials Management (inbound) and Physical Distribution (outbound) under a unified logistics department focusing on Total Cost Optimization.",
            "**3. Supply Chain Management Era (1990s–Present)**: Strategic end-to-end orchestration of business processes spanning multi-tier suppliers, manufacturers, distributors, 3PL providers, retailers, and end-consumers to maximize total supply chain surplus."
          ]
        },
        {
          type: "h3",
          text: "Logistics vs. Supply Chain Management: 10-Point Comparison Matrix"
        },
        {
          type: "table",
          headers: ["Comparison Axis", "Logistics Management", "Supply Chain Management (SCM)"],
          rows: [
            [
              "**1. Conceptual Scope**",
              "A specialized operational subset within SCM focusing on physical movement and storage.",
              "An overarching enterprise philosophy orchestrating cross-enterprise business processes and relationships."
            ],
            [
              "**2. Organizational Boundary**",
              "Primarily single-firm focused; manages internal warehousing, inventory, and transport operations.",
              "Multi-enterprise boundary spanning; synchronizes networks from Tier-2 suppliers to the ultimate end-consumer."
            ],
            [
              "**3. Primary Objective**",
              "Customer satisfaction through operational efficiency at the lowest total logistical cost (Right Product, Place, Time).",
              "Maximizing overall **Supply Chain Surplus** (Total Value Delivered to Customer minus Total Supply Chain Cost)."
            ],
            [
              "**4. Strategic Orientation**",
              "Tactical and operational execution (route planning, warehouse layout, freight negotiation).",
              "Strategic, long-term corporate competitive positioning, business model design, and capacity network planning."
            ],
            [
              "**5. Key Business Processes**",
              "Material handling, packaging, fleet routing, freight tracking, customs clearance, inventory warehousing.",
              "New product co-development (ESI), collaborative demand forecasting (CPFR), strategic sourcing, revenue management."
            ],
            [
              "**6. Inter-Firm Collaboration**",
              "Service-level transactional contracts with freight carriers and 3PL warehouse operators.",
              "Deep strategic alliances, joint risk-reward gain sharing, shared IT dashboards, and co-located engineering teams."
            ],
            [
              "**7. Flow Optimization**",
              "Focuses on the physical flow of goods and freight tracking documentation.",
              "Simultaneously coordinates three synchronized flows: **Product/Physical flow**, **Information flow**, and **Financial/Cash flow**."
            ],
            [
              "**8. Cost Management Lens**",
              "Total Cost Concept (trade-offs between freight, inventory holding, and facility costs).",
              "Total Cost of Ownership (TCO), Target Costing, and Value Stream Mapping across multi-tier networks."
            ],
            [
              "**9. Competitive Paradigm**",
              "Firm versus competing firm operational efficiency.",
              "**Supply Chain versus Supply Chain competition** (e.g., Toyota Supply Chain vs. General Motors Supply Chain)."
            ],
            [
              "**10. Performance Metrics**",
              "Order cycle time, damage-free delivery rate, warehouse space utilization, freight cost per ton-mile.",
              "Cash-to-Cash (C2C) cycle time, Perfect Order fulfillment rate, Return on Supply Chain Fixed Assets, Bullwhip ratio."
            ]
          ]
        }
      ]
    },
    {
      id: "midsem-om02-topic-3",
      slug: "midsem-supply-chain-process-views-cycle-push-pull",
      number: 103,
      title: "Process Views of a Supply Chain: Cycle View (4 Cycles), Push/Pull View & Decoupling Boundary",
      unit: "Mid Sem Important",
      marks: 14,
      lecture: "Mid-Sem Master Notes · Process Views",
      summary:
        "Comprehensive 14-mark master note on the process views of a supply chain: Sunil Chopra's Cycle View (Customer Order, Replenishment, Manufacturing, Procurement Cycles), Push/Pull execution mechanisms, and Decoupling Point (Postponement) architecture.",
      tags: [
        "Mid Sem Important",
        "Cycle View",
        "Push Pull View",
        "Decoupling Point",
        "Postponement",
        "Chopra Framework"
      ],
      blocks: [
        {
          type: "diagram",
          kind: "supply-chain-flow",
          caption: "Supply Chain 4-Cycle Pipeline & Push/Pull Decoupling Boundary Architecture"
        },
        {
          type: "h3",
          text: "1. The Cycle View of Supply Chain Processes"
        },
        {
          type: "p",
          text: "In the Cycle View, supply chain processes are divided into a series of 4 distinct cycles, each performed at the interface between two successive stages of the supply chain:"
        },
        {
          type: "table",
          headers: ["Supply Chain Cycle", "Interfacing Stages", "Key Sequential Activities", "Operational Trigger"],
          rows: [
            [
              "**1. Customer Order Cycle**",
              "Customer $\\leftrightarrow$ Retailer",
              "Customer arrival, order entry, order fulfillment (checkout/picking), customer order receiving.",
              "Initiated when customer places an order or selects goods from a retail shelf."
            ],
            [
              "**2. Replenishment Cycle**",
              "Retailer $\\leftrightarrow$ Distributor",
              "Retail order trigger based on ROP, distributor order picking, transportation dispatch, retail receiving & shelf restocking.",
              "Initiated when retail inventory drops below safety stock / reorder thresholds."
            ],
            [
              "**3. Manufacturing Cycle**",
              "Distributor $\\leftrightarrow$ Manufacturer",
              "Master production scheduling, fabrication & assembly, finished goods warehousing, shipping dispatch to distributor.",
              "Initiated by distributor replenishment orders or forecasted master production schedules."
            ],
            [
              "**4. Procurement Cycle**",
              "Manufacturer $\\leftrightarrow$ Tier-1 Supplier",
              "Material Requirements Planning (MRP) component calculation, purchase order generation, supplier manufacturing, dock receiving.",
              "Initiated when manufacturer releases supplier purchase orders to support component assembly."
            ]
          ]
        },
        {
          type: "h3",
          text: "2. The Push/Pull View & Decoupling Boundary Architecture"
        },
        {
          type: "table",
          headers: ["Process Dimension", "Push Process (Speculative / Forecast-Driven)", "Pull Process (Reactive / Demand-Driven)"],
          rows: [
            [
              "**Execution Trigger**",
              "Initiated in anticipation of future customer demand based on historical forecasts.",
              "Initiated strictly in direct reaction to a confirmed customer order."
            ],
            [
              "**Operating Environment**",
              "High certainty of production schedule, but high financial risk of inaccurate market forecasts.",
              "High certainty of customer demand, but high operational pressure for rapid cycle times and agility."
            ],
            [
              "**Inventory Strategy**",
              "Make-to-Stock (MTS); finished goods inventory held at distribution centers and retail stores.",
              "Make-to-Order (MTO) or Build-to-Order; minimal finished goods inventory; zero obsolescence."
            ],
            [
              "**Cost vs. Service Focus**",
              "Optimized for economies of scale, bulk production runs, and low unit manufacturing costs.",
              "Optimized for flexibility, customization, speed of response, and eliminating markdowns."
            ],
            [
              "**Industrial Example**",
              "*Consumer packaged goods (toothpaste, soap) mass-produced 3 months ahead of consumption.*",
              "*Dell custom gaming laptops assembled and shipped within 48 hours of customer web checkout.*"
            ]
          ]
        },
        {
          type: "h3",
          text: "The Decoupling Point & Postponement Strategy"
        },
        {
          type: "p",
          text: "The **Push/Pull Boundary (Decoupling Point)** is the specific operational node in the supply chain where push-based execution ends and pull-based execution begins. A modern best practice is **Postponement (Delayed Differentiation)**, where upstream generic sub-assemblies are manufactured under push economies of scale, and final customization is delayed until a confirmed pull order arrives."
        },
        {
          type: "ul",
          items: [
            "*Paint Retailer Model: Base white paint is mass-manufactured upstream (Push); custom color pigments are mixed in store only when the customer specifies the tint (Pull).*",
            "*Benetton Sweater Model: Garments are knitted in unbleached natural yarn (Push); dyeing into trendy seasonal colors is executed after fashion sales data is recorded (Pull).*"
          ]
        }
      ]
    },
    {
      id: "midsem-om02-topic-4",
      slug: "midsem-strategic-fit-fisher-model-drivers",
      number: 104,
      title: "Achieving Strategic Fit: Implied Demand Uncertainty, Efficient vs. Responsive Chains & The 6 Drivers",
      unit: "Mid Sem Important",
      marks: 14,
      lecture: "Mid-Sem Master Notes · SCM Strategy",
      summary:
        "Comprehensive 14-mark master note on achieving Strategic Fit in supply chains: Marshall Fisher's model (Functional vs. Innovative Products), Implied Demand Uncertainty curve, Responsive vs. Efficient supply chain design, and Sunil Chopra's 6 Supply Chain Drivers.",
      tags: [
        "Mid Sem Important",
        "Strategic Fit",
        "Fisher Model",
        "Responsive vs Efficient",
        "Supply Chain Drivers",
        "Chopra"
      ],
      blocks: [
        {
          type: "diagram",
          kind: "strategic-fit-grid",
          caption: "Marshall Fisher's Strategic Fit Frontier: Matching Products with Supply Chains"
        },
        {
          type: "h3",
          text: "1. Concept of Strategic Fit & The 3-Step Alignment Process"
        },
        {
          type: "p",
          text: "Strategic Fit requires that both the competitive strategy (customer priorities) and the supply chain strategy (operational capabilities) share consistent, aligned goals. Achieving strategic fit follows a 3-step protocol:"
        },
        {
          type: "ol",
          items: [
            "**Step 1: Understand the Customer and Supply Chain Uncertainty**: Map the product on the **Implied Demand Uncertainty Spectrum** (evaluating demand volatility, lead times, product variety, and stockout penalties).",
            "**Step 2: Understand the Supply Chain Capabilities**: Map supply chain capabilities on the **Responsiveness Spectrum** (ranging from high efficiency / low cost to high responsiveness / agility).",
            "**Step 3: Match Supply Chain Responsiveness with Implied Demand Uncertainty**: Ensure the operating point lies within the **Zone of Strategic Fit** (high uncertainty matches high responsiveness; low uncertainty matches high efficiency)."
          ]
        },
        {
          type: "h3",
          text: "2. Marshall Fisher's Framework: Functional vs. Innovative Products"
        },
        {
          type: "table",
          headers: ["Product / Chain Dimension", "Functional Products (Staples)", "Innovative Products (Trends / Tech)"],
          rows: [
            [
              "**Demand Predictability**",
              "Highly predictable; low demand forecast error ($< 10\\%$).",
              "Highly volatile and unpredictable; high forecast error ($40\\% - 100\\%$)."
            ],
            [
              "**Product Lifecycle**",
              "Long lifecycle (more than 2 years to several decades).",
              "Short lifecycle (3 months to 1 year; fast obsolescence)."
            ],
            [
              "**Contribution Margin**",
              "Low contribution margins ($5\\% - 20\\%$); high price sensitivity.",
              "High contribution margins ($20\\% - 60\\%$); premium pricing."
            ],
            [
              "**End-of-Season Markdown**",
              "Near-zero markdowns; stable continuous consumption.",
              "High markdowns ($10\\% - 40\\%$) if overstocked."
            ],
            [
              "**Aligned Supply Chain Strategy**",
              "**Physically Efficient Supply Chain**: Maximize equipment utilization ($>95\\%$), minimize warehouse inventory, ship via full truckloads.",
              "**Market-Responsive Supply Chain**: Deploy excess buffer capacity, maintain safety stock, utilize express air freight, compress lead times."
            ],
            [
              "**Corporate Example**",
              "*Campbell's Tomato Soup, salt, basic cotton underwear.*",
              "*Zara fast-fashion collections, Apple flagship iPhone launches.*"
            ]
          ]
        },
        {
          type: "h3",
          text: "3. Sunil Chopra's Six Supply Chain Drivers"
        },
        {
          type: "table",
          headers: ["Driver Category", "Specific Supply Chain Driver", "Efficiency Strategy Focus", "Responsiveness Strategy Focus"],
          rows: [
            [
              "**Logistical Drivers**",
              "**1. Facilities**",
              "Centralized mega-facilities with high economies of scale.",
              "Decentralized local warehouses located near major urban customer clusters."
            ],
            [
              "**Logistical Drivers**",
              "**2. Inventory**",
              "Low cycle and safety stocks; high inventory turnover.",
              "Strategic safety stock buffers held in modular, customizable forms."
            ],
            [
              "**Logistical Drivers**",
              "**3. Transportation**",
              "Slow, consolidated bulk modes (Full Truckload, Rail, Ocean).",
              "Fast, flexible, small-batch modes (Air freight, Dedicated courier, LTL)."
            ],
            [
              "**Cross-Functional Drivers**",
              "**4. Information**",
              "Standard batch EDI ordering and monthly demand forecasts.",
              "Real-time Point-of-Sale (POS) data streaming, live RFID tracking, CPFR."
            ],
            [
              "**Cross-Functional Drivers**",
              "**5. Sourcing**",
              "Low-cost offshore suppliers with long maritime lead times.",
              "Nearshore flexible suppliers with short turnaround times and co-design agility."
            ],
            [
              "**Cross-Functional Drivers**",
              "**6. Pricing**",
              "Everyday Low Pricing (EDLP) to stabilize customer order flow.",
              "Dynamic surge pricing and yield management based on real-time availability."
            ]
          ]
        }
      ]
    },
    {
      id: "midsem-om02-topic-5",
      slug: "midsem-bullwhip-effect-causes-countermeasures",
      number: 105,
      title: "The Bullwhip Effect: Demand Variance Amplification, 4 Root Causes & Countermeasure Levers",
      unit: "Mid Sem Important",
      marks: 14,
      lecture: "Mid-Sem Master Notes · Supply Chain Coordination",
      summary:
        "Comprehensive 14-mark master note on the Bullwhip Effect: Hau Lee's variance amplification theory, mathematical formulation ($\\sigma^2_{\\text{Supplier}} \\gg \\sigma^2_{\\text{Retailer}}$), the 4 operational root causes, and systemic managerial countermeasures.",
      tags: [
        "Mid Sem Important",
        "Bullwhip Effect",
        "Hau Lee",
        "Demand Amplification",
        "VMI",
        "CPFR",
        "EDLP"
      ],
      blocks: [
        {
          type: "diagram",
          kind: "bullwhip-effect",
          caption: "Upstream Demand Variance Amplification Wave & 4 Root Causes"
        },
        {
          type: "h3",
          text: "1. Definition & Mathematical Premise of the Bullwhip Effect"
        },
        {
          type: "p",
          text: "The Bullwhip Effect (first observed by Procter & Gamble with Pampers diapers and mathematically formulated by Hau Lee, V. Padmanabhan, and Seungjin Whang) is the phenomenon where small fluctuations in customer retail demand generate increasingly larger fluctuations in order variance as one moves upstream along the supply chain toward raw material suppliers."
        },
        {
          type: "quote",
          text: "\\text{Bullwhip Ratio} = \\frac{\\text{Variance of Orders Placed upstream } (\\sigma^2_{\\text{Orders}})}{\\text{Variance of Demand Received downstream } (\\sigma^2_{\\text{Demand}})} > 1.0"
        },
        {
          type: "h3",
          text: "2. The Four Major Operational Causes (Hau Lee Framework)"
        },
        {
          type: "table",
          headers: ["Cause Number & Title", "Root Behavioral Mechanism", "Impact on Upstream Tiers", "Managerial Countermeasure Lever"],
          rows: [
            [
              "**1. Demand Forecast Updating**",
              "Each tier treats incoming purchase orders as independent demand signals without visibility of end-consumer POS data, compounding lead-time safety stocks.",
              "Suppliers face massive phantom demand spikes followed by total order drought.",
              "**Direct POS Data Sharing & VMI**: Sharing electronic scanner data; Vendor-Managed Inventory (VMI); collaborative planning (CPFR)."
            ],
            [
              "**2. Order Batching**",
              "Retailers delay placing orders to accumulate Full Truckloads (FTL) or order on monthly cycles to minimize fixed order-processing costs.",
              "Generates erratic burst patterns where factories sit idle for weeks then face emergency overtime.",
              "**EDI Automation & Milk Runs**: Electronic order processing to reduce ordering transaction costs; 3PL consolidated multi-stop deliveries."
            ],
            [
              "**3. Price Fluctuations & Promotions**",
              "Periodic wholesale trade discounts, end-of-quarter volume rebates, and promotions induce retailers to engage in 'Forward Buying'.",
              "Retailers buy 6 months of stock during sales; manufacturer suffers prolonged demand freeze after promotion ends.",
              "**Everyday Low Pricing (EDLP)**: Abolishing temporary price deals in favor of consistent, transparent pricing (Walmart model)."
            ],
            [
              "**4. Rationing and Shortage Gaming**",
              "During factory supply crunches, manufacturers ration capacity proportionally based on order sizes; buyers artificially inflate orders by 200–300% to secure desired volume.",
              "When real demand softens, buyers cancel inflated backlog orders, causing massive manufacturer inventory write-offs.",
              "**Allocation Based on Past Sales**: Allocating scarce capacity based on historical market share rather than inflated current order queues."
            ]
          ]
        },
        {
          type: "h3",
          text: "3. Operational Consequences of the Bullwhip Effect"
        },
        {
          type: "ul",
          items: [
            "**Excessive Safety Stock & Inventory Costs**: Upstream suppliers hold up to 100 days of buffer inventory to survive order swings.",
            "**Inefficient Capacity Utilization**: Factories constantly alternate between extreme overtime and idle worker layoffs.",
            "**Poor Customer Service & High Stockout Rates**: Inability to meet real demand despite warehouses overflowing with the wrong inventory.",
            "**Inflated Transportation & Logistics Costs**: Emergency expedited freight fees incurred to resolve artificial shortages."
          ]
        }
      ]
    },
    {
      id: "midsem-om02-topic-6",
      slug: "midsem-transportation-modes-carrier-selection",
      number: 106,
      title: "Transportation Infrastructure & Intermodal Logistics: 5 Modes Comparison, Carrier Selection Matrix & Containerization",
      unit: "Mid Sem Important",
      marks: 14,
      lecture: "Mid-Sem Master Notes · Freight Transportation",
      summary:
        "Comprehensive 14-mark master note on Logistical Transportation: operating and cost characteristics of the 5 basic transportation modes (Rail, Road, Water, Air, Pipeline), Carrier Selection Decision Matrix, and Intermodal Containerization (TEU, Piggyback, Fishyback).",
      tags: [
        "Mid Sem Important",
        "Transportation Modes",
        "Carrier Selection",
        "Intermodal Freight",
        "Containerization",
        "Logistics Infrastructure"
      ],
      blocks: [
        {
          type: "h3",
          text: "1. Comparative Architecture of the Five Basic Transportation Modes"
        },
        {
          type: "table",
          headers: ["Mode", "Operating Characteristics", "Cost Structure", "Key Strengths", "Key Limitations", "Standard Industrial Cargo"],
          rows: [
            [
              "**1. Motor / Road (Trucking)**",
              "High accessibility; door-to-door direct delivery without transshipment.",
              "Low fixed cost (public highways); high variable cost (fuel, driver wages, tolls).",
              "Fast point-to-point transit, high frequency, schedule flexibility.",
              "Limited weight capacity per truck; highway congestion; weather vulnerability.",
              "*High-value manufactured goods, retail consumer packaged goods, perishable produce.*"
            ],
            [
              "**2. Rail**",
              "High-capacity bulk hauler operating over dedicated private rights-of-way.",
              "High fixed cost (track, terminals, locomotives); low variable cost per ton-mile.",
              "Massive load capacity, energy efficiency, economical over long overland hauls (>500 km).",
              "Slow transit speed, rigid rail schedules, limited direct dock access requiring drayage.",
              "*Heavy bulk raw materials: coal, iron ore, grains, chemicals, automotive railcars.*"
            ],
            [
              "**3. Water (Maritime / Inland)**",
              "Slow-speed global mass transport utilizing container ships, bulk carriers, and barges.",
              "High fixed cost (ships, port handling cranes); extremely low variable cost per ton-mile.",
              "Lowest freight cost per ton-mile; infinite capacity for heavy intercontinental volume.",
              "Slowest transit times (weeks), port congestion delays, weather and canal bottlenecks.",
              "*Intercontinental containerized consumer electronics, crude oil, agricultural commodities.*"
            ],
            [
              "**4. Air Freight**",
              "Ultra-high-speed long-distance aerial transportation using passenger bellies and freighters.",
              "Low fixed cost (airports public/leased); extremely high variable cost (aviation fuel, maintenance).",
              "Fastest transit velocity across global distances; enables minimal pipeline inventory.",
              "Highest freight cost per kilogram; strict payload weight and physical cube restrictions.",
              "*High-value density items: microprocessors, luxury pharmaceuticals, emergency aerospace spare parts.*"
            ],
            [
              "**5. Pipeline**",
              "Continuous automated flow of liquid and gaseous materials via underground pipe networks.",
              "Highest fixed cost (land acquisition, pipeline laying); lowest variable operating cost (pumping energy).",
              "24/7 continuous operation, immune to weather disruptions, zero packaging required.",
              "Zero product flexibility (liquids/gases only); completely fixed geographical route.",
              "*Crude oil, refined petroleum products, natural gas, chemical slurries.*"
            ]
          ]
        },
        {
          type: "h3",
          text: "2. Carrier Selection Decision Framework"
        },
        {
          type: "table",
          headers: ["Operating Performance Dimension", "Air", "Truck / Road", "Rail", "Water", "Pipeline"],
          rows: [
            ["**Speed (Transit Time)**", "Rank 1 (Fastest)", "Rank 2", "Rank 3", "Rank 4", "Rank 5 (Slowest)"],
            ["**Availability / Accessibility**", "Rank 3", "Rank 1 (Door-to-Door)", "Rank 2", "Rank 4", "Rank 5"],
            ["**Dependability (Schedule Reliability)**", "Rank 2", "Rank 2", "Rank 3", "Rank 4", "Rank 1 (Uninterrupted)"],
            ["**Capability (Payload Variety & Size)**", "Rank 4", "Rank 2", "Rank 1", "Rank 1 (Heaviest)", "Rank 5 (Fluids only)"],
            ["**Frequency (Departure Consistency)**", "Rank 3", "Rank 1", "Rank 3", "Rank 4", "Rank 1 (Continuous)"],
            ["**Cost per Ton-Mile**", "Rank 5 (Most Expensive)", "Rank 4", "Rank 2", "Rank 1 (Cheapest)", "Rank 1 (Low variable)"]
          ]
        },
        {
          type: "h3",
          text: "3. Intermodal Logistics & Containerization"
        },
        {
          type: "p",
          text: "Intermodal Transportation combines two or more freight modes utilizing standardized ISO shipping containers (Twenty-Foot Equivalent Units / TEUs) without handling the cargo itself when changing modes. This blends the low cost of rail/water long-haul transport with the high accessibility of local trucking."
        },
        {
          type: "ul",
          items: [
            "**Piggyback (Trailer on Flatcar / TOFC)**: Highway truck trailers loaded directly onto rail flatcars for long-distance overland transit, bypassing highway congestion.",
            "**Fishyback**: Highway truck trailers or ISO containers loaded onto ocean roll-on/roll-off (Ro-Ro) vessels or container barges.",
            "**Birdyback**: Specialized air freight intermodal containers transferred directly between highway vans and wide-body cargo aircraft."
          ]
        }
      ]
    },
    {
      id: "midsem-om02-topic-7",
      slug: "midsem-inventory-models-eoq-rop-selective-control",
      number: 107,
      title: "Logistical Inventory Models: EOQ Derivation, Safety Stock, Reorder Point (ROP) & Selective Inventory Control",
      unit: "Mid Sem Important",
      marks: 14,
      lecture: "Mid-Sem Master Notes · Inventory Management",
      summary:
        "Comprehensive 14-mark master note on Logistical Inventory Management: mathematical derivation of Economic Order Quantity (EOQ), Total Annual Cost equations, Safety Stock ($SS = Z\\sigma_L$), Reorder Point (ROP), and Selective Inventory Control techniques (ABC, VED, FSN, XYZ).",
      tags: [
        "Mid Sem Important",
        "Inventory Models",
        "EOQ Derivation",
        "Safety Stock",
        "ROP",
        "ABC Analysis",
        "VED Analysis"
      ],
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
          type: "p",
          text: "The Classical EOQ model formulated by Ford W. Harris establishes the batch size ($Q$) that minimizes total annual inventory holding and ordering costs under constant demand ($D$), ordering cost per order ($S$), and annual holding cost per unit ($H$):"
        },
        {
          type: "ul",
          items: [
            "**Annual Ordering Cost (AOC)**: Number of orders per year multiplied by cost per order: $\\text{AOC} = \\left(\\frac{D}{Q}\\right) S$",
            "**Annual Holding Cost (AHC)**: Average inventory level multiplied by unit annual holding cost: $\\text{AHC} = \\left(\\frac{Q}{2}\\right) H$",
            "**Total Annual Inventory Cost (TC)**: $\\text{TC}(Q) = \\left(\\frac{D}{Q}\\right) S + \\left(\\frac{Q}{2}\\right) H$",
            "**Mathematical Derivation**: Taking the first derivative of $\\text{TC}$ with respect to $Q$ and setting it to zero:",
            "$$\\frac{d(\\text{TC})}{dQ} = -\\frac{DS}{Q^2} + \\frac{H}{2} = 0 \\implies \\frac{DS}{Q^2} = \\frac{H}{2} \\implies Q^2 = \\frac{2DS}{H}$$",
            "$$\\mathbf{Q^* = \\sqrt{\\frac{2DS}{H}}}$$"
          ]
        },
        {
          type: "h3",
          text: "2. Reorder Point (ROP) with Lead Time & Safety Stock"
        },
        {
          type: "quote",
          text: "\\text{ROP} = (d \\times L) + \\text{SS} \\quad \\text{where} \\quad \\text{SS} = Z \\times \\sigma_L = Z \\times \\sqrt{L \\sigma_d^2 + d^2 \\sigma_L^2}"
        },
        {
          type: "ul",
          items: [
            "**$d$**: Average daily demand rate.",
            "**$L$**: Supplier delivery lead time in days.",
            "**$SS$**: Safety stock buffer protecting against demand surges during lead time.",
            "**$Z$**: Normal distribution standard score corresponding to desired Service Level (e.g., $Z = 1.65$ for 95% service level, $Z = 2.33$ for 99% service level).",
            "**$\\sigma_d$**: Standard deviation of daily demand."
          ]
        },
        {
          type: "h3",
          text: "3. Selective Inventory Control Techniques Matrix"
        },
        {
          type: "table",
          headers: ["Technique", "Primary Classification Criterion", "Categories & Rules", "Managerial Control Policy"],
          rows: [
            [
              "**ABC Analysis**",
              "Annual Usage Value (Price $\\times$ Annual Volume - Pareto Principle)",
              "**A-Items**: 10–20% SKUs driving 70–80% annual spend.\\n**B-Items**: 30% SKUs driving 15–20% annual spend.\\n**C-Items**: 50% SKUs driving 5% annual spend.",
              "**A-Items**: Strict tight control, daily monitoring, low safety stock.\\n**C-Items**: Bulk purchasing, simple visual two-bin system."
            ],
            [
              "**VED Analysis**",
              "Operational Criticality & Impact of Stockout on Production",
              "**Vital (V)**: Absence halts entire plant; massive downtime.\\n**Essential (E)**: Serious disruption; temporary workarounds possible.\\n**Desirable (D)**: Minor operational inconvenience; negligible cost.",
              "**Vital items**: Mandatory high safety stocks and multiple certified backup suppliers regardless of purchase cost."
            ],
            [
              "**FSN Analysis**",
              "Inventory Consumption Rate & Velocity of Movement",
              "**Fast-Moving (F)**: Rapid daily inventory turnover.\\n**Slow-Moving (S)**: Sporadic monthly consumption.\\n**Non-Moving (N)**: Zero consumption over 12 months.",
              "**Non-Moving items**: Immediate disposal, liquidation, or vendor buyback to free up valuable warehouse floor space."
            ],
            [
              "**XYZ Analysis**",
              "Value of Inventory Stock Held in the Warehouse",
              "**X-Items**: High inventory value stored.\\n**Y-Items**: Moderate inventory value stored.\\n**Z-Items**: Low inventory value stored.",
              "Used in conjunction with ABC to prevent capital blockage in slow-moving high-value components."
            ]
          ]
        }
      ]
    },
    {
      id: "midsem-om02-topic-8",
      slug: "midsem-3pl-4pl-logistics-service-providers",
      number: 108,
      title: "Third-Party Logistics (3PL) vs. Fourth-Party Logistics (4PL): Capabilities & Sourcing Architecture",
      unit: "Mid Sem Important",
      marks: 14,
      lecture: "Mid-Sem Master Notes · Logistics Outsourcing",
      summary:
        "Comprehensive 14-mark master note on Logistics Service Providers: definitions and capabilities of 1PL, 2PL, 3PL, and 4PL (Lead Logistics Provider), comparative architecture, and the strategic logistics outsourcing decision matrix.",
      tags: [
        "Mid Sem Important",
        "3PL",
        "4PL",
        "Logistics Outsourcing",
        "Lead Logistics Provider",
        "Contract Logistics"
      ],
      blocks: [
        {
          type: "h3",
          text: "1. Evolution of Logistics Service Provider Tiers (1PL to 4PL)"
        },
        {
          type: "ul",
          items: [
            "**1PL (First-Party Logistics)**: Shippers manage all logistics internally utilizing their own private truck fleets and company-owned warehouses.",
            "**2PL (Second-Party Logistics)**: Asset-based carriers providing discrete transportation or warehousing capacity (e.g., shipping lines, trucking companies, airline cargo carriers).",
            "**3PL (Third-Party Logistics)**: Specialized external firms providing integrated, customized logistics services (contract warehousing, fleet management, customs brokerage, packaging) on multi-year contracts.",
            "**4PL (Fourth-Party Logistics / Lead Logistics Provider)**: A non-asset-based supply chain integrator that designs, builds, and runs comprehensive supply chain solutions by coordinating multiple 3PL providers, IT systems, and client operations."
          ]
        },
        {
          type: "h3",
          text: "2. Third-Party Logistics (3PL) vs. Fourth-Party Logistics (4PL) Comparison"
        },
        {
          type: "table",
          headers: ["Architectural Dimension", "Third-Party Logistics (3PL)", "Fourth-Party Logistics (4PL / LLP)"],
          rows: [
            [
              "**Core Role & Scope**",
              "Executes specific operational logistics functions (freight transportation, warehouse picking, cross-docking).",
              "Acts as the overarching master supply chain architect and strategic orchestrator across the entire enterprise network."
            ],
            [
              "**Asset Ownership Model**",
              "**Asset-heavy or asset-based**: Owns or leases physical warehouses, truck fleets, material handling equipment, and aircraft.",
              "**Asset-light or non-asset-based**: Owns zero trucks or warehouses; acts as a pure intellectual and digital technology integrator."
            ],
            [
              "**Customer Relationship**",
              "Service provider executing bounded contractual tasks (Transactional to Value-Added Service Level Agreements).",
              "Strategic consultative partner embedded inside client executive boardrooms; shares balance sheet risks and gains."
            ],
            [
              "**Interface Management**",
              "Manages internal operations between its own warehouse/fleet and the single contracting client firm.",
              "Manages multiple 3PL providers, shipping lines, customs brokers, and software vendors as a single point of accountability."
            ],
            [
              "**IT & Digital Capability**",
              "Standard Warehouse Management Systems (WMS) and Transportation Management Systems (TMS).",
              "Enterprise Control Towers, predictive AI demand engines, end-to-end supply chain visibility platforms, and ERP integration."
            ],
            [
              "**Global Benchmark Example**",
              "*DHL Supply Chain, FedEx Logistics, Kuehne+Nagel contract warehousing.*",
              "*Accenture Logistics Strategy, UPS Supply Chain Solutions (4PL Division), Blue Yonder Control Tower integration.*"
            ]
          ]
        }
      ]
    },
    {
      id: "midsem-om02-topic-9",
      slug: "midsem-facility-location-center-of-gravity",
      number: 109,
      title: "Logistical Network Design: Center-of-Gravity Method & Network Cost Trade-off Curves",
      unit: "Mid Sem Important",
      marks: 14,
      lecture: "Mid-Sem Master Notes · Network Design",
      summary:
        "Comprehensive 14-mark master note on Logistical Network Design: qualitative and quantitative facility location drivers, Center-of-Gravity (Centroid) mathematical model, and network cost trade-off curves (Facility count vs. Inventory, Transportation, and Customer Response Time).",
      tags: [
        "Mid Sem Important",
        "Network Design",
        "Center of Gravity",
        "Facility Location",
        "Square Root Law",
        "Logistics Trade-offs"
      ],
      blocks: [
        {
          type: "h3",
          text: "1. The Center-of-Gravity (Centroid) Mathematical Formulation"
        },
        {
          type: "p",
          text: "The Center-of-Gravity method is a quantitative spatial algorithm used to determine the optimal geographical coordinates $(X^*, Y^*)$ for a central distribution center (DC) that minimizes total weighted transportation costs to multiple customer demand markets or supply points:"
        },
        {
          type: "quote",
          text: "X^* = \\frac{\\sum_{i=1}^{n} (W_i \\times X_i)}{\\sum_{i=1}^{n} W_i}, \\qquad Y^* = \\frac{\\sum_{i=1}^{n} (W_i \\times Y_i)}{\\sum_{i=1}^{n} W_i}"
        },
        {
          type: "ul",
          items: [
            "**$X_i, Y_i$**: Coordinate locations of customer destination or supply point $i$ on a spatial Cartesian grid.",
            "**$W_i$**: Weighting factor representing shipment volume (tons), pallet counts, or monetary freight value destined for market $i$."
          ]
        },
        {
          type: "h3",
          text: "2. Network Cost Trade-off Curves: Impact of Increasing Warehouse Count"
        },
        {
          type: "table",
          headers: ["Cost / Service Element", "Behavior as Facility Count Increases ($1 \\rightarrow 20$)", "Underlying Economic & Operational Driver"],
          rows: [
            [
              "**1. Inbound Transportation Cost**",
              "**Increases**",
              "Inbound shipments from central factories are fragmented into smaller, more expensive Less-than-Truckload (LTL) loads across multiple destination warehouses."
            ],
            [
              "**2. Outbound Transportation Cost**",
              "**Decreases substantially**",
              "Local delivery points are located closer to regional customers, dramatically slashing local final-mile transit distances."
            ],
            [
              "**3. Inventory Holding Cost**",
              "**Increases substantially**",
              "Decentralization requires duplicate safety stocks across every facility, governed by the **Square Root Law of Inventory** ($I_{\\text{Total}} = I_{\\text{Central}} \\times \\sqrt{N}$)."
            ],
            [
              "**4. Facility Operating Cost**",
              "**Increases**",
              "Loss of facility economies of scale; multiplied management overheads, rent, security, and material handling machinery."
            ],
            [
              "**5. Customer Response Time**",
              "**Decreases (Improves dramatically)**",
              "Local facilities enable same-day or 24-hour delivery, boosting customer satisfaction and competitive market share."
            ]
          ]
        }
      ]
    }
  ],
  examQuestions: [
    {
      id: "om02-eq-1",
      number: 1,
      title: "Integrated Logistics Management: The 7 R's, Inbound vs. Outbound Logistics & Total Cost Concept",
      marks: 14,
      relatedSlugs: ["midsem-logistics-7rs-total-cost"],
      question:
        "Define logistics management. Explain the Seven Rights (7 R's) of logistics with concrete industrial examples. Differentiate between inbound and outbound logistics, and analyze the Total Cost Concept using cost trade-off frameworks.",
      blocks: [
        {
          type: "h3",
          text: "1. Definition & The Seven Rights (7 R's) of Logistics"
        },
        {
          type: "p",
          text: "Logistics Management is the planning, implementation, and control of the forward and reverse flow and storage of goods, services, and information between point of origin and point of consumption. It is operationalized by the 7 R's:"
        },
        {
          type: "table",
          headers: ["The 7 R's", "Operational Definition", "Industrial Case Example"],
          rows: [
            ["**1. Right Product**", "Delivering exact SKU ordered without error.", "*Shipping 256GB phone vs 128GB variant.*"],
            ["**2. Right Quantity**", "Zero shortage and zero over-shipment.", "*500 door brackets delivered for 8h shift.*"],
            ["**3. Right Condition**", "Zero transit damage or spoilage.", "*Vaccines kept strictly at 2°C to 8°C.*"],
            ["**4. Right Place**", "Delivering to exact destination/dock.", "*Direct-to-workstation assembly line feed.*"],
            ["**5. Right Time**", "Meeting precise delivery window.", "*JIT car seats arriving 15 min before fitment.*"],
            ["**6. Right Customer**", "Delivery to authentic authorized consignee.", "*Biometric signature on high-value jewelry.*"],
            ["**7. Right Cost**", "Achieving target service at lowest total spend.", "*Optimizing truck cube to achieve $0.12/kg freight.*"]
          ]
        },
        {
          type: "h3",
          text: "2. Inbound vs. Outbound Logistics & Total Cost Concept"
        },
        {
          type: "p",
          text: "Inbound logistics manages raw material procurement and vendor deliveries based on dependent MRP demand. Outbound logistics manages finished goods warehousing, picking, and customer distribution based on independent market demand. Under the Total Cost Concept, decisions optimize Total System Cost ($TC = \\text{Transport} + \\text{Warehouse} + \\text{Inventory} + \\text{Stockout}$) rather than sub-optimizing individual silo budgets."
        }
      ]
    },
    {
      id: "om02-eq-2",
      number: 2,
      title: "Logistics vs. Supply Chain Management: Boundary Scope & 10-Point Comparison Matrix",
      marks: 14,
      relatedSlugs: ["midsem-logistics-vs-supply-chain-management"],
      question:
        "Trace the historical evolution from physical distribution to supply chain management. Provide a comprehensive 10-point architectural comparison matrix contrasting Logistics Management with Supply Chain Management across strategic, operational, and structural axes.",
      blocks: [
        {
          type: "h3",
          text: "Logistics vs. Supply Chain Management 10-Point Comparison Matrix"
        },
        {
          type: "table",
          headers: ["Dimension", "Logistics Management", "Supply Chain Management (SCM)"],
          rows: [
            ["**1. Scope**", "Operational subset focusing on movement & storage.", "Overarching network orchestration philosophy."],
            ["**2. Boundary**", "Single-firm internal boundary focus.", "Multi-enterprise network from Tier-2 to end-consumer."],
            ["**3. Objective**", "Lowest total logistical cost (7 R's).", "Maximizing overall Supply Chain Surplus."],
            ["**4. Strategy**", "Tactical execution (routing, warehousing).", "Strategic positioning, alliances, capacity design."],
            ["**5. Processes**", "Fleet routing, packaging, customs, material handling.", "Product co-design (ESI), CPFR, strategic sourcing."],
            ["**6. Collaboration**", "Contractual SLAs with carriers and 3PLs.", "Deep strategic risk-reward sharing alliances."],
            ["**7. Flows**", "Product / physical freight flow focus.", "Product, Information, and Cash/Financial flows."],
            ["**8. Cost Focus**", "Total Logistical Cost (freight vs inventory).", "Total Cost of Ownership (TCO) across multi-tiers."],
            ["**9. Competition**", "Firm versus competing firm.", "Supply Chain versus Supply Chain (Toyota vs GM)."],
            ["**10. Metrics**", "Order cycle time, damage rate, cost per ton-mile.", "Cash-to-Cash cycle, Perfect Order rate, Bullwhip ratio."]
          ]
        }
      ]
    },
    {
      id: "om02-eq-3",
      number: 3,
      title: "Process Views of a Supply Chain: Cycle View (4 Cycles), Push/Pull View & Decoupling Boundary",
      marks: 14,
      relatedSlugs: ["midsem-supply-chain-process-views-cycle-push-pull"],
      question:
        "Detail the two process views of a supply chain. Explain Sunil Chopra's Cycle View across its 4 constituent cycles, analyze the Push/Pull view, and explain the architectural significance of the Push/Pull Decoupling Point in postponement strategies.",
      blocks: [
        {
          type: "diagram",
          kind: "supply-chain-flow",
          caption: "Supply Chain 4-Cycle Pipeline & Push/Pull Decoupling Boundary Architecture"
        },
        {
          type: "h3",
          text: "Part 1: The Four Cycles in the Cycle View"
        },
        {
          type: "table",
          headers: ["Cycle", "Interfaces", "Core Activities", "Trigger Event"],
          rows: [
            ["**Customer Order**", "Customer $\\leftrightarrow$ Retailer", "Browsing, checkout, order fulfillment.", "Customer order placement."],
            ["**Replenishment**", "Retailer $\\leftrightarrow$ Distributor", "ROP trigger, picking, delivery, restocking.", "Retail inventory hitting ROP."],
            ["**Manufacturing**", "Distributor $\\leftrightarrow$ Manufacturer", "MPS scheduling, assembly, packing.", "Distributor replenishment order."],
            ["**Procurement**", "Manufacturer $\\leftrightarrow$ Supplier", "MRP explosion, purchase order, line feed.", "Production component schedule."]
          ]
        },
        {
          type: "h3",
          text: "Part 2: Push vs. Pull & The Decoupling Point"
        },
        {
          type: "p",
          text: "Push processes operate speculatively on forecasts (economies of scale, MTS). Pull processes operate reactively on customer orders (customization, agility, MTO). The Decoupling Point (Postponement Boundary) delays final product differentiation until customer orders arrive (e.g., paint base tinting in retail store)."
        }
      ]
    },
    {
      id: "om02-eq-4",
      number: 4,
      title: "Achieving Strategic Fit: Implied Demand Uncertainty, Efficient vs. Responsive Chains & 6 Drivers",
      marks: 14,
      relatedSlugs: ["midsem-strategic-fit-fisher-model-drivers"],
      question:
        "Explain how a company achieves Strategic Fit between its competitive strategy and supply chain strategy. Analyze Marshall Fisher's framework matching functional vs. innovative products with efficient vs. responsive supply chains, and detail Sunil Chopra's six supply chain drivers.",
      blocks: [
        {
          type: "diagram",
          kind: "strategic-fit-grid",
          caption: "Marshall Fisher's Strategic Fit Model: Product-Chain Alignment"
        },
        {
          type: "h3",
          text: "Part 1: Fisher's Framework (Functional vs. Innovative Products)"
        },
        {
          type: "table",
          headers: ["Attribute", "Functional Products", "Innovative Products"],
          rows: [
            ["**Demand Volatility**", "Predictable (Error $<10\\%$).", "Volatile (Error $40\\% - 100\\%$)."],
            ["**Product Lifecycle**", "Long ($> 2$ years).", "Short ($3 - 12$ months)."],
            ["**Contribution Margin**", "Low ($5\\% - 20\\%$).", "High ($20\\% - 60\\%$)."],
            ["**Aligned Strategy**", "**Physically Efficient Supply Chain** (High utilization, bulk freight).", "**Market-Responsive Supply Chain** (Buffer capacity, air freight, speed)."],
            ["**Corporate Case**", "*Campbell's Soup, staple wheat flour.*", "*Zara fast-fashion, Apple iPhone launches.*"]
          ]
        },
        {
          type: "h3",
          text: "Part 2: The Six Supply Chain Drivers (Facilities, Inventory, Transport, Info, Sourcing, Pricing)"
        },
        {
          type: "p",
          text: "Facilities, Inventory, and Transportation represent Logistical Drivers. Information, Sourcing, and Pricing represent Cross-Functional Drivers. Efficient chains centralize facilities and bulk-ship; responsive chains decentralize inventory and use agile local delivery."
        }
      ]
    },
    {
      id: "om02-eq-5",
      number: 5,
      title: "The Bullwhip Effect: Demand Variance Amplification, 4 Root Causes & Countermeasure Levers",
      marks: 14,
      relatedSlugs: ["midsem-bullwhip-effect-causes-countermeasures"],
      question:
        "What is the Bullwhip Effect? Explain Hau Lee's demand variance amplification phenomenon. Detail the four operational root causes (Demand forecast updating, Order batching, Price fluctuations, Rationing and shortage gaming) and explain their systemic countermeasures.",
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
          type: "table",
          headers: ["Root Cause", "Operational Mechanism", "Upstream Distortion", "Managerial Countermeasure"],
          rows: [
            ["**1. Forecast Updating**", "Tiers forecast from purchase orders without POS.", "Phantomed safety stock stacking.", "**POS Data Sharing, VMI, CPFR**."],
            ["**2. Order Batching**", "FTL batching and monthly ordering cycles.", "Idle periods followed by surge spikes.", "**EDI Automation, 3PL Milk Runs**."],
            ["**3. Price Promotions**", "Wholesale volume deals induce Forward Buying.", "Huge peaks during deals; freeze after.", "**Everyday Low Pricing (EDLP)**."],
            ["**4. Shortage Gaming**", "Capacity rationing induces phantom 300% orders.", "Massive cancellations when demand drops.", "**Allocation Based on Past Sales**."]
          ]
        }
      ]
    },
    {
      id: "om02-eq-6",
      number: 6,
      title: "Transportation Infrastructure & Intermodal Logistics: 5 Modes Comparison & Carrier Selection Matrix",
      marks: 14,
      relatedSlugs: ["midsem-transportation-modes-carrier-selection"],
      question:
        "Compare the operating and economic characteristics of the five basic transportation modes (Rail, Road, Water, Air, Pipeline). Detail the Carrier Selection Decision Matrix across key performance criteria, and explain intermodal containerization (TEU, Piggyback, Fishyback).",
      blocks: [
        {
          type: "h3",
          text: "Five Transportation Modes Comparative Architecture"
        },
        {
          type: "table",
          headers: ["Mode", "Speed", "Accessibility", "Cost / Ton-Mile", "Payload Capability", "Ideal Industrial Cargo"],
          rows: [
            ["**Road (Truck)**", "Fast (Rank 2)", "Highest (Door-to-Door)", "Medium ($$$)", "Medium (Weight limits)", "*Packaged retail goods, perishables.*"],
            ["**Rail**", "Medium (Rank 3)", "Medium (Rail sidings)", "Low ($$)", "High (Heavy bulk)", "*Coal, grain, chemicals, automobiles.*"],
            ["**Water**", "Slow (Rank 4)", "Low (Ports/terminals)", "Lowest ($)", "Highest (Massive volume)", "*Intercontinental containerized freight.*"],
            ["**Air**", "Fastest (Rank 1)", "Medium (Airports)", "Highest ($$$$$)", "Lowest (Cube/weight cap)", "*Electronics, pharma, high-value parts.*"],
            ["**Pipeline**", "Slow/Continuous", "Fixed Route", "Lowest Variable ($)", "Fluids/Gases Only", "*Crude oil, petroleum, natural gas.*"]
          ]
        },
        {
          type: "h3",
          text: "Intermodal Containerization: Piggyback, Fishyback, Birdyback"
        },
        {
          type: "p",
          text: "Intermodal logistics transfers standardized ISO containers (TEUs) across modes without handling internal cargo. Piggyback (Trailer on Flatcar) combines rail long-haul efficiency with local truck accessibility. Fishyback links road trailers to ocean barges; Birdyback links air containers to delivery vans."
        }
      ]
    },
    {
      id: "om02-eq-7",
      number: 7,
      title: "Logistical Inventory Models: EOQ Derivation, Safety Stock, Reorder Point & Selective Control",
      marks: 14,
      relatedSlugs: ["midsem-inventory-models-eoq-rop-selective-control"],
      question:
        "Mathematically derive the Economic Order Quantity (EOQ) formula from first principles. Explain the Reorder Point (ROP) equation under lead time and demand uncertainty, and provide a comprehensive comparative analysis of selective inventory control techniques (ABC, VED, FSN, XYZ).",
      blocks: [
        {
          type: "diagram",
          kind: "eoq-model",
          caption: "Economic Order Quantity (EOQ) Cost Trade-off Parabola & Optimal Batch Size"
        },
        {
          type: "h3",
          text: "1. Mathematical EOQ Derivation & Total Cost Equation"
        },
        {
          type: "quote",
          text: "\\text{TC}(Q) = \\left(\\frac{D}{Q}\\right) S + \\left(\\frac{Q}{2}\\right) H \\implies \\frac{d(\\text{TC})}{dQ} = -\\frac{DS}{Q^2} + \\frac{H}{2} = 0 \\implies Q^* = \\sqrt{\\frac{2DS}{H}}"
        },
        {
          type: "h3",
          text: "2. Reorder Point (ROP) & Selective Inventory Control (ABC, VED, FSN)"
        },
        {
          type: "table",
          headers: ["Selective Technique", "Classification Basis", "Category Breakdown", "Managerial Control Policy"],
          rows: [
            ["**ABC Analysis**", "Annual Usage Value ($D \\times P$)", "A: 70-80% value (10-20% SKUs)\\nB: 15-20% value\\nC: 5% value (50% SKUs)", "A: Strict daily control, tight safety stock.\\nC: Bulk purchase, visual two-bin."],
            ["**VED Analysis**", "Production Criticality / Downtime Risk", "Vital (V): Plant halts\\nEssential (E): Disruption\\nDesirable (D): Minor", "Vital items: Mandatory high safety stock regardless of unit cost."],
            ["**FSN Analysis**", "Consumption Velocity & Turnover", "Fast (F): Daily turnover\\nSlow (S): Monthly\\nNon-moving (N): 0 over 12mo", "Non-moving: Immediate liquidation to free up warehouse space."],
            ["**XYZ Analysis**", "Value of Store Stock Held", "X: High inventory value\\nY: Moderate\\nZ: Low value", "Paired with ABC to avoid capital blockage in high-value components."]
          ]
        }
      ]
    },
    {
      id: "om02-eq-8",
      number: 8,
      title: "Third-Party Logistics (3PL) vs. Fourth-Party Logistics (4PL): Capabilities & Sourcing Matrix",
      marks: 14,
      relatedSlugs: ["midsem-3pl-4pl-logistics-service-providers"],
      question:
        "Differentiate between 1PL, 2PL, 3PL, and 4PL logistics service providers. Compare Third-Party Logistics (3PL) with Fourth-Party Logistics (4PL / Lead Logistics Provider) across operational scope, asset ownership, and IT integration, providing a strategic outsourcing decision matrix.",
      blocks: [
        {
          type: "h3",
          text: "Third-Party Logistics (3PL) vs. Fourth-Party Logistics (4PL) Comparison"
        },
        {
          type: "table",
          headers: ["Dimension", "Third-Party Logistics (3PL)", "Fourth-Party Logistics (4PL / LLP)"],
          rows: [
            ["**Scope & Role**", "Executes tactical operations (freight, warehousing).", "Overarching supply chain architect and orchestrator."],
            ["**Asset Model**", "**Asset-based**: Owns/leases warehouses, trucks, cranes.", "**Non-asset-based**: Pure intellectual & IT integrator."],
            ["**Client Relation**", "Contractual task execution (SLA-driven).", "Strategic consultative partner embedded in leadership."],
            ["**Management**", "Manages own operations for the single client.", "Manages multiple 3PLs, carriers, brokers as single POC."],
            ["**IT Capabilities**", "Standard WMS and TMS software.", "Enterprise Control Towers, AI demand engines, ERP integration."],
            ["**Benchmark Firm**", "*DHL Supply Chain, FedEx Logistics, Kuehne+Nagel.*", "*Accenture Supply Chain, Blue Yonder Control Towers.*"]
          ]
        }
      ]
    },
    {
      id: "om02-eq-9",
      number: 9,
      title: "Logistical Network Design: Center-of-Gravity Method & Network Cost Trade-off Curves",
      marks: 14,
      relatedSlugs: ["midsem-facility-location-center-of-gravity"],
      question:
        "Explain the principles of logistical network design. Mathematically formulate the Center-of-Gravity (Centroid) method for single-facility location, and analyze the economic trade-off curves illustrating how inventory, transportation, and facility costs change as the number of warehouses increases.",
      blocks: [
        {
          type: "h3",
          text: "1. The Center-of-Gravity (Centroid) Mathematical Model"
        },
        {
          type: "quote",
          text: "X^* = \\frac{\\sum_{i=1}^{n} (W_i X_i)}{\\sum_{i=1}^{n} W_i}, \\qquad Y^* = \\frac{\\sum_{i=1}^{n} (W_i Y_i)}{\\sum_{i=1}^{n} W_i}"
        },
        {
          type: "h3",
          text: "2. Network Trade-off Curves as Warehouse Count Increases"
        },
        {
          type: "table",
          headers: ["Cost / Performance Metric", "Trend as Facility Count Rises", "Underlying Economic Driver"],
          rows: [
            ["**Inbound Freight Cost**", "**Increases**", "Inbound shipments split into smaller, costlier LTL freight loads."],
            ["**Outbound Freight Cost**", "**Decreases**", "Warehouses located closer to customer clusters; cuts final-mile transit."],
            ["**Inventory Holding Cost**", "**Increases**", "Duplicate safety stocks required; Square Root Law ($I_{\\text{Total}} = I \\sqrt{N}$)."],
            ["**Facility Overhead Cost**", "**Increases**", "Multiplied warehouse rent, equipment, and supervisory staffing."],
            ["**Customer Response Time**", "**Improves (Decreases)**", "Local facilities enable 24-hour delivery, driving customer satisfaction."]
          ]
        }
      ]
    }
  ]
};
