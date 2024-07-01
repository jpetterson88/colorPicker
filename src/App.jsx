import { useState } from "react";
import SearchColorName from "./SearchColorName";

function App() {
  const [search, setSearch] = useState("");

  return (
    <SearchColorName
      search={search}
      setSearch={setSearch}
    />
  );
}

export default App;
