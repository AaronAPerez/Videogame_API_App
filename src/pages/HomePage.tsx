// pages/HomePage.tsx
import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GenreList from "../components/GenereList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import CategoryChips from "../components/CategoryChips";
import GameHeading from "../components/GameHeading";
import NavBar from "../components/NavBar";
import { GameQuery } from "../store";

const HomePage = () => {
  return (
    
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"nav main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="nav main" paddingX={1}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <NavBar/>
        {/* <Box paddingLeft={2}>
     
        </Box> */}
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;