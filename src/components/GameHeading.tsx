import { Heading } from "@chakra-ui/react"
import useGenre from "../hooks/useGenre"
import usePlatform from "../hooks/usePlatform"
import useGameQuery from "../store"



const GameHeading = () => {

    //Games
    //Action Games
    //Xbox Games    
    //Xbox Action Games

    const genreId = useGameQuery( s => s.gameQuery.genreId);
    const genre = useGenre(genreId);
    
    const platformId = useGameQuery(s => s.gameQuery.platformId);
    const platform = usePlatform(platformId)
   


    
    const heading = `${platform?.name || ''} ${genre?.name || ''} Games`

  return (
  <>
    <Heading marginY={3} fontSize={'h1'}>
    {heading}
    </Heading>
  </>
  )
}

export default GameHeading