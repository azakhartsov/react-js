import Nav from "../Header/Nav";
function Sidebar(props) {
  return (
    <ul>
      <li>Page 1</li>
      <li>Page 2</li>
      <li>Page 3</li>
      <Nav nav={props.data.nav} />
    </ul>
  );
}
export default Sidebar;
