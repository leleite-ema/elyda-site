import { Section } from "@/components/section";

export default function Page() {
  return (
    <Section title="Termos de Uso" subtitle="Modelo simples. Ajuste conforme necessário.">
      <div className="prose max-w-none rounded-2xl border border-clinic-line bg-white/60 p-7 shadow-soft">
        <p>
          As informações deste site têm finalidade informativa e não substituem avaliação profissional individual.
        </p>
        <p>
          Resultados variam de acordo com cada organismo e comprometimento com o plano proposto.
        </p>
      </div>
    </Section>
  );
}
