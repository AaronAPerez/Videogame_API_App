import { Box, Heading } from "@chakra-ui/react";
import { useTrailers } from "../hooks/useGameMedia";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const first = data?.results[0];
  if (!first) return null;

  return (
    <Box marginY={5}>
      <Heading fontSize="2xl" marginBottom={3}>
        Game Trailer
      </Heading>
      <video 
        src={first.data[480]} 
        poster={first.preview}
        controls
        width="100%"
      />
    </Box>
  );
};

export default GameTrailer;