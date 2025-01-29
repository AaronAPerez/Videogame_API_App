import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";

import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
// import ExplorePage from "./pages/ExplorePage";
// import LibraryPage from "./pages/LibraryPage";

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

]);

export default router;