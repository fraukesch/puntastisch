import {AspectRatio, Box, Heading, VStack, Wrap, WrapItem, Text, Link} from "@chakra-ui/react";

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
        mapFirst?: boolean
    }) => {
    const map = (
        <WrapItem
            width={{
                base: '100%',
                sm: '100%',
                md: 'calc(50% - 0.25rem)'
            }}
            order={{
                base: 1,
                sm: 1,
                md: mapFirst ? 1 : 2,
            }}
            flexDir='column'>
            <AspectRatio width='100%' ratio={16 / 9}>
                <iframe
                    src={openMapLink}
                ></iframe>
            </AspectRatio>
            <Text fontSize="small" color="steelblue">
                <Link href={openMapEnlargeLink}>
                    Größere Karte anzeigen
                </Link>
            </Text>
        </WrapItem>
    );
    const textBlock = (
        <WrapItem
            width={{
                base: '100%',
                sm: '100%',
                md: 'calc(50% - 0.25rem)'
            }}
            order={{
                base: 2,
                sm: 2,
                md: mapFirst ? 2 : 1,
            }}
        >
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
        <Place
            openMapLink="https://www.openstreetmap.org/export/embed.html?bbox=13.412890434265138%2C52.61670290380326%2C13.426837921142578%2C52.63973017532399&amp;layer=mapnik&amp;marker=52.62821805418959%2C13.419864177703857"
            openMapEnlargeLink="https://www.openstreetmap.org/?mlat=52.62822&amp;mlon=13.41986#map=15/52.62822/13.41986"
            headline="Arkenberge"
            text="Pause mit den besten Freunden"
        />
        <Place
            openMapLink="https://www.openstreetmap.org/export/embed.html?bbox=13.25723648071289%2C52.60612296947428%2C13.271183967590334%2C52.629155806326054&amp;layer=mapnik&amp;marker=52.617639%2C13.264193999999975"
            openMapEnlargeLink="https://www.openstreetmap.org/?mlat=52.61764&amp;mlon=13.26419#map=15/52.61764/13.26419"
            headline="Eichhörnchenweg"
            text="Hier noch schnell die Abkürzung nehmen?"
            mapFirst={true}
        />
        <Place
            openMapLink="https://www.openstreetmap.org/export/embed.html?bbox=13.195095062255861%2C52.491142767170736%2C13.209042549133303%2C52.514236036066244&amp;layer=mapnik&amp;marker=52.502694%2C13.202083000000016"
            openMapEnlargeLink="https://www.openstreetmap.org/?mlat=52.50269&amp;mlon=13.20208#map=15/52.50269/13.20208"
            headline="Pichelswerder"
            text="Plaschbecken"
        />
        <Place
            openMapLink="https://www.openstreetmap.org/export/embed.html?bbox=11.067180633544922%2C50.97523739490943%2C11.081128120422365%2C50.99911862250631&amp;layer=mapnik&amp;marker=50.987167%2C11.074166999999989"
            openMapEnlargeLink="https://www.openstreetmap.org/?mlat=50.98717&amp;mlon=11.07417#map=15/50.98717/11.07417"
            headline="Ringelberg"
            text="Auf der Durchreise und zwischen den Jahren über's Feld"
            mapFirst={true}
        />
        <Place
            openMapLink="https://www.openstreetmap.org/export/embed.html?bbox=13.67750644683838%2C51.06723678308614%2C13.691453933715822%2C51.09107066052949&amp;layer=mapnik&amp;marker=51.079167%2C13.684472000000028"
            openMapEnlargeLink="https://www.openstreetmap.org/?mlat=51.07917&amp;mlon=13.68447#map=15/51.07917/13.68447"
            headline="Flutrinne"
            text="Einmal rund um Übigau"
        />
    </VStack>
)