import { Link } from "@tanstack/react-router";

export function NotFound() {
  return (
    <main className="px-6 py-16 text-center">
      <h1 className="font-serif text-2xl font-semibold text-ink">
        Not in these notes
      </h1>
      <p className="mx-auto mt-2 max-w-md font-serif text-ink-soft">
        That page is not part of the lecture transcript.
      </p>
      <Link
        to="/"
        className="mt-6 inline-flex min-h-11 items-center text-sm font-medium text-accent hover:underline"
      >
        Back to the syllabus
      </Link>
    </main>
  );
}
