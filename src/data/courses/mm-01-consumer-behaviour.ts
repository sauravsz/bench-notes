import type { Course } from "./types";

export const consumerBehaviourCourse: Course = {
  id: "mm-01",
  slug: "consumer-behaviour",
  code: "MM 01",
  title: "Consumer Behaviour",
  category: "Marketing",
  description:
    "Psychological, sociological, and cognitive drivers of consumer decision-making, perception, motivation theories, attitude modeling, and post-purchase cognitive dissonance.",
  instructor: "Marketing Faculty",
  accentColor: "#DB2777",
  units: [
    "Introduction to Consumer Decision Making",
    "Internal Drivers: Perception, Learning & Motivation",
    "External Influences: Culture, Family & Reference Groups",
    "Post-Purchase Dynamics & Consumerism",
  ],
  topics: [
    {
      id: "cb-01",
      slug: "consumer-decision-making-process",
      number: 1,
      title: "The 5-Stage Consumer Decision-Making Process",
      unit: "Introduction to Consumer Decision Making",
      summary:
        "The cognitive progression from Problem Recognition through Information Search, Alternative Evaluation, Purchase Decision, and Post-Purchase Evaluation.",
      tags: ["decision making", "cognitive dissonance", "evoked set", "heuristics"],
      blocks: [
        {
          type: "p",
          text: "Consumer behavior is the study of how individuals, groups, and organizations select, buy, use, and dispose of goods, services, ideas, or experiences to satisfy their needs and desires.",
        },
        {
          type: "h3",
          text: "The 5-Stage Classical Decision Process",
        },
        {
          type: "ol",
          items: [
            "**1. Problem / Need Recognition**: Consumer perceives a significant gap between their actual state and desired state, triggered by internal stimuli (hunger, thirst) or external stimuli (advertising, peer influence).",
            "**2. Information Search**: Internal memory retrieval vs. External search (personal sources, commercial ads, public reviews, experiential trials). Leads to the creation of the *Evoked Set* (the small group of brands seriously considered).",
            "**3. Evaluation of Alternatives**: Processing brand choices using evaluative criteria, brand beliefs, and decision rules (Compensatory vs Non-compensatory models like Lexicographic and Conjunctive rules).",
            "**4. Purchase Decision**: Executing the purchase; influenced by situational factors (store ambience, stock availability, financing terms) and attitudes of others.",
            "**5. Post-Purchase Evaluation & Cognitive Dissonance**: Evaluating actual product performance against pre-purchase expectations. Performance exceeding expectations leads to customer delight; performance falling short leads to dissatisfaction and **Post-Purchase Cognitive Dissonance**.",
          ],
        },
      ],
    },
  ],
  examQuestions: [
    {
      id: "cb-q1",
      number: 1,
      title: "The Consumer Decision Journey and Cognitive Dissonance",
      question:
        "Explain the 5 stages of the Consumer Decision-Making Process. What is Post-Purchase Cognitive Dissonance and how can marketers reduce it?",
      relatedSlugs: ["consumer-decision-making-process"],
      blocks: [
        {
          type: "p",
          text: "Post-purchase cognitive dissonance is the psychological tension or second-guessing a consumer experiences after making a high-involvement purchase decision between competing attractive alternatives.",
        },
        {
          type: "h3",
          text: "Marketing Strategies to Eliminate Post-Purchase Dissonance",
        },
        {
          type: "ul",
          items: [
            "Post-purchase reassurance communications (welcome emails, congratulatory messaging confirming wise choice).",
            "Clear, comprehensive user onboarding guides, product demonstration videos, and 24/7 customer support.",
            "Generous return policies, comprehensive warranties, and satisfaction guarantee promises.",
          ],
        },
      ],
    },
  ],
  glossary: [
    {
      id: "cb-g1",
      term: "Evoked Set",
      body: "The specific subset of consumer brands that a buyer actively considers when making a purchase decision in a given product category.",
      topicSlug: "consumer-decision-making-process",
    },
  ],
};
