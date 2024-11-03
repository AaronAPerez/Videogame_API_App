import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GenereList from "./components/GenereList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import GameHeading from "./components/GameHeading";
import SortSelector from "./components/SortSelector";
import GameDetailsDrawer from "./components/GameDetailsDrawer";
import useGameDrawer from "./store/useGameDrawer";

const App = () => {
  const { isOpen, onClose, gameId } = useGameDrawer();

  return (
    <>
      <Grid
        templateAreas={{
          base: `'nav' 'main'`,
          lg: `'nav nav' 'aside main'`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" margin={1}>
            <GenereList />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingLeft={5}>
            <GameHeading />
            <HStack spacing={5} marginBottom={5}>
              <PlatformSelector />
              <SortSelector />
            </HStack>
          </Box>
          <GameGrid />
        </GridItem>
      </Grid>
      <GameDetailsDrawer 
        gameId={gameId} 
        isOpen={isOpen} 
        onClose={onClose}
      />
    </>
  );
};

export default App;