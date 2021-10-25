import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <>
      <h1>Footer</h1>
      <ul>
        {props.data.map((item, i) => (
          <li key={i}>
            <Link to={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Footer;
