
  // components/dashboard/BlogPosts.tsx
  import {
    Avatar,
    Box,
    Button,
    HStack,
    IconButton,
    Image,
    Text,
    useColorModeValue,
    VStack,
  } from "@chakra-ui/react";
  import { FaHeart, FaRetweet, FaComment } from "react-icons/fa";
  
  interface BlogPostsProps {
    filter: "user" | "feed";
  }
  
  const BlogPosts = ({ filter }: BlogPostsProps) => {
    return (
      <VStack spacing={6} align="stretch">
        {[1, 2, 3].map((post) => (
          <Box
            key={post}
            p={4}
            borderWidth="1px"
            borderRadius="lg"
            _hover={{ bg: useColorModeValue("gray.50", "gray.700") }}
          >
            <HStack spacing={4} mb={4}>
              <Avatar size="sm" />
              <VStack align="start" spacing={0}>
                <Text fontWeight="bold">Username</Text>
                <Text fontSize="sm" color="gray.500">
                  2 hours ago
                </Text>
              </VStack>
            </HStack>
  
            <Text mb={4}>
              This is an amazing game! #gaming #awesome
            </Text>
  
            <Image
              src={`https://bit.ly/game-post-${post}`}
              alt="Game screenshot"
              borderRadius="md"
              mb={4}
            />
  
            <HStack spacing={4}>
              <IconButton
                aria-label="Like"
                icon={<FaHeart />}
                variant="ghost"
              />
              <IconButton
                aria-label="Repost"
                icon={<FaRetweet />}
                variant="ghost"
              />
              <IconButton
                aria-label="Comment"
                icon={<FaComment />}
                variant="ghost"
              />
            </HStack>
          </Box>
        ))}
      </VStack>
    );
  };