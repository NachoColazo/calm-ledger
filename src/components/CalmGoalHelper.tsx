import type { TranslationContent } from "../translations";
import type { FinanceSummary } from "../types";
import { formatCurrency } from "../utils/formatters";

interface CalmGoalHelperProps {
  summary: FinanceSummary;
  t: TranslationContent["calmGoalHelper"];
  onSelectGoal: (goalAmount: number) => void;
}

function CalmGoalHelper({ summary, t, onSelectGoal }: CalmGoalHelperProps) {
  const necessaryExpenses = summary.necessaryExpenses;

  const goalOptions = [
    {
      id: "starter",
      title: t.starterTitle,
      months: 1,
      description: t.starterDescription,
    },
    {
      id: "stable",
      title: t.stableTitle,
      months: 3,
      description: t.stableDescription,
    },
    {
      id: "strong",
      title: t.strongTitle,
      months: 6,
      description: t.strongDescription,
    },
  ];

  return (
    <section className="goal-helper">
      <div className="goal-helper-header">
        <p className="goal-helper-label">{t.label}</p>
        <h2>{t.title}</h2>
        <p>{t.description}</p>
      </div>

      {necessaryExpenses <= 0 ? (
        <p className="goal-helper-empty">{t.emptyState}</p>
      ) : (
        <div className="goal-options">
          {goalOptions.map((option) => {
            const goalAmount = necessaryExpenses * option.months;

            return (
              <article className="goal-option-card" key={option.id}>
                <div>
                  <span>{option.title}</span>
                  <strong>{formatCurrency(goalAmount)}</strong>
                  <p>{option.description}</p>
                </div>

                <button
                  className="secondary-button"
                  type="button"
                  onClick={() => onSelectGoal(goalAmount)}
                >
                  {t.useGoal}
                </button>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default CalmGoalHelper;
