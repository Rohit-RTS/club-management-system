import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Layout from "./pages/Layout";
import Home from "./pages/User/Home/Home";
import Club from "./pages/User/Club";
import ClubDetail from "./pages/User/ClubDetail";
import Events from "./pages/User/Home/Events";

import Login from "./pages/User/UserLogin";
import Register from "./pages/User/Register";
import Dashboard from "./pages/User/Dashboard";
import LoginChoice from "./pages/User/LoginChoice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "club", element: <Club /> },
      { path: "clubdetail", element: <ClubDetail /> },
      { path: "events", element: <Events /> },

      // 🔐 Login Flow
      { path: "login", element: <LoginChoice /> },
      { path: "login-user", element: <Login /> },
      { path: "login-admin", element: <Login /> },

      { path: "register", element: <Register /> },

      // 👤 User Dashboard
      { path: "dashboard", element: <Dashboard /> },

      // 🏫 Admin Dashboard (temporary)
      { path: "admin-dashboard", element: <h1>Admin Dashboard</h1> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;