import {AspectRatio, Box, Heading, VStack, Wrap, WrapItem, Text, Button, Link} from "@chakra-ui/react";
import {useLocation} from "react-router-dom";

const Place = (
    {
        openMapLink,
        openMapEnlargeLink,
        headline,
        text,
        mapFirst = false
    }: {
        openMapLink: string,
        openMapEnlargeLink: string,
        headline: string,
        text: string,
        mapFirst: boolean
    }) => {
    const map = (
        <WrapItem width={{
            base: 'calc(100% - 2rem)',
            sm: 'calc(100% - 2rem)',
            md: 'calc(50% - 1rem)'
        }}  flexDir='column'>
            <AspectRatio width='100%' ratio={16 / 9}>
                <iframe
                    src={openMapLink}
                ></iframe>
            </AspectRatio>
            <Text>
                <Link href={openMapEnlargeLink}>
                    Größere Karte anzeigen
                </Link>
            </Text>
        </WrapItem>
    );
    const textBlock = (
        <WrapItem width={{
            base: 'calc(100% - 2rem)',
            sm: 'calc(100% - 2rem)',
            md: 'calc(50% - 1rem)'
        }}>
            <Box>
                <Heading>{headline}</Heading>
                <Text>{text}</Text>
            </Box>
        </WrapItem>
    );
    return (
        <Wrap p={4} m={4} shadow='md' borderWidth='1px' width='calc(100% - 2rem)'>
            {mapFirst ? map : textBlock}
            {mapFirst ? textBlock : map}
        </Wrap>
    )
}

export const Places = () => (
    <VStack alignItems='flex-start'>
        <Place
            openMapLink="https://www.openstreetmap.org/export/embed.html?bbox=13.363623619079592%2C52.59593150291951%2C13.417439460754396%2C52.622721380662426&amp;layer=mapnik&amp;marker=52.609328490428375%2C13.390531539916992"
            openMapEnlargeLink="https://www.openstreetmap.org/?mlat=52.60933&amp;mlon=13.39053#map=15/52.60933/13.39053"
            headline="Rosenthal"
            text="Buddeln am Herrenberg"
        />
        <Place
            openMapLink="https://www.openstreetmap.org/export/embed.html?bbox=13.336157798767092%2C52.61099631096721%2C13.389973640441895%2C52.63777697448701&amp;layer=mapnik&amp;marker=52.62438869107126%2C13.363065719604492"
            openMapEnlargeLink="https://www.openstreetmap.org/?mlat=52.62439&amp;mlon=13.36307#map=15/52.62439/13.36307"
            headline="Tegeler Fließ"
            text="Erfrischen"
            mapFirst={true}
        />
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