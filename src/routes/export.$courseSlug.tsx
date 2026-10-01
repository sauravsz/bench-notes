import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { allCourses } from "@/data/courses";
import { NoteBody } from "@/components/note-body";
import { useAccessControl } from "@/lib/auth/access-control";
import { ArrowLeft, BookOpen, Lock, Printer } from "lucide-react";
import { cn } from "@/lib/utils";
type SearchParams = {
  mode?: "all" | "topics" | "exam";
};

export const Route = createFileRoute("/export/$courseSlug")({
  validateSearch: (search: Record<string, unknown>): SearchParams => {
    return {
      mode: (search.mode as "all" | "topics" | "exam") || "all",
    };
  },
  component: CourseExportView,
});

function CourseExportView() {
  const { courseSlug } = Route.useParams();
  const search = Route.useSearch();
  const [mode, setMode] = useState<"all" | "topics" | "exam">(search.mode || "all");
  const [paperTheme, setPaperTheme] = useState<"dark" | "light">("dark");
  const [fontSizeScale, setFontSizeScale] = useState<"compact" | "normal" | "large">("normal");

  const currentUser = useAccessControl((s) => s.currentUser);
  const isAdmin = useAccessControl((s) => s.isAdmin(s.currentUser?.email));
  const isApproved = useAccessControl((s) => s.isApproved(s.currentUser?.email));
  const isAuthorized = isAdmin || isApproved;

  if (!currentUser || !isAuthorized) {
    return (
      <main className="px-4 py-16 sm:px-10 bg-[#090909] text-center min-h-[70vh] flex items-center justify-center">
        <div className="max-w-md mx-auto rounded-[24px] border border-[#262626] bg-[#141414] p-8 space-y-4">
          <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-[#1c1c1c] border border-[#262626] text-amber-400">
            <Lock className="size-6" />
          </div>
          <h2 className="font-display text-xl font-bold text-white">
            Administrator Access Required
          </h2>
          <p className="font-sans text-xs text-[#999999] leading-relaxed">
            Full course mass PDF compilation and export is restricted to verified administrators.
          </p>
          <div className="pt-2">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-xs font-bold hover:bg-white/90 transition-all"
            >
              Return to Study Dashboard
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const course = allCourses.find(
    (c) => c.slug === courseSlug || c.id === courseSlug || c.code.toLowerCase() === courseSlug.toLowerCase(),
  );

  if (!course) {
    return (
      <main className="px-4 py-16 text-center">
        <div className="mx-auto max-w-md space-y-4">
          <h1 className="font-display text-2xl font-bold text-white">Paper Not Found</h1>
          <p className="text-sm text-[#999999]">The requested paper could not be found for export.</p>
          <Link
            to="/export"
            className="inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-xs font-bold"
          >
            <ArrowLeft className="size-3.5" /> Back to Export Hub
          </Link>
        </div>
      </main>
    );
  }

  const handlePrint = () => {
    window.print();
  };

  const showTopics = mode === "all" || mode === "topics";
  const showExam = mode === "all" || mode === "exam";

  const fontSizeClass =
    fontSizeScale === "compact"
      ? "text-xs leading-normal"
      : fontSizeScale === "large"
        ? "text-base leading-loose"
        : "text-sm leading-relaxed";

  return (
    <div
      className={cn(
        "min-h-screen transition-colors duration-200",
        paperTheme === "light" ? "bg-[#f8fafc] text-[#0f172a]" : "bg-[#090909] text-white",
      )}
    >
      {/* Sticky Action Toolbar (Hidden on Print) */}
      <div className="no-print sticky top-0 z-40 border-b border-[#262626] bg-[#090909]/95 backdrop-blur-md px-4 py-3 sm:px-8">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link
              to="/export"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#262626] bg-[#141414] hover:bg-[#1c1c1c] px-3 py-1.5 text-xs font-medium text-[#aaaaaa] transition-colors"
            >
              <ArrowLeft className="size-3.5" />
              <span>Export Hub</span>
            </Link>
            <span className="hidden text-xs text-[#666666] sm:inline">|</span>
            <div className="hidden sm:block">
              <span className="font-mono text-xs font-bold text-[#0099ff]">Paper {course.code}</span>
              <span className="text-xs text-[#999999] ml-2 font-medium">{course.title}</span>
            </div>
          </div>

          {/* Scope Toggles, Scale & Primary Print CTA */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Mode Scope Selection */}
            <div className="hidden md:flex items-center gap-1 rounded-full border border-[#262626] bg-[#141414] p-1 text-xs">
              <button
                type="button"
                onClick={() => setMode("all")}
                className={cn(
                  "rounded-full px-3 py-1 font-medium transition-colors cursor-pointer",
                  mode === "all" ? "bg-white text-black font-bold" : "text-[#999999] hover:text-white",
                )}
              >
                All ({course.topics.length + course.examQuestions.length})
              </button>
              <button
                type="button"
                onClick={() => setMode("topics")}
                className={cn(
                  "rounded-full px-3 py-1 font-medium transition-colors cursor-pointer",
                  mode === "topics" ? "bg-white text-black font-bold" : "text-[#999999] hover:text-white",
                )}
              >
                Topics ({course.topics.length})
              </button>
              <button
                type="button"
                onClick={() => setMode("exam")}
                className={cn(
                  "rounded-full px-3 py-1 font-medium transition-colors cursor-pointer",
                  mode === "exam" ? "bg-white text-black font-bold" : "text-[#999999] hover:text-white",
                )}
              >
                Exam Qs ({course.examQuestions.length})
              </button>
            </div>

            {/* Screen Preview Theme Toggle */}
            <div className="hidden lg:flex items-center gap-1 rounded-full border border-[#262626] bg-[#141414] p-1 text-xs">
              <button
                type="button"
                onClick={() => setPaperTheme("dark")}
                className={cn(
                  "rounded-full px-2.5 py-1 text-[11px] font-medium transition-colors cursor-pointer",
                  paperTheme === "dark" ? "bg-[#262626] text-white font-bold" : "text-[#888888] hover:text-white",
                )}
                title="Dark Screen Preview"
              >
                Dark
              </button>
              <button
                type="button"
                onClick={() => setPaperTheme("light")}
                className={cn(
                  "rounded-full px-2.5 py-1 text-[11px] font-medium transition-colors cursor-pointer",
                  paperTheme === "light" ? "bg-white text-black font-bold" : "text-[#888888] hover:text-white",
                )}
                title="Light Paper Preview"
              >
                Paper
              </button>
            </div>

            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-2 rounded-full bg-[#0099ff] hover:bg-[#0088ee] text-white px-5 py-2 font-sans text-xs font-bold shadow-md transition-all ios-press cursor-pointer"
            >
              <Printer className="size-3.5" />
              <span>Print / Save as PDF</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Printable Document Canvas */}
      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-10 sm:py-12 print-canvas">
        {/* Cover / Header Section */}
        <section
          className={cn(
            "pb-12 space-y-6 avoid-break",
            paperTheme === "light" ? "border-b border-[#cbd5e1]" : "border-b-2 border-white/20",
          )}
        >
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#888888]">
            <span>MBA ACADEMIC CURRICULUM · MASTER REVISION PORTFOLIO</span>
            <span>{new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
          </div>

          <div className="space-y-3 pt-2">
            <span className="inline-block rounded bg-[#0099ff]/15 text-[#0099ff] px-3 py-1 font-mono text-xs font-bold border border-[#0099ff]/40">
              PAPER {course.code} · {course.category.toUpperCase()}
            </span>
            <h1
              className={cn(
                "font-display text-3xl sm:text-5xl font-bold tracking-tight",
                paperTheme === "light" ? "text-[#0f172a]" : "text-white",
              )}
            >
              {course.title}
            </h1>
            <p
              className={cn(
                "font-sans text-sm sm:text-base leading-relaxed max-w-3xl",
                paperTheme === "light" ? "text-[#475569]" : "text-[#aaaaaa]",
              )}
            >
              {course.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-4 text-xs font-mono">
            <div
              className={cn(
                "rounded-xl border p-3.5",
                paperTheme === "light" ? "border-[#cbd5e1] bg-white text-[#0f172a]" : "border-[#262626] bg-[#141414]",
              )}
            >
              <span className="text-[#666666] block">Curriculum Units</span>
              <span className="font-bold text-base">{course.units.length} Units</span>
            </div>
            <div
              className={cn(
                "rounded-xl border p-3.5",
                paperTheme === "light" ? "border-[#cbd5e1] bg-white text-[#0f172a]" : "border-[#262626] bg-[#141414]",
              )}
            >
              <span className="text-[#666666] block">Syllabus Modules</span>
              <span className="font-bold text-base">{course.topics.length} Notes</span>
            </div>
            <div
              className={cn(
                "rounded-xl border p-3.5",
                paperTheme === "light" ? "border-[#cbd5e1] bg-white text-[#0f172a]" : "border-[#262626] bg-[#141414]",
              )}
            >
              <span className="text-[#666666] block">Model Exam Bank</span>
              <span className="font-bold text-base">{course.examQuestions.length} Qs</span>
            </div>
            <div
              className={cn(
                "rounded-xl border p-3.5",
                paperTheme === "light" ? "border-[#cbd5e1] bg-white text-[#0f172a]" : "border-[#262626] bg-[#141414]",
              )}
            >
              <span className="text-[#666666] block">Document Scope</span>
              <span className="font-bold text-[#0099ff] text-base capitalize">{mode} Mode</span>
            </div>
          </div>
        </section>

        {/* Table of Contents Section */}
        <section
          className={cn(
            "my-10 pb-8 avoid-break page-break-after",
            paperTheme === "light" ? "border-b border-[#cbd5e1]" : "border-b border-[#262626]",
          )}
        >
          <h2
            className={cn(
              "font-display text-xl font-bold mb-4 flex items-center gap-2",
              paperTheme === "light" ? "text-[#0f172a]" : "text-white",
            )}
          >
            <BookOpen className="size-5 text-[#0099ff]" />
            <span>Table of Contents</span>
          </h2>
          <div className="space-y-5">
            {showTopics && (
              <div className="space-y-2">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#888888]">
                  Part 1: Syllabus Topic Modules ({course.topics.length})
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {course.topics.map((t) => (
                    <a
                      key={t.id}
                      href={`#topic-${t.slug}`}
                      className={cn(
                        "flex items-center justify-between p-2.5 rounded-lg border transition-colors",
                        paperTheme === "light"
                          ? "bg-white border-[#cbd5e1] text-[#1e293b] hover:border-[#0099ff]"
                          : "bg-[#141414] border-[#262626] hover:border-[#0099ff]/50 text-[#cccccc]",
                      )}
                    >
                      <span className="font-mono text-[11px] text-[#0099ff] w-7 shrink-0 font-bold">
                        #{String(t.number).padStart(2, "0")}
                      </span>
                      <span className="truncate flex-1 font-medium">{t.title}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {showExam && (
              <div className="space-y-2 pt-2">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#888888]">
                  Part 2: 14-Mark Model Examination Bank ({course.examQuestions.length})
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {course.examQuestions.map((eq) => (
                    <a
                      key={eq.id}
                      href={`#exam-${eq.id}`}
                      className={cn(
                        "flex items-center justify-between p-2.5 rounded-lg border transition-colors",
                        paperTheme === "light"
                          ? "bg-white border-[#cbd5e1] text-[#1e293b] hover:border-amber-500"
                          : "bg-[#141414] border-[#262626] hover:border-amber-500/50 text-[#cccccc]",
                      )}
                    >
                      <span className="font-mono text-[11px] text-amber-500 w-8 shrink-0 font-bold">
                        Q{eq.number}
                      </span>
                      <span className="truncate flex-1 font-medium">{eq.title}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 1: Topics Content */}
        {showTopics && (
          <section className="space-y-12 mb-14">
            <div
              className={cn(
                "pb-3",
                paperTheme === "light" ? "border-b border-[#cbd5e1]" : "border-b border-white/20",
              )}
            >
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0099ff]">
                PART 1 · SYLLABUS TOPIC MODULES
              </span>
              <h2
                className={cn(
                  "font-display text-2xl sm:text-3xl font-bold mt-1",
                  paperTheme === "light" ? "text-[#0f172a]" : "text-white",
                )}
              >
                Complete Structured Notes
              </h2>
            </div>

            {course.topics.map((topic, idx) => (
              <article
                key={topic.id}
                id={`topic-${topic.slug}`}
                className={cn(
                  "space-y-6 pt-6",
                  idx > 0 && "print-page-break page-break-before",
                  idx > 0 && (paperTheme === "light" ? "border-t border-[#cbd5e1]" : "border-t border-[#262626]"),
                )}
              >
                <div className="space-y-2.5">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="rounded bg-[#0099ff] text-white px-2.5 py-0.5 font-mono font-bold">
                      Module #{String(topic.number).padStart(2, "0")}
                    </span>
                    <span
                      className={cn(
                        "rounded border px-2.5 py-0.5 font-sans font-medium",
                        paperTheme === "light"
                          ? "bg-[#f1f5f9] border-[#cbd5e1] text-[#475569]"
                          : "bg-[#1c1c1c] border-[#262626] text-[#999999]",
                      )}
                    >
                      {topic.unit}
                    </span>
                    {topic.marks && (
                      <span
                        className={cn(
                          "rounded border px-2.5 py-0.5 font-mono",
                          paperTheme === "light"
                            ? "bg-[#f1f5f9] border-[#cbd5e1] text-[#475569]"
                            : "bg-[#1c1c1c] border-[#262626] text-[#999999]",
                        )}
                      >
                        {topic.marks} Marks
                      </span>
                    )}
                  </div>
                  <h3
                    className={cn(
                      "font-display text-2xl sm:text-3xl font-bold tracking-tight",
                      paperTheme === "light" ? "text-[#0f172a]" : "text-white",
                    )}
                  >
                    {topic.title}
                  </h3>
                  {topic.summary && (
                    <p
                      className={cn(
                        "font-sans text-sm leading-relaxed italic",
                        paperTheme === "light" ? "text-[#475569]" : "text-[#aaaaaa]",
                      )}
                    >
                      {topic.summary}
                    </p>
                  )}
                </div>

                <div
                  className={cn(
                    "note-prose",
                    fontSizeClass,
                    paperTheme === "light" ? "text-[#1e293b]" : "text-[#d4d4d4]",
                  )}
                >
                  <NoteBody blocks={topic.blocks} docId={`export:topic:${topic.slug}`} />
                </div>
              </article>
            ))}
          </section>
        )}

        {/* Section 2: Model Examination Answers */}
        {showExam && (
          <section
            className={cn(
              "space-y-12",
              showTopics && "mt-16 pt-10 print-page-break page-break-before",
              showTopics && (paperTheme === "light" ? "border-t-2 border-[#cbd5e1]" : "border-t-2 border-white/20"),
            )}
          >
            <div
              className={cn(
                "pb-3",
                paperTheme === "light" ? "border-b border-[#cbd5e1]" : "border-b border-white/20",
              )}
            >
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-amber-500">
                PART 2 · 14-MARK MODEL EXAMINATION BANK
              </span>
              <h2
                className={cn(
                  "font-display text-2xl sm:text-3xl font-bold mt-1",
                  paperTheme === "light" ? "text-[#0f172a]" : "text-white",
                )}
              >
                Model Examination Answers
              </h2>
            </div>

            {course.examQuestions.map((eq, idx) => (
              <article
                key={eq.id}
                id={`exam-${eq.id}`}
                className={cn(
                  "space-y-6 pt-6",
                  idx > 0 && "print-page-break page-break-before",
                  idx > 0 && (paperTheme === "light" ? "border-t border-[#cbd5e1]" : "border-t border-[#262626]"),
                )}
              >
                <div className="space-y-2.5">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="rounded bg-amber-500 text-black px-2.5 py-0.5 font-mono font-bold">
                      Question {eq.number}
                    </span>
                    {eq.marks && (
                      <span
                        className={cn(
                          "rounded border px-2.5 py-0.5 font-mono font-bold",
                          paperTheme === "light"
                            ? "bg-amber-50 border-amber-200 text-amber-900"
                            : "bg-[#1c1c1c] border-[#262626] text-amber-300",
                        )}
                      >
                        {eq.marks} Marks Scope
                      </span>
                    )}
                  </div>
                  <h3
                    className={cn(
                      "font-display text-xl sm:text-2xl font-bold tracking-tight",
                      paperTheme === "light" ? "text-[#0f172a]" : "text-white",
                    )}
                  >
                    {eq.title}
                  </h3>
                  <div
                    className={cn(
                      "exam-prompt-box rounded-xl border p-4 text-xs sm:text-sm",
                      paperTheme === "light"
                        ? "bg-[#fffbeb] border-[#fde68a] text-[#78350f]"
                        : "bg-[#141414] border-[#262626] text-[#cccccc]",
                    )}
                  >
                    <span className="font-mono text-[10px] uppercase font-bold text-[#888888] block mb-1">
                      Examination Question Prompt:
                    </span>
                    <p className="font-medium leading-relaxed">{eq.question}</p>
                  </div>
                </div>

                <div
                  className={cn(
                    "note-prose",
                    fontSizeClass,
                    paperTheme === "light" ? "text-[#1e293b]" : "text-[#d4d4d4]",
                  )}
                >
                  <NoteBody blocks={eq.blocks} docId={`export:exam:${eq.id}`} />
                </div>
              </article>
            ))}
          </section>
        )}
      </main>
    </div>
  );
}
