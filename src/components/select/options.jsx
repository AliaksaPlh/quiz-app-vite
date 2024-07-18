export default function Options(options) {
  const options = {
    category: [
      { value: "movie", label: "Movie" },
      { value: "books", label: "Books" },
      { value: "scince", label: "Scince" },
    ],
    difficulty: [
      { value: "light", label: "Light" },
      { value: "medium", label: "Medium" },
      { value: "hard", label: "Hard" },
    ],
    type: [
      { value: "true_or_false", label: "True of false" },
      { value: "facts", label: "Facts" },
      { value: "open_unswers", label: "Open unswers" },
    ],
    time: [
      { value: "1m", label: "1m" },
      { value: "2m", label: "2m" },
      { value: "5m", label: "5m" },
    ],
  };
  return <></>;
}
