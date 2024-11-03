import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";

import useGenres from "../hooks/useGeneres";
import getCroppedImageUrl from "../services/imageUrl";
import useGameQueryStore from "../store/useGameQuery";




const GenereList = () => {
  const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId);
  const setSelectgedGenreId = useGameQueryStore(s => s.setGenreId);
  // const { data, isLoading, error } = useData<Genre>("/genres");
  const {data,isLoading,error} = useGenres();
  return (
    <>
    <Heading fontSize={'2xl'} paddingBottom={5}>Genres</Heading>
      <List>
        {isLoading && <Spinner />}
        {error && <Text>{error.message}</Text>}
        {data?.results.map((genre) => (
          <ListItem marginBottom={4} key={genre.id}>
            <HStack>
              <Image
                boxSize={8}
                borderRadius={4}
                objectFit={'cover'}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
              fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'}
                fontSize={"100%"}
                variant={"link"}
                onClick={() => setSelectgedGenreId(genre.id)}
                color={genre.id === selectedGenreId ? 'blue.500' : 'normal'}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenereList;
