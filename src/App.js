import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Wrapper from "./context/Wrapper";
import Home from "./comps/pages/home/Home";

const App = () => {
  return (
    <Wrapper>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </Wrapper>
  );
};

export default App;
