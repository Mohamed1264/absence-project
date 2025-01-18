import { HStack, Text } from "@chakra-ui/react"
import { Avatar } from "./components/ui/avatar"

export default function ProfileAvatar  ()  {
    const user = 
  {
    id: "1",
    name: "John Mason",
    
  }
  return (
    
      
        <HStack  gap="2" >
            <Avatar variant="solid" name={user.name} colorPalette='teal'/>
            <Text fontWeight="medium" mt='2'>{user.name}</Text>
        </HStack>
    
    
  )
}






 

