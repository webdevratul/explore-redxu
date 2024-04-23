import { createBrowserRouter } from "react-router-dom";
import Root from "./root/Root";
import Home from "./components/pages/Home";
import Video from "./components/pages/Video";
import Add from "./components/pages/Add";
import EditVideo from "./components/edit/EditVideo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/videos/:videoId",
        element: <Video />,
      },
      {
        path: "/videos/add",
        element: <Add />,
      },
      {
        path: "/videos/edit/:videoId",
        element: <EditVideo />,
      },
    ],
  },
]);

export default router;
