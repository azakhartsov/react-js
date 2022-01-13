import CartList from "./containers/CartList";
import GoodsList from "./containers/GoodsList";
function App() {
  return (
    <div>
      {/* вывод данных из хранилища */}
      <div>
        <GoodsList />
        <CartList />
      </div>
    </div>
  );
}

export default App;
