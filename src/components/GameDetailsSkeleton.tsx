import { SimpleGrid, GridItem, Skeleton, SkeletonText, Box, VStack } from "@chakra-ui/react";

const GameDetailsSkeleton = () => {
  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={5} padding={5}>
      <GridItem>
        <VStack align="stretch" spacing={4}>
          <Skeleton height="30px" width="200px" />
          <SkeletonText noOfLines={6} spacing={4} skeletonHeight="20px" />
          <Box padding={5}>
            <SimpleGrid columns={2} spacing={5}>
              <VStack align="stretch">
                <Skeleton height="20px" width="100px" />
                <SkeletonText noOfLines={3} spacing={2} />
              </VStack>
              <VStack align="stretch">
                <Skeleton height="20px" width="100px" />
                <SkeletonText noOfLines={3} spacing={2} />
              </VStack>
            </SimpleGrid>
          </Box>
        </VStack>
      </GridItem>
      <GridItem>
        <VStack align="stretch" spacing={6}>
          <Skeleton height="300px" />
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
            <Skeleton height="200px" />
            <Skeleton height="200px" />
          </SimpleGrid>
        </VStack>
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailsSkeleton;