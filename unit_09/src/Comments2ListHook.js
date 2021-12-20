import React, { useEffect, useState } from "react";

function Comments2ListHook(props) {
  const [data, setData] = useState([]);
  function OnlyEven() {
    let evenPost = data.filter((elem, index) => index % 2 === 0);
    setData(evenPost);
  }
  useEffect(() => {
    console.log("effect");
    if (props.data.length > 0) setData(props.data);
  }, [props]);

  return (
    <div>
      <div>
        <button onClick={OnlyEven}>Only even comments</button>
      </div>
      {data.map((el, index) => (
        <section key={el.id}>
          <p>
            <b>
              {index + 1}. {el.email}
            </b>
          </p>
          <p>{el.body}</p>
        </section>
      ))}
    </div>
  );
}
export default Comments2ListHook;
