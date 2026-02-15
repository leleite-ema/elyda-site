import { site } from "./site-config";

export function whatsappLink(customMessage?: string) {
  const msg = encodeURIComponent(customMessage ?? site.whatsappMessage);
  return `https://wa.me/${site.whatsappNumber}?text=${msg}`;
}
