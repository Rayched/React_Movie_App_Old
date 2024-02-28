
import {
	BrowserRouter as Router,
	Route,
  //Switch,
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
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}
//':id' 대입 연산자 비슷한 거
//
export default App;