import {
  Box,
  Flex,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { FaSun, FaMoon, FaSearch } from "react-icons/fa";
import Sidebar from "../components/Sidebar";
import MiniPlayer from "../components/MiniPlayer";
import SearchOverlay from "../components/SearchOverlay";
import CategoryChips from "../components/CategoryChips";
import useGameDrawer from "../store/useGameDrawer";

const Layout = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen: isSearchOpen, onOpen: onSearchOpen, onClose: onSearchClose } = useDisclosure();
  const bg = useColorModeValue("gray.50", "gray.900");
  const gameId = useGameDrawer((s) => s.gameId);

  return (
    <Flex height="100vh" bg={bg}>
      <Sidebar />
      <Box flex="1" overflow="auto" position="relative">
        <Flex
          position="sticky"
          top={0}
          zIndex={10}
          bg={useColorModeValue("whiteAlpha.800", "blackAlpha.800")}
          backdropFilter="blur(10px)"
          p={4}
          alignItems="center"
          justifyContent="space-between"
          borderBottom="1px"
          borderColor={useColorModeValue("gray.200", "gray.700")}
        >
          <CategoryChips />
          
          <Flex gap={2}>
            <IconButton
              aria-label="Search"
              icon={<FaSearch />}
              onClick={onSearchOpen}
              variant="ghost"
            />
            <IconButton
              aria-label="Toggle color mode"
              icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
              onClick={toggleColorMode}
              variant="ghost"
            />
          </Flex>
        </Flex>

        <Box p={4} pb={24}>
          <Outlet />
        </Box>

        <MiniPlayer gameId={gameId} />
        <SearchOverlay isOpen={isSearchOpen} onClose={onSearchClose} />
      </Box>
    </Flex>
  );
};

export default Layout;