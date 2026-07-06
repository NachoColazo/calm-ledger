import type { TranslationContent } from "../translations";

interface DataControlsProps {
  t: TranslationContent["dataControls"];
  onResetData: () => void;
}

function DataControls({ t, onResetData }: DataControlsProps) {
  return (
    <section className="data-controls">
      <div>
        <p className="data-controls-label">{t.label}</p>
        <h2>{t.title}</h2>
        <p>{t.description}</p>
      </div>

      <button className="reset-button" type="button" onClick={onResetData}>
        {t.resetButton}
      </button>
    </section>
  );
}

export default DataControls;
