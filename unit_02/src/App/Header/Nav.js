function Nav(props) {
  return (
    <nav>
      <ul className="main-navigation"></ul>
      {props.nav.map((item) => (
        <li key={item.link}>
          <a href={item.link}>{item.text}</a>
        </li>
      ))}
    </nav>
  );
}
export default Nav;
