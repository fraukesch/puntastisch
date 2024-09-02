import comingSoon from '/coming-soon.jpg';
import {Center, Heading} from "@chakra-ui/react";

export const Home = () => (
    <Center
        bgImage={comingSoon}
        bgSize='cover'
        bgPosition={{
            base: '-150px 0',
            sm: '-100px 0',
            md: '0 0',
        }}
        sx={{
            width: '100%',
            height: 'calc(100vh - 40px - 1rem)' // 40px height of buttons, 1rem margin of button row
        }}
    >
        <Heading bg='white' borderRadius={4} p={3} m={3}>
            Looking for something? More content soon to come.
        </Heading>
    </Center>
)