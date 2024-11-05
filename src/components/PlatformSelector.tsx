import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BiSolidChevronsDown } from "react-icons/bi";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";
import usePlatform from "../hooks/usePlatform";


const PlatformSelector = () => {

   const {data,error} = usePlatforms()

   const selectedPlatformId = useGameQueryStore(s => s.gameQuery.platformId );
   const setSelectedPlatformId = useGameQueryStore(s => s.setPlatformId);

 const selectedPlatform = usePlatform(selectedPlatformId)

   if(error) return null;
  return (
   <>
    <Menu>
        <MenuButton as={Button} rightIcon={<BiSolidChevronsDown/>}>{selectedPlatform?.name || 'Platform'}</MenuButton>
       <MenuList>
            {data?.results.map(platform => <MenuItem onClick={()=>setSelectedPlatformId(platform.id)} key={platform.id}>{platform.name}</MenuItem>)}
       </MenuList>
    </Menu>
   </>
  )
}

export default PlatformSelector