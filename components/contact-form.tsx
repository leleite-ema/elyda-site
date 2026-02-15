"use client";

import { useMemo, useState } from "react";
import { site } from "@/components/site-config";

type Objective = "Emagrecimento" | "Saúde intestinal" | "Reeducação alimentar";

export function ContactForm() {
  const [nome, setNome] = useState("");
  const [whats, setWhats] = useState("");
  const [objetivo, setObjetivo] = useState<Objective>("Emagrecimento");
  const [horario, setHorario] = useState("");
  const [obs, setObs] = useState("");

  const mensagem = useMemo(() => {
    const linhas = [
      `Olá! Gostaria de agendar uma consulta online com a Nutricionista Élyda Maele (${site.crn}).`,
      "",
      `Nome: ${nome || "-"}`,
      `WhatsApp: ${whats || "-"}`,
      `Objetivo: ${objetivo}`,
      `Melhor horário: ${horario || "-"}`,
      obs ? `Observações: ${obs}` : "",
    ].filter(Boolean);

    return linhas.join("\n");
  }, [nome, whats, objetivo, horario, obs]);

  const abrirWhatsApp = () => {
    if (!site.whatsappNumber || site.whatsappNumber.includes("9999999999")) {
      alert("Atualize o número do WhatsApp em components/site-config.ts (whatsappNumber).");
      return;
    }
    const url = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div className="rounded-2xl border border-clinic-line bg-white/60 p-7 shadow-soft">
      <h2 className="text-xl font-semibold">Agendar consulta online</h2>
      <p className="mt-2 text-sm text-clinic-slate">
        Preencha e clique em “Enviar no WhatsApp”. A mensagem vai prontinha.
      </p>

      <div className="mt-6 grid gap-4">
        <div>
          <label className="text-sm font-semibold">Nome</label>
          <input
            className="mt-2 w-full rounded-xl border border-clinic-line bg-white/80 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-clinic-green/30"
            placeholder="Seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm font-semibold">Seu WhatsApp</label>
          <input
            className="mt-2 w-full rounded-xl border border-clinic-line bg-white/80 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-clinic-green/30"
            placeholder="(11) 9xxxx-xxxx"
            value={whats}
            onChange={(e) => setWhats(e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm font-semibold">Objetivo</label>
          <select
            className="mt-2 w-full rounded-xl border border-clinic-line bg-white/80 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-clinic-green/30"
            value={objetivo}
            onChange={(e) => setObjetivo(e.target.value as Objective)}
          >
            <option>Emagrecimento</option>
            <option>Saúde intestinal</option>
            <option>Reeducação alimentar</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-semibold">Melhor horário</label>
          <input
            className="mt-2 w-full rounded-xl border border-clinic-line bg-white/80 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-clinic-green/30"
            placeholder="Manhã, tarde ou noite"
            value={horario}
            onChange={(e) => setHorario(e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm font-semibold">Observações (opcional)</label>
          <textarea
            className="mt-2 min-h-[110px] w-full rounded-xl border border-clinic-line bg-white/80 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-clinic-green/30"
            placeholder="Ex.: tenho exames recentes / sinto inchaço / rotina corrida..."
            value={obs}
            onChange={(e) => setObs(e.target.value)}
          />
        </div>

        <button
          onClick={abrirWhatsApp}
          className="mt-2 inline-flex items-center justify-center rounded-2xl bg-clinic-green px-5 py-3 text-sm font-semibold text-white shadow-soft hover:opacity-90"
        >
          Enviar no WhatsApp
        </button>

        <div className="text-xs text-clinic-slate">
          * Ao clicar, você será redirecionado para o WhatsApp com a mensagem preenchida.
        </div>
      </div>
    </div>
  );
}
