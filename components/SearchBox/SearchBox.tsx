import css from "./SearchBox.module.css";

interface SearchBoxProps {
  onSearch: (newQuery: string) => void;
}

export default function SearchBox({ onSearch }: SearchBoxProps) {
  return (
    <input
      className={css.input}
      type="text"
      placeholder="Search notes"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}
