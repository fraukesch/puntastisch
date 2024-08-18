import { Box, Center, Heading, Image, Text } from '@chakra-ui/react'
import comingSoon from '/coming-soon.jpg'

function App() {

  return (
    <Center bgImage={comingSoon} bgSize='cover' width='100%' height='100vh'>
        <Box bg='white' borderRadius={4} p={3}>
            <Heading>
                Looking for something? More content soon to come.
            </Heading>
        </Box>
    </Center>
  )
}

export default App
