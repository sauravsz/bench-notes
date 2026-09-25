# BenchNotes — Business Law 303 Revision Suite

Interactive revision platform and digital study companion for **MBA Business Law (Paper 303)**, covering the Indian Contract Act 1872, Companies Act, Constitution & Judiciary, Legal Maxims, and Model Exam Answers.

---

## Overview

BenchNotes translates dense legal curricula into a structured, searchable, and interactive revision workspace designed for rapid exam preparation and conceptual mastery.

### Core Modules

1. **Indian Contract Act, 1872**
   - Essential Elements of a Valid Contract (Offer, Acceptance, Consideration, Capacity, Free Consent, Legality).
   - Void vs. Voidable vs. Illegal Agreements.
   - Performance, Discharge of Contract, and Remedies for Breach.
   - Special Contracts: Quasi-contracts, Contingent contracts, Bailment, Pledge, Indemnity & Guarantee.

2. **Companies Act**
   - Nature, Characteristics & Doctrine of Lifting the Corporate Veil.
   - Classification of Companies (Public, Private, OPC, Section 8).
   - Memorandum of Association (MoA) & Articles of Association (AoA).
   - Corporate Governance: Directors, Meetings, Share Capital, and Winding Up.

3. **Constitution & Indian Judiciary**
   - Structure and Hierarchy of the Indian Court System (Supreme Court, High Courts, Subordinate Judiciary).
   - Theories of Law and Sources of Indian Jurisprudence.
   - Judicial Review and Constitutional Remedies.

4. **Legal Maxims & Latin Terminology**
   - Searchable glossary of essential legal maxims (*Consensus ad idem*, *Caveat emptor*, *Nemo dat quod non habet*, *Quantum meruit*, *Uberrima fides*, etc.) with contextual business law examples.

5. **Model Exam Answer Bank**
   - Comprehensive long-form model answers structured for 10-mark and 15-mark university exam questions.
   - Key headings, statutory citations, landmark case references, and summary takeaway cards.

---

## Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/start) (Full-stack React with Nitro engine)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Components**: Radix UI primitives & custom accessible components
- **Build Tool**: [Vite](https://vitejs.dev/)

---

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or [Node.js](https://nodejs.org/) (v20+)

### Installation

```bash
# Clone the repository
git clone https://github.com/sauravsz/bench-notes.git
cd bench-notes

# Install dependencies
bun install
```

### Development

```bash
bun run dev
```

The app will be available at `http://localhost:3000` (or the port specified in terminal).

### Production Build & Typecheck

```bash
# Typecheck
bun run typecheck

# Build for production
bun run build

# Preview production build
bun run preview
```

---

## Project Structure

```text
bench-notes/
├── attachments/             # Source curriculum & lecture note markdown files
├── public/                  # Static assets and icons
├── src/
│   ├── components/          # Reusable UI components & layouts
│   ├── data/                # Structured note data, glossary, exam answers
│   ├── lib/                 # Utility functions, helpers, state management
│   ├── routes/              # TanStack Start file-based routing
│   │   ├── __root.tsx       # Root layout, meta, theme providers
│   │   ├── index.tsx        # Dashboard / syllabus overview
│   │   ├── topic.$slug.tsx  # Detailed subject revision notes
│   │   ├── exam.index.tsx   # Model exam question index
│   │   ├── exam.$qid.tsx    # Single model answer view
│   │   ├── glossary.tsx     # Legal terms dictionary
│   │   ├── maxims.tsx       # Latin maxims explorer
│   │   └── search.tsx       # Full-text curriculum search
│   └── styles.css           # Global stylesheet & Tailwind setup
└── vite.config.ts           # Vite & TanStack Start build configuration
```

---

## License

Personal academic study project.
