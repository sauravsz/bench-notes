import type { Course } from "./types";

export const tqmCourse: Course = {
  id: "om-01",
  slug: "tqm",
  code: "OM 01",
  title: "Total Quality Management",
  category: "Operations",
  description:
    "Comprehensive study of TQM philosophy, quality gurus (Deming, Juran, Crosby), 7 QC Tools, Cost of Quality (COQ), Kaizen, 5S, Six Sigma DMAIC, and ISO 9001 standards.",
  instructor: "Operations Faculty",
  accentColor: "#0D9488",
  units: [
    "Principles & Philosophies of TQM",
    "Statistical Quality Control & 7 QC Tools",
    "Continuous Improvement: Kaizen, 5S & Six Sigma",
    "Quality Standards (ISO 9001 & Baldrige Award)",
  ],
  topics: [
    {
      id: "tqm-01",
      slug: "tqm-principles-and-gurus",
      number: 1,
      title: "Foundations of Total Quality Management and the 7 QC Tools",
      unit: "Principles & Philosophies of TQM",
      summary:
        "TQM core pillars (Customer focus, Total involvement, Continuous improvement) and the Seven Basic Statistical Quality Control Tools.",
      tags: ["TQM", "deming", "7 QC tools", "fishbone", "pareto", "six sigma"],
      blocks: [
        {
          type: "p",
          text: "Total Quality Management (TQM) is an organization-wide management philosophy aimed at continuously improving the quality of products, processes, and services to exceed customer expectations.",
        },
        {
          type: "h3",
          text: "1. The 7 Basic Tools of Quality Control (Ishikawa's 7 QC Tools)",
        },
        {
          type: "table",
          headers: ["Tool Name", "Purpose & Mechanism", "Manufacturing / Service Application"],
          rows: [
            [
              "1. Ishikawa (Fishbone) Diagram",
              "Cause-and-Effect diagram categorizing potential root causes into 6Ms (Man, Machine, Material, Method, Measurement, Milieu).",
              "Diagnosing root causes of automobile engine assembly defects.",
            ],
            [
              "2. Pareto Chart",
              "Bar graph arranged in descending frequency with a cumulative percentage line, based on the 80/20 rule (80% of defects stem from 20% of causes).",
              "Prioritizing the vital few quality defects over the trivial many.",
            ],
            [
              "3. Check Sheet",
              "Structured, standardized form for real-time data collection at the workstation.",
              "Recording daily frequency of packaging tears on a production line.",
            ],
            [
              "4. Histogram",
              "Frequency distribution bar chart displaying data spread and central tendency.",
              "Verifying whether bottle-filling liquid volumes follow a normal distribution.",
            ],
            [
              "5. Scatter Diagram",
              "Plot of two continuous variables to detect correlation (positive, negative, or zero).",
              "Testing the correlation between furnace temperature and steel tensile strength.",
            ],
            [
              "6. Control Charts (Shewhart)",
              "Time-series chart with Upper Control Limit (UCL) and Lower Control Limit (LCL) to distinguish common-cause variation from special-cause variation.",
              "Monitoring process stability in pharmaceutical tablet weight.",
            ],
            [
              "7. Flowchart / Stratification",
              "Visual step-by-step mapping of a process or sorting data into homogeneous strata.",
              "Mapping customer onboarding steps to eliminate non-value-adding delays.",
            ],
          ],
        },
      ],
    },
  ],
  examQuestions: [
    {
      id: "tqm-q1",
      number: 1,
      title: "The 7 QC Tools and Cost of Quality (COQ) Framework",
      question:
        "Explain the 7 QC Tools of Total Quality Management with examples. Detail the Cost of Quality (COQ) PAF Model (Prevention, Appraisal, Failure costs).",
      relatedSlugs: ["tqm-principles-and-gurus"],
      blocks: [
        {
          type: "p",
          text: "The Cost of Quality (COQ) framework divides quality costs into Conformance Costs (Prevention and Appraisal) and Non-Conformance Costs (Internal Failure and External Failure).",
        },
      ],
    },
  ],
  glossary: [
    {
      id: "tqm-g1",
      term: "Kaizen",
      body: "Japanese philosophy of continuous, incremental improvement involving all employees from top executive management to assembly line workers.",
      topicSlug: "tqm-principles-and-gurus",
    },
  ],
};
