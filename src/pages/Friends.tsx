import {VStack} from '@chakra-ui/react';
import {PictureCollectionWithText} from '../components/PictureCollectionWithText.tsx';

import gruno from '../assets/freunde/gruno/gruno_elbe.webp';
import buddelnMitGruno1 from '../assets/freunde/gruno/buddeln_mit_gruno_1.webp';
import buddelnMitGruno2 from '../assets/freunde/gruno/buddeln_mit_gruno_2.webp';

import miro1 from '../assets/freunde/miro/miro1.webp';
import miro2 from '../assets/freunde/miro/miro2.webp';
import miro3 from '../assets/freunde/miro/miro3.webp';


export const Friends = () => {
    return <VStack alignItems='flex-start'>
        <PictureCollectionWithText
            headline='Miro'
            text='Der Hund, der Punta zu uns gebracht hat. Danke Miro, Danke Katha, und vor allem Danke Lene!'
            pictures={[miro1, miro2, miro3]}
        />
        <PictureCollectionWithText
            headline='Gruno'
            text='Ein Riese mit riesen Herz. Nie vergessen für die Gabe seiner Knochendecke. Puntas erster Buddel-Buddy.'
            pictures={[gruno, buddelnMitGruno1, buddelnMitGruno2]}
        />
    </VStack>
}