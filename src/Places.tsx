import {AspectRatio, Box, Heading, VStack, Wrap, WrapItem, Text, Button, Link} from "@chakra-ui/react";
import {useLocation} from "react-router-dom";

export const Places = () => (
    <VStack alignItems='flex-start'>
        <Wrap p={4} m={4} shadow='md' borderWidth='1px' width='calc(100% - 2rem)'>
            <WrapItem width={{
                base: 'calc(100% - 2rem)',
                sm: 'calc(100% - 2rem)',
                md: 'calc(50% - 1rem)'
            }}>
                <Box>
                    <Heading>Rosenthal</Heading>
                    <Text>Buddeln am Herrenberg</Text>
                </Box>
            </WrapItem>
            <WrapItem width={{
                base: 'calc(100% - 2rem)',
                sm: 'calc(100% - 2rem)',
                md: 'calc(50% - 1rem)'
            }}  flexDir='column'>
                <AspectRatio width='100%' ratio={16 / 9}>
                    <iframe
                        src="https://www.openstreetmap.org/export/embed.html?bbox=13.363623619079592%2C52.59593150291951%2C13.417439460754396%2C52.622721380662426&amp;layer=mapnik&amp;marker=52.609328490428375%2C13.390531539916992"
                    ></iframe>
                </AspectRatio>
                <Text>
                    <Link href='https://www.openstreetmap.org/?mlat=52.60933&amp;mlon=13.39053#map=15/52.60933/13.39053'>
                        Größere Karte anzeigen
                    </Link>
                </Text>
            </WrapItem>
        </Wrap>
        <Wrap p={4} m={4} shadow='md' borderWidth='1px' width='calc(100% - 2rem)'>
            <WrapItem flexDir='column'width={{
                base: 'calc(100% - 2rem)',
                sm: 'calc(100% - 2rem)',
                md: 'calc(50% - 1rem)'
            }}>
                <AspectRatio width='100%' ratio={16 / 9}>
                    <iframe
                        src="https://www.openstreetmap.org/export/embed.html?bbox=13.336157798767092%2C52.61099631096721%2C13.389973640441895%2C52.63777697448701&amp;layer=mapnik&amp;marker=52.62438869107126%2C13.363065719604492"
                    ></iframe>
                </AspectRatio>
                <Text>
                    <Link
                        href="https://www.openstreetmap.org/?mlat=52.62439&amp;mlon=13.36307#map=15/52.62439/13.36307">Größere
                        Karte anzeigen</Link>
                </Text>
            </WrapItem>
            <WrapItem width={{
                base: 'calc(100% - 2rem)',
                sm: 'calc(100% - 2rem)',
                md: 'calc(50% - 1rem)'
            }}>
                <Box>
                    <Heading>Tegeler Fließ</Heading>
                    <Text>Erfrischen</Text>
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