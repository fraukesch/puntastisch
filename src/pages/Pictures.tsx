import {Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import mitUlli1 from '../assets/2010/mit_ulli1.webp';
import mitUlli2 from '../assets/2010/mit_ulli2.webp';
import wiese1 from '../assets/2010/wiese1.webp';
import wiese2 from '../assets/2010/wiese2.webp';
import wiese3 from '../assets/2010/wiese3.webp';
import watschel1 from '../assets/2010/watschel1.webp';
import watschel2 from '../assets/2010/watschel2.webp';
import watschel3 from '../assets/2010/watschel3.webp';
import ostsee1 from '../assets/2010/ostsee1.webp';
import ostsee2 from '../assets/2010/ostsee2.webp';
import ostsee3 from '../assets/2010/ostsee3.webp';
import ostsee4 from '../assets/2010/ostsee4.webp';
import ostsee5 from '../assets/2010/ostsee5.webp';
import ostsee6 from '../assets/2010/ostsee6.webp';
import ostsee7 from '../assets/2010/ostsee7.webp';
import ostsee8 from '../assets/2010/ostsee8.webp';
import ostsee9 from '../assets/2010/ostsee9.webp';
import ostsee10 from '../assets/2010/ostsee10.webp';
import isWas1 from '../assets/2010/iswas1.webp';
import isWas2 from '../assets/2010/iswas2.webp';
import isWas3 from '../assets/2010/iswas3.webp';
import sonne1 from '../assets/2010/sonne1.webp';
import sonne2 from '../assets/2010/sonne2.webp';

import flaez1 from '../assets/2011/flaez1.webp';
import flaez2 from '../assets/2011/flaez2.webp';
import flaez3 from '../assets/2011/flaez3.webp';
import bequem1 from '../assets/2011/bequem1.webp';
import bequem2 from '../assets/2011/bequem2.webp';
import komm1 from '../assets/2011/komm1.webp';
import komm2 from '../assets/2011/komm2.webp';
import komm3 from '../assets/2011/komm3.webp';
import weg1 from '../assets/2011/weg1.webp';
import weg2 from '../assets/2011/weg2.webp';
import weg3 from '../assets/2011/weg3.webp';
import schlammbad1 from '../assets/2011/schlammbad1.webp';
import schlammbad2 from '../assets/2011/schlammbad2.webp';
import maeusejagd1 from '../assets/2011/maeusejagd1.webp';
import maeusejagd2 from '../assets/2011/maeusejagd2.webp';
import maeusejagd3 from '../assets/2011/maeusejagd3.webp';
import maeusejagd4 from '../assets/2011/maeusejagd4.webp';
import markknochen1 from '../assets/2011/markknochen1.webp';
import markknochen2 from '../assets/2011/markknochen2.webp';
import markknochen3 from '../assets/2011/markknochen3.webp';
import markknochen4 from '../assets/2011/markknochen4.webp';

import olympia1 from '../assets/2012/olympia1.webp';
import olympia2 from '../assets/2012/olympia2.webp';
import oeko1 from '../assets/2012/oeko1.webp';
import oeko2 from '../assets/2012/oeko2.webp';
import baden1 from '../assets/2012/baden1.webp';
import baden2 from '../assets/2012/baden2.webp';
import pundp1 from '../assets/2012/pundp1.webp';
import pundp2 from '../assets/2012/pundp2.webp';
import pundpHoch1 from '../assets/2012/pundp_hoch1.webp';
import pundpHoch2 from '../assets/2012/pundp_hoch2.webp';
import heu1 from '../assets/2012/heu1.webp';
import heu2 from '../assets/2012/heu2.webp';
import wuerzburg1 from '../assets/2012/wuerzburg1.webp';
import wuerzburg2 from '../assets/2012/wuerzburg2.webp';

import panade1 from '../assets/2019/panade1.webp';
import panade2 from '../assets/2019/panade2.webp';
import panade3 from '../assets/2019/panade3.webp';
import panade4 from '../assets/2019/panade4.webp';

import andiUndPuntiQuer1 from '../assets/2020/andi_und_punti_quer1.webp';
import andiUndPuntiQuer2 from '../assets/2020/andi_und_punti_quer2.webp';
import andiUndPuntiQuer3 from '../assets/2020/andi_und_punti_quer3.webp';
import andiUndPuntiQuer4 from '../assets/2020/andi_und_punti_quer4.webp';
import andiUndPuntiQuer5 from '../assets/2020/andi_und_punti_quer5.webp';
import andiUndPuntiHoch1 from '../assets/2020/andi_und_punti_hoch1.webp';
import andiUndPuntiHoch2 from '../assets/2020/andi_und_punti_hoch2.webp';
import andiUndPuntiHoch3 from '../assets/2020/andi_und_punti_hoch3.webp';
import {PictureCollection} from '../components/PictureCollection.tsx';


export const Pictures = () => (
    <Tabs colorScheme='black' isLazy isFitted maxW='100%'>
        <TabList overflowX='auto' pb='2px'>
            <Tab>2010</Tab>
            <Tab>2011</Tab>
            <Tab>2012</Tab>
            <Tab isDisabled={true}>2013</Tab>
            <Tab isDisabled={true}>2014</Tab>
            <Tab isDisabled={true}>2015</Tab>
            <Tab isDisabled={true}>2016</Tab>
            <Tab isDisabled={true}>2017</Tab>
            <Tab isDisabled={true}>2018</Tab>
            <Tab>2019</Tab>
            <Tab>2020</Tab>
            <Tab isDisabled={true}>2021</Tab>
            <Tab isDisabled={true}>2022</Tab>
            <Tab isDisabled={true}>2023</Tab>
            <Tab isDisabled={true}>2024</Tab>
        </TabList>
        <TabPanels>
            {/*2010*/}
            <TabPanel>
                <PictureCollection pictures={[mitUlli1, mitUlli2]} text='Vertrauensbildende Maßnahme'/>
                <PictureCollection pictures={[wiese1, wiese2, wiese3]} text='Wiese!'/>
                <PictureCollection pictures={[watschel1, watschel2, watschel3]} text="Da gab's doch Leckerlis"/>
                <PictureCollection
                    pictures={[ostsee1, ostsee2, ostsee3, ostsee4, ostsee5, ostsee6, ostsee7, ostsee8, ostsee9, ostsee10]}
                    text="Ostsee"
                />
                <PictureCollection pictures={[isWas1, isWas2, isWas3]} text="Is was?"/>
                <PictureCollection pictures={[sonne1, sonne2]} text="Sonne auf dem Pelz"/>
            </TabPanel>
            {/*2011*/}
            <TabPanel>
                <PictureCollection pictures={[flaez1, flaez2, flaez3]} text='Bequemer Oberschenkel'/>
                <PictureCollection pictures={[bequem1, bequem2]} text='Bequemer Schneidersitz'/>
                <PictureCollection pictures={[komm1, komm2, komm3]} text='Humboldthain'/>
                <PictureCollection pictures={[weg1, weg2, weg3]} text="Plötzlich alle im Flughafensee"/>
                <PictureCollection pictures={[schlammbad1, schlammbad2]} text="Schlammbad"/>
                <PictureCollection pictures={[maeusejagd1, maeusejagd2, maeusejagd3, maeusejagd4]} text="Mäusejagd"/>
                <PictureCollection pictures={[markknochen1, markknochen2, markknochen3, markknochen4]} text="Markknochen"/>
            </TabPanel>
            {/*2012*/}
            <TabPanel>
                <PictureCollection pictures={[olympia1, olympia2]} text='Olympiastadion'/>
                <PictureCollection pictures={[oeko1, oeko2]} text='Öko-Frühstück in München'/>
                <PictureCollection pictures={[baden1, baden2]} text='Grunewaldsee'/>
                <PictureCollection pictures={[pundp1, pundp2]} text='Zwei Ps - Teil 1'/>
                <PictureCollection pictures={[pundpHoch1, pundpHoch2]} text='Zwei Ps - Teil 2'/>
                <PictureCollection pictures={[heu1, heu2]} text='Die Nadel im Heuhaufen'/>
                <PictureCollection pictures={[wuerzburg1, wuerzburg2]} text='Endlich ist das Bett in der Sonne'/>
            </TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel>
                <PictureCollection pictures={[panade1, panade2, panade3, panade4]} text='Panade'/>
            </TabPanel>
            <TabPanel>
                <PictureCollection
                    pictures={[
                        andiUndPuntiQuer1,
                        andiUndPuntiQuer2,
                        andiUndPuntiQuer3,
                        andiUndPuntiQuer4,
                        andiUndPuntiQuer5
                    ]}
                    text='Sonnen mit Andi - Teil 1'
                />
                <PictureCollection
                    pictures={[
                        andiUndPuntiHoch1,
                        andiUndPuntiHoch2,
                        andiUndPuntiHoch3
                    ]}
                    text='Sonnen mit Andi - Teil 2'
                />
            </TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
        </TabPanels>
    </Tabs>
);
