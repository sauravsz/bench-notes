import { createFileRoute, Link } from "@tanstack/react-router";
import { allCourses } from "@/data/courses";
import { useAccessControl } from "@/lib/auth/access-control";
import { BookOpen, Download, FileText, Lock, Printer, Sparkles } from "lucide-react";

export const Route = createFileRoute("/export/")({
  component: ExportIndex,
});
function ExportIndex() {
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

  return (
    <main className="px-4 py-8 sm:px-10 sm:py-12 ios-fade-up bg-[#090909]">
      <div className="mx-auto max-w-4xl space-y-10">
        {/* Header Ribbon */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1c1c1c] border border-[#262626] px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[#0099ff]">
              <Download className="size-3.5" />
              Academic Export Suite
            </span>
            <span className="font-mono text-xs text-[#666666]">
              {allCourses.length} Papers Available
            </span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-[-0.03em] text-white">
            Export Paper-Wise Notes (PDF)
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#999999] leading-relaxed max-w-2xl">
            Compile and export book-grade revision portfolios for each MBA paper. Includes all structured syllabus modules, 14-mark model examination answers, formulas, and structural comparison tables formatted for print and PDF archiving.
          </p>
        </div>

        {/* Paper Export Cards Grid */}
        <div className="grid gap-5 sm:grid-cols-2">
          {allCourses.map((course) => {
            const topicCount = course.topics.length;
            const examCount = course.examQuestions.length;

            return (
              <div
                key={course.id}
                className="flex flex-col justify-between rounded-[22px] border border-[#262626] bg-[#141414] p-6 transition-all duration-200 hover:border-[#383838] hover:bg-[#181818] shadow-sm group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full bg-[#1c1c1c] border border-[#262626] px-2.5 py-0.5 font-mono text-xs font-bold text-white">
                      Paper {course.code}
                    </span>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#666666]">
                      {course.category}
                    </span>
                  </div>

                  <h2 className="font-display text-xl font-bold text-white group-hover:text-[#0099ff] transition-colors leading-snug">
                    {course.title}
                  </h2>

                  <p className="line-clamp-2 text-xs text-[#999999] leading-relaxed">
                    {course.description}
                  </p>

                  <div className="flex items-center gap-3 pt-1 text-xs text-[#777777]">
                    <span className="flex items-center gap-1 font-mono">
                      <FileText className="size-3.5 text-[#0099ff]" />
                      {topicCount} Modules
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 font-mono">
                      <Sparkles className="size-3.5 text-amber-400" />
                      {examCount} 14-Mark Qs
                    </span>
                  </div>
                </div>

                {/* Export Action Buttons */}
                <div className="mt-6 pt-4 border-t border-[#262626] flex flex-col gap-2">
                  <Link
                    to="/export/$courseSlug"
                    params={{ courseSlug: course.slug }}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white text-black hover:bg-white/90 px-4 py-2.5 font-sans text-xs font-bold shadow-sm transition-all ios-press"
                  >
                    <Printer className="size-3.5" />
                    <span>Export Full Paper PDF</span>
                  </Link>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <Link
                      to="/export/$courseSlug"
                      params={{ courseSlug: course.slug }}
                      search={{ mode: "topics" }}
                      className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[#262626] bg-[#1c1c1c] hover:bg-[#222222] hover:text-white px-3 py-1.5 font-sans text-[11px] text-[#aaaaaa] transition-colors text-center"
                    >
                      <BookOpen className="size-3" />
                      <span>Topics Only</span>
                    </Link>
                    <Link
                      to="/export/$courseSlug"
                      params={{ courseSlug: course.slug }}
                      search={{ mode: "exam" }}
                      className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[#262626] bg-[#1c1c1c] hover:bg-[#222222] hover:text-white px-3 py-1.5 font-sans text-[11px] text-[#aaaaaa] transition-colors text-center"
                    >
                      <Sparkles className="size-3" />
                      <span>Exam Qs Only</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
