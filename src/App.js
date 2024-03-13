import {
	BrowserRouter as Router,
	Route,
  Routes,
} from "react-router-dom";

import Home from "./routes/Home";
import MovieDetail from "./routes/MovieDetail";
import TodayDate from "./Components/TodayDate";

function App(){
  return (
    <div className="Container">
      <header>
        <h2 className="MovieApp_Title">일일 박스 오피스</h2>
        <TodayDate />
      </header>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </Router>
      <footer>
      </footer>
    </div>
  );
}

export default App;