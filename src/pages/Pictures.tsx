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

import komm1 from '../assets/2011/komm1.webp';
import komm2 from '../assets/2011/komm2.webp';
import komm3 from '../assets/2011/komm3.webp';
import weg1 from '../assets/2011/weg1.webp';
import weg2 from '../assets/2011/weg2.webp';
import weg3 from '../assets/2011/weg3.webp';

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
            <Tab isDisabled={true}>2012</Tab>
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
            <TabPanel>
                <PictureCollection pictures={[mitUlli1, mitUlli2]} text='Vertrauensbildende Maßnahme'/>
                <PictureCollection pictures={[wiese1, wiese2, wiese3]} text='Wiese!'/>
                <PictureCollection pictures={[watschel1, watschel2, watschel3]} text="Da gab's doch Leckerlis"/>
                <PictureCollection
                    pictures={[ostsee1, ostsee2, ostsee3, ostsee4, ostsee5, ostsee6, ostsee7, ostsee8, ostsee9, ostsee10]}
                    text="Ostsee"
                />
            </TabPanel>
            <TabPanel>
                <PictureCollection pictures={[komm1, komm2, komm3]} text='Humboldthain'/>
                <PictureCollection pictures={[weg1, weg2, weg3]} text="Plötzlich alle im Flughafensee"/>
            </TabPanel>
            <TabPanel></TabPanel>
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
