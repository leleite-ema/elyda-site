import { ReactNode } from "react";
import { Container } from "./container";

export function Section({
  title,
  subtitle,
  children,
  className = "",
}: {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-14 ${className}`}>
      <Container>
        {(title || subtitle) && (
          <div className="max-w-3xl">
            {title && <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>}
            {subtitle && <p className="mt-3 text-clinic-slate">{subtitle}</p>}
          </div>
        )}
        <div className={`${title || subtitle ? "mt-8" : ""}`}>{children}</div>
      </Container>
    </section>
  );
}
