import {
  Box,
  HStack,
  Image,
  Text,
  IconButton,
  Progress,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";
import { useState, useEffect } from "react";
import useGameDetails from "../hooks/useGameDetails";

interface Props {
  gameId?: number;
}

const MiniPlayer = ({ gameId }: Props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const { data: game } = useGameDetails(gameId || 0);
  const bg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  if (!game) return null;

  return (
    <Box
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      bg={bg}
      borderTop="1px"
      borderColor={borderColor}
      py={2}
      zIndex={100}
    >
      <Progress
        value={progress}
        size="xs"
        colorScheme="green"
        position="absolute"
        top={0}
        left={0}
        right={0}
      />
      
      <HStack spacing={4} px={4} align="center">
        <Image
          src={game.background_image}
          boxSize="50px"
          objectFit="cover"
          borderRadius="md"
        />
        
        <VStack align="start" flex={1} spacing={0}>
          <Text fontWeight="bold" fontSize="sm">
            {game.name}
          </Text>
          <Text fontSize="xs" color="gray.500">
            {game.genres?.[0]?.name}
          </Text>
        </VStack>

        <HStack spacing={4}>
          <IconButton
            aria-label="Previous"
            icon={<FaBackward />}
            variant="ghost"
            size="sm"
          />
          <IconButton
            aria-label={isPlaying ? "Pause" : "Play"}
            icon={isPlaying ? <FaPause /> : <FaPlay />}
            variant="solid"
            colorScheme="green"
            size="sm"
            onClick={() => setIsPlaying(!isPlaying)}
          />
          <IconButton
            aria-label="Next"
            icon={<FaForward />}
            variant="ghost"
            size="sm"
          />
        </HStack>
      </HStack>
    </Box>
  );
};

export default MiniPlayer;