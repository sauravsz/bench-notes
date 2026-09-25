import type { ExamQuestion } from "./types";

export const examQuestions: ExamQuestion[] = [
  {
    id: "q1",
    number: 1,
    title: "Essentials of a Valid Contract",
    question:
      "Explain the essential elements of a valid contract according to Section 10 of the Indian Contract Act, 1872. When does an agreement fail to become a contract?",
    relatedSlugs: ["contract-agreement-promise", "definitions-essentials"],
    blocks: [
      {
        type: "p",
        text: "Under Section 2(h) of the Indian Contract Act, 1872, 'An agreement enforceable by law is a contract.' Section 10 serves as the primary statutory filter that defines which agreements possess the force of law. Every contract is an agreement, but only those agreements that satisfy the statutory conditions of Section 10 attain the status of a contract.",
      },
      {
        type: "def",
        term: "What agreements are contracts",
        section: "Section 10",
        body: "All agreements are contracts if they are made by the free consent of parties competent to contract, for a lawful consideration and with a lawful object, and are not hereby expressly declared to be void.",
      },
      {
        type: "diagram",
        kind: "contract-formation",
        title: "Statutory Path from Proposal to Enforceable Contract",
        caption: "Step 1: Offer + Acceptance = Agreement. Step 2: Agreement + Section 10 Enforceability = Contract.",
      },
      {
        type: "h3",
        text: "The Essential Elements of a Valid Contract (Section 10 & General Principles)",
      },
      {
        type: "ol",
        items: [
          "_1. Proper Offer and Acceptance (Agreement)_: There must be at least two distinct parties (*promisor* and *promisee*), a lawful proposal signifying willingness to do or abstain (Sec 2(a)), and an absolute, unqualified acceptance (Sec 2(b)) resulting in a genuine meeting of minds (*Consensus ad idem*).",
          "_2. Intention to Create Legal Relations_: Parties must contemplate legal consequences. In commercial transactions, this intention is presumed (*Edwards v. Skyways Ltd*). In purely social or domestic agreements, there is a strong presumption against legal intent (*Balfour v. Balfour [1919]*).",
          "_3. Free Consent (Sections 13 & 14)_: Consent must be voluntary and unpolluted by any of the five statutory vitiating factors: Coercion (Sec 15), Undue Influence (Sec 16), Fraud (Sec 17), Misrepresentation (Sec 18), or Bilateral Mistake of essential fact (Sec 20).",
          "_4. Capacity of Parties (Sections 11 & 12)_: Parties must be of the age of majority (18 years under the Majority Act), of sound mind (Section 12), and not disqualified by any law (e.g., alien enemies, insolvent convicts). Agreements with minors are void *ab initio* (*Mohori Bibee v. Dharmodas Ghose [1903]*).",
          "_5. Lawful Consideration (Section 2(d) & 23)_: The agreement must be supported by *Quid pro quo* (something in return). Consideration must be real, lawful, and not opposed to public policy.",
          "_6. Lawful Object (Section 23)_: The purpose of the contract must not be forbidden by law, defeat the provisions of any law, be fraudulent, cause injury to person or property, or be regarded by the court as immoral.",
          "_7. Certainty and Definiteness (Section 29)_: The terms must be clear and capable of being made certain. An agreement to sell '100 tons of oil' without specifying the grade is void for uncertainty.",
          "_8. Possibility of Performance (Section 56)_: An agreement to do an impossible act (physical or legal impossibility, such as discovering treasure by magic) is void *ab initio*.",
          "_9. Not Expressly Declared Void by Law (Sections 26–30)_: Agreements in restraint of marriage (Sec 26), restraint of trade (Sec 27), restraint of legal proceedings (Sec 28), and wagering pacts (Sec 30) are expressly void.",
          "_10. Legal Formalities (Writing, Stamping, and Registration)_: Where mandated by special statutes (e.g. transfer of immovable property under the Transfer of Property Act, 1882), the agreement must be in writing, properly stamped, and registered.",
        ],
      },
      {
        type: "h3",
        text: "Summary Conclusion",
      },
      {
        type: "p",
        text: "An agreement is the genus, while a contract is the species. An agreement missing any single essential of Section 10 remains a bare promise, void agreement, or voidable transaction, and cannot be enforced through the courts.",
      },
    ],
  },
  {
    id: "q2",
    number: 2,
    title: "What is Consideration and its Nature",
    question:
      "Define Consideration under the Indian Contract Act, 1872. Explain its essential characteristics and importance in contract law.",
    relatedSlugs: ["definitions-essentials", "contract-agreement-promise"],
    blocks: [
      {
        type: "p",
        text: "Consideration is the foundational pillar of contract law, encapsulated in the Latin maxim *Quid pro quo* (something in return). Under common law and the Indian Contract Act, 1872, a bare promise made without consideration is gratuitous (*Nudum Pactum*) and does not create an actionable legal obligation (*Ex nudo pacto non oritur actio*).",
      },
      {
        type: "def",
        term: "Consideration",
        section: "Section 2(d)",
        body: "When, at the desire of the promisor, the promisee or any other person has done or abstained from doing, or does or abstains from doing, or promises to do or to abstain from doing, something, such act or abstinence or promise is called a consideration for the promise.",
      },
      {
        type: "h3",
        text: "Juristic Definitions & Benefit-Detriment Theory",
      },
      {
        type: "ul",
        items: [
          "_Currie v. Misa (1875)_: 'A valuable consideration, in the sense of the law, may consist either in some right, interest, profit, or benefit accruing to the one party, or some forbearance, detriment, loss, or responsibility, given, suffered, or undertaken by the other.'",
          "_Pollock's Definition_: 'Consideration is the price for which the promise of the other is bought, and the promise thus given for value is enforceable.'",
        ],
      },
      {
        type: "h3",
        text: "The Three Temporal Forms of Consideration (Section 2(d))",
      },
      {
        type: "table",
        headers: ["Type of Consideration", "Temporal Dimension in Section 2(d)", "Legal Mechanics & Practical Scenario"],
        rows: [
          [
            "Past Consideration",
            "'...has done or abstained from doing...'",
            "An act performed before the date of the promise, done at the promisor's request. Recognized as valid consideration in India (unlike English law). Example: A saves B's property from fire at B's request; B subsequently promises to pay ₹5,000.",
          ],
          [
            "Present / Executed Consideration",
            "'...does or abstains from doing...'",
            "Consideration supplied simultaneously with the promise (spot cash sales, supermarket checkout).",
          ],
          [
            "Future / Executory Consideration",
            "'...promises to do or to abstain from doing...'",
            "Reciprocal promises where performance will take place at a future date (e.g. delivery of machinery next month against payment upon delivery).",
          ],
        ],
      },
      {
        type: "h3",
        text: "Core Legal Characteristics of Consideration",
      },
      {
        type: "ul",
        items: [
          "_1. Must Move at the Desire of the Promisor_: Voluntary acts performed without the promisor's request do not constitute consideration (*Durga Prasad v. Baldeo*).",
          "_2. May Move from the Promisee or Any Other Person (Stranger to Consideration)_: Unlike English law, in India a stranger to consideration can enforce the contract if he is a party to the contract (*Chinnaya v. Ramayya*).",
          "_3. Consideration May be Positive (Act) or Negative (Abstinence / Forbearance)_: A promise not to file a lawsuit or not to open a competing business in a specific territory constitutes valid consideration.",
          "_4. Need Not Be Adequate, But Must Be Real_: Courts do not evaluate whether a bargain is economically balanced; nominal consideration is legally valid provided it is real and not illusory (*Thomas v. Thomas*).",
        ],
      },
    ],
  },
  {
    id: "q3",
    number: 3,
    title: "Legal Rules Regarding Valid Consideration",
    question:
      "State and explain the legal rules regarding valid consideration under the Indian Contract Act, 1872 with relevant case laws.",
    relatedSlugs: ["definitions-essentials", "contract-agreement-promise"],
    blocks: [
      {
        type: "p",
        text: "For consideration to be valid in the eyes of law, it must conform to strict statutory and common law rules governing desire, privity, reality, and legality.",
      },
      {
        type: "h3",
        text: "The Seven Mandatory Legal Rules of Consideration",
      },
      {
        type: "ol",
        items: [
          "_1. Consideration Must Move at the Desire of the Promisor (*Durga Prasad v. Baldeo [1880]*)*: An act done at the desire of a third party or voluntarily without the promisor's request is no consideration. _Case Facts_: The plaintiff constructed market shops on the order of the District Collector. The defendant shopkeeper later promised to pay a commission to the plaintiff. Held: The promise was void for want of consideration because the construction was done at the Collector's order, not at the defendant's desire.",
          "_2. Consideration May Move from the Promisee or Any Other Person (*Chinnaya v. Ramayya [1882]*)*: Under Indian law, privity of consideration does not exist. A stranger to consideration can sue, provided he is a party to the contract. _Case Facts_: An old lady gifted property to her daughter with a direction to pay an annual annuity to the lady's sister (maternal aunt). The daughter executed an agreement promising the aunt to pay. The daughter later stopped payments, pleading no consideration moved from the aunt. Held: The daughter was liable; consideration had moved from the mother, which was sufficient under Section 2(d).",
          "_3. Consideration May Be Past, Present, or Future_: Section 2(d) expressly covers past services rendered at request, present cash payments, and executory future promises.",
          "_4. Consideration Need Not Be Adequate (Explanation 2 to Section 25)_: The law requires consideration to be real, but does not insist on market adequacy. _Example_: A agrees to sell a luxury car worth ₹20 Lakhs for ₹50,000. If consent was free, the agreement is a valid contract despite extreme inadequacy of price.",
          "_5. Consideration Must Be Real and Not Illusory_: It must not be physically impossible (discovering treasure by magic), legally impossible, or uncertain.",
          "_6. Performance of Pre-Existing Legal or Official Duty is No Consideration_: Doing what one is already legally bound to do under statutory law is no consideration (*Collins v. Godefroy* — witness subpoenaed to give evidence promised payment).",
          "_7. Consideration Must Be Lawful (Section 23)_: It must not be forbidden by law, fraudulent, injurious to others, or opposed to public policy.",
        ],
      },
      {
        type: "callout",
        label: "Privity of Contract vs. Privity of Consideration",
        body: "• Privity of Contract: Only parties to a contract can sue and be sued (Stranger to a contract cannot sue, with exceptions like trust beneficiaries, family settlements).\n• Privity of Consideration: In India, consideration may be supplied by a third party (Chinnaya v. Ramayya); stranger to consideration CAN sue.",
      },
    ],
  },
  {
    id: "q4",
    number: 4,
    title: "Validity of Agreement Without Consideration (Exceptions to Section 25)",
    question:
      "'An agreement made without consideration is void.' Discuss this general rule and examine the statutory exceptions recognized under Section 25.",
    relatedSlugs: ["definitions-essentials", "contract-agreement-promise"],
    blocks: [
      {
        type: "p",
        text: "Section 25 of the Indian Contract Act, 1872 establishes the general rule: *'An agreement made without consideration is void.'* This codifies the classic common law doctrine *Ex nudo pacto non oritur actio* (no cause of action arises from a bare promise). However, to prevent commercial hardship and respect solemn family and charitable commitments, Section 25 and related provisions recognize six well-defined statutory exceptions.",
      },
      {
        type: "h3",
        text: "The Six Statutory Exceptions to Section 25 (When Agreements Without Consideration are Valid)",
      },
      {
        type: "table",
        headers: ["Exception Category", "Statutory Provision", "Mandatory Legal Conditions", "Illustrative Example / Landmark Case"],
        rows: [
          [
            "1. Natural Love & Affection",
            "Section 25(1)",
            "Must be: (a) Expressed in writing, (b) Registered under the Registration Act, (c) Made on account of natural love and affection, (d) Between parties standing in a near relation to each other.",
            "A father, out of natural love, promises in a registered written deed to give ₹5,00,000 to his son. Valid. Note: If near relations execute deed due to marital disputes/quarrels, it is void for want of love (*Rajlukhy Dabee v. Bhootnath Mookerjee*).",
          ],
          [
            "2. Compensation for Past Voluntary Services",
            "Section 25(2)",
            "Must be a promise to compensate, wholly or in part, a person who has already voluntarily done something for the promisor, or something the promisor was legally compellable to do.",
            "A finds B's lost wallet and gives it to him. B voluntarily promises to pay A ₹1,000. The promise is a valid and binding contract.",
          ],
          [
            "3. Promise to Pay a Time-Barred Debt",
            "Section 25(3)",
            "Must be: (a) A promise in writing, (b) Signed by the debtor or his authorized agent, (c) To pay wholly or in part a debt barred by the Limitation Act.",
            "A owes B ₹50,000, barred by the 3-year limitation period. A signs a written undertaking to pay ₹25,000 in settlement. B can legally sue on this new promise.",
          ],
          [
            "4. Completed Gifts",
            "Explanation 1 to Section 25",
            "Nothing in Section 25 affects the validity of any gift actually made and completed as between donor and donee.",
            "A transfers ownership of jewelry to his friend as an unconditional gift. A cannot later demand it back for want of consideration.",
          ],
          [
            "5. Contract of Agency",
            "Section 185",
            "No consideration is necessary to create an agency relationship.",
            "A authorizes B to act as his broker or sales agent. The appointment is legally valid without any consideration passing between them.",
          ],
          [
            "6. Charitable Subscription & Promissory Estoppel",
            "Judicial Doctrine",
            "A promise to subscribe to charity is generally unenforceable, UNLESS the promisee (charity/builder) incurs a financial liability relying on the promise (*Kedarnath v. Gorie Mohammad [1886]*).",
            "Kedarnath case: The commissioner of a town hall started construction relying on defendant's ₹100 subscription promise. Held: Defendant was bound to pay because a financial liability was incurred on his promise.",
          ],
        ],
      },
    ],
  },
  {
    id: "q5",
    number: 5,
    title: "Difference Between Void Contract and Voidable Contract",
    question:
      "Distinguish between a Void Contract and a Voidable Contract under the Indian Contract Act, 1872. Highlight statutory definitions and legal effects.",
    relatedSlugs: ["classification-mistake-incapacity", "definitions-essentials"],
    blocks: [
      {
        type: "p",
        text: "The Indian Contract Act draws a sharp distinction between an agreement that is void, a contract that becomes void, and a contract that is voidable at the option of an aggrieved party.",
      },
      {
        type: "h3",
        text: "Comprehensive Comparative Distinction Matrix",
      },
      {
        type: "table",
        headers: ["Basis of Distinction", "Void Contract (Section 2(j))", "Voidable Contract (Section 2(i))"],
        rows: [
          [
            "Statutory Definition",
            "'A contract which ceases to be enforceable by law becomes void when it ceases to be enforceable.'",
            "'An agreement enforceable by law at the option of one or more parties thereto, but not at the option of the other or others.'",
          ],
          [
            "Status at Inception",
            "Valid and binding when originally entered into, but becomes void subsequently due to external events.",
            "Valid, binding, and operational from inception until it is formally rescinded by the aggrieved party.",
          ],
          [
            "Cause of Creation",
            "Supervening impossibility, destruction of subject matter (Sec 56), change in law, or outbreak of war.",
            "Absence of free consent caused by Coercion (Sec 15), Undue Influence (Sec 16), Fraud (Sec 17), or Misrepresentation (Sec 18).",
          ],
          [
            "Option / Right to Rescind",
            "Neither party has any option to affirm or enforce; the contract is completely dead in law.",
            "The aggrieved party alone has the legal right to either affirm (ratify) or repudiate (rescind) the contract.",
          ],
          [
            "Effect of Lapse of Time",
            "Lapse of time cannot make a void contract valid.",
            "If the aggrieved party does not exercise the option to rescind within a reasonable time, the contract remains valid.",
          ],
          [
            "Right to Damages",
            "Neither party can claim breach damages because the contract was discharged by frustration without fault.",
            "The aggrieved party can rescind AND sue for damages in tort/deceit (in cases of fraud under Section 19).",
          ],
          [
            "Third Party Rights",
            "No third party can acquire legal rights under a void contract.",
            "A third party who acquires goods in good faith for value before the contract is rescinded obtains a valid title.",
          ],
        ],
      },
    ],
  },
  {
    id: "q6",
    number: 6,
    title: "Valid Contract vs. Invalid / Void / Illegal Agreements",
    question:
      "Differentiate between a Valid Contract, a Void Agreement, a Void Contract, an Illegal Agreement, and an Unenforceable Contract.",
    relatedSlugs: ["classification-mistake-incapacity", "definitions-essentials"],
    blocks: [
      {
        type: "p",
        text: "The taxonomy of contractual validity encompasses distinct legal categories ranging from fully enforceable contracts to void bargains and criminal illegal agreements.",
      },
      {
        type: "diagram",
        kind: "contract-classification",
        title: "Taxonomy of Contractual Validity and Enforceability",
        caption: "Categorization based on enforceability, formation mechanics, and performance milestones.",
      },
      {
        type: "h3",
        text: "5-Way Comparative Spectrum of Validity",
      },
      {
        type: "table",
        headers: ["Legal Category", "Statutory Definition", "Enforceability & Legal Status", "Collateral Transactions Impact", "Real-World Example"],
        rows: [
          [
            "Valid Contract",
            "Section 2(h) & Section 10",
            "Fully enforceable in court by all parties.",
            "All collateral contracts are valid.",
            "Written purchase order for 50 laptops with advance payment.",
          ],
          [
            "Void Agreement",
            "Section 2(g) (Void ab initio)",
            "Never had legal existence; zero rights created.",
            "Collateral transactions are not tainted unless illegal.",
            "Agreement entered into with a minor (*Mohori Bibee*).",
          ],
          [
            "Void Contract",
            "Section 2(j)",
            "Valid when formed; ceases enforceability subsequently.",
            "Collateral agreements remain unaffected.",
            "Contract to export wheat where government imposes export ban (*Sec 56*).",
          ],
          [
            "Illegal Agreement",
            "Section 23 (Unlawful Object)",
            "Void ab initio and criminal/punishable under penal law.",
            "All collateral transactions are strictly tainted and VOID.",
            "Borrowing ₹5,00,000 specifically to finance contraband smuggling.",
          ],
          [
            "Unenforceable Contract",
            "General Law",
            "Good in substance, but barred by technical defect (stamp/registration/limitation).",
            "Becomes enforceable once technical defect is cured.",
            "Oral agreement for property sale requiring registered deed under Transfer of Property Act.",
          ],
        ],
      },
    ],
  },
  {
    id: "q7",
    number: 7,
    title: "Obligation of Parties to Contracts and Performance",
    question:
      "Explain the statutory obligations of parties to perform contracts under Section 37. By whom and under what circumstances must contracts be performed?",
    relatedSlugs: ["discharge-and-remedies", "contract-agreement-promise"],
    blocks: [
      {
        type: "p",
        text: "Section 37 of the Indian Contract Act, 1872 lays down the fundamental rule governing contractual performance: parties to a contract must either perform, or offer to perform, their respective promises, unless performance is dispensed with or excused under the provisions of this Act or any other law.",
      },
      {
        type: "h3",
        text: "1. The Two Statutory Alternatives: Actual Performance vs. Tender",
      },
      {
        type: "ul",
        items: [
          "_Actual Performance_: Fulfilling the promise according to terms, time, and place agreed upon.",
          "_Tender / Offer of Performance (Section 38)_: When the promisor offers performance to the promisee, but the promisee refuses to accept. To be valid, tender must be: (a) Unconditional, (b) At a proper time and place, and (c) Give the promisee a reasonable opportunity to ascertain that goods/money conform to contract.",
        ],
      },
      {
        type: "h3",
        text: "2. By Whom Must Contracts Be Performed? (Sections 40–45)",
      },
      {
        type: "table",
        headers: ["Performing Party", "Governing Section", "Applicability & Legal Rules", "Practical Example"],
        rows: [
          [
            "The Promisor Himself",
            "Section 40",
            "Where it appears from the nature of the case that it was the intention of the parties that the promise should be performed by the promisor personally (personal skill, taste, artistic talent).",
            "A contracts to paint a portrait or perform as an opera singer. A must perform personally; he cannot delegate.",
          ],
          [
            "Promisor's Agent",
            "Section 40",
            "In commercial and impersonal contracts, the promisor or his representatives may employ a competent person to perform.",
            "A promises to deliver 100 bags of cement to B. A may deliver through his transport agent or employee.",
          ],
          [
            "Legal Representatives",
            "Section 37 & 40",
            "Upon the death of the promisor before performance, his legal representatives are bound to perform, unless the contract involved personal skill.",
            "A promises to pay ₹1,00,000 for goods. A dies. A's legal heirs are liable to pay out of inherited estate (limited to assets inherited).",
          ],
          [
            "Third Person",
            "Section 41",
            "When a promisee accepts performance of the promise from a third person, he cannot afterwards enforce it against the original promisor.",
            "A owes B ₹10,000. C (A's father) pays B ₹10,000 in full discharge. B accepts. B cannot subsequently sue A.",
          ],
          [
            "Joint Promisors",
            "Sections 42–44",
            "When two or more persons make a joint promise, all joint promisors must fulfill the promise. Under Section 43, the promisee may compel ANY ONE of the joint promisors to perform the whole promise (*Joint and Several Liability*).",
            "A, B, and C jointly promise to pay D ₹3,00,000. D may compel A alone to pay the full ₹3,00,000. A can then claim equal contribution (₹1,00,000 each) from B and C.",
          ],
        ],
      },
    ],
  },
  {
    id: "q8",
    number: 8,
    title: "Sale and Agreement to Sell (Sale of Goods Act, 1930)",
    question:
      "Define a Contract of Sale. Distinguish between a 'Sale' and an 'Agreement to Sell' under Section 4 of the Sale of Goods Act, 1930.",
    relatedSlugs: ["sources-maxims-foundations", "contract-agreement-promise"],
    blocks: [
      {
        type: "p",
        text: "Section 4(1) of the Sale of Goods Act, 1930 defines a Contract of Sale: 'A contract of sale of goods is a contract whereby the seller transfers or agrees to transfer the property in goods to the buyer for a price.' It encompasses both an absolute Sale (executed contract) and an Agreement to Sell (executory contract).",
      },
      {
        type: "h3",
        text: "Comprehensive Comparative Distinction Table",
      },
      {
        type: "table",
        headers: ["Basis of Distinction", "Sale (Executed Contract)", "Agreement to Sell (Executory Contract)"],
        rows: [
          [
            "Transfer of Property (Ownership)",
            "Property (ownership) in goods passes immediately from seller to buyer at the time of contract.",
            "Property in goods passes at a future date or subject to the fulfillment of some subsequent condition.",
          ],
          [
            "Nature of Rights Created",
            "Creates *Jus in rem* (a right against the whole world to enjoy goods).",
            "Creates *Jus in personam* (a personal right only against the defaulting seller).",
          ],
          [
            "Passage of Risk (*Res perit domino*)",
            "Risk of loss follows ownership. If goods are destroyed, the buyer bears the loss even if goods are in seller's possession.",
            "Risk remains with the seller until ownership passes to the buyer upon fulfillment of conditions.",
          ],
          [
            "Remedy on Buyer's Breach",
            "Seller can sue for the full contract price and exercise lien over goods.",
            "Seller can only sue for damages for non-acceptance, not for the price.",
          ],
          [
            "Remedy on Seller's Breach",
            "Buyer can sue the seller for damages AND for recovery of goods (*conversion*).",
            "Buyer can only claim monetary damages for non-delivery; cannot claim goods.",
          ],
          [
            "Insolvency of Buyer",
            "If buyer becomes insolvent before paying, seller must deliver goods to Official Receiver (unless unpaid seller lien exists).",
            "Seller may refuse delivery and retain goods.",
          ],
          [
            "Insolvency of Seller",
            "Buyer is entitled to recover goods from Official Receiver as owner.",
            "Buyer can only claim a pro-rata dividend for price paid.",
          ],
        ],
      },
    ],
  },
  {
    id: "q9",
    number: 9,
    title: "Contingent Contracts and Rules of Enforcement",
    question:
      "Define a Contingent Contract under Section 31 of the Indian Contract Act, 1872. Explain the statutory rules regarding its enforcement and distinguish it from a Wagering Agreement.",
    relatedSlugs: ["contract-agreement-promise", "definitions-essentials"],
    blocks: [
      {
        type: "p",
        text: "A contract may be absolute (where the promisor binds himself to perform unconditionally) or contingent (where performance depends upon the happening or non-happening of an uncertain future event).",
      },
      {
        type: "def",
        term: "Contingent Contract",
        section: "Section 31",
        body: "A contingent contract is a contract to do or not to do something, if some event, collateral to such contract, does or does not happen.",
      },
      {
        type: "h3",
        text: "The Essential Characteristics of a Contingent Contract",
      },
      {
        type: "ul",
        items: [
          "_Performance Depends on a Future Event_: The event must be uncertain (e.g. ship arriving, house catching fire).",
          "_The Event Must Be Collateral to the Contract_: It must not be part of the consideration itself, but an external contingency.",
          "_The Event Must Not Be Within the Mere Will of Promisor_: If performance depends solely on the promisor's arbitrary whim, it is an illusory promise.",
        ],
      },
      {
        type: "h3",
        text: "Statutory Rules for Enforcement of Contingent Contracts (Sections 32–36)",
      },
      {
        type: "ol",
        items: [
          "_1. Enforcement on Happening of Event (Section 32)_: Enforceable only when the event happens. If the event becomes impossible, the contract becomes void. _Example_: A contracts to pay B ₹1,00,000 if B marries C. C dies without marrying B. Contract becomes void.",
          "_2. Enforcement on Non-Happening of Event (Section 33)_: Enforceable when the happening of the event becomes impossible, and not before. _Example_: A agrees to pay B if a ship does not return. The ship sinks. Contract becomes enforceable.",
          "_3. Event Deemed Impossible by Conduct of a Person (Section 34)_: If the event is the future conduct of a living person, the event is deemed impossible if that person acts so as to make it impossible within any definite time. _Example_: A agrees to pay B if B marries C. C marries D. The event is deemed impossible.",
          "_4. Contingent on Event Happening within Fixed Time (Section 35, Para 1)_: Void if time expires without event happening or if event becomes impossible before time expires.",
          "_5. Contingent on Impossible Events (Section 36)_: Contingent agreements to do or not to do anything if an impossible event happens are **void ab initio**, whether the impossibility was known or not. _Example_: A agrees to pay B ₹1,000 if two straight lines should enclose a space.",
        ],
      },
      {
        type: "h3",
        text: "Contingent Contract vs. Wagering Agreement",
      },
      {
        type: "table",
        headers: ["Basis of Distinction", "Contingent Contract (Section 31)", "Wagering Agreement (Section 30)"],
        rows: [
          [
            "Statutory Validity",
            "Completely valid and legally enforceable.",
            "Strictly void *ab initio* under Section 30.",
          ],
          [
            "Insurable / Real Interest",
            "Parties possess a real commercial or insurable interest in the subject matter.",
            "Parties have no interest except the stake money to be won or lost.",
          ],
          [
            "Reciprocal Promises",
            "May not involve mutual winning and losing (e.g. marine insurance).",
            "Always consists of mutual promises to win or lose on uncertain event.",
          ],
          [
            "Practical Example",
            "Contracts of insurance, indemnity, and guarantee.",
            "Betting on a cricket match or lottery result.",
          ],
        ],
      },
    ],
  },
  {
    id: "q10",
    number: 10,
    title: "Distinction Between Succession and Assignment",
    question:
      "Distinguish between Succession and Assignment in the transfer of contractual rights and obligations.",
    relatedSlugs: ["discharge-and-remedies", "contract-agreement-promise"],
    blocks: [
      {
        type: "p",
        text: "Transfer of contractual rights and liabilities from the original contracting parties to third parties takes place either by operation of law (Succession) or by voluntary act of parties (Assignment).",
      },
      {
        type: "h3",
        text: "Comprehensive Comparative Distinction Table",
      },
      {
        type: "table",
        headers: ["Basis of Distinction", "Succession (Devolution by Operation of Law)", "Assignment (Transfer by Act of Parties)"],
        rows: [
          [
            "Mode of Origin",
            "Takes place automatically by operation of law upon the death or insolvency of a party.",
            "Takes place by the voluntary, deliberate act of the contracting parties through a written deed.",
          ],
          [
            "Transfer of Liabilities",
            "Both benefits (rights) AND liabilities (debts) pass to the legal heirs / successors (limited to estate inherited).",
            "Only contractual rights/benefits and actionable claims can be assigned. **Liabilities cannot be assigned** without the promisee's consent (Novation).",
          ],
          [
            "Consent of Other Party",
            "No consent is required; the law automatically vests rights and duties in legal representatives.",
            "Assignment of rights does not require debtor's consent, but assignment of obligations strictly requires consent.",
          ],
          [
            "Scope & Personal Skills",
            "Contracts involving personal skill and talent (painting, singing, authorship) terminate on death and do NOT pass to successors.",
            "Contracts of personal nature cannot be assigned to any third party.",
          ],
          [
            "Statutory Formalities",
            "Governed by Indian Succession Act, 1925 / Insolvency laws (Succession certificate / Letters of administration).",
            "Governed by Section 130 of the Transfer of Property Act, 1882 (Must be in writing and signed).",
          ],
        ],
      },
    ],
  },
  {
    id: "q11",
    number: 11,
    title: "Elements of Vitiating Free Consent",
    question:
      "What is Free Consent? Critically examine the five elements that vitiate free consent under the Indian Contract Act, 1872 and state their legal consequences.",
    relatedSlugs: ["capacity-free-consent", "classification-mistake-incapacity"],
    blocks: [
      {
        type: "p",
        text: "Section 14 of the Indian Contract Act, 1872 provides that consent is free when it is not caused by Coercion, Undue Influence, Fraud, Misrepresentation, or Mistake. When consent is vitiated, the essential foundation of *consensus ad idem* is compromised.",
      },
      {
        type: "diagram",
        kind: "free-consent",
        title: "Free Consent and Vitiating Factors Map",
        caption: "Section 14 requires that consent is not caused by coercion, undue influence, fraud, misrepresentation, or bilateral mistake.",
      },
      {
        type: "h3",
        text: "The Five Vitiating Factors Examined",
      },
      {
        type: "table",
        headers: ["Vitiating Factor", "Statutory Definition & Section", "Key Legal Principle & Case Law", "Legal Consequence on Contract"],
        rows: [
          [
            "1. Coercion",
            "Section 15: Committing/threatening acts forbidden by IPC, or unlawful property detention.",
            "Threat to commit suicide constitutes coercion (*Chikham Amiraju v. Seshamma*).",
            "Voidable at the option of the coerced party (Section 19).",
          ],
          [
            "2. Undue Influence",
            "Section 16: Dominating the will of another through authority, fiduciary relation, or mental distress.",
            "Spiritual guru inducing devotee to gift all property (*Mannu Singh v. Umadat Pandey*).",
            "Voidable at the option of the dominated party (Section 19A).",
          ],
          [
            "3. Fraud",
            "Section 17: Deliberate false statement without belief in truth, or active concealment.",
            "Intentional deception to induce contract (*Derry v. Peek*).",
            "Voidable + Right to sue for damages in tort/deceit (Section 19).",
          ],
          [
            "4. Misrepresentation",
            "Section 18: Innocent false statement made without intention to deceive.",
            "Positive assertion of untrue fact believing it to be true.",
            "Voidable at the option of the misled party (Section 19).",
          ],
          [
            "5. Bilateral Mistake",
            "Section 20: Mutual mistake of fact essential to the contract by both parties.",
            "Cargo believed alive was already destroyed at sea (*Couturier v. Hastie*).",
            "Completely Void ab initio (Section 20).",
          ],
        ],
      },
    ],
  },
  {
    id: "q12",
    number: 12,
    title: "Communication of Offer and Acceptance",
    question:
      "Explain the statutory rules regarding the communication of an Offer and an Acceptance under Section 4 of the Indian Contract Act, 1872 with relevant case laws.",
    relatedSlugs: ["offer-meaning-essentials", "acceptance-communication-revocation"],
    blocks: [
      {
        type: "p",
        text: "Section 4 of the Indian Contract Act, 1872 fixes the exact moments in time when the communication of a proposal and an acceptance becomes legally complete as against the respective parties.",
      },
      {
        type: "h3",
        text: "1. Communication of Offer (Section 4, Para 1)",
      },
      {
        type: "p",
        text: "The communication of an offer is complete **when it comes to the knowledge of the person to whom it is made**. An offeree cannot accept an offer in ignorance of its existence (*Lalman Shukla v. Gauri Datt [1913]*).",
      },
      {
        type: "h3",
        text: "2. Communication of Acceptance (Section 4, Para 2)",
      },
      {
        type: "table",
        headers: ["Party Bound", "Moment Communication is Complete", "Legal Mechanics & Landmark Ruling"],
        rows: [
          [
            "As Against the Proposer (Offeror)",
            "When the acceptance is put in a course of transmission to him, so as to be out of the power of the acceptor.",
            "The moment the letter of acceptance is posted into the letterbox, the proposer is irrevocably bound (*Adams v. Lindsell [1818]*).",
          ],
          [
            "As Against the Acceptor (Offeree)",
            "When the acceptance comes to the actual knowledge of the proposer.",
            "The acceptor is not bound until the letter reaches the proposer. The acceptor can revoke his acceptance before it reaches the proposer.",
          ],
        ],
      },
      {
        type: "h3",
        text: "3. Special Rule for Instantaneous Electronic Communications",
      },
      {
        type: "p",
        text: "In contracts concluded through telephone, telex, or electronic email, the contract is complete only when the acceptance is **actually received and heard** by the offeror at his place of business (*Entores Ltd. v. Miles Far East Corp [1955]*; *Bhagwandas Goverdhandas Kedia v. Girdharilal Parshottamdas & Co. [1966] SC*).",
      },
    ],
  },
  {
    id: "q13",
    number: 13,
    title: "Revocation of Offer and Acceptance",
    question:
      "State the legal rules governing the revocation of an offer and an acceptance under Section 5. Enumerate the various modes of revocation under Section 6.",
    relatedSlugs: ["acceptance-communication-revocation", "offer-meaning-essentials"],
    blocks: [
      {
        type: "p",
        text: "Revocation means taking back, canceling, or withdrawing an offer or an acceptance before it has matured into a binding contract. Sections 5 and 6 govern the time limits and statutory modes of revocation.",
      },
      {
        type: "h3",
        text: "1. Time Limits for Revocation (Section 5 Statutory Rules)",
      },
      {
        type: "ul",
        items: [
          "_Revocation of Proposal (Sec 5, Para 1)_: A proposal may be revoked at any time **before** the communication of its acceptance is complete as against the proposer (i.e. before the offeree posts the letter of acceptance), but not afterwards.",
          "_Revocation of Acceptance (Sec 5, Para 2)_: An acceptance may be revoked at any time **before** the communication of the acceptance is complete as against the acceptor (i.e. before the letter reaches the proposer), but not afterwards.",
        ],
      },
      {
        type: "h3",
        text: "2. Modes of Revocation of Offer (Section 6)",
      },
      {
        type: "ol",
        items: [
          "_By Notice of Revocation (Sec 6(1))_: Communicated by the offeror to the offeree before acceptance is posted.",
          "_By Lapse of Stipulated or Reasonable Time (Sec 6(2))_: Expiry of fixed deadline, or reasonable time (*Ramsgate Victoria Hotel Co. v. Montefiore*).",
          "_By Failure to Fulfill Condition Precedent (Sec 6(3))_: Failure to pay advance deposit before acceptance.",
          "_By Death or Insanity of Proposer (Sec 6(4))_: If fact of death/insanity comes to acceptor's knowledge before acceptance.",
          "_By Counter-Offer_: A counter-offer extinguishes original proposal (*Hyde v. Wrench*).",
          "_By Rejection of Offer_: Explicit rejection terminates proposal.",
        ],
      },
    ],
  },
];
