import {
    TabList,
    TabPanels,
    TabPanel,
    Tab,
    Tabs,
    SlideFade,
    Image,
    Box,
    Heading,
    IconButton
} from "@chakra-ui/react";
import {ChevronLeftIcon, ChevronRightIcon} from '@chakra-ui/icons'

import mitUlli1 from './assets/2010/mit_ulli1.webp';
import mitUlli2 from './assets/2010/mit_ulli2.webp';
import wiese1 from './assets/2010/wiese1.webp';
import wiese2 from './assets/2010/wiese2.webp';
import wiese3 from './assets/2010/wiese3.webp';
import watschel1 from './assets/2010/watschel1.webp';
import watschel2 from './assets/2010/watschel2.webp';
import watschel3 from './assets/2010/watschel3.webp';

import panade1 from './assets/2019/panade1.webp';
import panade2 from './assets/2019/panade2.webp';
import panade3 from './assets/2019/panade3.webp';
import panade4 from './assets/2019/panade4.webp';

import {useState} from 'react';

const PictureCollection = ({pictures, text}: {pictures: string[], text: string}) => {
    const [activeIndex, setIndex] = useState(0);
    return (
        <Box position='relative' maxW={400} mb={5}>
            <Heading fontSize='2xl' mb={1}>{text}</Heading>
            <IconButton
                colorScheme='blackAlpha'
                onClick={() => setIndex(activeIndex - 1)}
                isDisabled={activeIndex === 0}
                position='absolute'
                left={0}
                top={'50%'}
                icon={<ChevronLeftIcon/>}
                aria-label='back'
            />
            <IconButton
                colorScheme='blackAlpha'
                onClick={() => setIndex(activeIndex + 1)}
                isDisabled={activeIndex === pictures.length - 1}
                position='absolute'
                right={0}
                top={'50%'}
                icon={<ChevronRightIcon/>}
                aria-label='forward'
            />
            {pictures.map((picture, index) => (
                <SlideFade offsetX={60} offsetY={0} in={index === activeIndex} key={picture}>
                    <Image
                        src={pictures[activeIndex]}
                        sx={index === activeIndex ? {} : {height: 0}
                    }></Image>
                </SlideFade>
            ))}
        </Box>
    );
};


export const Pictures = () => (
    <Tabs colorScheme='black' isLazy isFitted maxW='100%'>
        <TabList overflowX='auto' h={10}>
            <Tab>2010</Tab>
            <Tab isDisabled={true}>2011</Tab>
            <Tab isDisabled={true}>2012</Tab>
            <Tab isDisabled={true}>2013</Tab>
            <Tab isDisabled={true}>2014</Tab>
            <Tab isDisabled={true}>2015</Tab>
            <Tab isDisabled={true}>2016</Tab>
            <Tab isDisabled={true}>2017</Tab>
            <Tab isDisabled={true}>2018</Tab>
            <Tab>2019</Tab>
            <Tab isDisabled={true}>2020</Tab>
            <Tab isDisabled={true}>2021</Tab>
            <Tab isDisabled={true}>2022</Tab>
            <Tab isDisabled={true}>2023</Tab>
            <Tab isDisabled={true}>2024</Tab>
        </TabList>
        <TabPanels>
            <TabPanel>
                <PictureCollection pictures={[mitUlli1, mitUlli2]} text='Vertrauensbildende Maßnahme'/>
                <PictureCollection pictures={[wiese1, wiese2, wiese3]} text='Wiese!'/>
                <PictureCollection pictures={[watschel1, watschel2, watschel3]} text="Da gab's doch Lerlis"/>
            </TabPanel>
            <TabPanel></TabPanel>
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
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
        </TabPanels>
    </Tabs>
);