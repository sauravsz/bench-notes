import { useEffect } from "react";
import { useAppearance } from "./appearance";
import { useHighlights } from "./highlights";
import { useProgress } from "./progress";
import { toast } from "sonner";

export function useReaderShortcuts() {
  const toggleSidebar = useAppearance((s) => s.toggleSidebar);
  const toggleRightSidebar = useAppearance((s) => s.toggleRightSidebar);
  const increaseWidth = useAppearance((s) => s.increaseWidth);
  const decreaseWidth = useAppearance((s) => s.decreaseWidth);
  const increaseFontSize = useAppearance((s) => s.increaseFontSize);
  const decreaseFontSize = useAppearance((s) => s.decreaseFontSize);
  const cycleLineSpacing = useAppearance((s) => s.cycleLineSpacing);
  const toggleAutoHighlight = useHighlights((s) => s.toggleAutoHighlight);
  const toggleStudied = useProgress((s) => s.toggleStudied);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      // Ignore if user is currently typing in an input, textarea, or contentEditable
      const target = e.target as HTMLElement | null;
      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target?.isContentEditable ||
        target?.closest("input") ||
        target?.closest("textarea")
      ) {
        return;
      }

      // 1. Cmd + B / Ctrl + B -> Toggle Left Sidebar
      if ((e.metaKey || e.ctrlKey) && (e.key.toLowerCase() === "b" || e.code === "KeyB")) {
        e.preventDefault();
        e.stopPropagation();
        const next = toggleSidebar();
        if (next) {
          toast.info("Left sidebar collapsed (⌘B)", { duration: 1200 });
        } else {
          toast.info("Left sidebar expanded (⌘B)", { duration: 1200 });
        }
        return;
      }

      // 2. Bracket shortcuts [ or ] -> Toggle Left Sidebar
      if ((e.key === "[" || e.key === "]") && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        const next = toggleSidebar();
        if (next) {
          toast.info("Left sidebar collapsed", { duration: 1200 });
        } else {
          toast.info("Left sidebar expanded", { duration: 1200 });
        }
        return;
      }

      // 3. T -> Toggle Right Sidebar (Outline / Table of Contents)
      if (
        (e.key.toLowerCase() === "t" || e.code === "KeyT") &&
        !e.metaKey &&
        !e.ctrlKey &&
        !e.altKey &&
        !e.shiftKey
      ) {
        e.preventDefault();
        const next = toggleRightSidebar();
        if (next) {
          toast.info("Outline collapsed (T)", { duration: 1200 });
        } else {
          toast.info("Outline expanded (T)", { duration: 1200 });
        }
        return;
      }

      // 4. M -> Toggle Mark as Studied
      if (
        (e.key.toLowerCase() === "m" || e.code === "KeyM") &&
        !e.metaKey &&
        !e.ctrlKey &&
        !e.altKey &&
        !e.shiftKey
      ) {
        let slug = "";
        if (typeof window !== "undefined") {
          const pathname = window.location.pathname;
          if (pathname.includes("/topic/")) {
            slug = pathname.split("/topic/")[1]?.split("?")[0]?.split("#")[0] || "";
          } else if (pathname.includes("/exam/")) {
            slug = pathname.split("/exam/")[1]?.split("?")[0]?.split("#")[0] || "";
          } else {
            slug = useProgress.getState().lastSlug || "";
          }
        }

        if (slug) {
          e.preventDefault();
          const isCurrentlyStudied = !!useProgress.getState().studied[slug];
          toggleStudied(slug);
          if (!isCurrentlyStudied) {
            toast.success("Marked as Studied ✓ (M)", { duration: 1500 });
          } else {
            toast.info("Unmarked from Studied (M)", { duration: 1500 });
          }
          return;
        }
      }

      // 5. Shift + H -> Toggle Auto-Highlighting
      if (e.shiftKey && (e.key.toLowerCase() === "h" || e.code === "KeyH") && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        const next = toggleAutoHighlight();
        if (next) {
          toast.success("Auto-highlighting enabled (⇧H)", { duration: 1500 });
        } else {
          toast.info("Auto-highlighting disabled (⇧H)", { duration: 1500 });
        }
        return;
      }

      // 6. Shift + , (<) -> Decrease width
      if (e.shiftKey && (e.key === "<" || e.key === ",")) {
        e.preventDefault();
        decreaseWidth();
        toast.info("Line width decreased (⇧<)", { duration: 1000 });
        return;
      }

      // 7. Shift + . (>) -> Increase width
      if (e.shiftKey && (e.key === ">" || e.key === ".")) {
        e.preventDefault();
        increaseWidth();
        toast.info("Line width increased (⇧>)", { duration: 1000 });
        return;
      }

      // 8. Shift + - (_) -> Decrease font size
      if (e.shiftKey && (e.key === "_" || e.key === "-")) {
        e.preventDefault();
        decreaseFontSize();
        toast.info("Font size decreased (⇧-)", { duration: 1000 });
        return;
      }

      // 9. Shift + = (+) -> Increase font size
      if (e.shiftKey && (e.key === "+" || e.key === "=")) {
        e.preventDefault();
        increaseFontSize();
        toast.info("Font size increased (⇧+)", { duration: 1000 });
        return;
      }

      // 10. Shift + : or Shift + ; -> Decrease line spacing
      if (e.shiftKey && (e.key === ":" || e.key === ";")) {
        e.preventDefault();
        cycleLineSpacing("down");
        toast.info("Line spacing adjusted", { duration: 1000 });
        return;
      }

      // 11. Shift + " or Shift + ' -> Increase line spacing
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
    toggleRightSidebar,
    increaseWidth,
    decreaseWidth,
    increaseFontSize,
    decreaseFontSize,
    cycleLineSpacing,
    toggleAutoHighlight,
    toggleStudied,
  ]);
}
