import { Routes, Route } from "react-router-dom";
import Sidebar from "./component/sidebar";

import Live from "./pages/Live";
import Alerts from "./pages/Alerts";
import Search from "./pages/search";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ padding: "20px", flex: 1 }}>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/live" element={<Live />} />
          <Route path="/search" element={<Search />} />
          <Route path="/alerts" element={<Alerts />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
