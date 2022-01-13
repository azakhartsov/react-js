import React from "react";
import { useSelector } from "react-redux";
import { selectGoods } from "../store/goodsSlice";
import { selectCart } from "../store/cartSlice";

function TableCartList() {
  const goods = useSelector(selectGoods);
  const cart = useSelector(selectCart);
  // переиндексируем массив товаров
  const goodsObj = goods.reduce((accum, item) => {
    accum[item["articul"]] = item;
    return accum;
  }, {});
  console.log(goodsObj);
  return (
    <>
      {Object.keys(cart).map((item) => (
        <tr key={item}>
          <td>
            {goodsObj[item]["title"]}{" "}
            <img src={goodsObj[item]["image"]} alt="" width="16" height="16" />
          </td>
          <td>{goodsObj[item]["cost"]}</td>
          <td>{cart[item]}</td>
          <td>{cart[item] * goodsObj[item]["cost"]}</td>
          <td>
            <button data-action={item}>-</button>
          </td>
          <td>
            <button data-action={item}>remove</button>
          </td>
        </tr>
      ))}
    </>
  );
}

export default TableCartList;
