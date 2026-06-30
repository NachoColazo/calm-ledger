import { useState, type SyntheticEvent } from "react";
import type { TranslationContent } from "../translations";
import { expenseCategories, expenseTypes } from "../types";
import type { Expense, ExpenseCategory, ExpenseType } from "../types";

interface ExpenseFormProps {
  t: TranslationContent;
  onAddExpense: (expense: Expense) => void;
}

function ExpenseForm({ t, onAddExpense }: ExpenseFormProps) {
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseCategory, setExpenseCategory] =
    useState<ExpenseCategory>("other");
  const [expenseType, setExpenseType] = useState<ExpenseType>("necessary");

  function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
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

    onAddExpense(newExpense);

    setExpenseName("");
    setExpenseAmount("");
    setExpenseCategory("other");
    setExpenseType("necessary");
  }

  return (
    <section className="expense-section">
      <article className="form-card">
        <h2>{t.expenseForm.title}</h2>
        <p>{t.expenseForm.description}</p>

        <form className="expense-form-grid" onSubmit={handleSubmit}>
          <label>
            {t.expenseForm.expenseName}
            <input
              type="text"
              placeholder={t.expenseForm.expenseNamePlaceholder}
              value={expenseName}
              onChange={(event) => setExpenseName(event.target.value)}
            />
          </label>

          <label>
            {t.expenseForm.amount}
            <input
              type="number"
              min="0"
              placeholder={t.expenseForm.amountPlaceholder}
              value={expenseAmount}
              onChange={(event) => setExpenseAmount(event.target.value)}
            />
          </label>

          <label>
            {t.expenseForm.category}
            <select
              value={expenseCategory}
              onChange={(event) =>
                setExpenseCategory(event.target.value as ExpenseCategory)
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
              value={expenseType}
              onChange={(event) =>
                setExpenseType(event.target.value as ExpenseType)
              }
            >
              {expenseTypes.map((type) => (
                <option value={type} key={type}>
                  {t.expenseTypeLabels[type]}
                </option>
              ))}
            </select>
          </label>

          <button className="primary-button" type="submit">
            {t.expenseForm.addExpense}
          </button>
        </form>
      </article>
    </section>
  );
}

export default ExpenseForm;
