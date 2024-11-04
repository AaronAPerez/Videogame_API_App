// components/dashboard/UserProfile.tsx
import {
    Avatar,
    Box,
    Button,
    Heading,
    HStack,
    Text,
    VStack,
  } from "@chakra-ui/react";
  import { FaEdit } from "react-icons/fa";
  
  const UserProfile = () => {
    const user = {
      username: "GamerPro",
      bio: "Passionate gamer and content creator",
      avatarUrl: "https://bit.ly/user-avatar",
      following: 120,
      followers: 84,
    };
  
    return (
      <VStack spacing={4} align="stretch">
        <HStack justify="space-between">
          <Avatar size="xl" src={user.avatarUrl} />
          <Button leftIcon={<FaEdit />} size="sm">
            Edit Profile
          </Button>
        </HStack>
  
        <Box>
          <Heading size="md">{user.username}</Heading>
          <Text color="gray.500" mt={1}>
            {user.bio}
          </Text>
        </Box>
  
        <HStack spacing={6}>
          <VStack spacing={1} align="start">
            <Text fontWeight="bold">{user.following}</Text>
            <Text color="gray.500" fontSize="sm">Following</Text>
          </VStack>
          <VStack spacing={1} align="start">
            <Text fontWeight="bold">{user.followers}</Text>
            <Text color="gray.500" fontSize="sm">Followers</Text>
          </VStack>
        </HStack>
      </VStack>
    );
  };
  

  