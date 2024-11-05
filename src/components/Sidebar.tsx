import {
    Box,
    VStack,
    Icon,
    Text,
    Flex,
    Link,
    Image,
  } from "@chakra-ui/react";
  import { Link as RouterLink, useLocation } from "react-router-dom";
  import { FaHome, FaCompass } from "react-icons/fa";
  import { BiLibrary } from "react-icons/bi";
  import logo from "../assets/logo.webp";
  
  const Sidebar = () => {
    const location = useLocation();

  
    const navItems = [
      { icon: FaHome, label: "Home", path: "/" },
      { icon: FaCompass, label: "Explore", path: "/explore" },
      { icon: BiLibrary, label: "Library", path: "/library" },
    ];
  
    return (
      <Box
        width="240px"
       
        borderRight="1px"
     
        height="100vh"
        position="sticky"
        top="0"
      >
        <VStack spacing={6} align="stretch" height="full">
          <Box p={4}>
            <Image src={logo} alt="Logo" height="40px" />
          </Box>
  
          <VStack spacing={2} align="stretch">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  as={RouterLink}
                  to={item.path}
                  _hover={{ textDecoration: "none" }}
                >
                  <Flex
                    align="center"
                    p={3}
                    mx={3}
                    borderRadius="lg"
                    role="group"
                    cursor="pointer"
               
                  >
                    <Icon
                      as={item.icon}
                      boxSize={5}
                      color={isActive ? "green.400" : "gray.500"}
                      _groupHover={{ color: "green.400" }}
                    />
                    <Text
                      ml={4}
                      fontWeight={isActive ? "bold" : "medium"}
                      color={isActive ? "green.400" : "inherit"}
                      _groupHover={{ color: "green.400" }}
                    >
                      {item.label}
                    </Text>
                  </Flex>
                </Link>
              );
            })}
          </VStack>
  
          <Box flex="1" />
        </VStack>
      </Box>
    );
  };
  
  export default Sidebar;