// App.tsx
import {
  Box,
  ChakraProvider,
  extendTheme,
} from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./pages/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a custom theme
const theme = extendTheme({
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === "light" ? "gray.50" : "gray.900",
      },
    }),
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: "green", // Spotify uses green as their primary color
      },
    },
  },
});

const queryClient = new QueryClient();

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Layout />
        </Router>
      </QueryClientProvider>
    </ChakraProvider>
  );
};

export default App;