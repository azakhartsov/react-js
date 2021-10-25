import { useRouteMatch } from "react-router-dom";
import { Link } from "react-router-dom";

function Category(props) {
  let match = useRouteMatch();
  return (
    <div>
      <h1>Category</h1>
      <ul>
        {props.data.map((item, i) => (
          <li key={i}>
            <Link to={`${match.url + item.link}`}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
