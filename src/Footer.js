function Footer(props) {
  return (
    <>
      <h1>Footer</h1>
      <ul>
        {props.data.map((item) => (
          <li>
            <a href={item.link}>{item.text}</a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Footer;
