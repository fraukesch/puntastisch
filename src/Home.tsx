import comingSoon from '/coming-soon.jpg';
import {Center, Heading} from "@chakra-ui/react";

export const Home = () => (
    <Center
        bgImage={comingSoon}
        bgSize='cover'
        bgPosition={{
            base: '-150px 0',
            sm: '0 0',
        }}
        width='100%'
        height='100vh'
    >
        <Heading bg='white' borderRadius={4} p={3} m={3}>
            Looking for something? More content soon to come.
        </Heading>
    </Center>
)