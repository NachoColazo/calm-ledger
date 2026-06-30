import { useEffect } from "react";

interface InfoModalProps {
  title: string;
  description: string;
  closeLabel: string;
  gotItLabel: string;
  onClose: () => void;
}

function InfoModal({
  title,
  description,
  closeLabel,
  gotItLabel,
  onClose,
}: InfoModalProps) {
  useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <section
        className="info-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="info-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="info-modal-close"
          type="button"
          onClick={onClose}
          aria-label={closeLabel}
        >
          ×
        </button>

        <p className="info-modal-label">Calm Ledger</p>
        <h2 id="info-modal-title">{title}</h2>
        <p>{description}</p>

        <button className="modal-button" type="button" onClick={onClose}>
          {gotItLabel}
        </button>
      </section>
    </div>
  );
}

export default InfoModal;
