interface MonthlySnapshotFormProps {
  monthlyIncome: number;
  currentSavings: number;
  calmGoal: number;
  onMonthlyIncomeChange: (value: string) => void;
  onCurrentSavingsChange: (value: string) => void;
  onCalmGoalChange: (value: string) => void;
}

function MonthlySnapshotForm({
  monthlyIncome,
  currentSavings,
  calmGoal,
  onMonthlyIncomeChange,
  onCurrentSavingsChange,
  onCalmGoalChange,
}: MonthlySnapshotFormProps) {
  return (
    <section className="input-section">
      <article className="form-card">
        <h2>Your Monthly Snapshot</h2>
        <p>
          Start with your real monthly numbers. These values help Calm Ledger
          estimate how close you are to your financial peace goal.
        </p>

        <div className="form-grid">
          <label>
            Monthly Income
            <input
              type="number"
              min="0"
              placeholder="3000"
              value={monthlyIncome === 0 ? "" : monthlyIncome}
              onChange={(event) => onMonthlyIncomeChange(event.target.value)}
            />
          </label>

          <label>
            Current Savings
            <input
              type="number"
              min="0"
              placeholder="1200"
              value={currentSavings === 0 ? "" : currentSavings}
              onChange={(event) => onCurrentSavingsChange(event.target.value)}
            />
          </label>

          <label>
            Calm Goal
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
