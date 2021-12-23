function List(data) {
  console.log("===========");
  console.log(data);
  console.log("===========");

  return (
    <div>
      <ul>
        {data.user.user.map((item, i) => (
          <li key={new Date().getTime() * i}>
            Passport: {item.passport}, Name: {item.name}, Age: {item.age}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default List;
