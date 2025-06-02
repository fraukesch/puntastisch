import {Text, VStack} from "@chakra-ui/react";
import pichelswerder1 from '../assets/orte/pichelswerder1.webp';
import pichelswerder2 from '../assets/orte/pichelswerder2.webp';
import ringelberg1 from '../assets/orte/ringelberg1.webp';
import ringelberg2 from '../assets/orte/ringelberg2.webp';
import arkenberge1 from '../assets/orte/arkenberge1.webp';
import arkenberge2 from '../assets/orte/arkenberge2.webp';
import fliess1 from '../assets/orte/fliess1.webp';
import fliess2 from '../assets/orte/fliess2.webp';
import fliess3 from '../assets/orte/fliess3.webp';
import flutrinne1 from '../assets/orte/flutrinne1.webp';
import flutrinne2 from '../assets/orte/flutrinne2.webp';
import eichhoernchen2 from '../assets/orte/eichhoernchen2.webp';
import rosenthal from '../assets/orte/rosenthal.webm';
import {PictureCollectionWithText} from '../components/PictureCollectionWithText.tsx';

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
        <PictureCollectionWithText
            headline="Rosenthal"
            text="Buddeln am Herrenberg"
            video={rosenthal}
        />
        <PictureCollectionWithText
            headline="Tegeler Fließ"
            text="Erfrischen"
            picFirst={true}
            pictures={[fliess1, fliess2, fliess3]}
        />
        <PictureCollectionWithText
            headline="Arkenberge"
            text="Pause mit den besten Freunden"
            pictures={[arkenberge1, arkenberge2]}
        />
        <PictureCollectionWithText
            headline="Eichhörnchenweg"
            text="Hier noch schnell die Abkürzung nehmen?"
            picFirst={true}
            pictures={[eichhoernchen2]}
        />
        <PictureCollectionWithText
            headline="Pichelswerder"
            text="Planschbecken"
            pictures={[pichelswerder1, pichelswerder2]}
        />
        <PictureCollectionWithText
            headline="Ringelberg"
            text="Auf der Durchreise und zwischen den Jahren über's Feld"
            picFirst={true}
            pictures={[ringelberg1, ringelberg2]}
        />
        <PictureCollectionWithText
            headline="Flutrinne"
            text="Einmal rund um Übigau"
            pictures={[flutrinne1, flutrinne2]}
        />
    </VStack>
)
