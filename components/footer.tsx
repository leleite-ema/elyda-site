import Link from "next/link";
import { Container } from "./container";
import { site } from "./site-config";

export function Footer() {
  return (
    <footer className="border-t border-clinic-line bg-white/40">
      <Container>
        <div className="grid gap-6 py-10 md:grid-cols-3">
          <div>
            <div className="text-lg font-semibold">{site.name}</div>
            <div className="mt-2 text-sm text-clinic-slate">
              {site.tagline} — {site.crn}
              <br />
              {site.city}
              <br />
              Atendimento 100% Online
            </div>
          </div>

          <div className="text-sm">
            <div className="font-semibold">Navegação</div>
            <div className="mt-2 flex flex-col gap-2">
              <Link className="text-clinic-slate no-underline hover:text-clinic-ink" href="/">Home</Link>
              <Link className="text-clinic-slate no-underline hover:text-clinic-ink" href="/sobre">Sobre</Link>
              <Link className="text-clinic-slate no-underline hover:text-clinic-ink" href="/consulta-online">Consulta Online</Link>
              <Link className="text-clinic-slate no-underline hover:text-clinic-ink" href="/contato">Contato</Link>
            </div>
          </div>

          <div className="text-sm">
            <div className="font-semibold">Avisos</div>
            <p className="mt-2 text-clinic-slate">
              Os resultados variam de acordo com cada organismo e comprometimento com o plano proposto.
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <Link className="text-clinic-slate no-underline hover:text-clinic-ink" href="/privacidade">Política de Privacidade</Link>
              <Link className="text-clinic-slate no-underline hover:text-clinic-ink" href="/termos">Termos de Uso</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-clinic-line py-6 text-xs text-clinic-slate">
          © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
        </div>
      </Container>
    </footer>
  );
}
