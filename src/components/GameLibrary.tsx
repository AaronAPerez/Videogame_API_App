// components/GameLibrary.tsx
import {
    VStack,
    HStack,
    Image,
    Text,
    Box,
    Input,
    InputGroup,
    InputLeftElement,
    Select,
    SimpleGrid,
    Badge,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import { FaSearch } from "react-icons/fa";
  import { motion } from "framer-motion";


  
  const MotionBox = motion(Box);
  
  // Mock data - replace with actual data from your backend
  const mockGames: RetroGame[] = [
    {
      id: "1",
      title: "Super Mario Bros",
      system: {
        id: "nes",
        name: "Nintendo Entertainment System",
        shortName: "NES",
        manufacturer: "Nintendo",
        year: 1985,
        core: "fceumm",
        fileExtensions: [".nes"],
        logoUrl: "/systems/nes-logo.png",
        color: "#E60012",
      },
      coverImage: "/games/super-mario-bros.jpg",
      romUrl: "/roms/super-mario-bros.nes",
      genre: ["Platform", "Action"],
      year: 1985,
      developer: "Nintendo",
      publisher: "Nintendo",
      description: "The classic platformer that defined a generation.",
    },
    // Add more mock games
  ];
  
  const GameLibrary = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterSystem, setFilterSystem] = useState("");


  
    const filteredGames = mockGames.filter(
      (game) =>
        game.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (!filterSystem || game.system.id === filterSystem)
    );
  
    return (
      <VStack spacing={4} align="stretch">
        <HStack spacing={4}>
          <InputGroup>
            <InputLeftElement>
              <FaSearch />
            </InputLeftElement>
            <Input
              placeholder="Search games..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>
          <Select
            value={filterSystem}
            onChange={(e) => setFilterSystem(e.target.value)}
            placeholder="All systems"
            w="200px"
          >
            {/* Add system options */}
          </Select>
        </HStack>
  
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
          {filteredGames.map((game) => (
            <MotionBox
              key={game.id}
           
              p={3}
              borderRadius="lg"
              cursor="pointer"
              onClick={() => setCurrentGame(game)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
           
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
                  <Text fontSize="sm" color="gray.500" noOfLines={2}>
                    {game.description}
                  </Text>
                </VStack>
              </HStack>
            </MotionBox>
          ))}
        </SimpleGrid>
      </VStack>
    );
  };
  
  export default GameLibrary;