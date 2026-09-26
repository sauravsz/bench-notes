# BenchNotes Comprehensive Codebase Audit & Architectural Synthesis Report

**System**: BenchNotes Multi-Subject Academic Revision Suite  
**Date**: September 2026  
**Auditor**: Antigravity Code & Architecture Engine  

---

## Executive Summary

BenchNotes has evolved from a single-subject Business Law revision tool into an 8-paper MBA Academic Suite. This deep architectural audit examined all 20 source files, 8 course definitions, API endpoints, styling tokens, and interaction layers to identify critical flaws and high-leverage enhancements.

---

## 1. Five Critical Bugs Identified & Remediation Plan

| # | Bug Title | Location | Impact | Root Cause & Resolution |
|---|---|---|---|---|
| **1** | **Multi-Course Topic 404 Crash** | `src/routes/topic.$slug.tsx`, `src/data/index.ts` | **Critical**: Navigating to topics in Papers 601, 602, 604, MM 01, MM 02, OM 01, OM 02 immediately throws 404 Not Found. | `getTopic()` only queried the static 603 topics array. **Fix**: Wire `getTopic()` and `adjacentTopics()` to query dynamically across `allCourses` registry. |
| **2** | **Multi-Course Exam 404 Crash** | `src/routes/exam.$qid.tsx`, `src/data/index.ts` | **Critical**: Exam question links for other courses crash with 404. | `getExam()` only indexed 603 questions. **Fix**: Resolve exam questions dynamically across `allCourses`. |
| **3** | **Broken Search Links & Page Reloads** | `src/data/courses/index.ts`, `src/routes/search.tsx` | **Critical**: Search hits point to non-existent URLs (`/601/topic/...`) and use raw `<a>` tags causing state loss. | Standardize search URLs to `/topic/$slug` and `/exam/$qid`, auto-switch active course on click, and use `<Link>`. |
| **4** | **Global CSS Stripping Legal Italics** | `src/styles.css` (line 368) | **High**: All Latin maxims and case terms appear in plain unitalicized text. | `em, i { font-style: normal; }` globally neutralized italics. **Fix**: Remove blanket rule so legal doctrines (*consensus ad idem*, *quid pro quo*) render with proper serif italics. |
| **5** | **Admin API Authentication Bypass** | `server/api/access/*.post.ts` | **Security Critical**: Unauthenticated API calls without a password field bypass password validation. | Conditional `if (body.password)` executed only when password was supplied. **Fix**: Make admin password strictly required on all mutation endpoints. |

---

## 2. UI & Design Enhancements

1. **Table of Contents & Quick-Jump Section Drawer**: Interactive outline on notes allowing immediate navigation across lengthy legal doctrines.
2. **Reading Time & Word Count Estimator**: Real-time reading pace indicator for MBA students managing exam study schedules.
3. **Unified Badge Component**: Consistent sizing, font weight, and contrast across all badges.
4. **Keyboard Shortcuts Discovery Dialog (`?` shortcut)**: Interactive modal listing all 10 reader navigation and appearance shortcuts.
5. **Full Markdown Inline Parsing**: Supporting bold, italics, code backticks, and hyperlinked citations in note bodies.

---

## 3. Purposeful Motion & Animation System

- **Spring-driven micro-interactions**: Tactile press physics (`active:scale-[0.96]`) with Apple HIG easing curves.
- **Staggered Search Cascade**: Smooth entrance transitions on search results.
- **Interactive Diagram Nodes**: Hover elevations and animated branch connectors on contract and judiciary flowcharts.
- **Progress Fill Easing**: Fluid spring curves on syllabus mastery and scroll progress bars.

---

## 4. High-Value Usability Features

1. **Copy Note as Markdown**: Instant export of complete note structure for Obsidian and Notion.
2. **Study Revision Timer**: Built-in 25-minute Pomodoro timer for paced reading sessions.
3. **Cross-Topic Highlight Jumper**: Drawer click automatically navigates to the target topic and centers the highlighted passage.
4. **Print / PDF Revision Sheet**: Clean, advertisement-free print styling with pagination optimization.
5. **Mobile Touch Support**: Responsive `touchend` event handling and viewport clamping for floating toolbars.
