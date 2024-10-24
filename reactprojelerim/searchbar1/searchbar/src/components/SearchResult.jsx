import "./SearchResult.css";

export const SearchResult = ({ result }) => {
  return (
    <div
      className="search-result"
      onClick={(e) => alert(` ${result} seçtin!`)}
    >
      {result}
    </div>
  );
};