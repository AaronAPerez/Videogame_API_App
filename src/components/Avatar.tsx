import { Avatar, Circle, Float } from "@chakra-ui/react"

const Avatar = () => {
  return (
    <Avatar colorPalette="green" variant="subtle">
      <Avatar.Fallback>DA</Avatar.Fallback>
      <Float placement="bottom-end" offsetX="1" offsetY="1">
        <Circle
          bg="green.500"
          size="8px"
          outline="0.2em solid"
          outlineColor="bg"
        />
      </Float>
    </Avatar>
  )
}
