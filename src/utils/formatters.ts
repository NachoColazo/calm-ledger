import type { Language } from "../translations";

function getLocale(language: Language) {
  return language === "es" ? "es-US" : "en-US";
}

export function formatCurrency(value: number) {
  const absoluteValue = Math.abs(value);

  if (absoluteValue >= 1_000_000_000) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      notation: "compact",
      maximumFractionDigits: 2,
    }).format(value);
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatPercent(value: number, language: Language) {
  return new Intl.NumberFormat(getLocale(language), {
    style: "percent",
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatGoalMonth(date: Date | null, language: Language) {
  if (date === null) {
    return "—";
  }

  const formattedDate = new Intl.DateTimeFormat(getLocale(language), {
    month: "short",
    year: "numeric",
  }).format(date);

  return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
}

export function formatLabel(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
