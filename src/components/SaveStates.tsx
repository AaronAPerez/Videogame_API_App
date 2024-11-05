// components/SaveStates.tsx
import {
    VStack,
    HStack,
    Image,
    Text,
    Box,
    IconButton,
    SimpleGrid,
    useToast,
  } from "@chakra-ui/react";
  import { FaPlay, FaTrash } from "react-icons/fa";
  import { motion } from "framer-motion";
  import useRetroGaming from "../hooks/useRetroGaming";
  
  const MotionBox = motion(Box);
  
  const SaveStates = () => {
    const saveStates = useRetroGaming((s) => s.saveStates);
    const currentGame = useRetroGaming((s) => s.currentGame);
    const toast = useToast();
  
  
    const handleLoadState = async (stateId: string) => {
      try {
        // Add logic to load save state
        toast({
          title: "State loaded",
          status: "success",
          duration: 2000,
        });
      } catch (error) {
        toast({
          title: "Failed to load state",
          status: "error",
          duration: 2000,
        });
      }
    };
  
    const handleDeleteState = async (stateId: string) => {
      try {
        // Add logic to delete save state
        toast({
          title: "State deleted",
          status: "success",
          duration: 2000,
        });
      } catch (error) {
        toast({
          title: "Failed to delete state",
          status: "error",
          duration: 2000,
        });
      }
    };
  
    const filteredStates = currentGame
      ? saveStates.filter((state) => state.gameId === currentGame.id)
      : saveStates;
  
    return (
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        {filteredStates.map((state) => (
          <MotionBox
            key={state.id}
            p={3}
            borderRadius="lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <HStack spacing={4}>
              <Image
                src={state.screenshot}
                alt="Save state screenshot"
                boxSize="100px"
                objectFit="cover"
                borderRadius="md"
              />
              <VStack align="start" flex={1} spacing={1}>
                <Text fontSize="sm" color="gray.500">
                  {new Date(state.date).toLocaleString()}
                </Text>
                <HStack spacing={2}>
                  <IconButton
                    aria-label="Load state"
                    icon={<FaPlay />}
                    size="sm"
                    colorScheme="green"
                    onClick={() => handleLoadState(state.id)}
                  />
                  <IconButton
                    aria-label="Delete state"
                    icon={<FaTrash />}
                    size="sm"
                    colorScheme="red"
                    variant="ghost"
                    onClick={() => handleDeleteState(state.id)}
                  />
                </HStack>
              </VStack>
            </HStack>
          </MotionBox>
        ))}
      </SimpleGrid>
    );
  };
  
  export default SaveStates;