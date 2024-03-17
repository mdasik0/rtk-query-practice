import { createBrowserRouter } from "react-router-dom";
import Feed from "../pages/Feed";
const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <Feed />,
      },
    ],
  },
]);

export default router;
