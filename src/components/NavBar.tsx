import { Box, Button, ButtonGroup, HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.png';
import SearchInput from "./SearchInput"
import { Link } from 'react-router-dom';
// import { FaGamepad } from 'react-icons/fa';
import NES from '../assets/Nes-Pad.512.png'
import { GoSun } from "react-icons/go";


const NavBar = () => {
  return (
    <>
      <HStack>
        <Image src={logo} boxSize='5rem' />
        <Link to="/">
     
            {/* <Image src={NES} boxSize='60px' title='HOME' /> */}
          </Link>
   
       
        
              
            

            {/* <Button leftIcon={<FaGamepad fontSize={20}/>}> */}

            <Link to="/arcade" title="Arcade"> 
            <Image src={NES} width={'4.5rem'} title='GAMES'/> 
              </Link>
          
        <SearchInput />
        {/* <ColorModeSwitch /> */}
        <Box padding={2}>
        <GoSun size={20}/>
      </Box>
        
        <ButtonGroup spacing='4'>
          <Link to="/login">

          <Button variant='outline' colorScheme='blue' borderRadius={20}>
            Sign up
            </Button>
            </Link>
          <Link to="/login">
          <Button colorScheme="blue" borderRadius={20}>
            Log in
            </Button>
            </Link>
        </ButtonGroup>
        {/* <Avatar src='https://bit.ly/broken-link' /> */}
      </HStack>
    </>
  )
}

export default NavBar