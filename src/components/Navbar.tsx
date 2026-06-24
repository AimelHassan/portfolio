import { useEffect, useState } from "react";

function getOrdinalSuffix(i: number) {
  const j = i % 10;
  const k = i % 100;
  if (j === 1 && k !== 11) return "st";
  if (j === 2 && k !== 12) return "nd";
  if (j === 3 && k !== 13) return "rd";
  return "th";
}

export function Navbar() {
  // Initialize with cached count from localStorage to prevent layout flickering on page refresh
  const [visitorCount, setVisitorCount] = useState<number | null>(() => {
    if (typeof window !== "undefined") {
      const cached = localStorage.getItem("portfolio-visitor-cache");
      return cached ? parseInt(cached, 10) : null;
    }
    return null;
  });

  useEffect(() => {
    // Session storage prevents page refreshes from inflating visitor count
    const isVisited = sessionStorage.getItem("portfolio-visited");
    const url = isVisited 
      ? "https://api.counterapi.dev/v1/aimelhasan-portfolio/visits/"
      : "https://api.counterapi.dev/v1/aimelhasan-portfolio/visits/up";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data && typeof data.count === "number") {
          setVisitorCount(data.count);
          localStorage.setItem("portfolio-visitor-cache", String(data.count));
          sessionStorage.setItem("portfolio-visited", "true");
        }
      })
      .catch((err) => {
        console.error("Failed to fetch visitor count:", err);
      });
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fcfcfc]/80 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-5 sm:px-6 h-[64px] sm:h-[72px] flex items-center justify-between">
        <div className="flex items-center gap-4 sm:gap-6 text-[14px] sm:text-[14.5px] font-medium">
          <a href="#" className="text-zinc-900">
            Home
          </a>
          <a
            href="#projects"
            className="text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            Work
          </a>
          <a
            href="#"
            className="text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            Notes
          </a>
          <a
            href="#contact"
            className="text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            Contact
          </a>
        </div>
        <div className="text-[13px] sm:text-[13.5px] text-zinc-500 font-medium whitespace-nowrap min-w-[100px] text-right flex items-center justify-end">
          {visitorCount !== null ? (
            <>
              You are the{" "}
              <span className="font-semibold text-zinc-800 ml-1">
                {visitorCount.toLocaleString()}
              </span>
              <sup className="text-[9px] ml-0.5 font-bold">{getOrdinalSuffix(visitorCount)}</sup> visitor
            </>
          ) : (
            // Subtle loading skeleton matching the typography height to prevent layout shifts
            <span className="inline-block w-24 h-4 bg-zinc-100 animate-pulse rounded" />
          )}
        </div>
      </div>
    </nav>
  );
}
