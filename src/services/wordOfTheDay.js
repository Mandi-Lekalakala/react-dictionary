const WORDS = [
  "ephemeral",
  "serendipity",
  "petrichor",
  "mellifluous",
  "quixotic",
  "ubiquitous",
  "resilient",
  "eloquent",
  "luminous",
  "solitude",
  "nostalgia",
  "labyrinth",
  "euphoria",
  "pragmatic",
  "tenacious",
  "ethereal",
  "gregarious",
  "meticulous",
  "serene",
  "candid",
];

function getDayNumber(date) {
  const start = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
  return Math.floor(start / 86400000);
}

export function getWordOfTheDay(date = new Date()) {
  const index = getDayNumber(date) % WORDS.length;
  return WORDS[index];
}
