import { Center, Heading } from '@chakra-ui/react'
import comingSoon from '/coming-soon.jpg'

function App() {

  return (
    <Center bgImage={comingSoon} bgSize='cover' width='100%' height='100vh'>
        <Heading bg='white' borderRadius={4} p={3}>
            Looking for something? More content soon to come.
        </Heading>
    </Center>
  )
}

export default App
