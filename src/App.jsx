import { useState } from "react";
import BoxColor from "./BoxColor";
import SearchColorName from "./SearchColorName";

function App() {
  const [search, setSearch] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [isDarkText, setIsDarkText] = useState(true)

  return (
    <div className="App">
      <BoxColor 
        colorName={search} 
        hexValue={hexValue}
        isDarkText={isDarkText} 
      />
      <SearchColorName 
        search={search} 
        setSearch={setSearch} 
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
