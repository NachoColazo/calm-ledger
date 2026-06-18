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
  const totalExpenses = initialData.expenses.reduce((total, expense) => {
    return total + expense.amount;
  }, 0);

  const monthlyBalance = initialData.monthlyIncome - totalExpenses;

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

      <section className="summary-grid">
        <article className="summary-card">
          <span>Monthly Income</span>
          <strong>${initialData.monthlyIncome}</strong>
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
          <span>Calm Goal</span>
          <strong>${initialData.goal.calmGoal}</strong>
        </article>
      </section>

      <section className="expense-section">
        <h2>Sample Monthly Expenses</h2>

        <div className="expense-list">
          {initialData.expenses.map((expense) => (
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
