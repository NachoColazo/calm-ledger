import type { Language } from "../translations";
import type { FinanceSummary } from "../types";

export type RecommendationLevel = "positive" | "caution" | "warning";

export interface Recommendation {
  level: RecommendationLevel;
  title: string;
  message: string;
}

const recommendationMessages = {
  en: {
    startWithIncome: {
      level: "caution",
      title: "Start with your real income",
      message:
        "Add your monthly income first so Calm Ledger can understand your financial picture.",
    },
    expensesHigherThanIncome: {
      level: "warning",
      title: "Your expenses are higher than your income",
      message:
        "This month is putting pressure on your finances. It may be a good moment to pause personal spending and protect your stability.",
    },
    expensesCloseToIncome: {
      level: "warning",
      title: "Your expenses are very close to your income",
      message:
        "You are covering your expenses, but there is very little room left. Consider reducing non-essential spending before adding new purchases.",
    },
    reachedGoal: {
      level: "positive",
      title: "You reached your calm goal",
      message:
        "Your current savings already cover your financial peace goal. You can maintain your habits and make thoughtful spending decisions.",
    },
    buildingPeace: {
      level: "positive",
      title: "You are building financial peace",
      message:
        "Your savings potential is healthy. You can keep moving toward your calm goal and allow yourself a moderate treat if it fits your priorities.",
    },
    slowProgress: {
      level: "caution",
      title: "You are saving, but progress may be slow",
      message:
        "You have money left after expenses, but your savings rate is still modest. A small spending adjustment could help you reach your calm goal sooner.",
    },
    noSavingsRoom: {
      level: "warning",
      title: "There is no savings room this month",
      message:
        "Your income and expenses are balanced, but there is no clear room for savings. It may be better to avoid extra spending for now.",
    },
  },

  es: {
    startWithIncome: {
      level: "caution",
      title: "Comienza con tu ingreso real",
      message:
        "Agrega tu ingreso mensual para que Calm Ledger pueda entender tu situación financiera.",
    },
    expensesHigherThanIncome: {
      level: "warning",
      title: "Tus gastos son mayores que tus ingresos",
      message:
        "Este mes está poniendo presión sobre tus finanzas. Puede ser buen momento para pausar gastos personales y proteger tu estabilidad.",
    },
    expensesCloseToIncome: {
      level: "warning",
      title: "Tus gastos están muy cerca de tus ingresos",
      message:
        "Estás cubriendo tus gastos, pero queda muy poco margen. Considera reducir gastos no esenciales antes de sumar nuevas compras.",
    },
    reachedGoal: {
      level: "positive",
      title: "Llegaste a tu meta de tranquilidad",
      message:
        "Tus ahorros actuales ya cubren tu meta de tranquilidad financiera. Puedes mantener tus hábitos y tomar decisiones de gasto con más calma.",
    },
    buildingPeace: {
      level: "positive",
      title: "Estás construyendo tranquilidad financiera",
      message:
        "Tu potencial de ahorro es saludable. Puedes seguir avanzando hacia tu meta y darte un gusto moderado si encaja con tus prioridades.",
    },
    slowProgress: {
      level: "caution",
      title: "Estás ahorrando, pero el progreso puede ser lento",
      message:
        "Te queda dinero después de los gastos, pero tu tasa de ahorro todavía es modesta. Un pequeño ajuste podría ayudarte a llegar antes a tu meta.",
    },
    noSavingsRoom: {
      level: "warning",
      title: "Este mes no hay margen claro para ahorrar",
      message:
        "Tus ingresos y gastos están equilibrados, pero no queda espacio claro para ahorrar. Puede ser mejor evitar gastos extra por ahora.",
    },
  },
} satisfies Record<Language, Record<string, Recommendation>>;

export function getRecommendation(
  summary: FinanceSummary,
  language: Language,
): Recommendation {
  const messages = recommendationMessages[language];

  if (summary.totalIncome <= 0) {
    return messages.startWithIncome;
  }

  if (summary.monthlyBalance < 0) {
    return messages.expensesHigherThanIncome;
  }

  if (summary.expenseRatio >= 0.9) {
    return messages.expensesCloseToIncome;
  }

  if (summary.remainingToGoal === 0) {
    return messages.reachedGoal;
  }

  if (summary.savingsRate >= 0.2) {
    return messages.buildingPeace;
  }

  if (summary.monthlySavingsPotential > 0) {
    return messages.slowProgress;
  }

  return messages.noSavingsRoom;
}
