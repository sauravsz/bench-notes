import type { Course } from "./types";

export const operationsResearchCourse: Course = {
  id: "604",
  slug: "operations-research",
  code: "604",
  title: "Operations Research & Business Excellence",
  category: "Core",
  description:
    "Mathematical modeling, Linear Programming Problems (LPP), Transportation & Assignment algorithms, Network Analysis (PERT/CPM), Queuing models, and Lean Six Sigma frameworks.",
  instructor: "Quantitative Faculty",
  accentColor: "#059669",
  units: [
    "Linear Programming & Optimization",
    "Transportation & Assignment Models",
    "Project Management (PERT & CPM)",
    "Decision Theory & Business Excellence",
  ],
  topics: [
    {
      id: "or-01",
      slug: "linear-programming-formulation",
      number: 1,
      title: "Linear Programming Problems (LPP) — Formulation and Graphical Method",
      unit: "Linear Programming & Optimization",
      summary:
        "Mathematical formulation of objective functions, decision variables, constraint inequalities, non-negativity restrictions, and graphical corner-point optimization.",
      tags: ["LPP", "optimization", "graphical method", "objective function", "constraints"],
      blocks: [
        {
          type: "p",
          text: "Operations Research (OR) applies scientific and mathematical methodology to complex decision-making problems, enabling optimal allocation of scarce resources (labor, capital, raw materials, machine capacity).",
        },
        {
          type: "h3",
          text: "1. The General Structure of a Linear Programming Model",
        },
        {
          type: "ul",
          items: [
            "**1. Decision Variables**: Mathematical symbols (e.g. X₁, X₂) representing quantifiable business choices (e.g., units of product A and product B to manufacture).",
            "**2. Objective Function**: The linear goal to be maximized (e.g., total profit Z = c₁X₁ + c₂X₂) or minimized (e.g., total cost Z = c₁X₁ + c₂X₂).",
            "**3. Structural Constraints**: Linear inequalities representing resource limitations (e.g., machine hours, labor hours, raw material availability: a₁₁X₁ + a₁₂X₂ ≤ b₁).",
            "**4. Non-Negativity Restriction**: X₁ ≥ 0, X₂ ≥ 0 (physical production cannot be negative).",
          ],
        },
      ],
    },
    {
      id: "or-02",
      slug: "pert-cpm-network-analysis",
      number: 2,
      title: "Project Management — Network Analysis via PERT and CPM",
      unit: "Project Management (PERT & CPM)",
      summary:
        "Critical Path Method (CPM) deterministic models vs. Project Evaluation & Review Technique (PERT) three-time estimate probabilistic models.",
      tags: ["PERT", "CPM", "critical path", "float", "slack", "crashing"],
      blocks: [
        {
          type: "p",
          text: "PERT and CPM are network-based project planning and control techniques designed to schedule interrelated activities, identify project bottlenecks, and minimize project duration.",
        },
        {
          type: "table",
          headers: ["Basis of Comparison", "CPM (Critical Path Method)", "PERT (Program Evaluation & Review Technique)"],
          rows: [
            [
              "Nature of Estimates",
              "Deterministic: Activity durations are known with high certainty based on historical data.",
              "Probabilistic: Activity durations are uncertain; uses three time estimates (Optimistic 'a', Most Likely 'm', Pessimistic 'b').",
            ],
            [
              "Formula for Duration",
              "Single fixed time estimate (t).",
              "Expected Time te = (a + 4m + b) / 6; Variance σ² = ((b - a) / 6)².",
            ],
            [
              "Primary Application",
              "Construction, industrial maintenance, repetitive engineering projects.",
              "R&D projects, aerospace exploration, new product development.",
            ],
          ],
        },
      ],
    },
  ],
  examQuestions: [
    {
      id: "or-q1",
      number: 1,
      title: "Formulation of LPP and Comparison of PERT vs CPM",
      question:
        "Define Operations Research. Explain the steps in formulating a Linear Programming Model. Differentiate between PERT and CPM with real-world applications.",
      relatedSlugs: ["linear-programming-formulation", "pert-cpm-network-analysis"],
      blocks: [
        {
          type: "p",
          text: "Operations Research provides mathematical algorithms to evaluate complex business tradeoffs and achieve maximum operational efficiency.",
        },
      ],
    },
  ],
  glossary: [
    {
      id: "or-g1",
      term: "Critical Path",
      body: "The longest continuous sequence of connected activities in a project network diagram with zero total float; determines the minimum total time required to complete the project.",
      topicSlug: "pert-cpm-network-analysis",
    },
  ],
};
