"use client";

import { Ref, useRef, useState } from "react";

import { cn } from "@/lib/utils";

function InteractiveComputer() {
  const [isPoweredOn, setIsPoweredOn] = useState(false);
  const audioRef: Ref<HTMLAudioElement | null> = useRef(null);

  const handleClick = () => {
    // Play the click sound
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Reset to start so it plays immediately
      audioRef.current.play();
    }

    setIsPoweredOn(!isPoweredOn);
  };

  return (
    <>
      {/* Hidden audio element for the click sound */}
      <audio
        ref={audioRef}
        // src="/sounds/mixkit-clear-mouse-clicks-2997.wav"
        src="/sounds/mixkit-classic-click-1117.wav"
        preload="auto"
      />

      <picture className="flex flex-col items-center justify-center relative">
        <img
          alt="mac"
          src="/computer.png"
          className="relative w-1/2 cursor-pointer transition-opacity opacity-50 hover:opacity-65"
          onClick={handleClick}
        />

        {/* Screen glow overlay - positioned over the screen area */}
        <div
          className={cn(
            "absolute transition bg-transparent",
            isPoweredOn &&
              "!bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.4)_0%,_rgba(251,191,36,0.1)_60%,transparent_100%)]"
          )}
          style={{
            top: "3%",
            left: "44%",
            width: "16%",
            height: "28%",
            pointerEvents: "none",
            filter: "blur(8px)",
            mixBlendMode: "screen",
          }}
        />

        {/* Inner screen glow for more intensity */}
        <div
          className={cn(
            "absolute transition shadow-transparent",
            isPoweredOn &&
              "!shadow-[inset_0_0_30px_rgba(251,191,36,0.6),0_0_40px_rgba(251,191,36,0.4)]"
          )}
          style={{
            top: "6%",
            left: "46%",
            width: "10%",
            height: "21%",
            // boxShadow: "none",
            // boxShadow:
            //   "inset 0 0 30px rgba(251, 191, 36, 0.6), 0 0 40px rgba(251, 191, 36, 0.4)",
            pointerEvents: "none",
            borderRadius: "2%",
          }}
        />
      </picture>
    </>
  );
}

export { InteractiveComputer };
