import { useLoaderData, useLocation } from "react-router-dom";
const Blog = ({ item }) => {
  const data = useLoaderData();
  const { state } = useLocation();
  item =
    data.find((item) => item.id === state) != undefined
      ? data.find((item) => item.id === state)
      : item;
  return (
    <>
      <div key={item.id}>
        <h1>{item.title}</h1>
        <p>{item.body}</p>
      </div>
    </>
  );
};

export default Blog;
