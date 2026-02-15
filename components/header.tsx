import Link from "next/link";
import { Container } from "./container";
import { site } from "./site-config";
import { Button } from "./button";
import { whatsappLink } from "./whatsapp";

const nav = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre" },
  { href: "/consulta-online", label: "Consulta Online" },
  { href: "/contato", label: "Contato" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-clinic-line bg-clinic-bg/80 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="no-underline">
            <div className="leading-tight">
              <div className="text-2xl font-semibold tracking-tight">{site.name}</div>
              <div className="text-xs uppercase tracking-[0.2em] text-clinic-slate">
                {site.tagline}
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((i) => (
              <Link key={i.href} href={i.href} className="no-underline text-sm text-clinic-slate hover:text-clinic-ink">
                {i.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button href={whatsappLink()} variant="primary">
              Agendar no WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
