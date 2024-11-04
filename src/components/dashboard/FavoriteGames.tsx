// components/dashboard/FavoriteGames.tsx
  import {
    Box,
    Heading,
    Image,
    SimpleGrid,
    Text,
    VStack,
  } from "@chakra-ui/react";
  
  const FavoriteGames = () => {
    return (
      <VStack align="stretch" spacing={4}>
        <Heading size="md">Favorite Games</Heading>
        <SimpleGrid columns={2} spacing={4}>
          {/* Replace with actual favorite games data */}
          {[1, 2, 3, 4].map((game) => (
            <Box
              key={game}
              borderRadius="md"
              overflow="hidden"
              position="relative"
              cursor="pointer"
              transition="transform 0.2s"
              _hover={{ transform: "scale(1.05)" }}
            >
              <Image
                src={`https://bit.ly/game-${game}`}
                alt="Game cover"
              />
              <Text
                position="absolute"
                bottom={0}
                left={0}
                right={0}
                bg="blackAlpha.700"
                color="white"
                p={2}
                fontSize="sm"
              >
                Game {game}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    );
  };
  