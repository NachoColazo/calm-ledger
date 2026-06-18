import type { FinanceData, FinanceSummary } from "../types";

export function calculateFinanceSummary(
  financeData: FinanceData,
): FinanceSummary {
  const totalIncome = financeData.monthlyIncome;

  const totalExpenses = financeData.expenses.reduce((total, expense) => {
    return total + expense.amount;
  }, 0);

  const necessaryExpenses = financeData.expenses.reduce((total, expense) => {
    if (expense.type === "necessary") {
      return total + expense.amount;
    }

    return total;
  }, 0);

  const personalExpenses = financeData.expenses.reduce((total, expense) => {
    if (expense.type === "personal") {
      return total + expense.amount;
    }

    return total;
  }, 0);

  const monthlyBalance = totalIncome - totalExpenses;

  const monthlySavingsPotential = Math.max(monthlyBalance, 0);

  const remainingToGoal = Math.max(
    financeData.goal.calmGoal - financeData.goal.currentSavings,
    0,
  );

  const monthsToGoal =
    remainingToGoal === 0
      ? 0
      : monthlySavingsPotential > 0
        ? Math.ceil(remainingToGoal / monthlySavingsPotential)
        : null;

  const expenseRatio = totalIncome > 0 ? totalExpenses / totalIncome : 0;

  const savingsRate =
    totalIncome > 0 ? monthlySavingsPotential / totalIncome : 0;

  return {
    totalIncome,
    totalExpenses,
    necessaryExpenses,
    personalExpenses,
    monthlyBalance,
    monthlySavingsPotential,
    remainingToGoal,
    monthsToGoal,
    expenseRatio,
    savingsRate,
  };
}
