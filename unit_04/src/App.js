import "./App.css";
import React from "react";
import { useState } from "react";

function App() {
  let count4 = 0;
  let textOut = React.createRef();
  let block7 = React.createRef();
  let t8 = React.createRef();
  let div8 = React.createRef();
  let div9 = React.createRef();
  let inp10 = React.createRef();

  const [select6, setSelect6] = useState();

  function task1() {
    console.log("task2");
  }
  function task2() {
    const block = document.querySelector(".task-2");
    block.classList.add("active");
  }
  function task3(event) {
    console.log(event.target.value);
  }
  function task4() {
    count4++;
    console.log(count4);
  }
  function task5(event) {
    if (event.target.checked) {
      textOut.current.innerHTML = event.target.value;
    } else {
      textOut.current.innerHTML = 0;
    }
  }
  function task6(event) {
    setSelect6(event.target.value);
  }
  function task7() {
    function randomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    block7.current.style.backgroundColor = `rgb(${randomInt(
      0,
      255
    )},${randomInt(0, 255)},${randomInt(0, 255)})`;
  }
  function task8(event) {
    let val = event.key;
    if (!isNaN(val)) {
      div8.current.innerHTML += 1;
    } else {
      div8.current.innerHTML += 0;
    }
  }
  function task9(event) {
    div9.current.innerHTML = event.target.value;
  }
  let ar10 = [5, 6, 7];
  function task10() {
    ar10.push(parseInt(inp10.current.value));
    console.log(ar10);
  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <button className="task-1" onClick={task1}>
          Push
        </button>
      </section>
      <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={task2}></div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={task3} />
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>
          Count
        </button>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" value="55" onChange={task5} />
        <div className="out-5" ref={textOut}></div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={task6}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div className="out-6">{select6}</div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className="block-7" ref={block7}></div>
        <button className="task-7" onClick={task7}>
          Color
        </button>
      </section>
      <section>
        <h2>Task 8</h2>
        <input
          type="text"
          className="task-8"
          onKeyPress={task8}
          ref={t8}
        ></input>
        <div className="out-8" ref={div8}></div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" onInput={task9}></input>
        <div className="out-9" ref={div9}></div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10" ref={inp10}></input>
        <button className="task-10" onClick={task10}>
          Push
        </button>
      </section>
    </>
  );
}

export default App;
