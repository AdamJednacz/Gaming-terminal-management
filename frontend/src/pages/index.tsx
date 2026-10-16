import { createBrowserRouter, type RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    path: "*",
    element: <p>Not Found</p>,
  },
];

export const router = createBrowserRouter(routes);
