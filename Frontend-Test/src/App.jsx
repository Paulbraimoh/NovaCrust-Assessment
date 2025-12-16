import { useState } from "react";
import Frame1 from "./Pages/Frame1";
import Frame3 from "./Pages/Frame3";

function App() {
  const [currentPage, setCurrentPage] = useState("one")
  return (
    <>
    {currentPage === "one" && <Frame1 onNext={() => setCurrentPage("two")} />}
    {currentPage === "two" && <Frame3 onBack={() => setCurrentPage("one")} />}
    </>
  );
}

export default App;
