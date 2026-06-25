import { useState, type SyntheticEvent } from "react";
import { expenseCategories, expenseTypes } from "../types";
import type { Expense, ExpenseCategory, ExpenseType } from "../types";

interface ExpenseFormProps {
  onAddExpense: (expense: Expense) => void;
}

function ExpenseForm({ onAddExpense }: ExpenseFormProps) {
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
        <h2>Add Monthly Expense</h2>
        <p>
          Add your recurring monthly expenses. Calm Ledger will use them to
          calculate your balance and savings potential.
        </p>

        <form className="expense-form-grid" onSubmit={handleSubmit}>
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
  );
}

export default ExpenseForm;
