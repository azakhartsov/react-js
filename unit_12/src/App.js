import GoodsList from "./containers/GoodsList";
function App() {
  return (
    <div>
      {/* вывод данных из хранилища */}
      <div className="goods-field">
        <GoodsList />
      </div>
    </div>
  );
}

export default App;
