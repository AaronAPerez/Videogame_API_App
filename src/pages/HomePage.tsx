import { Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GenreList from "../components/GenereList";
import NavBar from "../components/NavBar";


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
        <GridItem area="nav main" padding={1}>
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