import type { TranslationContent } from "../translations";
import type { Expense } from "../types";
import { formatCurrency } from "../utils/formatters";

interface ExpenseListProps {
  expenses: Expense[];
  t: TranslationContent;
  onDeleteExpense: (expenseId: string) => void;
}

function ExpenseList({ expenses, t, onDeleteExpense }: ExpenseListProps) {
  return (
    <section className="expense-section">
      <h2>{t.expenseList.title}</h2>

      {expenses.length === 0 ? (
        <p className="empty-state">{t.expenseList.emptyState}</p>
      ) : (
        <div className="expense-list">
          {expenses.map((expense) => (
            <article className="expense-card" key={expense.id}>
              <div>
                <h3>{expense.name}</h3>
                <p>
                  {t.categoryLabels[expense.category]} ·{" "}
                  {t.expenseTypeLabels[expense.type]}
                </p>
              </div>

              <div className="expense-actions">
                <strong>{formatCurrency(expense.amount)}</strong>
                <button
                  className="delete-button"
                  type="button"
                  onClick={() => onDeleteExpense(expense.id)}
                >
                  {t.expenseList.delete}
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
