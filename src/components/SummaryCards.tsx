import type { Language, TranslationContent } from "../translations";
import type { FinanceSummary } from "../types";
import {
  formatCurrency,
  formatGoalMonth,
  formatPercent,
} from "../utils/formatters";

interface SummaryCardsProps {
  summary: FinanceSummary;
  currentSavings: number;
  language: Language;
  t: TranslationContent["summary"];
}

function SummaryCards({
  summary,
  currentSavings,
  language,
  t,
}: SummaryCardsProps) {
  const estimatedGoalMonth = formatGoalMonth(
    summary.estimatedGoalDate,
    language,
  );

  return (
    <section className="summary-grid">
      <article className="summary-card">
        <span>{t.monthlyIncome}</span>
        <strong>{formatCurrency(summary.totalIncome)}</strong>
      </article>

      <article className="summary-card">
        <span>{t.totalExpenses}</span>
        <strong>{formatCurrency(summary.totalExpenses)}</strong>
      </article>

      <article className="summary-card">
        <span>{t.necessaryExpenses}</span>
        <strong>{formatCurrency(summary.necessaryExpenses)}</strong>
      </article>

      <article className="summary-card">
        <span>{t.personalExpenses}</span>
        <strong>{formatCurrency(summary.personalExpenses)}</strong>
      </article>

      <article className="summary-card">
        <span>{t.moneyLeftAfterExpenses}</span>
        <strong>{formatCurrency(summary.monthlyBalance)}</strong>
      </article>

      <article className="summary-card">
        <span>{t.potentialMonthlySavings}</span>
        <strong>{formatCurrency(summary.monthlySavingsPotential)}</strong>
      </article>

      <article className="summary-card">
        <span>{t.currentSavings}</span>
        <strong>{formatCurrency(currentSavings)}</strong>
      </article>

      <article className="summary-card">
        <span>{t.remainingToGoal}</span>
        <strong>{formatCurrency(summary.remainingToGoal)}</strong>
      </article>

      <article className="summary-card">
        <span>{t.monthsToGoal}</span>
        <strong>
          {summary.monthsToGoal === null ? "—" : summary.monthsToGoal}
        </strong>
      </article>

      <article className="summary-card">
        <span>{t.estimatedGoalMonth}</span>
        <strong>{estimatedGoalMonth}</strong>
      </article>

      <article className="summary-card">
        <span>{t.expensesIncome}</span>
        <strong>{formatPercent(summary.expenseRatio, language)}</strong>
      </article>

      <article className="summary-card">
        <span>{t.potentialSavingsRate}</span>
        <strong>{formatPercent(summary.savingsRate, language)}</strong>
      </article>
    </section>
  );
}

export default SummaryCards;
