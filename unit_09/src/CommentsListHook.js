import React from "react";
function CommentsListHook(props) {
  return (
    <>
      <div>
        <button>Only even comments</button>
      </div>
      {props.data.map((el, index) => (
        <section key={el.id}>
          <p>
            <b>
              {index + 1}. {el.email}
            </b>
          </p>
          <p>{el.body}</p>
        </section>
      ))}
    </>
  );
}
export default CommentsListHook;
