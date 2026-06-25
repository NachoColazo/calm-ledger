import type { Recommendation } from "../utils/recommendations";

interface RecommendationBoxProps {
  recommendation: Recommendation;
}

function RecommendationBox({ recommendation }: RecommendationBoxProps) {
  return (
    <section
      className={`recommendation-box recommendation-${recommendation.level}`}
    >
      <div>
        <p className="recommendation-label">Calm Recommendation</p>
        <h2>{recommendation.title}</h2>
        <p>{recommendation.message}</p>
      </div>
    </section>
  );
}

export default RecommendationBox;
