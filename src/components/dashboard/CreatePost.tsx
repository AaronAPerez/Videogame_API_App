
  // components/dashboard/CreatePost.tsx
  import {
    Box,
    Button,
    FormControl,
    HStack,
    Input,
    Select,
    Textarea,
    useToast,
  } from "@chakra-ui/react";
  import { useState } from "react";
  
  const CreatePost = () => {
    const [content, setContent] = useState("");
    const [selectedGame, setSelectedGame] = useState("");
    const toast = useToast();
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Add post creation logic
      toast({
        title: "Post created",
        status: "success",
        duration: 3000,
      });
      setContent("");
      setSelectedGame("");
    };
  
    return (
      <Box as="form" onSubmit={handleSubmit}>
        <FormControl mb={4}>
          <Select
            placeholder="Select game"
            value={selectedGame}
            onChange={(e) => setSelectedGame(e.target.value)}
          >
            <option value="game1">Game 1</option>
            <option value="game2">Game 2</option>
          </Select>
        </FormControl>
  
        <FormControl mb={4}>
          <Textarea
            placeholder="What's on your mind?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={3}
          />
        </FormControl>
  
        <HStack justify="flex-end">
          <Button type="submit" colorScheme="green">
            Post
          </Button>
        </HStack>
      </Box>
    );
  };
  