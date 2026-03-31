import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Club from "./pages/Club";
import ClubDetail from "./pages/ClubDetail";
import Events from "./pages/Events";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard"


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
       {
        path: "login",
        element: <Login />,
      },
        {
        path: "register",
        element: <Register />,
      },
       {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;