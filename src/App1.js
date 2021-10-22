import "./App.css";
import Header from "./Header";
import About from "./About";
import Category from "./Category";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Error from "./Error404";
import CategoryDescription from "./CategoryDescription";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/cat" component={Category} />
          <Route path="/cat/:catName" component={CategoryDescription} />
          <Route component={Error} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
