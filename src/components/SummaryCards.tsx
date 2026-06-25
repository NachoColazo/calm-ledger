import type { FinanceSummary } from "../types";

interface SummaryCardsProps {
  summary: FinanceSummary;
  currentSavings: number;
}

function formatGoalMonth(date: Date | null) {
  if (date === null) {
    return "—";
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  }).format(date);
}

function SummaryCards({ summary, currentSavings }: SummaryCardsProps) {
  const estimatedGoalMonth = formatGoalMonth(summary.estimatedGoalDate);

  return (
    <section className="summary-grid">
      <article className="summary-card">
        <span>Monthly Income</span>
        <strong>${summary.totalIncome}</strong>
      </article>

      <article className="summary-card">
        <span>Total Expenses</span>
        <strong>${summary.totalExpenses}</strong>
      </article>

      <article className="summary-card">
        <span>Necessary Expenses</span>
        <strong>${summary.necessaryExpenses}</strong>
      </article>

      <article className="summary-card">
        <span>Personal Expenses</span>
        <strong>${summary.personalExpenses}</strong>
      </article>

      <article className="summary-card">
        <span>Monthly Balance</span>
        <strong>${summary.monthlyBalance}</strong>
      </article>

      <article className="summary-card">
        <span>Possible Monthly Savings</span>
        <strong>${summary.monthlySavingsPotential}</strong>
      </article>

      <article className="summary-card">
        <span>Current Savings</span>
        <strong>${currentSavings}</strong>
      </article>

      <article className="summary-card">
        <span>Remaining To Goal</span>
        <strong>${summary.remainingToGoal}</strong>
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
        <strong>{(summary.expenseRatio * 100).toFixed(0)}%</strong>
      </article>

      <article className="summary-card">
        <span>Savings Rate</span>
        <strong>{(summary.savingsRate * 100).toFixed(0)}%</strong>
      </article>
    </section>
  );
}

export default SummaryCards;
