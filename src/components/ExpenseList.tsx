import type { Expense } from "../types";

interface ExpenseListProps {
  expenses: Expense[];
  onDeleteExpense: (expenseId: string) => void;
}

function ExpenseList({ expenses, onDeleteExpense }: ExpenseListProps) {
  return (
    <section className="expense-section">
      <h2>Monthly Expenses</h2>

      {expenses.length === 0 ? (
        <p className="empty-state">
          No expenses yet. Add your first monthly expense above.
        </p>
      ) : (
        <div className="expense-list">
          {expenses.map((expense) => (
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
                  onClick={() => onDeleteExpense(expense.id)}
                >
                  Delete
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default ExpenseList;
