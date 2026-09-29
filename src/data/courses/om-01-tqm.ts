import type { Course } from "./types";

export const tqmCourse: Course = {
  "id": "om-01",
  "slug": "tqm",
  "code": "OM 01",
  "title": "Total Quality Management",
  "category": "Operations",
  "description": "Comprehensive study of TQM philosophy, mathematical quality ratios (Q=P/E), Garvin & SERVQUAL dimensions, benchmarking (12 stages & 7 types), VOC & Kano models, QFD House of Quality, FMEA RPN modeling, Taguchi Loss Function, Strategic Purchasing, 7 Basic QC Tools, Shewhart SPC control charts, and the 7 New Management & Planning Tools.",
  "instructor": "Operations Faculty",
  "accentColor": "#0D9488",
  "units": [
    "Principles & Philosophies of TQM",
    "Benchmarking, Customer Needs & Quality Engineering",
    "Operations Quality & Supplier Management",
    "Statistical Process Control & Management Tools"
  ],
  "topics": [
    {
      "id": "om01-topic-1",
      "slug": "defining-quality-mathematical-ratio-philosophies",
      "number": 1,
      "title": "Defining Quality: Mathematical Quality Ratio, Quality Gurus, and Garvin's 5 Approaches",
      "unit": "Principles & Philosophies of TQM",
      "marks": 14,
      "lecture": "Lecture 1: Foundations & Definitions of Quality",
      "summary": "Mathematical definition of quality (Q = P/E), foundational philosophies of Deming, Juran, Crosby, Feigenbaum, ISO 9000, and Garvin's 5 strategic approaches.",
      "tags": [
        "Quality Definition",
        "Q = P/E",
        "Quality Gurus",
        "Deming",
        "Juran",
        "Crosby",
        "Garvin 5 Approaches"
      ],
      "blocks": [
        {
          "type": "h3",
          "text": "Mathematical Formulation of Quality (The Quality Ratio)"
        },
        {
          "type": "p",
          "text": "In total quality management, quality (Q) is mathematically formulated as the ratio of realized operational performance (P) to customer expectation (E):"
        },
        {
          "type": "quote",
          "text": "Q = P / E"
        },
        {
          "type": "ul",
          "items": [
            "P (Performance): The actual, measurable output, functional capability, and operational efficiency delivered by the product or service.",
            "E (Expectations): The explicit specifications, implicit expectations, and perceived value anticipated by the customer based on price point, brand promises, and market claims.",
            "Q (Quality Evaluation Index): If Q > 1.0, realized performance exceeds customer expectations, producing customer delight; if Q = 1.0, performance meets expectations exactly, resulting in basic customer satisfaction; if Q < 1.0, performance falls short of expectations, and the output is classified as defective or substandard."
          ]
        },
        {
          "type": "h3",
          "text": "Foundational Quality Definitions by Quality Pioneers"
        },
        {
          "type": "table",
          "headers": [
            "Quality Pioneer / Authority",
            "Core Quality Philosophy & Definition",
            "Strategic Focus"
          ],
          "rows": [
            [
              "ISO 9000:2015",
              "The degree to which a set of inherent characteristics of an object fulfils requirements.",
              "International standard compliance and process consistency."
            ],
            [
              "Joseph M. Juran",
              "'Fitness for use' \u2014 Quality consists of product features that respond to customer needs and freedom from deficiencies.",
              "Customer utility, avoidance of chronic waste, and the Juran Trilogy (Planning, Control, Improvement)."
            ],
            [
              "Philip B. Crosby",
              "'Conformance to requirements' \u2014 Quality is measured strictly by zero defects against established specifications; 'Quality is Free.'",
              "Prevention over inspection, Zero Defects standard, and Price of Nonconformance (PONC)."
            ],
            [
              "W. Edwards Deming",
              "A predictable degree of uniformity and dependability at low cost and suited to the market, achieved by reducing process variation.",
              "Systemic management transformation, 14 Points, and PDCA continuous improvement cycle."
            ],
            [
              "Armand V. Feigenbaum",
              "The total composite product and service characteristics through which the product in use will meet customer expectations.",
              "Total Quality Control (TQC) spanning marketing, engineering, manufacturing, and field service."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "David A. Garvin's Five Strategic Approaches to Quality"
        },
        {
          "type": "table",
          "headers": [
            "Strategic Approach",
            "Core Concept & Philosophy",
            "Operational Manifestation"
          ],
          "rows": [
            [
              "1. Transcendent Approach",
              "Quality is innate excellence, universally recognizable through direct subjective experience, though difficult to define precisely.",
              "Artistic craftsmanship, luxury branding, uncompromising aesthetic standards."
            ],
            [
              "2. Product-Based Approach",
              "Quality is a precise, measurable variable based on the presence or quantity of specific product attributes.",
              "High thread-count cotton, higher processing speed (GHz), higher fuel mileage (km/L)."
            ],
            [
              "3. User-Based Approach",
              "Quality lies in the eyes of the beholder; highly personalized satisfaction of individual user preferences.",
              "Customized software configurations, tailored customer service experiences."
            ],
            [
              "4. Manufacturing-Based Approach",
              "Quality is strict conformance to engineering blueprints, tolerances, and design specifications; 'making it right the first time.'",
              "Statistical process control, zero dimensional deviation, elimination of rework."
            ],
            [
              "5. Value-Based Approach",
              "Quality is defined in terms of costs and prices; providing acceptable performance at an acceptable price.",
              "Target costing, high performance-to-price ratio products meeting consumer budget constraints."
            ]
          ]
        }
      ]
    },
    {
      "id": "om01-topic-2",
      "slug": "dimensions-of-quality-garvin-servqual",
      "number": 2,
      "title": "Dimensions of Quality: Garvin's 8 Product Dimensions vs. SERVQUAL Service Dimensions",
      "unit": "Principles & Philosophies of TQM",
      "marks": 14,
      "lecture": "Lecture 1: Product and Service Quality Dimensions",
      "summary": "Detailed breakdown of David Garvin's 8 dimensions of product quality and Parasuraman, Zeithaml & Berry's 5 SERVQUAL dimensions of service quality.",
      "tags": [
        "Quality Dimensions",
        "Garvin 8 Dimensions",
        "SERVQUAL",
        "Product Quality",
        "Service Quality"
      ],
      "blocks": [
        {
          "type": "h3",
          "text": "Garvin's Eight Dimensions of Product Quality"
        },
        {
          "type": "table",
          "headers": [
            "Product Dimension",
            "Operational Definition",
            "Practical Manufacturing Example"
          ],
          "rows": [
            [
              "1. Performance",
              "Primary operating characteristics and core functional capabilities of a product.",
              "A high-speed laser printer outputting 45 pages per minute at 1200 DPI resolution."
            ],
            [
              "2. Features",
              "Secondary characteristics that supplement the basic functioning of the product.",
              "An automotive infotainment unit featuring Apple CarPlay, wireless charging, and voice control."
            ],
            [
              "3. Reliability",
              "Probability of a product functioning successfully over a specified period under stated operating conditions without breakdown (MTBF).",
              "An aircraft turbine engine operating for 20,000 flight hours without unscheduled maintenance."
            ],
            [
              "4. Conformance",
              "Degree to which a product's design and operating characteristics meet established engineering blueprints and tolerances.",
              "A CNC-machined automotive crankshaft held to an exact diameter of 40.000 mm \u00b1 0.005 mm."
            ],
            [
              "5. Durability",
              "Measure of product life; amount of use derived before physical deterioration dictates replacement over repair.",
              "A cast-iron industrial pump housing operating for 30 years in an aggressive chemical processing environment."
            ],
            [
              "6. Serviceability",
              "Speed, courtesy, competence, and ease of product repair and maintenance.",
              "An electric delivery van with modular battery modules designed for swap-out in under 10 minutes."
            ],
            [
              "7. Aesthetics",
              "Subjective sensory evaluation including visual appearance, tactile feel, sound profile, taste, or aroma.",
              "The acoustic dampening and tactile feel of soft-touch dashboard materials in a luxury passenger vehicle."
            ],
            [
              "8. Perceived Quality",
              "Subjective assessment based on brand reputation, corporate image, and indirect quality signals.",
              "A hospital purchasing diagnostic imaging hardware based on the manufacturer's 50-year reputation."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Parasuraman, Zeithaml, and Berry's SERVQUAL Dimensions of Service Quality"
        },
        {
          "type": "table",
          "headers": [
            "Service Dimension",
            "Operational Definition",
            "Practical Service Industry Example"
          ],
          "rows": [
            [
              "1. Tangibles",
              "Physical facilities, equipment, communication materials, and clean appearance of personnel.",
              "Clean, sterile hospital treatment suites equipped with modern digital monitoring displays."
            ],
            [
              "2. Reliability",
              "Ability to perform the promised service dependably, accurately, and without administrative errors.",
              "An automated securities exchange clearing 100,000 trades per second without reconciliation errors."
            ],
            [
              "3. Responsiveness",
              "Willingness to help customers and provide prompt, agile, and enthusiastic service.",
              "An emergency roadside assistance team arriving at a breakdown scene within 15 minutes of dispatch."
            ],
            [
              "4. Assurance",
              "Knowledge, courtesy, and technical competence of employees that inspire trust and confidence.",
              "A board-certified wealth manager explaining complex portfolio risk mitigations clearly."
            ],
            [
              "5. Empathy",
              "Caring, individualized, and compassionate attention given to customers.",
              "A specialized healthcare concierge providing personalized schedule coordination for elderly patients."
            ]
          ]
        }
      ]
    },
    {
      "id": "om01-topic-3",
      "slug": "traditional-qc-vs-total-quality-management-tqm",
      "number": 3,
      "title": "Evolution of Quality: Traditional Quality Control vs. Total Quality Management (TQM)",
      "unit": "Principles & Philosophies of TQM",
      "marks": 14,
      "lecture": "Lecture 1: The TQM Paradigm Shift",
      "summary": "Comparative architectural analysis of traditional quality control (inspection/detection) versus Total Quality Management (prevention, universal ownership, customer focus).",
      "tags": [
        "TQM",
        "Traditional QC",
        "Paradigm Shift",
        "Continuous Improvement",
        "Zero Defects"
      ],
      "blocks": [
        {
          "type": "h3",
          "text": "The Paradigm Shift from Inspection to Total Quality Management"
        },
        {
          "type": "p",
          "text": "Total Quality Management (TQM) is an organization-wide management philosophy that continuously improves the quality of all products, services, processes, and corporate culture to achieve customer delight and long-term business sustainability. It fundamentally overturns the legacy 'inspection-and-sorting' mentality of traditional mass manufacturing."
        },
        {
          "type": "h3",
          "text": "Comparative Architecture: Previous State vs. Total Quality Management"
        },
        {
          "type": "table",
          "headers": [
            "Quality Element",
            "Previous State (Traditional Approach)",
            "Total Quality Management (TQM)"
          ],
          "rows": [
            [
              "Quality Definition",
              "Product-oriented; conformance to internal blueprints and tolerances.",
              "Customer-oriented; meeting or exceeding internal and external customer expectations."
            ],
            [
              "Strategic Priority",
              "Secondary to cost and schedule; quality compromised to meet shipping deadlines.",
              "First priority among equal business objectives; built into the process upfront."
            ],
            [
              "Decision Horizon",
              "Short-term driven; reaction to daily line crises and quarterly output quotas.",
              "Long-term driven; strategic planning for sustainable process capability."
            ],
            [
              "Operational Emphasis",
              "Detection via post-production inspection, sorting, and scrapping defective units.",
              "Prevention via robust product design, process engineering, and mistake-proofing (Poka-yoke)."
            ],
            [
              "Error Philosophy",
              "Operations accept an 'Allowable Defect Rate' / Acceptable Quality Level (AQL).",
              "Target is Zero Defects; relentless continuous reduction of process variation."
            ],
            [
              "Responsibility",
              "Quality Control (QC) inspection department is solely accountable.",
              "Universal accountability; every employee, manager, and supplier owns quality."
            ],
            [
              "Problem Solving",
              "Unstructured firefighting; isolated by departments and blame-driven.",
              "Systematic root-cause analysis via cross-functional teams and statistical tools."
            ],
            [
              "Procurement Strategy",
              "Adversarial; lowest purchase price tag through multiple competing vendors.",
              "Collaborative partnerships; Total Cost of Ownership (TCO) with few certified vendors."
            ],
            [
              "Manager's Role",
              "Directive, autocratic supervision; enforcer of rigid production quotas.",
              "Facilitative leadership; coach, empowerer, and remover of operational barriers."
            ],
            [
              "Customer Focus",
              "Passive; handling customer warranty claims and complaints reactively.",
              "Active; proactive capture of Voice of the Customer (VOC) to drive product design."
            ]
          ]
        }
      ]
    },
    {
      "id": "om01-topic-4",
      "slug": "benchmarking-twelve-stages-seven-types",
      "number": 4,
      "title": "The Benchmarking Process: Twelve Stages (AT&T Model) and Seven Types of Benchmarking",
      "unit": "Benchmarking, Customer Needs & Quality Engineering",
      "marks": 14,
      "lecture": "Lecture 2: Benchmarking & Best Practices",
      "summary": "Detailed analysis of benchmarking theory, the 12-stage AT&T benchmarking process, and the 7 strategic classifications of benchmarking with real-world industry examples.",
      "tags": [
        "Benchmarking",
        "AT&T Model",
        "12 Stages",
        "7 Types of Benchmarking",
        "Best Practices"
      ],
      "blocks": [
        {
          "type": "h3",
          "text": "Definition and Strategic Role of Benchmarking"
        },
        {
          "type": "p",
          "text": "Benchmarking is the continuous, systematic search for and implementation of industry best practices that lead to superior performance by measuring products, services, operational workflows, and corporate strategies against recognized industry leaders or world-class organizations."
        },
        {
          "type": "h3",
          "text": "The Twelve Stages of Benchmarking (AT&T Model)"
        },
        {
          "type": "ol",
          "items": [
            "Stage 1: Determine Clients Who Will Use the Information \u2014 Identify internal process owners, executive champions, and operational units who will utilize the benchmarking findings to execute organizational change.",
            "Stage 2: Advance Clients from Literacy to Champion Stage \u2014 Train designated managers on benchmarking methodologies, securing committed leadership and overcoming organizational inertia.",
            "Stage 3: Test the Environment \u2014 Assess organizational readiness, cultural receptivity, resource availability, and operational willingness to adopt external best practices.",
            "Stage 4: Determine Urgency \u2014 Evaluate business criticality; verify that the benchmarking exercise addresses strategic bottlenecks rather than low-impact administrative tasks.",
            "Stage 5: Determine Scope and Type of Benchmarking Needed \u2014 Establish boundary limits, Key Performance Indicators (KPIs), work breakdown structures, and select the specific benchmarking mode.",
            "Stage 6: Select and Prepare the Team \u2014 Assemble a cross-functional team of process operators, technical experts, and analytical specialists; define clear project charters.",
            "Stage 7: Overlay Benchmarking Process onto Business Planning Process \u2014 Synchronize benchmarking milestones, resource allocations, and deliverables directly with the organization's annual strategic planning cycle.",
            "Stage 8: Develop the Benchmarking Plans \u2014 Identify benchmark partners, construct rigorous data collection protocols, design survey questionnaires, and schedule on-site visits.",
            "Stage 9: Analyse the Data \u2014 Quantify performance gaps, normalize metrics across organizations, isolate process enablers, and identify root causes of performance differentials.",
            "Stage 10: Integrate Recommended Actions \u2014 Translate benchmarking insights into concrete operational redesign proposals; secure executive approval and functional alignment.",
            "Stage 11: Take Action \u2014 Implement process modifications, deploy new technologies, revise operating procedures, and execute change management plans.",
            "Stage 12: Continue Improvement \u2014 Establish institutionalized measurement controls, recalibrate benchmarks periodically against evolving world-class standards, and sustain learning."
          ]
        },
        {
          "type": "h3",
          "text": "The Seven Types of Benchmarking"
        },
        {
          "type": "table",
          "headers": [
            "Benchmarking Type",
            "Strategic Focus & Scope",
            "Industry Example"
          ],
          "rows": [
            [
              "1. Strategic Benchmarking",
              "Examining how leading global corporations compete, focusing on long-term corporate strategies, business model transformations, and core competencies.",
              "An automotive OEM studying how tech giants transition from hardware sales to recurring software mobility subscriptions."
            ],
            [
              "2. Performance (Competitive)",
              "Direct comparison of specific product/service performance characteristics, technical specifications, and pricing against direct market competitors.",
              "A smartphone maker measuring battery discharge rates, thermal dissipation, and camera resolution against its primary rival."
            ],
            [
              "3. Process Benchmarking",
              "Comparing discrete operational processes and work workflows against best-in-class process owners regardless of industry sector.",
              "A hospital emergency department benchmarking its rapid patient intake and triage processes against Formula 1 pit crew coordination."
            ],
            [
              "4. Functional Benchmarking",
              "Comparing a specific corporate function (e.g., procurement, billing, logistics) with leading practitioners in similar functional domains.",
              "An international airline benchmarking its revenue yield management and reservation algorithms against global luxury hotel chains."
            ],
            [
              "5. Generic Benchmarking",
              "Studying common, non-industry-specific work processes across completely unrelated business sectors to achieve breakthrough innovation.",
              "A retail banking chain studying the automated barcoding and sorting mechanisms of Federal Express to accelerate check clearance."
            ],
            [
              "6. Internal Benchmarking",
              "Comparing similar operations, business units, or manufacturing plants located in different regions within the same corporate entity.",
              "A semiconductor MNC comparing wafer yield rates and contamination controls between its Singapore and Oregon fabrication cleanrooms."
            ],
            [
              "7. External / International",
              "Benchmarking across international borders to discover world-class operational standards, overcoming domestic industry blind spots.",
              "A domestic rail transit agency analyzing the predictive maintenance schedules and signaling protocols of the Japanese Shinkansen bullet train."
            ]
          ]
        }
      ]
    },
    {
      "id": "om01-topic-5",
      "slug": "voice-of-customer-voc-kano-model",
      "number": 5,
      "title": "Voice of the Customer (VOC) and the Kano Model of Customer Satisfaction",
      "unit": "Benchmarking, Customer Needs & Quality Engineering",
      "marks": 14,
      "lecture": "Lecture 2: Customer Needs & Satisfaction Modeling",
      "summary": "Techniques for capturing the Voice of the Customer (VOC) and deconstructing Noriaki Kano's Model of Customer Satisfaction with dynamic decay cycles.",
      "tags": [
        "VOC",
        "Voice of the Customer",
        "Kano Model",
        "Must-Be",
        "One-Dimensional",
        "Delighters",
        "Customer Satisfaction"
      ],
      "blocks": [
        {
          "type": "h3",
          "text": "Capturing the Voice of the Customer (VOC)"
        },
        {
          "type": "p",
          "text": "The Voice of the Customer (VOC) is the systematic process of gathering, analyzing, and translating customer requirements, expectations, and perceptions into concrete engineering specifications. Organizations deploy both proactive and reactive feedback mechanisms:"
        },
        {
          "type": "ul",
          "items": [
            "Proactive Feedback Mechanisms: Structured customer satisfaction surveys (Likert scales evaluating importance vs. satisfaction), in-depth focus groups, customer advisory boards, and contextual inquiry (observing customers using products in actual operating environments).",
            "Reactive Feedback Mechanisms: Warranty claim databases, field failure logs, customer complaint registers, return merchandise authorizations (RMA), and digital social media sentiment analysis."
          ]
        },
        {
          "type": "h3",
          "text": "The Kano Model of Customer Satisfaction (Noriaki Kano)"
        },
        {
          "type": "p",
          "text": "Developed by Professor Noriaki Kano, this model establishes that customer satisfaction does not correlate linearly with product performance; different types of requirements produce fundamentally distinct psychological responses in customers."
        },
        {
          "type": "table",
          "headers": [
            "Requirement Category",
            "Customer Psychological Perception",
            "Satisfaction Relationship",
            "Practical Example"
          ],
          "rows": [
            [
              "1. Must-Be / Basic Requirements (Dissatisfiers)",
              "Inherent, unspoken baseline requirements taken for granted. Customers only notice them when missing.",
              "Absence causes extreme dissatisfaction; full presence merely brings customer to neutral (satisfaction <= 0).",
              "Functional hydraulic brakes in a car; clean bed linens and running water in a hotel room."
            ],
            [
              "2. One-Dimensional / Performance (Satisfiers)",
              "Explicit, spoken requirements directly articulated by the customer during procurement.",
              "Linear correlation: higher execution yields higher satisfaction; lower execution yields dissatisfaction.",
              "Fuel efficiency (km/L) in a vehicle; battery operating life (hours) in a laptop; download speeds in internet broadband."
            ],
            [
              "3. Attractive / Exciter (Delighters)",
              "Latent, unspoken, and unexpected innovations that surprise the customer.",
              "Absence causes zero dissatisfaction (not anticipated); presence produces exponential customer delight.",
              "First smartphone capacitive touchscreens; complimentary luxury airport pickup service for auto servicing."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "The Dynamic Decay Cycle of the Kano Model"
        },
        {
          "type": "p",
          "text": "Customer expectations are dynamic and subject to temporal erosion. Over time, an 'Attractive / Delighter' feature inevitably becomes a standardized 'One-Dimensional / Performance' expectation, and ultimately decays into an unspoken 'Must-Be / Basic' baseline requirement. For example, remote central locking in automobiles began as an exciter feature in the 1990s, transitioned into a competitive performance comparison in the 2000s, and is now a non-negotiable basic requirement in all vehicles."
        }
      ]
    },
    {
      "id": "om01-topic-6",
      "slug": "quality-function-deployment-qfd-house-of-quality",
      "number": 6,
      "title": "Quality Function Deployment (QFD) and the House of Quality (HOQ) Architecture",
      "unit": "Benchmarking, Customer Needs & Quality Engineering",
      "marks": 14,
      "lecture": "Lecture 2: Quality Engineering & QFD",
      "summary": "Deconstructing Quality Function Deployment (QFD), the 6 structural rooms of the House of Quality (HOQ), and the 4-phase QFD translation cascade.",
      "tags": [
        "QFD",
        "House of Quality",
        "HOQ Matrix",
        "WHATs and HOWs",
        "Interrelationship Matrix",
        "Correlation Roof"
      ],
      "blocks": [
        {
          "type": "h3",
          "text": "Concept and Strategic Purpose of QFD and HOQ"
        },
        {
          "type": "p",
          "text": "Quality Function Deployment (QFD), pioneered by Yoji Akao in Japan, is a structured cross-functional methodology that systematically translates customer requirements (WHATs) into engineering technical specifications (HOWs), part characteristics, process parameters, and production controls. The primary analytical matrix of QFD is the House of Quality (HOQ)."
        },
        {
          "type": "h3",
          "text": "The Six Structural Components of the House of Quality (HOQ)"
        },
        {
          "type": "table",
          "headers": [
            "HOQ Room / Component",
            "Structural Location",
            "Analytical Function & Operational Role"
          ],
          "rows": [
            [
              "1. Customer Requirements (WHATs)",
              "Left Wall",
              "Hierarchically structured list of customer needs, expectations, and desired benefits collected via VOC."
            ],
            [
              "2. Engineering Descriptors (HOWs)",
              "Ceiling",
              "Measurable, actionable technical parameters and engineering characteristics developed by design teams to satisfy customer WHATs."
            ],
            [
              "3. Interrelationship Matrix",
              "Main Room / Center Grid",
              "Evaluates relationship strength between each WHAT and HOW using standardized weights: Strong (Weight 9), Medium (Weight 3), Weak (Weight 1), Blank (0)."
            ],
            [
              "4. Correlation Matrix (Roof)",
              "Triangular Roof",
              "Maps technical trade-offs and synergies between engineering HOWs: Strong Positive (++), Positive (+), Negative (-) conflict, Strong Negative (--)."
            ],
            [
              "5. Customer Competitive Assessment",
              "Right Wing",
              "Benchmarking company performance against competitors on a 1-5 scale; calculates Customer Importance, Target Value, Scale-Up Factor, and Absolute Weight: W_i = C_i \u00d7 S_i \u00d7 P_i."
            ],
            [
              "6. Technical Targets & Priorities",
              "Basement / Foundation",
              "Calculates Absolute Technical Importance: T_j = Sum(W_i \u00d7 R_ij), Relative Technical Weight %, and sets objective engineering target specifications."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "The Four-Phase QFD Translation Cascade"
        },
        {
          "type": "ol",
          "items": [
            "Phase 1: Product Planning (The House of Quality) \u2014 Translates Customer Requirements (WHATs) into Engineering Design Requirements (HOWs).",
            "Phase 2: Part Deployment \u2014 Carries Design Requirements forward as WHATs, translating them into specific Part Characteristics and Subsystem Specifications (HOWs).",
            "Phase 3: Process Planning \u2014 Carries Part Characteristics forward as WHATs, translating them into Manufacturing Process Parameters and Equipment Settings (HOWs).",
            "Phase 4: Production Planning \u2014 Carries Process Parameters forward as WHATs, translating them into Operator Work Instructions, Poka-yoke controls, and Quality Control Inspection Standards (HOWs)."
          ]
        }
      ]
    },
    {
      "id": "om01-topic-7",
      "slug": "failure-mode-and-effects-analysis-fmea-rpn",
      "number": 7,
      "title": "Failure Mode and Effects Analysis (FMEA): DFMEA vs. PFMEA and RPN Risk Modeling",
      "unit": "Benchmarking, Customer Needs & Quality Engineering",
      "marks": 14,
      "lecture": "Lecture 2: Risk Management & Reliability Engineering",
      "summary": "Proactive engineering risk management using FMEA, contrasting DFMEA and PFMEA, mathematical formulation of Risk Priority Number (RPN), and the severity override rule.",
      "tags": [
        "FMEA",
        "DFMEA",
        "PFMEA",
        "RPN Calculation",
        "Risk Priority Number",
        "Severity Override"
      ],
      "blocks": [
        {
          "type": "h3",
          "text": "Concept and Strategic Purpose of FMEA"
        },
        {
          "type": "p",
          "text": "Failure Mode and Effects Analysis (FMEA) is a systematic, proactive analytical engineering discipline used to identify potential failure modes in a product design or manufacturing process, assess the severity of their consequences, determine their root causes, and prioritize corrective actions before defects escape to the customer."
        },
        {
          "type": "h3",
          "text": "Comparative Architecture: DFMEA vs. PFMEA"
        },
        {
          "type": "table",
          "headers": [
            "Dimension",
            "Design FMEA (DFMEA)",
            "Process FMEA (PFMEA)"
          ],
          "rows": [
            [
              "Primary Analytical Focus",
              "Product design, geometry, material properties, component interfaces, and operating tolerances.",
              "Manufacturing and assembly operations, tooling, machines, operator errors, and work environment."
            ],
            [
              "Core Objective",
              "Ensure product functionality, safety, structural integrity, and reliability under anticipated end-use conditions.",
              "Ensure manufacturing process capability, repeatability, operator safety, and defect prevention during production."
            ],
            [
              "Root Causes Analyzed",
              "Material fatigue, thermal expansion mismatches, structural over-stressing, incorrect yield strength.",
              "Machine tool wear, incorrect feed rate, operator assembly error, calibration drift, part contamination."
            ],
            [
              "Corrective Actions",
              "Engineering Change Orders (ECO), design revisions, material specification upgrades, physical redundancy.",
              "Mistake-proofing (Poka-yoke), automated sensors, fixture redesign, revised standard operating procedures (SOP)."
            ],
            [
              "Execution Timing",
              "Completed prior to design freeze and production tooling release.",
              "Completed prior to production tooling installation and full-scale factory rollout."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Mathematical Formulation of Risk Priority Number (RPN)"
        },
        {
          "type": "p",
          "text": "The Risk Priority Number (RPN) is a quantitative metric ranging from 1 to 1,000 used to prioritize engineering intervention:"
        },
        {
          "type": "quote",
          "text": "RPN = Severity (S) \u00d7 Occurrence (O) \u00d7 Detection (D)"
        },
        {
          "type": "ul",
          "items": [
            "Severity (S): Evaluates the seriousness of the failure effect on the customer (1 = No noticeable effect, 10 = Hazardous failure without warning).",
            "Occurrence (O): Evaluates the statistical likelihood/frequency that a specific root cause will occur (1 = Extremely unlikely / < 1 in 1,500,000, 10 = Inevitable / > 1 in 2).",
            "Detection (D): Evaluates the probability that current design controls or quality inspection will catch the defect before release (1 = Certain detection, 10 = Absolute uncertainty of detection / zero inspection).",
            "The Severity Override Rule: Any failure mode receiving a Severity rating of 9 or 10 mandates immediate engineering redesign regardless of whether the calculated overall RPN is low."
          ]
        }
      ]
    },
    {
      "id": "om01-topic-8",
      "slug": "taguchis-quality-loss-function-mathematics",
      "number": 8,
      "title": "Taguchi's Quality Loss Function: Philosophy, Mathematical Formulations, and Process Loss",
      "unit": "Benchmarking, Customer Needs & Quality Engineering",
      "marks": 14,
      "lecture": "Lecture 2: Robust Engineering & Taguchi Methods",
      "summary": "Genichi Taguchi's philosophy of quality loss, rejection of the traditional goalpost mentality, mathematical formulation of Nominal-the-Best, Smaller-the-Better, Larger-the-Better, and process population loss.",
      "tags": [
        "Taguchi",
        "Quality Loss Function",
        "Goalpost Mentality",
        "Nominal the Best",
        "Process Loss"
      ],
      "blocks": [
        {
          "type": "h3",
          "text": "Taguchi's Definition of Quality and Philosophy"
        },
        {
          "type": "p",
          "text": "Dr. Genichi Taguchi revolutionized quality engineering by defining quality negatively: 'Quality is the loss imparted by the product to society from the time the product is shipped.' This loss includes customer dissatisfaction, warranty repair costs, operational waste, and societal environmental impact."
        },
        {
          "type": "h3",
          "text": "Rejection of the Traditional 'Goalpost Mentality'"
        },
        {
          "type": "ul",
          "items": [
            "Traditional Goalpost Approach: Assumes zero financial loss as long as the measured product parameter falls anywhere inside the Upper and Lower Specification Limits (LSL <= y <= USL), and assumes a sudden step-function loss only when a unit falls outside limits.",
            "Taguchi Quadratic Loss Model: Asserts that financial loss begins immediately whenever a quality characteristic departs from the exact nominal target value m, increasing quadratically as deviation grows: L(y) = k(y - m)^2."
          ]
        },
        {
          "type": "h3",
          "text": "Mathematical Formulations of Taguchi Loss Functions"
        },
        {
          "type": "table",
          "headers": [
            "Loss Function Type",
            "Mathematical Formula",
            "Cost Constant (k)",
            "Practical Engineering Application"
          ],
          "rows": [
            [
              "1. Nominal-the-Best",
              "L(y) = k(y - m)^2",
              "k = A_0 / (Delta_0)^2",
              "Target is a specific finite nominal value m (e.g., shaft diameter, voltage output, chemical concentration)."
            ],
            [
              "2. Smaller-the-Better",
              "L(y) = k(y)^2",
              "k = A_0 / (y_0)^2",
              "Target is zero (m = 0; e.g., automotive exhaust emissions, surface roughness, electrical noise, defect rates)."
            ],
            [
              "3. Larger-the-Better",
              "L(y) = k(1 / y^2)",
              "k = A_0 \u00d7 (y_0)^2",
              "Target is infinity (m = infinity; e.g., tensile strength, battery operating life, weld fracture load)."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Average Quality Loss for a Process Population"
        },
        {
          "type": "p",
          "text": "For a manufacturing process producing a population of units with mean y_bar and process standard deviation sigma, the expected average loss per unit is:"
        },
        {
          "type": "quote",
          "text": "L_bar = k \u00d7 [ sigma^2 + (y_bar - m)^2 ]"
        },
        {
          "type": "p",
          "text": "Strategic Implication: Total societal quality loss can be minimized only when two conditions are simultaneously satisfied: (1) Process centering: The process average is shifted exactly to the target value (y_bar = m), and (2) Variation reduction: Process variance (sigma^2) is relentlessly reduced toward zero."
        }
      ]
    },
    {
      "id": "om01-topic-9",
      "slug": "strategic-purchasing-supplier-qualification-lifecycle",
      "number": 9,
      "title": "Strategic Purchasing and the Four-Tier Supplier Qualification Lifecycle",
      "unit": "Operations Quality & Supplier Management",
      "marks": 14,
      "lecture": "Lecture 3: Operations Quality & Procurement",
      "summary": "Where quality begins, the 1-10-100 Rule of Quality Costs, traditional vs strategic procurement, and the four-tier supplier qualification scorecard lifecycle.",
      "tags": [
        "Strategic Purchasing",
        "1-10-100 Rule",
        "Supplier Qualification",
        "TCO",
        "Dock-to-Stock"
      ],
      "blocks": [
        {
          "type": "h3",
          "text": "Where Quality Actually Begins: The Upstream Genesis"
        },
        {
          "type": "p",
          "text": "In modern operations management, quality begins upstream in Product Conceptual Design and Strategic Procurement / Supplier Relationships. Quality cannot be inspected into a finished product; it must be designed into the blueprint and built into purchased raw materials and sub-assemblies."
        },
        {
          "type": "h3",
          "text": "The 1-10-100 Rule of Quality Costs"
        },
        {
          "type": "table",
          "headers": [
            "Lifecycle Stage",
            "Cost Multiplier",
            "Operational Consequence & Meaning"
          ],
          "rows": [
            [
              "Design & Prevention Stage",
              "1x (Base Cost)",
              "Cost to catch and correct a design flaw on the CAD blueprint or during supplier selection."
            ],
            [
              "Manufacturing Assembly Stage",
              "10x (Internal Failure)",
              "Cost to catch, scrap, and rework a defective part internally on the factory production line."
            ],
            [
              "Customer Hands Stage",
              "100x (External Failure)",
              "Cost of handling warranty claims, product recalls, field service replacements, legal liability, and brand erosion once defects reach the customer."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Traditional Purchasing vs. Strategic Purchasing"
        },
        {
          "type": "table",
          "headers": [
            "Dimension",
            "Traditional Purchasing",
            "Strategic Purchasing"
          ],
          "rows": [
            [
              "Relationship Model",
              "Adversarial; arm's-length; zero-sum transaction focus.",
              "Collaborative; long-term mutual partnering and co-development."
            ],
            [
              "Supplier Base",
              "Large supply base to encourage aggressive price bidding.",
              "Rationalized, small base of certified, high-capability suppliers."
            ],
            [
              "Primary Selection Metric",
              "Lowest unit purchase price tag.",
              "Lowest Total Cost of Ownership (TCO), quality capability, and reliability."
            ],
            [
              "Quality Verification",
              "Massive receiving inspection, counting, and sorting at dock.",
              "Supplier quality certification; direct dock-to-stock delivery without receiving inspection."
            ],
            [
              "Design Involvement",
              "Late; suppliers bid after blueprints are finalized.",
              "Early Supplier Involvement (ESI) during concept and prototype stages."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "The Four-Tier Supplier Qualification Lifecycle"
        },
        {
          "type": "ol",
          "items": [
            "Tier 1: Initial Screening & Prequalification \u2014 Assessing supplier financial health, management reputation, plant capacity, and ISO 9001 / IATF 16949 certifications.",
            "Tier 2: On-Site Technical & Quality Auditing \u2014 Rigorous factory evaluation covering statistical process control (SPC), calibration systems, preventive maintenance, and Poka-yoke mistake-proofing.",
            "Tier 3: Quantitative Performance Scorecard Rating \u2014 Continuous rating across weighted pillars: Composite Score = (0.40 \u00d7 Quality PPM) + (0.30 \u00d7 Delivery OTIF) + (0.20 \u00d7 Cost Competitiveness) + (0.10 \u00d7 Service & Collaboration).",
            "Tier 4: Supplier Certification & Dock-to-Stock Status \u2014 Suppliers maintaining scores > 95% achieve Certified Status, granting dock-to-stock privileges and first-look access to future contracts."
          ]
        }
      ]
    },
    {
      "id": "om01-topic-10",
      "slug": "seven-basic-quality-control-qc-tools",
      "number": 10,
      "title": "The Seven Basic Quality Control (QC) Tools and Sequence of Use",
      "unit": "Statistical Process Control & Management Tools",
      "marks": 14,
      "lecture": "Lecture 4: Statistical Quality Control",
      "summary": "Deconstructing the 7 Basic QC Tools (Check Sheet, Pareto, Fishbone, Histogram, Scatter, Stratification, Control Chart) and their six-phase sequence of use in an investigation.",
      "tags": [
        "7 QC Tools",
        "Pareto Chart",
        "Fishbone Diagram",
        "Histogram",
        "Check Sheet",
        "Control Chart"
      ],
      "blocks": [
        {
          "type": "h3",
          "text": "The Seven Basic Quality Control (QC) Tools"
        },
        {
          "type": "table",
          "headers": [
            "QC Tool",
            "Analytical Purpose & Mechanism",
            "Operational Diagnostic Function"
          ],
          "rows": [
            [
              "1. Flowchart (Process Map)",
              "Graphical representation of all sequential steps, decision gates, and inputs in a process.",
              "Visualizes operational flow; identifies bottlenecks, redundancies, and inspection points."
            ],
            [
              "2. Check Sheet",
              "Standardized form designed for collecting and recording observational or defect data in real-time.",
              "Transforms raw shop-floor observations into structured quantitative counts (Defect-type, Measles chart)."
            ],
            [
              "3. Pareto Chart",
              "Dual-axis bar graph based on Juran's 80/20 Rule ranking defect categories in descending order.",
              "Separates the 'vital few' defect causes (accounting for 80% of losses) from the 'useful many'."
            ],
            [
              "4. Cause & Effect (Fishbone)",
              "Brainstorming diagram developed by Kaoru Ishikawa linking an effect to root causes across 5M+1E.",
              "Systematically investigates root causes across Manpower, Machine, Material, Method, Measurement, Environment."
            ],
            [
              "5. Histogram",
              "Bar graph displaying frequency distribution of continuous variable data.",
              "Visualizes process central tendency, spread, and shape (Normal, Skewed, Bimodal, Truncated)."
            ],
            [
              "6. Scatter Diagram",
              "Coordinate plot displaying relationship between two continuous variables.",
              "Tests mathematical correlation (Positive, Negative, Curvilinear, Zero) between process inputs and quality outputs."
            ],
            [
              "7. Control Chart",
              "Time-series line chart with Center Line and \u00b13 sigma statistical limits (UCL / LCL).",
              "Differentiates common cause random variation from assignable special cause instability."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Six-Phase Sequence of Use in a Quality Investigation"
        },
        {
          "type": "ol",
          "items": [
            "Phase 1: Process Mapping (Flowchart) \u2014 Map the end-to-end process to isolate investigation boundaries.",
            "Phase 2: Data Collection (Check Sheet) \u2014 Gather empirical, real-time defect counts and failure locations on the line.",
            "Phase 3: Defect Prioritization (Pareto Chart) \u2014 Plot defect frequencies to isolate the top 20% vital causes generating 80% of scrap costs.",
            "Phase 4: Root-Cause Investigation (Fishbone Diagram & 5 Whys) \u2014 Brainstorm and drill down into root causes across 5M+1E categories.",
            "Phase 5: Statistical Distribution & Correlation (Histogram & Scatter Plot) \u2014 Analyze parameter dispersion against specification limits and verify input-output correlation.",
            "Phase 6: Process Stabilization & Control (Control Chart) \u2014 Install statistical control charts to verify corrective action effectiveness and sustain long-term process capability."
          ]
        }
      ]
    },
    {
      "id": "om01-topic-11",
      "slug": "statistical-process-control-spc-control-charts",
      "number": 11,
      "title": "Statistical Process Control (SPC) and Control Chart Architecture",
      "unit": "Statistical Process Control & Management Tools",
      "marks": 14,
      "lecture": "Lecture 4: Statistical Process Control & Shewhart Theory",
      "summary": "Walter Shewhart's SPC theory, common vs special causes of variation, mathematical 3-sigma control limits, and classifying Variable vs Attribute control charts.",
      "tags": [
        "SPC",
        "Control Charts",
        "Shewhart",
        "Common Causes",
        "Special Causes",
        "X-bar R Chart",
        "p-Chart"
      ],
      "blocks": [
        {
          "type": "h3",
          "text": "Theoretical Foundations of SPC (Walter A. Shewhart)"
        },
        {
          "type": "p",
          "text": "Statistical Process Control (SPC) is the application of statistical methods to monitor, control, and improve process capability. Formulated by Walter A. Shewhart at Bell Laboratories, SPC establishes that all processes exhibit variation, categorized into two distinct types:"
        },
        {
          "type": "ul",
          "items": [
            "Common Cause (Chance / Natural) Variation: Inherent, random fluctuations present in a stable system (e.g., slight ambient temperature shifts, natural raw material variances); predictable within statistical limits (\u00b13 sigma).",
            "Special Cause (Assignable / Unnatural) Variation: External, non-random disturbances that destabilize the process (e.g., tool breakage, wrong raw material lot, operator error); causes unpredictability and out-of-control signals.",
            "Definition of Statistical Control: A process is in a state of statistical control when only common causes of variation are active."
          ]
        },
        {
          "type": "h3",
          "text": "Control Chart Mathematical Architecture (3-Sigma Basis)"
        },
        {
          "type": "p",
          "text": "Under the Central Limit Theorem and Gaussian normal distribution, 99.73% of sample observations fall within \u00b13 standard deviations of the mean under common cause conditions: Center Line (CL) = Process Average (mu), Upper Control Limit (UCL) = CL + 3 sigma, Lower Control Limit (LCL) = CL - 3 sigma."
        },
        {
          "type": "h3",
          "text": "Classification of Control Charts: Variable vs. Attribute"
        },
        {
          "type": "table",
          "headers": [
            "Category",
            "Chart Type",
            "Data Type & Sample Size",
            "Control Limit Formulas"
          ],
          "rows": [
            [
              "Variable (Continuous)",
              "X-bar & R Chart",
              "Subgroup averages and ranges (Sample size n = 2 to 9).",
              "X-bar: UCL = X_dbar + A_2*R_bar, LCL = X_dbar - A_2*R_bar\nR: UCL = D_4*R_bar, LCL = D_3*R_bar"
            ],
            [
              "Variable (Continuous)",
              "X-bar & s Chart",
              "Subgroup averages and standard deviations (Sample size n > 10).",
              "X-bar: UCL = X_dbar + A_3*s_bar, LCL = X_dbar - A_3*s_bar\ns: UCL = B_4*s_bar, LCL = B_3*s_bar"
            ],
            [
              "Variable (Continuous)",
              "I-MR Chart",
              "Individual observations and moving range (Sample size n = 1).",
              "I: UCL = X_bar + 2.66*MR_bar, LCL = X_bar - 2.66*MR_bar\nMR: UCL = 3.267*MR_bar, LCL = 0"
            ],
            [
              "Attribute (Discrete)",
              "p-Chart",
              "Proportion of nonconforming units (Variable subgroup size n_i).",
              "UCL = p_bar + 3*sqrt(p_bar*(1-p_bar)/n), LCL = max(0, p_bar - 3*sqrt(p_bar*(1-p_bar)/n))"
            ],
            [
              "Attribute (Discrete)",
              "np-Chart",
              "Number of nonconforming units (Constant subgroup size n).",
              "UCL = n*p_bar + 3*sqrt(n*p_bar*(1-p_bar)), LCL = max(0, n*p_bar - 3*sqrt(n*p_bar*(1-p_bar)))"
            ],
            [
              "Attribute (Discrete)",
              "c-Chart",
              "Count of defects per inspection unit (Constant unit size).",
              "UCL = c_bar + 3*sqrt(c_bar), LCL = max(0, c_bar - 3*sqrt(c_bar))"
            ],
            [
              "Attribute (Discrete)",
              "u-Chart",
              "Count of defects per inspection unit (Variable unit size n_i).",
              "UCL = u_bar + 3*sqrt(u_bar/n), LCL = max(0, u_bar - 3*sqrt(u_bar/n))"
            ]
          ]
        }
      ]
    },
    {
      "id": "om01-topic-12",
      "slug": "seven-new-management-planning-tools-integration",
      "number": 12,
      "title": "The Seven New Management and Planning Tools (JUSE / MP Tools) and Integration Flow",
      "unit": "Statistical Process Control & Management Tools",
      "marks": 14,
      "lecture": "Lecture 4: Management & Planning Tools",
      "summary": "Deconstructing the 7 New Management & Planning Tools developed by JUSE and their step-by-step integration flow in complex organizational problem solving.",
      "tags": [
        "7 New Tools",
        "Affinity Diagram",
        "Relations Diagram",
        "Tree Diagram",
        "Matrix Diagram",
        "PDPC",
        "Arrow Diagram"
      ],
      "blocks": [
        {
          "type": "h3",
          "text": "Origin and Purpose of the Seven New Management Tools"
        },
        {
          "type": "p",
          "text": "Developed in 1976 by a committee of the Union of Japanese Scientists and Engineers (JUSE), the Seven New Management and Planning Tools (also known as the 7 MP Tools) are designed to organize unstructured verbal data, analyze complex qualitative problems, foster strategic innovation, and execute multi-phase implementation projects."
        },
        {
          "type": "h3",
          "text": "The Seven New Management and Planning Tools"
        },
        {
          "type": "table",
          "headers": [
            "Tool Name",
            "Analytical Method",
            "Strategic Organizational Role"
          ],
          "rows": [
            [
              "1. Affinity Diagram (KJ Method)",
              "Gathers and organizes large volumes of unstructured brainstorming ideas, customer feedback, and verbal data into natural conceptual clusters.",
              "Breaks mental bottlenecks; creates bottom-up conceptual structure from raw chaos."
            ],
            [
              "2. Interrelationship Digraph",
              "Maps multi-directional cause-and-effect links among diverse factors using directional arrows.",
              "Distinguishes primary root drivers (high outgoing arrows) from outcome symptoms (high incoming arrows)."
            ],
            [
              "3. Tree Diagram (Systematic)",
              "Hierarchically decomposes a broad strategic goal into increasingly specific operational sub-tasks.",
              "Transforms 'What must be done' into 'How it can be executed' across 3-4 structural tiers."
            ],
            [
              "4. Matrix Diagram",
              "Systematic multi-dimensional grid evaluating relationships and responsibilities across tasks and functions.",
              "Allocates functional responsibility (L-shaped, T-shaped, X-shaped matrices) across departments."
            ],
            [
              "5. Prioritization Matrix",
              "L-shaped matrix scoring and ranking alternative solutions against weighted strategic criteria.",
              "Objectively selects the highest-impact implementation path under resource constraints."
            ],
            [
              "6. Process Decision Program Chart (PDPC)",
              "Contingency planning tree identifying potential failure modes and 'What-If' scenarios in a plan.",
              "Establishes proactive countermeasures before rolling out complex implementation plans."
            ],
            [
              "7. Arrow Diagram (Activity Network / CPM)",
              "Network graph sequencing tasks, dependencies, Earliest Start, Latest Finish, and Critical Path.",
              "Optimizes project scheduling, eliminates execution delays, and controls critical path milestones."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Step-by-Step Tool Integration Flow in Complex Problem Solving"
        },
        {
          "type": "ol",
          "items": [
            "Step 1 (Affinity Diagram) \u2014 The team brainstorms raw, unstructured qualitative issues surrounding a major challenge (e.g., frequent delayed shipments), organizing 80 ideas into thematic clusters (People, Systems, Machines, Logistics).",
            "Step 2 (Relations Diagram) \u2014 The team takes cluster headers and draws directional cause-and-effect arrows between them, identifying the node with the highest outgoing arrows as the Primary Root Driver (Inadequate supervisor training).",
            "Step 3 (Tree Diagram) \u2014 Taking the Primary Driver as the root objective, the team constructs a Tree Diagram asking 'How?', branching into sub-tasks (curriculum design, simulator training, certification audit).",
            "Step 4 (Matrix Diagram) \u2014 Sub-tasks from leaf nodes are mapped in an L-shaped matrix against departments (HR, Maintenance, Logistics, IT) to establish clear operational ownership.",
            "Step 5 (Prioritization Matrix) \u2014 Alternative software tools or training programs are scored against weighted criteria (Cost, Speed, Scalability) to establish the winning execution plan.",
            "Step 6 (PDPC Chart) \u2014 The chosen plan is mapped to anticipate 'What-If' failure scenarios (server downtime, vendor delays) with pre-approved countermeasures.",
            "Step 7 (Arrow Diagram) \u2014 Tasks and contingency buffers are scheduled into a CPM Activity Network, identifying the Critical Path to guarantee on-time project completion."
          ]
        }
      ]
    }
  ],
  "examQuestions": [
    {
      "id": "om01-eq-1",
      "number": 1,
      "title": "Defining Quality: Mathematical Quality Ratio, Quality Gurus, and Garvin's 5 Approaches",
      "marks": 14,
      "relatedSlugs": [
        "defining-quality-mathematical-ratio-philosophies"
      ],
      "question": "Explain the mathematical formulation of quality (Q = P/E), foundational definitions by major quality gurus (Deming, Juran, Crosby, Feigenbaum, ISO 9000), and David Garvin's five strategic approaches to defining quality.",
      "blocks": [
        {
          "type": "h3",
          "text": "Mathematical Formulation of Quality (The Quality Ratio)"
        },
        {
          "type": "p",
          "text": "In total quality management, quality (Q) is mathematically formulated as the ratio of realized operational performance (P) to customer expectation (E):"
        },
        {
          "type": "quote",
          "text": "Q = P / E"
        },
        {
          "type": "ul",
          "items": [
            "P (Performance): The actual, measurable output, functional capability, and operational efficiency delivered by the product or service.",
            "E (Expectations): The explicit specifications, implicit expectations, and perceived value anticipated by the customer based on price point, brand promises, and market claims.",
            "Q (Quality Evaluation Index): If Q > 1.0, realized performance exceeds customer expectations, producing customer delight; if Q = 1.0, performance meets expectations exactly, resulting in basic customer satisfaction; if Q < 1.0, performance falls short of expectations, and the output is classified as defective or substandard."
          ]
        },
        {
          "type": "h3",
          "text": "Foundational Quality Definitions by Quality Pioneers"
        },
        {
          "type": "table",
          "headers": [
            "Quality Pioneer / Authority",
            "Core Quality Philosophy & Definition",
            "Strategic Focus"
          ],
          "rows": [
            [
              "ISO 9000:2015",
              "The degree to which a set of inherent characteristics of an object fulfils requirements.",
              "International standard compliance and process consistency."
            ],
            [
              "Joseph M. Juran",
              "'Fitness for use' \u2014 Quality consists of product features that respond to customer needs and freedom from deficiencies.",
              "Customer utility, avoidance of chronic waste, and the Juran Trilogy (Planning, Control, Improvement)."
            ],
            [
              "Philip B. Crosby",
              "'Conformance to requirements' \u2014 Quality is measured strictly by zero defects against established specifications; 'Quality is Free.'",
              "Prevention over inspection, Zero Defects standard, and Price of Nonconformance (PONC)."
            ],
            [
              "W. Edwards Deming",
              "A predictable degree of uniformity and dependability at low cost and suited to the market, achieved by reducing process variation.",
              "Systemic management transformation, 14 Points, and PDCA continuous improvement cycle."
            ],
            [
              "Armand V. Feigenbaum",
              "The total composite product and service characteristics through which the product in use will meet customer expectations.",
              "Total Quality Control (TQC) spanning marketing, engineering, manufacturing, and field service."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "David A. Garvin's Five Strategic Approaches to Quality"
        },
        {
          "type": "table",
          "headers": [
            "Strategic Approach",
            "Core Concept & Philosophy",
            "Operational Manifestation"
          ],
          "rows": [
            [
              "1. Transcendent Approach",
              "Quality is innate excellence, universally recognizable through direct subjective experience, though difficult to define precisely.",
              "Artistic craftsmanship, luxury branding, uncompromising aesthetic standards."
            ],
            [
              "2. Product-Based Approach",
              "Quality is a precise, measurable variable based on the presence or quantity of specific product attributes.",
              "High thread-count cotton, higher processing speed (GHz), higher fuel mileage (km/L)."
            ],
            [
              "3. User-Based Approach",
              "Quality lies in the eyes of the beholder; highly personalized satisfaction of individual user preferences.",
              "Customized software configurations, tailored customer service experiences."
            ],
            [
              "4. Manufacturing-Based Approach",
              "Quality is strict conformance to engineering blueprints, tolerances, and design specifications; 'making it right the first time.'",
              "Statistical process control, zero dimensional deviation, elimination of rework."
            ],
            [
              "5. Value-Based Approach",
              "Quality is defined in terms of costs and prices; providing acceptable performance at an acceptable price.",
              "Target costing, high performance-to-price ratio products meeting consumer budget constraints."
            ]
          ]
        }
      ]
    },
    {
      "id": "om01-eq-2",
      "number": 2,
      "title": "Dimensions of Quality: Garvin's 8 Product Dimensions vs. SERVQUAL Service Dimensions",
      "marks": 14,
      "relatedSlugs": [
        "dimensions-of-quality-garvin-servqual"
      ],
      "question": "Compare and explain David Garvin's eight dimensions of product quality with Parasuraman, Zeithaml, and Berry's five SERVQUAL dimensions of service quality, providing operational examples for each.",
      "blocks": [
        {
          "type": "h3",
          "text": "Garvin's Eight Dimensions of Product Quality"
        },
        {
          "type": "table",
          "headers": [
            "Product Dimension",
            "Operational Definition",
            "Practical Manufacturing Example"
          ],
          "rows": [
            [
              "1. Performance",
              "Primary operating characteristics and core functional capabilities of a product.",
              "A high-speed laser printer outputting 45 pages per minute at 1200 DPI resolution."
            ],
            [
              "2. Features",
              "Secondary characteristics that supplement the basic functioning of the product.",
              "An automotive infotainment unit featuring Apple CarPlay, wireless charging, and voice control."
            ],
            [
              "3. Reliability",
              "Probability of a product functioning successfully over a specified period under stated operating conditions without breakdown (MTBF).",
              "An aircraft turbine engine operating for 20,000 flight hours without unscheduled maintenance."
            ],
            [
              "4. Conformance",
              "Degree to which a product's design and operating characteristics meet established engineering blueprints and tolerances.",
              "A CNC-machined automotive crankshaft held to an exact diameter of 40.000 mm \u00b1 0.005 mm."
            ],
            [
              "5. Durability",
              "Measure of product life; amount of use derived before physical deterioration dictates replacement over repair.",
              "A cast-iron industrial pump housing operating for 30 years in an aggressive chemical processing environment."
            ],
            [
              "6. Serviceability",
              "Speed, courtesy, competence, and ease of product repair and maintenance.",
              "An electric delivery van with modular battery modules designed for swap-out in under 10 minutes."
            ],
            [
              "7. Aesthetics",
              "Subjective sensory evaluation including visual appearance, tactile feel, sound profile, taste, or aroma.",
              "The acoustic dampening and tactile feel of soft-touch dashboard materials in a luxury passenger vehicle."
            ],
            [
              "8. Perceived Quality",
              "Subjective assessment based on brand reputation, corporate image, and indirect quality signals.",
              "A hospital purchasing diagnostic imaging hardware based on the manufacturer's 50-year reputation."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Parasuraman, Zeithaml, and Berry's SERVQUAL Dimensions of Service Quality"
        },
        {
          "type": "table",
          "headers": [
            "Service Dimension",
            "Operational Definition",
            "Practical Service Industry Example"
          ],
          "rows": [
            [
              "1. Tangibles",
              "Physical facilities, equipment, communication materials, and clean appearance of personnel.",
              "Clean, sterile hospital treatment suites equipped with modern digital monitoring displays."
            ],
            [
              "2. Reliability",
              "Ability to perform the promised service dependably, accurately, and without administrative errors.",
              "An automated securities exchange clearing 100,000 trades per second without reconciliation errors."
            ],
            [
              "3. Responsiveness",
              "Willingness to help customers and provide prompt, agile, and enthusiastic service.",
              "An emergency roadside assistance team arriving at a breakdown scene within 15 minutes of dispatch."
            ],
            [
              "4. Assurance",
              "Knowledge, courtesy, and technical competence of employees that inspire trust and confidence.",
              "A board-certified wealth manager explaining complex portfolio risk mitigations clearly."
            ],
            [
              "5. Empathy",
              "Caring, individualized, and compassionate attention given to customers.",
              "A specialized healthcare concierge providing personalized schedule coordination for elderly patients."
            ]
          ]
        }
      ]
    },
    {
      "id": "om01-eq-3",
      "number": 3,
      "title": "Evolution of Quality: Traditional Quality Control vs. Total Quality Management (TQM)",
      "marks": 14,
      "relatedSlugs": [
        "traditional-qc-vs-total-quality-management-tqm"
      ],
      "question": "Contrast the traditional approach to quality control (previous state) with Total Quality Management (TQM) across core organizational elements.",
      "blocks": [
        {
          "type": "h3",
          "text": "The Paradigm Shift from Inspection to Total Quality Management"
        },
        {
          "type": "p",
          "text": "Total Quality Management (TQM) is an organization-wide management philosophy that continuously improves the quality of all products, services, processes, and corporate culture to achieve customer delight and long-term business sustainability. It fundamentally overturns the legacy 'inspection-and-sorting' mentality of traditional mass manufacturing."
        },
        {
          "type": "h3",
          "text": "Comparative Architecture: Previous State vs. Total Quality Management"
        },
        {
          "type": "table",
          "headers": [
            "Quality Element",
            "Previous State (Traditional Approach)",
            "Total Quality Management (TQM)"
          ],
          "rows": [
            [
              "Quality Definition",
              "Product-oriented; conformance to internal blueprints and tolerances.",
              "Customer-oriented; meeting or exceeding internal and external customer expectations."
            ],
            [
              "Strategic Priority",
              "Secondary to cost and schedule; quality compromised to meet shipping deadlines.",
              "First priority among equal business objectives; built into the process upfront."
            ],
            [
              "Decision Horizon",
              "Short-term driven; reaction to daily line crises and quarterly output quotas.",
              "Long-term driven; strategic planning for sustainable process capability."
            ],
            [
              "Operational Emphasis",
              "Detection via post-production inspection, sorting, and scrapping defective units.",
              "Prevention via robust product design, process engineering, and mistake-proofing (Poka-yoke)."
            ],
            [
              "Error Philosophy",
              "Operations accept an 'Allowable Defect Rate' / Acceptable Quality Level (AQL).",
              "Target is Zero Defects; relentless continuous reduction of process variation."
            ],
            [
              "Responsibility",
              "Quality Control (QC) inspection department is solely accountable.",
              "Universal accountability; every employee, manager, and supplier owns quality."
            ],
            [
              "Problem Solving",
              "Unstructured firefighting; isolated by departments and blame-driven.",
              "Systematic root-cause analysis via cross-functional teams and statistical tools."
            ],
            [
              "Procurement Strategy",
              "Adversarial; lowest purchase price tag through multiple competing vendors.",
              "Collaborative partnerships; Total Cost of Ownership (TCO) with few certified vendors."
            ],
            [
              "Manager's Role",
              "Directive, autocratic supervision; enforcer of rigid production quotas.",
              "Facilitative leadership; coach, empowerer, and remover of operational barriers."
            ],
            [
              "Customer Focus",
              "Passive; handling customer warranty claims and complaints reactively.",
              "Active; proactive capture of Voice of the Customer (VOC) to drive product design."
            ]
          ]
        }
      ]
    },
    {
      "id": "om01-eq-4",
      "number": 4,
      "title": "The Benchmarking Process: Twelve Stages (AT&T Model) and Seven Types of Benchmarking",
      "marks": 14,
      "relatedSlugs": [
        "benchmarking-twelve-stages-seven-types"
      ],
      "question": "Define benchmarking, explain the Twelve Stages of Benchmarking based on the AT&T model, and analyze the Seven Types of Benchmarking with practical industry examples.",
      "blocks": [
        {
          "type": "h3",
          "text": "Definition and Strategic Role of Benchmarking"
        },
        {
          "type": "p",
          "text": "Benchmarking is the continuous, systematic search for and implementation of industry best practices that lead to superior performance by measuring products, services, operational workflows, and corporate strategies against recognized industry leaders or world-class organizations."
        },
        {
          "type": "h3",
          "text": "The Twelve Stages of Benchmarking (AT&T Model)"
        },
        {
          "type": "ol",
          "items": [
            "Stage 1: Determine Clients Who Will Use the Information \u2014 Identify internal process owners, executive champions, and operational units who will utilize the benchmarking findings to execute organizational change.",
            "Stage 2: Advance Clients from Literacy to Champion Stage \u2014 Train designated managers on benchmarking methodologies, securing committed leadership and overcoming organizational inertia.",
            "Stage 3: Test the Environment \u2014 Assess organizational readiness, cultural receptivity, resource availability, and operational willingness to adopt external best practices.",
            "Stage 4: Determine Urgency \u2014 Evaluate business criticality; verify that the benchmarking exercise addresses strategic bottlenecks rather than low-impact administrative tasks.",
            "Stage 5: Determine Scope and Type of Benchmarking Needed \u2014 Establish boundary limits, Key Performance Indicators (KPIs), work breakdown structures, and select the specific benchmarking mode.",
            "Stage 6: Select and Prepare the Team \u2014 Assemble a cross-functional team of process operators, technical experts, and analytical specialists; define clear project charters.",
            "Stage 7: Overlay Benchmarking Process onto Business Planning Process \u2014 Synchronize benchmarking milestones, resource allocations, and deliverables directly with the organization's annual strategic planning cycle.",
            "Stage 8: Develop the Benchmarking Plans \u2014 Identify benchmark partners, construct rigorous data collection protocols, design survey questionnaires, and schedule on-site visits.",
            "Stage 9: Analyse the Data \u2014 Quantify performance gaps, normalize metrics across organizations, isolate process enablers, and identify root causes of performance differentials.",
            "Stage 10: Integrate Recommended Actions \u2014 Translate benchmarking insights into concrete operational redesign proposals; secure executive approval and functional alignment.",
            "Stage 11: Take Action \u2014 Implement process modifications, deploy new technologies, revise operating procedures, and execute change management plans.",
            "Stage 12: Continue Improvement \u2014 Establish institutionalized measurement controls, recalibrate benchmarks periodically against evolving world-class standards, and sustain learning."
          ]
        },
        {
          "type": "h3",
          "text": "The Seven Types of Benchmarking"
        },
        {
          "type": "table",
          "headers": [
            "Benchmarking Type",
            "Strategic Focus & Scope",
            "Industry Example"
          ],
          "rows": [
            [
              "1. Strategic Benchmarking",
              "Examining how leading global corporations compete, focusing on long-term corporate strategies, business model transformations, and core competencies.",
              "An automotive OEM studying how tech giants transition from hardware sales to recurring software mobility subscriptions."
            ],
            [
              "2. Performance (Competitive)",
              "Direct comparison of specific product/service performance characteristics, technical specifications, and pricing against direct market competitors.",
              "A smartphone maker measuring battery discharge rates, thermal dissipation, and camera resolution against its primary rival."
            ],
            [
              "3. Process Benchmarking",
              "Comparing discrete operational processes and work workflows against best-in-class process owners regardless of industry sector.",
              "A hospital emergency department benchmarking its rapid patient intake and triage processes against Formula 1 pit crew coordination."
            ],
            [
              "4. Functional Benchmarking",
              "Comparing a specific corporate function (e.g., procurement, billing, logistics) with leading practitioners in similar functional domains.",
              "An international airline benchmarking its revenue yield management and reservation algorithms against global luxury hotel chains."
            ],
            [
              "5. Generic Benchmarking",
              "Studying common, non-industry-specific work processes across completely unrelated business sectors to achieve breakthrough innovation.",
              "A retail banking chain studying the automated barcoding and sorting mechanisms of Federal Express to accelerate check clearance."
            ],
            [
              "6. Internal Benchmarking",
              "Comparing similar operations, business units, or manufacturing plants located in different regions within the same corporate entity.",
              "A semiconductor MNC comparing wafer yield rates and contamination controls between its Singapore and Oregon fabrication cleanrooms."
            ],
            [
              "7. External / International",
              "Benchmarking across international borders to discover world-class operational standards, overcoming domestic industry blind spots.",
              "A domestic rail transit agency analyzing the predictive maintenance schedules and signaling protocols of the Japanese Shinkansen bullet train."
            ]
          ]
        }
      ]
    },
    {
      "id": "om01-eq-5",
      "number": 5,
      "title": "Voice of the Customer (VOC) and the Kano Model of Customer Satisfaction",
      "marks": 14,
      "relatedSlugs": [
        "voice-of-customer-voc-kano-model"
      ],
      "question": "Explain the methods of capturing the Voice of the Customer (VOC), and analyze the Kano Model of Customer Satisfaction, its requirement categories, and the concept of dynamic requirement decay.",
      "blocks": [
        {
          "type": "h3",
          "text": "Capturing the Voice of the Customer (VOC)"
        },
        {
          "type": "p",
          "text": "The Voice of the Customer (VOC) is the systematic process of gathering, analyzing, and translating customer requirements, expectations, and perceptions into concrete engineering specifications. Organizations deploy both proactive and reactive feedback mechanisms:"
        },
        {
          "type": "ul",
          "items": [
            "Proactive Feedback Mechanisms: Structured customer satisfaction surveys (Likert scales evaluating importance vs. satisfaction), in-depth focus groups, customer advisory boards, and contextual inquiry (observing customers using products in actual operating environments).",
            "Reactive Feedback Mechanisms: Warranty claim databases, field failure logs, customer complaint registers, return merchandise authorizations (RMA), and digital social media sentiment analysis."
          ]
        },
        {
          "type": "h3",
          "text": "The Kano Model of Customer Satisfaction (Noriaki Kano)"
        },
        {
          "type": "p",
          "text": "Developed by Professor Noriaki Kano, this model establishes that customer satisfaction does not correlate linearly with product performance; different types of requirements produce fundamentally distinct psychological responses in customers."
        },
        {
          "type": "table",
          "headers": [
            "Requirement Category",
            "Customer Psychological Perception",
            "Satisfaction Relationship",
            "Practical Example"
          ],
          "rows": [
            [
              "1. Must-Be / Basic Requirements (Dissatisfiers)",
              "Inherent, unspoken baseline requirements taken for granted. Customers only notice them when missing.",
              "Absence causes extreme dissatisfaction; full presence merely brings customer to neutral (satisfaction <= 0).",
              "Functional hydraulic brakes in a car; clean bed linens and running water in a hotel room."
            ],
            [
              "2. One-Dimensional / Performance (Satisfiers)",
              "Explicit, spoken requirements directly articulated by the customer during procurement.",
              "Linear correlation: higher execution yields higher satisfaction; lower execution yields dissatisfaction.",
              "Fuel efficiency (km/L) in a vehicle; battery operating life (hours) in a laptop; download speeds in internet broadband."
            ],
            [
              "3. Attractive / Exciter (Delighters)",
              "Latent, unspoken, and unexpected innovations that surprise the customer.",
              "Absence causes zero dissatisfaction (not anticipated); presence produces exponential customer delight.",
              "First smartphone capacitive touchscreens; complimentary luxury airport pickup service for auto servicing."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "The Dynamic Decay Cycle of the Kano Model"
        },
        {
          "type": "p",
          "text": "Customer expectations are dynamic and subject to temporal erosion. Over time, an 'Attractive / Delighter' feature inevitably becomes a standardized 'One-Dimensional / Performance' expectation, and ultimately decays into an unspoken 'Must-Be / Basic' baseline requirement. For example, remote central locking in automobiles began as an exciter feature in the 1990s, transitioned into a competitive performance comparison in the 2000s, and is now a non-negotiable basic requirement in all vehicles."
        }
      ]
    },
    {
      "id": "om01-eq-6",
      "number": 6,
      "title": "Quality Function Deployment (QFD) and the House of Quality (HOQ) Architecture",
      "marks": 14,
      "relatedSlugs": [
        "quality-function-deployment-qfd-house-of-quality"
      ],
      "question": "Explain Quality Function Deployment (QFD), the structural components of the House of Quality (HOQ) matrix, and the four-phase QFD translation cascade.",
      "blocks": [
        {
          "type": "h3",
          "text": "Concept and Strategic Purpose of QFD and HOQ"
        },
        {
          "type": "p",
          "text": "Quality Function Deployment (QFD), pioneered by Yoji Akao in Japan, is a structured cross-functional methodology that systematically translates customer requirements (WHATs) into engineering technical specifications (HOWs), part characteristics, process parameters, and production controls. The primary analytical matrix of QFD is the House of Quality (HOQ)."
        },
        {
          "type": "h3",
          "text": "The Six Structural Components of the House of Quality (HOQ)"
        },
        {
          "type": "table",
          "headers": [
            "HOQ Room / Component",
            "Structural Location",
            "Analytical Function & Operational Role"
          ],
          "rows": [
            [
              "1. Customer Requirements (WHATs)",
              "Left Wall",
              "Hierarchically structured list of customer needs, expectations, and desired benefits collected via VOC."
            ],
            [
              "2. Engineering Descriptors (HOWs)",
              "Ceiling",
              "Measurable, actionable technical parameters and engineering characteristics developed by design teams to satisfy customer WHATs."
            ],
            [
              "3. Interrelationship Matrix",
              "Main Room / Center Grid",
              "Evaluates relationship strength between each WHAT and HOW using standardized weights: Strong (Weight 9), Medium (Weight 3), Weak (Weight 1), Blank (0)."
            ],
            [
              "4. Correlation Matrix (Roof)",
              "Triangular Roof",
              "Maps technical trade-offs and synergies between engineering HOWs: Strong Positive (++), Positive (+), Negative (-) conflict, Strong Negative (--)."
            ],
            [
              "5. Customer Competitive Assessment",
              "Right Wing",
              "Benchmarking company performance against competitors on a 1-5 scale; calculates Customer Importance, Target Value, Scale-Up Factor, and Absolute Weight: W_i = C_i \u00d7 S_i \u00d7 P_i."
            ],
            [
              "6. Technical Targets & Priorities",
              "Basement / Foundation",
              "Calculates Absolute Technical Importance: T_j = Sum(W_i \u00d7 R_ij), Relative Technical Weight %, and sets objective engineering target specifications."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "The Four-Phase QFD Translation Cascade"
        },
        {
          "type": "ol",
          "items": [
            "Phase 1: Product Planning (The House of Quality) \u2014 Translates Customer Requirements (WHATs) into Engineering Design Requirements (HOWs).",
            "Phase 2: Part Deployment \u2014 Carries Design Requirements forward as WHATs, translating them into specific Part Characteristics and Subsystem Specifications (HOWs).",
            "Phase 3: Process Planning \u2014 Carries Part Characteristics forward as WHATs, translating them into Manufacturing Process Parameters and Equipment Settings (HOWs).",
            "Phase 4: Production Planning \u2014 Carries Process Parameters forward as WHATs, translating them into Operator Work Instructions, Poka-yoke controls, and Quality Control Inspection Standards (HOWs)."
          ]
        }
      ]
    },
    {
      "id": "om01-eq-7",
      "number": 7,
      "title": "Failure Mode and Effects Analysis (FMEA): DFMEA vs. PFMEA and RPN Risk Modeling",
      "marks": 14,
      "relatedSlugs": [
        "failure-mode-and-effects-analysis-fmea-rpn"
      ],
      "question": "Define Failure Mode and Effects Analysis (FMEA), contrast Design FMEA (DFMEA) with Process FMEA (PFMEA), and explain the calculation and evaluation criteria of the Risk Priority Number (RPN).",
      "blocks": [
        {
          "type": "h3",
          "text": "Concept and Strategic Purpose of FMEA"
        },
        {
          "type": "p",
          "text": "Failure Mode and Effects Analysis (FMEA) is a systematic, proactive analytical engineering discipline used to identify potential failure modes in a product design or manufacturing process, assess the severity of their consequences, determine their root causes, and prioritize corrective actions before defects escape to the customer."
        },
        {
          "type": "h3",
          "text": "Comparative Architecture: DFMEA vs. PFMEA"
        },
        {
          "type": "table",
          "headers": [
            "Dimension",
            "Design FMEA (DFMEA)",
            "Process FMEA (PFMEA)"
          ],
          "rows": [
            [
              "Primary Analytical Focus",
              "Product design, geometry, material properties, component interfaces, and operating tolerances.",
              "Manufacturing and assembly operations, tooling, machines, operator errors, and work environment."
            ],
            [
              "Core Objective",
              "Ensure product functionality, safety, structural integrity, and reliability under anticipated end-use conditions.",
              "Ensure manufacturing process capability, repeatability, operator safety, and defect prevention during production."
            ],
            [
              "Root Causes Analyzed",
              "Material fatigue, thermal expansion mismatches, structural over-stressing, incorrect yield strength.",
              "Machine tool wear, incorrect feed rate, operator assembly error, calibration drift, part contamination."
            ],
            [
              "Corrective Actions",
              "Engineering Change Orders (ECO), design revisions, material specification upgrades, physical redundancy.",
              "Mistake-proofing (Poka-yoke), automated sensors, fixture redesign, revised standard operating procedures (SOP)."
            ],
            [
              "Execution Timing",
              "Completed prior to design freeze and production tooling release.",
              "Completed prior to production tooling installation and full-scale factory rollout."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Mathematical Formulation of Risk Priority Number (RPN)"
        },
        {
          "type": "p",
          "text": "The Risk Priority Number (RPN) is a quantitative metric ranging from 1 to 1,000 used to prioritize engineering intervention:"
        },
        {
          "type": "quote",
          "text": "RPN = Severity (S) \u00d7 Occurrence (O) \u00d7 Detection (D)"
        },
        {
          "type": "ul",
          "items": [
            "Severity (S): Evaluates the seriousness of the failure effect on the customer (1 = No noticeable effect, 10 = Hazardous failure without warning).",
            "Occurrence (O): Evaluates the statistical likelihood/frequency that a specific root cause will occur (1 = Extremely unlikely / < 1 in 1,500,000, 10 = Inevitable / > 1 in 2).",
            "Detection (D): Evaluates the probability that current design controls or quality inspection will catch the defect before release (1 = Certain detection, 10 = Absolute uncertainty of detection / zero inspection).",
            "The Severity Override Rule: Any failure mode receiving a Severity rating of 9 or 10 mandates immediate engineering redesign regardless of whether the calculated overall RPN is low."
          ]
        }
      ]
    },
    {
      "id": "om01-eq-8",
      "number": 8,
      "title": "Taguchi's Quality Loss Function: Philosophy, Mathematical Formulations, and Process Loss",
      "marks": 14,
      "relatedSlugs": [
        "taguchis-quality-loss-function-mathematics"
      ],
      "question": "Explain Genichi Taguchi's concept of quality loss, contrast it with the traditional goalpost mentality, derive the mathematical formulations for the three types of loss functions, and explain the average population loss equation.",
      "blocks": [
        {
          "type": "h3",
          "text": "Taguchi's Definition of Quality and Philosophy"
        },
        {
          "type": "p",
          "text": "Dr. Genichi Taguchi revolutionized quality engineering by defining quality negatively: 'Quality is the loss imparted by the product to society from the time the product is shipped.' This loss includes customer dissatisfaction, warranty repair costs, operational waste, and societal environmental impact."
        },
        {
          "type": "h3",
          "text": "Rejection of the Traditional 'Goalpost Mentality'"
        },
        {
          "type": "ul",
          "items": [
            "Traditional Goalpost Approach: Assumes zero financial loss as long as the measured product parameter falls anywhere inside the Upper and Lower Specification Limits (LSL <= y <= USL), and assumes a sudden step-function loss only when a unit falls outside limits.",
            "Taguchi Quadratic Loss Model: Asserts that financial loss begins immediately whenever a quality characteristic departs from the exact nominal target value m, increasing quadratically as deviation grows: L(y) = k(y - m)^2."
          ]
        },
        {
          "type": "h3",
          "text": "Mathematical Formulations of Taguchi Loss Functions"
        },
        {
          "type": "table",
          "headers": [
            "Loss Function Type",
            "Mathematical Formula",
            "Cost Constant (k)",
            "Practical Engineering Application"
          ],
          "rows": [
            [
              "1. Nominal-the-Best",
              "L(y) = k(y - m)^2",
              "k = A_0 / (Delta_0)^2",
              "Target is a specific finite nominal value m (e.g., shaft diameter, voltage output, chemical concentration)."
            ],
            [
              "2. Smaller-the-Better",
              "L(y) = k(y)^2",
              "k = A_0 / (y_0)^2",
              "Target is zero (m = 0; e.g., automotive exhaust emissions, surface roughness, electrical noise, defect rates)."
            ],
            [
              "3. Larger-the-Better",
              "L(y) = k(1 / y^2)",
              "k = A_0 \u00d7 (y_0)^2",
              "Target is infinity (m = infinity; e.g., tensile strength, battery operating life, weld fracture load)."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Average Quality Loss for a Process Population"
        },
        {
          "type": "p",
          "text": "For a manufacturing process producing a population of units with mean y_bar and process standard deviation sigma, the expected average loss per unit is:"
        },
        {
          "type": "quote",
          "text": "L_bar = k \u00d7 [ sigma^2 + (y_bar - m)^2 ]"
        },
        {
          "type": "p",
          "text": "Strategic Implication: Total societal quality loss can be minimized only when two conditions are simultaneously satisfied: (1) Process centering: The process average is shifted exactly to the target value (y_bar = m), and (2) Variation reduction: Process variance (sigma^2) is relentlessly reduced toward zero."
        }
      ]
    },
    {
      "id": "om01-eq-9",
      "number": 9,
      "title": "Strategic Purchasing and the Four-Tier Supplier Qualification Lifecycle",
      "marks": 14,
      "relatedSlugs": [
        "strategic-purchasing-supplier-qualification-lifecycle"
      ],
      "question": "Explain where quality begins in operations, the 1-10-100 Rule of Quality Costs, the differences between traditional and strategic purchasing, and the Four-Tier Supplier Qualification Lifecycle.",
      "blocks": [
        {
          "type": "h3",
          "text": "Where Quality Actually Begins: The Upstream Genesis"
        },
        {
          "type": "p",
          "text": "In modern operations management, quality begins upstream in Product Conceptual Design and Strategic Procurement / Supplier Relationships. Quality cannot be inspected into a finished product; it must be designed into the blueprint and built into purchased raw materials and sub-assemblies."
        },
        {
          "type": "h3",
          "text": "The 1-10-100 Rule of Quality Costs"
        },
        {
          "type": "table",
          "headers": [
            "Lifecycle Stage",
            "Cost Multiplier",
            "Operational Consequence & Meaning"
          ],
          "rows": [
            [
              "Design & Prevention Stage",
              "1x (Base Cost)",
              "Cost to catch and correct a design flaw on the CAD blueprint or during supplier selection."
            ],
            [
              "Manufacturing Assembly Stage",
              "10x (Internal Failure)",
              "Cost to catch, scrap, and rework a defective part internally on the factory production line."
            ],
            [
              "Customer Hands Stage",
              "100x (External Failure)",
              "Cost of handling warranty claims, product recalls, field service replacements, legal liability, and brand erosion once defects reach the customer."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Traditional Purchasing vs. Strategic Purchasing"
        },
        {
          "type": "table",
          "headers": [
            "Dimension",
            "Traditional Purchasing",
            "Strategic Purchasing"
          ],
          "rows": [
            [
              "Relationship Model",
              "Adversarial; arm's-length; zero-sum transaction focus.",
              "Collaborative; long-term mutual partnering and co-development."
            ],
            [
              "Supplier Base",
              "Large supply base to encourage aggressive price bidding.",
              "Rationalized, small base of certified, high-capability suppliers."
            ],
            [
              "Primary Selection Metric",
              "Lowest unit purchase price tag.",
              "Lowest Total Cost of Ownership (TCO), quality capability, and reliability."
            ],
            [
              "Quality Verification",
              "Massive receiving inspection, counting, and sorting at dock.",
              "Supplier quality certification; direct dock-to-stock delivery without receiving inspection."
            ],
            [
              "Design Involvement",
              "Late; suppliers bid after blueprints are finalized.",
              "Early Supplier Involvement (ESI) during concept and prototype stages."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "The Four-Tier Supplier Qualification Lifecycle"
        },
        {
          "type": "ol",
          "items": [
            "Tier 1: Initial Screening & Prequalification \u2014 Assessing supplier financial health, management reputation, plant capacity, and ISO 9001 / IATF 16949 certifications.",
            "Tier 2: On-Site Technical & Quality Auditing \u2014 Rigorous factory evaluation covering statistical process control (SPC), calibration systems, preventive maintenance, and Poka-yoke mistake-proofing.",
            "Tier 3: Quantitative Performance Scorecard Rating \u2014 Continuous rating across weighted pillars: Composite Score = (0.40 \u00d7 Quality PPM) + (0.30 \u00d7 Delivery OTIF) + (0.20 \u00d7 Cost Competitiveness) + (0.10 \u00d7 Service & Collaboration).",
            "Tier 4: Supplier Certification & Dock-to-Stock Status \u2014 Suppliers maintaining scores > 95% achieve Certified Status, granting dock-to-stock privileges and first-look access to future contracts."
          ]
        }
      ]
    },
    {
      "id": "om01-eq-10",
      "number": 10,
      "title": "The Seven Basic Quality Control (QC) Tools and Sequence of Use",
      "marks": 14,
      "relatedSlugs": [
        "seven-basic-quality-control-qc-tools"
      ],
      "question": "Explain the Seven Basic Quality Control (QC) Tools, their diagnostic functions, and their step-by-step sequence of use in a structured quality investigation.",
      "blocks": [
        {
          "type": "h3",
          "text": "The Seven Basic Quality Control (QC) Tools"
        },
        {
          "type": "table",
          "headers": [
            "QC Tool",
            "Analytical Purpose & Mechanism",
            "Operational Diagnostic Function"
          ],
          "rows": [
            [
              "1. Flowchart (Process Map)",
              "Graphical representation of all sequential steps, decision gates, and inputs in a process.",
              "Visualizes operational flow; identifies bottlenecks, redundancies, and inspection points."
            ],
            [
              "2. Check Sheet",
              "Standardized form designed for collecting and recording observational or defect data in real-time.",
              "Transforms raw shop-floor observations into structured quantitative counts (Defect-type, Measles chart)."
            ],
            [
              "3. Pareto Chart",
              "Dual-axis bar graph based on Juran's 80/20 Rule ranking defect categories in descending order.",
              "Separates the 'vital few' defect causes (accounting for 80% of losses) from the 'useful many'."
            ],
            [
              "4. Cause & Effect (Fishbone)",
              "Brainstorming diagram developed by Kaoru Ishikawa linking an effect to root causes across 5M+1E.",
              "Systematically investigates root causes across Manpower, Machine, Material, Method, Measurement, Environment."
            ],
            [
              "5. Histogram",
              "Bar graph displaying frequency distribution of continuous variable data.",
              "Visualizes process central tendency, spread, and shape (Normal, Skewed, Bimodal, Truncated)."
            ],
            [
              "6. Scatter Diagram",
              "Coordinate plot displaying relationship between two continuous variables.",
              "Tests mathematical correlation (Positive, Negative, Curvilinear, Zero) between process inputs and quality outputs."
            ],
            [
              "7. Control Chart",
              "Time-series line chart with Center Line and \u00b13 sigma statistical limits (UCL / LCL).",
              "Differentiates common cause random variation from assignable special cause instability."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Six-Phase Sequence of Use in a Quality Investigation"
        },
        {
          "type": "ol",
          "items": [
            "Phase 1: Process Mapping (Flowchart) \u2014 Map the end-to-end process to isolate investigation boundaries.",
            "Phase 2: Data Collection (Check Sheet) \u2014 Gather empirical, real-time defect counts and failure locations on the line.",
            "Phase 3: Defect Prioritization (Pareto Chart) \u2014 Plot defect frequencies to isolate the top 20% vital causes generating 80% of scrap costs.",
            "Phase 4: Root-Cause Investigation (Fishbone Diagram & 5 Whys) \u2014 Brainstorm and drill down into root causes across 5M+1E categories.",
            "Phase 5: Statistical Distribution & Correlation (Histogram & Scatter Plot) \u2014 Analyze parameter dispersion against specification limits and verify input-output correlation.",
            "Phase 6: Process Stabilization & Control (Control Chart) \u2014 Install statistical control charts to verify corrective action effectiveness and sustain long-term process capability."
          ]
        }
      ]
    },
    {
      "id": "om01-eq-11",
      "number": 11,
      "title": "Statistical Process Control (SPC) and Control Chart Architecture",
      "marks": 14,
      "relatedSlugs": [
        "statistical-process-control-spc-control-charts"
      ],
      "question": "Explain the theoretical principles of Statistical Process Control (SPC), differentiate between common and special causes of variation, and classify Variable versus Attribute control charts with their formulas.",
      "blocks": [
        {
          "type": "h3",
          "text": "Theoretical Foundations of SPC (Walter A. Shewhart)"
        },
        {
          "type": "p",
          "text": "Statistical Process Control (SPC) is the application of statistical methods to monitor, control, and improve process capability. Formulated by Walter A. Shewhart at Bell Laboratories, SPC establishes that all processes exhibit variation, categorized into two distinct types:"
        },
        {
          "type": "ul",
          "items": [
            "Common Cause (Chance / Natural) Variation: Inherent, random fluctuations present in a stable system (e.g., slight ambient temperature shifts, natural raw material variances); predictable within statistical limits (\u00b13 sigma).",
            "Special Cause (Assignable / Unnatural) Variation: External, non-random disturbances that destabilize the process (e.g., tool breakage, wrong raw material lot, operator error); causes unpredictability and out-of-control signals.",
            "Definition of Statistical Control: A process is in a state of statistical control when only common causes of variation are active."
          ]
        },
        {
          "type": "h3",
          "text": "Control Chart Mathematical Architecture (3-Sigma Basis)"
        },
        {
          "type": "p",
          "text": "Under the Central Limit Theorem and Gaussian normal distribution, 99.73% of sample observations fall within \u00b13 standard deviations of the mean under common cause conditions: Center Line (CL) = Process Average (mu), Upper Control Limit (UCL) = CL + 3 sigma, Lower Control Limit (LCL) = CL - 3 sigma."
        },
        {
          "type": "h3",
          "text": "Classification of Control Charts: Variable vs. Attribute"
        },
        {
          "type": "table",
          "headers": [
            "Category",
            "Chart Type",
            "Data Type & Sample Size",
            "Control Limit Formulas"
          ],
          "rows": [
            [
              "Variable (Continuous)",
              "X-bar & R Chart",
              "Subgroup averages and ranges (Sample size n = 2 to 9).",
              "X-bar: UCL = X_dbar + A_2*R_bar, LCL = X_dbar - A_2*R_bar\nR: UCL = D_4*R_bar, LCL = D_3*R_bar"
            ],
            [
              "Variable (Continuous)",
              "X-bar & s Chart",
              "Subgroup averages and standard deviations (Sample size n > 10).",
              "X-bar: UCL = X_dbar + A_3*s_bar, LCL = X_dbar - A_3*s_bar\ns: UCL = B_4*s_bar, LCL = B_3*s_bar"
            ],
            [
              "Variable (Continuous)",
              "I-MR Chart",
              "Individual observations and moving range (Sample size n = 1).",
              "I: UCL = X_bar + 2.66*MR_bar, LCL = X_bar - 2.66*MR_bar\nMR: UCL = 3.267*MR_bar, LCL = 0"
            ],
            [
              "Attribute (Discrete)",
              "p-Chart",
              "Proportion of nonconforming units (Variable subgroup size n_i).",
              "UCL = p_bar + 3*sqrt(p_bar*(1-p_bar)/n), LCL = max(0, p_bar - 3*sqrt(p_bar*(1-p_bar)/n))"
            ],
            [
              "Attribute (Discrete)",
              "np-Chart",
              "Number of nonconforming units (Constant subgroup size n).",
              "UCL = n*p_bar + 3*sqrt(n*p_bar*(1-p_bar)), LCL = max(0, n*p_bar - 3*sqrt(n*p_bar*(1-p_bar)))"
            ],
            [
              "Attribute (Discrete)",
              "c-Chart",
              "Count of defects per inspection unit (Constant unit size).",
              "UCL = c_bar + 3*sqrt(c_bar), LCL = max(0, c_bar - 3*sqrt(c_bar))"
            ],
            [
              "Attribute (Discrete)",
              "u-Chart",
              "Count of defects per inspection unit (Variable unit size n_i).",
              "UCL = u_bar + 3*sqrt(u_bar/n), LCL = max(0, u_bar - 3*sqrt(u_bar/n))"
            ]
          ]
        }
      ]
    },
    {
      "id": "om01-eq-12",
      "number": 12,
      "title": "The Seven New Management and Planning Tools (JUSE / MP Tools) and Integration Flow",
      "marks": 14,
      "relatedSlugs": [
        "seven-new-management-planning-tools-integration"
      ],
      "question": "Explain the Seven New Management and Planning Tools (JUSE / MP Tools) and describe their step-by-step integration sequence in solving complex operational and strategic challenges.",
      "blocks": [
        {
          "type": "h3",
          "text": "Origin and Purpose of the Seven New Management Tools"
        },
        {
          "type": "p",
          "text": "Developed in 1976 by a committee of the Union of Japanese Scientists and Engineers (JUSE), the Seven New Management and Planning Tools (also known as the 7 MP Tools) are designed to organize unstructured verbal data, analyze complex qualitative problems, foster strategic innovation, and execute multi-phase implementation projects."
        },
        {
          "type": "h3",
          "text": "The Seven New Management and Planning Tools"
        },
        {
          "type": "table",
          "headers": [
            "Tool Name",
            "Analytical Method",
            "Strategic Organizational Role"
          ],
          "rows": [
            [
              "1. Affinity Diagram (KJ Method)",
              "Gathers and organizes large volumes of unstructured brainstorming ideas, customer feedback, and verbal data into natural conceptual clusters.",
              "Breaks mental bottlenecks; creates bottom-up conceptual structure from raw chaos."
            ],
            [
              "2. Interrelationship Digraph",
              "Maps multi-directional cause-and-effect links among diverse factors using directional arrows.",
              "Distinguishes primary root drivers (high outgoing arrows) from outcome symptoms (high incoming arrows)."
            ],
            [
              "3. Tree Diagram (Systematic)",
              "Hierarchically decomposes a broad strategic goal into increasingly specific operational sub-tasks.",
              "Transforms 'What must be done' into 'How it can be executed' across 3-4 structural tiers."
            ],
            [
              "4. Matrix Diagram",
              "Systematic multi-dimensional grid evaluating relationships and responsibilities across tasks and functions.",
              "Allocates functional responsibility (L-shaped, T-shaped, X-shaped matrices) across departments."
            ],
            [
              "5. Prioritization Matrix",
              "L-shaped matrix scoring and ranking alternative solutions against weighted strategic criteria.",
              "Objectively selects the highest-impact implementation path under resource constraints."
            ],
            [
              "6. Process Decision Program Chart (PDPC)",
              "Contingency planning tree identifying potential failure modes and 'What-If' scenarios in a plan.",
              "Establishes proactive countermeasures before rolling out complex implementation plans."
            ],
            [
              "7. Arrow Diagram (Activity Network / CPM)",
              "Network graph sequencing tasks, dependencies, Earliest Start, Latest Finish, and Critical Path.",
              "Optimizes project scheduling, eliminates execution delays, and controls critical path milestones."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Step-by-Step Tool Integration Flow in Complex Problem Solving"
        },
        {
          "type": "ol",
          "items": [
            "Step 1 (Affinity Diagram) \u2014 The team brainstorms raw, unstructured qualitative issues surrounding a major challenge (e.g., frequent delayed shipments), organizing 80 ideas into thematic clusters (People, Systems, Machines, Logistics).",
            "Step 2 (Relations Diagram) \u2014 The team takes cluster headers and draws directional cause-and-effect arrows between them, identifying the node with the highest outgoing arrows as the Primary Root Driver (Inadequate supervisor training).",
            "Step 3 (Tree Diagram) \u2014 Taking the Primary Driver as the root objective, the team constructs a Tree Diagram asking 'How?', branching into sub-tasks (curriculum design, simulator training, certification audit).",
            "Step 4 (Matrix Diagram) \u2014 Sub-tasks from leaf nodes are mapped in an L-shaped matrix against departments (HR, Maintenance, Logistics, IT) to establish clear operational ownership.",
            "Step 5 (Prioritization Matrix) \u2014 Alternative software tools or training programs are scored against weighted criteria (Cost, Speed, Scalability) to establish the winning execution plan.",
            "Step 6 (PDPC Chart) \u2014 The chosen plan is mapped to anticipate 'What-If' failure scenarios (server downtime, vendor delays) with pre-approved countermeasures.",
            "Step 7 (Arrow Diagram) \u2014 Tasks and contingency buffers are scheduled into a CPM Activity Network, identifying the Critical Path to guarantee on-time project completion."
          ]
        }
      ]
    }
  ],
  "glossary": [
    {
      "id": "tqm-g1",
      "term": "Kaizen",
      "body": "Japanese philosophy of continuous, incremental improvement involving all employees from top executive management to shop-floor workers.",
      "topicSlug": "traditional-qc-vs-total-quality-management-tqm"
    },
    {
      "id": "tqm-g2",
      "term": "Poka-yoke",
      "body": "Japanese term for mistake-proofing or error-proofing mechanisms designed to prevent human and machine defects during operations.",
      "topicSlug": "traditional-qc-vs-total-quality-management-tqm"
    }
  ]
};
