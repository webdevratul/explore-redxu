import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./root/Root";
import Video from "./pages/Video";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/videos/:videoId",
        element: <Video></Video>,
      },
    ],
  },
]);

export default router;
