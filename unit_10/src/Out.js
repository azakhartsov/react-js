import { useSelector } from "react-redux";
import { selectValue, selectText } from "./app/taskReducerSlice";

export default function Out() {
  const task1 = useSelector(selectValue); // получаем данные из store
  const task2 = useSelector(selectText); // получаем данные из store.text

  return (
    <div>
      <hr />
      <h2>Task 1</h2>
      <p>{task1}</p>
      <h2>Task 2</h2>
      <p>{task2}</p>
    </div>
  );
}
