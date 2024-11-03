import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"


const GameCardSkeleton = () => {
  return (
    <>
        <Card >
            <Skeleton height={300} >
                <CardBody>
                    <SkeletonText/>
                </CardBody>
            </Skeleton>
        </Card>
    </>
  )
}

export default GameCardSkeleton