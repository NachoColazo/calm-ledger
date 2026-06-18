import { useState } from "react";
import "./App.css";
import type { FinanceData } from "./types";

const initialData: FinanceData = {
  monthlyIncome: 3000,
  goal: {
    calmGoal: 6000,
    currentSavings: 1200,
  },
  expenses: [
    {
      id: "1",
      name: "Rent",
      amount: 1400,
      category: "housing",
      type: "necessary",
    },
    {
      id: "2",
      name: "Groceries",
      amount: 450,
      category: "food",
      type: "necessary",
    },
    {
      id: "3",
      name: "Coffee",
      amount: 35,
      category: "personal",
      type: "personal",
    },
  ],
};

function App() {
  const [financeData, setFinanceData] = useState<FinanceData>(initialData);

  const totalExpenses = financeData.expenses.reduce((total, expense) => {
    return total + expense.amount;
  }, 0);

  const monthlyBalance = financeData.monthlyIncome - totalExpenses;

  const monthlySavingsPotential = Math.max(monthlyBalance, 0);

  const remainingToGoal = Math.max(
    financeData.goal.calmGoal - financeData.goal.currentSavings,
    0,
  );

  const monthsToGoal =
    monthlySavingsPotential > 0
      ? Math.ceil(remainingToGoal / monthlySavingsPotential)
      : null;

  function handleMonthlyIncomeChange(value: string) {
    setFinanceData({
      ...financeData,
      monthlyIncome: Number(value),
    });
  }

  function handleCurrentSavingsChange(value: string) {
    setFinanceData({
      ...financeData,
      goal: {
        ...financeData.goal,
        currentSavings: Number(value),
      },
    });
  }

  function handleCalmGoalChange(value: string) {
    setFinanceData({
      ...financeData,
      goal: {
        ...financeData.goal,
        calmGoal: Number(value),
      },
    });
  }

  return (
    <main className="app">
      <section className="hero">
        <p className="eyebrow">Personal finance for peace of mind</p>
        <h1>Calm Ledger</h1>
        <p className="hero-text">
          A warm and simple finance app focused on financial peace, not
          financial pressure.
        </p>
      </section>

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
                value={
                  financeData.monthlyIncome === 0
                    ? ""
                    : financeData.monthlyIncome
                }
                onChange={(event) =>
                  handleMonthlyIncomeChange(event.target.value)
                }
              />
            </label>

            <label>
              Current Savings
              <input
                type="number"
                min="0"
                placeholder="1200"
                value={
                  financeData.goal.currentSavings === 0
                    ? ""
                    : financeData.goal.currentSavings
                }
                onChange={(event) =>
                  handleCurrentSavingsChange(event.target.value)
                }
              />
            </label>

            <label>
              Calm Goal
              <input
                type="number"
                min="0"
                placeholder="6000"
                value={
                  financeData.goal.calmGoal === 0
                    ? ""
                    : financeData.goal.calmGoal
                }
                onChange={(event) => handleCalmGoalChange(event.target.value)}
              />
            </label>
          </div>
        </article>
      </section>

      <section className="summary-grid">
        <article className="summary-card">
          <span>Monthly Income</span>
          <strong>${financeData.monthlyIncome}</strong>
        </article>

        <article className="summary-card">
          <span>Total Expenses</span>
          <strong>${totalExpenses}</strong>
        </article>

        <article className="summary-card">
          <span>Monthly Balance</span>
          <strong>${monthlyBalance}</strong>
        </article>

        <article className="summary-card">
          <span>Possible Monthly Savings</span>
          <strong>${monthlySavingsPotential}</strong>
        </article>

        <article className="summary-card">
          <span>Current Savings</span>
          <strong>${financeData.goal.currentSavings}</strong>
        </article>

        <article className="summary-card">
          <span>Remaining To Goal</span>
          <strong>${remainingToGoal}</strong>
        </article>

        <article className="summary-card">
          <span>Months To Goal</span>
          <strong>{monthsToGoal === null ? "—" : monthsToGoal}</strong>
        </article>
      </section>

      <section className="expense-section">
        <h2>Sample Monthly Expenses</h2>

        <div className="expense-list">
          {financeData.expenses.map((expense) => (
            <article className="expense-card" key={expense.id}>
              <div>
                <h3>{expense.name}</h3>
                <p>
                  {expense.category} · {expense.type}
                </p>
              </div>

              <strong>${expense.amount}</strong>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
