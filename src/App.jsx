import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Club from "./pages/Club";
import ClubDetail from "./pages/ClubDetail";
import Events from "./pages/Events";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,   
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "club",
        element: <Club />,
      },
      {
        path: "clubdetail",
        element: <ClubDetail />,
      },
      {
        path: "events",
        element: <Events />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;