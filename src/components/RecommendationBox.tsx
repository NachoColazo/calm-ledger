import type { TranslationContent } from "../translations";
import type { Recommendation } from "../utils/recommendations";

interface RecommendationBoxProps {
  recommendation: Recommendation;
  t: TranslationContent["recommendation"];
}

function RecommendationBox({ recommendation, t }: RecommendationBoxProps) {
  return (
    <section
      className={`recommendation-box recommendation-${recommendation.level}`}
    >
      <div>
        <p className="recommendation-label">{t.label}</p>
        <h2>{recommendation.title}</h2>
        <p>{recommendation.message}</p>
      </div>
    </section>
  );
}

export default RecommendationBox;
