import { useEffect, useState, type SyntheticEvent } from "react";
import "./App.css";
import { expenseCategories, expenseTypes } from "./types";
import type {
  Expense,
  ExpenseCategory,
  ExpenseType,
  FinanceData,
} from "./types";
import { calculateFinanceSummary } from "./utils/calculations";
import { getRecommendation } from "./utils/recommendations";
import { loadFinanceData, saveFinanceData } from "./utils/storage";

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
  const [financeData, setFinanceData] = useState<FinanceData>(() => {
    return loadFinanceData() ?? initialData;
  });

  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseCategory, setExpenseCategory] =
    useState<ExpenseCategory>("other");
  const [expenseType, setExpenseType] = useState<ExpenseType>("necessary");

  useEffect(() => {
    saveFinanceData(financeData);
  }, [financeData]);

  const summary = calculateFinanceSummary(financeData);
  const recommendation = getRecommendation(summary);

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

  function handleAddExpense(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedExpenseName = expenseName.trim();
    const numericAmount = Number(expenseAmount);

    if (trimmedExpenseName === "" || numericAmount <= 0) {
      return;
    }

    const newExpense: Expense = {
      id: crypto.randomUUID(),
      name: trimmedExpenseName,
      amount: numericAmount,
      category: expenseCategory,
      type: expenseType,
    };

    setFinanceData({
      ...financeData,
      expenses: [...financeData.expenses, newExpense],
    });

    setExpenseName("");
    setExpenseAmount("");
    setExpenseCategory("other");
    setExpenseType("necessary");
  }

  function handleDeleteExpense(expenseId: string) {
    const updatedExpenses = financeData.expenses.filter((expense) => {
      return expense.id !== expenseId;
    });

    setFinanceData({
      ...financeData,
      expenses: updatedExpenses,
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
          <strong>${financeData.goal.currentSavings}</strong>
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
          <span>Expenses / Income</span>
          <strong>{(summary.expenseRatio * 100).toFixed(0)}%</strong>
        </article>

        <article className="summary-card">
          <span>Savings Rate</span>
          <strong>{(summary.savingsRate * 100).toFixed(0)}%</strong>
        </article>
      </section>

      <section
        className={`recommendation-box recommendation-${recommendation.level}`}
      >
        <div>
          <p className="recommendation-label">Calm Recommendation</p>
          <h2>{recommendation.title}</h2>
          <p>{recommendation.message}</p>
        </div>
      </section>

      <section className="expense-section">
        <article className="form-card">
          <h2>Add Monthly Expense</h2>
          <p>
            Add your recurring monthly expenses. Calm Ledger will use them to
            calculate your balance and savings potential.
          </p>

          <form className="expense-form-grid" onSubmit={handleAddExpense}>
            <label>
              Expense Name
              <input
                type="text"
                placeholder="Car insurance"
                value={expenseName}
                onChange={(event) => setExpenseName(event.target.value)}
              />
            </label>

            <label>
              Amount
              <input
                type="number"
                min="0"
                placeholder="180"
                value={expenseAmount}
                onChange={(event) => setExpenseAmount(event.target.value)}
              />
            </label>

            <label>
              Category
              <select
                value={expenseCategory}
                onChange={(event) =>
                  setExpenseCategory(event.target.value as ExpenseCategory)
                }
              >
                {expenseCategories.map((category) => (
                  <option value={category} key={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Type
              <select
                value={expenseType}
                onChange={(event) =>
                  setExpenseType(event.target.value as ExpenseType)
                }
              >
                {expenseTypes.map((type) => (
                  <option value={type} key={type}>
                    {type}
                  </option>
                ))}
              </select>
            </label>

            <button className="primary-button" type="submit">
              Add Expense
            </button>
          </form>
        </article>
      </section>

      <section className="expense-section">
        <h2>Monthly Expenses</h2>

        {financeData.expenses.length === 0 ? (
          <p className="empty-state">
            No expenses yet. Add your first monthly expense above.
          </p>
        ) : (
          <div className="expense-list">
            {financeData.expenses.map((expense) => (
              <article className="expense-card" key={expense.id}>
                <div>
                  <h3>{expense.name}</h3>
                  <p>
                    {expense.category} · {expense.type}
                  </p>
                </div>

                <div className="expense-actions">
                  <strong>${expense.amount}</strong>
                  <button
                    className="delete-button"
                    type="button"
                    onClick={() => handleDeleteExpense(expense.id)}
                  >
                    Delete
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
