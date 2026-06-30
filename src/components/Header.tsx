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

      <h1>{t.header.title}</h1>
      <p className="hero-text">{t.header.description}</p>
    </section>
  );
}

export default Header;
