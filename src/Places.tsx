import {Box, Heading, VStack, Wrap, WrapItem, Text} from "@chakra-ui/react";
import pichelswerder1 from './assets/orte/pichelswerder1.webp';
import pichelswerder2 from './assets/orte/pichelswerder2.webp';
import ringelberg1 from './assets/orte/ringelberg1.webp';
import ringelberg2 from './assets/orte/ringelberg2.webp';
import arkenberge1 from './assets/orte/arkenberge1.webp';
import arkenberge2 from './assets/orte/arkenberge2.webp';
import flutrinne1 from './assets/orte/flutrinne1.webp';
import flutrinne2 from './assets/orte/flutrinne2.webp';
import eichhoernchen2 from './assets/orte/eichhoernchen2.webp';
import rosenthal from './assets/orte/rosenthal.webm';
import {PictureCollection} from './Pictures.tsx';
const Place = (
    {
        headline,
        text,
        pictures = [],
        picFirst = false,
        video
    }: {
        headline: string,
        text: string,
        pictures?: string[],
        picFirst?: boolean,
        video?: string
    }) => {
    // console.log(pictures);
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
                md: picFirst ? 1 : 2,
            }}
            flexDir='column'>
            {
                video ?
                    <video controls>
                        <source src={video} type='video/webm'/>
                    </video> :
                    !pictures.length ? "Hier fehlt noch ein Bild" : <PictureCollection pictures={pictures} withMaxW={false}/>
            }
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
                md: picFirst ? 2 : 1,
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
            {picFirst ? map : textBlock}
            {picFirst ? textBlock : map}
        </Wrap>
    )
}

export const Places = () => (
    <VStack alignItems='flex-start'>
        <iframe width="100%" height="400px" allowFullScreen allow="geolocation"
                src="//umap.openstreetmap.de/de/map/puntas-orte_74678?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&editMode=disabled&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=none&captionBar=false&captionMenus=true"></iframe>
        <Text
            fontStyle='italic'
            textAlign='center'
            width='100%'
            p={4}
            marginBottom={2}
        >
            Orte, an denen Punta immer sein und dennoch immer fehlen wird.
        </Text>
        <Place
            headline="Rosenthal"
            text="Buddeln am Herrenberg"
            video={rosenthal}
        />
        <Place
            headline="Tegeler Fließ"
            text="Erfrischen"
            picFirst={true}
        />
        <Place
            headline="Arkenberge"
            text="Pause mit den besten Freunden"
            pictures={[arkenberge1, arkenberge2]}
        />
        <Place
            headline="Eichhörnchenweg"
            text="Hier noch schnell die Abkürzung nehmen?"
            picFirst={true}
            pictures={[eichhoernchen2]}
        />
        <Place
            headline="Pichelswerder"
            text="Planschbecken"
            pictures={[pichelswerder1, pichelswerder2]}
        />
        <Place
            headline="Ringelberg"
            text="Auf der Durchreise und zwischen den Jahren über's Feld"
            picFirst={true}
            pictures={[ringelberg1, ringelberg2]}
        />
        <Place
            headline="Flutrinne"
            text="Einmal rund um Übigau"
            pictures={[flutrinne1, flutrinne2]}
        />
    </VStack>
)
