import type { Course } from "./types";

export const logisticsScmCourse: Course = {
  id: "om-02",
  slug: "logistics-scm",
  code: "OM 02",
  title: "Logistics and SCM",
  category: "Operations",
  description:
    "Supply chain design, Bullwhip effect mitigation, inventory control models (EOQ, Safety Stock, JIT), warehouse management, multimodal freight logistics, and 3PL/4PL models.",
  instructor: "Operations Faculty",
  accentColor: "#0284C7",
  units: [
    "Supply Chain Strategy & Bullwhip Dynamics",
    "Inventory Management & Warehousing Operations",
    "Transportation, Freight & 3PL/4PL Models",
    "Global Supply Chains & Green Logistics",
  ],
  topics: [
    {
      id: "scm-01",
      slug: "supply-chain-drivers-and-bullwhip",
      number: 1,
      title: "Supply Chain Strategy, Drivers and the Bullwhip Effect",
      unit: "Supply Chain Strategy & Bullwhip Dynamics",
      summary:
        "The six logistical and cross-functional supply chain drivers (Facilities, Inventory, Transportation, Information, Sourcing, Pricing) and mitigating the Bullwhip Effect.",
      tags: ["supply chain", "bullwhip", "logistics", "inventory", "EOQ", "3PL"],
      blocks: [
        {
          type: "p",
          text: "Supply Chain Management (SCM) is the strategic coordination of the end-to-end flow of materials, information, and financial capital from raw material suppliers to final consumers.",
        },
        {
          type: "h3",
          text: "1. The Bullwhip Effect (Demand Distortion)",
        },
        {
          type: "p",
          text: "The Bullwhip Effect refers to the phenomenon where small fluctuations in retail consumer demand get amplified into progressively larger variance as one moves upstream along the supply chain toward wholesalers, distributors, manufacturers, and tier-1 suppliers.",
        },
        {
          type: "table",
          headers: ["Root Cause of Bullwhip Effect", "Operational Mechanism", "Mitigation Strategy"],
          rows: [
            [
              "1. Demand Forecast Updating",
              "Each tier forecasts demand based on orders received from immediate downstream tier rather than actual point-of-sale (POS) data.",
              "Share real-time Point of Sale (POS) electronic data across all tiers (Vendor Managed Inventory / VMI).",
            ],
            [
              "2. Order Batching",
              "Placing large, periodic orders to exploit transportation economies of scale (Full Truckload / FTL).",
              "Reduce order setup costs and adopt small-batch, high-frequency deliveries (Milk runs / 3PL consolidation).",
            ],
            [
              "3. Price Fluctuations & Promotions",
              "Promotional discounts induce forward buying (buying in advance of demand).",
              "Adopt Everyday Low Pricing (EDLP) to stabilize order patterns.",
            ],
            [
              "4. Rationing and Shortage Gaming",
              "When demand exceeds supply, manufacturers allocate quotas; buyers inflate orders artificially.",
              "Allocate supplies based on past sales history rather than current inflated order queues.",
            ],
          ],
        },
      ],
    },
  ],
  examQuestions: [
    {
      id: "scm-q1",
      number: 1,
      title: "The Bullwhip Effect and Supply Chain Driver Integration",
      question:
        "Explain the Bullwhip Effect in supply chains. What are its major causes and what strategies can enterprises use to mitigate demand distortion?",
      relatedSlugs: ["supply-chain-drivers-and-bullwhip"],
      blocks: [
        {
          type: "p",
          text: "Mitigating the Bullwhip Effect requires supply chain visibility, collaborative planning, and agile logistics coordination.",
        },
      ],
    },
  ],
  glossary: [
    {
      id: "scm-g1",
      term: "Bullwhip Effect",
      body: "The amplification of demand variability as one moves upstream from consumer retail demand to tier-1 component suppliers in a supply chain.",
      topicSlug: "supply-chain-drivers-and-bullwhip",
    },
  ],
};
