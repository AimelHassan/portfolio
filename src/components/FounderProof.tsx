import { Trophy, Mail, Layers, Users, Zap, Github } from "lucide-react";

interface ProofPoint {
  icon: React.ReactNode;
  label: string;
  value: string;
}

export function FounderProof() {
  const points: ProofPoint[] = [
    {
      icon: <Trophy className="w-4 h-4 text-zinc-500" />,
      label: "First paid deployment",
      value: "Eon, email operations for a logistics company",
    },
    {
      icon: <Mail className="w-4 h-4 text-zinc-500" />,
      label: "500+ emails processed",
      value: "first production stretch",
    },
    {
      icon: <Layers className="w-4 h-4 text-zinc-500" />,
      label: "Current flagship",
      value: "Valith Bid Desk",
    },
    {
      icon: <Users className="w-4 h-4 text-zinc-500" />,
      label: "155+ waitlist signups",
      value: "Hermes outreach system",
    },
    {
      icon: <Zap className="w-4 h-4 text-zinc-500" />,
      label: "Valith is founder-led",
      value: "I currently lead the full loop: sales, discovery, scope, build, deployment, and client feedback.",
    },
    {
      icon: <Github className="w-4 h-4 text-zinc-500" />,
      label: "784 GitHub contributions",
      value: "last 12 months",
    },
  ];

  return (
    <section className="mb-24">
      <h2 className="text-[12px] font-medium text-zinc-500 uppercase tracking-[0.2em] mb-8">
        Founder Proof
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {points.map((point) => (
          <div
            key={point.label}
            className="flex items-start gap-4 p-5 rounded-2xl border border-zinc-200 bg-white shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]"
          >
            <div className="p-2 bg-zinc-50 border border-zinc-200/50 rounded-xl h-fit shrink-0">
              {point.icon}
            </div>
            <div className="space-y-1">
              <div className="text-[14px] font-bold text-zinc-900 leading-snug">
                {point.label}
              </div>
              <div className="text-[13.5px] text-zinc-600 leading-relaxed">
                {point.value}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
