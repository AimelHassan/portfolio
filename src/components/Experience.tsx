interface WorkStep {
  num: string;
  title: string;
  desc: string;
}

export function Experience() {
  const steps: WorkStep[] = [
    {
      num: "01",
      title: "Find the leak",
      desc: "I talk to the owner or team and find where work gets stuck, missed, or repeated.",
    },
    {
      num: "02",
      title: "Scope the fix",
      desc: "I turn the mess into a clear before and after.",
    },
    {
      num: "03",
      title: "Build the system",
      desc: "I build the backend, automations, AI extraction, dashboard, alerts, and review flow.",
    },
    {
      num: "04",
      title: "Ship into real use",
      desc: "I deploy it, watch what breaks, fix it, and hand it over.",
    },
  ];

  return (
    <section className="mb-24">
      <h2 className="text-[12px] font-medium text-zinc-500 uppercase tracking-[0.2em] mb-8">
        How I Work
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {steps.map((step) => (
          <div
            key={step.num}
            className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] flex gap-4"
          >
            <div className="text-[28px] font-bold text-zinc-300 font-serif leading-none select-none">
              {step.num}
            </div>
            <div className="space-y-1.5">
              <h3 className="text-[16px] font-bold text-zinc-900 leading-snug">
                {step.title}
              </h3>
              <p className="text-zinc-600 text-[14px] leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
