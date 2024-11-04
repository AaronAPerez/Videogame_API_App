// pages/DashboardPage.tsx
import {
    Box,
    Container,
    Grid,
    GridItem,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    VStack,
    useColorModeValue,
  } from "@chakra-ui/react";
  import UserProfile from "../components/dashboard/UserProfile";
  import FavoriteGames from "../components/dashboard/FavoriteGames";
  import BlogPosts from "../components/dashboard/BlogPosts";
  import GameActivity from "../components/dashboard/GameActivity";
  import CreatePost from "../components/dashboard/CreatePost";
  
  const DashboardPage = () => {
    const bgColor = useColorModeValue("white", "gray.800");
    const borderColor = useColorModeValue("gray.200", "gray.700");
  
    return (
      <Container maxW="container.xl" py={8}>
        <Grid
          templateColumns={{ base: "1fr", lg: "300px 1fr" }}
          gap={8}
        >
          {/* Left Sidebar */}
          <GridItem>
            <VStack spacing={8}>
              <Box
                bg={bgColor}
                p={6}
                borderRadius="lg"
                borderWidth="1px"
                borderColor={borderColor}
                w="100%"
              >
                <UserProfile />
              </Box>
              
              <Box
                bg={bgColor}
                p={6}
                borderRadius="lg"
                borderWidth="1px"
                borderColor={borderColor}
                w="100%"
              >
                <FavoriteGames />
              </Box>
            </VStack>
          </GridItem>
  
          {/* Main Content */}
          <GridItem>
            <VStack spacing={8} align="stretch">
              <Box
                bg={bgColor}
                p={6}
                borderRadius="lg"
                borderWidth="1px"
                borderColor={borderColor}
              >
                <CreatePost />
              </Box>
  
              <Box
                bg={bgColor}
                borderRadius="lg"
                borderWidth="1px"
                borderColor={borderColor}
              >
                <Tabs isLazy>
                  <TabList px={6} pt={4}>
                    <Tab>Your Posts</Tab>
                    <Tab>Feed</Tab>
                    <Tab>Activity</Tab>
                  </TabList>
  
                  <TabPanels>
                    <TabPanel>
                      <BlogPosts filter="user" />
                    </TabPanel>
                    <TabPanel>
                      <BlogPosts filter="feed" />
                    </TabPanel>
                    <TabPanel>
                      <GameActivity />
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Box>
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    );
  };
  
  export default DashboardPage;