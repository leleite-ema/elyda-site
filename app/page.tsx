import { Button } from "@/components/button";
import { Section } from "@/components/section";
import { site } from "@/components/site-config";
import { whatsappLink } from "@/components/whatsapp";

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
      <section className="py-16">
        <div className="mx-auto w-full max-w-6xl px-5">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold text-clinic-slate">
                Atendimento 100% Online • {site.city} • {site.crn}
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                Emagreça com estratégia e cuide da sua saúde intestinal com acompanhamento online
              </h1>
              <p className="mt-5 text-clinic-slate">
                Plano alimentar personalizado, sem dietas restritivas, adaptado à sua rotina. Com foco em
                resultado sustentável e reeducação alimentar.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href={whatsappLink()} variant="primary">
                  Agendar consulta online
                </Button>
                <Button href="/consulta-online" variant="secondary">
                  Como funciona
                </Button>
              </div>

              <div className="mt-6 text-xs text-clinic-slate">
                * Os resultados variam de acordo com cada organismo e comprometimento com o plano proposto.
              </div>
            </div>

            <div className="rounded-2xl border border-clinic-line bg-white/50 p-6 shadow-soft">
              <div className="text-sm font-semibold text-clinic-slate">Imagem (placeholder)</div>
              <div className="mt-3 h-64 rounded-xl bg-clinic-bg border border-clinic-line flex items-center justify-center text-clinic-slate text-sm">
                Adicione fotos depois
              </div>
              <div className="mt-4 text-sm text-clinic-slate">
                Dica: coloque uma foto profissional da Élyda + um banner leve (comida/consulta).
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        title="Especialidades"
        subtitle="Atendimento clínico com foco em adesão, rotina real e estratégia personalizada."
      >
        <div className="grid gap-5 md:grid-cols-3">
          <Card
            title="Emagrecimento saudável"
            text="Redução de gordura corporal com estratégia, saciedade e constância — sem radicalismo."
          />
          <Card
            title="Saúde intestinal"
            text="Atenção à microbiota e ao bem-estar digestivo para melhorar energia, conforto e hábitos."
          />
          <Card
            title="Reeducação alimentar"
            text="Construção de autonomia: aprender a organizar refeições e escolhas com equilíbrio."
          />
        </div>
      </Section>

      <Section
        title="Como funciona"
        subtitle="Processo simples, objetivo e totalmente online — com acompanhamento."
        className="bg-white/30"
      >
        <div className="grid gap-5 md:grid-cols-3">
          <Card title="1) Avaliação completa" text="Videochamada + análise de rotina, histórico e exames (se houver)." />
          <Card title="2) Plano personalizado" text="Estratégia alimentar alinhada ao seu dia a dia e preferências." />
          <Card title="3) Ajustes e suporte" text="Acompanhamento para corrigir rota e manter a evolução." />
        </div>
      </Section>

      <Section title="Diferenciais" subtitle="O que você pode esperar do atendimento.">
        <ul className="grid gap-3 md:grid-cols-2">
          {[
            "Atendimento humanizado e objetivo",
            "Plano adaptado à sua rotina real",
            "Estratégia baseada em ciência",
            "Foco em resultado sustentável",
            "Suporte durante o processo",
            "Clareza: metas, passos e acompanhamento",
          ].map((item) => (
            <li key={item} className="rounded-2xl border border-clinic-line bg-white/60 p-5 shadow-soft text-sm">
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-10 rounded-2xl border border-clinic-line bg-white/70 p-7 shadow-soft">
          <div className="text-xl font-semibold">Pronto para começar?</div>
          <p className="mt-2 text-clinic-slate">
            Me conte seu objetivo e o melhor horário — eu retorno para confirmar sua consulta online.
          </p>
          <div className="mt-5">
            <Button href={whatsappLink()} variant="primary">
              Agendar agora no WhatsApp
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
