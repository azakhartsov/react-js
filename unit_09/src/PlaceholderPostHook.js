import React, { useEffect, useState } from "react";

function PlaceholderPostHooks() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1/posts")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <section key={data.id}>
      {data.map((item) => (
        <>
          <h2>
            {item.id}.{item.title}
          </h2>
          <p>{item.body}</p>
        </>
      ))}
    </section>
  );
}

export default PlaceholderPostHooks;
