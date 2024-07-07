import styles from "./BoxColor.module.css";

export default function BoxColor({ colorName }) {
  const bgColor = {
    backgroundColor: colorName,
  };

  return (
    <div className={styles.div} style={bgColor}>
      <p>{colorName.length === 0 ? (colorName = "Empty Value") : colorName}</p>
    </div>
  );
}
