import { useEffect } from "react";
import { useAppearance } from "./appearance";
import { useHighlights } from "./highlights";
import { toast } from "sonner";

export function useReaderShortcuts() {
  const toggleSidebar = useAppearance((s) => s.toggleSidebar);
  const increaseWidth = useAppearance((s) => s.increaseWidth);
  const decreaseWidth = useAppearance((s) => s.decreaseWidth);
  const increaseFontSize = useAppearance((s) => s.increaseFontSize);
  const decreaseFontSize = useAppearance((s) => s.decreaseFontSize);
  const cycleLineSpacing = useAppearance((s) => s.cycleLineSpacing);
  const toggleAutoHighlight = useHighlights((s) => s.toggleAutoHighlight);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      // Ignore if user is currently typing in an input, textarea, or contentEditable
      const target = e.target as HTMLElement | null;
      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target?.isContentEditable
      ) {
        return;
      }

      // 1. Cmd + B / Ctrl + B -> Toggle Sidebar
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "b") {
        e.preventDefault();
        const next = toggleSidebar();
        if (next) {
          toast.info("Sidebar collapsed", {
            description: "Press Cmd+B or use sidebar button to expand.",
            duration: 1500,
          });
        } else {
          toast.info("Sidebar expanded", { duration: 1500 });
        }
        return;
      }

      // 2. Bracket shortcuts [ or ] -> Toggle Sidebar
      if ((e.key === "[" || e.key === "]") && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        toggleSidebar();
        return;
      }

      // 3. Shift + H -> Toggle Auto-Highlighting
      if (e.shiftKey && (e.key.toLowerCase() === "h" || e.code === "KeyH") && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        const next = toggleAutoHighlight();
        if (next) {
          toast.success("Auto-highlighting enabled", { duration: 1500 });
        } else {
          toast.info("Auto-highlighting disabled", { duration: 1500 });
        }
        return;
      }

      // 4. Shift + , (<) -> Decrease width
      if (e.shiftKey && (e.key === "<" || e.key === ",")) {
        e.preventDefault();
        decreaseWidth();
        toast.info("Line width decreased", { duration: 1000 });
        return;
      }

      // 5. Shift + . (>) -> Increase width
      if (e.shiftKey && (e.key === ">" || e.key === ".")) {
        e.preventDefault();
        increaseWidth();
        toast.info("Line width increased", { duration: 1000 });
        return;
      }

      // 6. Shift + - (_) -> Decrease font size
      if (e.shiftKey && (e.key === "_" || e.key === "-")) {
        e.preventDefault();
        decreaseFontSize();
        toast.info("Font size decreased", { duration: 1000 });
        return;
      }

      // 7. Shift + = (+) -> Increase font size
      if (e.shiftKey && (e.key === "+" || e.key === "=")) {
        e.preventDefault();
        increaseFontSize();
        toast.info("Font size increased", { duration: 1000 });
        return;
      }

      // 8. Shift + : or Shift + ; -> Decrease line spacing
      if (e.shiftKey && (e.key === ":" || e.key === ";")) {
        e.preventDefault();
        cycleLineSpacing("down");
        toast.info("Line spacing adjusted", { duration: 1000 });
        return;
      }

      // 9. Shift + " or Shift + ' -> Increase line spacing
      if (e.shiftKey && (e.key === '"' || e.key === "'")) {
        e.preventDefault();
        cycleLineSpacing("up");
        toast.info("Line spacing adjusted", { duration: 1000 });
        return;
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    toggleSidebar,
    increaseWidth,
    decreaseWidth,
    increaseFontSize,
    decreaseFontSize,
    cycleLineSpacing,
    toggleAutoHighlight,
  ]);
}
