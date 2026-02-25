import { Button } from "@/components/button";
import { Section } from "@/components/section";
import { site } from "@/components/site-config";
import { whatsappLink } from "@/components/whatsapp";
import { Testimonials } from "@/components/testimonials";

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-clinic-line bg-white/60 p-6 shadow-soft">
      <div className="text-lg font-semibold">{title}</div>
      <p className="mt-2 text-sm text-clinic-slate">{text}</p>
    </div>
  );
}

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="py-16">
        <div className="mx-auto w-full max-w-6xl px-5">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">

            {/* TEXTO */}
            <div>
              <p className="text-sm font-semibold text-clinic-slate">
                Atendimento 100% Online • {site.city} • {site.crn}
              </p>

              <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                Plano alimentar personalizado, sem dietas restritivas,
                com foco em saciedade, rotina real e resultado sustentável.
              </h1>

              <p className="mt-5 text-clinic-slate">
                Plano alimentar personalizado, adaptado à sua rotina,
                com foco em resultado sustentável e reeducação alimentar.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href={whatsappLink()} variant="primary">
                  Quero começar meu plano personalizado
                </Button>

                <Button href="/consulta-online" variant="secondary">
                  Como funciona
                </Button>
              </div>

              <div className="mt-5 text-sm text-clinic-slate">
                Atendimento 100% online • Plano personalizado • Acompanhamento estratégico
              </div>

              <div className="mt-2 text-xs text-clinic-slate">
                + Atendimento para São Paulo e todo Brasil
              </div>

              <div className="mt-6 text-xs text-clinic-slate">
                * Os resultados variam de acordo com cada organismo.
              </div>
            </div>

            {/* FOTO */}
            <div className="rounded-2xl border border-clinic-line bg-white/50 p-6 shadow-soft">
              <img
                src="/elyda.jpeg"
                alt="Nutricionista Élyda Maele"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ESPECIALIDADES */}
      <Section
        title="Especialidades"
        subtitle="Atendimento clínico com foco em adesão e estratégia personalizada."
      >
        <div className="grid gap-5 md:grid-cols-3">
          <Card
            title="Emagrecimento saudável"
            text="Redução de gordura corporal com estratégia e constância."
          />
          <Card
            title="Saúde intestinal"
            text="Melhora da microbiota e bem-estar digestivo."
          />
          <Card
            title="Reeducação alimentar"
            text="Autonomia alimentar sem dietas restritivas."
          />
        </div>
      </Section>

      {/* COMO FUNCIONA */}
      <Section
        title="Como funciona"
        subtitle="Processo simples e totalmente online."
        className="bg-white/30"
      >
        <div className="grid gap-5 md:grid-cols-3">
          <Card title="1) Avaliação completa" text="Videochamada + análise da rotina." />
          <Card title="2) Plano personalizado" text="Estratégia alimentar individual." />
          <Card title="3) Acompanhamento" text="Ajustes constantes para evolução." />
        </div>
      </Section>

      {/* DIFERENCIAIS */}
      <Section title="Diferenciais">
        <ul className="grid gap-3 md:grid-cols-2">
          {[
            "Atendimento humanizado",
            "Plano adaptado à rotina real",
            "Estratégia baseada em ciência",
            "Foco em resultado sustentável",
            "Suporte durante o processo",
            "Metas claras e acompanhamento",
          ].map((item) => (
            <li
              key={item}
              className="rounded-2xl border border-clinic-line bg-white/60 p-5 shadow-soft text-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      {/* DEPOIMENTOS */}
      <Testimonials />
    </>
  );
}