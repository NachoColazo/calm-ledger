import type { ExpenseCategory, ExpenseType } from "./types";

export type Language = "en" | "es";

export type SummaryMetricKey =
  | "monthlyIncome"
  | "totalExpenses"
  | "necessaryExpenses"
  | "personalExpenses"
  | "moneyLeftAfterExpenses"
  | "potentialMonthlySavings"
  | "currentSavings"
  | "remainingToGoal"
  | "monthsToGoal"
  | "estimatedGoalMonth"
  | "expensesIncome"
  | "potentialSavingsRate";

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

  summaryInfo: Record<
    SummaryMetricKey,
    {
      title: string;
      description: string;
    }
  >;

  modal: {
    close: string;
    gotIt: string;
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

    summaryInfo: {
      monthlyIncome: {
        title: "Monthly Income",
        description:
          "This is the amount of money you expect to receive in a month after taxes or deductions. It is the starting point for every calculation in Calm Ledger.",
      },
      totalExpenses: {
        title: "Total Expenses",
        description:
          "This is the total amount of all monthly expenses you added, including both necessary and personal expenses.",
      },
      necessaryExpenses: {
        title: "Necessary Expenses",
        description:
          "These are expenses that usually need to be paid to maintain basic stability, such as housing, food, transportation, health, debt, or other essentials.",
      },
      personalExpenses: {
        title: "Personal Expenses",
        description:
          "These are expenses that are more flexible or lifestyle-based. They may still matter to you, but they are usually easier to adjust when you want to save more.",
      },
      moneyLeftAfterExpenses: {
        title: "Money Left After Expenses",
        description:
          "This shows what remains after subtracting your total expenses from your monthly income. A positive number means there is money left after expenses.",
      },
      potentialMonthlySavings: {
        title: "Potential Monthly Savings",
        description:
          "This shows how much money could potentially go toward savings after covering your monthly expenses. It is not money already saved; it is your available monthly room if you choose not to spend it.",
      },
      currentSavings: {
        title: "Current Savings",
        description:
          "This is the amount you already have saved toward your calm goal. It helps Calm Ledger calculate how much more you need.",
      },
      remainingToGoal: {
        title: "Remaining To Goal",
        description:
          "This shows how much more you need to save to reach your calm goal based on your current savings.",
      },
      monthsToGoal: {
        title: "Months To Goal",
        description:
          "This estimates how many months it may take to reach your calm goal if your potential monthly savings stay the same.",
      },
      estimatedGoalMonth: {
        title: "Estimated Goal Month",
        description:
          "This estimates the month when you may reach your calm goal based on your current pace. It is an estimate, not a guarantee.",
      },
      expensesIncome: {
        title: "Expenses / Income",
        description:
          "This shows what percentage of your monthly income is being used by expenses. A lower percentage usually means more breathing room.",
      },
      potentialSavingsRate: {
        title: "Potential Savings Rate",
        description:
          "This shows what percentage of your monthly income could potentially go toward savings after expenses.",
      },
    },

    modal: {
      close: "Close",
      gotIt: "Got it",
    },

    recommendation: {
      label: "Calm Recommendation",
    },

    calmGoalHelper: {
      label: "Optional Goal Guide",
      title: "Need a starting point?",
      description:
        "Use your necessary monthly expenses as a simple reference. These suggestions are optional and meant to help you choose a realistic calm goal.",
      starterTitle: "Starter",
      starterDescription: "About 1 month of necessary expenses.",
      stableTitle: "Stable",
      stableDescription: "About 3 months of necessary expenses.",
      strongTitle: "Strong",
      strongDescription: "About 6 months of necessary expenses.",
      useGoal: "Use goal",
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
        "Comienza con tus números reales del mes. Estos valores ayudan a Calm Ledger a estimar qué tan cerca estás de tu meta de tranquilidad financiera.",
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

    summaryInfo: {
      monthlyIncome: {
        title: "Ingreso mensual",
        description:
          "Este es el dinero que esperas recibir en un mes después de impuestos o deducciones. Es el punto de partida para todos los cálculos de Calm Ledger.",
      },
      totalExpenses: {
        title: "Gastos totales",
        description:
          "Este es el total de todos los gastos mensuales que agregaste, incluyendo gastos necesarios y gastos personales.",
      },
      necessaryExpenses: {
        title: "Gastos necesarios",
        description:
          "Estos son gastos que normalmente se deben cubrir para mantener estabilidad básica, como vivienda, comida, transporte, salud, deudas u otros gastos esenciales.",
      },
      personalExpenses: {
        title: "Gastos personales",
        description:
          "Estos son gastos más flexibles o relacionados con estilo de vida. Pueden ser importantes para ti, pero suelen ser más fáciles de ajustar cuando quieres ahorrar más.",
      },
      moneyLeftAfterExpenses: {
        title: "Dinero después de gastos",
        description:
          "Esto muestra lo que queda después de restar tus gastos totales de tu ingreso mensual. Un número positivo significa que queda dinero después de cubrir gastos.",
      },
      potentialMonthlySavings: {
        title: "Ahorro mensual potencial",
        description:
          "Esto muestra cuánto dinero podría ir a tus ahorros después de cubrir tus gastos mensuales. No es dinero ya ahorrado; es el margen disponible si decides no gastarlo.",
      },
      currentSavings: {
        title: "Ahorros actuales",
        description:
          "Este es el monto que ya tienes ahorrado para tu meta de tranquilidad. Ayuda a Calm Ledger a calcular cuánto más necesitas.",
      },
      remainingToGoal: {
        title: "Falta para la meta",
        description:
          "Esto muestra cuánto dinero falta para alcanzar tu meta de tranquilidad según tus ahorros actuales.",
      },
      monthsToGoal: {
        title: "Meses para la meta",
        description:
          "Esto estima cuántos meses podrías necesitar para alcanzar tu meta de tranquilidad si mantienes el mismo ahorro mensual potencial.",
      },
      estimatedGoalMonth: {
        title: "Mes estimado",
        description:
          "Esto estima en qué mes podrías alcanzar tu meta de tranquilidad según tu ritmo actual. Es una estimación, no una garantía.",
      },
      expensesIncome: {
        title: "Gastos / ingresos",
        description:
          "Esto muestra qué porcentaje de tu ingreso mensual se está usando en gastos. Un porcentaje más bajo suele significar más margen financiero.",
      },
      potentialSavingsRate: {
        title: "Tasa de ahorro potencial",
        description:
          "Esto muestra qué porcentaje de tu ingreso mensual podría ir a ahorros después de cubrir tus gastos.",
      },
    },

    modal: {
      close: "Cerrar",
      gotIt: "Entendido",
    },

    recommendation: {
      label: "Recomendación de calma",
    },

    calmGoalHelper: {
      label: "Guía opcional",
      title: "¿Necesitas un punto de partida?",
      description:
        "Usa tus gastos mensuales necesarios como referencia simple. Estas sugerencias son opcionales y te ayudan a elegir una meta realista.",
      starterTitle: "Inicial",
      starterDescription: "Aproximadamente 1 mes de gastos necesarios.",
      stableTitle: "Estable",
      stableDescription: "Aproximadamente 3 meses de gastos necesarios.",
      strongTitle: "Fuerte",
      strongDescription: "Aproximadamente 6 meses de gastos necesarios.",
      useGoal: "Usar meta",
      emptyState:
        "Agrega gastos necesarios primero para que Calm Ledger pueda sugerir una meta.",
    },

    expenseForm: {
      title: "Agregar gasto mensual",
      description:
        "Agrega tus gastos mensuales recurrentes. Calm Ledger los usará para calcular tu balance y tu potencial de ahorro.",
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
        "Todavía no hay gastos. Agrega tu primer gasto mensual arriba.",
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
