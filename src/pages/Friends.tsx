import {VStack} from '@chakra-ui/react';
import {PictureCollectionWithText} from '../components/PictureCollectionWithText.tsx';

import oskar from '../assets/freunde/oskar/ossi.webp';

import gruno from '../assets/freunde/gruno/gruno_elbe.webp';
import buddelnMitGruno1 from '../assets/freunde/gruno/buddeln_mit_gruno_1.webp';
import buddelnMitGruno2 from '../assets/freunde/gruno/buddeln_mit_gruno_2.webp';

import miro1 from '../assets/freunde/miro/miro1.webp';
import miro2 from '../assets/freunde/miro/miro2.webp';
import miro3 from '../assets/freunde/miro/miro3.webp';

import decke1 from '../assets/freunde/decken/decken1.webp';
import decke2 from '../assets/freunde/decken/decken2.webp';
import decke3 from '../assets/freunde/decken/decken3.webp';
import decke4 from '../assets/freunde/decken/decken4.webp';

import busch1 from '../assets/freunde/busch/busch1.webp';
import busch2 from '../assets/freunde/busch/busch2.webp';
import busch3 from '../assets/freunde/busch/busch3.webp';
import busch4 from '../assets/freunde/busch/busch4.webp';

import sidebyside1 from '../assets/freunde/karlo/sidebyside1.webp';
import abgeholt from '../assets/freunde/karlo/abgeholt.webp';
import sidebyside2 from '../assets/freunde/karlo/sidebyside2.webp';
import sidebyside3 from '../assets/freunde/karlo/sidebyside3.webp';
import stapel from '../assets/freunde/karlo/stapel.webp';


export const Friends = () => {
    return <VStack alignItems='flex-start'>
        <PictureCollectionWithText
            headline='Miro'
            text='Der Hund, der Punta zu uns gebracht hat. Danke Miro, Danke Katha, und vor allem Danke Lene!'
            pictures={[miro1, miro2, miro3]}
        />
        <PictureCollectionWithText
            headline='Oskar'
            text='Ohne unsere Nachbarn Oskar und Katja hätten wir so manchen schönen Auslauf in Dresden wohl nie entdeckt.'
            pictures={[oskar]}
        />
        <PictureCollectionWithText
            headline='Gruno'
            text='Ein Riese mit riesen Herz. Nie vergessen für die Gabe seiner Knochendecke. Puntas erster Buddel-Buddy.'
            pictures={[gruno, buddelnMitGruno1, buddelnMitGruno2]}
        />
        <PictureCollectionWithText
            headline='Karlo'
            text='Puntas große Liebe. Herzerweichende Kussszenen bei jedem Wiedersehen (auch wenn man sich vorgestern das letzte mal gesehen hat).'
            pictures={[sidebyside1, abgeholt, sidebyside2, sidebyside3, stapel]}
        />
        <PictureCollectionWithText
            headline='Der Busch'
            text='Eigentlich ja alle Büsche, aber dieser hatte es ihr besonders angetan.'
            pictures={[busch1, busch2, busch3, busch4]}
        />
        <PictureCollectionWithText
            headline='Decken'
            text='Vor allem natürlich Grunos Knochendecke, aber es konnte auch mal eine andere sein.'
            pictures={[decke2, decke1, decke3, decke4]}
        />
    </VStack>
}