import type { Language, TranslationContent } from "../translations";
import type { MonthlyRecord } from "../types";
import { calculateFinanceSummary } from "../utils/calculations";
import { formatCurrency } from "../utils/formatters";

interface MonthlyHistoryProps {
  records: MonthlyRecord[];
  language: Language;
  t: TranslationContent["monthlyHistory"];
  onSaveCurrentMonth: () => void;
  onDeleteRecord: (recordId: string) => void;
}

function formatMonthKey(monthKey: string, language: Language) {
  const [year, month] = monthKey.split("-").map(Number);
  const date = new Date(year, month - 1, 1);
  const locale = language === "es" ? "es-US" : "en-US";

  const formattedMonth = new Intl.DateTimeFormat(locale, {
    month: "long",
    year: "numeric",
  }).format(date);

  return formattedMonth.charAt(0).toUpperCase() + formattedMonth.slice(1);
}

function formatUpdatedDate(dateValue: string, language: Language) {
  const locale = language === "es" ? "es-US" : "en-US";
  const date = new Date(dateValue);

  return new Intl.DateTimeFormat(locale, {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function MonthlyHistory({
  records,
  language,
  t,
  onSaveCurrentMonth,
  onDeleteRecord,
}: MonthlyHistoryProps) {
  return (
    <section className="monthly-history-section">
      <article className="monthly-history-card">
        <div className="monthly-history-header">
          <div>
            <p className="data-controls-label">{t.savedMonths}</p>
            <h2>{t.title}</h2>
            <p>{t.description}</p>
          </div>

          <button
            className="monthly-history-button"
            type="button"
            onClick={onSaveCurrentMonth}
          >
            {t.saveButton}
          </button>
        </div>

        {records.length === 0 ? (
          <p className="empty-state">{t.emptyState}</p>
        ) : (
          <div className="monthly-record-list">
            {records.map((record) => {
              const recordSummary = calculateFinanceSummary(record.financeData);

              return (
                <article className="monthly-record-card" key={record.id}>
                  <div className="monthly-record-top">
                    <div>
                      <h3>{formatMonthKey(record.monthKey, language)}</h3>
                      <p>
                        {t.updated}:{" "}
                        {formatUpdatedDate(record.updatedAt, language)}
                      </p>
                    </div>

                    <button
                      className="monthly-record-delete-button"
                      type="button"
                      onClick={() => onDeleteRecord(record.id)}
                    >
                      {t.deleteButton}
                    </button>
                  </div>

                  <div className="monthly-record-metrics">
                    <div>
                      <span>{t.income}</span>
                      <strong>
                        {formatCurrency(recordSummary.totalIncome)}
                      </strong>
                    </div>

                    <div>
                      <span>{t.expenses}</span>
                      <strong>
                        {formatCurrency(recordSummary.totalExpenses)}
                      </strong>
                    </div>

                    <div>
                      <span>{t.potentialSavings}</span>
                      <strong>
                        {formatCurrency(recordSummary.monthlySavingsPotential)}
                      </strong>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </article>
    </section>
  );
}

export default MonthlyHistory;
