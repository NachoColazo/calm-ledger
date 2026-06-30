import type { TranslationContent } from "../translations";

interface MonthlySnapshotFormProps {
  monthlyIncome: number;
  currentSavings: number;
  calmGoal: number;
  t: TranslationContent["monthlySnapshot"];
  onMonthlyIncomeChange: (value: string) => void;
  onCurrentSavingsChange: (value: string) => void;
  onCalmGoalChange: (value: string) => void;
}

function MonthlySnapshotForm({
  monthlyIncome,
  currentSavings,
  calmGoal,
  t,
  onMonthlyIncomeChange,
  onCurrentSavingsChange,
  onCalmGoalChange,
}: MonthlySnapshotFormProps) {
  return (
    <section className="input-section">
      <article className="form-card">
        <h2>{t.title}</h2>
        <p>{t.description}</p>

        <div className="form-grid">
          <label>
            {t.monthlyIncome}
            <input
              type="number"
              min="0"
              placeholder="3000"
              value={monthlyIncome === 0 ? "" : monthlyIncome}
              onChange={(event) => onMonthlyIncomeChange(event.target.value)}
            />
          </label>

          <label>
            {t.currentSavings}
            <input
              type="number"
              min="0"
              placeholder="1200"
              value={currentSavings === 0 ? "" : currentSavings}
              onChange={(event) => onCurrentSavingsChange(event.target.value)}
            />
          </label>

          <label>
            {t.calmGoal}
            <input
              type="number"
              min="0"
              placeholder="6000"
              value={calmGoal === 0 ? "" : calmGoal}
              onChange={(event) => onCalmGoalChange(event.target.value)}
            />
          </label>
        </div>
      </article>
    </section>
  );
}

export default MonthlySnapshotForm;
