import {
    Box,
    Heading,
    SimpleGrid,
    Image,
    Text,
    VStack,
    HStack,
  } from "@chakra-ui/react";
  import useGameSeries from "../hooks/useGameSeries.ts";
  import getCroppedImageUrl from "../services/imageUrl";
  import CriticScore from "./CriticScore";
  
  interface Props {
    gameId: number;
  }
  
  const GameSeries = ({ gameId }: Props) => {
    const { data, isLoading } = useGameSeries(gameId);
  
    if (isLoading || !data?.results.length) return null;
  
    return (
      <Box marginTop={6}>
        <Heading size="md" marginBottom={3}>
          More from the Series
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
          {data.results.map((game) => (
            <HStack 
              key={game.id} 
              spacing={4} 
              padding={2} 
              borderRadius="lg"
              _hover={{ 
                transform: 'translateY(-2px)',
                transition: 'transform 0.2s ease-in-out',
                backgroundColor: "whiteAlpha.200" 
              }}
            >
              <Image
                src={getCroppedImageUrl(game.background_image)}
                boxSize="60px"
                objectFit="cover"
                borderRadius="md"
              />
              <VStack align="start" flex={1}>
                <Text fontWeight="bold" fontSize="sm">
                  {game.name}
                </Text>
                <HStack>
                  <CriticScore score={game.metacritic} />
                  <Text fontSize="sm" color="gray.500">
                    {new Date(game.released).getFullYear()}
                  </Text>
                </HStack>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Box>
    );
  };
  
  export default GameSeries;