 // components/dashboard/GameActivity.tsx
  import {
    Box,
    HStack,
    Icon,
    Text,
    VStack,
  } from "@chakra-ui/react";
  import { FaTrophy, FaGamepad, FaClock } from "react-icons/fa";
  
  const GameActivity = () => {
    return (
      <VStack spacing={4} align="stretch">
        {[1, 2, 3].map((activity) => (
          <Box
            key={activity}
            p={4}
            borderWidth="1px"
            borderRadius="lg"
          >
            <HStack spacing={4}>
              <Icon as={FaGamepad} boxSize={6} color="green.500" />
              <VStack align="start" spacing={0}>
                <Text fontWeight="bold">
                  Started playing Game {activity}
                </Text>
                <Text fontSize="sm" color="gray.500">
                  3 hours ago
                </Text>
              </VStack>
            </HStack>
          </Box>
        ))}
      </VStack>
    );
  };
  
  export { UserProfile, FavoriteGames, CreatePost, BlogPosts, GameActivity };