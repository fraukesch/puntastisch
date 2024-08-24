import {AspectRatio, Box, Heading, VStack, Wrap, WrapItem, Text, Button} from "@chakra-ui/react";
import {useLocation} from "react-router-dom";

export const Places = () => (
    <VStack>
        <Wrap>
            <WrapItem>
                <AspectRatio width={300} ratio={16 / 9}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4845.8046220289625!2d13.383870891694544!3d52.607536604500204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a852c5ed869645%3A0x454fff67655b0f2f!2sSchillingweg%2C%2013159%20Berlin!5e0!3m2!1sde!2sde!4v1724522136909!5m2!1sde!2sde"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </AspectRatio>
            </WrapItem>
            <WrapItem>
                <Box>
                    <Heading>Rosenthal</Heading>
                    <Text>Buddeln am Herrenberg</Text>
                </Box>
            </WrapItem>
        </Wrap>
    </VStack>
)

export const PlacesButton = () => {
    const {pathname} = useLocation();
    return (
        <Button
            colorScheme='black'
            variant='outline'
            isActive={pathname === '/orte'}
            _active={{
                color: 'white',
                backgroundColor: 'black'
            }}
        >
            Orte
        </Button>
    );
}