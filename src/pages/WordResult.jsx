import { useParams } from "react-router-dom";

export default function WordResult() {
  const { term } = useParams();
  return <h1>Word: {term}</h1>;
}
