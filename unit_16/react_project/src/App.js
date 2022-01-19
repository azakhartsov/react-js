import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Create from "./components/Create";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Note from "./components/Note";

function App() {
  return (
    <div className="main">
      <Router>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/create" element={<Create />} />
          <Route path="/note" element={<Note />} />
          <Route path="/note/:noteURL" element={<Note />} />
          <Route component={<Error />} />
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
