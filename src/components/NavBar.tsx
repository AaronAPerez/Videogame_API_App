import { HStack, Image} from "@chakra-ui/react"
import logo from '../assets/logo.png'
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"
import { Link } from "react-router-dom"



const NavBar = () => {
  return (
    <>
        <HStack>
          <Link to={'/'}>
            <Image objectFit={'cover'} src={logo} width='80px'/>
          
          </Link>
            <SearchInput />
            <ColorModeSwitch/>
        </HStack>
    </>
  )
}

export default NavBar