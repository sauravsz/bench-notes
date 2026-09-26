import { useEffect, useRef } from "react";
import { Command, Keyboard, X } from "lucide-react";
import { Button } from "./ui/button";

export function ShortcutsDialog({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const SHORTCUTS = [
    { key: "⌘B / [ / ]", desc: "Toggle Sidebar (Distraction-Free Mode)", category: "Navigation" },
    { key: "⇧H", desc: "Toggle Instant Auto-Highlighting", category: "Reading & Highlighting" },
    { key: "H", desc: "Highlight Selected Text (Manual Mode)", category: "Reading & Highlighting" },
    { key: "N", desc: "Add Note / Annotation to Selection", category: "Reading & Highlighting" },
    { key: "⇧,", desc: "Decrease Content Line Width (<)", category: "Appearance" },
    { key: "⇧.", desc: "Increase Content Line Width (>)", category: "Appearance" },
    { key: "⇧-", desc: "Decrease Font Size (-)", category: "Appearance" },
    { key: "⇧=", desc: "Increase Font Size (+)", category: "Appearance" },
    { key: "⇧:", desc: "Decrease Line Height Spacing (:)", category: "Appearance" },
    { key: "⇧\"", desc: "Increase Line Height Spacing (\")", category: "Appearance" },
    { key: "?", desc: "Open Keyboard Shortcuts Help", category: "General" },
  ];

  const grouped = SHORTCUTS.reduce((acc, s) => {
    if (!acc[s.category]) acc[s.category] = [];
    acc[s.category].push(s);
    return acc;
  }, {} as Record<string, typeof SHORTCUTS>);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 transition-opacity duration-300">
      <div
        ref={dialogRef}
        className="w-full max-w-lg rounded-2xl border border-line bg-surface p-6 shadow-2xl ios-scale-in space-y-4 max-h-[85vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between border-b border-line/60 pb-3">
          <div className="flex items-center gap-2">
            <Keyboard className="size-5 text-accent" />
            <h3 className="font-serif text-xl font-bold text-ink">
              Keyboard Shortcuts
            </h3>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="size-8 rounded-lg ios-press"
            aria-label="Close shortcuts dialog"
          >
            <X className="size-4" />
          </Button>
        </div>

        <div className="space-y-4">
          {Object.entries(grouped).map(([category, items]) => (
            <div key={category} className="space-y-2">
              <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-muted block">
                {category}
              </span>
              <div className="rounded-xl border border-line bg-bg-warm/40 divide-y divide-line/60 overflow-hidden">
                {items.map((item) => (
                  <div
                    key={item.desc}
                    className="flex items-center justify-between p-2.5 text-xs"
                  >
                    <span className="font-serif text-ink-soft">{item.desc}</span>
                    <kbd className="rounded-md border border-line bg-surface px-2 py-0.5 font-mono text-[11px] font-bold text-ink shadow-2xs">
                      {item.key}
                    </kbd>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-2 border-t border-line/60 flex justify-end">
          <Button size="sm" onClick={onClose} className="rounded-xl text-xs ios-press">
            Got it
          </Button>
        </div>
      </div>
    </div>
  );
}
