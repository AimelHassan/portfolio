export function TechStack() {
  const tools = [
    "Python",
    "FastAPI",
    "Celery",
    "Redis",
    "Playwright",
    "Supabase",
    "Postgres",
    "FAISS",
    "Docker",
    "Cloud Run",
    "LangChain",
    "RAG",
    "LLM extraction",
    "Next.js",
  ];

  return (
    <section className="mb-24">
      <h2 className="text-[12px] font-medium text-zinc-500 uppercase tracking-[0.2em] mb-8">
        Tools
      </h2>
      <div className="flex flex-wrap gap-2.5 max-w-2xl">
        {tools.map((tool) => (
          <span
            key={tool}
            className="px-3.5 py-1.5 text-[14px] font-medium text-zinc-700 bg-white border border-zinc-200/80 rounded-xl shadow-sm"
          >
            {tool}
          </span>
        ))}
      </div>
    </section>
  );
}
