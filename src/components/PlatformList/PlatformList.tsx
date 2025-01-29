import {
  Box,
  VStack,
  Text,
  Icon,
  Collapse,
  Button,
  Image,
  HStack,
  Spinner,
  Tooltip,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import useGameQueryStore from "../../store";
import useParentPlatforms from "../../hooks/UseParentPlatforms";

// Platform color mapping - Add more colors as needed
const platformColors: { [key: string]: string } = {
  pc: "#00A4EF", // Windows blue
  playstation: "#006FCD", // PlayStation blue
  xbox: "#107C10", // Xbox green
  nintendo: "#E60012", // Nintendo red
  ios: "#000000", // Apple black
  android: "#A4C639", // Android green
  mac: "#666666", // Mac gray
  linux: "#FCC624", // Linux yellow
  web: "#FF6900", // Web orange
  atari: "#E31836", // Atari red
  commodore: "#1E4B94", // Commodore blue
  sega: "#0089CF", // Sega blue
  "3do": "#BC2037", // 3DO red
  "neo-geo": "#39A0B9", // Neo Geo blue
};

const PlatformList = () => {
  const { data: parentPlatforms, isLoading, error } = useParentPlatforms();
  const [expandedParent, setExpandedParent] = useState<number | null>(null);
  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);

  if (isLoading) return <Spinner />;
  if (error) return null;

  return (
    <VStack align="stretch" spacing={4} p={4}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Platforms
      </Text>
      {parentPlatforms?.results.map((parent) => (
        <Box key={parent.id}>
          <Button
            variant="ghost"
            width="100%"
            justifyContent="space-between"
            onClick={() => setExpandedParent(
              expandedParent === parent.id ? null : parent.id
            )}
            mb={2}
            _hover={{ bg: `${platformColors[parent.slug] || 'gray.500'}20` }}
          >
            <HStack>
              <Icon
                as={expandedParent === parent.id ? FaChevronDown : FaChevronRight}
                boxSize={4}
              />
              <Text>{parent.name}</Text>
            </HStack>
          </Button>
          <Collapse in={expandedParent === parent.id}>
            <VStack align="stretch" pl={6} spacing={2}>
              {parent.platforms.map((platform) => (
                <HStack
                  key={platform.id}
                  p={2}
                  borderRadius="md"
                  cursor="pointer"
                  transition="all 0.2s"
                  bg={selectedPlatformId === platform.id ? 
                    `${platformColors[parent.slug] || 'gray.500'}30` : 
                    'transparent'
                  }
                  _hover={{
                    bg: `${platformColors[parent.slug] || 'gray.500'}20`
                  }}
                  onClick={() => setSelectedPlatformId(platform.id)}
                >
                  {platform.image && (
                    <Image
                      src={platform.image}
                      boxSize="20px"
                      objectFit="contain"
                    />
                  )}
                  <Tooltip 
                    label={`${platform.games_count.toLocaleString()} games`}
                    placement="right"
                  >
                    <Text
                      fontSize="sm"
                      fontWeight={selectedPlatformId === platform.id ? "bold" : "normal"}
                      color={selectedPlatformId === platform.id ? 
                        platformColors[parent.slug] || 'gray.500' : 
                        'inherit'
                      }
                    >
                      {platform.name}
                    </Text>
                  </Tooltip>
                </HStack>
              ))}
            </VStack>
          </Collapse>
        </Box>
      ))}
    </VStack>
  );
};

export default PlatformList;