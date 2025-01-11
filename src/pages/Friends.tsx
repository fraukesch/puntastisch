import {VStack} from '@chakra-ui/react';
import {PictureCollectionWithText} from './components/PictureCollectionWithText.tsx';

import gruno from './assets/freunde/gruno/gruno_elbe.webp';
import buddelnMitGruno1 from './assets/freunde/gruno/buddeln_mit_gruno_1.webp';
import buddelnMitGruno2 from './assets/freunde/gruno/buddeln_mit_gruno_2.webp';


export const Friends = () => {
    return <VStack alignItems='flex-start'>
        <PictureCollectionWithText
            headline='Gruno'
            text='Ein Riese mit riesen Herz. Nie vergessen für die Gabe seiner Knochendecke. Puntas erster Buddel-Buddy.'
            pictures={[gruno, buddelnMitGruno1, buddelnMitGruno2]}
        />
    </VStack>
}