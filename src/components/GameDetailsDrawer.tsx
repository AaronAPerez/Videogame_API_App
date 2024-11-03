import {
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  SimpleGrid,
  GridItem,
  useBreakpointValue,
  Fade,
  SlideFade,
  Drawer,
} from "@chakra-ui/react";
import useGameDetails from "../hooks/useGameDetails";
import ExpandableText from "./ExpandableText";
import GameAttributes from "./GameAttributes";
import GameTrailer from "./GameTrailer";
import GameScreenshots from "./GameScreenShots";
import GameDetailsSkeleton from "./GameDetailsSkeleton";
import GameSeries from "./GameSeries";

interface Props {
  gameId?: number;
  isOpen: boolean;
  onClose: () => void;
}

const GameDetailsDrawer = ({ gameId, isOpen, onClose }: Props) => {
  const { data: game, isLoading } = useGameDetails(gameId!);
  
  // Responsive drawer size
  const drawerSize = useBreakpointValue({ base: "full", lg: "xl" });
  
  // Responsive padding and layout
  const padding = useBreakpointValue({ base: 2, md: 5 });

  return (
    <Drawer 
      isOpen={isOpen} 
      onClose={onClose} 
      size={drawerSize}
      placement="right"
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton 
          size="lg"
          backgroundColor="whiteAlpha.200"
          borderRadius="full"
          margin={2}
        />
        <DrawerHeader
          fontSize={{ base: "xl", md: "2xl" }}
          padding={padding}
        >
          {game?.name || 'Loading...'}
        </DrawerHeader>
        <DrawerBody padding={padding}>
          {isLoading ? (
            <Fade in>
              <GameDetailsSkeleton />
            </Fade>
          ) : (
            game && (
              <SlideFade in offsetY="20px">
                <SimpleGrid 
                  columns={{ base: 1, lg: 2 }} 
                  spacing={{ base: 3, md: 5 }}
                >
                  <GridItem>
                    <ExpandableText limit={300}>
                      {game.description_raw}
                    </ExpandableText>
                    <GameAttributes game={game} />
                  </GridItem>
                  <GridItem>
                    <GameTrailer gameId={game.id} />
                    <GameScreenshots gameId={game.id} />
                    <GameSeries gameId={game.id} />
                  </GridItem>
                </SimpleGrid>
              </SlideFade>
            )
          )}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default GameDetailsDrawer;