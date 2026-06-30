import { useState } from "react";
import type {
  Language,
  SummaryMetricKey,
  TranslationContent,
} from "../translations";
import type { FinanceSummary } from "../types";
import {
  formatCurrency,
  formatGoalMonth,
  formatPercent,
} from "../utils/formatters";
import InfoModal from "./InfoModal";

interface SummaryCardsProps {
  summary: FinanceSummary;
  currentSavings: number;
  language: Language;
  t: TranslationContent["summary"];
  summaryInfo: TranslationContent["summaryInfo"];
  modal: TranslationContent["modal"];
}

function SummaryCards({
  summary,
  currentSavings,
  language,
  t,
  summaryInfo,
  modal,
}: SummaryCardsProps) {
  const [selectedMetric, setSelectedMetric] = useState<SummaryMetricKey | null>(
    null,
  );

  const estimatedGoalMonth = formatGoalMonth(
    summary.estimatedGoalDate,
    language,
  );

  const selectedMetricInfo =
    selectedMetric === null ? null : summaryInfo[selectedMetric];

  const cards: {
    key: SummaryMetricKey;
    label: string;
    value: string | number;
  }[] = [
    {
      key: "monthlyIncome",
      label: t.monthlyIncome,
      value: formatCurrency(summary.totalIncome),
    },
    {
      key: "totalExpenses",
      label: t.totalExpenses,
      value: formatCurrency(summary.totalExpenses),
    },
    {
      key: "necessaryExpenses",
      label: t.necessaryExpenses,
      value: formatCurrency(summary.necessaryExpenses),
    },
    {
      key: "personalExpenses",
      label: t.personalExpenses,
      value: formatCurrency(summary.personalExpenses),
    },
    {
      key: "moneyLeftAfterExpenses",
      label: t.moneyLeftAfterExpenses,
      value: formatCurrency(summary.monthlyBalance),
    },
    {
      key: "potentialMonthlySavings",
      label: t.potentialMonthlySavings,
      value: formatCurrency(summary.monthlySavingsPotential),
    },
    {
      key: "currentSavings",
      label: t.currentSavings,
      value: formatCurrency(currentSavings),
    },
    {
      key: "remainingToGoal",
      label: t.remainingToGoal,
      value: formatCurrency(summary.remainingToGoal),
    },
    {
      key: "monthsToGoal",
      label: t.monthsToGoal,
      value: summary.monthsToGoal === null ? "—" : summary.monthsToGoal,
    },
    {
      key: "estimatedGoalMonth",
      label: t.estimatedGoalMonth,
      value: estimatedGoalMonth,
    },
    {
      key: "expensesIncome",
      label: t.expensesIncome,
      value: formatPercent(summary.expenseRatio, language),
    },
    {
      key: "potentialSavingsRate",
      label: t.potentialSavingsRate,
      value: formatPercent(summary.savingsRate, language),
    },
  ];

  return (
    <>
      <section className="summary-grid">
        {cards.map((card) => (
          <button
            className="summary-card summary-card-button"
            type="button"
            key={card.key}
            onClick={() => setSelectedMetric(card.key)}
          >
            <span className="summary-card-header">
              <span>{card.label}</span>
              <span className="summary-info-icon" aria-hidden="true">
                i
              </span>
            </span>
            <strong>{card.value}</strong>
          </button>
        ))}
      </section>

      {selectedMetricInfo !== null && (
        <InfoModal
          title={selectedMetricInfo.title}
          description={selectedMetricInfo.description}
          closeLabel={modal.close}
          gotItLabel={modal.gotIt}
          onClose={() => setSelectedMetric(null)}
        />
      )}
    </>
  );
}

export default SummaryCards;
