// App.tsx
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./pages/Layout";

// // Create a custom theme
// const theme = extendTheme({
// //   styles: {
// //     global: (props: any) => ({
// //       body: {
// //         bg: props.colorMode === "light" ? "gray.50" : "gray.900",
// //       },
// //     }),
// //   },
//   components: {
//     Button: {
//       defaultProps: {
//         colorScheme: "green", // Spotify uses green as their primary color
//       },
//     },
//   },
// });



const App = () => {
  return (
   
  
        <Router>
          <Layout />
        </Router>


  );
};

export default App;