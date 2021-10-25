import "./App.css";
import Header from "./App/Header/Header";
import Main from "./App/Main/Main";
import Sidebar from "./App/Main/Sidebar";
import Footer from "./App/Footer/Footer";

const site = {
  site_name: "react test",
  site_title: "my first site with react",
  nav: [
    { link: "nav1", text: "my link" },
    { link: "nav2", text: "my link 2" },
    { link: "nav3", text: "my link 3" },
  ],
};

function App() {
  return (
    <div>
      <Header data={site} />
      <Main />
      <Sidebar data={site} />
      <Footer data={site} />
    </div>
  );
}

export default App;
