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
import panade1 from './assets/2019/panade1.webp';
import panade2 from './assets/2019/panade2.webp';
import panade3 from './assets/2019/panade3.webp';
import panade4 from './assets/2019/panade4.webp';

import {useState} from 'react';

const PictureCollection = ({pictures, text}: {pictures: string[], text: string}) => {
    const [activeIndex, setIndex] = useState(0);
    return (
        <Box position='relative' maxW={400}>
            <Heading fontSize='2xl'>{text}</Heading>
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
    <Tabs colorScheme='black' defaultIndex={9} isLazy isFitted maxW='100%'>
        <TabList overflowX='auto' overflowY='hidden'>
            <Tab isDisabled={true}>2010</Tab>
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
            <TabPanel></TabPanel>
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