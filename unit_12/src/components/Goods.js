function Goods(props) {
  return (
    <div className="goods-block">
      <img src={props.image} alt="" />
      <p>{props.title}</p>
      <p>{props.cost}</p>
      <button className="add-to-cart" data-key={props.articul}>
        Add to cart
      </button>
    </div>
  );
}

export default Goods;
