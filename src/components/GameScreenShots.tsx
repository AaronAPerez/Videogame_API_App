import { Box, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import { useScreenshots } from "../hooks/useGameMedia";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  if (!data?.results.length) return null;

  return (
    <Box marginY={5}>
      <Heading fontSize="2xl" marginBottom={3}>
        Screenshots
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
        {data?.results.map((screenshot) => (
          <Image
            key={screenshot.id}
            src={screenshot.image}
            alt="Game screenshot"
            borderRadius={5}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default GameScreenshots;