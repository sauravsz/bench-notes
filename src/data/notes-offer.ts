import type { Topic } from "./types";

export const offerTopics: Topic[] = [
  {
    id: "offer",
    slug: "offer-meaning-essentials",
    number: 7,
    title: "Offer — Meaning, Essentials and Legal Rules",
    unit: "Offer, Acceptance and Communication",
    marks: 14,
    lecture: "25/08/26",
    summary:
      "A proposal is an expression of willingness to do or abstain with a view to obtaining assent. Legal rules require certainty, communication, and clear distinction from invitations to offer.",
    tags: ["offer", "proposal", "section 2(a)", "invitation to offer", "general offer", "carlill"],
    blocks: [
      {
        type: "p",
        text: "The formation of any contract begins with a valid proposal (offer). Section 2(a) defines a proposal not as a mere casual statement of intent, but as a definitive expression of willingness to enter into a binding legal relationship upon receiving the offeree's assent.",
      },
      {
        type: "def",
        term: "Proposal / Offer",
        section: "Section 2(a)",
        body: "When one person signifies to another his willingness to do or to abstain from doing anything, with a view to obtaining the assent of that other to such act or abstinence, he is said to make a proposal.",
      },
      {
        type: "h3",
        text: "The Five Core Classifications of Offers",
      },
      {
        type: "ul",
        items: [
          "_1. General Offer_: An offer made to the public at large or to an indeterminate group of persons. Anyone who performs the conditions of the offer is deemed to have accepted it without prior notice of acceptance (*Carlill v. Carbolic Smoke Ball Co. [1893]*). _Example_: A announces a public reward of ₹25,000 in a newspaper for anyone who traces his lost daughter.",
          "_2. Specific / Special Offer_: An offer made to a definite, ascertained individual or specific entity. It can be accepted only by that specific person (*Boulton v. Jones*). _Example_: A offers to sell his vintage watch specifically to B for ₹15,000. C cannot accept this offer.",
          "_3. Cross Offers_: When two parties make identical offers to each other in ignorance of each other's proposal. Cross offers do not constitute acceptance and no binding contract arises until one party explicitly accepts (*Tinn v. Hoffman & Co. [1873]*). _Example_: A writes to B offering to sell his horse for ₹50,000. On the same day, B writes to A offering to buy the same horse for ₹50,000. The letters cross in the mail.",
          "_4. Counter-Offer_: When the offeree introduces a qualified or conditional acceptance, or alters terms (e.g. price, quantity), the original offer is rejected and extinguished (*Hyde v. Wrench [1840]*). _Example_: A offers to sell his house to B for ₹50 Lakhs. B replies: 'I will buy it for ₹45 Lakhs'. B's counter-offer terminates A's original offer; B cannot later insist on buying at ₹50 Lakhs unless A renews the offer.",
          "_5. Standing / Open / Continuing Offer (Tender)_: An offer of a continuous nature allowing orders to be placed from time to time as required. Each separate order constitutes a distinct contract. _Example_: A railway company invites tenders for the supply of 10,000 tons of coal over 12 months at ₹4,000/ton.",
        ],
      },
      {
        type: "h3",
        text: "The Seven Mandatory Legal Rules as to a Valid Offer",
      },
      {
        type: "ol",
        items: [
          "_Must be capable of creating legal relations_: The offer must not be a casual, social, or domestic arrangement (*Balfour v. Balfour*).",
          "_Terms must be certain, definite, and not vague (Section 29)_: _Example_: A agrees to sell to B '100 tons of oil'. There is nothing to show what kind of oil was intended; the agreement is void for uncertainty.",
          "_Must be communicated to the offeree (Section 4)_: An offer cannot be accepted in ignorance of its existence (*Lalman Shukla v. Gauri Datt [1913]*). _Case Law_: Gauri Datt's nephew absconded. His servant Lalman went to search for the boy. Subsequently, Gauri Datt announced a reward of ₹501 for tracing the boy. Lalman traced the boy without knowing of the reward. Held: Lalman was not entitled to the reward because he acted in ignorance of the offer.",
          "_Must be made with a view to obtaining the assent of the other party_: It must not be a mere casual statement or inquiry regarding price.",
          "_May be conditional, but cannot contain a term the non-compliance of which amounts to acceptance_: The offeror cannot say: 'If I do not hear from you within 7 days, I shall presume you have accepted' (*Felthouse v. Bindley [1862]*). Silence cannot be prescribed as a mode of acceptance.",
          "_Must be distinguished from an Invitation to Offer / Invitation to Treat_: Display of goods with price tags, auction notices, and college prospectuses are merely invitations to the public to make an offer (*Fisher v. Bell*, *Pharmaceutical Society v. Boots Cash Chemists*).",
          "_May be express or implied (Section 9)_: Made through spoken/written words or inferred from conduct (e.g., city bus plying on a fixed route).",
        ],
      },
      {
        type: "h3",
        text: "Crucial Distinction: Offer vs. Invitation to Offer",
      },
      {
        type: "table",
        headers: ["Basis of Distinction", "Offer / Proposal (Section 2(a))", "Invitation to Offer (Invitation to Treat)"],
        rows: [
          [
            "Definition & Nature",
            "Final expression of willingness to be bound by contract upon acceptance.",
            "An act inviting others to make an offer or initiate negotiations.",
          ],
          [
            "Intention of Party",
            "Offeror intends to enter into immediate legal relations upon assent.",
            "Circulates information or quotes price to attract potential buyers.",
          ],
          [
            "Legal Consequence",
            "Acceptance of an offer results in an immediately binding contract.",
            "Response to an invitation results only in an offer, which the seller may accept or reject.",
          ],
          [
            "Classic Real-World Examples",
            "A written tender bid submitted by a contractor; a specific email offering to sell goods at ₹1,000/unit.",
            "Goods displayed with price tags in a supermarket (*Boots Cash Chemists*); newspaper auction notices; company share prospectus; menu card in a restaurant.",
          ],
        ],
      },
    ],
  },
  {
    id: "acceptance",
    slug: "acceptance-communication-revocation",
    number: 8,
    title: "Acceptance, Communication and Revocation",
    unit: "Offer, Acceptance and Communication",
    marks: 14,
    lecture: "25/08/26",
    summary:
      "Acceptance converts a proposal into an irrevocable promise. Sections 3, 4, and 5 establish the exact moments when communication and revocation are legally complete.",
    tags: ["acceptance", "communication", "revocation", "section 4", "section 5", "mirror image"],
    blocks: [
      {
        type: "p",
        text: "As Sir William Anson famously observed: *'Acceptance is to a proposal what a lighted match is to a train of gunpowder. It produces something which cannot be recalled or undone.'* Once an offer is validly accepted, a binding contract crystallizes.",
      },
      {
        type: "def",
        term: "Acceptance",
        section: "Section 2(b)",
        body: "When the person to whom the proposal is made signifies his assent thereto, the proposal is said to be accepted. A proposal, when accepted, becomes a promise.",
      },
      {
        type: "h3",
        text: "The Six Golden Rules of a Valid Acceptance",
      },
      {
        type: "ol",
        items: [
          "_1. Absolute and Unqualified (Mirror Image Rule - Section 7)_: Acceptance must match every single term of the offer without variance. Any conditional assent or modification operates as a counter-offer (*Hyde v. Wrench*).",
          "_2. Communicated to the Offeror_: Mere mental assent or internal resolution to accept does not constitute acceptance (*Brogden v. Metropolitan Railway Co. [1877]*). It must be signified by an overt external act.",
          "_3. Expressed in the Usual or Prescribed Manner (Section 7)_: If the offer prescribes a specific mode (e.g. 'reply by registered post' or 'confirm via company portal'), acceptance must be made in that mode. If not, the offeror may insist on the prescribed mode within reasonable time.",
          "_4. Acceptance by Conduct / Performance of Conditions (Section 8)_: Performing the conditions of a proposal or receiving consideration offered with a proposal constitutes valid acceptance (*Carlill v. Carbolic Smoke Ball*).",
          "_5. Must be Given by the Designated Offeree_: An offer can only be accepted by the person or entity to whom it was addressed (*Boulton v. Jones [1857]*).",
          "_6. Must be Given While the Offer is Still Alive_: Acceptance after the offer has lapsed, expired by time, or been revoked is invalid.",
        ],
      },
      {
        type: "h3",
        text: "Communication of Offer and Acceptance (Section 4 Mechanics)",
      },
      {
        type: "table",
        headers: ["Event", "When Complete as Against Proposer (Offeror)", "When Complete as Against Acceptor (Offeree)"],
        rows: [
          [
            "Communication of Offer",
            "When it comes to the knowledge of the offeree.",
            "When it comes to the knowledge of the offeree.",
          ],
          [
            "Communication of Acceptance",
            "The moment the letter of acceptance is posted / put into course of transmission (out of acceptor's power).",
            "The moment the letter of acceptance reaches the knowledge of the proposer.",
          ],
          [
            "Communication of Revocation",
            "When the notice of revocation is put into transmission by the revoking party.",
            "When the notice of revocation comes to the actual knowledge of the person to whom it is made.",
          ],
        ],
      },
      {
        type: "h3",
        text: "Revocation of Offer and Acceptance (Section 5 Statutory Rules)",
      },
      {
        type: "ul",
        items: [
          "_Revocation of Proposal (Section 5, Para 1)_: A proposal may be revoked at any time **before** the communication of its acceptance is complete as against the proposer (i.e., before the offeree posts the acceptance letter), but not afterwards.",
          "_Revocation of Acceptance (Section 5, Para 2)_: An acceptance may be revoked at any time **before** the communication of the acceptance is complete as against the acceptor (i.e., before the acceptance letter reaches the proposer), but not afterwards.",
        ],
      },
      {
        type: "callout",
        label: "Classic Examination Timeline Scenario",
        body: "• 1st Oct: A posts an offer to sell his car to B for ₹2,00,000.\n• 3rd Oct: B receives the offer letter (Communication of offer complete).\n• 4th Oct (Morning): B posts letter of acceptance.\n  → At this instant, acceptance is complete against A. A CANNOT revoke his offer now.\n• 6th Oct: A receives B's letter of acceptance.\n  → At this instant, acceptance is complete against B.\n• Can B revoke? YES, B can revoke his acceptance by telegram/speed post/email before 6th Oct.",
      },
      {
        type: "h3",
        text: "Modes of Revocation / Lapse of Offer (Section 6)",
      },
      {
        type: "ul",
        items: [
          "_1. Notice of Revocation (Sec 6(1))_: By communication of notice of revocation by the proposer to the other party before acceptance is posted.",
          "_2. Lapse of Stipulated or Reasonable Time (Sec 6(2))_: By lapse of time specified in the proposal, or if no time is specified, by the lapse of a reasonable time (*Ramsgate Victoria Hotel Co. v. Montefiore*).",
          "_3. Failure to Fulfill a Condition Precedent (Sec 6(3))_: When the offeree fails to satisfy a preliminary condition (e.g. paying an advance security deposit).",
          "_4. Death or Insanity of the Proposer (Sec 6(4))_: If the fact of death or insanity comes to the knowledge of the acceptor before acceptance.",
          "_5. Counter-Offer or Rejection_: The offeree's counter-offer or outright rejection extinguishes the original proposal.",
          "_6. Subsequent Illegality or Destruction of Subject Matter_: Change in statutory law making the proposed contract illegal.",
        ],
      },
    ],
  },
];
