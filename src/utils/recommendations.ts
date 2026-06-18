import type { FinanceSummary } from "../types";

export type RecommendationLevel = "positive" | "caution" | "warning";

export interface Recommendation {
  level: RecommendationLevel;
  title: string;
  message: string;
}

export function getRecommendation(summary: FinanceSummary): Recommendation {
  if (summary.totalIncome <= 0) {
    return {
      level: "caution",
      title: "Start with your real income",
      message:
        "Add your monthly income first so Calm Ledger can understand your financial picture.",
    };
  }

  if (summary.monthlyBalance < 0) {
    return {
      level: "warning",
      title: "Your expenses are higher than your income",
      message:
        "This month is putting pressure on your finances. It may be a good moment to pause personal spending and protect your stability.",
    };
  }

  if (summary.expenseRatio >= 0.9) {
    return {
      level: "warning",
      title: "Your expenses are very close to your income",
      message:
        "You are covering your expenses, but there is very little room left. Consider reducing non-essential spending before adding new purchases.",
    };
  }

  if (summary.remainingToGoal === 0) {
    return {
      level: "positive",
      title: "You reached your calm goal",
      message:
        "Your current savings already cover your financial peace goal. You can maintain your habits and make thoughtful spending decisions.",
    };
  }

  if (summary.savingsRate >= 0.2) {
    return {
      level: "positive",
      title: "You are building financial peace",
      message:
        "Your savings potential is healthy. You can keep moving toward your calm goal and allow yourself a moderate treat if it fits your priorities.",
    };
  }

  if (summary.monthlySavingsPotential > 0) {
    return {
      level: "caution",
      title: "You are saving, but progress may be slow",
      message:
        "You have money left after expenses, but your savings rate is still modest. A small spending adjustment could help you reach your calm goal sooner.",
    };
  }

  return {
    level: "warning",
    title: "There is no savings room this month",
    message:
      "Your income and expenses are balanced, but there is no clear room for savings. It may be better to avoid extra spending for now.",
  };
}
