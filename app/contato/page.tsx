import { Section } from "@/components/section";
import { ContactForm } from "@/components/contact-form";

export default function Page() {
  return (
    <Section
      title="Contato"
      subtitle="Atendimento 100% Online • São Paulo e todo Brasil"
    >
      <div className="grid gap-8 md:grid-cols-2">
        <ContactForm />

        <div className="rounded-2xl border border-clinic-line bg-white/60 p-7 shadow-soft">
          <div className="text-sm font-semibold text-clinic-slate">
            Atende
          </div>

          <div className="mt-4 rounded-xl border border-clinic-line bg-white/70 p-4 text-sm text-clinic-slate">
            • Emagrecimento saudável <br />
            • Saúde intestinal <br />
            • Reeducação alimentar
          </div>

          <div className="mt-6 text-xs text-clinic-slate">
            * Ao clicar em “Enviar no WhatsApp”, a mensagem será montada automaticamente com seus dados.
          </div>
        </div>
      </div>
    </Section>
  );
}
