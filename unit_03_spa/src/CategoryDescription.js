import { useParams, Link } from "react-router-dom";

function CategoryDescription() {
  const { catName } = useParams();

  return (
    <>
      <Link to="/cat">Back</Link>
      <div>
        <h1>Category: {catName}</h1>
      </div>
    </>
  );
}

export default CategoryDescription;
