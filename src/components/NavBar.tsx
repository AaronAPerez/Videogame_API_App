import { Button, ButtonGroup, HStack, Image } from "@chakra-ui/react"
import logo from '../assets/logo.webp'
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"
import { Link } from 'react-router-dom';
import { FaGamepad } from 'react-icons/fa';



const NavBar = () => {
  return (
    <>
      <HStack>
        <Image src={logo} boxSize='60px' />
        <Link to="/">
     
            {/* <Image src={NES} boxSize='60px' title='HOME' /> */}
          </Link>
          {/* <Link to="/games">
            GAMES
            {/* <Image src={NESPad} boxSize='60px' title='GAMES' /> 
          </Link> */}
       
            <Button leftIcon={<FaGamepad />}>
              <Link to="/arcade">
                Arcade
              </Link>
            </Button>
        <SearchInput />
        <ColorModeSwitch />
        <ButtonGroup spacing='4'>
          <Button variant='outline' colorScheme='blue' borderRadius={20}>Sign up</Button>
          <Button colorScheme="blue" borderRadius={20}>Log in</Button>
        </ButtonGroup>
        {/* <Avatar src='https://bit.ly/broken-link' /> */}
      </HStack>
    </>
  )
}

export default NavBar