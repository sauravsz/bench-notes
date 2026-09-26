import { useState, useEffect } from "react";
import { Clock, Pause, Play, RotateCcw, X } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export function StudyTimer({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const DEFAULT_MINUTES = 25;
  const [secondsLeft, setSecondsLeft] = useState(DEFAULT_MINUTES * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout | number | null = null;
    if (isRunning && secondsLeft > 0) {
      timer = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else if (secondsLeft === 0 && isRunning) {
      setIsRunning(false);
      toast.success("Study sprint completed! Take a 5-minute break.", {
        duration: 5000,
      });
    }
    return () => clearInterval(timer);
  }, [isRunning, secondsLeft]);

  if (!isOpen) return null;

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  const progressPercent = Math.round(((DEFAULT_MINUTES * 60 - secondsLeft) / (DEFAULT_MINUTES * 60)) * 100);

  const handleReset = () => {
    setIsRunning(false);
    setSecondsLeft(DEFAULT_MINUTES * 60);
  };

  const handleSetTime = (mins: number) => {
    setIsRunning(false);
    setSecondsLeft(mins * 60);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 w-72 rounded-2xl border border-line bg-surface/95 backdrop-blur-md p-4 shadow-2xl ios-scale-in space-y-3">
      <div className="flex items-center justify-between border-b border-line/60 pb-2">
        <div className="flex items-center gap-1.5">
          <Clock className="size-4 text-accent" />
          <span className="font-serif text-sm font-bold text-ink">
            Revision Sprint Timer
          </span>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="rounded p-1 text-muted hover:bg-bg-warm hover:text-ink transition-colors"
          aria-label="Close timer"
        >
          <X className="size-3.5" />
        </button>
      </div>

      <div className="text-center py-2">
        <span className="font-mono text-4xl font-bold tracking-tight text-ink tabular-nums">
          {formattedTime}
        </span>
        <div className="mt-2 h-1.5 w-full rounded-full bg-bg-warm overflow-hidden">
          <div
            className="h-full bg-accent transition-all duration-300 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Preset time buttons */}
      <div className="flex justify-center gap-1 text-xs">
        {[15, 25, 45].map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => handleSetTime(m)}
            className={cn(
              "rounded-lg px-2.5 py-1 font-sans text-xs font-semibold transition-all ios-press",
              secondsLeft === m * 60
                ? "bg-accent/15 text-accent font-bold"
                : "bg-bg-warm text-muted hover:text-ink",
            )}
          >
            {m}m
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2 pt-1">
        <Button
          size="sm"
          onClick={() => setIsRunning(!isRunning)}
          className="flex-1 gap-1.5 text-xs font-bold ios-press rounded-xl"
        >
          {isRunning ? (
            <>
              <Pause className="size-3.5" /> Pause
            </>
          ) : (
            <>
              <Play className="size-3.5" /> Start
            </>
          )}
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={handleReset}
          className="size-8 p-0 rounded-xl ios-press"
          title="Reset timer"
        >
          <RotateCcw className="size-3.5" />
        </Button>
      </div>
    </div>
  );
}
