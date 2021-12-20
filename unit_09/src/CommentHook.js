import React, { useState } from "react";

function CommentHook() {
  const [data, setData] = useState([]);

  const selectHandler = (event) => {
    fetch(
      "https://jsonplaceholder.typicode.com/posts/" +
        event.target.value +
        "/comments"
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  };

  return (
    <>
      <select onChange={selectHandler}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <div>
        <h1>Comments</h1>
        {data.map((item, index) => (
          <section key={item.id}>
            <p>
              <b>
                {index + 1}. {item.email}
              </b>
            </p>
            <p>{item.body}</p>
          </section>
        ))}
      </div>
    </>
  );
}

export default CommentHook;
