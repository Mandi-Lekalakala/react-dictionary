import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getWord, getPhonetic } from "../services/dictionary";
import { getWordOfTheDay } from "../services/wordOfTheDay";
import "../styles/wordofthedaycard.css";

export default function WordOfTheDayCard() {
  const term = getWordOfTheDay();
  const [entry, setEntry] = useState(null);

  useEffect(
    function () {
      getWord(term).then(setEntry);
    },
    [term],
  );

  const dateText = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  if (!entry) return null;

  const meaning = entry.meanings[0];
  const definition = meaning.definitions[0];

  return (
    <article className="wotd">
      <p className="wotd-label">
        Word of the day <span className="wotd-date">{dateText}</span>
      </p>
      <h2 className="wotd-word">{entry.word}</h2>
      <div className="wotd-meta">
        <span className="wotd-phonetic">{getPhonetic(entry)}</span>
        <span className="wotd-pos">{meaning.partOfSpeech}</span>
      </div>
      <p className="wotd-definition">{definition.definition}</p>
      {definition.example && (
        <p className="wotd-example">“{definition.example}”</p>
      )}
      <Link to={`/word/${entry.word}`} className="wotd-link">
        See full definition →
      </Link>
    </article>
  );
}
