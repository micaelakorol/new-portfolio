import App from "../../App";
import { createBrowserRouter } from "react-router-dom";
import Projects from "../MyProjects/Projects";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/my-projects",
    element: <Projects />,
  },
]);
