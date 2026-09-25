import type { Course } from "./types";

export const salesManagementCourse: Course = {
  id: "mm-02",
  slug: "sales-management",
  code: "MM 02",
  title: "Sales Management",
  category: "Marketing",
  description:
    "Design of sales organizations, personal selling methodology, sales territory planning, quota allocation, sales force compensation, Key Account Management (KAM), and CRM analytics.",
  instructor: "Marketing Faculty",
  accentColor: "#EA580C",
  units: [
    "Sales Process & Personal Selling",
    "Sales Territory & Quota Planning",
    "Sales Force Staffing, Motivation & Compensation",
    "Key Account Management & Sales Performance Evaluation",
  ],
  topics: [
    {
      id: "sales-01",
      slug: "personal-selling-process",
      number: 1,
      title: "The 7-Step Personal Selling Process",
      unit: "Sales Process & Personal Selling",
      summary:
        "The step-by-step methodology of professional personal selling: Prospecting, Pre-approach, Approach, Presentation, Handling Objections, Closing, and Follow-up.",
      tags: ["selling", "prospecting", "objections", "closing", "presentation", "spin"],
      blocks: [
        {
          type: "p",
          text: "Personal selling is an interpersonal communication process in which a sales representative identifies, discovers, and satisfies customer needs to mutual, long-term commercial benefit.",
        },
        {
          type: "h3",
          text: "The 7 Steps of Personal Selling",
        },
        {
          type: "ol",
          items: [
            "**1. Prospecting and Qualifying**: Identifying potential customers (leads) and qualifying them based on MAD criteria (Money, Authority, Desire/Need).",
            "**2. Pre-approach (Pre-Call Planning)**: Conducting research on the prospect's industry, company performance, purchasing history, and decision-making unit (DMU).",
            "**3. Approach**: Making initial contact, building professional rapport, establishing credibility, and capturing attention within the opening 30 seconds.",
            "**4. Presentation and Demonstration**: Demonstrating how the product or solution solves the client's specific pain points (e.g. using the FAB model: Features, Advantages, Benefits, or the SPIN Selling model).",
            "**5. Overcoming / Handling Objections**: Answering customer hesitation, price resistance, and skepticism using techniques like the 'Feel-Felt-Found' method or converting objections into reasons to buy.",
            "**6. Closing the Sale**: Asking for the order. Techniques include the Assumptive Close, Alternative-Choice Close, Urgency Close, and Summary Close.",
            "**7. Follow-Up and Account Maintenance**: Ensuring smooth post-sale implementation, training, customer onboarding, and relationship nurturing to drive repeat orders and client referrals.",
          ],
        },
      ],
    },
  ],
  examQuestions: [
    {
      id: "sales-q1",
      number: 1,
      title: "The Personal Selling Process and Handling Objections",
      question:
        "Explain the 7 steps of the Personal Selling Process. Describe key techniques used by B2B sales professionals to overcome customer price objections.",
      relatedSlugs: ["personal-selling-process"],
      blocks: [
        {
          type: "p",
          text: "Effective sales management integrates structured personal selling discipline with consultative negotiation frameworks.",
        },
      ],
    },
  ],
  glossary: [
    {
      id: "sales-g1",
      term: "Key Account Management (KAM)",
      body: "A strategic sales approach focused on building long-term, customized relationships with an enterprise's most commercially valuable clients.",
      topicSlug: "personal-selling-process",
    },
  ],
};
