// components/GenreList.tsx
import {
  List,
  ListItem,
  HStack,
  Image,
  Text,
  Box,
  Heading,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/imageUrl";
import useGameQueryStore from "../store";

const GenreList = () => {
  const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore(s => s.setGenreId);
  const { data } = useGenres();
  const selectedBg = "whiteAlpha.300";

  return (
    <Box px={2} borderRadius={20}>
      <Heading size="lg" mb={4} px={2} py={1}>Genres</Heading>
      <List spacing={1}>
        {data?.results.map(genre => (
          <ListItem
            key={genre.id}
            onClick={() => setSelectedGenreId(genre.id)}
            cursor="pointer"
            p={2}
            borderRadius={20}
            fontSize={18}
            fontWeight={'700'}
            alignItems="center"
            justifyContent="center"
            transition="opacity 0.3s"  
            bg={genre.id === selectedGenreId ? selectedBg : 'transparent'}
         
          >
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Text fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}>
                {genre.name}
              </Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default GenreList;