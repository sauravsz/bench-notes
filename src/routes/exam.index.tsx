import { createFileRoute, Link } from "@tanstack/react-router";
import { useCurrentCourse } from "@/lib/current-course";
import { ArrowRight, Scale } from "lucide-react";

export const Route = createFileRoute("/exam/")({ component: ExamIndex });

function ExamIndex() {
  const activeCourse = useCurrentCourse((s) => s.getActiveCourse());
  const examQuestions = activeCourse.examQuestions;

  return (
    <main className="px-4 py-8 sm:px-10 sm:py-12 ios-fade-up bg-[#090909]">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1c1c1c] border border-[#262626] px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[#0099ff]">
              <Scale className="size-3.5" />
              Paper {activeCourse.code} · Model Answers
            </span>
            <span className="font-mono text-xs text-[#666666]">
              {examQuestions.length} Questions
            </span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-white">
            Model Examination Answers
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#999999] leading-relaxed">
            University examination questions for {activeCourse.title} structured with analytical legal definitions, statutory sections, and case precedents.
          </p>
        </div>

        <div className="space-y-4">
          {examQuestions.map((q) => (
            <Link
              key={q.id}
              to="/exam/$qid"
              params={{ qid: q.id }}
              className="block rounded-[20px] border border-[#262626] bg-[#141414] p-6 transition-all duration-200 hover:border-[#383838] hover:bg-[#181818] shadow-xs group"
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="rounded-full bg-[#1c1c1c] border border-[#262626] px-2.5 py-0.5 font-mono text-xs font-bold text-[#0099ff]">
                  Question {q.number}
                </span>
                <span className="font-sans text-xs font-bold text-[#0099ff] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  Study Answer <ArrowRight className="size-3.5" />
                </span>
              </div>
              <h2 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-[#0099ff] transition-colors leading-snug">
                {q.title}
              </h2>
              <p className="mt-2 font-sans text-xs sm:text-sm leading-relaxed text-[#999999]">
                {q.question}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
