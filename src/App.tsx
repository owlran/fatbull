import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./layout";
import Home from "./pages/Home";
import Result from "./pages/Result";

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
