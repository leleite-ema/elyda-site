"use client";

import { useEffect, useState } from "react";
import { whatsappLink } from "./whatsapp";

export function WhatsAppFloat() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <a
      href={whatsappLink()}
      className="fixed bottom-5 right-5 z-50 no-underline rounded-full bg-clinic-green px-4 py-3 text-sm font-semibold text-white shadow-soft hover:opacity-90"
      target="_blank"
      rel="noreferrer"
      aria-label="Agendar no WhatsApp"
    >
      WhatsApp • Agendar
    </a>
  );
}
