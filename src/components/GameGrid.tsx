import {
  SimpleGrid,
  Box,
  Text,
  Spinner,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameDetailsDrawer from "./GameDetailsDrawer";
import useGameDrawer from "../store/useGameDrawer";

const GameGrid = () => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useGames();
  const { isOpen, onClose, gameId } = useGameDrawer();

  const bgGradient = useColorModeValue(
    "linear(to-b, gray.50, white)",
    "linear(to-b, gray.900, gray.800)"
  );

  const fetchedGameCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  if (error) {
    return (
      <Text color="red.500" fontSize="xl">
        {error.message}
      </Text>
    );
  }

  return (
    <Box bgGradient={bgGradient} minH="100vh" py={8}>
      <InfiniteScroll
        dataLength={fetchedGameCount}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={
          <VStack py={8}>
            <Spinner size="xl" color="green.500" thickness="4px" />
          </VStack>
        }
      >
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          spacing={6}
          padding="20px"
        >
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>

      <GameDetailsDrawer
        gameId={gameId}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Box>
  );
};

export default GameGrid;