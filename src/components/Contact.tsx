import { Calendar, Mail, Linkedin, ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="mb-24 scroll-mt-20">
      <h2 className="text-[12px] font-medium text-zinc-500 uppercase tracking-[0.2em] mb-8">
        Work with me
      </h2>
      <div className="rounded-2xl border border-zinc-200 bg-white p-7 sm:p-8 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] space-y-8">
        <p className="text-zinc-700 text-[15.5px] sm:text-[16px] leading-relaxed max-w-xl">
          If your business has a messy workflow around documents, inboxes, tenders, proposals, follow-ups, or dashboards, I can help.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="https://cal.com/aimelhasan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-xl border border-zinc-100 hover:border-zinc-300 hover:bg-zinc-50/50 transition-colors group"
          >
            <div className="flex items-center gap-4">
              <div className="p-2 bg-zinc-50 border border-zinc-200/50 rounded-xl">
                <Calendar className="w-5 h-5 text-zinc-700" strokeWidth={1.8} />
              </div>
              <div>
                <div className="font-semibold text-[15px] text-zinc-900 mb-0.5">
                  Book a Strategy Call
                </div>
                <div className="text-[13px] text-zinc-500">
                  30-minute Cal.com session
                </div>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 transition-colors" />
          </a>

          <a
            href="mailto:aimel@valith.co"
            className="flex items-center justify-between p-4 rounded-xl border border-zinc-100 hover:border-zinc-300 hover:bg-zinc-50/50 transition-colors group"
          >
            <div className="flex items-center gap-4">
              <div className="p-2 bg-zinc-50 border border-zinc-200/50 rounded-xl">
                <Mail className="w-5 h-5 text-zinc-700" strokeWidth={1.8} />
              </div>
              <div>
                <div className="font-semibold text-[15px] text-zinc-900 mb-0.5">
                  Email
                </div>
                <div className="text-[13px] text-zinc-500">
                  aimel@valith.co
                </div>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 transition-colors" />
          </a>

          <a
            href="https://linkedin.com/in/aimelhassan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-xl border border-zinc-100 hover:border-zinc-300 hover:bg-zinc-50/50 transition-colors group sm:col-span-2"
          >
            <div className="flex items-center gap-4">
              <div className="p-2 bg-zinc-50 border border-zinc-200/50 rounded-xl">
                <Linkedin className="w-5 h-5 text-zinc-700" strokeWidth={1.8} />
              </div>
              <div>
                <div className="font-semibold text-[15px] text-zinc-900 mb-0.5">
                  LinkedIn
                </div>
                <div className="text-[13px] text-zinc-500">
                  founder updates and build notes
                </div>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 transition-colors" />
          </a>
        </div>

        <div className="pt-6 border-t border-zinc-100 flex items-center gap-2 text-[13px] text-zinc-500">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          Open to custom applied AI system contracts.
        </div>
      </div>
    </section>
  );
}
