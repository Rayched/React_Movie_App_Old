import {
	BrowserRouter as Router,
	Route,
  Routes,
} from "react-router-dom";

import Home from "./routes/Home";
import MovieDetail from "./routes/MovieDetail";

function App(){
  return (
    <div>
      <div>
        <h2>일일 박스 오피스</h2>
        <hr/>
      </div>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} 
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;