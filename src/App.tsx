import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MonthlySnapshotForm from "./components/MonthlySnapshotForm";
import SummaryCards from "./components/SummaryCards";
import RecommendationBox from "./components/RecommendationBox";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import { translations, type Language } from "./translations";
import type { Expense, FinanceData } from "./types";
import { calculateFinanceSummary } from "./utils/calculations";
import { getRecommendation } from "./utils/recommendations";
import {
  loadFinanceData,
  loadLanguage,
  saveFinanceData,
  saveLanguage,
} from "./utils/storage";

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
  const [language, setLanguage] = useState<Language>(() => {
    return loadLanguage();
  });

  const [financeData, setFinanceData] = useState<FinanceData>(() => {
    return loadFinanceData() ?? initialData;
  });

  const t = translations[language];

  useEffect(() => {
    saveFinanceData(financeData);
  }, [financeData]);

  useEffect(() => {
    saveLanguage(language);
  }, [language]);

  const summary = calculateFinanceSummary(financeData);
  const recommendation = getRecommendation(summary, language);

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

  function handleAddExpense(newExpense: Expense) {
    setFinanceData({
      ...financeData,
      expenses: [...financeData.expenses, newExpense],
    });
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
      <Header language={language} t={t} onLanguageChange={setLanguage} />

      <MonthlySnapshotForm
        monthlyIncome={financeData.monthlyIncome}
        currentSavings={financeData.goal.currentSavings}
        calmGoal={financeData.goal.calmGoal}
        t={t.monthlySnapshot}
        onMonthlyIncomeChange={handleMonthlyIncomeChange}
        onCurrentSavingsChange={handleCurrentSavingsChange}
        onCalmGoalChange={handleCalmGoalChange}
      />

      <SummaryCards
        summary={summary}
        currentSavings={financeData.goal.currentSavings}
        language={language}
        t={t.summary}
      />

      <RecommendationBox recommendation={recommendation} t={t.recommendation} />

      <ExpenseForm t={t} onAddExpense={handleAddExpense} />

      <ExpenseList
        expenses={financeData.expenses}
        t={t}
        onDeleteExpense={handleDeleteExpense}
      />
    </main>
  );
}

export default App;
