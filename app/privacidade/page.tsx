import { Section } from "@/components/section";

export default function Page() {
  return (
    <Section title="Política de Privacidade" subtitle="Modelo simples (LGPD). Ajuste conforme necessário.">
      <div className="prose max-w-none rounded-2xl border border-clinic-line bg-white/60 p-7 shadow-soft">
        <p>
          Este site pode coletar dados enviados voluntariamente pelo usuário (ex.: WhatsApp), com a finalidade de
          responder solicitações e agendar consultas.
        </p>
        <p>
          Não vendemos dados. Você pode solicitar atualização ou remoção de informações a qualquer momento.
        </p>
      </div>
    </Section>
  );
}
