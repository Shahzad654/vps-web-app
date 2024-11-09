import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar"; // Import Navbar
import Home from "./components/Home";
import Signup from "./components/Signup";

const router = createBrowserRouter([
  {
    path: "/", // Default path renders Home
    element: <Home />,
  },
  {
    path: "signup", // Signup path
    element: <Signup />,
  },
]);

// Define AppLayout as the main layout with Navbar and Outlet
function AppLayout() {
  return (
    <div>
      <Navbar /> {/* Navbar will appear on every page */}
      <main>
        <Outlet /> {/* Child routes like Home and Signup will render here */}
      </main>
    </div>
  );
}

export default function App() {
  return <RouterProvider router={router} />;
}
