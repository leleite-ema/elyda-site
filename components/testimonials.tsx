export function Testimonials() {
  const items = [
    {
      name: "Mariana R.",
      text:
        "Aprendi a emagrecer com equilíbrio e constância, sem dietas radicais. O plano foi pensado para minha rotina e isso fez toda a diferença.",
    },
    {
      name: "Ana Paula M.",
      text:
        "Sempre tive desconfortos intestinais e dificuldade em manter organização alimentar. O acompanhamento foi estratégico e hoje tenho muito mais qualidade de vida.",
    },
    {
      name: "Juliana F.",
      text:
        "Consegui melhorar minha composição corporal com um plano realista e sustentável. Nada extremo, tudo adaptado à minha rotina.",
    },
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            Depoimentos
          </h2>
          <p className="mt-3 text-clinic-slate">
            Relatos de pacientes atendidos online.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-clinic-line bg-white/70 p-6 shadow-soft"
            >
              <p className="text-clinic-slate leading-relaxed text-sm">
                “{t.text}”
              </p>

              <div className="mt-6 text-sm font-semibold text-clinic-ink">
                {t.name}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-xs text-clinic-slate">
          Os resultados variam de acordo com cada organismo e comprometimento com o plano proposto.
        </div>
      </div>
    </section>
  );
}
