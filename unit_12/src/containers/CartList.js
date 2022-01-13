import React from "react";
import { useDispatch } from "react-redux";

import { minus, remove } from "../store/cartSlice";

import { useSelector } from "react-redux";
import { selectGoods } from "../store/goodsSlice";
import { selectCart } from "../store/cartSlice";
import TableCartList from "../components/Cart";

function CartList() {
  const dispatch = useDispatch();

  let clickHandler = (event) => {
    event.preventDefault();
    let t = event.target;
    if (t.innerHTML === "-") {
      dispatch(minus(t.getAttribute("data-action")));
    } else if (t.innerHTML === "remove") {
      dispatch(remove(t.getAttribute("data-action")));
    }
  };
  const goods = useSelector(selectGoods);
  const cart = useSelector(selectCart);
  //   переиндексируем массив товаров
  const goodsObj = goods.reduce((accum, item) => {
    accum[item["articul"]] = item;
    return accum;
  }, {});

  return (
    <div onClick={clickHandler}>
      <table border="1px">
        <thead>
          <tr>
            <th>Item name</th>
            <th>cost per item</th>
            <th>qty</th>
            <th>total cost</th>
          </tr>
        </thead>
        <tbody>
          <TableCartList />
        </tbody>
        <p>
          Total:{" "}
          {Object.keys(cart).reduce((accum, item) => {
            return (accum += goodsObj[item]["cost"] * cart[item]);
          }, 0)}
        </p>
      </table>
    </div>
  );
}

export default CartList;
