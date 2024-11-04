// components/Favorites.tsx
import {
    VStack,
    HStack,
    Image,
    Text,
    Box,
    SimpleGrid,
    IconButton,
    Badge,
    useColorModeValue,
  } from "@chakra-ui/react";
  import { FaPlay, FaHeart } from "react-icons/fa";
  import { motion } from "framer-motion";
import useRetroGaming from "../hooks/useRetroGaming";
  
  const MotionBox = motion(Box);
  
  const Favorites = () => {
    const favorites = useRetroGaming((s) => s.favorites);
    const setCurrentGame = useRetroGaming((s) => s.setCurrentGame);
    const toggleFavorite = useRetroGaming((s) => s.toggleFavorite);
    const bgColor = useColorModeValue("gray.50", "gray.700");
    const hoverBg = useColorModeValue("gray.100", "gray.600");
  
    if (favorites.length === 0) {
      return (
        <VStack py={8} spacing={4}>
          <FaHeart size={40} color="gray" />
          <Text color="gray.500">No favorite games yet</Text>
        </VStack>
      );
    }
  
    return (
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        {favorites.map((game) => (
          <MotionBox
            key={game.id}
            bg={bgColor}
            p={3}
            borderRadius="lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            _hover={{ bg: hoverBg }}
          >
            <HStack spacing={4}>
              <Image
                src={game.coverImage}
                alt={game.title}
                boxSize="80px"
                objectFit="cover"
                borderRadius="md"
              />
              <VStack align="start" flex={1} spacing={1}>
                <Text fontWeight="bold">{game.title}</Text>
                <HStack>
                  <Badge colorScheme="blue">{game.system.shortName}</Badge>
                  <Text fontSize="sm" color="gray.500">
                    {game.year}
                  </Text>
                </HStack>
                <HStack spacing={2}>
                  <IconButton
                    aria-label="Play game"
                    icon={<FaPlay />}
                    size="sm"
                    colorScheme="green"
                    onClick={() => setCurrentGame(game)}
                  />
                  <IconButton
                    aria-label="Remove from favorites"
                    icon={<FaHeart />}
                    size="sm"
                    colorScheme="red"
                    variant="solid"
                    onClick={() => toggleFavorite(game.id)}
                  />
                </HStack>
              </VStack>
            </HStack>
          </MotionBox>
        ))}
      </SimpleGrid>
    );
  };
  
  export default Favorites;