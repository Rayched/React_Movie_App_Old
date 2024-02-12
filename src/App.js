
import {
	BrowserRouter as Router,
	Route,
  Routes,
} from "react-router-dom";

import Home from "./routes/Home";
import MovieDetail from "./routes/MovieDetail";

function App(){
  /*
  Old Code

  return (
    <Router>
      <Switch>
        <Route path="/movie">
          <MovieDetail />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );*/

  //New Code
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}

export default App;