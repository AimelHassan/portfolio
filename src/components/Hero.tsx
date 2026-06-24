import { MapPin, Mail, User, Github, Linkedin, Calendar } from "lucide-react";
import { GitHubCalendar } from "react-github-calendar";
import { TransparentVideo } from "./TransparentVideo";

export function Hero() {
  const GITHUB_USERNAME = "AimelHassan";

  return (
    <section className="pt-24 sm:pt-32 pb-8 sm:pb-12">
      {/* Header Profile Section */}
      <div className="flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-10 mb-8 sm:mb-10">
        <div className="flex flex-col justify-center space-y-4">
          <div>
            <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-[0.2em]">
              Founder, Valith
            </span>
            <h1 className="text-[36px] sm:text-[48px] font-bold text-zinc-900 tracking-tight leading-none mt-1.5 mb-2">
              Aimel Hassan
            </h1>
            <h2 className="text-[20px] sm:text-[24px] font-semibold text-zinc-800 leading-tight">
              I find the leak in a business and build the system that plugs it.
            </h2>
          </div>
          <p className="text-zinc-600 leading-relaxed text-[15px] sm:text-[15.5px] max-w-xl">
            I’m a CS student at FAST NUCES Islamabad and founder of Valith. I currently lead the full loop: sales, discovery, scope, build, deployment, and client feedback.
          </p>
          <p className="text-zinc-700 font-medium text-[14.5px] sm:text-[15px]">
            My work is focused on applied AI systems for messy workflows: <span className="text-zinc-950 font-semibold">tenders, proposals, inboxes, documents, follow-ups, and dashboards.</span>
          </p>
        </div>
        <div className="w-24 h-[168px] sm:w-36 sm:h-[240px] overflow-hidden flex items-center justify-center shrink-0 relative self-center sm:self-auto">
          <TransparentVideo
            src="/idle-animation.mp4"
            className="absolute w-full h-full object-contain pointer-events-none scale-[1.35]"
          />
        </div>
      </div>

      {/* Action / Social Buttons */}
      <div className="flex flex-wrap items-center gap-4 mb-16">
        <a
          href="#projects"
          className="inline-flex items-center justify-center px-4 py-2 text-[14px] font-medium text-white bg-zinc-900 hover:bg-zinc-800 rounded-xl transition-colors shadow-sm cursor-pointer"
        >
          View Work
        </a>
        <a
          href="https://cal.com/aimelhasan"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-4 py-2 text-[14px] font-medium text-zinc-700 bg-zinc-100 hover:bg-zinc-200 rounded-xl transition-colors border border-zinc-200/50"
        >
          <Calendar className="w-4 h-4 mr-2 text-zinc-500" strokeWidth={1.8} />
          Book a Call
        </a>
        <div className="flex items-center gap-3.5 ml-2 text-zinc-500">
          <a
            href="https://github.com/AimelHassan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/aimelhassan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* GitHub Calendar */}
      <div className="mb-2 w-full text-zinc-500 text-[10px] tracking-wider font-semibold overflow-hidden [&_svg]:w-full [&_svg]:h-auto">
        <GitHubCalendar
          username={GITHUB_USERNAME}
          colorScheme="light"
          theme={{
            light: ["#f4f4f5", "#d4d4d8", "#a1a1aa", "#71717a", "#3f3f46"],
          }}
          blockMargin={4}
          blockSize={12}
          fontSize={10}
        />
      </div>
    </section>
  );
}
