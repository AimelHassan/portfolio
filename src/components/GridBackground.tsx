import { useEffect, useRef } from "react";

export function GridBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Directly update CSS custom properties on the DOM node for 120fps hardware-accelerated rendering
      container.style.setProperty("--mouse-x", `${e.clientX}px`);
      container.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[-1] pointer-events-none"
      style={{
        // Seed initial offscreen values to prevent the spotlight from rendering in a corner on mount
        ["--mouse-x" as any]: "-1000px",
        ["--mouse-y" as any]: "-1000px",
      }}
    >
      {/* Layer 1: Base Grid (always visible at 5% opacity) */}
      <svg
        className="absolute inset-0 h-full w-full stroke-zinc-900/5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid-pattern"
            width="64"
            height="64"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 64 0 L 0 0 0 64"
              fill="none"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>

      {/* Layer 2: Interactive Spotlight Grid (becomes 25% opaque under the cursor) */}
      <div
        className="absolute inset-0 h-full w-full"
        style={{
          maskImage: "radial-gradient(180px circle at var(--mouse-x) var(--mouse-y), black 0%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(180px circle at var(--mouse-x) var(--mouse-y), black 0%, transparent 100%)",
        }}
      >
        <svg
          className="absolute inset-0 h-full w-full stroke-zinc-900/25"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>
    </div>
  );
}
