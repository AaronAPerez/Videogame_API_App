// components/SystemGrid.tsx
import {
    SimpleGrid,
    Box,
    Image,
    Text,
    VStack,
    Heading,
  } from "@chakra-ui/react";
  import { motion } from "framer-motion";
  import retroSystems from "../config/retroSystems";
  import useRetroGaming from "../hooks/useRetroGaming";
  
  const MotionBox = motion(Box);
  
  const SystemGrid = () => {
    const setCurrentSystem = useRetroGaming((s) => s.setCurrentSystem);
 
  
    return (
      <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={6} w="100%">
        {retroSystems.map((system) => (
          <MotionBox
            key={system.id}
     
            p={4}
            borderRadius="lg"
            cursor="pointer"
            onClick={() => setCurrentSystem(system)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <VStack spacing={4}>
              <Image
                src={system.logoUrl}
                alt={system.name}
                boxSize="100px"
                objectFit="contain"
              />
              <VStack spacing={1}>
                <Heading size="sm">{system.shortName}</Heading>
                <Text fontSize="sm" color="gray.500">
                  {system.manufacturer} • {system.year}
                </Text>
              </VStack>
            </VStack>
          </MotionBox>
        ))}
      </SimpleGrid>
    );
  };
  
  export default SystemGrid;