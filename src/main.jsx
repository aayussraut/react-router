import App from "./App.jsx";
import { createRoot } from "react-dom/client.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Errorpage from "./ErrorPage.jsx";
import About from "./routes/About.jsx";
import Contact from "./routes/Contact.jsx";
import Blog from "./components/Blog.jsx";
import Home from "./routes/Home.jsx";
import { loader as blogLoader, Blogs } from "./routes/Blogs.jsx";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <Errorpage />,

      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/blogs",
          element: <Blogs />,
          loader: blogLoader,
        },
        {
          path: "/blogs/:id",
          element: <Blog />,
          loader: blogLoader,
        },
      ],
    },
  ]
  // {
  //   basename: "/test",
  // }
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} fallbackElement={<h1>Loading ...</h1>} />
);
