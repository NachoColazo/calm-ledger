import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MonthlySnapshotForm from "./components/MonthlySnapshotForm";
import MonthlyHistory from "./components/MonthlyHistory";
import SummaryCards from "./components/SummaryCards";
import RecommendationBox from "./components/RecommendationBox";
import CalmGoalHelper from "./components/CalmGoalHelper";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import DataControls from "./components/DataControls";
import { translations, type Language } from "./translations";
import type { Expense, FinanceData, MonthlyRecord } from "./types";
import { calculateFinanceSummary } from "./utils/calculations";
import { getRecommendation } from "./utils/recommendations";
import {
  loadDemoDataStatus,
  loadFinanceData,
  loadLanguage,
  loadMonthlyRecords,
  saveDemoDataStatus,
  saveFinanceData,
  saveLanguage,
  saveMonthlyRecords,
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

  const [isUsingDemoData, setIsUsingDemoData] = useState(() => {
    return loadDemoDataStatus();
  });

  const [monthlyRecords, setMonthlyRecords] = useState<MonthlyRecord[]>(() => {
    return loadMonthlyRecords();
  });

  const t = translations[language];

  useEffect(() => {
    saveFinanceData(financeData);
  }, [financeData]);

  useEffect(() => {
    saveLanguage(language);
  }, [language]);

  useEffect(() => {
    saveDemoDataStatus(isUsingDemoData);
  }, [isUsingDemoData]);

  useEffect(() => {
    saveMonthlyRecords(monthlyRecords);
  }, [monthlyRecords]);

  const summary = calculateFinanceSummary(financeData);
  const recommendation = getRecommendation(summary, language);

  function markDataAsCustom() {
    setIsUsingDemoData(false);
  }

  function handleMonthlyIncomeChange(value: string) {
    markDataAsCustom();

    setFinanceData({
      ...financeData,
      monthlyIncome: Number(value),
    });
  }

  function handleCurrentSavingsChange(value: string) {
    markDataAsCustom();

    setFinanceData({
      ...financeData,
      goal: {
        ...financeData.goal,
        currentSavings: Number(value),
      },
    });
  }

  function handleCalmGoalChange(value: string) {
    markDataAsCustom();

    setFinanceData({
      ...financeData,
      goal: {
        ...financeData.goal,
        calmGoal: Number(value),
      },
    });
  }

  function handleSelectCalmGoal(goalAmount: number) {
    markDataAsCustom();

    setFinanceData({
      ...financeData,
      goal: {
        ...financeData.goal,
        calmGoal: goalAmount,
      },
    });
  }

  function handleAddExpense(newExpense: Expense) {
    markDataAsCustom();

    setFinanceData({
      ...financeData,
      expenses: [...financeData.expenses, newExpense],
    });
  }

  function handleUpdateExpense(updatedExpense: Expense) {
    markDataAsCustom();

    const updatedExpenses = financeData.expenses.map((expense) => {
      if (expense.id === updatedExpense.id) {
        return updatedExpense;
      }

      return expense;
    });

    setFinanceData({
      ...financeData,
      expenses: updatedExpenses,
    });
  }

  function handleDeleteExpense(expenseId: string) {
    markDataAsCustom();

    const updatedExpenses = financeData.expenses.filter((expense) => {
      return expense.id !== expenseId;
    });

    setFinanceData({
      ...financeData,
      expenses: updatedExpenses,
    });
  }

  function handleResetData() {
    const shouldReset = window.confirm(t.dataControls.confirmMessage);

    if (!shouldReset) {
      return;
    }

    setFinanceData(initialData);
    setIsUsingDemoData(true);
  }

  function createRecordId() {
    if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
      return crypto.randomUUID();
    }

    return String(Date.now());
  }

  function getCurrentMonthKey(date = new Date()) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");

    return `${year}-${month}`;
  }

  function handleSaveCurrentMonth() {
    const now = new Date().toISOString();
    const currentMonthKey = getCurrentMonthKey();

    const existingRecord = monthlyRecords.find((record) => {
      return record.monthKey === currentMonthKey;
    });

    const currentRecord: MonthlyRecord = {
      id: existingRecord?.id ?? createRecordId(),
      monthKey: currentMonthKey,
      createdAt: existingRecord?.createdAt ?? now,
      updatedAt: now,
      financeData,
    };

    const updatedRecords = existingRecord
      ? monthlyRecords.map((record) => {
          if (record.monthKey === currentMonthKey) {
            return currentRecord;
          }

          return record;
        })
      : [currentRecord, ...monthlyRecords];

    setMonthlyRecords(updatedRecords);
  }

  return (
    <main className="app">
      <Header language={language} t={t} onLanguageChange={setLanguage} />

      <MonthlySnapshotForm
        monthlyIncome={financeData.monthlyIncome}
        currentSavings={financeData.goal.currentSavings}
        calmGoal={financeData.goal.calmGoal}
        isUsingDemoData={isUsingDemoData}
        t={t.monthlySnapshot}
        onMonthlyIncomeChange={handleMonthlyIncomeChange}
        onCurrentSavingsChange={handleCurrentSavingsChange}
        onCalmGoalChange={handleCalmGoalChange}
      />

      <CalmGoalHelper
        summary={summary}
        t={t.calmGoalHelper}
        onSelectGoal={handleSelectCalmGoal}
      />

      <SummaryCards
        summary={summary}
        currentSavings={financeData.goal.currentSavings}
        language={language}
        t={t.summary}
        summaryInfo={t.summaryInfo}
        modal={t.modal}
      />

      <RecommendationBox recommendation={recommendation} t={t.recommendation} />

      <ExpenseForm t={t} onAddExpense={handleAddExpense} />

      <ExpenseList
        expenses={financeData.expenses}
        t={t}
        onUpdateExpense={handleUpdateExpense}
        onDeleteExpense={handleDeleteExpense}
      />

      <MonthlyHistory
        records={monthlyRecords}
        language={language}
        t={t.monthlyHistory}
        onSaveCurrentMonth={handleSaveCurrentMonth}
      />

      <DataControls t={t.dataControls} onResetData={handleResetData} />
    </main>
  );
}

export default App;
