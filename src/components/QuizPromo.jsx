import { Link } from "react-router-dom";

import "../styles/quizpromo.css";

export default function QuizPromo() {
  return (
    <div className="quiz-promo">
      <h2 className="quiz-promo-title">Quiz Yourself</h2>
      <p className="quiz-promo-text">
        Turn your saved words into flashcards....
      </p>
      <Link to="/quiz" className="quiz-promo-btn">
        Start a quiz
      </Link>
    </div>
  );
}
