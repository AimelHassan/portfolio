import { Layers, Mail, Search, FileText, CheckSquare, ShieldCheck } from "lucide-react";

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export function Services() {
  const services: ServiceItem[] = [
    {
      icon: <Search className="w-5 h-5 text-zinc-600" />,
      title: "RFP, Tender & Proposal Intelligence",
      desc: "Scraping opportunity portals, parsing complex procurement notices, and scoring them automatically based on custom client fit criteria.",
    },
    {
      icon: <FileText className="w-5 h-5 text-zinc-600" />,
      title: "Document Extraction Workflows",
      desc: "Extracting structured parameters, deadlines, scope, and evaluation grids from complex multi-page PDF documents.",
    },
    {
      icon: <Mail className="w-5 h-5 text-zinc-600" />,
      title: "Email Operations AI",
      desc: "Reading operational inboxes, performing intent classification, routing requests, and summarizing long email threads into actions.",
    },
    {
      icon: <Layers className="w-5 h-5 text-zinc-600" />,
      title: "Dashboards & Operational UI",
      desc: "Building custom operating panels, status boards, audit trails, and source health monitors around AI data pipelines.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-zinc-600" />,
      title: "Human-in-the-Loop Systems",
      desc: "Designing review queues for low-confidence AI Extractions, ensuring high accuracy by combining automated reviews with human confirmation.",
    },
    {
      icon: <CheckSquare className="w-5 h-5 text-zinc-600" />,
      title: "Custom AI Agent Integrations",
      desc: "Connecting AI agents with real business APIs, slack alerts, email triggers, and document storages to automate workflows.",
    },
  ];

  return (
    <section className="mb-24">
      <h2 className="text-[12px] font-medium text-zinc-500 uppercase tracking-[0.2em] mb-6">
        What I Build
      </h2>
      
      {/* Positioning block */}
      <div className="rounded-2xl bg-zinc-50 border border-zinc-200/80 p-6 sm:p-7 mb-8">
        <p className="text-zinc-800 text-[15.5px] sm:text-[16.5px] font-medium leading-relaxed">
          "I’m most useful when a business process is messy, repetitive, document-heavy, inbox-heavy, or spread across too many sources."
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {services.map((service) => (
          <div
            key={service.title}
            className="flex gap-4 p-5 rounded-2xl border border-zinc-200 bg-white shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]"
          >
            <div className="p-2 bg-zinc-50 border border-zinc-200/50 rounded-xl h-fit shrink-0">
              {service.icon}
            </div>
            <div className="space-y-1">
              <h3 className="text-[15px] font-semibold text-zinc-950">
                {service.title}
              </h3>
              <p className="text-zinc-600 text-[13.5px] sm:text-[14px] leading-relaxed">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
