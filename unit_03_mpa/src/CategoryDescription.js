import { useParams } from "react-router-dom";

function CategoryDescription() {
  const { catName } = useParams();

  return (
    <div>
      <h1>Category: {catName}</h1>
    </div>
  );
}

export default CategoryDescription;
