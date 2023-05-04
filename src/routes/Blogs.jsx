import { useLoaderData, Link } from "react-router-dom";
import Blog from "../components/Blog";
const loader = async () => {
  const data = new Promise((resolve) => {
    setTimeout(async () => {
      await fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => resolve(json));
    }, 3000);
  });
  return data;
};
const Blogs = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      {data.splice(0, 10).map((item) => (
        <Link to={`/blogs/${item.id}`} key={item.id} state={item.id}>
          <Blog item={item} />
        </Link>
      ))}
    </>
  );
};

export { loader, Blogs };
