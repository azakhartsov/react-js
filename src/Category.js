import { useRouteMatch } from "react-router-dom";

function Category(props) {
  let match = useRouteMatch();
  return (
    <div className="main">
      <h1>Category</h1>
      <a href="/cat">Back</a>
      <ul>
        {props.data.map((item) => (
          <li>
            <a href={`${match.url + item.link}`}>{item.text}</a>
          </li>
        ))}
        {/* <li>
          <a href="/cat/notebook">Notebooks</a>
        </li>
        <li>
          <a href="/cat/monitor">Monitors</a>
        </li>
        <li>
          <a href={`${match.url}/cellphone`}>Mobile phones</a>
        </li> */}
      </ul>
    </div>
  );
}

export default Category;
