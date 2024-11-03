import {
    Modal,
    ModalOverlay,
    ModalContent,
    InputGroup,
    Input,
    InputLeftElement,
    VStack,
    HStack,
    Image,
    Text,
    Box,
    useColorModeValue,
    IconButton,
  } from "@chakra-ui/react";
  import { useRef } from "react";
  import { FaSearch } from "react-icons/fa";
  import { IoMdClose } from "react-icons/io";
  import useGames from "../hooks/useGames";
  import getCroppedImageUrl from "../services/imageUrl";
  import useGameDrawer from "../store/useGameDrawer";
  
  interface Props {
    isOpen: boolean;
    onClose: () => void;
  }
  
  const SearchOverlay = ({ isOpen, onClose }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const { data } = useGames();
    const onOpen = useGameDrawer((s) => s.onOpen);
    const bg = useColorModeValue("white", "gray.800");
  
    const handleGameClick = (gameId: number) => {
      onOpen(gameId);
      onClose();
    };
  
    return (
      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay bg="blackAlpha.700" backdropFilter="blur(10px)" />
        <ModalContent bg={bg} my={4}>
          <Box p={4}>
            <InputGroup size="lg">
              <InputLeftElement>
                <FaSearch />
              </InputLeftElement>
              <Input
                ref={inputRef}
                placeholder="Search games..."
                variant="filled"
                autoFocus
              />
              <IconButton
                aria-label="Close search"
                icon={<IoMdClose />}
                position="absolute"
                right={2}
                top={2}
                onClick={onClose}
              />
            </InputGroup>
            
            <VStack mt={4} align="stretch" maxH="60vh" overflow="auto">
              {data?.pages[0].results.map((game) => (
                <HStack
                  key={game.id}
                  p={2}
                  borderRadius="md"
                  _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
                  cursor="pointer"
                  onClick={() => handleGameClick(game.id)}
                >
                  <Image
                    src={getCroppedImageUrl(game.background_image)}
                    boxSize="50px"
                    objectFit="cover"
                    borderRadius="md"
                  />
                  <Text fontWeight="medium">{game.name}</Text>
                </HStack>
              ))}
            </VStack>
          </Box>
        </ModalContent>
      </Modal>
    );
  };
  
  export default SearchOverlay;