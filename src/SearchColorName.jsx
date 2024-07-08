import styles from "./SearchColorName.module.css";
import colorNames from "colornames";

export default function SearchColorName({ search, setSearch, setHexValue, isDarkText, setIsDarkText }) {
  const handleChange = ({ target }) => {
    setSearch(target.value);
    setHexValue(colorNames(target.value));
  };

  const handleClick = () => {
    setIsDarkText(!isDarkText);
  }

  return (
    <div className={styles.div}>
      <input
        type="text"
        placeholder="Add color name"
        onChange={handleChange}
        value={search}
        autoFocus
      />
      <button 
        type="button"
        onClick={handleClick}
      >
        Toggle Text Color
      </button>
    </div>
  );
}
