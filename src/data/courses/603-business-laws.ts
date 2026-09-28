import type { Course } from "./types";
import { midSemImportantTopics } from "../notes-midsem";
import { judiciaryTopics } from "../notes-judiciary";
import { contractTopics } from "../notes-contract";
import { constitutionTopics } from "../notes-constitution";
import { offerTopics } from "../notes-offer";
import { consentTopics } from "../notes-consent";
import { dischargeTopics } from "../notes-discharge";
import { companiesTopics } from "../notes-companies";
import { examQuestions } from "../exam-answers";
import { glossary } from "../glossary";
import { maxims } from "../maxims";

export const businessLawsCourse: Course = {
  id: "603",
  slug: "business-laws",
  code: "603",
  title: "Business Laws",
  category: "Core",
  description:
    "Comprehensive coverage of the Indian Contract Act 1872, Companies Act 2013, Indian Judiciary structure, Constitutional provisions, and essential Latin legal maxims.",
  instructor: "LR Ma'am",
  accentColor: "#B45309",
  units: [
    "Mid Sem Important",
    "Judiciary and Legal System",
    "Indian Contract Act, 1872",
    "Constitution and Legal Environment",
    "Offer, Acceptance and Communication",
    "Capacity, Consent and Classification",
    "Discharge, Breach and Remedies",
    "Companies Act, 2013",
  ],
  topics: [
    ...midSemImportantTopics,
    ...judiciaryTopics,
    ...contractTopics,
    ...constitutionTopics,
    ...offerTopics,
    ...consentTopics,
    ...dischargeTopics,
    ...companiesTopics,
  ],
  examQuestions,
  glossary,
  maxims,
};
