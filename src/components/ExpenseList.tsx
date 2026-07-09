import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import type { TranslationContent } from "../translations";
import {
  expenseCategories,
  expenseTypes,
  type Expense,
  type ExpenseCategory,
  type ExpenseType,
} from "../types";
import { formatCurrency } from "../utils/formatters";

interface ExpenseListProps {
  expenses: Expense[];
  t: TranslationContent;
  onUpdateExpense: (updatedExpense: Expense) => void;
  onDeleteExpense: (expenseId: string) => void;
}

function ExpenseList({
  expenses,
  t,
  onUpdateExpense,
  onDeleteExpense,
}: ExpenseListProps) {
  const [editingExpenseId, setEditingExpenseId] = useState<string | null>(null);
  const expenseSectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: PointerEvent) {
      if (!editingExpenseId) {
        return;
      }

      const clickedElement = event.target;

      if (
        clickedElement instanceof Node &&
        expenseSectionRef.current &&
        !expenseSectionRef.current.contains(clickedElement)
      ) {
        setEditingExpenseId(null);
      }
    }

    document.addEventListener("pointerdown", handleClickOutside);

    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, [editingExpenseId]);

  function handleExpenseKeyDown(
    event: KeyboardEvent<HTMLElement>,
    expenseId: string,
  ) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setEditingExpenseId(expenseId);
    }
  }

  function handleEditingKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "Enter" || event.key === "Escape") {
      event.preventDefault();
      setEditingExpenseId(null);
    }
  }

  return (
    <section className="expense-section" ref={expenseSectionRef}>
      <h2>{t.expenseList.title}</h2>

      {expenses.length === 0 ? (
        <p className="empty-state">{t.expenseList.emptyState}</p>
      ) : (
        <div className="expense-list">
          {expenses.map((expense) => {
            const isEditing = editingExpenseId === expense.id;

            return (
              <article
                className={`expense-card ${
                  isEditing ? "expense-card-editing" : ""
                }`}
                key={expense.id}
                tabIndex={isEditing ? -1 : 0}
                onClick={
                  isEditing ? undefined : () => setEditingExpenseId(expense.id)
                }
                onKeyDown={
                  isEditing
                    ? handleEditingKeyDown
                    : (event) => handleExpenseKeyDown(event, expense.id)
                }
              >
                {isEditing ? (
                  <>
                    <div className="expense-edit-grid">
                      <label>
                        {t.expenseForm.expenseName}
                        <input
                          type="text"
                          value={expense.name}
                          onChange={(event) =>
                            onUpdateExpense({
                              ...expense,
                              name: event.target.value,
                            })
                          }
                        />
                      </label>

                      <label>
                        {t.expenseForm.amount}
                        <input
                          type="number"
                          min="0"
                          value={expense.amount === 0 ? "" : expense.amount}
                          onChange={(event) =>
                            onUpdateExpense({
                              ...expense,
                              amount: Number(event.target.value),
                            })
                          }
                        />
                      </label>

                      <label>
                        {t.expenseForm.category}
                        <select
                          value={expense.category}
                          onChange={(event) =>
                            onUpdateExpense({
                              ...expense,
                              category: event.target.value as ExpenseCategory,
                            })
                          }
                        >
                          {expenseCategories.map((category) => (
                            <option value={category} key={category}>
                              {t.categoryLabels[category]}
                            </option>
                          ))}
                        </select>
                      </label>

                      <label>
                        {t.expenseForm.type}
                        <select
                          value={expense.type}
                          onChange={(event) =>
                            onUpdateExpense({
                              ...expense,
                              type: event.target.value as ExpenseType,
                            })
                          }
                        >
                          {expenseTypes.map((type) => (
                            <option value={type} key={type}>
                              {t.expenseTypeLabels[type]}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>

                    <button
                      className="delete-button"
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        onDeleteExpense(expense.id);
                      }}
                    >
                      {t.expenseList.delete}
                    </button>
                  </>
                ) : (
                  <>
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
                        onClick={(event) => {
                          event.stopPropagation();
                          onDeleteExpense(expense.id);
                        }}
                      >
                        {t.expenseList.delete}
                      </button>
                    </div>
                  </>
                )}
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default ExpenseList;
