import type { FinanceData } from "../types";

const STORAGE_KEY = "calm-ledger-finance-data";

export function loadFinanceData(): FinanceData | null {
  const storedData = localStorage.getItem(STORAGE_KEY);

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
    localStorage.setItem(STORAGE_KEY, JSON.stringify(financeData));
  } catch (error) {
    console.error("Failed to save finance data to localStorage:", error);
  }
}
