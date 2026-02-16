import { Section } from "@/components/section";
import { site } from "@/components/site-config";
import { Button } from "@/components/button";
import { whatsappLink } from "@/components/whatsapp";

export default function Page() {
  return (
    <>
      <Section title="Sobre a Élyda" subtitle={`${site.name} • ${site.crn} • Atendimento 100% Online`}>
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div className="rounded-2xl border border-clinic-line bg-white/60 p-6 shadow-soft">
            <div className="text-sm font-semibold text-clinic-slate">Foto (placeholder)</div>
            <div className="mt-3 h-72 rounded-xl bg-clinic-bg border border-clinic-line flex items-center justify-center text-clinic-slate text-sm">
              Inserir foto profissional depois
            </div>
          </div>

          <div className="rounded-2xl border border-clinic-line bg-white/60 p-8 shadow-soft">
            <h1 className="text-3xl font-semibold tracking-tight">{site.name}</h1>
            <p className="mt-2 text-sm text-clinic-slate">{site.tagline} — {site.crn}</p>

            <p className="mt-6 text-clinic-slate leading-relaxed">
            Sou Élyda Maele, nutricionista clínica, formada em Nutrição e pós-graduada em Nutrição Esportiva e Nutrição Estética.
            </p>

            <p className="mt-4 text-clinic-slate leading-relaxed">
            Minha atuação é voltada para o emagrecimento sustentável e a saúde intestinal, com uma abordagem baseada em ciência, estratégia e cuidado individualizado.
            </p>

            <p className="mt-4 text-clinic-slate leading-relaxed">
            Ao integrar conhecimento clínico, desempenho físico e estética, desenvolvo planos personalizados que equilibram saúde, composição corporal e bem-estar, sempre com foco em resultados consistentes e duradouros.
            </p>

            <p className="mt-4 text-clinic-slate leading-relaxed">
            Aqui você não recebe uma dieta genérica. Você recebe um plano construído para funcionar no seu dia a dia, promovendo autonomia, equilíbrio e evolução real.
            </p>


            <div className="mt-7">
              <Button href={whatsappLink()} variant="primary">
                Agendar consulta online
              </Button>
            </div>

            <div className="mt-5 text-xs text-clinic-slate">
              * Os resultados variam de acordo com cada organismo e comprometimento com o plano proposto.
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
