import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getWord, getPhonetic, getAudio } from "../services/dictionary";
import { getWordOfTheDay } from "../services/wordOfTheDay";
import "../styles/wordofthedaycard.css";

export default function WordOfTheDayCard() {
  const term = getWordOfTheDay();
  const [entry, setEntry] = useState(null);
  const [error, setError] = useState(false);

  function handleData(data) {
    setEntry(data);
  }

  function handleError() {
    setError(true);
  }

  useEffect(
    function () {
      getWord(term).then(handleData).catch(handleError);
    },
    [term],
  );

  const dateText = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  if (error) {
    return (
      <article className="wotd">
        <p className="wotd-status">Couldn’t load today’s word.</p>
      </article>
    );
  }

  if (!entry) {
    return (
      <article className="wotd">
        <p className="wotd-status">Loading…</p>
      </article>
    );
  }

  const meaning = entry.meanings[0];
  const definition = meaning.definitions[0];
  const audio = getAudio(entry);

  function playAudio() {
    console.log(audio);
    new Audio(audio).play().catch(function (error) {
      console.log(error);
    });
  }

  return (
    <article className="wotd">
      <p className="wotd-label">
        Word of the day <span className="wotd-date">{dateText}</span>
      </p>
      <h2 className="wotd-word">{entry.word}</h2>
      <div className="wotd-meta">
        {audio && (
          <button
            type="button"
            className="wotd-play"
            aria-label="Play pronunciation"
            onClick={playAudio}
          >
            <svg
              aria-hidden="true"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        )}
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
