
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

import Home from "./routes/Home";
import MovieDetail from "./routes/MovieDetail";

function App(){
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
  );
}

export default App;