import type { FinanceSummary } from "../types";
import {
  formatCurrency,
  formatGoalMonth,
  formatPercent,
} from "../utils/formatters";

interface SummaryCardsProps {
  summary: FinanceSummary;
  currentSavings: number;
}

function SummaryCards({ summary, currentSavings }: SummaryCardsProps) {
  const estimatedGoalMonth = formatGoalMonth(summary.estimatedGoalDate);

  return (
    <section className="summary-grid">
      <article className="summary-card">
        <span>Monthly Income</span>
        <strong>{formatCurrency(summary.totalIncome)}</strong>
      </article>

      <article className="summary-card">
        <span>Total Expenses</span>
        <strong>{formatCurrency(summary.totalExpenses)}</strong>
      </article>

      <article className="summary-card">
        <span>Necessary Expenses</span>
        <strong>{formatCurrency(summary.necessaryExpenses)}</strong>
      </article>

      <article className="summary-card">
        <span>Personal Expenses</span>
        <strong>{formatCurrency(summary.personalExpenses)}</strong>
      </article>

      <article className="summary-card">
        <span>Money Left After Expenses</span>
        <strong>{formatCurrency(summary.monthlyBalance)}</strong>
      </article>

      <article className="summary-card">
        <span>Potential Monthly Savings</span>
        <strong>{formatCurrency(summary.monthlySavingsPotential)}</strong>
      </article>

      <article className="summary-card">
        <span>Current Savings</span>
        <strong>{formatCurrency(currentSavings)}</strong>
      </article>

      <article className="summary-card">
        <span>Remaining To Goal</span>
        <strong>{formatCurrency(summary.remainingToGoal)}</strong>
      </article>

      <article className="summary-card">
        <span>Months To Goal</span>
        <strong>
          {summary.monthsToGoal === null ? "—" : summary.monthsToGoal}
        </strong>
      </article>

      <article className="summary-card">
        <span>Estimated Goal Month</span>
        <strong>{estimatedGoalMonth}</strong>
      </article>

      <article className="summary-card">
        <span>Expenses / Income</span>
        <strong>{formatPercent(summary.expenseRatio)}</strong>
      </article>

      <article className="summary-card">
        <span>Potential Savings Rate</span>
        <strong>{formatPercent(summary.savingsRate)}</strong>
      </article>
    </section>
  );
}

export default SummaryCards;
