export type ExpenseCategory =
  | "housing"
  | "food"
  | "transportation"
  | "health"
  | "debt"
  | "subscriptions"
  | "personal"
  | "other";

export type ExpenseType = "necessary" | "personal";

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
