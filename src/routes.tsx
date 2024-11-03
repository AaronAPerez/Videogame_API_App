import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
// import ExplorePage from "./pages/ExplorePage";
// import LibraryPage from "./pages/LibraryPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      // { path: "explore", element: <ExplorePage /> },
      // { path: "library", element: <LibraryPage /> }
    ],
  },
]);

export default router;