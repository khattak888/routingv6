import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
const Post = () => {
  let { category, id } = useParams();
  let [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  console.log(searchParams.get("price"));
  return (
    <>
      <h1>
        Post Page:-{category}
        {id}
      </h1>
    </>
  );
};

export default Post;
