import {
    Box,
    Grid,
    Heading,
    HStack,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    useColorModeValue,
    VStack,
  } from "@chakra-ui/react";
import RetroEmulator from "../components/RetroEmulator";
//   import RetroEmulator from "./RetroEmulator";
//   import SystemGrid from "./SystemGrid";
//   import GameLibrary from "./GameLibrary";
//   import SaveStates from "./SaveStates";
//   import Favorites from "./Favorites";
//   import useRetroGaming from '../hooks/useRetroGaming';
  
  const ArcadePage = () => {
    const currentGame = useRetroGaming((s) => s.currentGame);
    const bgColor = useColorModeValue("white", "gray.800");
    const borderColor = useColorModeValue("gray.200", "gray.700");
  
    return (
      <Grid
        templateAreas={{
          base: `"game" "content"`,
          lg: `"game content"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "1fr 400px",
        }}
        gap={4}
        p={4}
        h="100%"
      >
        <Box
          gridArea="game"
          bg={bgColor}
          borderRadius="lg"
          p={4}
          borderWidth="1px"
          borderColor={borderColor}
        >
          {currentGame ? (
            <RetroEmulator />
          ) : (
            <VStack spacing={8} justify="center" h="100%">
              <Heading size="xl">Retro Arcade</Heading>
              <SystemGrid />
            </VStack>
          )}
        </Box>
  
        <Box
          gridArea="content"
          bg={bgColor}
          borderRadius="lg"
          borderWidth="1px"
          borderColor={borderColor}
        >
          <Tabs isLazy>
            <TabList px={4}>
              <Tab>Library</Tab>
              <Tab>Saves</Tab>
              <Tab>Favorites</Tab>
            </TabList>
  
            <TabPanels>
              <TabPanel>
                <GameLibrary />
              </TabPanel>
              <TabPanel>
                <SaveStates />
              </TabPanel>
              <TabPanel>
                <Favorites />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Grid>
    );
  };
  
  export default ArcadePage;