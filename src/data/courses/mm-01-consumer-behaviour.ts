import type { Course } from "./types";

export const consumerBehaviourCourse: Course = {
  id: "mm-01",
  slug: "consumer-behaviour",
  code: "MM 01",
  title: "Consumer Behaviour",
  category: "Marketing",
  description:
    "Comprehensive master examination notes, psychological and sociological models, decision-making frameworks, motivation theories, and 14-mark model exam answers for Consumer Behaviour (MM 01).",
  instructor: "Marketing Faculty",
  accentColor: "#DB2777",
  units: [
    "Mid Sem Important",
    "Consumer Buying Roles & Motives",
    "Models of Consumer Behaviour",
    "Determinants of Consumer Behaviour",
    "Decision-Making Processes & Involvement",
    "Consumer Motivation & Marketer Strategies",
  ],
  topics: [
    // ==========================================
    // TOPIC 1: Customers vs Consumers & Roles
    // ==========================================
    {
      id: "cb-topic-1",
      slug: "customers-vs-consumers-and-buying-roles",
      number: 1,
      title: "Customers versus Consumers, Four Buying Roles & Marketing Strategy Linkage",
      unit: "Mid Sem Important",
      marks: 14,
      lecture: "Lecture 1: Foundations of Consumer Behaviour",
      summary:
        "Comprehensive 14-mark master note distinguishing customers from consumers, detailing the four consumer buying roles (Initiator, Influencer, Buyer, User), and examining the strategic linkage between consumer behaviour, Market Segmentation, Product Positioning, and Customer Value.",
      tags: [
        "Mid Sem Important",
        "Customer vs Consumer",
        "Buying Roles",
        "Market Segmentation",
        "Product Positioning",
        "Customer Value",
      ],
      blocks: [
        {
          type: "h3",
          text: "1. Conceptual Distinction: Customer versus Consumer",
        },
        {
          type: "p",
          text: "In marketing literature and commercial practice, the terms **customer** and **consumer** represent distinct entities within the purchase and consumption continuum. Understanding this boundary is essential because marketing strategies must address both the purchasing agent and the ultimate end user.",
        },
        {
          type: "ul",
          items: [
            "**Customer**: The individual or organizational entity that purchases the product or service — the transacting party who makes the financial exchange and executes the transaction.",
            "**Consumer**: The person who actually uses, consumes, or derives utility from the product or service — the end user.",
            "**Role Overlap**: A customer may or may not be the consumer. When an individual purchases a cup of coffee for personal consumption, they perform both roles simultaneously. However, when a parent buys baby food, the parent is the customer while the infant is the consumer.",
            "**Marketing Orientation**: The customer serves as the commercial hub for sales promotion, point-of-sale terms, and payment convenience; the consumer represents the design and formulation focus for product sensory experience, durability, and functional performance.",
          ],
        },
        {
          type: "table",
          caption: "Comparative Analysis: Customer vs. Consumer",
          headers: ["Basis of Distinction", "Customer", "Consumer"],
          rows: [
            [
              "**Primary Meaning**",
              "Person or entity that purchases the product/service.",
              "Person who directly uses, consumes, or experiences the product.",
            ],
            [
              "**Transaction Role**",
              "Directly executes the buying transaction and payment exchange.",
              "Directly involved in consumption and ultimate benefit realization.",
            ],
            [
              "**Role Coincidence**",
              "Can also be the consumer (e.g., buying one's own clothing).",
              "Can also be the customer (e.g., self-funded consumption).",
            ],
            [
              "**Business Strategy Focus**",
              "Commercial marketing mix, pricing, terms, distribution convenience.",
              "Product design, formulation, usability, sensory satisfaction.",
            ],
            [
              "**Commercial Target**",
              "Target of sales promotions, retailer packaging, discounts.",
              "Target of brand messaging, emotional storytelling, functional claims.",
            ],
          ],
        },
        {
          type: "h3",
          text: "2. The Four Consumer Buying Roles",
        },
        {
          type: "p",
          text: "Consumer decision-making rarely occurs in isolation. In household and organizational buying, multiple individuals participate across distinct functional roles:",
        },
        {
          type: "table",
          caption: "The Four Core Consumer Decision Roles",
          headers: ["Role", "Functional Definition", "Behavioral Impact", "Illustrative Example"],
          rows: [
            [
              "**1. Initiator**",
              "The individual who first recognizes an unfulfilled need or problem and triggers the purchase deliberation.",
              "Defines the initial problem scope and stimulates information search across peers or family.",
              "*A school-going child informs parents that their school laptop is too slow for graphic programming.*",
            ],
            [
              "**2. Influencer**",
              "A person who intentionally or unintentionally guides the evaluation criteria, brand preferences, or purchase specifications.",
              "Provides expertise, advice, technical criteria, or social validation that shapes brand choices.",
              "*A tech-savvy elder sibling recommends a specific laptop brand with 16GB RAM and dedicated GPU.*",
            ],
            [
              "**3. Buyer**",
              "The individual who negotiates commercial terms, selects payment methods, and physically executes the purchase transaction.",
              "Controls the financial budget, payment mode (cash/credit/EMI), and store/channel selection.",
              "*The father visits an electronics store or online portal and executes the payment.*",
            ],
            [
              "**4. User**",
              "The individual who directly operates, utilizes, and consumes the purchased product or service.",
              "Generates post-purchase evaluation, determines customer satisfaction, and triggers repurchase.",
              "*The child uses the laptop daily for school coursework, coding projects, and gaming.*",
            ],
          ],
        },
        {
          type: "callout",
          label: "Strategic Implication",
          kind: "insight",
          body: "Marketers must design segmented communication strategies targeting each role. Advertising targeting the Initiator/User must emphasize fun, speed, and usability, whereas messaging aimed at the Buyer must highlight price discounts, warranty coverage, energy efficiency, and financing options.",
        },
        {
          type: "h3",
          text: "3. Strategic Linkage: Why Understanding Consumer Behaviour Matters",
        },
        {
          type: "p",
          text: "Understanding consumer behaviour provides the empirical and analytical foundation for three core pillars of marketing strategy:",
        },
        {
          type: "ul",
          items: [
            "**Market Segmentation**: Discovering viable, homogeneous clusters of consumers within a heterogeneous marketplace. By understanding consumer needs, psychographics, and usage rates, firms design dedicated product variants (e.g., positioning *Femina* magazine specifically for modern urban working women).",
            "**Product Positioning**: Carving out a distinct, credible, and valued perceptual identity for the brand in the consumer's mind relative to competitors. For instance, Samsung positions its Galaxy S-series as an ultra-premium camera flagship for creators while positioning its M-series as a high-value, battery-centric device for budget-conscious youth.",
            "**Customer Value Creation**: The fundamental marketing equation defines Perceived Value ($PV$) as Perceived Benefits ($PB$) minus Perceived Costs ($PC$): $$PV = PB - PC$$. Marketers must understand customer performance expectations, service requirements, price elasticity, and after-sales needs to maximize $PB$ while minimizing friction costs ($PC$).",
          ],
        },
      ],
    },

    // ==========================================
    // TOPIC 2: Product Motives vs Patronage Motives
    // ==========================================
    {
      id: "cb-topic-2",
      slug: "product-motives-vs-patronage-motives",
      number: 2,
      title: "Product Motives versus Patronage Motives in Consumer Buying Decisions",
      unit: "Mid Sem Important",
      marks: 14,
      lecture: "Lecture 2: Consumer Buying Motives",
      summary:
        "Comprehensive 14-mark master note on buying motives: foundational definitions, classification into Product Motives (Emotional vs Rational) and Patronage Motives (Emotional vs Rational), extensive motive-decision examples, and comparative marketing matrix.",
      tags: [
        "Mid Sem Important",
        "Buying Motives",
        "Product Motives",
        "Patronage Motives",
        "Emotional Motives",
        "Rational Motives",
      ],
      blocks: [
        {
          type: "h3",
          text: "1. Definition & Classification of Buying Motives",
        },
        {
          type: "p",
          text: "A **motive** is an internal energizing force, urge, instinct, feeling, or desire that impels an individual toward taking purchase action to fulfill an unmet physiological or psychological need. Consumer buying motives are governed by economic calculations, social conditioning, and psychological drives.",
        },
        {
          type: "quote",
          text: "A buying motive represents the underlying 'Why' behind every consumer expenditure — the specific trigger converting passive need into active purchase behaviour.",
        },
        {
          type: "p",
          text: "Buying motives are broadly bifurcated into two primary classifications:",
        },
        {
          type: "ol",
          items: [
            "**Product Motives**: Impulses, desires, and considerations that induce a consumer to purchase a specific product or brand rather than alternative product categories.",
            "**Patronage Motives**: Impulses, considerations, and preferences that induce a consumer to buy from a particular store, dealer, website, or outlet rather than competing retail channels.",
          ],
        },
        {
          type: "h3",
          text: "2. Deep Dive: Product Motives (Emotional vs. Rational)",
        },
        {
          type: "ul",
          items: [
            "**Emotional Product Motives**: Impulses that persuade a consumer based on subjective feelings, pride, ego, social status, fear, imitation, or the desire to appear distinct. The buyer does not apply rigorous cost-benefit logic or objective testing. *Examples*: purchasing an expensive Rolex watch to project executive prestige; buying an expensive perfume for sensory romantic appeal.",
            "**Rational Product Motives**: Impulses that arise from logical analysis, objective evaluation, and cognitive problem-solving. The buyer systematically weighs purpose, functional utility, cost-benefit trade-offs, operating economy, durability, and safety. *Examples*: purchasing an electric vehicle based on low per-kilometer operating cost; buying a washing machine based on water-saving inverter technology.",
          ],
        },
        {
          type: "h3",
          text: "3. Deep Dive: Patronage Motives (Emotional vs. Rational)",
        },
        {
          type: "ul",
          items: [
            "**Emotional Patronage Motives**: Impulses that persuade a customer to frequent a specific store or channel without objective economic justification. The choice is driven by visual aesthetics, prestige association, habitual loyalty, or personal fondness for store atmosphere. *Examples*: shopping at a luxury boutique because elite celebrities shop there; preferring a quaint local café purely due to nostalgic ambience.",
            "**Rational Patronage Motives**: Impulses that lead a consumer to select a shopping destination based on verifiable convenience, wide product assortment, competitive pricing, liberal credit terms, generous return policies, and prompt after-sales support. *Examples*: buying groceries at D-Mart due to lowest prices; ordering electronics on Amazon due to reliable next-day delivery and hassle-free return guarantees.",
          ],
        },
        {
          type: "h3",
          text: "4. Spectrum of Buying Motives and Purchase Decision Examples",
        },
        {
          type: "table",
          caption: "Specific Motive Drivers and Corresponding Purchase Decisions",
          headers: ["Motive Category", "Psychological / Economic Driver", "Consumer Purchase Decision Example"],
          rows: [
            ["**Desire for Money / Economy**", "Urge to save financial resources and maximize purchasing power.", "Purchasing winter garments during off-season clearance sales with 50% discounts."],
            ["**Vanity & Social Admiration**", "Desire to receive compliments and showcase elevated lifestyle.", "Purchasing designer apparel and luxury sunglasses to be admired by social peers."],
            ["**Fear & Risk Aversion**", "Apprehension regarding future unforeseen catastrophic risks.", "Purchasing comprehensive term life insurance or home fire protection policies."],
            ["**Pride & Conspicuous Consumption**", "Need for self-esteem, dominance, and social recognition.", "Purchasing a high-end luxury sports sedan or bespoke mechanical timepiece."],
            ["**Fashion & Imitation**", "Desire to conform to prevailing urban trends and social influencers.", "College students purchasing oversized streetwear after observing trending reels."],
            ["**Possession & Collecting**", "Innate drive to own rare, unique, or vintage artifacts.", "Numismatists purchasing rare antique coins at private auction houses."],
            ["**Health & Physical Well-Being**", "Consciousness regarding fitness, nutrition, and longevity.", "Purchasing organic cold-pressed oils and annual fitness club memberships."],
            ["**Comfort & Convenience**", "Desire to minimize physical labor and save personal time.", "Installing automated dishwashers, microwave ovens, and robotic vacuum cleaners."],
            ["**Love & Affection**", "Emotional urge to demonstrate care, warmth, and devotion.", "Purchasing personalized jewelry or custom gift sets for family members on anniversaries."],
          ],
        },
        {
          type: "h3",
          text: "5. Comprehensive Comparison Matrix",
        },
        {
          type: "table",
          caption: "Product Motives versus Patronage Motives",
          headers: ["Evaluation Dimension", "Product Motives", "Patronage Motives"],
          rows: [
            ["**Core Question Addressed**", "**Why** to buy a particular product or brand.", "**Where** to buy (which store, dealer, or digital app)."],
            ["**Strategic Marketer Target**", "Product brand managers and R&D engineers.", "Retail store owners, channel partners, e-commerce platforms."],
            ["**Emotional Manifestation**", "Driven by pride, vanity, ego enhancement, or aesthetic attraction to the item.", "Driven by store prestige, pleasant ambience, personal relationship with retailer."],
            ["**Rational Manifestation**", "Driven by product durability, fuel efficiency, technical specs, cost-per-use.", "Driven by store proximity, wide selection, discount pricing, return ease, parking."],
            ["**Key Promotional Levers**", "Brand advertising, product feature highlights, celebrity endorsements.", "Retailer location ads, loyalty reward cards, in-store customer service."],
          ],
        },
      ],
    },

    // ==========================================
    // TOPIC 3: Traditional Models of Consumer Behaviour
    // ==========================================
    {
      id: "cb-topic-3",
      slug: "traditional-models-of-consumer-behaviour",
      number: 3,
      title: "Traditional Models of Consumer Behaviour: Economic, Learning, Psychoanalytic & Sociological",
      unit: "Mid Sem Important",
      marks: 14,
      lecture: "Lecture 3: Classical Theoretical Models",
      summary:
        "Comprehensive 14-mark master note detailing the four traditional models of consumer behaviour: Marshallian Economic Model (Price, Substitution, Income effects), Pavlovian Learning Model (Drivers, Cues, Reinforcement), Freudian Psychoanalytic Model (Id, Ego, Superego), and Veblenian Sociological Model.",
      tags: [
        "Mid Sem Important",
        "Economic Model",
        "Learning Model",
        "Psychoanalytic Model",
        "Sociological Model",
        "Freud",
        "Pavlov",
      ],
      blocks: [
        {
          type: "h3",
          text: "1. The Marshallian Economic Model",
        },
        {
          type: "p",
          text: "Rooted in classical microeconomics (Alfred Marshall), this model posits that the consumer is a rational, utility-maximizing entity with perfect information who allocates disposable income across goods to maximize satisfaction based on the **Law of Diminishing Marginal Utility**.",
        },
        {
          type: "ul",
          items: [
            "**Price Effect**: Lower price leads to higher quantity demanded ($P \\downarrow \\implies Q \\uparrow$), and vice versa.",
            "**Substitution Effect**: When relative price changes, consumers substitute cheaper alternatives for costlier goods (e.g., switching from private ride-hailing to metro rail when cab fares surge).",
            "**Income Effect**: An increase in real purchasing power leads to increased consumption of normal and luxury goods.",
            "**Core Criticisms**: Assumes unrealistically perfect consumer rationality; ignores emotional, impulsive, habitual, and social influences.",
          ],
        },
        {
          type: "h3",
          text: "2. The Pavlovian Learning Model",
        },
        {
          type: "p",
          text: "Derived from Ivan Pavlov and B.F. Skinner's classical conditioning, this model views consumer behaviour as conditioned habits formed through repeated exposure to stimuli, drives, cues, responses, and reinforcement.",
        },
        {
          type: "table",
          caption: "Components of the Consumer Learning Model",
          headers: ["Component", "Psychological Meaning", "Practical Marketing Illustration"],
          rows: [
            ["**Drive / Need**", "Strong internal stimulus that impels action.", "A consumer feels intense thirst on a hot afternoon."],
            ["**Cue**", "Environmental signal determining when, where, and how the response occurs.", "Seeing a brightly lit billboard advertisement for chilled tender coconut water."],
            ["**Response**", "The consumer's behavioural reaction to the cue.", "Stopping at the retail outlet and purchasing the coconut water."],
            ["**Reinforcement**", "Reward or positive satisfaction derived from consumption.", "The coconut water is delicious and refreshing, relieving thirst immediately."],
            ["**Habit Formation**", "Strengthened stimulus-response bond leading to repeat buying.", "Consumer habitually buys the same brand whenever thirsty in the future."],
            ["**Discrimination**", "Learning to distinguish between subtle differences in competing brand cues.", "Recognizing that Brand A tastes naturally sweet while Brand B contains added sugar."],
          ],
        },
        {
          type: "h3",
          text: "3. The Freudian Psychoanalytic Model",
        },
        {
          type: "p",
          text: "Derived from Sigmund Freud's psychoanalytic theory, this model posits that human behaviour is guided by unconscious, deep-seated biological drives, repressed desires, and symbolic motives. The human psyche operates across three conflicting systems:",
        },
        {
          type: "table",
          caption: "Freudian Psyche Structure and Consumer Decisions",
          headers: ["Psyche Component", "Operating Principle", "Consumer Internal Dialogue", "Marketing Appeal Example"],
          rows: [
            [
              "**Id**",
              "Pleasure Principle (Instinctive, impulsive, seeks instant gratification without moral restraint).",
              "\"I want that luxury sports car right now! It makes me feel powerful and attractive!\"",
              "Sensory luxury ads, seductive perfume commercials, decadent chocolate indulgence messaging.",
            ],
            [
              "**Ego**",
              "Reality Principle (Rational, realistic mediator balancing Id impulses against external constraints).",
              "\"That ₹80 Lakh sports car will bankrupt my savings. I will buy a sporty ₹15 Lakh sedan instead.\"",
              "Value-for-money campaigns, fuel efficiency stats, practical financing EMI schemes.",
            ],
            [
              "**Superego**",
              "Morality Principle (Conscience, internalized societal ethics, moral values, and social guilt).",
              "\"Is it socially responsible to spend lavishly when I should save for my children's education?\"",
              "Eco-friendly green marketing, fair-trade goods, charitable brand donation promises (e.g., TOMS shoes).",
            ],
          ],
        },
        {
          type: "h3",
          text: "4. The Veblenian Sociological Model",
        },
        {
          type: "p",
          text: "Formulated by Thorstein Veblen, this model asserts that human beings are fundamentally social animals whose buying behaviour is shaped by culture, subculture, social class, reference groups, and the urge for **Conspicuous Consumption** (buying visible luxury goods to signal social standing and wealth).",
        },
        {
          type: "ul",
          items: [
            "**Primary Reference Groups**: Family, close friends, and colleagues who exert direct daily influence on brand adoption.",
            "**Secondary Reference Groups**: Professional associations, civic clubs, and religious organizations.",
            "**Aspirational Groups**: Elite reference groups an individual desires to join, leading to imitation of their consumption patterns.",
          ],
        },
        {
          type: "h3",
          text: "5. Master Synthesis: Four Traditional Models Compared",
        },
        {
          type: "table",
          caption: "Comparative Analysis of Traditional Consumer Behaviour Models",
          headers: ["Comparison Aspect", "Economic Model", "Learning Model", "Psychoanalytic Model", "Sociological Model"],
          rows: [
            ["**Pioneering Theorist**", "Alfred Marshall", "Ivan Pavlov / B.F. Skinner", "Sigmund Freud", "Thorstein Veblen"],
            ["**Core Operating Premise**", "Rational utility maximization subject to budget constraints.", "Conditioned habit formation via stimulus-response reinforcement.", "Unconscious drives, repressed desires, and symbolic gratification.", "Social emulation, reference group conformity, and status signaling."],
            ["**View of the Consumer**", "Calculating economic optimizer.", "Adaptive learner responding to environmental cues.", "Emotionally driven entity guided by hidden psychic conflicts.", "Social group member conforming to collective norms."],
            ["**Key Decision Drivers**", "Price, income, substitution elasticity.", "Drives, cues, reinforcement, habit repetition.", "Id impulses, ego moderation, superego guilt.", "Social class, aspirational groups, cultural values."],
            ["**Primary Limitation**", "Ignores emotions, impulse buying, and social symbolism.", "Oversimplifies complex cognitive and high-involvement deliberations.", "Difficult to empirically measure unconscious motivations.", "Underplays individual rationality and economic calculations."],
          ],
        },
      ],
    },

    // ==========================================
    // TOPIC 4: Contemporary Models of Consumer Behaviour
    // ==========================================
    {
      id: "cb-topic-4",
      slug: "contemporary-models-howard-sheth-nicosia-ekb",
      number: 4,
      title: "Contemporary Models of Consumer Behaviour: Howard-Sheth, Nicosia & EKB Models",
      unit: "Mid Sem Important",
      marks: 14,
      lecture: "Lecture 4: Grand Contemporary Decision Models",
      summary:
        "Comprehensive 14-mark master note on contemporary consumer behaviour models: Howard-Sheth Model (Inputs, Perceptual & Learning Constructs, Outputs, Exogenous variables), Nicosia Model (Four sequential fields and firm-consumer interactive feedback), and Engel-Kollat-Blackwell (EKB/EBM) Model.",
      tags: [
        "Mid Sem Important",
        "Howard-Sheth Model",
        "Nicosia Model",
        "EKB Model",
        "Contemporary Models",
        "Hypothetical Constructs",
      ],
      blocks: [
        {
          type: "h3",
          text: "1. The Howard-Sheth Model of Buying Behaviour (1969)",
        },
        {
          type: "p",
          text: "Developed by John Howard and Jagdish Sheth, this comprehensive model integrates cognitive psychology and learning theory to explain brand choice under three levels of decision-making: Extensive Problem Solving (EPS), Limited Problem Solving (LPS), and Routinized Response Behaviour (RRB).",
        },
        {
          type: "table",
          caption: "The Four Core Component Sets of the Howard-Sheth Model",
          headers: ["Component Group", "Constituent Variables", "Operational Role in Decision Process"],
          rows: [
            [
              "**1. Input Variables (Stimuli)**",
              "• **Significative Stimuli**: Physical brand attributes (price, quality, distinctiveness).\n• **Symbolic Stimuli**: Marketer representations (ads, promotional copy).\n• **Social Stimuli**: Family, reference groups, social class influence.",
              "Environmental information inputs entering the consumer's sensory system.",
            ],
            [
              "**2. Perceptual Constructs**",
              "• **Sensitivity to Information**: Openness to sensory input.\n• **Perceptual Bias**: Distorting or modifying information to fit existing beliefs.\n• **Search for Information**: Active gathering of brand data.",
              "Controls the intake, filtering, and subjective processing of external stimuli.",
            ],
            [
              "**3. Learning Constructs**",
              "• **Motives**: General or specific goal states driving action.\n• **Evoked Set Potential**: Buyer's perception of brand capability.\n• **Decision Mediators**: Mental rules and criteria for ranking brands.\n• **Predisposition**: Preference toward brands in the evoked set.\n• **Inhibitors**: Environmental obstacles (price, stockout, time pressure).\n• **Satisfaction**: Post-purchase alignment with prior expectations.",
              "Forms brand attitudes, internal decision rules, and long-term brand loyalty.",
            ],
            [
              "**4. Output Variables**",
              "• **Attention** $\\rightarrow$ **Comprehension** $\\rightarrow$ **Attitude** $\\rightarrow$ **Intention** $\\rightarrow$ **Purchase Behaviour**",
              "Observable sequential behavioural responses displayed by the buyer.",
            ],
          ],
        },
        {
          type: "callout",
          label: "Exogenous Variables in Howard-Sheth",
          kind: "info",
          body: "External factors that moderate the decision process without being directly represented in the feedback loop: buyer's personality traits, financial status, time pressure, social class, and organizational culture.",
        },
        {
          type: "h3",
          text: "2. The Nicosia Model of Consumer Behaviour (Francesco Nicosia, 1966)",
        },
        {
          type: "p",
          text: "The Nicosia Model conceptualizes consumer behaviour as a dynamic, interactive communication loop between the business enterprise and the consumer across four sequential fields:",
        },
        {
          type: "table",
          caption: "The Four Fields of the Nicosia Model",
          headers: ["Field", "Phase Name", "Operational Mechanism & Interactions"],
          rows: [
            [
              "**Field 1**",
              "**Firm Attributes $\\rightarrow$ Consumer Predisposition**",
              "Sub-field 1: Company's marketing communication message attributes.\nSub-field 2: Consumer's psychological attributes (personality, values).\nThe firm's advertising interacts with the consumer's mindset to form an initial predisposition toward the brand.",
            ],
            [
              "**Field 2**",
              "**Search & Evaluation of Alternatives**",
              "The aroused consumer actively searches for external information and evaluates the advertised brand against competing alternatives, generating brand motivation.",
            ],
            [
              "**Field 3**",
              "**Act of Purchase**",
              "Brand motivation transforms into active buying intention and the physical execution of the purchase transaction at a retail store or online portal.",
            ],
            [
              "**Field 4**",
              "**Feedback & Storage**",
              "Output 1: Feedback to the consumer (post-purchase experience, satisfaction/dissatisfaction stored in memory).\nOutput 2: Feedback to the firm (sales figures, market share, customer reviews).",
            ],
          ],
        },
        {
          type: "h3",
          text: "3. The Engel-Kollat-Blackwell (EKB / EBM) Model",
        },
        {
          type: "p",
          text: "The EKB (later Engel-Blackwell-Miniard / EBM) model structures consumer decision-making across five core stages augmented by four integrated subsystems:",
        },
        {
          type: "ul",
          items: [
            "**Information Input**: Physical and social stimuli entering consumer awareness.",
            "**Information Processing**: Exposure $\\rightarrow$ Attention $\\rightarrow$ Comprehension $\\rightarrow$ Acceptance $\\rightarrow$ Retention in memory.",
            "**Decision Process Core**: (1) Need Recognition $\\rightarrow$ (2) Search for Information $\\rightarrow$ (3) Alternative Evaluation $\\rightarrow$ (4) Purchase $\\rightarrow$ (5) Post-Purchase Outcomes.",
            "**Variables Influencing Decision Process**: Individual determinants (demographics, personality, values, lifestyle) and environmental influences (culture, reference groups, family).",
          ],
        },
        {
          type: "h3",
          text: "4. Master Comparison: Howard-Sheth vs. Nicosia Model",
        },
        {
          type: "table",
          caption: "Howard-Sheth versus Nicosia Model Comparison",
          headers: ["Dimension", "Howard-Sheth Model", "Nicosia Model"],
          rows: [
            ["**Analytical Focus**", "Complex internal cognitive and learning constructs of the buyer.", "Interactive communication flow between enterprise and consumer."],
            ["**Structural Framework**", "Input $\\rightarrow$ Perceptual/Learning Constructs $\\rightarrow$ Output.", "Four interactive fields forming a circular feedback loop."],
            ["**Stimuli Classification**", "Three distinct types: Significative, Symbolic, and Social stimuli.", "Focuses predominantly on the firm's commercial message/ad."],
            ["**Decision Levels**", "Explicitly distinguishes between EPS, LPS, and RRB.", "Assumes an initially uncommitted consumer with no prior bias."],
            ["**Feedback Mechanism**", "Satisfaction feeds back into learning constructs and future brand predisposition.", "Dual feedback loop: post-purchase experience to consumer memory, sales data to firm."],
            ["**Key Limitation**", "Highly complex with hypothetical constructs difficult to measure empirically.", "Oversimplified flow; neglects detailed internal psychological processing."],
          ],
        },
      ],
    },

    // ==========================================
    // TOPIC 5: Factors Influencing Consumer Behaviour
    // ==========================================
    {
      id: "cb-topic-5",
      slug: "factors-influencing-consumer-behaviour",
      number: 5,
      title: "Comprehensive Determinants of Consumer Behaviour: Cultural, Social, Personal & Psychological",
      unit: "Mid Sem Important",
      marks: 14,
      lecture: "Lecture 5: Environmental & Individual Determinants",
      summary:
        "Comprehensive 14-mark master note analyzing the four major categories of factors influencing consumer buying decisions: Cultural (Culture, Subculture, Social Class), Social (Reference Groups, Family, Roles), Personal (Age, Occupation, Lifestyle, Personality), and Psychological (Motivation, Perception, Learning, Attitudes).",
      tags: [
        "Mid Sem Important",
        "Cultural Factors",
        "Social Factors",
        "Personal Factors",
        "Psychological Factors",
        "VALS",
        "Reference Groups",
      ],
      blocks: [
        {
          type: "h3",
          text: "1. Cultural Factors: The Broadest Environmental Influence",
        },
        {
          type: "ul",
          items: [
            "**Culture**: The cumulative deposit of learned knowledge, beliefs, values, customs, and morals acquired by an individual as a member of society. Determines basic values regarding achievement, health, and cleanliness.",
            "**Subculture**: Smaller cultural groups sharing distinct life experiences within a broader society: nationality groups, religious subcultures, geographic regions (e.g., North vs. South Indian food preferences), and generational cohorts.",
            "**Social Class**: Relatively permanent, hierarchical divisions in society whose members share similar values, interests, and consumption styles. Measured using multi-item indices (occupation, education, income, residential area). Major divisions: Upper Class, Middle Class, Working Class, Lower Class.",
          ],
        },
        {
          type: "h3",
          text: "2. Social Factors: Group Dynamics and Interpersonal Influence",
        },
        {
          type: "table",
          caption: "Social Determinants of Consumer Choice",
          headers: ["Social Factor", "Key Theoretical Concept", "Consumer Impact & Marketing Example"],
          rows: [
            [
              "**Reference Groups**",
              "Groups serving as direct or indirect points of comparison.",
              "• **Membership Groups**: Direct belonging (family, sports team).\n• **Aspirational Groups**: Desired groups (emulating celebrity athletes by wearing Nike).\n• **Dissociative Groups**: Groups whose values the consumer actively avoids.",
            ],
            [
              "**Opinion Leaders & Buzz**",
              "Influential peers with high product expertise and credibility.",
              "Influencer marketing and social buzz campaigns leveraging trusted creators on Instagram and YouTube to drive word-of-mouth adoption.",
            ],
            [
              "**Family**",
              "The most significant primary consumption unit in society.",
              "Directly shapes brand loyalty through generational transmission; children often buy the same toothpaste or detergent brands used by parents.",
            ],
            [
              "**Roles and Status**",
              "Activities a person is expected to perform according to societal position.",
              "A corporate executive purchases premium suits, executive stationery, and luxury sedan vehicles to match professional status expectations.",
            ],
          ],
        },
        {
          type: "h3",
          text: "3. Personal Factors: Demographic and Lifestyle Determinants",
        },
        {
          type: "ul",
          items: [
            "**Age and Family Life Cycle (FLC)**: Buying priorities transform across life stages: Bachelorhood (spending on electronics, nightlife, travel) $\\rightarrow$ Newly Married (furnishings, home appliances) $\\rightarrow$ Full Nest (child healthcare, education policies) $\\rightarrow$ Empty Nest / Retirement (healthcare, travel, savings).",
            "**Occupation & Economic Circumstances**: White-collar executives purchase tailored suits and club memberships; blue-collar workers prioritize durable workwear and utility items.",
            "**Lifestyle (AIOs & VALS)**: A person's pattern of living expressed through **Activities, Interests, and Opinions (AIOs)**. The **VALS framework** segments consumers into 8 groups based on primary motivation (Ideals, Achievement, Self-Expression) and resources: Innovators, Thinkers, Believers, Achievers, Strivers, Experiencers, Makers, and Survivors.",
            "**Personality & Brand Personality**: Distinct psychological traits. Marketers cultivate brand personalities: Sincerity (Dove), Excitement (Red Bull), Competence (Apple/IBM), Sophistication (Chanel), Ruggedness (Jeep, Timberland).",
          ],
        },
        {
          type: "h3",
          text: "4. Psychological Factors: Internal Cognitive Processing",
        },
        {
          type: "table",
          caption: "Four Psychological Drivers of Consumer Behaviour",
          headers: ["Driver", "Operating Mechanism", "Key Psychological Phenomena"],
          rows: [
            ["**Motivation**", "Pressing internal need driving the individual toward tension reduction.", "Maslow's Hierarchy (Physiological $\\rightarrow$ Safety $\\rightarrow$ Social $\\rightarrow$ Esteem $\\rightarrow$ Self-Actualization)."],
            ["**Perception**", "Process of selecting, organizing, and interpreting sensory inputs.", "• **Selective Attention**: Screening out irrelevant ads.\n• **Selective Distortion**: Interpreting info to fit bias.\n• **Selective Retention**: Remembering favoured brand claims."],
            ["**Learning**", "Behavioural modifications arising from experience.", "Conditioned association through Drives, Cues, Responses, and Positive/Negative Reinforcement."],
            ["**Beliefs & Attitudes**", "Evaluative feelings and enduring predispositions toward an object.", "Tri-component attitude architecture: Cognitive (Knowledge) + Affective (Feeling) + Conative (Action)."],
          ],
        },
      ],
    },

    // ==========================================
    // TOPIC 6: Gender Influences on Consumer Behaviour
    // ==========================================
    {
      id: "cb-topic-6",
      slug: "gender-influences-on-consumer-behaviour",
      number: 6,
      title: "Influence of Gender on Consumer Buying Behaviour: Processing Styles, Shopping Orientations & Communication Strategies",
      unit: "Mid Sem Important",
      marks: 14,
      lecture: "Lecture 6: Gender Psychology in Marketing",
      summary:
        "Comprehensive 14-mark master note on gender dynamics in consumer behaviour: 'Men Buy, Women Shop' hunter vs gatherer paradigm, cognitive processing differences (agentic vs communal), online shopping behaviour, and gender-specific advertising communication strategies.",
      tags: [
        "Mid Sem Important",
        "Gender Influences",
        "Hunter vs Gatherer",
        "Communal vs Agentic",
        "Online Shopping",
        "Communication Strategy",
      ],
      blocks: [
        {
          type: "h3",
          text: "1. Conceptual Foundations: Mars and Venus in the Marketplace",
        },
        {
          type: "p",
          text: "Gender-based consumer differentiation is rooted in a combination of biological neurology, hormonal variations, psychological socialization, and cultural role expectations. In consumer psychology, these orientations are conceptualized under the **Agentic vs. Communal Framework**:",
        },
        {
          type: "ul",
          items: [
            "**Agentic Orientation (Traditionally Male)**: Focuses on individual self-assertion, mastery, efficiency, factual data, and goal-directed task completion.",
            "**Communal Orientation (Traditionally Female)**: Focuses on interpersonal harmony, relationships, emotional connection, holistic processing, and collaborative problem-solving.",
          ],
        },
        {
          type: "h3",
          text: "2. 'Men Buy, Women Shop': Hunter versus Gatherer Paradigm",
        },
        {
          type: "table",
          caption: "Shopping Behaviour & Retail Experience by Gender",
          headers: ["Shopping Dimension", "Men (The 'Hunter' Mode)", "Women (The 'Gatherer' Mode)"],
          rows: [
            [
              "**Core Shopping Mindset**",
              "Shopping is a mission or targeted task to be executed with speed.",
              "Shopping is an immersive, social, and experiential journey.",
            ],
            [
              "**Primary Retail Objective**",
              "Buy what they came for and exit immediately (\"Get in, get it, get out\").",
              "Browse, explore options, discover new items, and evaluate alternatives.",
            ],
            [
              "**Retail Pain Points**",
              "Long checkout queues, confusing store layout, lack of parking.",
              "Unhelpful/impolite sales staff, lack of product depth, cluttered displays.",
            ],
            [
              "**Decision Basis**",
              "High focus on functional efficiency, technical specs, and speed.",
              "High focus on aesthetics, emotional resonance, tactile feel, and peer validation.",
            ],
            [
              "**Product Categories**",
              "Hardware, automobiles, consumer electronics, financial instruments.",
              "Apparel, home decor, personal care, children's products, groceries.",
            ],
          ],
        },
        {
          type: "h3",
          text: "3. Gender Differences in Digital & E-Commerce Behaviour",
        },
        {
          type: "table",
          caption: "Online Search and E-Commerce Behavioural Metrics",
          headers: ["Online Parameter", "Women Online Shoppers", "Men Online Shoppers"],
          rows: [
            ["**Search Strategy**", "Use specific search operators and brand names; browse widely across categories.", "Search directly by specific product model number; target single item."],
            ["**Page Engagement**", "Scan visual aesthetic comps, read customer reviews, inspect photo galleries.", "Intensely analyze technical specification sheets, benchmarks, and seller terms."],
            ["**Promotional Sensitivity**", "Highly responsive to discount coupons, referral codes, and loyalty points.", "Responsive to fast delivery options, bundle pricing, and instant checkout."],
            ["**Purchase Motivation**", "Impulse discovery, fashion exploration, social gifting, self-reward.", "Replacement of worn-out items, functional necessity, gaming/tech upgrades."],
          ],
        },
        {
          type: "h3",
          text: "4. Gender-Specific Marketing Communication Strategies",
        },
        {
          type: "table",
          caption: "Advertising and Communication Design Matrix by Gender",
          headers: ["Creative Dimension", "Communication Strategy for Women", "Communication Strategy for Men"],
          rows: [
            ["**Message Detail Level**", "Detailed narratives, comprehensive feature explanations, emotional nuance.", "Single prominent headline, bulleted technical specs, clear bottom-line benefit."],
            ["**Visual & Colour Palette**", "Soft, warm tones, rich evocative lifestyle imagery, relational contexts.", "High-contrast bold colours (navy blue, black, metallic), dynamic action shots."],
            ["**Tone & Style**", "Collaborative, conversational, empathetic, authentic storytelling.", "Authoritative, confident, direct, humorous, data-centric language."],
            ["**Core Value Appeal**", "Promotions emphasizing beauty, wellness, youth, harmony, and smart savings.", "Promotions emphasizing performance, ambition, status, durability, and power."],
            ["**Benchmark Campaign**", "*Olay 'Ageless' / Dove 'Real Beauty' celebrating self-worth and empowerment.*", "*Gillette 'The Best a Man Can Get' showcasing precision engineering and success.*"],
          ],
        },
      ],
    },

    // ==========================================
    // TOPIC 7: Consumer Decision Process & Buying Situations
    // ==========================================
    {
      id: "cb-topic-7",
      slug: "consumer-decision-process-and-buying-situations",
      number: 7,
      title: "The 5-Stage Consumer Decision-Making Process, Buying Situations & Expectancy Disconfirmation",
      unit: "Mid Sem Important",
      marks: 14,
      lecture: "Lecture 7: Decision Journey & Post-Purchase Dynamics",
      summary:
        "Comprehensive 14-mark master note on the 5-Stage Consumer Decision-Making Process, Information Processing Model, Expectancy Disconfirmation Theory (Richard Oliver), Customer Value Equation (PV = PB - PC), and classification of Buying Situations (EPS, LPS, Habitual).",
      tags: [
        "Mid Sem Important",
        "Decision Process",
        "Cognitive Dissonance",
        "Expectancy Disconfirmation",
        "Extended Problem Solving",
        "Customer Value",
      ],
      blocks: [
        {
          type: "h3",
          text: "1. The 5-Stage Classical Decision-Making Process",
        },
        {
          type: "table",
          caption: "The 5 Stages and Strategic Marketing Responses",
          headers: ["Decision Stage", "Consumer Cognitive Action", "Strategic Marketer Action", "Practical Industrial Example"],
          rows: [
            [
              "**1. Problem / Need Recognition**",
              "Perceives a gap between actual state and desired state, triggered by internal or external stimuli.",
              "Stimulate latent needs through evocative advertising highlighting lifestyle gaps.",
              "*Automobile commercial showcasing the joy of open-road adventure.*",
            ],
            [
              "**2. Information Search**",
              "Conducts internal memory search and external search across personal and commercial sources.",
              "Ensure high visibility in search engines, dealer showrooms, review portals, and retail displays.",
              "*Publishing comparison brochures and Google SEO campaigns for new smartphone models.*",
            ],
            [
              "**3. Alternative Evaluation**",
              "Processes brand alternatives using evaluative criteria and decision rules (Compensatory vs. Non-compensatory).",
              "Highlight superiority on Critical-to-Quality criteria via comparative matrices.",
              "*Laptop maker advertising 14-hour battery life and featherlight 1.1kg chassis.*",
            ],
            [
              "**4. Purchase Decision**",
              "Executes purchase intention into actual brand transaction, influenced by store environment and financing.",
              "Eliminate checkout friction; provide 0% EMI financing, instant delivery, and purchase guarantees.",
              "*Offering 1-click checkout and interest-free installment payment plans.*",
            ],
            [
              "**5. Post-Purchase Evaluation**",
              "Compares actual product performance against pre-purchase expectations.",
              "Provide reassurance messaging, 24/7 onboarding support, and generous warranties to curb dissonance.",
              "*Automated welcome email with user setup guide and customer support contact.*",
            ],
          ],
        },
        {
          type: "h3",
          text: "2. Post-Purchase Dynamics & Expectancy Disconfirmation Model",
        },
        {
          type: "p",
          text: "Formulated by Richard L. Oliver (1997), the **Expectancy Disconfirmation Model** dictates that customer satisfaction is a function of the delta between pre-purchase expectations ($E$) and post-purchase perceived performance ($P$):",
        },
        {
          type: "ul",
          items: [
            "**Positive Disconfirmation ($P > E$)**: Product performance exceeds pre-purchase expectations $\\rightarrow$ **Customer Delight and High Brand Loyalty**.",
            "**Zero Disconfirmation ($P = E$)**: Product performance matches expectations $\\rightarrow$ **Customer Satisfaction**.",
            "**Negative Disconfirmation ($P < E$)**: Product performance falls short $\\rightarrow$ **Customer Dissatisfaction, Negative Word-of-Mouth, and Brand Switching**.",
          ],
        },
        {
          type: "callout",
          label: "Post-Purchase Cognitive Dissonance (Leon Festinger)",
          kind: "warning",
          body: "The psychological tension, anxiety, or second-guessing a buyer experiences after choosing between attractive, competing alternatives. Marketers combat dissonance through post-purchase confirmation letters, follow-up calls, satisfaction guarantees, and clear user onboarding manuals.",
        },
        {
          type: "h3",
          text: "3. The Customer Value Equation",
        },
        {
          type: "p",
          text: "Customer Perceived Value ($PV$) is mathematically conceptualized as the net difference between Total Perceived Benefits ($PB$) and Total Perceived Costs ($PC$):",
        },
        {
          type: "quote",
          text: "PV = Perceived Benefits (PB) − Perceived Costs (PC)\n\nPB = Core Product Quality + Service Support + Brand Prestige\nPC = Monetary Price + Time Invested + Energy / Effort + Psychological Risk",
        },
        {
          type: "h3",
          text: "4. Classification of Consumer Buying Situations",
        },
        {
          type: "table",
          caption: "Extended vs. Limited vs. Habitual Problem Solving",
          headers: ["Decision Dimension", "Extended Problem Solving (EPS)", "Limited Problem Solving (LPS)", "Habitual / Routinized (RPS)"],
          rows: [
            ["**Involvement Level**", "High financial, social, and physical risk.", "Moderate involvement and risk.", "Low involvement; negligible risk."],
            ["**Information Search**", "Extensive search across multiple external sources.", "Moderate search relying on past recall.", "Near-zero search; habitual memory recall."],
            ["**Alternative Evaluation**", "Rigorous evaluation across numerous complex criteria.", "Comparison across 2–3 standard criteria.", "No active alternative evaluation."],
            ["**Time & Effort**", "Significant deliberation over days or weeks.", "Brief comparison over minutes/hours.", "Instantaneous automatic purchase."],
            ["**Typical Product Examples**", "*Automobiles, luxury homes, enterprise software.*", "*Skin creams, sports shoes, small home appliances.*", "*Toothpaste, tea bags, laundry detergent, salt.*"],
          ],
        },
      ],
    },

    // ==========================================
    // TOPIC 8: Consumer Involvement
    // ==========================================
    {
      id: "cb-topic-8",
      slug: "consumer-involvement-concepts-media-dimensions",
      number: 8,
      title: "Consumer Involvement: Concepts, Levels, Media Processing & Moderating Dimensions",
      unit: "Mid Sem Important",
      marks: 14,
      lecture: "Lecture 8: Cognitive Involvement & Information Processing",
      summary:
        "Comprehensive 14-mark master note on Consumer Involvement: definitions, levels (High vs Low), Media Involvement (Print/Digital vs Broadcast TV), Factors influencing involvement (Personal, Object, Situational), and the four core structural dimensions (Moderating, Variables, Properties, Response factors).",
      tags: [
        "Mid Sem Important",
        "Consumer Involvement",
        "High Involvement",
        "Low Involvement",
        "Media Involvement",
        "FCB Grid",
      ],
      blocks: [
        {
          type: "h3",
          text: "1. Definition & Nature of Consumer Involvement",
        },
        {
          type: "p",
          text: "**Consumer involvement** refers to the perceived personal relevance, importance, and psychological interest an individual attaches to a product category, brand, advertisement, or purchase decision under specific situational conditions.",
        },
        {
          type: "ul",
          items: [
            "**High Involvement**: High-priced, risky, complex, or ego-enhancing products demand deep cognitive processing and extensive information search (e.g., purchasing a luxury apartment or specialized medical insurance).",
            "**Low Involvement**: Low-priced, routine items with low perceived risk require minimal cognitive effort and rely on brand familiarity and top-of-mind recall (e.g., buying ballpoint pens or chewing gum).",
          ],
        },
        {
          type: "h3",
          text: "2. Types of Media Involvement",
        },
        {
          type: "table",
          caption: "High-Involvement vs. Low-Involvement Media Processing",
          headers: ["Media Classification", "Representative Channels", "Processing Mechanism", "Impact on Attitude Formation"],
          rows: [
            [
              "**High-Involvement Media**",
              "Print Media (Newspapers, magazines), In-depth Blogs, Dedicated Websites, Whitepapers.",
              "Active, self-paced, high cognitive processing; reader controls exposure rate and analyzes copy.",
              "Leads to systematic cognitive attitude formation ($Cognitive \\rightarrow Affective \\rightarrow Conative$).",
            ],
            [
              "**Low-Involvement Media**",
              "Broadcast Television, Radio, Outdoor Billboards, Social Media Short-form Video Feeds.",
              "Passive, pictorial, holistic sensory processing; viewer absorbs impressions effortlessly.",
              "Leads to perceptual familiarity and behavioural trial ($Cognitive \\rightarrow Conative \\rightarrow Affective$).",
            ],
          ],
        },
        {
          type: "h3",
          text: "3. The Four Core Dimensions of Consumer Involvement",
        },
        {
          type: "table",
          caption: "Structural Dimensions of the Consumer Involvement Model",
          headers: ["Dimension", "Sub-Factors & Elements", "Operational Mechanism"],
          rows: [
            [
              "**1. Moderating Factors**",
              "• Opportunity to process (distractions, time pressure).\n• Ability to process (product knowledge, cognitive capacity).",
              "Environmental or cognitive constraints that limit the consumer's capacity to engage in detailed evaluation.",
            ],
            [
              "**2. Involvement Variables**",
              "• **Person**: Personal values, ego needs, core interests.\n• **Stimulus / Object**: Product differentiation, uniqueness.\n• **Situation**: Social context (buying wine for a boss vs. casual dinner).",
              "The foundational triad of antecedents that jointly determine the overall involvement baseline.",
            ],
            [
              "**3. Involvement Properties**",
              "• **Intensity**: Level of arousal (High vs. Low).\n• **Direction**: Focus of interest (product, ad, or brand).\n• **Persistence**: Duration (Enduring vs. Situational).",
              "The observable characteristics describing the strength and lifespan of the involvement state.",
            ],
            [
              "**4. Response Factors**",
              "• Information Search Intensity.\n• Information Processing Depth.\n• Rigor of Alternative Evaluation.\n• Post-Decision Loyalty and Advocacy.",
              "The resulting behavioral actions exhibited by the consumer under varying involvement intensities.",
            ],
          ],
        },
      ],
    },

    // ==========================================
    // TOPIC 9: Consumer Motivation & Needs
    // ==========================================
    {
      id: "cb-topic-9",
      slug: "consumer-motivation-needs-and-defense-mechanisms",
      number: 9,
      title: "Consumer Motivation, Types of Needs, Frustration & Defense Mechanisms",
      unit: "Mid Sem Important",
      marks: 14,
      lecture: "Lecture 9: Motivation Theory & Ego Defenses",
      summary:
        "Comprehensive 14-mark master note on Consumer Motivation: psychological tension model, generic vs product-specific goals, 10 types of consumer needs, dynamics of substitute goals, Frustration and 4 Defense Mechanisms (Aggression, Rationalization, Regression, Withdrawal), Motivational Conflicts, and McClelland's Trio of Needs.",
      tags: [
        "Mid Sem Important",
        "Consumer Motivation",
        "Needs Hierarchy",
        "Defense Mechanisms",
        "Motivational Conflicts",
        "Trio of Needs",
      ],
      blocks: [
        {
          type: "h3",
          text: "1. Motivation as a Psychological Force",
        },
        {
          type: "p",
          text: "**Motivation** is the driving psychological force within individuals that impels them to action. It is generated by a state of uncomfortable internal tension arising from unfulfilled physiological (innate) or psychological (acquired) needs. Consumers seek to reduce this tension through goal-directed behaviour.",
        },
        {
          type: "ul",
          items: [
            "**Generic Goals**: General categories of goals consumers seek to satisfy a need (e.g., *\"I need to buy a pair of jeans\"*).",
            "**Product-Specific Goals**: Specifically branded products selected to achieve need satisfaction (e.g., *\"I want Calvin Klein 501 jeans\"*).",
          ],
        },
        {
          type: "h3",
          text: "2. Spectrum of Consumer Needs",
        },
        {
          type: "table",
          caption: "Ten Core Consumer Needs and Marketing Applications",
          headers: ["Need Classification", "Psychological Description", "Marketing & Product Application"],
          rows: [
            ["**1. Innate vs. Acquired**", "Primary biological needs (food, water) vs. learned psychogenic needs (fashion, status).", "Basic grocery staples vs. premium luxury brand apparel."],
            ["**2. Safety & Health**", "Desire for physical protection, security, and disease prevention.", "Health insurance policies, sanitizers, advanced automobile airbags."],
            ["**3. Love & Affection**", "Need for warmth, belonging, social bonding, and romantic connection.", "Dating platforms, personalized greeting gifts, family travel packages."],
            ["**4. Financial Security**", "Drive to accumulate wealth, reduce tax liability, and secure retirement.", "Fixed deposits, mutual fund SIPs, pension schemes."],
            ["**5. Social Image & Status**", "Desire for social recognition, prestige, and conspicuous display.", "Luxury watches, executive country club memberships, flagship smartphones."],
            ["**6. Pleasure & Hedonism**", "Need for sensory delight, fun, excitement, and relaxation.", "Theme parks, fine dining restaurants, gaming consoles, resort vacations."],
            ["**7. Possession & Collecting**", "Desire to own, collect, and safeguard tangible items.", "Art collections, rare mechanical wristwatches, vintage automobile auctions."],
            ["**8. Giving & Altruism**", "Desire to support others or reward oneself through self-gifting.", "Charitable donations, luxury self-rewards after career milestones."],
            ["**9. Information & Curiosity**", "Need for cognitive stimulation, knowledge acquisition, and learning.", "Digital news subscriptions, educational masterclasses, documentary streaming."],
            ["**10. Variety & Novelty**", "Desire to break routine and experience new sensory stimuli.", "Seasonal flavour launches in beverages, limited-edition snack varieties."],
          ],
        },
        {
          type: "h3",
          text: "3. Goal Frustration & Defense Mechanisms",
        },
        {
          type: "p",
          text: "When an individual is blocked from attaining their desired goal, psychological frustration ensues. While some consumers adapt constructively by selecting **Substitute Goals**, others deploy unconscious **Defense Mechanisms** to protect self-esteem:",
        },
        {
          type: "table",
          caption: "Four Primary Psychological Defense Mechanisms in Consumer Contexts",
          headers: ["Defense Mechanism", "Psychological Definition", "Consumer Behavioral Manifestation"],
          rows: [
            [
              "**1. Aggression**",
              "Directing anger, hostility, or boycott actions toward the source of frustration.",
              "A frustrated consumer slamming down an appliance, posting viral scathing reviews, or organizing brand boycotts.",
            ],
            [
              "**2. Rationalization**",
              "Inventing plausible, socially acceptable reasons for goal failure to preserve ego.",
              "A consumer unable to afford a ₹1 Lakh iPhone claiming: *\"Apple phones are overhyped and have poor battery life anyway.\"*",
            ],
            [
              "**3. Regression**",
              "Reverting to childish, immature, or irrational behavior under stress.",
              "Shoppers at a flash clearance sale aggressively fighting and tearing garments rather than allowing others to have them.",
            ],
            [
              "**4. Withdrawal**",
              "Mentally or physically disconnecting from the frustrating purchase situation.",
              "A consumer confused by complex technical jargon on an investment portal exiting the website entirely and abandoning the transaction.",
            ],
          ],
        },
        {
          type: "h3",
          text: "4. The Three Types of Motivational Conflicts",
        },
        {
          type: "table",
          caption: "Motivational Conflicts and Marketer Solutions",
          headers: ["Conflict Type", "Psychological Dilemma", "Marketing Resolution Strategy"],
          rows: [
            [
              "**Approach–Approach**",
              "Choosing between two equally desirable, attractive alternatives.",
              "Bundle both benefits together (e.g., a travel package combining beach relaxation with adventure sports).",
            ],
            [
              "**Avoidance–Avoidance**",
              "Choosing between two undesirable options (e.g., paying for car repair vs. buying new vehicle).",
              "Offer low-interest repair financing or generous trade-in replacement allowances.",
            ],
            [
              "**Approach–Avoidance**",
              "A single goal has both positive attractions and negative consequences (e.g., delicious dessert vs. high calories).",
              "Formulate healthy alternatives (e.g., zero-sugar desserts, guilt-free low-calorie snacks).",
            ],
          ],
        },
        {
          type: "h3",
          text: "5. McClelland's Trio of Needs",
        },
        {
          type: "ul",
          items: [
            "**Need for Power ($nPow$)**: Individual's desire to control their environment and influence others $\\rightarrow$ Targeted via luxury status symbols, executive products, and authority positioning.",
            "**Need for Affiliation ($nAff$)**: Desire for friendship, social acceptance, and belonging $\\rightarrow$ Targeted via community-driven branding, social apps, and relational gifts.",
            "**Need for Achievement ($nAch$)**: Desire to accomplish challenging goals and demonstrate personal competence $\\rightarrow$ Targeted via fitness trackers, professional certifications, and competitive sports gear.",
          ],
        },
      ],
    },

    // ==========================================
    // TOPIC 10: Marketer Strategies to Motivate
    // ==========================================
    {
      id: "cb-topic-10",
      slug: "marketer-strategies-to-motivate-consumers",
      number: 10,
      title: "Marketer Strategies to Motivate Consumers & Challenges of Motivation Research",
      unit: "Mid Sem Important",
      marks: 14,
      lecture: "Lecture 10: Motivational Marketing & Research Methodologies",
      summary:
        "Comprehensive 14-mark master note on the 5 core marketer strategies to activate consumer motivation (Money, Incentives, Loyalty Programs, Enhancing Perceived Risk, Provoking Curiosity), analysis of motivational intensity, and the methodological challenges of qualitative Motivation Research.",
      tags: [
        "Mid Sem Important",
        "Motivation Strategies",
        "Loyalty Programs",
        "Perceived Risk",
        "Curiosity",
        "Motivation Research",
      ],
      blocks: [
        {
          type: "h3",
          text: "1. The Five Core Marketing Strategies to Activate Motivation",
        },
        {
          type: "table",
          caption: "Five Marketer Motivational Strategies: Mechanisms & Limitations",
          headers: ["Strategy", "Operational Mechanism", "Practical Business Example", "Inherent Limitation / Risk"],
          rows: [
            [
              "**1. Motivating with Money**",
              "Price cuts, cash discounts, instant rebates, and promotional coupons.",
              "Festive discount sales offering flat ₹5,000 off on consumer electronics.",
              "Erodes profit margins; attracts transient brand switchers; increases long-term price sensitivity.",
            ],
            [
              "**2. Providing Other Incentives**",
              "Free promotional premiums, contests, sweepstakes, and bundled gifts.",
              "Offering a complimentary branded travel bag with a suitcase purchase.",
              "**Value-Discounting Hypothesis**: Items offered as free premiums are perceived as having lower quality/value.",
            ],
            [
              "**3. Loyalty Programs**",
              "Rewarding cumulative repeat purchases through tier-based points and privileges.",
              "Airline Frequent Flyer Miles (Star Alliance) and hotel tier upgrades.",
              "Requires substantial long-term IT investment; points liability management.",
            ],
            [
              "**4. Enhancing Perceived Risk**",
              "Educating consumers on health, financial, or physical hazards to induce precautionary action.",
              "Bayer Aspirin campaigns highlighting cardiovascular disease statistics to motivate daily regimen.",
              "Must avoid triggering excessive fear, which leads to psychological defense withdrawal.",
            ],
            [
              "**5. Provoking Curiosity**",
              "Creating teaser campaigns and advertising unexpected, novel product benefits.",
              "Teaser billboards displaying cryptic countdowns before a flagship smartphone reveal.",
              "Works primarily for new, disruptive product launches; requires high novelty.",
            ],
          ],
        },
        {
          type: "h3",
          text: "2. Motivational Intensity and Involvement Interplay",
        },
        {
          type: "p",
          text: "**Motivational Intensity** (the strength of consumer drive) combined with **Involvement** (personal relevance of the category) determines the total cognitive and physical effort a consumer will expend in satisfying a need.",
        },
        {
          type: "ul",
          items: [
            "**High Intensity + High Involvement**: Comprehensive deliberation, active multi-source search, and high brand sensitivity (e.g., buying a family home).",
            "**High Intensity + Low Involvement**: Urgent drive with low category interest (e.g., running out of vehicle fuel on a highway $\\rightarrow$ stopping at the very first available gas station).",
            "**Low Intensity + Low Involvement**: Passive habitual buying with zero effort (e.g., picking up grocery matches).",
          ],
        },
        {
          type: "h3",
          text: "3. Methodological Challenges in Motivation Research",
        },
        {
          type: "p",
          text: "Uncovering true consumer motives presents fundamental research obstacles because human motivation is complex, layered, and often subconscious:",
        },
        {
          type: "ol",
          items: [
            "**Unconscious Motivation**: Consumers often do not consciously understand why they prefer certain colours, shapes, or luxury brands (Freudian subconscious drives).",
            "**Social Desirability Bias**: Consumers are reluctant to disclose real motives (e.g., vanity, social snobbery, fear of aging) and instead articulate rationalized justifications (e.g., \"I bought this ₹20 Lakh sports bike because of its disc brake safety\").",
            "**Dynamic Evolution**: Motives transform rapidly across lifecycle stages, career transitions, and economic status shifts.",
            "**Qualitative Research Solutions**: Marketers employ **Projective Techniques** (Sentence Completion, Thematic Apperception Tests / TAT, Word Association, Metaphor Analysis) to bypass ego defenses and uncover underlying psychological drivers.",
          ],
        },
      ],
    },
  ],

  // ==========================================
  // MODEL 14-MARK EXAM QUESTIONS & ANSWERS
  // ==========================================
  examQuestions: [
    {
      id: "cb-eq-1",
      number: 1,
      title: "Customers vs Consumers, Four Buying Roles & Marketing Strategy Linkage",
      marks: 14,
      relatedSlugs: ["customers-vs-consumers-and-buying-roles"],
      question:
        "Differentiate between a customer and a consumer. Explain the four consumer buying roles (Initiator, Influencer, Buyer, User) with suitable examples. Discuss how understanding consumer behaviour informs Market Segmentation, Product Positioning, and Customer Value creation.",
      blocks: [
        {
          type: "h3",
          text: "1. Distinction Between Customer and Consumer",
        },
        {
          type: "p",
          text: "A customer is the transacting agent who executes the purchase and pays for the product, whereas a consumer is the ultimate end user who utilizes the product to derive satisfaction. In many instances (e.g., adult purchasing personal apparel), the customer and consumer are identical. In family or institutional buying (e.g., buying baby diapers or enterprise software), the customer and consumer are distinct individuals.",
        },
        {
          type: "h3",
          text: "2. The Four Consumer Buying Roles",
        },
        {
          type: "table",
          caption: "Consumer Buying Roles with Educational Software Example",
          headers: ["Role", "Core Responsibility", "Real-World Illustration"],
          rows: [
            ["**1. Initiator**", "Recognizes the initial unmet need and starts the buying process.", "Student tells parents they need specialized GMAT preparation software."],
            ["**2. Influencer**", "Provides expertise, reviews, and criteria shaping brand choice.", "Coaching professor recommends a specific adaptive software platform."],
            ["**3. Buyer**", "Executes the commercial transaction, payment, and terms.", "Parent enters credit card details and purchases the annual subscription."],
            ["**4. User**", "Consumes the product and evaluates actual performance.", "Student studies modules daily, determining actual post-purchase satisfaction."],
          ],
        },
        {
          type: "h3",
          text: "3. Strategic Linkage to Marketing Strategy",
        },
        {
          type: "ul",
          items: [
            "**Market Segmentation**: Enables firms to identify viable, homogeneous clusters (e.g., Femina targeting modern independent working women).",
            "**Product Positioning**: Establishes a unique perceptual identity in the target mind (e.g., Samsung S-Series for high-end photography vs. M-Series for battery stamina).",
            "**Customer Value Equation**: Optimizes $PV = PB - PC$ by maximizing product, service, and brand benefits while reducing monetary price, time, effort, and risk costs.",
          ],
        },
      ],
    },
    {
      id: "cb-eq-2",
      number: 2,
      title: "Product Motives versus Patronage Motives: Emotional & Rational Dimensions",
      marks: 14,
      relatedSlugs: ["product-motives-vs-patronage-motives"],
      question:
        "What are buying motives? Classify buying motives into Product Motives (Emotional and Rational) and Patronage Motives (Emotional and Rational). Provide a comprehensive comparative matrix and real-world purchase examples.",
      blocks: [
        {
          type: "h3",
          text: "1. Definition and Classification of Buying Motives",
        },
        {
          type: "p",
          text: "A buying motive is an internal desire, urge, or instinct that drives a consumer to execute a purchase. Buying motives are classified into Product Motives (why to buy a specific product/brand) and Patronage Motives (where to buy from a specific store/channel).",
        },
        {
          type: "h3",
          text: "2. The Four Quadrants of Buying Motives",
        },
        {
          type: "table",
          caption: "The Four-Quadrant Buying Motive Framework",
          headers: ["Motive Classification", "Emotional Dimension", "Rational Dimension"],
          rows: [
            [
              "**Product Motives**",
              "Driven by pride, ego, vanity, status display, or sensory attraction (e.g., buying a luxury sports watch).",
              "Driven by cost-per-use, fuel economy, durability, safety ratings (e.g., buying a 5-star inverter AC).",
            ],
            [
              "**Patronage Motives**",
              "Driven by store prestige, aesthetic ambience, celebrity visits (e.g., shopping at an exclusive luxury boutique).",
              "Driven by low prices, massive assortment, free parking, return ease (e.g., shopping at D-Mart or Amazon).",
            ],
          ],
        },
      ],
    },
    {
      id: "cb-eq-3",
      number: 3,
      title: "Traditional Models of Consumer Behaviour: Economic, Learning, Psychoanalytic & Sociological",
      marks: 14,
      relatedSlugs: ["traditional-models-of-consumer-behaviour"],
      question:
        "Critically evaluate the four traditional models of consumer behaviour: (1) Marshallian Economic Model, (2) Pavlovian Learning Model, (3) Freudian Psychoanalytic Model, and (4) Veblenian Sociological Model. Contrast their key mechanisms and limitations in a comparative matrix.",
      blocks: [
        {
          type: "h3",
          text: "Comprehensive Analysis of Traditional Models",
        },
        {
          type: "table",
          caption: "Traditional Consumer Behaviour Models Synthesis",
          headers: ["Model", "Core Mechanism", "Key Psychological / Economic Premise", "Primary Marketing Application"],
          rows: [
            ["**Economic Model**", "Price, Substitution, and Income Effects.", "Rational utility maximization under budget constraints.", "Discount pricing, sales promotions, value positioning."],
            ["**Learning Model**", "Drives, Cues, Responses, Reinforcement.", "Conditioned habit formation through repeated positive experience.", "Brand loyalty rewards, consistent packaging cues, jingles."],
            ["**Psychoanalytic Model**", "Id, Ego, and Superego psychic conflicts.", "Unconscious, deep-seated desires and symbolic gratification.", "Sensory branding, status appeals, eco-friendly guilt reduction."],
            ["**Sociological Model**", "Reference groups, social class, conspicuous consumption.", "Social emulation and peer-group conformity.", "Celebrity endorsements, aspirational lifestyle imagery."],
          ],
        },
      ],
    },
    {
      id: "cb-eq-4",
      number: 4,
      title: "Contemporary Models: Howard-Sheth, Nicosia & EKB Models",
      marks: 14,
      relatedSlugs: ["contemporary-models-howard-sheth-nicosia-ekb"],
      question:
        "Explain the Howard-Sheth Model of Consumer Behaviour detailing its four component sets (Inputs, Perceptual Constructs, Learning Constructs, Outputs). Compare it with the Nicosia Model across structure, stimuli, and feedback loops.",
      blocks: [
        {
          type: "h3",
          text: "1. The Howard-Sheth Model Framework",
        },
        {
          type: "p",
          text: "The Howard-Sheth model explains consumer decision-making across Extensive Problem Solving (EPS), Limited Problem Solving (LPS), and Routinized Response Behaviour (RRB) using four core variable sets: Input Stimuli (Significative, Symbolic, Social), Perceptual Constructs (Sensitivity, Bias, Search), Learning Constructs (Motives, Evoked Set, Mediators, Predisposition, Inhibitors, Satisfaction), and Output Variables (Attention $\\rightarrow$ Comprehension $\\rightarrow$ Attitude $\\rightarrow$ Intention $\\rightarrow$ Purchase).",
        },
        {
          type: "h3",
          text: "2. Comparison: Howard-Sheth vs. Nicosia Model",
        },
        {
          type: "table",
          caption: "Howard-Sheth versus Nicosia Model",
          headers: ["Dimension", "Howard-Sheth Model", "Nicosia Model"],
          rows: [
            ["**Focus**", "Internal cognitive and learning constructs of the buyer.", "Interactive communications loop between enterprise and consumer."],
            ["**Structure**", "Input $\\rightarrow$ Constructs $\\rightarrow$ Output $\\rightarrow$ Exogenous.", "Four sequential fields (Firm-Consumer $\\rightarrow$ Search $\\rightarrow$ Purchase $\\rightarrow$ Feedback)."],
            ["**Stimuli**", "Significative, Symbolic, and Social stimuli.", "Firm's advertising message."],
            ["**Feedback**", "Satisfaction feeds back into learning constructs.", "Dual feedback: post-purchase experience to consumer, sales data to firm."],
          ],
        },
      ],
    },
    {
      id: "cb-eq-5",
      number: 5,
      title: "Comprehensive Determinants of Consumer Behaviour",
      marks: 14,
      relatedSlugs: ["factors-influencing-consumer-behaviour"],
      question:
        "Discuss in detail the four major factors influencing consumer behaviour: Cultural, Social, Personal, and Psychological. How do AIOs and the VALS typology assist marketers in psychographic segmentation?",
      blocks: [
        {
          type: "h3",
          text: "Synthesis of Consumer Behaviour Determinants",
        },
        {
          type: "ul",
          items: [
            "**Cultural Factors**: Culture, Subculture (geographic, ethnic, generational), and Social Class (hierarchical status tiers).",
            "**Social Factors**: Reference Groups (membership, aspirational, dissociative), Opinion Leaders, Family roles, and Status.",
            "**Personal Factors**: Age & Family Life Cycle stages, Occupation, Economic situation, Lifestyle (AIOs: Activities, Interests, Opinions), and Brand Personality traits.",
            "**Psychological Factors**: Motivation (Maslow), Perception (Selective attention/distortion/retention), Learning (conditioning), and Attitudes (Tri-component model).",
            "**VALS Typology**: Segments consumers across 8 categories based on primary motivation (Ideals, Achievement, Self-Expression) and resources: Innovators, Thinkers, Believers, Achievers, Strivers, Experiencers, Makers, Survivors.",
          ],
        },
      ],
    },
    {
      id: "cb-eq-6",
      number: 6,
      title: "Gender Influences on Consumer Buying Behaviour",
      marks: 14,
      relatedSlugs: ["gender-influences-on-consumer-behaviour"],
      question:
        "Explain how gender influences consumer buying behaviour. Contrast the 'Hunter vs. Gatherer' shopping orientations and outline gender-specific marketing communication strategies.",
      blocks: [
        {
          type: "h3",
          text: "1. Agentic vs. Communal Information Processing",
        },
        {
          type: "p",
          text: "Men typically exhibit an **agentic orientation** (task-focused, efficient, self-directed, data-centric), viewing shopping as a mission to complete quickly. Women exhibit a **communal orientation** (relational, comprehensive, exploratory, detail-oriented), viewing shopping as an immersive experiential journey.",
        },
        {
          type: "h3",
          text: "2. Communication Design Matrix",
        },
        {
          type: "table",
          caption: "Gender-Specific Communication Strategies",
          headers: ["Strategy Element", "Targeting Female Consumers", "Targeting Male Consumers"],
          rows: [
            ["**Copy & Content**", "Detailed narratives, comprehensive feature explanations, holistic lifestyle context.", "Bold headlines, concise bullet points, technical specs, direct bottom-line payoff."],
            ["**Imagery & Music**", "Warm evocative colours, relatable human relationships, soft harmonic music.", "High-contrast bold colours (navy/black), action visuals, energetic/bold audio."],
            ["**Value Appeals**", "Wellness, beauty, empowerment, practical family value, smart savings pride.", "Superior performance, ambition, power, speed, status recognition."],
          ],
        },
      ],
    },
    {
      id: "cb-eq-7",
      number: 7,
      title: "The 5-Stage Decision Process, Buying Situations & Expectancy Disconfirmation",
      marks: 14,
      relatedSlugs: ["consumer-decision-process-and-buying-situations"],
      question:
        "Detail the 5 stages of the Consumer Decision-Making Process. Explain Oliver's Expectancy Disconfirmation Model and contrast Extended Problem Solving (EPS), Limited Problem Solving (LPS), and Routinized Problem Solving (RPS).",
      blocks: [
        {
          type: "h3",
          text: "1. 5-Stage Decision Model & Marketer Responses",
        },
        {
          type: "ol",
          items: [
            "**1. Problem Recognition**: Stimulating unfulfilled need awareness via lifestyle marketing.",
            "**2. Information Search**: Providing easily accessible product specs across digital search and dealer channels.",
            "**3. Evaluation of Alternatives**: Communicating brand superiority on key evaluative criteria.",
            "**4. Purchase Decision**: Minimizing retail friction through financing, 0% EMI, and instant delivery.",
            "**5. Post-Purchase Evaluation**: Delivering onboarding guides and warranties to prevent cognitive dissonance.",
          ],
        },
        {
          type: "h3",
          text: "2. Expectancy Disconfirmation & Buying Situations",
        },
        {
          type: "p",
          text: "Oliver's model states that satisfaction is determined by $P - E$. Positive disconfirmation ($P > E$) produces customer delight; negative disconfirmation ($P < E$) yields dissatisfaction. Buying situations vary from Extended Problem Solving (high risk, extensive search like cars) to Limited Problem Solving (moderate search like small appliances) to Routinized Response Behaviour (habitual repeat purchase like tea/detergent).",
        },
      ],
    },
    {
      id: "cb-eq-8",
      number: 8,
      title: "Consumer Involvement: Concepts, Media Processing & Dimensions",
      marks: 14,
      relatedSlugs: ["consumer-involvement-concepts-media-dimensions"],
      question:
        "Define consumer involvement. Differentiate between high-involvement and low-involvement media processing. Explain the four core dimensions of consumer involvement (Moderating factors, Variables, Properties, and Response factors).",
      blocks: [
        {
          type: "h3",
          text: "1. Conceptual Foundations of Involvement",
        },
        {
          type: "p",
          text: "Consumer involvement is the degree of personal relevance, importance, and cognitive effort a buyer attaches to a product or decision. High involvement applies to expensive, risky, ego-related purchases; low involvement applies to routine, low-risk FMCG goods.",
        },
        {
          type: "h3",
          text: "2. Media Involvement and Four Structural Dimensions",
        },
        {
          type: "ul",
          items: [
            "**High-Involvement Media (Print/Digital)**: Active, self-paced, cognitive processing leading to systematic attitude formation ($Cognitive \\rightarrow Affective \\rightarrow Conative$).",
            "**Low-Involvement Media (Broadcast TV/Outdoor)**: Passive, pictorial sensory absorption leading to perceptual familiarity ($Cognitive \\rightarrow Conative \\rightarrow Affective$).",
            "**Dimension 1 (Moderating Factors)**: Opportunity and ability to process (distractions, time pressure, knowledge).",
            "**Dimension 2 (Involvement Variables)**: Person (values), Stimulus (differentiation), Situation (social context).",
            "**Dimension 3 (Involvement Properties)**: Intensity (High/Low), Direction (Product/Ad), Persistence (Enduring/Situational).",
            "**Dimension 4 (Response Factors)**: Information search intensity, processing depth, and decision rigor.",
          ],
        },
      ],
    },
    {
      id: "cb-eq-9",
      number: 9,
      title: "Consumer Motivation, Need Types, Maslow's Hierarchy & Defense Mechanisms",
      marks: 14,
      relatedSlugs: ["consumer-motivation-needs-and-defense-mechanisms"],
      question:
        "Explain motivation as a psychological force. Outline the spectrum of consumer needs and explain how consumers react to goal frustration using psychological defense mechanisms (Aggression, Rationalization, Regression, Withdrawal).",
      blocks: [
        {
          type: "h3",
          text: "1. Motivation and Need Types",
        },
        {
          type: "p",
          text: "Motivation arises from unfulfilled needs creating internal psychological tension. Needs span innate biological requirements (food, safety) and acquired psychogenic drives (status, affiliation, achievement, variety, hedonism).",
        },
        {
          type: "h3",
          text: "2. Frustration and Ego Defense Mechanisms",
        },
        {
          type: "table",
          caption: "Defense Mechanisms in Consumer Behaviour",
          headers: ["Defense Mechanism", "Psychological Definition", "Consumer Market Example"],
          rows: [
            ["**Aggression**", "Directing anger and hostility toward the source of frustration.", "Writing scathing viral complaint reviews or organizing brand boycotts."],
            ["**Rationalization**", "Inventing plausible excuses for being unable to attain a goal.", "Claiming an unaffordable luxury smartphone has poor battery life anyway."],
            ["**Regression**", "Displaying immature, childish, or irrational behavior under stress.", "Shoppers fighting over bargain merchandise at clearance sales."],
            ["**Withdrawal**", "Physically or mentally leaving the frustrating situation.", "Exiting a confusing e-commerce portal and abandoning the digital cart."],
          ],
        },
      ],
    },
    {
      id: "cb-eq-10",
      number: 10,
      title: "Marketer Strategies to Activate Consumer Motivation & Motivation Research",
      marks: 14,
      relatedSlugs: ["marketer-strategies-to-motivate-consumers"],
      question:
        "Describe the five core strategies marketers use to motivate consumers (Money, Other Incentives, Loyalty Programs, Enhancing Perceived Risk, Provoking Curiosity). Discuss the methodological challenges of qualitative motivation research.",
      blocks: [
        {
          type: "h3",
          text: "1. The Five Core Motivational Strategies",
        },
        {
          type: "table",
          caption: "Motivational Strategies and Business Trade-offs",
          headers: ["Strategy", "Mechanism", "Strategic Trade-off / Limitation"],
          rows: [
            ["**1. Money**", "Discounts, rebates, coupons.", "Erodes margins; attracts switchers; heightens price sensitivity."],
            ["**2. Other Incentives**", "Free premiums, sweepstakes, gifts.", "Value-discounting hypothesis: premiums perceived as cheap."],
            ["**3. Loyalty Programs**", "Points, tiers, exclusive perks.", "High operational cost; requires long-term commitment."],
            ["**4. Enhance Perceived Risk**", "Educate about health/financial hazards.", "Risk of inducing panic and defensive withdrawal."],
            ["**5. Provoke Curiosity**", "Teaser ads, novel/unexpected benefits.", "Effective primarily for new disruptive launches."],
          ],
        },
        {
          type: "h3",
          text: "2. Challenges in Motivation Research",
        },
        {
          type: "p",
          text: "Motivation research faces three primary hurdles: (1) Unconscious motivations that consumers cannot verbalize, (2) Social desirability bias where respondents hide vanity or fear, and (3) Dynamic evolution of motives over time. To overcome these, researchers deploy Projective Techniques (Sentence Completion, TAT, Word Association) to uncover hidden psychogenic drivers.",
        },
      ],
    },
  ],

  // ==========================================
  // GLOSSARY OF CORE CONCEPTS
  // ==========================================
  glossary: [
    {
      id: "cb-g1",
      term: "Customer vs. Consumer",
      body: "A customer is the purchasing entity executing the commercial financial transaction; a consumer is the ultimate end user who utilizes the product and derives utility from it.",
      topicSlug: "customers-vs-consumers-and-buying-roles",
    },
    {
      id: "cb-g2",
      term: "Initiator",
      body: "The individual in a buying center or household who first identifies an unmet need and initiates the purchase consideration process.",
      topicSlug: "customers-vs-consumers-and-buying-roles",
    },
    {
      id: "cb-g3",
      term: "Product Motives",
      body: "The underlying impulses, desires, and considerations that induce a consumer to purchase a specific product or brand over competing product categories.",
      topicSlug: "product-motives-vs-patronage-motives",
    },
    {
      id: "cb-g4",
      term: "Patronage Motives",
      body: "The considerations and impulses that induce a consumer to buy from a particular store, dealer, website, or retail establishment.",
      topicSlug: "product-motives-vs-patronage-motives",
    },
    {
      id: "cb-g5",
      term: "Law of Diminishing Marginal Utility",
      body: "The economic principle stating that as a consumer consumes additional units of a good, the marginal utility derived from each successive unit decreases.",
      topicSlug: "traditional-models-of-consumer-behaviour",
    },
    {
      id: "cb-g6",
      term: "Classical Conditioning (Pavlov)",
      body: "A learning theory where a conditioned stimulus (brand jingle/logo) paired with an unconditioned stimulus produces a learned conditioned response.",
      topicSlug: "traditional-models-of-consumer-behaviour",
    },
    {
      id: "cb-g7",
      term: "Id, Ego, Superego",
      body: "Sigmund Freud's three-part model of the human psyche: the Id seeks instant pleasure, the Superego imposes internalized moral conscience, and the Ego realistically mediates between them.",
      topicSlug: "traditional-models-of-consumer-behaviour",
    },
    {
      id: "cb-g8",
      term: "Howard-Sheth Model",
      body: "A comprehensive cognitive model of consumer decision-making structuring inputs, perceptual constructs, learning constructs, and outputs across EPS, LPS, and RRB.",
      topicSlug: "contemporary-models-howard-sheth-nicosia-ekb",
    },
    {
      id: "cb-g9",
      term: "Nicosia Model",
      body: "A four-field interactive systems model explaining the circular communication and feedback loop between the business firm and the prospective consumer.",
      topicSlug: "contemporary-models-howard-sheth-nicosia-ekb",
    },
    {
      id: "cb-g10",
      term: "VALS Typology",
      body: "A psychographic segmentation framework classifying consumers into 8 segments (Innovators, Thinkers, Achievers, Experiencers, Believers, Strivers, Makers, Survivors) based on primary motivation and resources.",
      topicSlug: "factors-influencing-consumer-behaviour",
    },
    {
      id: "cb-g11",
      term: "Reference Groups",
      body: "Social groups that serve as direct (membership) or indirect (aspirational, dissociative) points of comparison in shaping an individual's attitudes and purchase behaviour.",
      topicSlug: "factors-influencing-consumer-behaviour",
    },
    {
      id: "cb-g12",
      term: "Agentic vs. Communal Orientation",
      body: "Psychological orientations where agentic goals emphasize task efficiency, self-assertion, and speed (typically male), while communal goals emphasize relationships and holistic exploration (typically female).",
      topicSlug: "gender-influences-on-consumer-behaviour",
    },
    {
      id: "cb-g13",
      term: "Expectancy Disconfirmation Model",
      body: "Richard Oliver's satisfaction model comparing pre-purchase performance expectations against post-purchase perceived performance to determine positive or negative disconfirmation.",
      topicSlug: "consumer-decision-process-and-buying-situations",
    },
    {
      id: "cb-g14",
      term: "Post-Purchase Cognitive Dissonance",
      body: "Leon Festinger's concept of post-decisional anxiety or second-guessing experienced after committing to a high-involvement purchase between competing alternatives.",
      topicSlug: "consumer-decision-process-and-buying-situations",
    },
    {
      id: "cb-g15",
      term: "Customer Perceived Value (PV)",
      body: "The net evaluation calculated as total perceived product, service, and brand benefits minus total monetary, time, energy, and psychological costs (PV = PB - PC).",
      topicSlug: "consumer-decision-process-and-buying-situations",
    },
    {
      id: "cb-g16",
      term: "High-Involvement Media",
      body: "Print and digital media formats where the reader actively controls information processing speed, facilitating cognitive attitude formation.",
      topicSlug: "consumer-involvement-concepts-media-dimensions",
    },
    {
      id: "cb-g17",
      term: "Substitute Goals",
      body: "Alternative goal states adopted by a consumer when direct attainment of a primary goal is blocked, serving to relieve psychological tension.",
      topicSlug: "consumer-motivation-needs-and-defense-mechanisms",
    },
    {
      id: "cb-g18",
      term: "Rationalization",
      body: "A defense mechanism where frustrated consumers invent plausible, socially acceptable reasons to justify goal failure or unfulfilled desires.",
      topicSlug: "consumer-motivation-needs-and-defense-mechanisms",
    },
    {
      id: "cb-g19",
      term: "Approach-Avoidance Conflict",
      body: "A motivational dilemma where a single purchase choice possesses both highly attractive benefits and painful negative consequences (e.g., luxury indulgence vs. high cost).",
      topicSlug: "consumer-motivation-needs-and-defense-mechanisms",
    },
    {
      id: "cb-g20",
      term: "Value-Discounting Hypothesis",
      body: "The consumer psychology principle stating that products offered as free premiums or incentives are automatically perceived as having inferior quality and value.",
      topicSlug: "marketer-strategies-to-motivate-consumers",
    },
  ],
};
