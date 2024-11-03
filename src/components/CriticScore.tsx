import { Badge } from "@chakra-ui/react";

interface Props {
    score: number;
}

const CriticScore = ({score}:Props) => {

    const color = score > 75 ? 'green' : score > 60 ? 'yellow': '';
  return (
    <>
    <Badge colorScheme={color} padding={2} borderRadius={35} fontSize={15}>
        {score}
    </Badge>
    
    </>
  )
}

export default CriticScore