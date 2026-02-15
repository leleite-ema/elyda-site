import { Section } from "@/components/section";
import { Button } from "@/components/button";
import { whatsappLink } from "@/components/whatsapp";

function Box({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-clinic-line bg-white/60 p-7 shadow-soft">
      <div className="text-xl font-semibold">{title}</div>
      <ul className="mt-4 grid gap-2 text-sm text-clinic-slate">
        {items.map((i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-[2px] h-2 w-2 rounded-full bg-clinic-green" />
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <Section
        title="Consulta Online"
        subtitle="Atendimento 100% online: avaliação, plano personalizado e acompanhamento."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Box
            title="Consulta inicial (inclui)"
            items={[
              "Anamnese detalhada",
              "Avaliação da rotina alimentar",
              "Definição de metas",
              "Plano alimentar personalizado",
              "Lista de substituições",
              "Estratégias práticas para o dia a dia",
            ]}
          />
          <Box
            title="Acompanhamento (inclui)"
            items={[
              "Ajustes estratégicos",
              "Monitoramento de evolução",
              "Correção de dificuldades",
              "Suporte contínuo durante o processo",
            ]}
          />
        </div>

        <div className="mt-10 rounded-2xl border border-clinic-line bg-white/70 p-7 shadow-soft">
          <div className="text-xl font-semibold">Agendamento</div>
          <p className="mt-2 text-clinic-slate">
            Clique no botão e me envie: objetivo + melhor horário. Eu retorno confirmando a consulta.
          </p>
          <div className="mt-5">
            <Button href={whatsappLink()} variant="primary">
              Agendar pelo WhatsApp
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
