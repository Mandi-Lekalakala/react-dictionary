export default function WordOfTheDayCard() {
  const dateText = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="wotd">
      <p className="wotd-lab">
        Word of the day <span className="wotd-date">{dateText}</span>
      </p>
    </article>
  );
}
