import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import store from "./redux/store.ts";
import Root from "./routes/root.tsx";
import Home from "./components/Home.tsx";
import PlanSetup from "./routes/plan-setup.tsx";
("./components/Plan/index.tsx");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/plan-setup",
        element: <PlanSetup />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
