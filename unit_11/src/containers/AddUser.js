import { useDispatch } from "react-redux";
import { addNewUser } from "../action";

function AddUser() {
  const dispatch = useDispatch();

  const formHandler = (event) => {
    event.preventDefault();
    console.log(event.target.elements);
    let data = event.target.elements;
    dispatch(addNewUser(data.passport.value, data.name.value, data.age.value));
  };
  return (
    <div>
      <form onSubmit={formHandler}>
        <div>
          <input type="text" name="passport" defaultValue="default passport" />
        </div>
        <div>
          <input type="text" name="name" defaultValue="default name" />
        </div>
        <div>
          <input type="number" name="age" defaultValue="99" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddUser;
