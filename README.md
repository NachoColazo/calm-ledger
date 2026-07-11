# Calm Ledger

Calm Ledger is a warm and simple personal finance web app focused on **financial peace of mind**, not financial pressure.

Unlike a traditional expense tracker that only shows where money went, Calm Ledger is designed to help users understand their current monthly financial picture, estimate their potential savings, and choose a realistic “calm goal” based on their necessary expenses.

This project was built as part of my programming comeback journey to practice React, TypeScript, component architecture, forms, derived calculations, localStorage, responsive design, bilingual UI, and Git/GitHub workflow.

---

## Project Status

Calm Ledger is currently a **frontend-only V1 project**.

It does not use a backend, authentication, database, bank connections, or AI yet. All user data is stored locally in the browser using `localStorage`.

---

## Live Demo

[View the live app](https://calm-ledger-ten.vercel.app)

---

## Purpose

The purpose of Calm Ledger is to help a user answer questions like:

- How much money do I really bring in each month?
- How much am I spending?
- How much money is left after expenses?
- How much could I potentially save?
- How much do I need saved to feel more financially calm?
- How many months might it take to reach that goal?
- When might I reach that goal?
- Are my expenses too close to my income?
- Can I afford a moderate treat, or should I slow down spending?

The app is intentionally focused on **calm financial awareness** instead of aggressive “financial freedom” messaging.

---

## Current Features

Calm Ledger currently includes a complete local-first personal finance workflow. Users can enter monthly income, savings, financial goals, and recurring expenses, then review automatic calculations, recommendations, and goal estimates in a calm bilingual interface.

Main features include:

- Monthly income, current savings, and calm financial goal inputs.
- Recurring monthly expense tracking.
- Expense categories and expense types.
- Inline expense editing by clicking an existing expense card.
- Automatic financial summary calculations.
- Expense-to-income and potential savings rate overview.
- Estimated months to reach the calm goal.
- Estimated goal month based on current savings potential.
- Calm Goal Helper with suggested starter, stable, and strong goal amounts.
- Financial recommendation messages based on the user’s current numbers.
- Clickable summary cards with explanatory modals.
- English and Spanish language support.
- Smart demo data note that appears with starter demo numbers and disappears once users enter their own data.
- Local data persistence using localStorage.
- Data controls to reset the app back to starter demo numbers.
- Responsive warm UI with custom branding, favicon, and mobile-friendly layout.

### Monthly Snapshot

Users can enter and update:

- Monthly income
- Current savings
- Calm financial goal

These values are used as the base for the app’s financial calculations.

---

### Expense Tracking

Users can:

- Add recurring monthly expenses
- Categorize each expense
- Mark each expense as necessary or personal
- Delete expenses
- View the full list of monthly expenses

Expense categories currently include:

- Housing
- Food
- Transportation
- Health
- Debt
- Subscriptions
- Personal
- Other

Expense types currently include:

- Necessary
- Personal

---

### Financial Summary

Calm Ledger calculates and displays:

- Monthly income
- Total expenses
- Necessary expenses
- Personal expenses
- Money left after expenses
- Potential monthly savings
- Current savings
- Remaining amount to reach the calm goal
- Months to goal
- Estimated goal month
- Expenses / income percentage
- Potential savings rate

Each summary card is clickable and opens an explanatory modal that describes what the metric means.

---

### Calm Goal Helper

The Calm Goal Helper gives the user optional goal suggestions based on necessary monthly expenses:

- Starter goal: about 1 month of necessary expenses
- Stable goal: about 3 months of necessary expenses
- Strong goal: about 6 months of necessary expenses

These suggestions are not strict financial rules. They are meant to give users a simple starting point when choosing a realistic calm goal.

---

### Calm Recommendation

Calm Ledger shows a simple recommendation based on the user’s current numbers.

Examples include:

- Building financial peace
- Expenses are close to income
- Expenses are higher than income
- Progress may be slow
- No clear savings room this month
- Calm goal reached

The recommendation updates automatically whenever the user changes income, savings, goal, or expenses.

---

### Bilingual UI

The app currently supports:

- English
- Spanish

The selected language is saved in `localStorage`, so the app remembers the user’s preference after refresh.

The Spanish UI uses neutral Spanish.

---

### Local Data Persistence

Calm Ledger stores user data locally in the browser using `localStorage`.

Saved data includes:

- Monthly income
- Current savings
- Calm goal
- Expenses
- Selected language

The app also includes a reset option that restores the starter demo data while keeping the selected language.

---

## Tech Stack

- React
- TypeScript
- Vite
- CSS
- localStorage
- Git
- GitHub

---

## Main Concepts Practiced

This project helped me practice:

- React component structure
- TypeScript interfaces
- TypeScript union types
- Controlled form inputs
- `useState`
- `useEffect`
- Passing props between components
- Passing functions as props
- Derived calculations
- Conditional rendering
- Local data persistence with `localStorage`
- Utility functions
- Formatting currency, percentages, and dates
- Bilingual UI structure
- Modal UI behavior
- Responsive CSS
- Git commits and GitHub workflow

---

## Project Structure

```txt
src/
├── components/
│   ├── CalmGoalHelper.tsx
│   ├── DataControls.tsx
│   ├── ExpenseForm.tsx
│   ├── ExpenseList.tsx
│   ├── Header.tsx
│   ├── InfoModal.tsx
│   ├── MonthlySnapshotForm.tsx
│   ├── RecommendationBox.tsx
│   └── SummaryCards.tsx
│
├── utils/
│   ├── calculations.ts
│   ├── formatters.ts
│   ├── recommendations.ts
│   └── storage.ts
│
├── App.css
├── App.tsx
├── index.css
├── main.tsx
├── translations.ts
└── types.ts
```
