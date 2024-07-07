import { useState } from "react";
import BoxColor from "./BoxColor";
import SearchColorName from "./SearchColorName";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <BoxColor colorName={search} />
      <SearchColorName
        search={search}
        setSearch={setSearch}
      />
    </div>
  );
}

export default App;
