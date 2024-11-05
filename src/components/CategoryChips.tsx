import {
    HStack,
    Tag,
    TagLabel,
    TagCloseButton,
    Wrap,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from "@chakra-ui/react";
  import { FaChevronDown } from "react-icons/fa";
  import useGenres from "../hooks/useGenres";
  import useGameQueryStore from "../store";
import usePlatforms from "../hooks/usePlatforms";
  
  const CategoryChips = () => {
    const { data: genres } = useGenres();
    const { data: platforms } = usePlatforms();
    const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
    const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
    const setGenreId = useGameQueryStore((s) => s.setGenreId);
    const setPlatformId = useGameQueryStore((s) => s.setPlatformId);
    
  
    const selectedGenre = genres?.results.find((g) => g.id === selectedGenreId);
    const selectedPlatform = platforms?.results.find((p) => p.id === selectedPlatformId);
  
    return (

    
      <Wrap spacing={2} mb={4}>
        <HStack spacing={2}>
          <Menu>
            <MenuButton as={Button} rightIcon={<FaChevronDown />} size="sm" borderRadius={20}>
              Genre
            </MenuButton>
            <MenuList>
              {genres?.results.map((genre) => (
                <MenuItem
                  key={genre.id}
                  onClick={() => setGenreId(genre.id)}
                  fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
                >
                  {genre.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
  
          <Menu>
            <MenuButton as={Button} rightIcon={<FaChevronDown />} size="sm" borderRadius={20}>
              Platform
            </MenuButton>
            <MenuList>
              {platforms?.results.map((platform) => (
                <MenuItem
                  key={platform.id}
                  onClick={() => setPlatformId(platform.id)}
                  fontWeight={selectedPlatformId === platform.id ? "bold" : "normal"}
                >
                  {platform.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </HStack>
  
        <HStack spacing={2}>
          {selectedGenre && (
            <Tag 
              size="md" 
              borderRadius={20} 
              variant="subtle"
            >
              <TagLabel>{selectedGenre.name}</TagLabel>
              <TagCloseButton onClick={() => setGenreId(0)} />
            </Tag>
          )}
          
          {selectedPlatform && (
            <Tag 
              size="md" 
              borderRadius={20} 
              variant="subtle"
            >
              <TagLabel>{selectedPlatform.name}</TagLabel>
              <TagCloseButton onClick={() => setPlatformId(0)} />
            </Tag>
          )}
        </HStack>
      </Wrap>
    
    );
  };
  
  export default CategoryChips;