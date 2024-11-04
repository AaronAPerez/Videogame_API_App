import {
  Box,
  Image,
  Text,
  Flex,
  IconButton,
  useColorModeValue,
  AspectRatio,
} from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconsList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/imageUrl";
import useGameDrawer from "../store/useGameDrawer";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const onOpen = useGameDrawer((s) => s.onOpen);
  const cardBg = useColorModeValue("white", "gray.800");
  const hoverBg = useColorModeValue("gray.50", "gray.700");

  return (
    <Box
      borderRadius="lg"
      boxShadow='dark-lg' 
      rounded='md' 
      overflow="hidden"
      bg={cardBg}
      transition="all 0.3s"
      _hover={{
        transform: "translateY(-4px)",
        shadow: "lg",
        bg: hoverBg,
      }}
      role="group"
      cursor="pointer"
      onClick={() => onOpen(game.id)}
    >
      <Box position="relative">
        <AspectRatio ratio={16 / 9}>
          <Image
            src={getCroppedImageUrl(game.background_image)}
            alt={game.name}
            objectFit="cover"
          />
        </AspectRatio>
        <Flex
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="blackAlpha.600"
          alignItems="center"
          justifyContent="center"
          opacity="0"
          transition="opacity 0.3s"
          _groupHover={{ opacity: 1 }}
        >
          <IconButton
            aria-label="View details"
            icon={<FaPlay />}
            fontSize="20px"
            colorScheme="green"
            variant="solid"
            size="lg"
            rounded="full"
            _hover={{ transform: "scale(1.1)" }}
          />
        </Flex>
      </Box>

      <Box p={4}>
        <Text
          fontWeight="semibold"
          fontSize="lg"
          noOfLines={1}
          mb={2}
        >
          {game.name}
        </Text>
        
        <Flex justify="space-between" align="center">
          <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
          <CriticScore score={game.metacritic} />
        </Flex>
      </Box>
    </Box>
  );
};

export default GameCard;