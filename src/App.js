import "./App.css";
import Header from "./Header";
import About from "./About";
import Category from "./Category";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Error from "./Error404";
import CategoryDescription from "./CategoryDescription";
import Footer from "./Footer";

function App() {
  const navigation = [
    { link: "/", text: "Home" },
    { link: "/about", text: "About" },
    { link: "/cat", text: "Category" },
  ];
  const category = [
    { link: "/notebook", text: "Notebooks" },
    { link: "/monitor", text: "Monitors" },
    { link: "/cellphones", text: "Mobile phohes" },
  ];

  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          {/* <Route exact path="/cat" component={Category} /> */}
          <Route exact path="/cat">
            <Category data={category} />
          </Route>
          <Route path="/cat/:catName" component={CategoryDescription} />
          <Route component={Error} />
        </Switch>
      </Router>
      <Footer data={navigation} />
    </>
  );
}

export default App;
