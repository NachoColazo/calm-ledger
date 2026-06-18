export const expenseCategories = [
  "housing",
  "food",
  "transportation",
  "health",
  "debt",
  "subscriptions",
  "personal",
  "other",
] as const;

export const expenseTypes = ["necessary", "personal"] as const;

export type ExpenseCategory = (typeof expenseCategories)[number];

export type ExpenseType = (typeof expenseTypes)[number];

export interface Expense {
  id: string;
  name: string;
  amount: number;
  category: ExpenseCategory;
  type: ExpenseType;
}

export interface FinancialGoal {
  calmGoal: number;
  currentSavings: number;
}

export interface FinanceData {
  monthlyIncome: number;
  goal: FinancialGoal;
  expenses: Expense[];
}

export interface FinanceSummary {
  totalIncome: number;
  totalExpenses: number;
  necessaryExpenses: number;
  personalExpenses: number;
  monthlyBalance: number;
  monthlySavingsPotential: number;
  remainingToGoal: number;
  monthsToGoal: number | null;
  expenseRatio: number;
  savingsRate: number;
}
