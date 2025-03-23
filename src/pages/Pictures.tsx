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

import eisigeOstsee1 from '../assets/2013/eisige_ostsee1.webp';
import eisigeOstsee2 from '../assets/2013/eisige_ostsee2.webp';
import egalSonneScheint1 from '../assets/2013/egal_sonne_scheint1.webp';
import egalSonneScheint2 from '../assets/2013/egal_sonne_scheint2.webp';
import egalSonneScheint3 from '../assets/2013/egal_sonne_scheint3.webp';
import balance1 from '../assets/2013/balance1.webp';
import balance2 from '../assets/2013/balance2.webp';
import ostseeQuer1 from '../assets/2013/ostsee_quer1.webp';
import ostseeQuer2 from '../assets/2013/ostsee_quer2.webp';
import ostseeQuer3 from '../assets/2013/ostsee_quer3.webp';
import ostseeQuer4 from '../assets/2013/ostsee_quer4.webp';
import ostseeQuer5 from '../assets/2013/ostsee_quer5.webp';
import erstBadenDannBuddeln1 from '../assets/2013/erst_baden_dann_buddeln1.webp';
import erstBadenDannBuddeln2 from '../assets/2013/erst_baden_dann_buddeln2.webp';
import erstBadenDannBuddeln3 from '../assets/2013/erst_baden_dann_buddeln3.webp';
import erstBadenDannBuddeln4 from '../assets/2013/erst_baden_dann_buddeln4.webp';
import erstBadenDannBuddeln5 from '../assets/2013/erst_baden_dann_buddeln5.webp';
import erstBadenDannBuddeln6 from '../assets/2013/erst_baden_dann_buddeln6.webp';
import erstBadenDannBuddeln7 from '../assets/2013/erst_baden_dann_buddeln7.webp';
import erstBadenDannBuddeln8 from '../assets/2013/erst_baden_dann_buddeln8.webp';
import wiese20131 from '../assets/2013/wiese1.webp';
import wiese20132 from '../assets/2013/wiese2.webp';
import wiese20133 from '../assets/2013/wiese3.webp';
import deckenfight1 from '../assets/2013/deckenfight1.webp';
import deckenfight2 from '../assets/2013/deckenfight2.webp';
import deckenfight3 from '../assets/2013/deckenfight3.webp';

import vonOben1 from '../assets/2014/von_oben1.webp';
import vonOben2 from '../assets/2014/von_oben2.webp';
import vonOben3 from '../assets/2014/von_oben3.webp';
import vonOben4 from '../assets/2014/von_oben4.webp';
import schwarzwald1 from '../assets/2014/schwarzwald1.webp';
import schwarzwald2 from '../assets/2014/schwarzwald2.webp';
import schwarzwald3 from '../assets/2014/schwarzwald3.webp';
import schwarzwald4 from '../assets/2014/schwarzwald4.webp';
import wieseUndWald1 from '../assets/2014/wiese_und_wald1.webp';
import wieseUndWald2 from '../assets/2014/wiese_und_wald2.webp';
import wieseUndWald3 from '../assets/2014/wiese_und_wald3.webp';
import wieseUndWald4 from '../assets/2014/wiese_und_wald4.webp';
import wieseUndWald5 from '../assets/2014/wiese_und_wald5.webp';
import wieseUndWald6 from '../assets/2014/wiese_und_wald6.webp';
import wieseUndWald7 from '../assets/2014/wiese_und_wald7.webp';
import wieseUndWald8 from '../assets/2014/wiese_und_wald8.webp';
import wieseUndWald9 from '../assets/2014/wiese_und_wald9.webp';

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
            <Tab>2013</Tab>
            <Tab>2014</Tab>
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
                <PictureCollection pictures={[markknochen1, markknochen2, markknochen3, markknochen4]} text="Markknochenerschöpfung"/>
            </TabPanel>
            {/*2012*/}
            <TabPanel>
                <PictureCollection pictures={[olympia1, olympia2]} text='Olympiastadion'/>
                <PictureCollection pictures={[oeko1, oeko2]} text='Öko-Frühstück in München'/>
                <PictureCollection pictures={[baden1, baden2]} text='Grunewaldsee'/>
                <PictureCollection pictures={[pundp1, pundp2]} text='Zwei Ps im Wald - Teil 1'/>
                <PictureCollection pictures={[pundpHoch1, pundpHoch2]} text='Zwei Ps im Wald - Teil 2'/>
                <PictureCollection pictures={[heu1, heu2]} text='Die Nadel im Heuhaufen'/>
                <PictureCollection pictures={[wuerzburg1, wuerzburg2]} text='Endlich ist das Bett in der Sonne'/>
            </TabPanel>
            {/*2013*/}
            <TabPanel>
                <PictureCollection pictures={[eisigeOstsee1, eisigeOstsee2]} text='Eisige Ostsee 1'/>
                <PictureCollection pictures={[egalSonneScheint1, egalSonneScheint2, egalSonneScheint3]} text='Eisige Ostsee 2'/>
                <PictureCollection pictures={[balance1, balance2]} text='Eisige Ostsee 3'/>
                <PictureCollection pictures={[ostseeQuer1, ostseeQuer2, ostseeQuer3, ostseeQuer4, ostseeQuer5]} text='Eisige Ostsee 4'/>
                <PictureCollection
                    pictures={[
                        erstBadenDannBuddeln1,
                        erstBadenDannBuddeln2,
                        erstBadenDannBuddeln3,
                        erstBadenDannBuddeln4,
                        erstBadenDannBuddeln5,
                        erstBadenDannBuddeln6,
                        erstBadenDannBuddeln7,
                        erstBadenDannBuddeln8
                    ]}
                   text='Erst baden, dann buddeln'/>
                <PictureCollection pictures={[wiese20131, wiese20132, wiese20133]} text='Streichelgras'/>
                <PictureCollection pictures={[deckenfight1, deckenfight2, deckenfight3]} text='Deckenfight in Belgien'/>
            </TabPanel>
            {/*2014*/}
            <TabPanel>
                <PictureCollection
                    pictures={[schwarzwald1, schwarzwald2, schwarzwald3, schwarzwald4]}
                    text='Schwarzwald'
                />
                <PictureCollection
                    pictures={[vonOben1, vonOben2, vonOben3, vonOben4]}
                    text='Schauinsland'
                />
                <PictureCollection
                    pictures={[wieseUndWald5, wieseUndWald6, wieseUndWald7, wieseUndWald8, wieseUndWald9]}
                    text='Wiese und Wald - Teil 1'
                />
                <PictureCollection
                    pictures={[wieseUndWald1, wieseUndWald2, wieseUndWald3, wieseUndWald4]}
                    text='Wiese und Wald - Teil 2'
                />
            </TabPanel>
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
