import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Opportunities from "./pages/Opportunities";
import RequestAssistance from "./pages/RequestAssistance";

function App() {
  return (
    <>
      <header>
        <h2>PAMOJA</h2>

        <nav>
          <Link to="/">Home</Link>{" | "}
          <Link to="/opportunities">Opportunities</Link>{" | "}
          <Link to="/request-assistance">Request Assistance</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/opportunities"
          element={<Opportunities />}
        />

        <Route
          path="/request-assistance"
          element={<RequestAssistance />}
        />
      </Routes>
    </>
  );
}

export default App;