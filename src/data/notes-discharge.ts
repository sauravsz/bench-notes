import type { Topic } from "./types";

export const dischargeTopics: Topic[] = [
  {
    id: "discharge-remedies",
    slug: "discharge-and-remedies",
    number: 11,
    title: "Discharge of Contract and Remedies for Breach",
    unit: "Discharge, Breach and Remedies",
    marks: 14,
    summary:
      "A contract is discharged when contractual rights and obligations terminate. The six modes of discharge and five civil remedies form a staple 14-mark university exam topic.",
    tags: ["discharge", "breach", "damages", "hadley", "frustration", "quantum meruit", "specific performance"],
    blocks: [
      {
        type: "p",
        text: "Discharge of contract refers to the termination of the contractual relationship between the parties. When a contract is discharged, all rights, obligations, and liabilities created under the contract cease to exist. A 14-mark university examination answer must cover both halves: (1) The Modes of Discharge, and (2) The Judicial Remedies available on Breach.",
      },
      {
        type: "def",
        term: "Discharge of Contract",
        body: "A contract is discharged when it ceases to operate, that is, when the primary rights and obligations created by it come to an end.",
      },
      {
        type: "h3",
        text: "Part I: The Six Modes of Discharge of Contract",
      },
      {
        type: "h4",
        text: "1. Discharge by Performance (Sections 37–40)",
      },
      {
        type: "ul",
        items: [
          "_Actual Performance_: Both parties strictly and completely perform their respective promises within the stipulated time and manner. _Example_: A delivers 100 bags of wheat to B, and B pays the agreed ₹2,50,000 immediately.",
          "_Attempted Performance / Tender of Performance (Section 38)_: Where the promisor offers to perform to the promisee at a proper time and place, but the promisee refuses to accept performance. The promisor is discharged from non-performance liability and does not lose his rights under the contract.",
        ],
      },
      {
        type: "h4",
        text: "2. Discharge by Mutual Agreement / Consent (Sections 62–63)",
      },
      {
        type: "ul",
        items: [
          "_Novation (Section 62)_: Substitution of an existing contract with a new contract, either between the same parties or between new parties with mutual consent. The original contract is completely discharged. _Example_: A owes B ₹1,00,000. It is agreed between A, B, and C that B shall henceforth accept C as his debtor instead of A.",
          "_Rescission (Section 62)_: Mutual cancellation of the contract before or at the time of performance, releasing both parties.",
          "_Alteration (Section 62)_: Changing one or more material terms of the contract with mutual consent of both parties.",
          "_Remission / Waiver (Section 63)_: The promisee accepts a lesser fulfillment of the promise or dispenses with performance wholly or in part. _Example_: A owes B ₹50,000. B agrees to accept ₹30,000 in full settlement.",
          "_Accord and Satisfaction (Section 63)_: Accord is the agreement to accept an alternative performance; satisfaction is the actual execution of that alternative consideration.",
        ],
      },
      {
        type: "h4",
        text: "3. Discharge by Supervening Impossibility / Doctrine of Frustration (Section 56)",
      },
      {
        type: "p",
        text: "Section 56 establishes that an agreement to do an impossible act is void. If a contract was valid when entered into, but subsequently becomes impossible or unlawful due to an event beyond the control of the promisor, the contract becomes void (*Doctrine of Frustration*).",
      },
      {
        type: "ul",
        items: [
          "_Destruction of Subject Matter (*Taylor v. Caldwell [1863]*)_: Music hall rented for concerts was accidentally destroyed by fire before concert dates; contract discharged.",
          "_Death or Personal Incapacity in Personal Contracts (*Robinson v. Davison*)_: An artist or singer falls critically ill before performance.",
          "_Change of Statutory Law_: Export or trade of specified commodities is banned by government order.",
          "_Outbreak of War_: Turns foreign counterparties into alien enemies.",
          "_Non-Occurrence of Contemplated Essential Event (*Krell v. Henry [1903]*)_: Rooms rented solely to view the royal coronation procession which was subsequently cancelled.",
        ],
      },
      {
        type: "callout",
        label: "What Does NOT Amount to Frustration",
        body: "Commercial hardship, raw material price rise, transport strikes, or inability to make anticipated profit do NOT discharge a contract (*Satyabrata Ghose v. Mugneeram Bangur [1954] SC*).",
      },
      {
        type: "h4",
        text: "4. Discharge by Lapse of Time",
      },
      {
        type: "p",
        text: "Under the *Limitation Act, 1963*, legal claims must be filed within a prescribed limitation period (e.g., 3 years for recovering unpaid commercial debts or simple breach of contract). If the limitation period lapses, the judicial remedy is barred by law and the contract is discharged.",
      },
      {
        type: "h4",
        text: "5. Discharge by Operation of Law",
      },
      {
        type: "ul",
        items: [
          "_Death of Promisor_: In contracts involving personal skill, artistic ability, or taste, death discharges the contract. In other contracts, rights/duties pass to legal representatives.",
          "_Insolvency_: When an order of adjudication is passed by an insolvency court, the insolvent is discharged from all pre-existing contractual liabilities.",
          "_Merger_: When an inferior right under a contract merges into a superior right created between the same parties (e.g., a tenant buys the leased property).",
          "_Unauthorized Material Alteration_: If one party alters a written contract materially without consent (e.g. altering amount or interest rate), the entire contract is void.",
        ],
      },
      {
        type: "h4",
        text: "6. Discharge by Breach of Contract (Section 39)",
      },
      {
        type: "ul",
        items: [
          "_Actual Breach of Contract_: Occurs when a party fails or refuses to perform his obligation on the due date of performance or during the course of performance.",
          "_Anticipatory Breach of Contract (Section 39)_: Occurs when a party repudiates the contract before the arrival of the due date (*Frost v. Knight [1872]*). The aggrieved party can: (a) Rescind immediately and sue for damages, or (b) Keep the contract alive until the due date.",
        ],
      },
      {
        type: "h3",
        text: "Part II: The Five Civil Remedies for Breach of Contract",
      },
      {
        type: "h4",
        text: "1. Suit for Rescission (Sections 39, 64 & 65)",
      },
      {
        type: "p",
        text: "The injured party can treat the contract as cancelled and is relieved from all further obligations. Under Section 65, any party who has received any advantage under a void or rescinded contract must restore it to the other party (*Restitution*).",
      },
      {
        type: "h4",
        text: "2. Suit for Damages (Sections 73 & 74)",
      },
      {
        type: "p",
        text: "Damages are monetary compensation awarded to the injured party for the loss suffered on account of breach. The fundamental rule was established in the landmark case of **Hadley v. Baxendale [1854]** and codified in Section 73:",
      },
      {
        type: "table",
        headers: ["Type of Damages", "Legal Principles & Rule from Hadley v. Baxendale", "Practical Commercial Scenario"],
        rows: [
          [
            "Ordinary / General Damages",
            "Damages that arise naturally in the usual course of things from the breach. Recoverable as a matter of right.",
            "Difference between contract price and market price of goods on the date of breach.",
          ],
          [
            "Special Damages",
            "Losses arising from unusual circumstances, recoverable ONLY IF the special circumstances were communicated to the defendant at the time of contract formation.",
            "Hadley v. Baxendale: A miller gave a broken crankshaft to a carrier for transport. Carrier delayed delivery. Mill remained closed. Held: Carrier not liable for lost mill profits because he was not informed the mill was idle.",
          ],
          [
            "Vindictive / Exemplary Damages",
            "Awarded to punish the wrongdoer and make an example. Limited to: (1) Breach of promise to marry, and (2) Wrongful dishonour of a customer's cheque by a banker with sufficient funds.",
            "Banker wrongfully dishonours a businessman's ₹10,000 cheque when balance was ₹1,00,000; businessman recovers substantial exemplary damages for loss of financial reputation.",
          ],
          [
            "Nominal Damages",
            "Very small amount (e.g. ₹1) awarded to recognize violation of a legal right (*Injuria sine damno*) where no actual financial loss occurred.",
            "Buyer refuses delivery of goods, but market price has risen and seller sells at a higher profit elsewhere.",
          ],
          [
            "Liquidated Damages vs. Penalty (Section 74)",
            "Under Indian law, courts award reasonable compensation not exceeding the penalty amount stipulated in the contract.",
            "A software contract specifies ₹50,000/week penalty for delivery delay; court assesses actual loss and caps compensation at the ceiling.",
          ],
        ],
      },
      {
        type: "h4",
        text: "3. Suit upon Quantum Meruit (Sections 65 & 70)",
      },
      {
        type: "p",
        text: "*Quantum Meruit* literally means *'as much as earned'* or *'according to the quantity of work done'*. An action on quantum meruit arises when a contract has been partly performed and the contract is terminated without default of the performing party (*Planche v. Colburn [1831]* — author contracted to write series on costume history; publisher abandoned series; author recovered on quantum meruit).",
      },
      {
        type: "h4",
        text: "4. Suit for Specific Performance (Specific Relief Act, 1963)",
      },
      {
        type: "p",
        text: "An equitable remedy where the court directs the defaulting party to carry out the exact performance of the contract. Granted when monetary damages are inadequate (e.g., contracts for the purchase of unique land, rare art, or family heirlooms). Not granted for contracts of personal skill (painting, singing) or contracts requiring continuous judicial supervision.",
      },
      {
        type: "h4",
        text: "5. Suit for Injunction (Specific Relief Act, 1963)",
      },
      {
        type: "p",
        text: "A preventive court order restraining a person from doing a specific wrongful act. Used to enforce negative covenants in contracts (*Lumley v. Wagner [1852]* — opera singer agreed to sing at theatre X and not sing anywhere else for 3 months; court issued an injunction restraining her from singing at a rival theatre).",
      },
    ],
  },
];
