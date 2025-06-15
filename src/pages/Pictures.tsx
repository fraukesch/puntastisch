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

import inDenMuscheln1 from '../assets/2015/in_den_muscheln1.webp';
import inDenMuscheln2 from '../assets/2015/in_den_muscheln2.webp';
import kuesteTexel0 from '../assets/2015/kueste_texel0.webp';
import kuesteTexel1 from '../assets/2015/kueste_texel1.webp';
import kuesteTexel2 from '../assets/2015/kueste_texel2.webp';
import kanalNordHolland1 from '../assets/2015/am_kanal_nordholland1.webp';
import kanalNordHolland2 from '../assets/2015/am_kanal_nordholland2.webp';
import kanalNordHolland2a from '../assets/2015/am_kanal_nordholland2a.webp';
import kanalNordHolland3 from '../assets/2015/am_kanal_nordholland3.webp';
import strandNordHolland1 from '../assets/2015/am_strand_nordholland1.webp';
import strandNordHolland2 from '../assets/2015/am_strand_nordholland2.webp';
import strandNordHolland3 from '../assets/2015/am_strand_nordholland3.webp';
import strandNordHolland4 from '../assets/2015/am_strand_nordholland4.webp';
import sommerBerlin1 from '../assets/2015/sommer_in_berlin1.webp';
import sommerBerlin2 from '../assets/2015/sommer_in_berlin2.webp';
import sommerBerlin3 from '../assets/2015/sommer_in_berlin3.webp';
import sommerBerlin4 from '../assets/2015/sommer_in_berlin4.webp';
import saechsischeHoch1 from '../assets/2015/saechsische_schweiz_hoch1.webp';
import saechsischeHoch2 from '../assets/2015/saechsische_schweiz_hoch2.webp';
import saechsischeQuer1 from '../assets/2015/saechsische_schweiz_quer1.webp';
import saechsischeQuer2 from '../assets/2015/saechsische_schweiz_quer2.webp';
import saechsischeQuer3 from '../assets/2015/saechsische_schweiz_quer3.webp';
import saechsischeQuer4 from '../assets/2015/saechsische_schweiz_quer4.webp';
import saechsischeQuer5 from '../assets/2015/saechsische_schweiz_quer5.webp';
import saechsischeQuer6 from '../assets/2015/saechsische_schweiz_quer6.webp';
import saechsischeQuer7 from '../assets/2015/saechsische_schweiz_quer7.webp';

import como1 from '../assets/2016/como1.webp';
import como2 from '../assets/2016/como2.webp';
import sassnitz1 from '../assets/2016/sassnitz1.webp';
import sassnitz2 from '../assets/2016/sassnitz2.webp';
import sassnitz3 from '../assets/2016/sassnitz3.webp';
import trelleborgHoch from '../assets/2016/trelleborg_hoch.webp';
import trelleborgQuer1 from '../assets/2016/trelleborg_quer1.webp';
import trelleborgQuer2 from '../assets/2016/trelleborg_quer2.webp';
import karlskronaToStockholm1 from '../assets/2016/karlskrona_to_stockholm1.webp';
import karlskronaToStockholm2 from '../assets/2016/karlskrona_to_stockholm2.webp';
import karlskronaToStockholm3 from '../assets/2016/karlskrona_to_stockholm3.webp';
import karlskronaToStockholm4 from '../assets/2016/karlskrona_to_stockholm4.webp';
import karlskronaToStockholm5 from '../assets/2016/karlskrona_to_stockholm5.webp';
import karlskronaToStockholm6 from '../assets/2016/karlskrona_to_stockholm6.webp';
import vaenern1 from '../assets/2016/vaenern1.webp';
import vaenern2 from '../assets/2016/vaenern2.webp';
import vaenern3 from '../assets/2016/vaenern3.webp';
import vaenern4 from '../assets/2016/vaenern4.webp';
import vaenern5 from '../assets/2016/vaenern5.webp';
import vaenern6 from '../assets/2016/vaenern6.webp';
import vaenern7 from '../assets/2016/vaenern7.webp';
import vaenern8 from '../assets/2016/vaenern8.webp';
import kaltesGoeteborg1 from '../assets/2016/kaltes_goeteborg1.webp';
import kaltesGoeteborg2 from '../assets/2016/kaltes_goeteborg2.webp';
import oeresundQuer from '../assets/2016/oeresund_quer.webp';
import oeresundHoch1 from '../assets/2016/oeresund_hoch1.webp';
import oeresundHoch2 from '../assets/2016/oeresund_hoch2.webp';

import ardeche1 from '../assets/2017/ardeche1.webp';
import ardeche2 from '../assets/2017/ardeche2.webp';
import bezier from '../assets/2017/bezier.webp';
import blaye1 from '../assets/2017/blaye1.webp';
import blaye2 from '../assets/2017/blaye2.webp';
import blaye3 from '../assets/2017/blaye3.webp';
import carcassonne1 from '../assets/2017/carcassonne1.webp';
import carcassonne2 from '../assets/2017/carcassonne2.webp';
import cevennesHoch1 from '../assets/2017/cevenne_hoch1.webp';
import cevennesHoch2 from '../assets/2017/cevenne_hoch2.webp';
import cevennesQuer1 from '../assets/2017/cevenne_quer1.webp';
import cevennesQuer2 from '../assets/2017/cevenne_quer2.webp';
import collioure1 from '../assets/2017/collioure1.webp';
import collioure2 from '../assets/2017/collioure2.webp';
import collioureHoch from '../assets/2017/collioure_hoch.webp';
import laRochelle from '../assets/2017/la_rochelle.webp';
import loire from '../assets/2017/loire.webp';
import schwarzwald20171 from '../assets/2017/schwarzwald1.webp';
import schwarzwald20172 from '../assets/2017/schwarzwald2.webp';
import schwarzwald2017Hoch from '../assets/2017/schwarzwald_hoch.webp';
import tallmond1 from '../assets/2017/tallmond1.webp';
import tallmond2 from '../assets/2017/tallmond2.webp';
import tallmond3 from '../assets/2017/tallmond3.webp';
import suchbild from '../assets/2017/suchbild.webp';

import bank1 from '../assets/2018/bank1.webp';
import bank2 from '../assets/2018/bank2.webp';
import bialestok1 from '../assets/2018/bialestok1.webp';
import bialestok2 from '../assets/2018/bialestok2.webp';
import bialestok3 from '../assets/2018/bialestok3.webp';
import bialestokHoch1 from '../assets/2018/bialestok_hoch1.webp';
import bialestokHoch2 from '../assets/2018/bialestok_hoch2.webp';
import calibration1 from '../assets/2018/calibration1.webp';
import calibration2 from '../assets/2018/calibration2.webp';
import calibration3 from '../assets/2018/calibration3.webp';
import calibration4 from '../assets/2018/calibration4.webp';
import geldautomatHoch from '../assets/2018/geldautomat_hoch.webp';
import geldautomatQuer from '../assets/2018/geldautomat_quer.webp';
import grinsePunta1 from '../assets/2018/grinse_punta1.webp';
import grinsePunta2 from '../assets/2018/grinse_punta2.webp';
import kopernikus from '../assets/2018/kopernikus.webp';
import masuren1 from '../assets/2018/masuren1.webp';
import masuren2 from '../assets/2018/masuren2.webp';
import masuren3 from '../assets/2018/masuren3.webp';
import masurenHoch1 from '../assets/2018/masuren_hoch1.webp';
import masurenHoch2 from '../assets/2018/masuren_hoch2.webp';
import puck1 from '../assets/2018/puck1.webp';
import puck2 from '../assets/2018/puck2.webp';
import puck3 from '../assets/2018/puck3.webp';
import quatschInPuck1 from '../assets/2018/quatsch_in_puck1.webp';
import quatschInPuck2 from '../assets/2018/quatsch_in_puck2.webp';
import quatschInPuck3 from '../assets/2018/quatsch_in_puck3.webp';
import torun1 from '../assets/2018/torun1.webp';
import torun2 from '../assets/2018/torun2.webp';
import torun3 from '../assets/2018/torun3.webp';
import waldliegen from '../assets/2018/waldliegen.webp';

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

import leckerSchnee from '../assets/2021/lecker_schnee.gif';
import eieiei1 from '../assets/2021/eieiei1.webp';
import eieiei2 from '../assets/2021/eieiei2.webp';
import eieiei3 from '../assets/2021/eieiei3.webp';
import warschau1 from '../assets/2021/warschau1.webp';
import warschau2 from '../assets/2021/warschau2.webp';
import warschau3 from '../assets/2021/warschau3.webp';
import puntaUndPeppa1 from '../assets/2021/punta_und_peppa1.webp';
import puntaUndPeppa2 from '../assets/2021/punta_und_peppa2.webp';
import puntaUndPeppa3 from '../assets/2021/punta_und_peppa3.webp';
import staenderImWeg1 from '../assets/2021/staender_im_weg1.webp';
import staenderImWeg2 from '../assets/2021/staender_im_weg2.webp';
import staenderImWeg3 from '../assets/2021/staender_im_weg3.webp';
import staenderImWeg4 from '../assets/2021/staender_im_weg4.webp';
import staenderImWeg5 from '../assets/2021/staender_im_weg5.webp';
import staenderImWeg6 from '../assets/2021/staender_im_weg6.webp';
import leckerliWettrennen from '../assets/2021/leckerli_wettrennen.gif';
import herzformation1 from '../assets/2021/herzformation1.webp';
import herzformation2 from '../assets/2021/herzformation2.webp';
import herzformation3 from '../assets/2021/herzformation3.webp';
import herzformation4 from '../assets/2021/herzformation4.webp';

import parliament from '../assets/2022/parliament.webp';
import shoppingInDresden from '../assets/2022/shopping_in_dresden.gif';
import ostsee20221 from '../assets/2022/ostsee20221.webp';
import ostsee20222 from '../assets/2022/ostsee20222.webp';
import ostsee20223 from '../assets/2022/ostsee20223.webp';
import ostsee20224 from '../assets/2022/ostsee20224.webp';

import fruehling1 from '../assets/2023/fruehling1.webp';
import fruehling2 from '../assets/2023/fruehling2.webp';
import bodensee1 from '../assets/2023/bodensee1.webp';
import bodensee2 from '../assets/2023/bodensee2.webp';
import bodensee4 from '../assets/2023/bodensee4.webp';
import zeltaufbau1 from '../assets/2023/zeltaufbau1.webp';
import zeltaufbau2 from '../assets/2023/zeltaufbau2.webp';
import zeltaufbau3 from '../assets/2023/zeltaufbau3.webp';
import zeltaufbau4 from '../assets/2023/zeltaufbau4.webp';
import leipzig1 from '../assets/2023/leipzig1.webp';
import leipzig2 from '../assets/2023/leipzig2.webp';
import alpenbusch1 from '../assets/2023/alpenbusch1.webp';
import alpenbusch2 from '../assets/2023/alpenbusch2.webp';
import weihnachtsbaum1 from '../assets/2023/weihnachtsbaum1.webp';
import weihnachtsbaum2 from '../assets/2023/weihnachtsbaum2.webp';
import weihnachtsbaum3 from '../assets/2023/weihnachtsbaum3.webp';
import weihnachtsbaum4 from '../assets/2023/weihnachtsbaum4.webp';
import weihnachtsbaum5 from '../assets/2023/weihnachtsbaum5.webp';
import weihnachtsbaum6 from '../assets/2023/weihnachtsbaum6.webp';
import weihnachtsbaum7 from '../assets/2023/weihnachtsbaum7.webp';
import weihnachtsbaum8 from '../assets/2023/weihnachtsbaum8.webp';
import weihnachtsbaum9 from '../assets/2023/weihnachtsbaum9.webp';
import weihnachtsbaum10 from '../assets/2023/weihnachtsbaum10.webp';
import weihnachtsbaum11 from '../assets/2023/weihnachtsbaum11.webp';

import praxis1 from '../assets/2024/praxis1.webp';
import praxis2 from '../assets/2024/praxis2.webp';
import buschInLeiden1 from '../assets/2024/busch_in_leiden1.webp';
import buschInLeiden2 from '../assets/2024/busch_in_leiden2.webp';
import buschInLeiden3 from '../assets/2024/busch_in_leiden3.webp';
import buschInLeiden4 from '../assets/2024/busch_in_leiden4.webp';
import buschInLeiden5 from '../assets/2024/busch_in_leiden5.webp';
import buschInLeiden6 from '../assets/2024/busch_in_leiden6.webp';
import kabel1 from '../assets/2024/kabel1.webp';
import kabel2 from '../assets/2024/kabel2.webp';
import kabel3 from '../assets/2024/kabel3.webp';
import olympiapark from '../assets/2024/olympiapark.webp';



import {PictureCollection} from '../components/PictureCollection.tsx';


export const Pictures = () => (
    <Tabs colorScheme='black' isLazy isFitted maxW='100%'>
        <TabList overflowX='auto' pb='2px' mt={4}>
            <Tab>2010</Tab>
            <Tab>2011</Tab>
            <Tab>2012</Tab>
            <Tab>2013</Tab>
            <Tab>2014</Tab>
            <Tab>2015</Tab>
            <Tab>2016</Tab>
            <Tab>2017</Tab>
            <Tab>2018</Tab>
            <Tab>2019</Tab>
            <Tab>2020</Tab>
            <Tab>2021</Tab>
            <Tab>2022</Tab>
            <Tab>2023</Tab>
            <Tab>2024</Tab>
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
            {/*2015*/}
            <TabPanel>
                <PictureCollection pictures={[inDenMuscheln1, inDenMuscheln2]} text='Muschelparadies Texel'/>
                <PictureCollection pictures={[kuesteTexel0, kuesteTexel1, kuesteTexel2]} text='Küste Texel'/>
                <PictureCollection
                    pictures={[kanalNordHolland1, kanalNordHolland2, kanalNordHolland2a, kanalNordHolland3]}
                    text='In Nord Holland am Kanal'
                />
                <PictureCollection
                    pictures={[strandNordHolland1, strandNordHolland2, strandNordHolland3, strandNordHolland4]}
                    text='In Nord Holland am Strand'
                />
                <PictureCollection
                    pictures={[sommerBerlin1, sommerBerlin2, sommerBerlin3, sommerBerlin4]}
                    text='Sommer in Berlin'
                />
                <PictureCollection
                    pictures={[saechsischeHoch1, saechsischeHoch2]}
                    text='Sächsische Schweiz - Teil 1'
                />
                <PictureCollection
                    pictures={[
                        saechsischeQuer1,
                        saechsischeQuer2,
                        saechsischeQuer3,
                        saechsischeQuer4,
                        saechsischeQuer5,
                        saechsischeQuer6,
                        saechsischeQuer7
                    ]}
                    text='Sächsische Schweiz - Teil 2'
                />
            </TabPanel>
            {/*2016*/}
            <TabPanel>
                <PictureCollection pictures={[como1, como2]} text='Comer See' />
                <PictureCollection pictures={[sassnitz1, sassnitz2, sassnitz3]} text='Sassnitz' />
                <PictureCollection pictures={[trelleborgHoch]} text='Ankunft bei Trelleborg' />
                <PictureCollection pictures={[trelleborgQuer1, trelleborgQuer2]} text='Morgen bei Trelleborg' />
                <PictureCollection
                    pictures={[
                        karlskronaToStockholm1,
                        karlskronaToStockholm2,
                        karlskronaToStockholm3,
                        karlskronaToStockholm4,
                        karlskronaToStockholm5,
                        karlskronaToStockholm6
                    ]}
                    text='Zwischen Karlskrona und Stockholm'
                />
                <PictureCollection
                    pictures={[
                        vaenern1,
                        vaenern2,
                        vaenern3,
                        vaenern4,
                        vaenern5,
                        vaenern6,
                        vaenern7,
                        vaenern8
                    ]}
                    text='Vänern'
                />
                <PictureCollection pictures={[kaltesGoeteborg1, kaltesGoeteborg2]} text='Kaltes Frühstück bei Göteborg' />
                <PictureCollection pictures={[oeresundQuer]} text='Øresundbrücke - Teil 1' />
                <PictureCollection pictures={[oeresundHoch1, oeresundHoch2]} text='Øresundbrücke - Teil 2' />
            </TabPanel>
            {/*2017*/}
            <TabPanel>
                <PictureCollection pictures={[ardeche1, ardeche2]} text='Achtung, Schwanz in Gefahr!'/>
                <PictureCollection pictures={[cevennesHoch1, cevennesHoch2]} text='Les Cevennes - Teil 1'/>
                <PictureCollection pictures={[cevennesQuer1, cevennesQuer2]} text='Les Cevennes - Teil 2'/>
                <PictureCollection pictures={[bezier]} text='Bummel in Bezier'/>
                <PictureCollection pictures={[collioure1, collioure2]} text='Sonne in Collioure - Teil 1'/>
                <PictureCollection pictures={[collioureHoch]} text='Sonne in Collioure - Teil 2'/>
                <PictureCollection pictures={[suchbild]} text='Wo ist Punta?'/>
                <PictureCollection pictures={[carcassonne1, carcassonne2]} text='Carcassonne'/>
                <PictureCollection pictures={[blaye1, blaye2, blaye3]} text='Festung in Blaye'/>
                <PictureCollection pictures={[tallmond1, tallmond2, tallmond3]} text='Talmont'/>
                <PictureCollection pictures={[laRochelle]} text='La Rochelle'/>
                <PictureCollection pictures={[loire]} text='An der Loire'/>
                <PictureCollection pictures={[schwarzwald20171, schwarzwald20172]} text='Schwarzwald - Immer wieder schön'/>
                <PictureCollection pictures={[schwarzwald2017Hoch]} text='Schwarzwald - Immer wieder schön'/>
            </TabPanel>
            {/*2018*/}
            <TabPanel>
                <PictureCollection pictures={[calibration1, calibration2, calibration3, calibration4]} text='Selbstauslöserkalibration' />
                <PictureCollection pictures={[bank1, bank2]} text='Warten...' />
                <PictureCollection pictures={[geldautomatQuer]} text='Security in Puck - Teil 1' />
                <PictureCollection pictures={[geldautomatHoch]} text='Security in Puck - Teil 2' />
                <PictureCollection pictures={[grinsePunta1, grinsePunta2]} text='Gute Laune vorm Zelt' />
                <PictureCollection pictures={[puck1, puck2, puck3]} text='Puck ganz nüchtern' />
                <PictureCollection pictures={[quatschInPuck1, quatschInPuck2, quatschInPuck3]} text='Quatsch in Puck' />
                <PictureCollection pictures={[masuren1, masuren2, masuren3]} text='Hitze in den Masuren' />
                <PictureCollection pictures={[masurenHoch1, masurenHoch2]} text='Noch mehr Masuren' />
                <PictureCollection pictures={[bialestokHoch1, bialestokHoch2]} text={"Bia\u0142estok - Teil 1"} />
                <PictureCollection pictures={[bialestok1, bialestok2, bialestok3]} text={"Bia\u0142estok - Teil 2"} />
                <PictureCollection pictures={[waldliegen]} text='Irgendwo zwischen Warschau und Torun' />
                <PictureCollection pictures={[kopernikus]} text='Punta und die Touris vorm Kopernikushaus' />
                <PictureCollection pictures={[torun1, torun2, torun3]} text='Torun' />
            </TabPanel>
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
            {/*2021*/}
            <TabPanel>
                <PictureCollection pictures={[eieiei1, eieiei2, eieiei3]} text='Ei mit Schale, echt?'/>
                <PictureCollection pictures={[leckerSchnee]} text='Leckerli!'/>
                <PictureCollection pictures={[
                    staenderImWeg1,
                    staenderImWeg2,
                    staenderImWeg3,
                    staenderImWeg4,
                    staenderImWeg5,
                    staenderImWeg6
                ]} text='Ständer im Weg mit Happy End'/>
                <PictureCollection pictures={[puntaUndPeppa1, puntaUndPeppa2, puntaUndPeppa3]} text='Zwei Damen im Gras'/>
                <PictureCollection pictures={[leckerliWettrennen]} text='Wettrennen'/>
                <PictureCollection pictures={[warschau1, warschau2, warschau3]} text='Vorm Zelt in Warschau'/>
                <PictureCollection
                    pictures={[herzformation1, herzformation2, herzformation3, herzformation4]}
                    text='Herzformation'
                />
            </TabPanel>
            {/*2022*/}
            <TabPanel>
                <PictureCollection pictures={[parliament]} text='London Parliament'/>
                <PictureCollection pictures={[shoppingInDresden]} text='Shopping in Dresden'/>
                <PictureCollection pictures={[ostsee20221, ostsee20222, ostsee20223, ostsee20224]} text='Mal wieder Ostsee'/>
            </TabPanel>
            {/*2023*/}
            <TabPanel>
                <PictureCollection pictures={[fruehling1, fruehling2]} text='Frühling in Berlin'/>
                <PictureCollection pictures={[bodensee1, bodensee2, bodensee4]} text='Entspannen am Bodensee'/>
                <PictureCollection pictures={[alpenbusch1, alpenbusch2]} text='Alpenbusch'/>
                <PictureCollection pictures={[zeltaufbau1, zeltaufbau2, zeltaufbau3, zeltaufbau4]} text='Zeltaufbau mit Punta'/>
                <PictureCollection pictures={[leipzig1, leipzig2]} text='Leipziger Kissen'/>
                <PictureCollection
                    pictures={[
                        weihnachtsbaum1,
                        weihnachtsbaum2,
                        weihnachtsbaum3,
                        weihnachtsbaum4,
                        weihnachtsbaum5,
                        weihnachtsbaum6,
                        weihnachtsbaum7,
                        weihnachtsbaum8,
                        weihnachtsbaum9,
                        weihnachtsbaum10,
                        weihnachtsbaum11,
                    ]}
                    text='Der beste Weihnachtsbaum steht in Meineweh'
                />
            </TabPanel>
            {/*2024*/}
            <TabPanel>
                <PictureCollection pictures={[praxis1, praxis2]} text='Abholen bei St. Wiesner' />
                <PictureCollection
                    pictures={[
                        buschInLeiden1,
                        buschInLeiden2,
                        buschInLeiden3,
                        buschInLeiden4,
                        buschInLeiden5,
                        buschInLeiden6
                    ]}
                    text='Ein Busch in Leiden (NL)'
                />
                <PictureCollection pictures={[kabel1, kabel2, kabel3]} text='Viele Kabel in Leiden' />
                <PictureCollection pictures={[olympiapark]} text='Olympiapark zu Ostern'/>
            </TabPanel>
        </TabPanels>
    </Tabs>
);
