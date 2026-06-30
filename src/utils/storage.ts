import type { Language } from "../translations";
import type { FinanceData } from "../types";

const FINANCE_STORAGE_KEY = "calm-ledger-finance-data";
const LANGUAGE_STORAGE_KEY = "calm-ledger-language";

export function loadFinanceData(): FinanceData | null {
  const storedData = localStorage.getItem(FINANCE_STORAGE_KEY);

  if (!storedData) {
    return null;
  }

  try {
    return JSON.parse(storedData) as FinanceData;
  } catch (error) {
    console.error("Failed to load finance data from localStorage:", error);
    return null;
  }
}

export function saveFinanceData(financeData: FinanceData) {
  try {
    localStorage.setItem(FINANCE_STORAGE_KEY, JSON.stringify(financeData));
  } catch (error) {
    console.error("Failed to save finance data to localStorage:", error);
  }
}

export function loadLanguage(): Language {
  const storedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);

  if (storedLanguage === "en" || storedLanguage === "es") {
    return storedLanguage;
  }

  return "en";
}

export function saveLanguage(language: Language) {
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch (error) {
    console.error("Failed to save language to localStorage:", error);
  }
}
