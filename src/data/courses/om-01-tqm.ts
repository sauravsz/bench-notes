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
    "Comprehensive master notes, quantitative formulations, analytical frameworks, and 14-mark examination answers for Total Quality Management (TQM), Statistical Process Control (SPC), Quality Engineering, Lean Six Sigma, and Operational Excellence.",
  units: [
    "Principles & Philosophies of TQM",
    "Benchmarking, Customer Needs & Quality Engineering",
    "Operations Quality, SPC & 7 QC Tools",
    "Six Sigma, Lean, Quality Systems & Awards"
  ],
  topics: [
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
          text: "Quality is fundamentally defined as the degree to which a set of inherent characteristics fulfills customer requirements. Mathematically, quality is expressed as the Quality Ratio ($Q$):"
        },
        {
          type: "quote",
          text: "Q = \\frac{\\text{Actual Performance (P)}}{\\text{Customer Expectation (E)}}"
        },
        {
          type: "ul",
          items: [
            "**Q > 1.0 (Customer Delight / Superior Quality)**: Actual delivered performance exceeds customer expectations, fostering brand equity, customer retention, and premium pricing power.",
            "**Q = 1.0 (Customer Satisfaction / Conformance)**: Performance precisely satisfies customer expectations; hygiene threshold is met.",
            "**Q < 1.0 (Unacceptable Quality / Defect State)**: Performance falls below customer expectations, triggering dissatisfaction, warranty liability, customer churn, and brand erosion."
          ]
        },
        {
          type: "h3",
          text: "David Garvin's Five Conceptual Approaches to Defining Quality"
        },
        {
          type: "table",
          headers: ["Approach", "Core Philosophical Basis", "Measurement Focus", "Industrial Example"],
          rows: [
            [
              "**1. Transcendent Approach**",
              "Quality is innate excellence, universally recognized through direct experience but difficult to objectively measure.",
              "Subjective prestige, timeless craftsmanship, aesthetic superiority.",
              "*Rolex mechanical movements, Rolls-Royce handcrafted interiors, Steinway grand pianos.*"
            ],
            [
              "**2. Product-Based Approach**",
              "Quality is viewed as a precise, measurable variable based on the quantity of specific attributes or ingredients present.",
              "Physical specifications, concentration of active ingredients, technical benchmark scores.",
              "*Thread count in Egyptian cotton sheets (800 vs. 200), vehicle engine horsepower, DRAM silicon density.*"
            ],
            [
              "**3. User-Based Approach**",
              "Quality lies in the eyes of the beholder; highly personalized fitness for intended customer use.",
              "Customer satisfaction scores, ergonomic ratings, usability, ease of operation.",
              "*Intuitive UI of Apple iOS compared to open Android; customizable ERP dashboards tailored to finance vs. operations.*"
            ],
            [
              "**4. Manufacturing-Based Approach**",
              "Quality is strict 'conformance to requirements' and engineering blueprints; defect-free production.",
              "Tolerance limits, scrap rates, Cpk process capability, parts-per-million (PPM) defect rates.",
              "*Semiconductor wafer fabrication with sub-nanometer lithography tolerance; automotive engine cylinder bore precision.*"
            ],
            [
              "**5. Value-Based Approach**",
              "Quality defined in terms of costs and prices; delivering maximum performance at an acceptable, competitive price point.",
              "Price-to-performance ratio, total cost of ownership (TCO), economic utility.",
              "*Southwest Airlines affordable point-to-point travel; Xiaomi feature-rich smartphones priced at budget tiers.*"
            ]
          ]
        },
        {
          type: "h3",
          text: "Master Comparison of Core Quality Gurus"
        },
        {
          type: "table",
          headers: ["Quality Guru", "Core Philosophy & Definition", "Primary Framework", "Attribution of Defects"],
          rows: [
            [
              "**W. Edwards Deming**",
              "Predictable uniformity and dependability at low cost; quality driven by statistical system management.",
              "**14 Points for Management** & System of Profound Knowledge (SoPK); PDCA Cycle.",
              "**94% Systemic / Management**, only 6% Special worker causes."
            ],
            [
              "**Joseph M. Juran**",
              "'Fitness for use'; quality does not occur by chance—it requires project-by-project management like financial planning.",
              "**The Juran Quality Trilogy** (Planning, Control, Improvement) & Cost of Poor Quality (COPQ).",
              "**80% Management controllable**, 20% Operator controllable (Pareto Principle)."
            ],
            [
              "**Philip B. Crosby**",
              "'Conformance to requirements'; Zero Defects is the only acceptable operational standard.",
              "**Four Absolutes of Quality** & Price of Nonconformance (PONC).",
              "**100% Management & worker accountability**; quality is free because prevention costs less than failure."
            ],
            [
              "**Armand V. Feigenbaum**",
              "Total composite product and service characteristics across marketing, engineering, and manufacturing.",
              "**Total Quality Control (TQC)** & PAF Cost of Quality Model (Prevention, Appraisal, Failure).",
              "**Cross-functional responsibility**; exposed the 'Hidden Plant' consuming up to 40% capacity on rework."
            ],
            [
              "**Kaoru Ishikawa**",
              "Democratized statistical tools so frontline factory workers solve operational defects directly.",
              "**7 Basic QC Tools**, Cause-and-Effect (Fishbone) Diagram, and Quality Control (QC) Circles.",
              "**Company-wide collective responsibility**; 'The next process is your customer'."
            ]
          ]
        }
      ]
    },
    {
      id: "tqm-t-2",
      slug: "dimensions-of-quality-garvin-servqual",
      number: 2,
      title: "Dimensions of Quality: Garvin's 8 Product Dimensions vs. SERVQUAL Service Dimensions",
      unit: "Principles & Philosophies of TQM",
      summary:
        "Detailed breakdown of David Garvin's 8 dimensions of product quality and Parasuraman, Zeithaml & Berry's 5 SERVQUAL dimensions of service quality with industry benchmark examples.",
      tags: ["Quality Dimensions", "Garvin 8 Dimensions", "SERVQUAL", "Parasuraman", "Product vs Service"],
      blocks: [
        {
          type: "h3",
          text: "David Garvin's Eight Dimensions of Product Quality"
        },
        {
          type: "table",
          headers: ["Dimension", "Strategic Definition", "Industrial Metric / Evaluation", "Corporate Benchmark Example"],
          rows: [
            [
              "**1. Performance**",
              "A product's primary operating characteristics and baseline functional execution.",
              "Speed, acceleration, resolution, processing throughput, fuel economy.",
              "*Tesla Model S Plaid accelerating 0-60 mph in 1.99 seconds; smartphone camera optical resolution.*"
            ],
            [
              "**2. Features**",
              "Secondary characteristics that supplement the basic functioning of the product.",
              "Number of auxiliary options, smart connectivity, ambient lighting, accessory integration.",
              "*Automobile head-up display (HUD), heated steering wheels, wireless Apple CarPlay.*"
            ],
            [
              "**3. Reliability**",
              "Probability of a product malfunctioning or failing within a specified time period under stated conditions.",
              "Mean Time Between Failures (MTBF), failure rate ($\\lambda$), warranty claims per 1,000 units.",
              "*Toyota Hilux engine powertrain surviving 400,000 km in severe desert terrain with zero catastrophic breakdowns.*"
            ],
            [
              "**4. Conformance**",
              "The degree to which a product's physical design and operating characteristics meet established engineering blueprints.",
              "Cp/Cpk process capability, defect PPM, dimensional tolerance limits ($[LSL, USL]$).",
              "*Boeing commercial airliner titanium spar machined to within $\\pm 0.005\\text{ mm}$ of CAD specifications.*"
            ],
            [
              "**5. Durability**",
              "The measure of product life; the amount of use one gets from a product before physical deterioration forces replacement.",
              "Total operational lifespan (hours/years), Mean Time to Failure (MTTF), cyclic stress endurance.",
              "*Caterpillar heavy earthmoving machinery operating 25,000+ hours under extreme mining conditions before structural overhaul.*"
            ],
            [
              "**6. Serviceability**",
              "The speed, courtesy, competence, and ease of repair when maintenance is required.",
              "Mean Time to Repair (MTTR), availability of replacement parts, authorized service network coverage.",
              "*Apple Genius Bar same-day modular screen and battery replacement; John Deere farm equipment remote telemetry repair.*"
            ],
            [
              "**7. Aesthetics**",
              "How a product looks, feels, sounds, tastes, or smells; highly subjective sensory evaluation.",
              "Haptic feedback, tactile feel of premium leather, acoustic resonance of exhaust or car door closing.",
              "*Bang & Olufsen precision-machined aluminum speaker grilles; Mercedes-Benz acoustic cabin door-thud.*"
            ],
            [
              "**8. Perceived Quality**",
              "Subjective customer assessment based on brand reputation, marketing imagery, country-of-origin bias, and pedigree.",
              "Net Promoter Score (NPS), Brand equity valuation, consumer perception index.",
              "*Apple premium branding commanding 40% margin over competitors with equivalent silicon hardware; German automotive engineering pedigree.*"
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
              "Ability to perform the promised service dependably, accurately, and consistently without error.",
              "Billing accuracy, on-time flight arrival, zero-error transaction processing.",
              "*FedEx overnight delivery commitment: 'When it absolutely, positively has to be there overnight'.*"
            ],
            [
              "**2. Responsiveness**",
              "Willingness to help customers and provide prompt, enthusiastic service.",
              "Average speed of answer (ASA), customer support chat queue time, resolution speed.",
              "*Amazon Prime Customer Support issuing instant refunds or resolving customer inquiries in under 60 seconds.*"
            ],
            [
              "**3. Assurance**",
              "Knowledge, competence, courtesy, and trustworthiness of employees that inspire trust and confidence.",
              "Professional certifications, security compliance (SOC 2, ISO 27001), empathetic communication.",
              "*Mayo Clinic physicians explaining complex clinical procedures transparently to alleviate patient anxiety.*"
            ],
            [
              "**4. Empathy**",
              "Caring, individualized, and compassionate attention provided to every individual customer.",
              "Personalized greeting, customized financial planning, understanding unique customer constraints.",
              "*Ritz-Carlton hotel staff empowered with $2,000 discretionary budget per employee to resolve guest issues instantly.*"
            ],
            [
              "**5. Tangibles**",
              "Physical facilities, equipment, grooming of personnel, and communication materials.",
              "Cleanliness of aircraft cabin, modern retail layout, intuitive UI/UX of digital banking portal.",
              "*Singapore Airlines modern cabin design, spotless interior cleanliness, and iconic Kebaya cabin crew uniform.*"
            ]
          ]
        }
      ]
    },
    {
      id: "tqm-t-3",
      slug: "evolution-of-quality-tqc-vs-tqm",
      number: 3,
      title: "Evolution of Quality: Traditional Quality Control vs. Total Quality Management (TQM)",
      unit: "Principles & Philosophies of TQM",
      summary:
        "Comparative architectural analysis of traditional quality control (inspection/detection) versus Total Quality Management (prevention/continuous improvement system).",
      tags: ["Quality Evolution", "Inspection", "SQC", "TQC", "TQM", "Continuous Improvement"],
      blocks: [
        {
          type: "h3",
          text: "Historical Eras in the Evolution of Quality"
        },
        {
          type: "ul",
          items: [
            "**1. Inspection Era (1900s–1920s - Taylorism)**: Quality achieved through end-of-line sorting. Inspectors separate good parts from defective scrap. Reactive and extremely expensive.",
            "**2. Statistical Quality Control (SQC) Era (1930s–1950s - Shewhart & Dodge-Romig)**: Introduction of control charts and statistical acceptance sampling to detect process deviations during manufacture.",
            "**3. Quality Assurance / TQC Era (1960s–1980s - Feigenbaum & Juran)**: Transition from shop-floor inspection to system design, vendor qualification, reliability engineering, and Cost of Quality (COQ) metrics.",
            "**4. Total Quality Management & Six Sigma Era (1990s–Present)**: Company-wide strategic culture focusing on customer delight, continuous improvement (Kaizen), DMAIC, and zero defects."
          ]
        },
        {
          type: "h3",
          text: "Traditional QC vs. Total Quality Management (TQM) Comparison"
        },
        {
          type: "table",
          headers: ["Architectural Dimension", "Traditional Quality Control (QC)", "Total Quality Management (TQM)"],
          rows: [
            [
              "**Strategic Focus**",
              "Detection & sorting: Inspecting products after manufacturing to catch defects before shipping.",
              "**Prevention & Design**: Designing defect-free processes and error-proofing (Poka-Yoke) from inception."
            ],
            [
              "**Quality Philosophy**",
              "Acceptable Quality Level (AQL); defects are viewed as an inevitable cost of doing business.",
              "**Continuous Improvement (Kaizen)** & Zero Defects; any defect represents an opportunity for root-cause elimination."
            ],
            [
              "**Organizational Ownership**",
              "Isolated to the Quality Control (QC) Department and designated line inspectors.",
              "**Company-wide responsibility (CWQC)**: Every employee from shop floor operator to CEO is accountable."
            ],
            [
              "**Supplier Relationships**",
              "Adversarial, short-term contracts; lowest bidding price wins; multiple competing vendors.",
              "**Long-term collaborative partnerships**: Single-source certified vendors integrated into co-design."
            ],
            [
              "**Driver of Improvement**",
              "Reacting to customer complaints, warranty claims, and end-of-line reject spikes.",
              "**Proactive customer delight**: Anticipating latent customer needs (Kano model) and benchmarking."
            ],
            [
              "**Problem Solving Model**",
              "Assigning blame to workers; applying temporary superficial fixes / rework.",
              "**Systemic root-cause analysis**: 5 Whys, Ishikawa diagrams, SPC, and DMAIC methodologies."
            ]
          ]
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
          type: "table",
          headers: ["SoPK Pillar", "Theoretical Principle", "Operational Management Implication"],
          rows: [
            [
              "**1. Appreciation for a System**",
              "An organization is a network of interdependent components that work together toward a shared aim.",
              "Sub-optimization of individual silos destroys the overall system. Cross-functional collaboration must replace departmental competition."
            ],
            [
              "**2. Knowledge of Variation**",
              "Distinguishing between Common Cause variation (systemic) and Special Cause variation (assignable).",
              "Tampering with a stable system under common cause variation increases total variation and scrap (Deming's Funnel Experiment)."
            ],
            [
              "**3. Theory of Knowledge**",
              "Management is prediction. Knowledge requires rational theory and iterative empirical testing (PDCA).",
              "Without theory, facts are meaningless; experience alone teaches nothing without structured hypotheses."
            ],
            [
              "**4. Understanding Psychology**",
              "Humans have innate intrinsic motivation, curiosity, and pride in craftsmanship.",
              "Performance appraisal rankings, merit pay, and management by fear destroy intrinsic motivation and foster destructive internal politics."
            ]
          ]
        },
        {
          type: "h3",
          text: "Key Landmark Items from Deming's 14 Points"
        },
        {
          type: "ul",
          items: [
            "**Point 1: Create constancy of purpose** toward improvement of product and service.",
            "**Point 3: Cease dependence on inspection to achieve quality**; build quality into the product in the first place.",
            "**Point 4: End the practice of awarding business on the basis of price tag alone**; move toward a single supplier for any one item based on long-term relationship of loyalty and trust.",
            "**Point 8: Drive out fear** so that everyone may work effectively for the company.",
            "**Point 10: Eliminate slogans, exhortations, and targets for the work force** asking for zero defects and new levels of productivity without providing the methods.",
            "**Point 11: Eliminate numerical quotas and management by objective (MBO)**; substitute leadership."
          ]
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
          type: "table",
          headers: ["Trilogy Component", "Core Managerial Action", "Standard Operational Deliverables"],
          rows: [
            [
              "**1. Quality Planning**",
              "Designing products, services, and manufacturing processes capable of meeting customer needs with zero initial deficiencies.",
              "Customer identification, VOC translation, product specifications, process capability verification."
            ],
            [
              "**2. Quality Control**",
              "Evaluating actual operational performance during production, comparing against standards, and acting on deviations.",
              "Statistical Process Control (SPC) control charts, visual inspection gates, corrective action loops."
            ],
            [
              "**3. Quality Improvement**",
              "Systematically driving chronic waste down to unprecedented low levels (Breakthrough Sequence).",
              "Project-by-project cross-functional teams, Pareto analysis, root-cause elimination, institutionalizing new standards."
            ]
          ]
        },
        {
          type: "h3",
          text: "Juran's Breakthrough Sequence"
        },
        {
          type: "ol",
          items: [
            "**1. Proof of the Need**: Quantifying the Cost of Poor Quality (COPQ) in financial currency to gain executive commitment.",
            "**2. Project Identification**: Selecting vital few projects using Pareto analysis (80/20 rule).",
            "**3. Organization for Breakthrough**: Forming steering committees and designated diagnostic project teams.",
            "**4. The Diagnostic Journey**: Moving from symptoms to underlying root causes via rigorous data analysis.",
            "**5. The Remedial Journey**: Formulating, piloting, and validating systemic countermeasures.",
            "**6. Overcoming Resistance to Change**: Addressing cultural and organizational barriers to new methods.",
            "**7. Holding the Gains**: Establishing new standards, control plans, and training to lock in the improvement permanently."
          ]
        }
      ]
    },
    {
      id: "tqm-t-6",
      slug: "benchmarking-process-twelve-stages-seven-types",
      number: 6,
      title: "The Benchmarking Process: Twelve Stages (AT&T Model) and Seven Types of Benchmarking",
      unit: "Benchmarking, Customer Needs & Quality Engineering",
      summary:
        "Detailed analysis of benchmarking theory, the 12-stage AT&T benchmarking process, and the 7 strategic classifications of benchmarking with industrial case studies.",
      tags: ["Benchmarking", "AT&T Model", "Competitive Benchmarking", "Functional Benchmarking", "Best Practices"],
      blocks: [
        {
          type: "h3",
          text: "Foundations and Definition of Benchmarking"
        },
        {
          type: "p",
          text: "Benchmarking is the continuous, systematic process of measuring an organization's products, services, and operational processes against recognized industry leaders or world-class best-in-class performers to identify performance gaps, establish stretch targets, and adapt superior practices."
        },
        {
          type: "h3",
          text: "The 12 Stages of the Benchmarking Process (AT&T / Xerox Model)"
        },
        {
          type: "ol",
          items: [
            "**Stage 1: Determine What to Benchmark**: Identify critical processes that directly impact customer satisfaction and financial profitability (Core business drivers / Critical to Quality metrics).",
            "**Stage 2: Form and Train the Benchmarking Team**: Assemble cross-functional experts possessing intimate operational knowledge of the selected process and trained in benchmarking protocols.",
            "**Stage 3: Identify Benchmarking Partners**: Screen potential organizations recognized as world-class leaders in the targeted domain (competitors, suppliers, or non-competing cross-industry leaders).",
            "**Stage 4: Analyze Current Internal Processes**: Thoroughly map internal workflows, measure baseline cycle times, calculate unit costs, and quantify internal performance metrics.",
            "**Stage 5: Design Information Gathering Strategy**: Develop detailed benchmarking questionnaires, schedule field visits, and execute structured partner interview protocols.",
            "**Stage 6: Collect Benchmarking Data**: Execute site visits, review technical operational documentation, observe shop-floor procedures, and gather empirical performance data.",
            "**Stage 7: Analyze Data and Identify Performance Gaps**: Quantify the performance delta between internal performance and the benchmark partner; isolate the root enabling factors driving their superior execution.",
            "**Stage 8: Project Future Performance Trajectories**: Forecast future performance levels of the benchmark partner to avoid targeting obsolete standards (aiming ahead of the moving target).",
            "**Stage 9: Establish Functional Goals & Action Plans**: Gain executive consensus, establish aggressive stretch targets, and formulate comprehensive implementation roadmaps.",
            "**Stage 10: Implement Specific Action Plans**: Execute process re-engineering, reconfigure workflows, procure advanced tooling, and train operating personnel.",
            "**Stage 11: Monitor Progress & Calibrate Results**: Track KPIs against milestone deliverables, recalibrate metrics, and report operational improvements to executive leadership.",
            "**Stage 12: Recalibrate Benchmarks**: Institutionalize superior practices into Standard Operating Procedures (SOPs) and reset benchmarks as continuous improvement elevates industry baselines."
          ]
        },
        {
          type: "h3",
          text: "Seven Strategic Types of Benchmarking"
        },
        {
          type: "table",
          headers: ["Benchmarking Type", "Strategic Focus & Scope", "Key Advantages", "Benchmark Industry Example"],
          rows: [
            [
              "**1. Internal Benchmarking**",
              "Comparing similar processes, lines, or departments within different operating units or plants of the same corporation.",
              "Zero data confidentiality barriers, rapid access to data, low cost, immediate knowledge sharing.",
              "*Toyota comparing assembly line cycle times and ergonomics between Georgetown, USA and Tsutsumi, Japan plants.*"
            ],
            [
              "**2. Competitive Benchmarking**",
              "Direct comparison against immediate market competitors manufacturing identical products.",
              "Reveals exact competitive market positioning and customer perception gaps.",
              "*Ford Motor Company reverse-engineering BMW 3-Series suspension geometry to improve chassis handling.*"
            ],
            [
              "**3. Functional Benchmarking**",
              "Comparing specific functional processes (e.g., logistics, billing) against industry leaders in similar operating environments.",
              "Breaks industry-specific tunnel vision; partners are willing to share non-proprietary functional practices.",
              "*Southwest Airlines benchmarking aircraft gate turnaround times against Formula 1 pit stop tire-change crews.*"
            ],
            [
              "**4. Generic (Process) Benchmarking**",
              "Comparing core work processes against recognized world-class leaders regardless of industry or market.",
              "Yields breakthrough, radical operational innovations and disruptive workflow paradigms.",
              "*Metropolitan hospitals benchmarking surgical emergency room patient intake against hotel concierge check-in systems.*"
            ],
            [
              "**5. Strategic Benchmarking**",
              "Examining high-level business models, market positioning, corporate governance, and core competencies.",
              "Informs corporate pivot, mergers and acquisitions, and long-term portfolio investment.",
              "*Microsoft benchmarking Apple's transition to subscription services (SaaS) and silicon hardware integration.*"
            ],
            [
              "**6. Performance (Metric) Benchmarking**",
              "Quantitative comparison of pricing, technical specifications, cycle times, financial ratios, and service response times.",
              "Provides immediate baseline numerical metrics for executive goal setting.",
              "*Cloud data centers benchmarking PUE (Power Usage Effectiveness) and server uptime (99.999%).*"
            ],
            [
              "**7. International / Global Benchmarking**",
              "Benchmarking processes against leading multinational firms across foreign regulatory and geographic boundaries.",
              "Overcomes national blind spots and leverages global best practices.",
              "*Samsung benchmarking semiconductor lithography cleanroom standards across Dutch (ASML) and Taiwanese (TSMC) facilities.*"
            ]
          ]
        }
      ]
    },
    {
      id: "tqm-t-7",
      slug: "voice-of-customer-voc-kano-model",
      number: 7,
      title: "Voice of the Customer (VOC) and the Kano Model of Customer Satisfaction",
      unit: "Benchmarking, Customer Needs & Quality Engineering",
      summary:
        "Techniques for capturing the Voice of the Customer (VOC) and deconstructing Noriaki Kano's Model of Customer Satisfaction (Must-Be, One-Dimensional, Attractive, Indifferent, Reverse) with decay lifecycle dynamics.",
      tags: ["VOC", "Kano Model", "Customer Satisfaction", "Delighters", "Must-Be"],
      blocks: [
        {
          type: "diagram",
          kind: "kano-model",
          caption: "Noriaki Kano Customer Satisfaction Coordinate Model & Lifecycle Decay Curve"
        },
        {
          type: "h3",
          text: "Capturing the Voice of the Customer (VOC)"
        },
        {
          type: "p",
          text: "Voice of the Customer (VOC) is the in-depth process of capturing customer requirements, expectations, preferences, and aversions. VOC methodologies encompass:"
        },
        {
          type: "ul",
          items: [
            "**Reactive VOC**: Customer complaints, warranty claims, helpdesk ticket logs, field service failure reports, product return data.",
            "**Proactive VOC**: Contextual customer interviews, focus groups, ethnographic gemba observations, lead-user surveys, social sentiment mining.",
            "**VOC to CTQ Translation**: Converting qualitative, emotional customer statements (*'The car door feels flimsy'*) into measurable Critical-to-Quality engineering characteristics (*'Door latch closing force: 28 N ± 3 N; Acoustic seal damping: 45 dB'*)."
          ]
        },
        {
          type: "h3",
          text: "Noriaki Kano's Model of Customer Satisfaction"
        },
        {
          type: "table",
          headers: ["Kano Category", "Mathematical Relationship", "Psychological Impact", "Industrial Benchmark Example"],
          rows: [
            [
              "**1. Must-Be / Basic (Threshold)**",
              "Asymmetrical negative ($S \\le 0$): 100% execution yields neutral satisfaction; failure causes severe dissatisfaction.",
              "Taken for granted; non-negotiable hygiene prerequisite.",
              "*Automobile anti-lock brakes (ABS), hotel room hot water, airline flight safety compliance.*"
            ],
            [
              "**2. One-Dimensional (Performance)**",
              "Linear symmetrical ($S \\propto \\text{Execution}$): Higher execution yields proportionate customer satisfaction; lower execution yields dissatisfaction.",
              "Direct competitive battleground; 'more is better'.",
              "*Automobile fuel efficiency (km/l), smartphone battery life (hours), cloud server latency (ms).*"
            ],
            [
              "**3. Attractive (Delighters / Excitement)**",
              "Exponential positive ($S = f(\\text{Execution}^2)$): Absence causes zero dissatisfaction; presence creates overwhelming customer delight.",
              "Latent, unexpected features that differentiate the brand.",
              "*Tesla in-car automated infotainment updates, airline personalized travel itinerary concierge, wireless smartphone charging in cars (when first launched).*"
            ],
            [
              "**4. Indifferent**",
              "Zero slope ($S = 0$): Execution level has zero impact on customer satisfaction.",
              "Over-engineered features; prime targets for cost reduction.",
              "*Cardboard packaging tensile strength exceeding standard; 50-page printed manual inside an app-managed IoT gadget box.*"
            ],
            [
              "**5. Reverse**",
              "Inverse slope ($S \\propto -\\text{Execution}$): Higher presence actively irritates and dissatisfies customers.",
              "Unwanted complexity or intrusive automation.",
              "*Intrusive pop-up notifications, overly complex multi-layered touch menus while driving.*"
            ]
          ]
        },
        {
          type: "h3",
          text: "The Dynamic Decay Law of the Kano Model"
        },
        {
          type: "p",
          text: "Customer expectations are never static. Over time (typically 12 to 24 months), every **Attractive / Delighter** attribute decays into a **One-Dimensional / Performance** requirement as competitors replicate it, and eventually degenerates into a **Must-Be / Basic** hygiene requirement. Organizations must constantly channel innovation budgets into new Delighters to maintain market leadership."
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
          text: "Developed by Yoji Akao and Shigeru Mizuno in 1966 at Mitsubishi's Kobe Shipyard, QFD is a structured cross-functional methodology that translates qualitative customer requirements (Voice of Customer) into quantitative engineering parameters, part specifications, process operations, and production control limits."
        },
        {
          type: "h3",
          text: "The Six Structural Rooms of the House of Quality (HOQ)"
        },
        {
          type: "table",
          headers: ["HOQ Room", "Architectural Location", "Core Engineering Function", "Mathematical Formulation / Weighting"],
          rows: [
            [
              "**Room 1: Customer Requirements (WHATs)**",
              "Left vertical column",
              "Structured list of customer needs and expectations captured from VOC research.",
              "Customer Importance Weight ($w_i$ on a 1 to 5 scale; $\\sum w_i$ normalized)."
            ],
            [
              "**Room 2: Engineering Characteristics (HOWs)**",
              "Top horizontal ceiling",
              "Measurable technical parameters formulated by engineering to address customer WHATs.",
              "Includes direction of optimization: $\\uparrow$ (Maximize), $\\downarrow$ (Minimize), or $\\odot$ (Target nominal value)."
            ],
            [
              "**Room 3: Interrelationship Matrix**",
              "Central grid (WHATs $\\times$ HOWs)",
              "Evaluates the strength of impact between each customer demand and each engineering characteristic.",
              "Standard scoring: Strong ($\\odot = 9$), Moderate ($\\bigcirc = 3$), Weak ($\\triangle = 1$), None ($\\text{Blank} = 0$)."
            ],
            [
              "**Room 4: Correlation Roof (Trade-off Matrix)**",
              "Triangular peak roof",
              "Identifies physical engineering trade-offs and synergies between different technical parameters.",
              "Scoring: $++$ (Strong Positive), $+$ (Positive), $-$ (Negative Trade-off), $--$ (Severe Conflict)."
            ],
            [
              "**Room 5: Customer Competitive Assessment**",
              "Right vertical column",
              "Evaluates how the firm's current product compares against leading competitors from the customer's perspective.",
              "Competitive scores (1-5 scale); derives Improvement Ratio ($IR = \\text{Target}/\\text{Current}$) and Sales Point multiplier."
            ],
            [
              "**Room 6: Technical Targets & Importance Scores**",
              "Bottom horizontal foundation",
              "Calculates absolute technical priorities and establishes concrete engineering design targets.",
              "Technical Importance Score: $W_j = \\sum_{i=1}^{n} (w_i \\times R_{ij})$; sets physical target metrics ($N, mm, dB$). "
            ]
          ]
        },
        {
          type: "h3",
          text: "Clausing's Four-Phase QFD Cascading Process"
        },
        {
          type: "ol",
          items: [
            "**Phase 1: Product Planning (House of Quality)**: Customer Requirements (WHATs) $\\rightarrow$ Engineering Characteristics (HOWs).",
            "**Phase 2: Part Deployment**: Engineering Characteristics (WHATs) $\\rightarrow$ Critical Part Characteristics (HOWs).",
            "**Phase 3: Process Planning**: Critical Part Characteristics (WHATs) $\\rightarrow$ Manufacturing Process Operations (HOWs).",
            "**Phase 4: Production Planning**: Manufacturing Process Operations (WHATs) $\\rightarrow$ Quality Controls, Inspection Points & SPC Limits (HOWs)."
          ]
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
          text: "Failure Mode and Effects Analysis (FMEA) is a systematic, proactive engineering risk-assessment methodology designed to identify potential design and process failure modes, evaluate their potential severity and causes, and establish prioritized preventive countermeasures before product manufacturing."
        },
        {
          type: "h3",
          text: "Design FMEA (DFMEA) vs. Process FMEA (PFMEA)"
        },
        {
          type: "table",
          headers: ["FMEA Dimension", "Design FMEA (DFMEA)", "Process FMEA (PFMEA)"],
          rows: [
            [
              "**Primary Objective**",
              "Ensure product design functions reliably and safely across operating conditions before tooling release.",
              "Ensure manufacturing and assembly operations produce parts conforming to engineering specs without disruption."
            ],
            [
              "**Failure Mode Focus**",
              "Material fatigue, structural yield, thermal expansion, dielectric breakdown, component clash.",
              "Operator error, incorrect torque, machine wear, tooling misorientation, contamination, thermal drift."
            ],
            [
              "**Typical Root Causes**",
              "Incorrect material selection, insufficient safety margin, inappropriate geometry, harsh environmental limits.",
              "Inadequate training, missing Poka-Yoke interlocks, improper lubrication, worn cutting inserts, ambient humidity."
            ],
            [
              "**Countermeasures**",
              "Redesigning geometry, selecting higher-grade alloys, enlarging safety factors, thermal shielding.",
              "Mistake-proofing (Poka-Yoke), automated optical inspection (AOI), statistical process control (SPC), torque verification."
            ]
          ]
        },
        {
          type: "h3",
          text: "Mathematical Formulation of Risk Priority Number (RPN)"
        },
        {
          type: "quote",
          text: "\\text{RPN} = \\text{Severity (S)} \\times \\text{Occurrence (O)} \\times \\text{Detection (D)}"
        },
        {
          type: "ul",
          items: [
            "**Severity (S, 1–10 scale)**: Assesses the seriousness of the effect of the potential failure mode on the customer. ($1 = \\text{Negligible aesthetic flaw}$; $10 = \\text{Hazardous failure without warning affecting passenger safety}$).",
            "**Occurrence (O, 1–10 scale)**: Assesses the likelihood that a specific failure cause will occur during product lifecycle. ($1 = \\text{Failure improbable, } < 1 \\text{ in } 1,000,000$; $10 = \\text{Failure almost certain, } > 1 \\text{ in } 10$).",
            "**Detection (D, 1–10 scale - Inverted Metric)**: Assesses the likelihood that current design/process controls will detect the failure before releasing to the customer. ($1 = \\text{Almost certain detection via 100% Poka-Yoke}$; $10 = \\text{Absolute uncertainty; no control exists}$).",
            "**RPN Range**: Values span from $1$ to $1,000$. Historically, RPNs exceeding $100–120$ triggered mandatory corrective action."
          ]
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
          text: "Genichi Taguchi redefined quality as 'the financial loss imparted to society from the time a product is shipped'. Taguchi fundamentally rejected the traditional manufacturing 'goalpost' mentality, which falsely assumed zero financial loss as long as a dimension fell anywhere inside tolerance limits $[LSL, USL]$."
        },
        {
          type: "h3",
          text: "Three Formulations of Taguchi Loss Function"
        },
        {
          type: "table",
          headers: ["Characteristic Type", "Mathematical Formula", "Loss Coefficient ($k$)", "Industrial Benchmark Example"],
          rows: [
            [
              "**1. Nominal-the-Best (NTB)**",
              "$L(y) = k(y - m)^2$",
              "$k = \\frac{A_0}{\\Delta^2}$ where $A_0$ is scrap cost and $\\Delta$ is customer tolerance.",
              "*Shaft diameter ($50.00\\text{ mm} \\pm 0.05\\text{ mm}$), automotive piston clearance, resistor voltage.*"
            ],
            [
              "**2. Smaller-the-Better (STB)**",
              "$L(y) = k y^2$",
              "$k = \\frac{A_0}{y_0^2}$ where $y_0$ is maximum permissible threshold.",
              "*Engine carbon emissions (g/km), electrical resistance in copper wiring, chemical impurity PPM.*"
            ],
            [
              "**3. Larger-the-Better (LTB)**",
              "$L(y) = k \\left(\\frac{1}{y^2}\\right)$",
              "$k = A_0 y_0^2$ where $y_0$ is minimum acceptable threshold.",
              "*Tensile breaking strength of crane cables (kN), smartphone battery lifespan (cycles), weld joint shear strength.*"
            ]
          ]
        },
        {
          type: "h3",
          text: "Average Expected Societal Loss in a Production Process"
        },
        {
          type: "p",
          text: "For a continuous production process with mean $\\mu$ and variance $\\sigma^2$, the average expected loss per unit ($\\bar{L}$) is mathematically formulated as:"
        },
        {
          type: "quote",
          text: "\\bar{L} = k \\left[ \\sigma^2 + (\\mu - m)^2 \\right]"
        },
        {
          type: "p",
          text: "This formulation proves that total financial loss is driven by two independent components: (1) process variability around the mean ($\\sigma^2$), and (2) process off-centeredness from the nominal target ($(\\mu - m)^2$). To minimize loss, organizations must first reduce process variance ($\\sigma^2 \\rightarrow 0$) and then adjust process mean to target ($\\mu = m$)."
        }
      ]
    },
    {
      id: "tqm-t-11",
      slug: "supplier-qualification-evaluation-system",
      number: 11,
      title: "Strategic Purchasing and the Four-Tier Supplier Qualification Lifecycle",
      unit: "Operations Quality, SPC & 7 QC Tools",
      summary:
        "Supplier quality assurance, the Four-Tier Supplier Qualification Lifecycle (Unapproved, Conditional, Approved, Certified/Partner), ISO/IATF auditing, and vendor rating systems.",
      tags: ["Supplier Quality", "Vendor Qualification", "Dock-to-Stock", "SPI", "Procurement"],
      blocks: [
        {
          type: "h3",
          text: "The Four-Tier Supplier Qualification Lifecycle"
        },
        {
          type: "table",
          headers: ["Qualification Tier", "Operational Status", "Audit & Verification Requirements", "Inspection & Sourcing Policy"],
          rows: [
            [
              "**Tier 1: Unapproved / Potential Supplier**",
              "Candidate supplier undergoing initial screening; no commercial purchase orders authorized.",
              "Financial solvency check, preliminary capability survey, code of conduct compliance review.",
              "Strictly prototype or R&D sample quantities only; 100% destructive/metallurgical testing."
            ],
            [
              "**Tier 2: Conditionally Approved Supplier**",
              "Supplier authorized for limited commercial trial production runs with intensive surveillance.",
              "On-site Quality Management System (QMS) audit, initial Process Capability ($C_{pk} \\ge 1.33$) evaluation.",
              "Rigorous receiving inspection (Level II tightened sampling); mandatory Certificate of Analysis (COA) with each batch."
            ],
            [
              "**Tier 3: Approved Supplier**",
              "Fully qualified supplier consistently satisfying quality, cost, and delivery (QCD) performance targets.",
              "Annual surveillance audits, ISO 9001 / IATF 16949 certification, established Corrective Action (8D) process.",
              "Standard normal sampling inspection (AQL 0.65%); standard purchase order execution."
            ],
            [
              "**Tier 4: Certified / Strategic Partner**",
              "World-class supplier operating with proven $C_{pk} \\ge 1.67$ and integrated into long-term strategic co-design.",
              "Continuous electronic SPC data streaming, Lean Six Sigma capability, joint Value Engineering (VAVE).",
              "**Dock-to-Stock status**: Zero incoming receiving inspection; parts flow directly from supplier trucks onto factory assembly line."
            ]
          ]
        },
        {
          type: "h3",
          text: "Comprehensive Supplier Quality Rating System (SQRS)"
        },
        {
          type: "p",
          text: "World-class procurement organizations evaluate approved suppliers using weighted multi-attribute rating models:"
        },
        {
          type: "quote",
          text: "\\text{Supplier Performance Index (SPI)} = 0.40(Q) + 0.30(D) + 0.20(C) + 0.10(S)"
        },
        {
          type: "ul",
          items: [
            "**Quality Score (Q, 40% weight)**: Calculated based on lot acceptance rate and incoming defect PPM ($Q = 100 - \\text{PPM penalty}$).",
            "**Delivery Score (D, 30% weight)**: Evaluates on-time in-full (OTIF) delivery performance against schedule commitments.",
            "**Cost Competitiveness (C, 20% weight)**: Evaluates annual cost-reduction targets, payment terms, and total cost of ownership (TCO).",
            "**Service & Responsiveness (S, 10% weight)**: Evaluates 8D problem-solving responsiveness, engineering support, and flexibility."
          ]
        }
      ]
    },
    {
      id: "tqm-t-12",
      slug: "seven-basic-qc-tools-quality-investigation",
      number: 12,
      title: "The Seven Basic Quality Control (7 QC) Tools: Architecture, Functions, and 6-Phase Investigation Flow",
      unit: "Operations Quality, SPC & 7 QC Tools",
      summary:
        "Comprehensive breakdown of the 7 Basic QC Tools (Check Sheet, Pareto Chart, Cause-and-Effect Diagram, Histogram, Control Chart, Scatter Diagram, Stratification/Flowchart) and their 6-phase quality investigation flow.",
      tags: ["7 QC Tools", "Ishikawa", "Pareto", "Fishbone", "Histogram", "Scatter Plot"],
      blocks: [
        {
          type: "h3",
          text: "The Seven Basic Quality Control (7 QC) Tools"
        },
        {
          type: "table",
          headers: ["Tool", "Creator / Principle", "Primary Analytical Purpose", "Industrial Quality Application"],
          rows: [
            [
              "**1. Check Sheet**",
              "Standardized observation form",
              "Structured, real-time data collection at the operational site to capture defect frequencies and spatial locations.",
              "*Defect-location 'measles chart' marking solder bridging locations on PCB assembly lines.*"
            ],
            [
              "**2. Pareto Chart**",
              "Joseph Juran (80/20 Rule)",
              "Separates the 'vital few' defect causes from the 'useful many' by plotting descending frequencies with cumulative ogive line.",
              "*Isolating that 2 out of 25 CNC machines account for 81% of total automotive engine scrap costs.*"
            ],
            [
              "**3. Cause-and-Effect (Fishbone)**",
              "Kaoru Ishikawa (5M+1E / 4P)",
              "Systematically brainstorms and structures all potential root causes contributing to a specific quality defect.",
              "*Investigating pharmaceutical tablet dissolution failure across Man, Machine, Material, Method, Measurement, Environment.*"
            ],
            [
              "**4. Histogram**",
              "Frequency distribution graph",
              "Visualizes central tendency, spread, and shape of continuous data relative to tolerance limits $[LSL, USL]$.",
              "*Detecting bimodal distribution indicating mixed raw material batches from two different steel suppliers.*"
            ],
            [
              "**5. Scatter Diagram**",
              "Correlation coordinate plot",
              "Tests for mathematical correlation between an independent process variable ($X$) and dependent quality metric ($Y$).",
              "*Validating positive correlation between injection molding nozzle temperature and plastic tensile strength.*"
            ],
            [
              "**6. Stratification / Flowchart**",
              "Data segmentation & process map",
              "Separates mixed data into distinct homogeneous layers (by shift, machine, operator, lot) to isolate sources of variation.",
              "*Stratifying defect rates by Day Shift vs. Night Shift to reveal operator training discrepancies.*"
            ],
            [
              "**7. Control Chart**",
              "Walter Shewhart ($\\pm 3\\sigma$)",
              "Distinguishes common cause variation from assignable/special causes to maintain statistical process stability over time.",
              "*Tracking shaft outer diameter with an $\\bar{X}-R$ chart to detect tool wear trends before out-of-spec defects occur.*"
            ]
          ]
        },
        {
          type: "h3",
          text: "Six-Phase Quality Investigation Sequence"
        },
        {
          type: "ol",
          items: [
            "**Step 1: Process Mapping (Flowchart)**: Map operational process flow to establish investigation boundaries and isolate potential risk points.",
            "**Step 2: Empirical Data Collection (Check Sheet)**: Collect quantitative defect counts, operational parameters, and spatial failure locations in real-time.",
            "**Step 3: Defect Prioritization (Pareto Chart)**: Apply 80/20 analysis to isolate the vital few root defects responsible for the majority of financial losses.",
            "**Step 4: Root-Cause Investigation (Fishbone & 5 Whys)**: Brainstorm potential causal factors across 5M+1E and drill down to verified root causes.",
            "**Step 5: Statistical Distribution & Correlation (Histogram & Scatter)**: Analyze process spread against specification limits and confirm mathematical relationships between process inputs and quality outputs.",
            "**Step 6: Process Stabilization & Long-Term Monitoring (Control Chart)**: Implement statistical control limits to hold the gains and detect assignable causes in real-time."
          ]
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
          type: "table",
          headers: ["MP Tool", "Japanese Origin / Method", "Core Function", "Strategic Role in Planning"],
          rows: [
            [
              "**1. Affinity Diagram**",
              "KJ Method (Jiro Kawakita)",
              "Organizes vast amounts of unstructured, qualitative brainstorming data and customer feedback into natural conceptual clusters.",
              "Synthesizes subjective VOC data into structured problem themes."
            ],
            [
              "**2. Relations Diagram**",
              "Interrelationship Digraph",
              "Maps multi-directional cause-and-effect relationships among diverse factors to identify primary system drivers vs. outcome indicators.",
              "Isolates root driver nodes (nodes with high outgoing arrows)."
            ],
            [
              "**3. Tree Diagram**",
              "Systematic Diagram",
              "Systematically breaks down broad strategic objectives or root drivers into increasing levels of detailed operational tasks ('How-How').",
              "Decomposes complex goals into actionable work breakdown structures."
            ],
            [
              "**4. Matrix Diagram**",
              "L, T, X, Y shaped matrices",
              "Evaluates multi-dimensional relationships and functional responsibilities between tasks, departments, and quality targets.",
              "Assigns organizational accountability (RACI matrix)."
            ],
            [
              "**5. Prioritization Matrix**",
              "Analytical Hierarchy Process (AHP)",
              "Ranks and scores alternative implementation options against rigorously weighted strategic evaluation criteria.",
              "Selects the highest-ROI solution paths objectively."
            ],
            [
              "**6. Process Decision Program Chart (PDPC)**",
              "Contingency Risk Tree",
              "Systematically maps potential failure modes, 'what-if' risks, and unintended side effects during plan execution to design countermeasures.",
              "Proactive operational risk mitigation and contingency planning."
            ],
            [
              "**7. Arrow Diagram**",
              "Activity Network Diagram / CPM",
              "Sequences validated tasks into an execution network, determining task dependencies, Earliest/Latest times, slack, and Critical Path.",
              "Ensures project execution stays on schedule without critical delays."
            ]
          ]
        },
        {
          type: "h3",
          text: "Detailed 7-Step Tool Integration Sequence"
        },
        {
          type: "ol",
          items: [
            "**Step 1 (Affinity Diagram)**: Cross-functional team brainstorms 80+ unstructured challenges regarding missed delivery schedules; clusters them into natural themes (*People, Technology, Logistics, Vendors*).",
            "**Step 2 (Relations Diagram)**: Takes theme headers from the Affinity Diagram and draws directional causal arrows. Node with highest outgoing arrows (*'Lack of standardized supervisor training'*) is isolated as Primary System Driver.",
            "**Step 3 (Tree Diagram)**: Takes Primary System Driver as root goal and decomposes it across 3 hierarchical levels by asking *'How can we resolve this?'*, producing 12 discrete sub-tasks.",
            "**Step 4 (Matrix Diagram)**: Places the 12 sub-tasks on the vertical axis against departments (*HR, Production, Engineering, Maintenance*) on the horizontal axis to assign RACI responsibilities.",
            "**Step 5 (Prioritization Matrix)**: Scores alternative training delivery software options against weighted criteria (*Implementation Cost 40%, Speed 30%, Usability 30%*) to select optimal platform.",
            "**Step 6 (PDPC)**: Constructs a contingency tree for software rollout, identifying risk scenarios (*'Server crash during live training', 'Shift worker overtime clash'*) and designing backup protocols.",
            "**Step 7 (Arrow Diagram)**: Plots finalized, risk-mitigated tasks into a Critical Path Method (CPM) network diagram, establishing a 6-week execution path with zero schedule slippage."
          ]
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
          text: "Common Cause vs. Special Cause Variation"
        },
        {
          type: "table",
          headers: ["Variation Type", "Nature & Origin", "Predictability & Impact", "Management Responsibility & Action"],
          rows: [
            [
              "**Common Cause (Chance / Natural)**",
              "Inherent in the system design, machine tolerances, ambient conditions, and standard raw material variation.",
              "Statistically predictable within $\\pm 3\\sigma$ boundaries; stable over time.",
              "**Management Action Required**: Can only be reduced by fundamentally redesigning the process/equipment (Deming 94% rule)."
            ],
            [
              "**Special Cause (Assignable / Unnatural)**",
              "External disturbances not inherent to the system (e.g., operator error, tool breakage, batch formulation error).",
              "Unpredictable, causes process instability, shifts mean, or inflates variance.",
              "**Frontline Operator Action Required**: Immediate local intervention to identify, isolate, and eliminate the assignable cause."
            ]
          ]
        },
        {
          type: "h3",
          text: "Mathematical Architecture of Shewhart Control Charts"
        },
        {
          type: "p",
          text: "Control limits are established at $\\pm 3\\sigma$ from the centerline ($CL$). In a stable normal distribution, $99.73\\%$ of all data points fall naturally within $\\pm 3\\sigma$ under common cause variation alone:"
        },
        {
          type: "quote",
          text: "\\text{UCL} = \\mu + 3\\sigma_{\\bar{X}} = \\bar{\\bar{X}} + A_2 \\bar{R}, \\quad \\text{CL} = \\bar{\\bar{X}}, \\quad \\text{LCL} = \\mu - 3\\sigma_{\\bar{X}} = \\bar{\\bar{X}} - A_2 \\bar{R}"
        },
        {
          type: "h3",
          text: "Western Electric Out-of-Control Sensitizing Rules"
        },
        {
          type: "table",
          headers: ["Rule", "Pattern Trigger Condition", "Zone Involved", "Diagnostic Meaning & Cause"],
          rows: [
            [
              "**Rule 1**",
              "1 point falls outside the $\\pm 3\\sigma$ Control Limits ($> UCL$ or $< LCL$).",
              "Beyond Zone A",
              "Severe assignable shock (tool fracture, severe power surge, wrong material lot)."
            ],
            [
              "**Rule 2**",
              "2 out of 3 consecutive points fall in Zone A (between $2\\sigma$ and $3\\sigma$) on the same side of CL.",
              "Zone A",
              "Significant process mean shift or process variance surge."
            ],
            [
              "**Rule 3**",
              "4 out of 5 consecutive points fall in Zone B or beyond ($> 1\\sigma$) on the same side of CL.",
              "Zone B or beyond",
              "Moderate process mean shift; emerging calibration drift."
            ],
            [
              "**Rule 4**",
              "8 to 9 consecutive points fall on the same side of the Center Line (CL).",
              "Same side of CL",
              "Persistent bias in process mean (new operator setting, revised raw material supplier)."
            ],
            [
              "**Rule 5 (Trend)**",
              "6 consecutive points steadily increasing or steadily decreasing.",
              "Across zones",
              "Gradual systematic wear (tool wear, chemical bath depletion, dirt accumulation)."
            ],
            [
              "**Rule 6 (Oscillation)**",
              "14 consecutive points alternating up and down in saw-tooth pattern.",
              "Across CL",
              "Systematic alternating feeds (two different operators, alternating raw material hoppers)."
            ]
          ]
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
          type: "table",
          headers: ["Index", "Mathematical Formula", "Core Focus & Sensitivity", "Key Limitation"],
          rows: [
            [
              "**Potential Capability ($C_p$)**",
              "$C_p = \\frac{\\text{USL} - \\text{LSL}}{6\\sigma}$",
              "Measures process spread (spread capability) relative to specification width.",
              "Blind to process centering; a process can have $C_p = 2.0$ yet produce 100% scrap if mean is shifted."
            ],
            [
              "**Actual Capability ($C_{pk}$)**",
              "$C_{pk} = \\min \\left( \\frac{\\text{USL} - \\mu}{3\\sigma}, \\frac{\\mu - \\text{LSL}}{3\\sigma} \\right)$",
              "Measures both process spread AND process centering relative to nearest specification limit.",
              "Does not directly penalize deviation from target $m$ if specifications are asymmetrical."
            ],
            [
              "**Taguchi Capability ($C_{pm}$)**",
              "$C_{pm} = \\frac{\\text{USL} - \\text{LSL}}{6\\sqrt{\\sigma^2 + (\\mu - m)^2}} = \\frac{C_p}{\\sqrt{1 + \\left(\\frac{\\mu - m}{\\sigma}\\right)^2}}$",
              "Directly incorporates quadratic financial loss and penalizes any off-center deviation from target $m$.",
              "Requires explicit target nominal value $m$ definition."
            ]
          ]
        },
        {
          type: "h3",
          text: "Process Centering Relationship & Capability Interpretation Matrix"
        },
        {
          type: "quote",
          text: "C_{pk} = C_p (1 - k) \\quad \\text{where} \\quad k = \\frac{|m - \\mu|}{\\frac{\\text{USL} - \\text{LSL}}{2}}"
        },
        {
          type: "table",
          headers: ["$C_{pk}$ Value", "Process Capability Status", "Expected Defect Rate (PPM)", "Industrial Action Mandate"],
          rows: [
            [
              "**$C_{pk} < 1.0$**",
              "**Incapable Process** (Process spread exceeds tolerance width or severe mean shift).",
              "$> 2,700 \\text{ PPM}$ (Severe non-conformance)",
              "Mandatory 100% sorting inspection; line stoppage; root-cause intervention required."
            ],
            [
              "**$1.0 \\le C_{pk} < 1.33$**",
              "**Barely Capable / Marginal Process** (Meets traditional $3\\sigma$ boundaries).",
              "$63 - 2,700 \\text{ PPM}$",
              "Requires intensive statistical monitoring; unacceptable for safety-critical automotive/aerospace parts."
            ],
            [
              "**$1.33 \\le C_{pk} < 1.67$**",
              "**Adequate / Capable Process** (Industry benchmark standard for existing processes).",
              "$0.57 - 63 \\text{ PPM}$ ($4\\sigma$ quality level)",
              "Standard SPC chart monitoring; process is under statistical control and capable."
            ],
            [
              "**$C_{pk} \\ge 1.67$**",
              "**World-Class / Highly Capable Process** (Required for new tooling, automotive safety components).",
              "$< 0.57 \\text{ PPM}$ ($5\\sigma$ quality level)",
              "Eligible for reduced sampling inspection or Dock-to-Stock supplier certification."
            ],
            [
              "**$C_{pk} \\ge 2.0$**",
              "**Six Sigma Quality Level** ($6\\sigma$ process spread)",
              "$\\le 3.4 \\text{ DPMO}$ with $1.5\\sigma$ shift",
              "World-class benchmark excellence; zero receiving inspection required."
            ]
          ]
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
          text: "Pioneered by Bill Smith and Bob Galvin at Motorola in 1986 and famously scaled by Jack Welch at General Electric in 1995, Six Sigma is a disciplined, data-driven methodology designed to eliminate defects, reduce process variation, and achieve near-perfection in manufacturing and transactional processes."
        },
        {
          type: "h3",
          text: "Mathematical Formulation of Defects Per Million Opportunities (DPMO)"
        },
        {
          type: "quote",
          text: "\\text{DPMO} = \\left( \\frac{\\text{Total Defects Found (D)}}{\\text{Total Units Inspected (U)} \\times \\text{Opportunities per Unit (O)}} \\right) \\times 10^6"
        },
        {
          type: "h3",
          text: "The 1.5-Sigma Long-Term Process Shift"
        },
        {
          type: "p",
          text: "In short-term laboratory or controlled pilot runs, a pure $6\\sigma$ process produces only **0.002 PPM** (2 defects per billion opportunities). However, empirical studies across industrial manufacturing prove that over the long term, machine wear, ambient thermal changes, material lot variations, and operator fatigue cause the process mean to drift by approximately **$1.5\\sigma$**."
        },
        {
          type: "p",
          text: "Under this standard $1.5\\sigma$ drift assumption, a Six Sigma process allows a specification width of $\\pm 6\\sigma$ while operating at an effective $4.5\\sigma$ limit, yielding precisely **3.4 Defects Per Million Opportunities (DPMO)** (99.99966% yield)."
        },
        {
          type: "h3",
          text: "Six Sigma DMAIC Phase-Gate Roadmap"
        },
        {
          type: "table",
          headers: ["DMAIC Phase", "Core Executive Question", "Key Deliverables", "Primary Statistical & Analytical Tools"],
          rows: [
            [
              "**1. DEFINE**",
              "What specific operational problem are we solving, what is the business case, and who is the customer?",
              "Project Charter, Problem Statement, Business Case, SIPOC High-Level Process Map.",
              "Project Charter, SIPOC Diagram, VOC to CTQ Tree, Kano Analysis."
            ],
            [
              "**2. MEASURE**",
              "What is the baseline capability of the current process, and is our measurement system statistically reliable?",
              "Data Collection Plan, Gage R&R Study ($< 10\\%$ target), Baseline Sigma Level & DPMO calculation.",
              "Gage R&R, Process Capability ($C_p, C_{pk}$), Value Stream Map, DPMO Calculator."
            ],
            [
              "**3. ANALYZE**",
              "What are the verified vital few root causes ($X$'s) that drive output variation ($Y = f(X)$)?",
              "Validated Root Causes, Identification of Waste (Muda), Mathematical Transfer Function.",
              "Fishbone Diagram, 5 Whys, Multi-Vari Analysis, ANOVA, Regression, PFMEA."
            ],
            [
              "**4. IMPROVE**",
              "What optimized solutions eliminate root causes, and has the solution been piloted and validated?",
              "Piloted Countermeasures, Design of Experiments (DOE) optimization, Cost-Benefit Analysis.",
              "Design of Experiments (DOE), Poka-Yoke (Mistake Proofing), Kaizen Event, Pilot Run."
            ],
            [
              "**5. CONTROL**",
              "How will the process improvements be standardized and held so the process never reverts back?",
              "Standard Operating Procedures (SOPs), Statistical Process Control (SPC) Dashboard, Control Plan.",
              "Control Charts ($\\bar{X}-R, p$), Visual Management (5S), Training Plan, Process Control Plan."
            ]
          ]
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
          type: "table",
          headers: ["Lean Waste (Muda)", "Acronym Letter", "Operational Definition", "Industrial Factory Example"],
          rows: [
            [
              "**Defects**",
              "**D**",
              "Products or services that fail to meet specifications, requiring scrap, rework, or warranty replacement.",
              "*Machined automotive crankshaft with out-of-round journal requiring scrapping.*"
            ],
            [
              "**Overproduction**",
              "**O**",
              "Producing more than customer demand or producing ahead of schedule (the most severe waste).",
              "*Stamping 10,000 car door panels when the assembly line only needs 500 per shift.*"
            ],
            [
              "**Waiting**",
              "**W**",
              "Idle time caused by bottlenecks, machine downtime, material shortages, or delayed sign-offs.",
              "*Assembly workers waiting 45 minutes for forklift operator to deliver fastener bins.*"
            ],
            [
              "**Non-Utilized Talent**",
              "**N**",
              "Failing to engage frontline operators' problem-solving skills, creativity, and domain knowledge.",
              "*Ignoring shop floor workers' suggestions for improving tool changeover ergonomics.*"
            ],
            [
              "**Transportation**",
              "**T**",
              "Unnecessary physical movement of raw materials, work-in-progress (WIP), or finished goods between facilities.",
              "*Trucking sub-assemblies back and forth between two distant warehouse buildings for painting.*"
            ],
            [
              "**Inventory**",
              "**I**",
              "Excess raw materials, buffer WIP, or finished goods tying up working capital and hiding underlying process problems.",
              "*Holding 60 days of buffer raw steel coils in warehouse due to erratic vendor reliability.*"
            ],
            [
              "**Motion**",
              "**M**",
              "Unnecessary physical movement or ergonomic strain by operators (bending, reaching, walking).",
              "*Operator walking 15 paces back and forth to retrieve hand tools from a distant tool cabinet.*"
            ],
            [
              "**Extra Processing**",
              "**E**",
              "Performing more work, higher precision, or extra features beyond what the customer requested or values.",
              "*Polishing internal engine casing surfaces that have zero functional or aesthetic impact.*"
            ]
          ]
        },
        {
          type: "h3",
          text: "The 5S Workplace Organization Methodology"
        },
        {
          type: "table",
          headers: ["5S Step (Japanese)", "English Equivalent", "Core Workplace Action", "Audit Criteria & Tooling"],
          rows: [
            [
              "**1. Seiri**",
              "**Sort**",
              "Separate necessary items from unnecessary items; remove all clutter from workplace.",
              "**Red Tag Campaign**: Affix red tags to unused tools/materials and discard after 48h."
            ],
            [
              "**2. Seiton**",
              "**Set in Order**",
              "Organize remaining necessary items so they are easy to locate, retrieve, and return ('A place for everything, and everything in its place').",
              "**Shadow Boards**, floor tape boundaries, labeled part bins, ergonomic point-of-use placement."
            ],
            [
              "**3. Seiso**",
              "**Shine (Sweep)**",
              "Thoroughly clean work areas, equipment, and tooling daily; cleaning acts as primary inspection for leaks and wear.",
              "Daily 5-minute cleaning checklists, white glove inspections, clear oil sight glasses."
            ],
            [
              "**4. Seiketsu**",
              "**Standardize**",
              "Establish visual standard operating procedures, checklists, and color-coding across the entire facility.",
              "Visual SOP placards, color-coded floor striping, standardized workstation layouts."
            ],
            [
              "**5. Shitsuke**",
              "**Sustain**",
              "Institutionalize discipline and self-maintenance through regular 5S audits, management walkthroughs, and rewards.",
              "Weekly 5S radar chart audits, 5S scoreboards, continuous employee engagement."
            ]
          ]
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
          text: "Foundations of Total Productive Maintenance (TPM)"
        },
        {
          type: "p",
          text: "Developed by Seiichi Nakajima at the Japan Institute of Plant Maintenance (JIPM), TPM is an equipment management philosophy designed to maximize equipment effectiveness throughout its entire lifecycle by eliminating breakdowns, slowdowns, and defects through cross-functional frontline operator engagement."
        },
        {
          type: "h3",
          text: "Mathematical Architecture of Overall Equipment Effectiveness (OEE)"
        },
        {
          type: "quote",
          text: "\\text{OEE} = \\text{Availability (A)} \\times \\text{Performance Rate (P)} \\times \\text{Quality Rate (Q)}"
        },
        {
          type: "table",
          headers: ["OEE Factor", "Mathematical Formula", "Target Six Big Loss Addressed", "World-Class Benchmark"],
          rows: [
            [
              "**1. Availability (A)**",
              "$A = \\frac{\\text{Operating Time}}{\\text{Planned Production Time}} = \\frac{\\text{Planned Time} - \\text{Downtime}}{\\text{Planned Time}}$",
              "Loss 1: Equipment Breakdowns & Catastrophic Failures\\nLoss 2: Setup, Tool Changeovers & Adjustments (SMED)",
              "**$\\ge 90.0\\%$**"
            ],
            [
              "**2. Performance (P)**",
              "$P = \\frac{\\text{Ideal Cycle Time} \\times \\text{Total Count}}{\\text{Operating Time}} = \\frac{\\text{Actual Output}}{\\text{Target Output at Max Speed}}$",
              "Loss 3: Idling & Minor Stoppages ($< 5\\text{ min}$ sensor jams)\\nLoss 4: Reduced Operating Speed (running machine below design nameplate)",
              "**$\\ge 95.0\\%$**"
            ],
            [
              "**3. Quality (Q)**",
              "$Q = \\frac{\\text{Good Output Count}}{\\text{Total Output Count}} = \\frac{\\text{Total Count} - (\\text{Scrap} + \\text{Rework})}{\\text{Total Count}}$",
              "Loss 5: Process Defects & In-line Scrap\\nLoss 6: Startup / Warm-up Yield Losses during tool changeover",
              "**$\\ge 99.9\\%$**"
            ],
            [
              "**Total Overall OEE**",
              "$\text{OEE} = A \times P \times Q = 0.90 \times 0.95 \times 0.999$",
              "Comprehensive elimination of all Six Big Equipment Losses",
              "**$\\ge 85.0\\%$ (World-Class Excellence)**"
            ]
          ]
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
          type: "table",
          headers: ["Cost Category", "Classification", "Typical Industry % Share", "Operational Line-Item Examples"],
          rows: [
            [
              "**1. Prevention Costs**",
              "**Cost of Conformance** (Proactive investment to prevent defects from occurring at source).",
              "**5% – 10%** (Target: $> 50\\%$ of total COQ budget)",
              "*Design reviews, DFMEA/PFMEA sessions, Poka-Yoke fixture fabrication, supplier qualification audits, SPC employee training, preventive maintenance.*"
            ],
            [
              "**2. Appraisal Costs**",
              "**Cost of Conformance** (Expenditures incurred in measuring, evaluating, or auditing products to assure conformance).",
              "**20% – 25%**",
              "*Receiving inspection of incoming raw parts, in-line vision inspection sensors, CMM dimensional measurement, laboratory destructive testing, gauge calibration.*"
            ],
            [
              "**3. Internal Failure Costs**",
              "**Cost of Non-Conformance** (Costs resulting from defects caught BEFORE shipment to the customer).",
              "**25% – 40%**",
              "*Scrap, rework labor, re-inspection costs, machine downtime from line jams, downgrading products to secondary scrap markets.*"
            ],
            [
              "**4. External Failure Costs**",
              "**Cost of Non-Conformance** (Costs incurred when defective products reach the end customer; most catastrophic).",
              "**40% – 50%**",
              "*Warranty repair payouts, product recall logistics, customer complaint dispute resolution, product liability lawsuits, permanent loss of brand equity.*"
            ]
          ]
        },
        {
          type: "h3",
          text: "The 1-10-100 Prevention Leverage Rule"
        },
        {
          type: "p",
          text: "The 1-10-100 Rule demonstrates the exponential economic leverage of proactive quality management:"
        },
        {
          type: "ul",
          items: [
            "**$1.00 Prevention Cost**: Spending $1.00 in engineering design (FMEA, Poka-Yoke) eliminates the root cause before manufacturing.",
            "**$10.00 Appraisal & Rework Cost**: Failing to prevent the defect means spending $10.00 to inspect, detect, and rework the defective part inside the factory.",
            "**$100.00+ External Failure Cost**: If the defect escapes to the customer, the cost explodes to $100.00+ in warranty claims, field recalls, legal liability, and brand destruction."
          ]
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
          type: "ol",
          items: [
            "**QMP 1: Customer Focus**: Meeting and exceeding customer expectations to sustain long-term customer loyalty.",
            "**QMP 2: Leadership**: Establishing unity of purpose, vision, and organizational engagement at all levels.",
            "**QMP 3: Engagement of People**: Empowering competent, skilled employees throughout the organization.",
            "**QMP 4: Process Approach**: Managing interconnected activities as coherent processes to optimize organizational performance.",
            "**QMP 5: Improvement**: Ongoing focus on continuous improvement (PDCA) to drive operational resilience.",
            "**QMP 6: Evidence-Based Decision Making**: Making decisions based on rigorous analysis and evaluation of empirical data.",
            "**QMP 7: Relationship Management**: Managing relationships with suppliers and partners for sustained supply chain performance."
          ]
        },
        {
          type: "h3",
          text: "Annex SL 10-Clause High-Level Structure (HLS)"
        },
        {
          type: "table",
          headers: ["Clause Number & Title", "PDCA Cycle Alignment", "Core ISO 9001:2015 Requirement"],
          rows: [
            [
              "**Clause 1: Scope**",
              "—",
              "Defines intended outcomes and applicability of the Quality Management System (QMS)."
            ],
            [
              "**Clause 2: Normative References**",
              "—",
              "References ISO 9000:2015 fundamentals and vocabulary."
            ],
            [
              "**Clause 3: Terms & Definitions**",
              "—",
              "Standardized terminology applicable across all Annex SL management systems."
            ],
            [
              "**Clause 4: Context of the Organization**",
              "**PLAN**",
              "Understanding internal/external issues, interested parties, and defining QMS boundaries."
            ],
            [
              "**Clause 5: Leadership**",
              "**PLAN / DO**",
              "Executive leadership commitment, quality policy formulation, and assigning organizational roles/responsibilities."
            ],
            [
              "**Clause 6: Planning**",
              "**PLAN**",
              "**Risk-Based Thinking**: Identifying organizational risks/opportunities and setting measurable quality objectives."
            ],
            [
              "**Clause 7: Support**",
              "**DO**",
              "Resource allocation, infrastructure, monitoring/measuring resources, competence, awareness, and documented information."
            ],
            [
              "**Clause 8: Operation**",
              "**DO**",
              "Operational planning and control, customer requirements review, design & development, supplier control, and product release."
            ],
            [
              "**Clause 9: Performance Evaluation**",
              "**CHECK**",
              "Customer satisfaction monitoring, data analysis, internal audits, and Management Review Meetings (MRM)."
            ],
            [
              "**Clause 10: Improvement**",
              "**ACT**",
              "Non-conformity management, Corrective Action (CAPA), and continuous improvement of QMS suitability."
            ]
          ]
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
          type: "table",
          headers: ["Award Framework", "Founding Origin & Sponsor", "Primary Evaluation Focus", "Scoring System & Structure"],
          rows: [
            [
              "**Malcolm Baldrige National Quality Award (MBNQA)**",
              "United States (1987, US Congress / NIST)",
              "Holistic organizational performance excellence, business results, competitive competitiveness, and leadership.",
              "**1,000-Point Scoring System** across 7 Categories (Leadership, Strategy, Customers, Measurement/Knowledge, Workforce, Operations, Results [450 pts])."
            ],
            [
              "**The Deming Application Prize**",
              "Japan (1951, JUSE - Japanese Union of Scientists and Engineers)",
              "Strict implementation of Company-Wide Quality Control (CWQC / TQM), statistical methods, and statistical process management.",
              "Non-prescriptive checklist auditing 10 categories (Policy, Organization, Information, Standardization, QC Circles, Quality Assurance, Effects)."
            ],
            [
              "**EFQM Global Excellence Award**",
              "Europe (1991, European Foundation for Quality Management)",
              "Organizational transformation, European stakeholder value creation, sustainability, and purpose-driven leadership.",
              "**RADAR Logic Matrix** (Results, Approaches, Deploy, Assess, Refine) evaluating 7 Criteria divided into Direction, Execution, and Results."
            ]
          ]
        },
        {
          type: "h3",
          text: "MBNQA 1,000-Point Category Breakdown"
        },
        {
          type: "table",
          headers: ["MBNQA Category", "Point Allocation", "Core Organizational Evaluation Focus"],
          rows: [
            [
              "**1. Leadership**",
              "120 Points",
              "Senior leadership actions, corporate governance, legal/ethical behavior, societal contributions."
            ],
            [
              "**2. Strategy**",
              "85 Points",
              "Strategic planning process, strategic objectives, resource allocation, implementation action plans."
            ],
            [
              "**3. Customers**",
              "85 Points",
              "Voice of Customer listening, customer engagement, relationship building, satisfaction measurement."
            ],
            [
              "**4. Measurement, Analysis & Knowledge**",
              "90 Points",
              "Performance metrics tracking, competitive benchmarking, organizational knowledge management."
            ],
            [
              "**5. Workforce**",
              "85 Points",
              "Workforce environment, employee capability development, engagement, compensation/benefits."
            ],
            [
              "**6. Operations**",
              "85 Points",
              "Work process design, management, innovation, supply chain management, operational resilience."
            ],
            [
              "**7. Results (The Crucial Half)**",
              "**450 Points**",
              "Product & process performance (120), Customer results (80), Workforce results (80), Leadership & governance (80), Financial & market results (90)."
            ]
          ]
        }
      ]
    }
  ],
  examQuestions: [
    {
      id: "om01-eq-1",
      number: 1,
      title: "Garvin's Five Approaches to Defining Quality and Master Guru Philosophies",
      marks: 14,
      relatedSlugs: ["defining-quality-philosophies-gurus"],
      question:
        "Critically examine David Garvin's five conceptual approaches to defining quality. Contrast the foundational quality philosophies of Deming, Juran, Crosby, and Feigenbaum, explaining how their paradigms transformed modern industrial management.",
      blocks: [
        {
          type: "diagram",
          kind: "deming-pdca",
          caption: "Deming PDCA Improvement Cycle & Quality Gurus Strategic Comparison Matrix"
        },
        {
          type: "h3",
          text: "Part 1: Mathematical Quality Ratio and Garvin's Five Approaches"
        },
        {
          type: "p",
          text: "Quality is formally defined by the Quality Ratio $Q = P/E$. When actual delivered performance ($P$) exceeds customer expectation ($E$), customer delight is achieved ($Q > 1.0$). David Garvin categorized quality definitions into five distinct conceptual lenses:"
        },
        {
          type: "table",
          headers: ["Approach", "Philosophical Basis", "Measurement Focus", "Industrial Case Example"],
          rows: [
            [
              "**Transcendent**",
              "Innate, uncompromised excellence recognized through experience.",
              "Aesthetic superiority, prestige, timeless craftsmanship.",
              "*Rolex mechanical movements, Rolls-Royce handcrafted interiors.*"
            ],
            [
              "**Product-Based**",
              "Quality is a precise, measurable variable based on the quantity of ingredients/attributes present.",
              "Technical specifications, silicon density, active chemical concentration.",
              "*800-thread-count Egyptian cotton sheets, vehicle horsepower, DRAM capacity.*"
            ],
            [
              "**User-Based**",
              "Fitness for intended customer use; subjective customer satisfaction.",
              "Ergonomics, user experience, Net Promoter Score (NPS).",
              "*Intuitive UI of Apple iOS; customizable ERP dashboards.*"
            ],
            [
              "**Manufacturing-Based**",
              "Strict conformance to engineering blueprints and tolerance limits.",
              "Defect PPM, Cpk capability, scrap rates, tolerance adherence ($[LSL, USL]$).",
              "*Semiconductor wafer sub-nanometer lithography; aerospace turbine machining.*"
            ],
            [
              "**Value-Based**",
              "Delivering maximum performance at an acceptable, competitive price point.",
              "Price-to-performance ratio, total cost of ownership (TCO).",
              "*Southwest Airlines low-cost point-to-point travel; Xiaomi budget smartphones.*"
            ]
          ]
        },
        {
          type: "h3",
          text: "Part 2: Strategic Comparison of Core Quality Gurus"
        },
        {
          type: "table",
          headers: ["Guru", "Definition of Quality", "Primary Framework", "Attribution of Process Defects"],
          rows: [
            [
              "**W. Edwards Deming**",
              "Predictable uniformity and dependability at low cost suited to the market.",
              "**14 Points for Management** & System of Profound Knowledge (SoPK); PDCA Cycle.",
              "**94% Management/Systemic**, 6% Special worker causes."
            ],
            [
              "**Joseph M. Juran**",
              "'Fitness for use'; planned project-by-project management.",
              "**Juran Quality Trilogy** (Planning, Control, Improvement) & COPQ.",
              "**80% Management controllable**, 20% Operator controllable (Pareto Principle)."
            ],
            [
              "**Philip B. Crosby**",
              "'Conformance to requirements'; non-subjective standard.",
              "**Four Absolutes of Quality** & Zero Defects (ZD) performance standard.",
              "**100% Management & worker accountability**; quality is free."
            ],
            [
              "**Armand V. Feigenbaum**",
              "Total composite product and service characteristics across all functions.",
              "**Total Quality Control (TQC)** & PAF Cost Model (Prevention, Appraisal, Failure).",
              "**Cross-functional responsibility**; exposed the 'Hidden Plant'."
            ]
          ]
        }
      ]
    },
    {
      id: "om01-eq-2",
      number: 2,
      title: "David Garvin's 8 Product Dimensions vs. SERVQUAL Service Dimensions",
      marks: 14,
      relatedSlugs: ["dimensions-of-quality-garvin-servqual"],
      question:
        "Differentiate between product quality and service quality. Provide a detailed comparative analysis of David Garvin's eight dimensions of product quality and Parasuraman, Zeithaml & Berry's 5 SERVQUAL service dimensions with industry examples.",
      blocks: [
        {
          type: "h3",
          text: "Part 1: David Garvin's Eight Dimensions of Product Quality"
        },
        {
          type: "table",
          headers: ["Dimension", "Strategic Definition", "Evaluation Metric", "Corporate Benchmark Example"],
          rows: [
            [
              "**1. Performance**",
              "Primary operating characteristics.",
              "Speed, resolution, acceleration, throughput.",
              "*Tesla Model S Plaid 0-60 mph in 1.99s.*"
            ],
            [
              "**2. Features**",
              "Secondary supplemental characteristics.",
              "Auxiliary options, smart connectivity.",
              "*Automobile head-up display (HUD), heated steering.*"
            ],
            [
              "**3. Reliability**",
              "Probability of non-failure within a given time period.",
              "Mean Time Between Failures (MTBF), failure rate ($\\lambda$).",
              "*Toyota Hilux engine surviving 400,000 km in severe conditions.*"
            ],
            [
              "**4. Conformance**",
              "Degree to which design meets established blueprints.",
              "Process capability ($C_{pk}$), defect PPM, tolerance limits.",
              "*Boeing titanium spar machined within $\\pm 0.005\\text{ mm}$.*"
            ],
            [
              "**5. Durability**",
              "Measure of product operational lifespan before replacement.",
              "Mean Time to Failure (MTTF), cyclic stress endurance.",
              "*Caterpillar earthmoving machines operating 25,000+ hours.*"
            ],
            [
              "**6. Serviceability**",
              "Speed, courtesy, and ease of repair.",
              "Mean Time to Repair (MTTR), spare parts availability.",
              "*Apple Genius Bar same-day modular screen replacement.*"
            ],
            [
              "**7. Aesthetics**",
              "Subjective sensory feel, look, sound, smell.",
              "Haptic feedback, acoustic resonance.",
              "*Bang & Olufsen precision-machined aluminum speaker grilles.*"
            ],
            [
              "**8. Perceived Quality**",
              "Subjective assessment based on brand reputation & pedigree.",
              "Net Promoter Score (NPS), brand valuation.",
              "*Apple premium pricing commanding 40% gross margins.*"
            ]
          ]
        },
        {
          type: "h3",
          text: "Part 2: The 5 SERVQUAL Service Quality Dimensions"
        },
        {
          type: "table",
          headers: ["SERVQUAL Dimension", "Operational Definition", "Audit Criteria", "Service Industry Benchmark"],
          rows: [
            [
              "**1. Reliability**",
              "Ability to perform promised service dependably and accurately.",
              "Billing accuracy, on-time flight arrivals.",
              "*FedEx overnight delivery commitment.*"
            ],
            [
              "**2. Responsiveness**",
              "Willingness to help customers and provide prompt service.",
              "Speed of answer, support ticket resolution time.",
              "*Amazon Prime Customer Support resolving queries in < 60s.*"
            ],
            [
              "**3. Assurance**",
              "Knowledge, courtesy, and competence inspiring trust.",
              "Professional certifications, transparent explanations.",
              "*Mayo Clinic physicians communicating clinical procedures.*"
            ],
            [
              "**4. Empathy**",
              "Caring, individualized, compassionate attention.",
              "Personalized greeting, customized financial plans.",
              "*Ritz-Carlton $2,000 discretionary staff incident budget.*"
            ],
            [
              "**5. Tangibles**",
              "Physical facilities, equipment, grooming of personnel.",
              "Cleanliness, modern UI/UX design.",
              "*Singapore Airlines spotless cabins and iconic cabin uniform.*"
            ]
          ]
        }
      ]
    },
    {
      id: "om01-eq-3",
      number: 3,
      title: "Traditional Quality Control vs. Total Quality Management (TQM) Paradigm",
      marks: 14,
      relatedSlugs: ["evolution-of-quality-tqc-vs-tqm"],
      question:
        "Trace the historical evolution of quality management from Taylorism to TQM. Contrast the architectural characteristics of traditional inspection-based quality control with modern Total Quality Management.",
      blocks: [
        {
          type: "h3",
          text: "Part 1: Historical Evolution of Quality Management"
        },
        {
          type: "ul",
          items: [
            "**1. Inspection Era (1900s–1920s)**: Taylorism; end-of-line sorting; high scrap and rework costs.",
            "**2. Statistical Quality Control (1930s–1950s)**: Walter Shewhart control charts; Dodge-Romig statistical sampling.",
            "**3. Quality Assurance / TQC (1960s–1980s)**: Armand Feigenbaum TQC; system design; supplier quality audits; COPQ quantification.",
            "**4. TQM & Six Sigma (1990s–Present)**: Company-wide cultural transformation, DMAIC, customer delight, continuous improvement."
          ]
        },
        {
          type: "h3",
          text: "Part 2: Traditional QC vs. TQM Architectural Comparison"
        },
        {
          type: "table",
          headers: ["Dimension", "Traditional Quality Control (QC)", "Total Quality Management (TQM)"],
          rows: [
            [
              "**Primary Objective**",
              "Detection: Catch defects before they are shipped to customers.",
              "**Prevention**: Design defect-free processes and mistake-proof (Poka-Yoke) workflows."
            ],
            [
              "**Quality Standard**",
              "Acceptable Quality Level (AQL); defects are viewed as inevitable.",
              "**Continuous Improvement (Kaizen) & Zero Defects**; all variation is target for reduction."
            ],
            [
              "**Ownership**",
              "Isolated strictly to QC inspectors and QC department.",
              "**Company-wide responsibility (CWQC)** from shop-floor operators to the CEO."
            ],
            [
              "**Supplier Relations**",
              "Adversarial, short-term contracts; lowest bidding price wins.",
              "**Long-term collaborative partnerships**; single-source certified vendor integration."
            ],
            [
              "**Problem Solving**",
              "Assigning blame to individual workers; superficial patching.",
              "**Systemic root cause elimination**: Ishikawa, 5 Whys, SPC, DMAIC."
            ]
          ]
        }
      ]
    },
    {
      id: "om01-eq-4",
      number: 4,
      title: "Deming's 14 Points for Management and System of Profound Knowledge",
      marks: 14,
      relatedSlugs: ["deming-14-points-system-of-profound-knowledge"],
      question:
        "Critically evaluate W. Edwards Deming's System of Profound Knowledge (SoPK). Detail his 14 Points for Management, explaining why traditional management practices like numerical quotas and merit rankings destroy operational quality.",
      blocks: [
        {
          type: "diagram",
          kind: "deming-pdca",
          caption: "Deming PDCA Cycle & Four Pillars of System of Profound Knowledge"
        },
        {
          type: "h3",
          text: "Part 1: The Four Pillars of Deming's System of Profound Knowledge (SoPK)"
        },
        {
          type: "table",
          headers: ["Pillar", "Theoretical Foundation", "Executive Management Mandate"],
          rows: [
            [
              "**1. Appreciation for a System**",
              "An organization is an interdependent network aiming for a common goal.",
              "Eliminate internal competition; optimize the whole rather than departmental silos."
            ],
            [
              "**2. Knowledge of Variation**",
              "Distinguishing Common Cause (94% systemic) from Special Cause variation.",
              "Cease blaming workers for systemic noise; avoid tampering with stable processes."
            ],
            [
              "**3. Theory of Knowledge**",
              "Prediction requires rational theory and iterative testing (PDCA).",
              "Experience without theory teaches nothing; management decisions must be hypothesis-driven."
            ],
            [
              "**4. Understanding Psychology**",
              "Intrinsic motivation and pride in workmanship drive performance.",
              "Eliminate annual performance rankings, merit pay, and fear-based management."
            ]
          ]
        },
        {
          type: "h3",
          text: "Part 2: Why Numerical Quotas and Merit Ratings Destroy Quality"
        },
        {
          type: "p",
          text: "Deming demonstrated that numerical quotas (Point 11) force operators to prioritize piece-rate quantity over craftsmanship, inevitably producing hidden defects that disrupt downstream operations. Similarly, annual merit rating systems (Point 12) pit coworkers against one another, destroying teamwork and encouraging short-term gaming of metrics rather than genuine systemic innovation."
        }
      ]
    },
    {
      id: "om01-eq-5",
      number: 5,
      title: "The Juran Quality Trilogy and Breakthrough Sequence for Project Improvement",
      marks: 14,
      relatedSlugs: ["juran-quality-trilogy-copq"],
      question:
        "Explain Joseph Juran's Quality Trilogy (Quality Planning, Quality Control, Quality Improvement). Detail Juran's Breakthrough Sequence, explaining how organizations systematically eradicate chronic waste and transition to world-class quality levels.",
      blocks: [
        {
          type: "h3",
          text: "Part 1: The Three Processes of the Juran Quality Trilogy"
        },
        {
          type: "table",
          headers: ["Trilogy Process", "Primary Purpose", "Key Operational Deliverables"],
          rows: [
            [
              "**1. Quality Planning**",
              "Design processes capable of meeting customer needs with zero initial deficiencies.",
              "Customer identification, VOC translation, product design specs, capability checks."
            ],
            [
              "**2. Quality Control**",
              "Maintain current operational performance and act on sporadic spikes.",
              "Control charts, visual inspection, SOP enforcement, immediate corrective loops."
            ],
            [
              "**3. Quality Improvement**",
              "Drive chronic waste down to unprecedented low levels (Breakthrough).",
              "Cross-functional teams, Pareto analysis, root-cause elimination, locking in new standards."
            ]
          ]
        },
        {
          type: "h3",
          text: "Part 2: Juran's 7-Step Breakthrough Sequence"
        },
        {
          type: "ol",
          items: [
            "**1. Proof of the Need**: Quantifying the financial Cost of Poor Quality (COPQ) to prove business case.",
            "**2. Project Identification**: Applying Pareto 80/20 analysis to isolate the vital few chronic problems.",
            "**3. Organization for Breakthrough**: Appointing steering committees and diagnostic task forces.",
            "**4. Diagnostic Journey**: Analyzing data to distinguish symptoms from root causes.",
            "**5. Remedial Journey**: Designing, piloting, and verifying permanent countermeasures.",
            "**6. Overcoming Resistance to Change**: Guiding organizational culture and overcoming inertia.",
            "**7. Holding the Gains**: Institutionalizing new Standard Operating Procedures and control plans."
          ]
        }
      ]
    },
    {
      id: "om01-eq-6",
      number: 6,
      title: "The Twelve Stages of Benchmarking and Strategic Benchmarking Types",
      marks: 14,
      relatedSlugs: ["benchmarking-process-twelve-stages-seven-types"],
      question:
        "Explain the strategic importance of benchmarking in operational excellence. Detail the 12 stages of the benchmarking process (AT&T Model) and distinguish between the 7 major types of benchmarking with real-world examples.",
      blocks: [
        {
          type: "h3",
          text: "Part 1: The 12 Stages of the Benchmarking Process"
        },
        {
          type: "ol",
          items: [
            "**1. Determine What to Benchmark**: Select critical business processes directly impacting customer satisfaction.",
            "**2. Form and Train Benchmarking Team**: Assemble cross-functional operators with deep process knowledge.",
            "**3. Identify Benchmarking Partners**: Screen recognized world-class leaders (competitors or cross-industry).",
            "**4. Analyze Internal Process**: Map internal workflows, baseline cycle times, and quantify unit costs.",
            "**5. Design Information Gathering Plan**: Prepare questionnaires, field visit protocols, and interview guides.",
            "**6. Collect Benchmarking Data**: Execute partner site visits and gather operational performance data.",
            "**7. Analyze Data and Identify Gaps**: Quantify performance delta and isolate enabling root practices.",
            "**8. Project Future Trajectories**: Forecast future benchmark partner performance to aim ahead of moving targets.",
            "**9. Establish Goals & Action Plans**: Gain executive consensus and formulate structured implementation roadmaps.",
            "**10. Implement Specific Actions**: Re-engineer workflows, procure tooling, and train personnel.",
            "**11. Monitor Progress & Calibrate**: Track milestone KPIs and report operational improvements to leadership.",
            "**12. Recalibrate Benchmarks**: Institutionalize best practices into SOPs and reset higher benchmarks."
          ]
        },
        {
          type: "h3",
          text: "Part 2: Seven Types of Benchmarking"
        },
        {
          type: "table",
          headers: ["Type", "Scope & Focus", "Key Advantage", "Industry Example"],
          rows: [
            [
              "**Internal**",
              "Comparing lines/units within the same firm.",
              "Zero confidentiality barriers; instant data access.",
              "*Toyota comparing Georgetown, USA vs Tsutsumi, Japan.*"
            ],
            [
              "**Competitive**",
              "Direct comparison against market competitors.",
              "Reveals exact competitive market positioning.",
              "*Ford reverse-engineering BMW 3-Series suspension.*"
            ],
            [
              "**Functional**",
              "Comparing similar functional processes across industries.",
              "Breaks industry tunnel vision; willing partners.",
              "*Southwest Airlines benchmarking gate turnaround vs F1 pit crews.*"
            ],
            [
              "**Generic**",
              "Comparing core processes against world leaders.",
              "Yields breakthrough, radical workflow innovations.",
              "*Hospital ER benchmarking patient intake vs hotel concierge check-in.*"
            ],
            [
              "**Strategic**",
              "High-level business models & corporate capabilities.",
              "Informs long-term corporate pivots and M&A.",
              "*Microsoft benchmarking Apple's SaaS & silicon integration.*"
            ],
            [
              "**Performance**",
              "Quantitative pricing, specifications, cycle times.",
              "Provides baseline numerical targets.",
              "*Data centers benchmarking Power Usage Effectiveness (PUE).*"
            ],
            [
              "**Global**",
              "Benchmarking across international borders.",
              "Leverages global operational best practices.",
              "*Samsung benchmarking cleanroom standards vs ASML and TSMC.*"
            ]
          ]
        }
      ]
    },
    {
      id: "om01-eq-7",
      number: 7,
      title: "Voice of the Customer (VOC) and Kano Model Customer Satisfaction Architecture",
      marks: 14,
      relatedSlugs: ["voice-of-customer-voc-kano-model"],
      question:
        "Explain the methodologies for capturing the Voice of the Customer (VOC). Analyze Noriaki Kano's Model of Customer Satisfaction, mathematically formulating its categories, and explain the dynamic decay law over product lifecycles.",
      blocks: [
        {
          type: "diagram",
          kind: "kano-model",
          caption: "Noriaki Kano Customer Satisfaction Coordinate Model & Lifecycle Decay Curve"
        },
        {
          type: "h3",
          text: "Part 1: Capturing the Voice of the Customer (VOC)"
        },
        {
          type: "p",
          text: "VOC is captured through reactive channels (warranty claims, complaints, returns) and proactive channels (ethnographic observations, contextual interviews, focus groups). Qualitative statements are translated into Critical to Quality (CTQ) specifications using CTQ Trees."
        },
        {
          type: "h3",
          text: "Part 2: Deconstruction of the Kano Model Categories"
        },
        {
          type: "table",
          headers: ["Category", "Mathematical Formula", "Customer Perception", "Benchmark Example"],
          rows: [
            [
              "**Must-Be / Basic**",
              "Asymmetrical negative ($S \\le 0$)",
              "Taken for granted; absence causes extreme dissatisfaction.",
              "*Automobile ABS brakes, clean hotel running water.*"
            ],
            [
              "**One-Dimensional**",
              "Linear symmetrical ($S \\propto \\text{Exec}$)",
              "Direct competitive battleground; more is better.",
              "*Automobile fuel efficiency (km/l), phone battery life.*"
            ],
            [
              "**Attractive**",
              "Exponential positive ($S = f(\\text{Exec}^2)$)",
              "Unexpected delight; absence causes zero dissatisfaction.",
              "*Tesla OTA software updates, free airline booking concierge.*"
            ],
            [
              "**Indifferent**",
              "Flat horizontal line ($S = 0$)",
              "Zero customer utility; engineering over-processing.",
              "*Cardboard packaging tensile strength exceeding standard.*"
            ],
            [
              "**Reverse**",
              "Inverse slope ($S \\propto -\\text{Exec}$)",
              "Active irritation and customer dissatisfaction.",
              "*Intrusive pop-up notifications, complex menu layers.*"
            ]
          ]
        },
        {
          type: "h3",
          text: "Part 3: The Dynamic Decay Law"
        },
        {
          type: "p",
          text: "Customer expectations evolve continuously. Over 12–24 months, every **Attractive (Delighter)** feature decays into a **One-Dimensional (Performance)** baseline, and eventually into a **Must-Be (Hygiene)** requirement as competitors duplicate it. R&D must continuously introduce fresh Delighters."
        }
      ]
    },
    {
      id: "om01-eq-8",
      number: 8,
      title: "Quality Function Deployment (QFD) and House of Quality (HOQ) 6-Room Architecture",
      marks: 14,
      relatedSlugs: ["qfd-house-of-quality-architecture"],
      question:
        "Detail the structural architecture of the House of Quality (HOQ) in Quality Function Deployment (QFD). Explain the function and mathematical calculations of all 6 rooms, and outline Clausing's 4-phase cascading QFD process.",
      blocks: [
        {
          type: "diagram",
          kind: "house-of-quality",
          caption: "House of Quality (HOQ) 6-Room Structural Architecture"
        },
        {
          type: "h3",
          text: "Part 1: The Six Structural Rooms of the House of Quality (HOQ)"
        },
        {
          type: "table",
          headers: ["HOQ Room", "Location", "Core Function", "Mathematical Formulation"],
          rows: [
            [
              "**Room 1: Customer WHATs**",
              "Left vertical column",
              "Prioritized Voice of Customer requirements.",
              "Customer Importance Weight ($w_i$ on 1-5 scale)."
            ],
            [
              "**Room 2: Engineering HOWs**",
              "Top horizontal ceiling",
              "Measurable engineering design parameters.",
              "Optimization direction: $\\uparrow$ Max, $\\downarrow$ Min, $\\odot$ Target."
            ],
            [
              "**Room 3: Interrelationship Grid**",
              "Central matrix",
              "Evaluates strength between WHATs and HOWs.",
              "Scoring: Strong ($\\odot=9$), Med ($\\bigcirc=3$), Weak ($\\triangle=1$)."
            ],
            [
              "**Room 4: Correlation Roof**",
              "Triangular peak",
              "Evaluates trade-offs and synergies between HOWs.",
              "Trade-off matrix: $++, +, -, --$ conflicts."
            ],
            [
              "**Room 5: Competitive Benchmarks**",
              "Right vertical column",
              "Customer perception of us vs. key competitors.",
              "Calculates Improvement Ratio ($IR = \\text{Target}/\\text{Current}$). "
            ],
            [
              "**Room 6: Technical Targets**",
              "Bottom foundation",
              "Calculates absolute technical priorities & specs.",
              "Importance: $W_j = \\sum_{i=1}^{n} (w_i \\times R_{ij})$; sets physical specs."
            ]
          ]
        },
        {
          type: "h3",
          text: "Part 2: Clausing's 4-Phase Cascading QFD Flow"
        },
        {
          type: "ol",
          items: [
            "**Phase 1 (Product Planning)**: Customer Requirements (WHATs) $\\rightarrow$ Engineering Characteristics (HOWs).",
            "**Phase 2 (Part Deployment)**: Engineering Characteristics (WHATs) $\\rightarrow$ Critical Part Characteristics (HOWs).",
            "**Phase 3 (Process Planning)**: Critical Part Characteristics (WHATs) $\\rightarrow$ Manufacturing Process Operations (HOWs).",
            "**Phase 4 (Production Planning)**: Manufacturing Process Operations (WHATs) $\\rightarrow$ Inspection Controls & SPC Limits (HOWs)."
          ]
        }
      ]
    },
    {
      id: "om01-eq-9",
      number: 9,
      title: "Failure Mode and Effects Analysis (FMEA): DFMEA vs. PFMEA and RPN Risk Modeling",
      marks: 14,
      relatedSlugs: ["fmea-risk-priority-number-rpn"],
      question:
        "Examine Failure Mode and Effects Analysis (FMEA) as a proactive engineering risk management tool. Differentiate between DFMEA and PFMEA, explain the mathematical formulation of Risk Priority Number (RPN), and discuss the AIAG-VDA Action Priority matrix.",
      blocks: [
        {
          type: "diagram",
          kind: "fmea-matrix",
          caption: "Failure Mode and Effects Analysis (FMEA) & RPN Risk Simulator"
        },
        {
          type: "h3",
          text: "Part 1: Design FMEA (DFMEA) vs. Process FMEA (PFMEA)"
        },
        {
          type: "table",
          headers: ["FMEA Dimension", "Design FMEA (DFMEA)", "Process FMEA (PFMEA)"],
          rows: [
            [
              "**Primary Objective**",
              "Ensure product design functions reliably and safely across operating envelope.",
              "Ensure manufacturing and assembly operations produce conforming parts without errors."
            ],
            [
              "**Failure Focus**",
              "Material fatigue, structural yield, dielectric breakdown, component clash.",
              "Operator error, incorrect torque, machine wear, tooling misorientation, contamination."
            ],
            [
              "**Typical Causes**",
              "Incorrect material selection, insufficient safety margin, inappropriate geometry.",
              "Inadequate training, missing Poka-Yoke interlocks, improper lubrication, thermal drift."
            ],
            [
              "**Countermeasures**",
              "Redesigning geometry, selecting higher-grade alloys, enlarging safety factors.",
              "Mistake-proofing (Poka-Yoke), automated vision inspection, SPC tightening."
            ]
          ]
        },
        {
          type: "h3",
          text: "Part 2: Mathematical Formulation of Risk Priority Number (RPN)"
        },
        {
          type: "quote",
          text: "\\text{RPN} = \\text{Severity (S)} \\times \\text{Occurrence (O)} \\times \\text{Detection (D)}"
        },
        {
          type: "ul",
          items: [
            "**Severity (S, 1–10)**: Seriousness of failure effect ($1 = \\text{None}$, $10 = \\text{Hazardous without warning}$).",
            "**Occurrence (O, 1–10)**: Frequency likelihood of failure cause ($1 = < 1 \\text{ in } 10^6$, $10 = > 1 \\text{ in } 10$).",
            "**Detection (D, 1–10 Inverted)**: Ability of controls to detect defect ($1 = \\text{100% Poka-Yoke}$, $10 = \\text{Zero detection}$).",
            "**AIAG-VDA Action Priority**: Replaces pure RPN thresholds with logic tables giving precedence to high Severity ($S \\ge 9$) regardless of RPN."
          ]
        }
      ]
    },
    {
      id: "om01-eq-10",
      number: 10,
      title: "Taguchi Quality Loss Function Formulations, Robust Design, and Process Societal Loss",
      marks: 14,
      relatedSlugs: ["taguchi-quality-loss-function-robust-design"],
      question:
        "Critically evaluate Genichi Taguchi's Quality Loss Function. Contrast Taguchi's philosophy with traditional goalpost inspection. Mathematically derive the Nominal-the-Best, Smaller-the-Better, and Larger-the-Better formulations, and explain average societal loss modeling.",
      blocks: [
        {
          type: "diagram",
          kind: "taguchi-loss",
          caption: "Taguchi Quadratic Loss Function vs. Traditional Goalpost Model"
        },
        {
          type: "h3",
          text: "Part 1: Taguchi Philosophy vs. Traditional Goalpost Mentality"
        },
        {
          type: "p",
          text: "Taguchi defined quality as the financial loss imparted to society after product shipment. Traditional goalpost inspection falsely assumes zero economic loss within tolerance limits $[LSL, USL]$. Taguchi proved that loss increases quadratically as a dimension drifts away from nominal target $m$."
        },
        {
          type: "h3",
          text: "Part 2: Three Formulations of Taguchi Loss Function"
        },
        {
          type: "table",
          headers: ["Type", "Formula", "Loss Constant ($k$)", "Industrial Benchmark Example"],
          rows: [
            [
              "**Nominal-the-Best (NTB)**",
              "$L(y) = k(y - m)^2$",
              "$k = \\frac{A_0}{\\Delta^2}$",
              "*Shaft diameter ($50.00 \\pm 0.05\\text{ mm}$), piston clearance.*"
            ],
            [
              "**Smaller-the-Better (STB)**",
              "$L(y) = k y^2$",
              "$k = \\frac{A_0}{y_0^2}$",
              "*Carbon emissions (g/km), electrical resistance, chemical impurity PPM.*"
            ],
            [
              "**Larger-the-Better (LTB)**",
              "$L(y) = k \\left(\\frac{1}{y^2}\\right)$",
              "$k = A_0 y_0^2$",
              "*Tensile breaking strength of crane cables, battery lifecycle cycles.*"
            ]
          ]
        },
        {
          type: "h3",
          text: "Part 3: Average Expected Societal Loss in Manufacturing"
        },
        {
          type: "quote",
          text: "\\bar{L} = k \\left[ \\sigma^2 + (\\mu - m)^2 \\right]"
        },
        {
          type: "p",
          text: "This formula demonstrates that average loss is minimized by two sequential engineering steps: (1) reducing process variance ($\\sigma^2 \\rightarrow 0$), and (2) shifting the process mean to the nominal target ($\\mu = m$)."
        }
      ]
    },
    {
      id: "om01-eq-11",
      number: 11,
      title: "Strategic Purchasing, Supplier Quality Assurance, and Four-Tier Qualification Lifecycle",
      marks: 14,
      relatedSlugs: ["supplier-qualification-evaluation-system"],
      question:
        "Discuss the role of strategic purchasing in Total Quality Management. Detail the Four-Tier Supplier Qualification Lifecycle, supplier quality auditing, and the mathematical construction of a Supplier Performance Index (SPI).",
      blocks: [
        {
          type: "h3",
          text: "Part 1: The Four-Tier Supplier Qualification Lifecycle"
        },
        {
          type: "table",
          headers: ["Tier", "Operational Status", "Audit Requirements", "Inspection Policy"],
          rows: [
            [
              "**Tier 1: Unapproved**",
              "Candidate vendor; no POs authorized.",
              "Financial solvency, preliminary capability survey.",
              "Prototype samples only; 100% destructive testing."
            ],
            [
              "**Tier 2: Conditional**",
              "Authorized for trial production runs.",
              "On-site QMS audit, Process Capability ($C_{pk} \\ge 1.33$).",
              "Tightened receiving inspection; mandatory COA."
            ],
            [
              "**Tier 3: Approved**",
              "Consistent quality, cost, delivery performer.",
              "Annual surveillance audits, ISO 9001 / IATF 16949, 8D CAPA.",
              "Normal sampling inspection (AQL 0.65%)."
            ],
            [
              "**Tier 4: Certified Partner**",
              "Strategic co-design partner ($C_{pk} \\ge 1.67$).",
              "Live SPC data streaming, Lean Six Sigma capability.",
              "**Dock-to-Stock**: Zero receiving inspection."
            ]
          ]
        },
        {
          type: "h3",
          text: "Part 2: Supplier Performance Index (SPI) Mathematical Model"
        },
        {
          type: "quote",
          text: "\\text{SPI} = 0.40(Q) + 0.30(D) + 0.20(C) + 0.10(S)"
        },
        {
          type: "ul",
          items: [
            "**Quality Score ($Q$, 40%)**: $100 - \\text{PPM defect penalty}$ based on accepted lot proportion.",
            "**Delivery Score ($D$, 30%)**: On-Time In-Full (OTIF) delivery compliance percentage.",
            "**Cost Score ($C$, 20%)**: Annual cost-reduction achievement and TCO competitiveness.",
            "**Service Score ($S$, 10%)**: Responsiveness to 8D problem-solving inquiries within 48 hours."
          ]
        }
      ]
    },
    {
      id: "om01-eq-12",
      number: 12,
      title: "The Seven Basic Quality Control (7 QC) Tools and 6-Phase Quality Investigation Sequence",
      marks: 14,
      relatedSlugs: ["seven-basic-qc-tools-quality-investigation"],
      question:
        "Explain Kaoru Ishikawa's Seven Basic Quality Control (7 QC) Tools. Provide their analytical purpose and construct a structured 6-phase operational sequence illustrating how an engineering team integrates them during a root-cause quality investigation.",
      blocks: [
        {
          type: "h3",
          text: "Part 1: The Seven Basic Quality Control (7 QC) Tools"
        },
        {
          type: "table",
          headers: ["Tool", "Creator / Principle", "Analytical Purpose", "Industrial Quality Application"],
          rows: [
            [
              "**1. Check Sheet**",
              "Standardized observation form",
              "Structured real-time data collection at gemba.",
              "*Defect-location measles chart on PCB assembly.*"
            ],
            [
              "**2. Pareto Chart**",
              "Joseph Juran (80/20 Rule)",
              "Separates 'vital few' defect causes from 'useful many'.",
              "*Isolating 2 CNC lathes driving 81% of scrap.*"
            ],
            [
              "**3. Fishbone Diagram**",
              "Kaoru Ishikawa (5M+1E)",
              "Brainstorms and categorizes all potential root causes.",
              "*Diagnosing tablet dissolution failure causes.*"
            ],
            [
              "**4. Histogram**",
              "Frequency distribution graph",
              "Visualizes process spread, center, and shape vs specs.",
              "*Detecting bimodal distribution from mixed vendor lots.*"
            ],
            [
              "**5. Scatter Diagram**",
              "Correlation coordinate plot",
              "Tests correlation between input $X$ and quality output $Y$.",
              "*Correlating injection nozzle temperature with tensile strength.*"
            ],
            [
              "**6. Stratification**",
              "Data segmentation",
              "Separates data into homogeneous layers to find variation.",
              "*Stratifying defect rates by Day vs Night shifts.*"
            ],
            [
              "**7. Control Chart**",
              "Walter Shewhart ($\\pm 3\\sigma$)",
              "Distinguishes common cause from special cause variation.",
              "*Tracking shaft OD with $\\bar{X}-R$ chart to catch tool wear.*"
            ]
          ]
        },
        {
          type: "h3",
          text: "Part 2: Six-Phase Quality Investigation Sequence"
        },
        {
          type: "ol",
          items: [
            "**Step 1: Process Mapping (Flowchart)**: Map operational process flow to isolate investigation boundaries.",
            "**Step 2: Empirical Data Collection (Check Sheet)**: Collect quantitative defect counts and spatial locations in real-time.",
            "**Step 3: Defect Prioritization (Pareto Chart)**: Apply 80/20 analysis to isolate vital few defects.",
            "**Step 4: Root-Cause Investigation (Fishbone & 5 Whys)**: Brainstorm causal factors across 5M+1E and drill down to root cause.",
            "**Step 5: Statistical Distribution & Correlation (Histogram & Scatter)**: Verify process spread and mathematically confirm $Y = f(X)$.",
            "**Step 6: Process Stabilization & Monitoring (Control Chart)**: Implement statistical control limits to maintain gains."
          ]
        }
      ]
    },
    {
      id: "om01-eq-13",
      number: 13,
      title: "The Seven New Management and Planning Tools (JUSE / MP Tools) and Their 7-Step Integration Flow",
      marks: 14,
      relatedSlugs: ["seven-new-management-planning-tools"],
      question:
        "Analyze the Seven New Management and Planning Tools (JUSE / MP Tools). Describe each tool's architectural function and detail their seamless 7-step integration sequence in complex organizational problem solving.",
      blocks: [
        {
          type: "h3",
          text: "Part 1: The Seven New Management & Planning (MP) Tools"
        },
        {
          type: "table",
          headers: ["MP Tool", "Origin", "Core Function", "Strategic Role"],
          rows: [
            [
              "**1. Affinity Diagram**",
              "KJ Method",
              "Clusters vast qualitative brainstorming data into natural themes.",
              "Synthesizes subjective VOC data into problem themes."
            ],
            [
              "**2. Relations Diagram**",
              "Digraph",
              "Maps multi-directional cause-and-effect relationships.",
              "Isolates primary system drivers (high outgoing arrows)."
            ],
            [
              "**3. Tree Diagram**",
              "Systematic",
              "Decomposes broad objectives into detailed operational tasks.",
              "Decomposes goals into actionable work breakdowns."
            ],
            [
              "**4. Matrix Diagram**",
              "L/T/X Grid",
              "Evaluates multi-dimensional relationships and responsibilities.",
              "Assigns RACI execution responsibilities."
            ],
            [
              "**5. Prioritization Matrix**",
              "AHP Matrix",
              "Ranks alternative solutions against weighted criteria.",
              "Selects highest-ROI solution paths objectively."
            ],
            [
              "**6. PDPC**",
              "Risk Tree",
              "Maps potential 'what-if' failure risks to design countermeasures.",
              "Proactive operational contingency planning."
            ],
            [
              "**7. Arrow Diagram**",
              "CPM Network",
              "Sequences tasks, identifying dependencies and Critical Path.",
              "Ensures project execution stays on schedule."
            ]
          ]
        },
        {
          type: "h3",
          text: "Part 2: Detailed 7-Step Tool Integration Sequence"
        },
        {
          type: "ol",
          items: [
            "**Step 1 (Affinity Diagram)**: Cluster 80+ unstructured operational complaints into natural theme clusters.",
            "**Step 2 (Relations Diagram)**: Map directional causal arrows between theme headers; identify Primary System Driver.",
            "**Step 3 (Tree Diagram)**: Decompose Primary Driver into discrete sub-tasks across 3 hierarchical levels.",
            "**Step 4 (Matrix Diagram)**: Plot sub-tasks against departments on an L-shaped matrix to assign RACI ownership.",
            "**Step 5 (Prioritization Matrix)**: Score alternative implementation paths against weighted strategic criteria.",
            "**Step 6 (PDPC)**: Build a contingency tree mapping 'what-if' failure scenarios to approved countermeasures.",
            "**Step 7 (Arrow Diagram)**: Plot risk-mitigated tasks into a CPM network diagram establishing the Critical Path."
          ]
        }
      ]
    },
    {
      id: "om01-eq-14",
      number: 14,
      title: "Statistical Process Control (SPC): Shewhart Control Charts and Western Electric Sensitizing Rules",
      marks: 14,
      relatedSlugs: ["spc-shewhart-control-charts-western-electric-rules"],
      question:
        "Elaborate on the theoretical principles of Statistical Process Control (SPC). Differentiate between common cause and special cause variation, derive the mathematical architecture of Shewhart Control Charts, and explain the Western Electric out-of-control sensitizing rules.",
      blocks: [
        {
          type: "diagram",
          kind: "spc-control-chart",
          caption: "Shewhart Control Chart Architecture & Western Electric Out-of-Control Sensitizing Rules"
        },
        {
          type: "h3",
          text: "Part 1: Common Cause vs. Special Cause Variation"
        },
        {
          type: "table",
          headers: ["Variation Type", "Origin & Nature", "Predictability", "Action Mandate"],
          rows: [
            [
              "**Common Cause (Natural)**",
              "Inherent in system design, machine tolerances, ambient conditions.",
              "Statistically predictable within $\\pm 3\\sigma$; stable.",
              "**Management Action**: Requires process redesign (Deming 94%)."
            ],
            [
              "**Special Cause (Assignable)**",
              "External shocks (tool fracture, power surge, operator error).",
              "Unpredictable, causes instability and mean shifts.",
              "**Frontline Action**: Immediate intervention to remove cause."
            ]
          ]
        },
        {
          type: "h3",
          text: "Part 2: Western Electric Out-of-Control Sensitizing Rules"
        },
        {
          type: "table",
          headers: ["Rule", "Pattern Trigger Condition", "Zone", "Diagnostic Meaning & Cause"],
          rows: [
            [
              "**Rule 1**",
              "1 point falls outside $\\pm 3\\sigma$ limits ($> UCL$ or $< LCL$).",
              "Beyond Zone A",
              "Severe assignable shock (tool fracture, power surge)."
            ],
            [
              "**Rule 2**",
              "2 out of 3 consecutive points fall in Zone A ($2\\sigma$ to $3\\sigma$) on same side.",
              "Zone A",
              "Significant process mean shift or variance surge."
            ],
            [
              "**Rule 3**",
              "4 out of 5 consecutive points fall in Zone B or beyond ($> 1\\sigma$) on same side.",
              "Zone B or beyond",
              "Moderate process mean shift; calibration drift."
            ],
            [
              "**Rule 4**",
              "8 to 9 consecutive points on same side of Centerline.",
              "Same side of CL",
              "Persistent bias in process mean (new tool setting)."
            ],
            [
              "**Rule 5**",
              "6 consecutive points steadily increasing or decreasing.",
              "Across zones",
              "Systematic trend (tool wear, chemical bath depletion)."
            ],
            [
              "**Rule 6**",
              "14 consecutive points alternating up and down.",
              "Across CL",
              "Systematic oscillation (two alternating operators/hoppers)."
            ]
          ]
        }
      ]
    },
    {
      id: "om01-eq-15",
      number: 15,
      title: "Process Capability Analysis: Cp, Cpk, Cpm Indices, Interpretation Matrix, and Statistical Inferences",
      marks: 14,
      relatedSlugs: ["process-capability-indices-cp-cpk-cpm"],
      question:
        "Critically examine Process Capability Analysis. Mathematically derive the Cp, Cpk, and Cpm indices, explain the relationship between process centering and capability, and provide a complete Capability Interpretation Matrix with PPM defect levels.",
      blocks: [
        {
          type: "h3",
          text: "Part 1: Mathematical Formulations of Capability Indices"
        },
        {
          type: "table",
          headers: ["Index", "Formula", "Analytical Focus", "Key Limitation"],
          rows: [
            [
              "**$C_p$ (Potential)**",
              "$C_p = \\frac{\\text{USL} - \\text{LSL}}{6\\sigma}$",
              "Measures spread capability relative to tolerance width.",
              "Blind to process centering; can have $C_p = 2.0$ yet 100% scrap."
            ],
            [
              "**$C_{pk}$ (Actual)**",
              "$C_{pk} = \\min \\left( \\frac{\\text{USL} - \\mu}{3\\sigma}, \\frac{\\mu - \\text{LSL}}{3\\sigma} \\right)$",
              "Measures both process spread AND centering relative to nearest limit.",
              "Does not penalize deviation from target if specs are asymmetrical."
            ],
            [
              "**$C_{pm}$ (Taguchi)**",
              "$C_{pm} = \\frac{\\text{USL} - \\text{LSL}}{6\\sqrt{\\sigma^2 + (\\mu - m)^2}}$",
              "Directly incorporates quadratic loss and penalizes deviation from target $m$.",
              "Requires explicit target nominal value $m$ definition."
            ]
          ]
        },
        {
          type: "h3",
          text: "Part 2: Process Capability Interpretation Matrix"
        },
        {
          type: "table",
          headers: ["$C_{pk}$ Value", "Capability Status", "Expected Defect Rate (PPM)", "Operational Action Mandate"],
          rows: [
            [
              "**$C_{pk} < 1.0$**",
              "**Incapable Process**",
              "$> 2,700 \\text{ PPM}$",
              "Mandatory 100% sorting inspection; line stoppage required."
            ],
            [
              "**$1.0 \\le C_{pk} < 1.33$**",
              "**Barely Capable / Marginal**",
              "$63 - 2,700 \\text{ PPM}$",
              "Requires intensive monitoring; unacceptable for safety parts."
            ],
            [
              "**$1.33 \\le C_{pk} < 1.67$**",
              "**Capable / Industry Benchmark**",
              "$0.57 - 63 \\text{ PPM}$ ($4\\sigma$ level)",
              "Standard SPC monitoring; process under statistical control."
            ],
            [
              "**$C_{pk} \\ge 1.67$**",
              "**World-Class / Highly Capable**",
              "$< 0.57 \\text{ PPM}$ ($5\\sigma$ level)",
              "Eligible for reduced sampling or Dock-to-Stock certification."
            ],
            [
              "**$C_{pk} \\ge 2.0$**",
              "**Six Sigma Quality Level**",
              "$\\le 3.4 \\text{ DPMO}$ with $1.5\\sigma$ shift",
              "World-class benchmark excellence; zero receiving inspection."
            ]
          ]
        }
      ]
    },
    {
      id: "om01-eq-16",
      number: 16,
      title: "Six Sigma Methodology: DMAIC Roadmap, DPMO Mathematical Engine, and 1.5-Sigma Process Shift",
      marks: 14,
      relatedSlugs: ["six-sigma-dmaic-roadmap-dpmo-engine"],
      question:
        "Explain the operational framework of Six Sigma. Detail the DMAIC problem-solving roadmap with tollgate review questions, derive the mathematical formula for DPMO, and justify the theoretical foundation of the 1.5-sigma long-term process shift.",
      blocks: [
        {
          type: "diagram",
          kind: "dmaic-roadmap",
          caption: "Six Sigma DMAIC Phase-Gate Roadmap & DPMO Mathematical Engine"
        },
        {
          type: "h3",
          text: "Part 1: Six Sigma DMAIC Phase-Gate Roadmap"
        },
        {
          type: "table",
          headers: ["Phase", "Core Tollgate Question", "Key Deliverables", "Primary Tools"],
          rows: [
            [
              "**DEFINE**",
              "What problem are we solving, what is the business case, who is the customer?",
              "Project Charter, Problem Statement, SIPOC Map.",
              "Project Charter, SIPOC, VOC to CTQ, Kano."
            ],
            [
              "**MEASURE**",
              "What is baseline capability, is measurement system reliable?",
              "Data Collection Plan, Gage R&R ($< 10\\%$), Baseline Sigma.",
              "Gage R&R, Process Capability ($C_{pk}$), VSM."
            ],
            [
              "**ANALYZE**",
              "What are the verified vital root causes ($X$'s) driving $Y = f(X)$?",
              "Validated Root Causes, Waste Identification, Transfer Function.",
              "Fishbone, 5 Whys, ANOVA, Regression, PFMEA."
            ],
            [
              "**IMPROVE**",
              "What optimized solutions eliminate root causes, has it been piloted?",
              "Piloted Countermeasures, DOE Optimization, Cost-Benefit.",
              "DOE, Poka-Yoke, Kaizen Event, Pilot Run."
            ],
            [
              "**CONTROL**",
              "How will gains be standardized and held permanently?",
              "SOPs, SPC Monitoring Dashboard, Control Plan.",
              "Control Charts ($\\bar{X}-R, p$), 5S, Training SOPs."
            ]
          ]
        },
        {
          type: "h3",
          text: "Part 2: Mathematical DPMO Formulation & The 1.5-Sigma Shift"
        },
        {
          type: "quote",
          text: "\\text{DPMO} = \\left( \\frac{\\text{Total Defects Found (D)}}{\\text{Total Units (U)} \\times \\text{Opportunities per Unit (O)}} \\right) \\times 10^6"
        },
        {
          type: "p",
          text: "In short-term lab conditions, a pure $6\\sigma$ normal distribution yields 0.002 PPM. Over long-term production, equipment wear, ambient thermal changes, and operator fatigue cause the process mean to drift by approximately $1.5\\sigma$. Operating at an effective $4.5\\sigma$ limit yields exactly **3.4 Defects Per Million Opportunities (DPMO)**."
        }
      ]
    },
    {
      id: "om01-eq-17",
      number: 17,
      title: "Lean Manufacturing: The 8 Wastes of Lean (DOWNTIME), 5S Methodology, and Value Stream Mapping",
      marks: 14,
      relatedSlugs: ["lean-manufacturing-8-wastes-5s-vsm"],
      question:
        "Analyze the principles of Lean Manufacturing. Detail the 8 Wastes of Lean using the DOWNTIME framework, explain the 5S workplace organization methodology, and outline the construction of a Value Stream Map (VSM).",
      blocks: [
        {
          type: "h3",
          text: "Part 1: The 8 Wastes of Lean Manufacturing (DOWNTIME)"
        },
        {
          type: "table",
          headers: ["Waste (Muda)", "Letter", "Operational Definition", "Industrial Example"],
          rows: [
            [
              "**Defects**",
              "**D**",
              "Products failing to meet specs; requiring scrap or rework.",
              "*Machined crankshaft with out-of-round journal.*"
            ],
            [
              "**Overproduction**",
              "**O**",
              "Producing ahead of demand (most severe waste).",
              "*Stamping 10,000 door panels when 500 needed per shift.*"
            ],
            [
              "**Waiting**",
              "**W**",
              "Idle time caused by bottlenecks, downtime, shortages.",
              "*Assembly workers waiting 45 min for forklift delivery.*"
            ],
            [
              "**Non-Utilized Talent**",
              "**N**",
              "Failing to engage frontline workers' creative ideas.",
              "*Ignoring shop floor suggestions for tool changeover.*"
            ],
            [
              "**Transportation**",
              "**T**",
              "Unnecessary physical movement of materials/WIP.",
              "*Trucking sub-assemblies across town between buildings.*"
            ],
            [
              "**Inventory**",
              "**I**",
              "Excess raw materials or finished goods tying up cash.",
              "*Holding 60 days of steel coils due to vendor unreliability.*"
            ],
            [
              "**Motion**",
              "**M**",
              "Unnecessary physical movement or ergonomic strain.",
              "*Operator walking 15 paces to retrieve hand tools.*"
            ],
            [
              "**Extra Processing**",
              "**E**",
              "Doing more work or higher precision than customer values.",
              "*Polishing internal engine casing surfaces with no function.*"
            ]
          ]
        },
        {
          type: "h3",
          text: "Part 2: The 5S Workplace Organization Methodology"
        },
        {
          type: "table",
          headers: ["5S Step", "English", "Core Action", "Audit Criteria"],
          rows: [
            [
              "**1. Seiri**",
              "**Sort**",
              "Separate necessary from unnecessary items; remove clutter.",
              "**Red Tag Campaign**: Discard unneeded items after 48h."
            ],
            [
              "**2. Seiton**",
              "**Set in Order**",
              "Organize items so they are easy to find and return.",
              "**Shadow Boards**, floor tape boundaries, labeled bins."
            ],
            [
              "**3. Seiso**",
              "**Shine**",
              "Clean work areas daily; cleaning acts as inspection.",
              "Daily 5-min cleaning checklists, oil sight glasses."
            ],
            [
              "**4. Seiketsu**",
              "**Standardize**",
              "Establish visual standard operating procedures facility-wide.",
              "Visual SOP placards, color-coded floor striping."
            ],
            [
              "**5. Shitsuke**",
              "**Sustain**",
              "Institutionalize discipline through regular audits & rewards.",
              "Weekly 5S radar audits, 5S scoreboards."
            ]
          ]
        }
      ]
    },
    {
      id: "om01-eq-18",
      number: 18,
      title: "Total Productive Maintenance (TPM) and Overall Equipment Effectiveness (OEE) Metric Architecture",
      marks: 14,
      relatedSlugs: ["tpm-overall-equipment-effectiveness-oee"],
      question:
        "Explain the philosophy of Total Productive Maintenance (TPM) and Autonomous Maintenance (Jishu Hozen). Derive the mathematical model for Overall Equipment Effectiveness (OEE) and analyze the Six Big Equipment Losses.",
      blocks: [
        {
          type: "h3",
          text: "Part 1: Mathematical Architecture of Overall Equipment Effectiveness (OEE)"
        },
        {
          type: "quote",
          text: "\\text{OEE} = \\text{Availability (A)} \\times \\text{Performance Rate (P)} \\times \\text{Quality Rate (Q)}"
        },
        {
          type: "table",
          headers: ["OEE Factor", "Mathematical Formula", "Target Six Big Loss Addressed", "World-Class Benchmark"],
          rows: [
            [
              "**1. Availability (A)**",
              "$A = \\frac{\\text{Operating Time}}{\\text{Planned Time}} = \\frac{\\text{Planned Time} - \\text{Downtime}}{\\text{Planned Time}}$",
              "Loss 1: Equipment Breakdowns\\nLoss 2: Setup & Adjustments (SMED)",
              "**$\\ge 90.0\\%$**"
            ],
            [
              "**2. Performance (P)**",
              "$P = \\frac{\\text{Ideal Cycle Time} \\times \\text{Total Count}}{\\text{Operating Time}}$",
              "Loss 3: Idling & Minor Stoppages ($< 5\\text{ min}$)\\nLoss 4: Reduced Operating Speed",
              "**$\\ge 95.0\\%$**"
            ],
            [
              "**3. Quality (Q)**",
              "$Q = \\frac{\\text{Good Output Count}}{\\text{Total Output Count}}$",
              "Loss 5: Process Defects & Scrap\\nLoss 6: Startup / Warm-up Yield Losses",
              "**$\\ge 99.9\\%$**"
            ],
            [
              "**Total Overall OEE**",
              "$\text{OEE} = A \times P \times Q = 0.90 \times 0.95 \times 0.999$",
              "Comprehensive elimination of all Six Big Losses",
              "**$\\ge 85.0\\%$ (World-Class)**"
            ]
          ]
        }
      ]
    },
    {
      id: "om01-eq-19",
      number: 19,
      title: "Cost of Quality (COQ) PAF Model: Prevention, Appraisal, Failure, and 1-10-100 Prevention Leverage",
      marks: 14,
      relatedSlugs: ["cost-of-quality-coq-paf-model"],
      question:
        "Examine Armand Feigenbaum's Cost of Quality (COQ) PAF model. Categorize Prevention, Appraisal, Internal Failure, and External Failure costs with real-world examples, explain the 'Hidden Plant' concept, and demonstrate the economic rationale of the 1-10-100 Rule.",
      blocks: [
        {
          type: "diagram",
          kind: "coq-paf-model",
          caption: "Cost of Quality (COQ) PAF Architecture & 1-10-100 Prevention Leverage Multiplier"
        },
        {
          type: "h3",
          text: "Part 1: The Four Categories of the PAF Cost of Quality Model"
        },
        {
          type: "table",
          headers: ["Category", "Classification", "Typical % Share", "Operational Line-Item Examples"],
          rows: [
            [
              "**1. Prevention**",
              "**Conformance Cost** (Proactive investment to stop defects).",
              "**5% – 10%** (Target: $> 50\\%$)",
              "*Design reviews, FMEA sessions, Poka-Yoke tooling, supplier audits, SPC training, preventive maintenance.*"
            ],
            [
              "**2. Appraisal**",
              "**Conformance Cost** (Measuring, evaluating, auditing).",
              "**20% – 25%**",
              "*Incoming inspection, vision sensors, CMM dimensional measurement, lab testing, gauge calibration.*"
            ],
            [
              "**3. Internal Failure**",
              "**Non-Conformance Cost** (Defects caught BEFORE customer shipment).",
              "**25% – 40%**",
              "*Scrap, rework labor, re-inspection, line downtime, downgrading products to secondary scrap.*"
            ],
            [
              "**4. External Failure**",
              "**Non-Conformance Cost** (Defects escaping to end customer; most catastrophic).",
              "**40% – 50%**",
              "*Warranty claims, product recalls, complaint resolution, lawsuits, brand equity destruction.*"
            ]
          ]
        },
        {
          type: "h3",
          text: "Part 2: The 1-10-100 Prevention Leverage Rule"
        },
        {
          type: "ul",
          items: [
            "**$1.00 Prevention Cost**: Spending $1.00 in engineering design (FMEA, Poka-Yoke) eliminates root causes at inception.",
            "**$10.00 Appraisal & Rework Cost**: Cost to inspect, catch, and rework the defective part inside the factory.",
            "**$100.00+ External Failure Cost**: Cost when defect reaches the customer (warranty claims, recalls, litigation, brand destruction)."
          ]
        }
      ]
    },
    {
      id: "om01-eq-20",
      number: 20,
      title: "ISO 9001:2015 High-Level Structure (Annex SL), Risk-Based Thinking, and Audit Lifecycle",
      marks: 14,
      relatedSlugs: ["iso-9001-2015-standards-risk-based-thinking"],
      question:
        "Analyze the architecture of ISO 9001:2015. Detail the 10-clause High-Level Structure (Annex SL), the Seven Quality Management Principles (QMPs), the integration of Risk-Based Thinking, and the certification audit lifecycle.",
      blocks: [
        {
          type: "h3",
          text: "Part 1: The Seven Quality Management Principles (QMPs) of ISO 9001:2015"
        },
        {
          type: "ol",
          items: [
            "**QMP 1: Customer Focus**: Meeting and exceeding customer requirements to sustain loyalty.",
            "**QMP 2: Leadership**: Establishing unity of purpose, vision, and organizational engagement.",
            "**QMP 3: Engagement of People**: Empowering competent, skilled employees across all tiers.",
            "**QMP 4: Process Approach**: Managing interconnected activities as coherent processes.",
            "**QMP 5: Improvement**: Continuous focus on improvement (PDCA) to drive resilience.",
            "**QMP 6: Evidence-Based Decision Making**: Making decisions based on rigorous empirical data analysis.",
            "**QMP 7: Relationship Management**: Managing supplier partnerships for sustained supply chain performance."
          ]
        },
        {
          type: "h3",
          text: "Part 2: Annex SL 10-Clause High-Level Structure"
        },
        {
          type: "table",
          headers: ["Clause & Title", "PDCA Cycle", "Core Requirement"],
          rows: [
            [
              "**Clause 4: Context of Organization**",
              "**PLAN**",
              "Understanding internal/external issues, interested parties, QMS scope."
            ],
            [
              "**Clause 5: Leadership**",
              "**PLAN / DO**",
              "Top management commitment, quality policy, assigning roles/authorities."
            ],
            [
              "**Clause 6: Planning**",
              "**PLAN**",
              "**Risk-Based Thinking**: Identifying risks/opportunities, quality objectives."
            ],
            [
              "**Clause 7: Support**",
              "**DO**",
              "Resources, infrastructure, monitoring tools, competence, documented info."
            ],
            [
              "**Clause 8: Operation**",
              "**DO**",
              "Operational control, customer requirements, design, supplier control, product release."
            ],
            [
              "**Clause 9: Performance Evaluation**",
              "**CHECK**",
              "Customer satisfaction, internal audits, Management Review Meetings (MRM)."
            ],
            [
              "**Clause 10: Improvement**",
              "**ACT**",
              "Non-conformity management, Corrective Action (CAPA), continuous improvement."
            ]
          ]
        }
      ]
    },
    {
      id: "om01-eq-21",
      number: 21,
      title: "Quality Award Frameworks: Malcolm Baldrige National Quality Award (MBNQA) vs. Deming Prize vs. EFQM",
      marks: 14,
      relatedSlugs: ["quality-awards-mbnqa-deming-prize-efqm"],
      question:
        "Provide a comprehensive comparative analysis of the three major global quality award frameworks: Malcolm Baldrige National Quality Award (MBNQA), the Deming Application Prize, and the EFQM Excellence Model. Detail the 1,000-point scoring structure of MBNQA.",
      blocks: [
        {
          type: "h3",
          text: "Part 1: Master Comparison of Global Quality Award Frameworks"
        },
        {
          type: "table",
          headers: ["Award Framework", "Origin & Sponsor", "Evaluation Focus", "Scoring System & Structure"],
          rows: [
            [
              "**Malcolm Baldrige Award (MBNQA)**",
              "USA (1987, NIST / US Congress)",
              "Holistic performance excellence, business results, competitive strategy, leadership.",
              "**1,000-Point Scoring System** across 7 Categories (Results = 450 pts)."
            ],
            [
              "**Deming Application Prize**",
              "Japan (1951, JUSE)",
              "Strict implementation of statistical CWQC/TQM and process control methods.",
              "Non-prescriptive audit of 10 categories (Policy, QC Circles, QA, Standardization)."
            ],
            [
              "**EFQM Excellence Model**",
              "Europe (1991, EFQM)",
              "European stakeholder value, sustainability, purpose-driven leadership.",
              "**RADAR Logic Matrix** (Results, Approaches, Deploy, Assess, Refine) across 7 Criteria."
            ]
          ]
        },
        {
          type: "h3",
          text: "Part 2: MBNQA 1,000-Point Category Scoring Breakdown"
        },
        {
          type: "table",
          headers: ["MBNQA Category", "Point Allocation", "Core Evaluation Focus"],
          rows: [
            [
              "**1. Leadership**",
              "120 Points",
              "Senior leadership vision, corporate governance, legal/ethical behavior."
            ],
            [
              "**2. Strategy**",
              "85 Points",
              "Strategic planning process, objective setting, action plan deployment."
            ],
            [
              "**3. Customers**",
              "85 Points",
              "Voice of Customer listening, customer engagement, relationship building."
            ],
            [
              "**4. Measurement, Analysis & Knowledge**",
              "90 Points",
              "KPI tracking, competitive benchmarking, knowledge management."
            ],
            [
              "**5. Workforce**",
              "85 Points",
              "Workforce environment, capability development, engagement, benefits."
            ],
            [
              "**6. Operations**",
              "85 Points",
              "Process design, management, innovation, supply chain management."
            ],
            [
              "**7. Results (The Crucial Half)**",
              "**450 Points**",
              "Product/Process (120), Customer (80), Workforce (80), Leadership (80), Financial/Market (90)."
            ]
          ]
        }
      ]
    }
  ]
};
