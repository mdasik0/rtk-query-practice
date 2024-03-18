import { createBrowserRouter } from "react-router-dom";
import Feed from "../pages/Feed";
import Post from "../pages/Post";
const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <Feed />,
      },
      {
        path: "/post",
        element: <Post />,
      },
    ],
  },
]);

export default router;
