import type { ExpenseCategory, ExpenseType } from "./types";

export type Language = "en" | "es";

export interface TranslationContent {
  header: {
    eyebrow: string;
    title: string;
    description: string;
    languageLabel: string;
  };

  monthlySnapshot: {
    title: string;
    description: string;
    monthlyIncome: string;
    currentSavings: string;
    calmGoal: string;
  };

  summary: {
    monthlyIncome: string;
    totalExpenses: string;
    necessaryExpenses: string;
    personalExpenses: string;
    moneyLeftAfterExpenses: string;
    potentialMonthlySavings: string;
    currentSavings: string;
    remainingToGoal: string;
    monthsToGoal: string;
    estimatedGoalMonth: string;
    expensesIncome: string;
    potentialSavingsRate: string;
  };

  recommendation: {
    label: string;
  };

  calmGoalHelper: {
    label: string;
    title: string;
    description: string;
    starterTitle: string;
    starterDescription: string;
    stableTitle: string;
    stableDescription: string;
    strongTitle: string;
    strongDescription: string;
    useGoal: string;
    emptyState: string;
  };

  expenseForm: {
    title: string;
    description: string;
    expenseName: string;
    amount: string;
    category: string;
    type: string;
    addExpense: string;
    expenseNamePlaceholder: string;
    amountPlaceholder: string;
  };

  expenseList: {
    title: string;
    emptyState: string;
    delete: string;
  };

  categoryLabels: Record<ExpenseCategory, string>;
  expenseTypeLabels: Record<ExpenseType, string>;
}

export const translations: Record<Language, TranslationContent> = {
  en: {
    header: {
      eyebrow: "Personal finance for peace of mind",
      title: "Calm Ledger",
      description:
        "A warm and simple finance app focused on financial peace, not financial pressure.",
      languageLabel: "Language",
    },

    monthlySnapshot: {
      title: "Your Monthly Snapshot",
      description:
        "Start with your real monthly numbers. These values help Calm Ledger estimate how close you are to your financial peace goal.",
      monthlyIncome: "Monthly Income",
      currentSavings: "Current Savings",
      calmGoal: "Calm Goal",
    },

    summary: {
      monthlyIncome: "Monthly Income",
      totalExpenses: "Total Expenses",
      necessaryExpenses: "Necessary Expenses",
      personalExpenses: "Personal Expenses",
      moneyLeftAfterExpenses: "Money Left After Expenses",
      potentialMonthlySavings: "Potential Monthly Savings",
      currentSavings: "Current Savings",
      remainingToGoal: "Remaining To Goal",
      monthsToGoal: "Months To Goal",
      estimatedGoalMonth: "Estimated Goal Month",
      expensesIncome: "Expenses / Income",
      potentialSavingsRate: "Potential Savings Rate",
    },

    recommendation: {
      label: "Calm Recommendation",
    },

    calmGoalHelper: {
      label: "Calm Goal Helper",
      title: "Need help choosing your calm goal?",
      description:
        "Use your necessary monthly expenses as a simple starting point. These suggestions are not rules, but they can help you choose a realistic financial peace goal.",
      starterTitle: "Starter Goal",
      starterDescription: "Covers about 1 month of necessary expenses.",
      stableTitle: "Stable Goal",
      stableDescription: "Covers about 3 months of necessary expenses.",
      strongTitle: "Strong Goal",
      strongDescription: "Covers about 6 months of necessary expenses.",
      useGoal: "Use this goal",
      emptyState:
        "Add necessary expenses first so Calm Ledger can suggest a calm goal.",
    },

    expenseForm: {
      title: "Add Monthly Expense",
      description:
        "Add your recurring monthly expenses. Calm Ledger will use them to calculate your balance and savings potential.",
      expenseName: "Expense Name",
      amount: "Amount",
      category: "Category",
      type: "Type",
      addExpense: "Add Expense",
      expenseNamePlaceholder: "Car insurance",
      amountPlaceholder: "180",
    },

    expenseList: {
      title: "Monthly Expenses",
      emptyState: "No expenses yet. Add your first monthly expense above.",
      delete: "Delete",
    },

    categoryLabels: {
      housing: "Housing",
      food: "Food",
      transportation: "Transportation",
      health: "Health",
      debt: "Debt",
      subscriptions: "Subscriptions",
      personal: "Personal",
      other: "Other",
    },

    expenseTypeLabels: {
      necessary: "Necessary",
      personal: "Personal",
    },
  },

  es: {
    header: {
      eyebrow: "Finanzas personales para tranquilidad financiera",
      title: "Calm Ledger",
      description:
        "Una app cálida y simple enfocada en tranquilidad financiera, no en presión financiera.",
      languageLabel: "Idioma",
    },

    monthlySnapshot: {
      title: "Tu resumen mensual",
      description:
        "Empezá con tus números reales del mes. Estos valores ayudan a Calm Ledger a estimar qué tan cerca estás de tu meta de tranquilidad financiera.",
      monthlyIncome: "Ingreso mensual",
      currentSavings: "Ahorros actuales",
      calmGoal: "Meta de tranquilidad",
    },

    summary: {
      monthlyIncome: "Ingreso mensual",
      totalExpenses: "Gastos totales",
      necessaryExpenses: "Gastos necesarios",
      personalExpenses: "Gastos personales",
      moneyLeftAfterExpenses: "Dinero después de gastos",
      potentialMonthlySavings: "Ahorro mensual potencial",
      currentSavings: "Ahorros actuales",
      remainingToGoal: "Falta para la meta",
      monthsToGoal: "Meses para la meta",
      estimatedGoalMonth: "Mes estimado",
      expensesIncome: "Gastos / ingresos",
      potentialSavingsRate: "Tasa de ahorro potencial",
    },

    recommendation: {
      label: "Recomendación de calma",
    },

    calmGoalHelper: {
      label: "Ayuda para tu meta",
      title: "¿Necesitás ayuda para elegir tu meta?",
      description:
        "Usá tus gastos mensuales necesarios como punto de partida. Estas sugerencias no son reglas, pero pueden ayudarte a elegir una meta de tranquilidad financiera más realista.",
      starterTitle: "Meta inicial",
      starterDescription: "Cubre aproximadamente 1 mes de gastos necesarios.",
      stableTitle: "Meta estable",
      stableDescription: "Cubre aproximadamente 3 meses de gastos necesarios.",
      strongTitle: "Meta fuerte",
      strongDescription: "Cubre aproximadamente 6 meses de gastos necesarios.",
      useGoal: "Usar esta meta",
      emptyState:
        "Agregá gastos necesarios primero para que Calm Ledger pueda sugerir una meta.",
    },

    expenseForm: {
      title: "Agregar gasto mensual",
      description:
        "Agregá tus gastos mensuales recurrentes. Calm Ledger los va a usar para calcular tu balance y tu potencial de ahorro.",
      expenseName: "Nombre del gasto",
      amount: "Monto",
      category: "Categoría",
      type: "Tipo",
      addExpense: "Agregar gasto",
      expenseNamePlaceholder: "Seguro del auto",
      amountPlaceholder: "180",
    },

    expenseList: {
      title: "Gastos mensuales",
      emptyState:
        "Todavía no hay gastos. Agregá tu primer gasto mensual arriba.",
      delete: "Borrar",
    },

    categoryLabels: {
      housing: "Vivienda",
      food: "Comida",
      transportation: "Transporte",
      health: "Salud",
      debt: "Deuda",
      subscriptions: "Suscripciones",
      personal: "Personal",
      other: "Otro",
    },

    expenseTypeLabels: {
      necessary: "Necesario",
      personal: "Personal",
    },
  },
};
