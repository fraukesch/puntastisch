import comingSoon from '/coming-soon.jpg';
import {Center, Heading} from "@chakra-ui/react";

export const Home = () => (
    <Center
        bgImage={comingSoon}
        bgSize='cover'
        bgPosition={{
            base: '-280px 0',
            sm: '0 0',
        }}
        sx={{
            width: '100%',
            height: 'calc(100vh - 40px)'
        }}
    >
        <Heading bg='white' borderRadius={4} p={3} m={3}>
            Looking for something? More content soon to come.
        </Heading>
    </Center>
)