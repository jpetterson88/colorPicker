import styles from "./BoxColor.module.css";

export default function BoxColor({ colorName, hexValue, isDarkText }) {
  const boxColor = {
    backgroundColor: colorName,
    color: isDarkText ? "#000" : "#FFF"
  };

  return (
    <div className={styles.div} style={boxColor}>
      <p>{colorName ? colorName : "Empty Value"}</p>
      <p>{hexValue ? hexValue : null}</p>
    </div>
  );
}
