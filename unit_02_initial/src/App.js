import logo from './logo.svg';
import './App.css';
import Test from './Test';
import Header from './Header/Header';
import Goods from './Goods';

const headerData = {
  site_name: 'my test site name',
  nav: [
    { "link": "nav1", "text": "my link" },
    { "link": "nav2", "text": "my link 2" },
    { "link": "nav3", "text": "my link 3" },
  ]
};

const goods = [
  { "title": "apple", "cost": 330, "image": "https://cdn3.iconfinder.com/data/icons/fruits-52/150/icon_fruit_maca-512.png" },
  { "title": "pear", "cost": 530, "image": "https://cdn3.iconfinder.com/data/icons/fruits-52/150/icon_fruit_pera-512.png" },
];



function App() {
  return (
    <>
      <Header data={headerData} />
      <Test />
      {goods.map(item => <Goods title={item.title} cost={item.cost} image={item.image} />)}
    </>
  );
}

export default App;
