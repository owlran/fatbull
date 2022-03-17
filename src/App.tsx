import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./layout";
import Home from "./pages/Home";
import Result from "./pages/Results";
import Tags from "./pages/Tags";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<Result />} />
          <Route path="/tags" element={<Tags />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
