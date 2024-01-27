import Layout from "../pages/Layout/Layout";
import Home from "../pages/Home";
import CharlesKeith from "../pages/CharlesKeith";
import Detail from "../components/CharlesKeithComponents/Detail/Detail";
import Pedro from "../pages/Pedro";


import {
    createBrowserRouter,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element:  <Layout />,
      children: [
        {
            path : "/",
            element : <Home/>
        },
        {
            path : "/charles&keith",
            element : <CharlesKeith/>
        },
        {
          path : "/charles&keith/:id",
          element : <Detail/>
      },
        {
          path : "/pedro",
          element : <Pedro/>
      }
      ]
    },
  ]);

  export default router;