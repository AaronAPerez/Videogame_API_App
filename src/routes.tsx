import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
// import ExplorePage from "./pages/ExplorePage";
// import LibraryPage from "./pages/LibraryPage";
import { LoginPage, SignupPage } from "./pages/AuthPages";
import ArcadePage from "./pages/ArcadePage";
// import PrivateRoute from "./components/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { 
        index: true,
        element: <HomePage />
      },
      { 
        path: "arcade",
        element: <ArcadePage/>
      },
      { 
        path: "signup",
        element: <SignupPage />
      },
      { 
        path: "login",
        element: <LoginPage />
      },
      // { 
      //   path: "library",
      //   element: (
      //     // <PrivateRoute>
      //     //   {/* <LibraryPage /> */}
      //     // </PrivateRoute>
      //   )
      // },
    ],
  },
  {
    path: "login",
    element: <LoginPage />
  },
  {
    path: "signup",
    element: <SignupPage />
  }
]);

export default router;