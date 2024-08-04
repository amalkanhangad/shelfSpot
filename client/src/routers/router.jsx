import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../Home/Home";
import Shop from "../shop/shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../shop/SingleBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/shop",
        element: <Shop />
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/blogs",
        element:<Blog/>
      },
      {
        path:"/book/:id",
        element:<SingleBook/>,
        loader:({params}) => fetch(`http://localhost:1000/book/${params.id}`)
      }
    ],
  },
]);
export default router;