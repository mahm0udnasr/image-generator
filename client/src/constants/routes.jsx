import { Home, Result, Plans, NotFound } from "../pages";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pricing",
    element: <Plans />,
  },
  {
    path: "/generate-images",
    element: <Result />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
