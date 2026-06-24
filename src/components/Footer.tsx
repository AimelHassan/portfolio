import { Github, Mail, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <>
      <footer className="py-8 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-[14px]">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <span className="text-zinc-500">© 2026 Aimel Hassan.</span>
          <div className="flex items-center gap-6 text-zinc-600 font-medium">
            <a href="#" className="hover:text-zinc-900 transition-colors">
              Home
            </a>
            <a href="#projects" className="hover:text-zinc-900 transition-colors">
              Featured Work
            </a>
          </div>
        </div>
        <div className="flex items-center gap-5 text-zinc-500">
          <a
            href="mailto:aimel@valith.co"
            className="hover:text-zinc-900 transition-colors"
          >
            <Mail className="w-[18px] h-[18px]" strokeWidth={2} />
          </a>
          <a
            href="https://github.com/AimelHassan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 transition-colors"
          >
            <Github className="w-[18px] h-[18px]" strokeWidth={2} />
          </a>
          <a
            href="https://linkedin.com/in/aimelhassan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 transition-colors"
          >
            <Linkedin className="w-[18px] h-[18px]" strokeWidth={2} />
          </a>
        </div>
      </footer>
    </>
  );
}
