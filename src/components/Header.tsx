import type { Language, TranslationContent } from "../translations";

interface HeaderProps {
  language: Language;
  t: TranslationContent;
  onLanguageChange: (language: Language) => void;
}

function Header({ language, t, onLanguageChange }: HeaderProps) {
  return (
    <section className="hero">
      <div className="hero-top">
        <p className="eyebrow">{t.header.eyebrow}</p>

        <label className="language-control">
          <span>{t.header.languageLabel}</span>
          <select
            value={language}
            onChange={(event) =>
              onLanguageChange(event.target.value as Language)
            }
          >
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
        </label>
      </div>

      <div className="brand-title">
        <span className="brand-icon" aria-hidden="true">
          <svg
            width="38"
            height="38"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 29H44V36C44 42.6274 38.6274 48 32 48C25.3726 48 20 42.6274 20 36V29Z"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M44 32H48C51.3137 32 54 34.6863 54 38C54 41.3137 51.3137 44 48 44H43"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M26 22C24 19 24 16 27 13"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M34 22C32 19 32 16 35 13"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M18 52H46"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </span>

        <h1>{t.header.title}</h1>
      </div>

      <p className="hero-text">{t.header.description}</p>
    </section>
  );
}

export default Header;
