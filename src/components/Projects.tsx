export function Projects() {
  return (
    <section id="projects" className="mb-24 scroll-mt-20">
      {/* What I'm Building Now */}
      <div className="mb-16">
        <h2 className="text-[12px] font-medium text-zinc-500 uppercase tracking-[0.2em] mb-6">
          What I'm Building Now
        </h2>
        <div className="rounded-2xl border-2 border-zinc-900 bg-white p-7 shadow-[0_4px_20px_-6px_rgba(0,0,0,0.08)] relative">
          <div className="absolute top-4 right-4 bg-emerald-500/10 text-emerald-700 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border border-emerald-500/20">
            Active Build
          </div>
          <h3 className="text-[20px] font-bold text-zinc-950 mb-2">
            Valith Bid Desk
          </h3>
          <p className="text-zinc-700 text-[15px] leading-relaxed mb-4 max-w-2xl">
            An AI first-review system for firms that deal with tenders, RFPs, TORs, EOIs, donor opportunities, and proposal-driven work.
            It tracks new opportunities, reads the documents, scores fit, flags risks, and gives the team one pipeline to work from. Live with early clients now.
          </p>
          <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-100">
            {["Python", "FastAPI", "Playwright", "Supabase", "Postgres", "FAISS", "Docker", "Cloud Run", "LangChain", "RAG"].map((tech) => (
              <span key={tech} className="px-2 py-0.5 text-[11px] font-medium text-zinc-600 bg-zinc-100 rounded-md">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* What I've Shipped */}
      <div>
        <h2 className="text-[12px] font-medium text-zinc-500 uppercase tracking-[0.2em] mb-8">
          What I've Shipped
        </h2>
        <div className="space-y-6">
          {/* Shipped Project 1 */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-7 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] space-y-4">
            <h3 className="text-[17px] font-semibold text-zinc-950">
              Valith Bid Desk
            </h3>
            <p className="text-zinc-600 text-[14.5px] leading-relaxed">
              Built a tender/RFP intelligence system for an Islamabad-based agency. The system monitors opportunity sources, reads documents, extracts key details, scores fit, and turns scattered tenders into a review pipeline.
            </p>
          </div>

          {/* Shipped Project 2 */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-7 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] space-y-4">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-[17px] font-semibold text-zinc-950">
                Eon
              </h3>
              <span className="bg-amber-500/10 text-amber-700 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border border-amber-500/20 shrink-0">
                First Paid Deployment
              </span>
            </div>
            <p className="text-zinc-600 text-[14.5px] leading-relaxed">
              Built Eon, an email operations system for an unnamed logistics company. It read, classified, and summarized 500+ operational emails in its first production stretch.
            </p>
          </div>

          {/* Shipped Project 3 */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-7 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] space-y-3">
            <h3 className="text-[17px] font-semibold text-zinc-950">
              Hermes (Outreach)
            </h3>
            <p className="text-zinc-600 text-[14.5px] leading-relaxed">
              Built an outreach and follow-up system that helped qualify leads and pull together 155+ waitlist signups, before I shelved it to focus on bespoke work that clients couldn't buy off a shelf.
            </p>
          </div>

          {/* Shipped Project 4 */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-7 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] space-y-3">
            <h3 className="text-[17px] font-semibold text-zinc-950">
              Dashboards
            </h3>
            <p className="text-zinc-600 text-[14.5px] leading-relaxed">
              Built operating dashboards for opportunity pipelines, source health, review status, audit trails, alerts, and team activity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
