import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function buildWhatsappLink(phone: string) {
  if (!phone) return "";
  const digits = phone.replace(/\D/g, "");
  return `https://wa.me/55${digits}`;
}
