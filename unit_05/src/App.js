import "./App.css";
import React from "react";
import { useState } from "react";

function App() {
  const [st1, setSt1] = useState();
  const [st2, setSt2] = useState(0);
  const [st3, setSt3] = useState();
  const [st4, setSt4] = useState(0);
  const [st5, setSt5] = useState();
  const [st6, setSt6] = useState();
  const [st7, setSt7] = useState();
  const [st8, setSt8] = useState("");
  const [st9, setSt9] = useState();
  const [st10, setSt10] = useState([]);

  const inp01 = React.createRef();
  const inp10 = React.createRef();
  const style = {
    background: st7,
  };

  function task1() {
    setSt1(inp01.current.value);
  }

  function task2() {
    let val2 = st2;
    val2++;
    setSt2(val2);
  }
  function task3(event) {
    setSt3(event.target.value);
  }
  function task4() {
    let val4 = st4;
    val4++;
    setSt4(val4);
  }
  function task5(event) {
    if (event.target.checked) {
      setSt5(event.target.value);
    } else {
      setSt5(0);
    }
  }
  function task6(event) {
    setSt6(event.target.value);
  }
  function task7() {
    function randomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    setSt7(
      `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`
    );
  }

  function task8(event) {
    let val = event.key;
    let val8 = st8;

    if (!isNaN(val)) {
      val8 += 1;
    } else {
      val8 += 0;
    }
    setSt8(val8);
  }
  function task9(event) {
    setSt9(event.target.value);
  }
  // let ar10 = [];

  function task10() {
    setSt10([...st10, parseInt(inp10.current.value)]);
  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <input type="text" ref={inp01} />
        <button className="task-1" onClick={task1}>
          Push
        </button>

        <div>{st1}</div>
      </section>
      <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={task2}></div>
        <div>{st2}</div>
      </section>

      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={task3} />
        <div>{st3}</div>
      </section>

      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>
          Count
        </button>
        <div>{st4}</div>
      </section>

      <section>
        <h2>Task 5</h2>
        <input type="checkbox" value="55" onChange={task5} />
        <div>{st5}</div>
      </section>

      <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={task6}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div>{st6}</div>
      </section>

      <section>
        <h2>Task 7</h2>
        <div className="block-7" style={style}></div>
        <button className="task-7" onClick={task7}>
          Color
        </button>
        <div>{st7}</div>
      </section>

      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onKeyPress={task8}></input>
        <div>{st8}</div>
      </section>

      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" onInput={task9}></input>
        <div>{st9}</div>
      </section>

      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10" ref={inp10}></input>
        <button className="task-10" onClick={task10}>
          Push
        </button>
        <div>{st10}</div>
      </section>
    </>
  );
}

export default App;
