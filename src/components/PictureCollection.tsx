import {useState} from 'react';
import Slider from 'react-slick';
import {Box, Heading, IconButton, Image} from '@chakra-ui/react';
import {ChevronLeftIcon, ChevronRightIcon} from '@chakra-ui/icons';

const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: false,
    autoplay: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
}
export const PictureCollection = ({pictures, text, withMaxW = true}: {
    pictures: string[],
    withMaxW?: boolean,
    text?: string
}) => {
    // keeping track of the index, because react-slick Slider doesn't offer it on API
    const [activeIndex, setIndex] = useState(0);
    const [slider, setSlider] = useState<Slider | null>(null);
    return (
        <Box position='relative' maxW={withMaxW ? 400 : 'unset'} width='100%' mb={10}>
            {text && <Heading size={'md'} mb={1}>{text}</Heading>}
            <IconButton
                colorScheme='blackAlpha'
                onClick={() => slider?.slickPrev()}
                isDisabled={activeIndex === 0}
                position='absolute'
                left={0}
                top={'50%'}
                zIndex={2}
                icon={<ChevronLeftIcon/>}
                aria-label='back'
            />
            <IconButton
                colorScheme='blackAlpha'
                onClick={() => slider?.slickNext()}
                isDisabled={activeIndex === pictures.length - 1}
                position='absolute'
                right={0}
                top={'50%'}
                zIndex={2}
                icon={<ChevronRightIcon/>}
                aria-label='forward'
            />
            <Slider {...settings} beforeChange={(_, next) => setIndex(next)} ref={(slider) => setSlider(slider)}>
                {pictures.map((picture, index) => (
                    <Image key={index} src={picture}></Image>
                ))}
            </Slider>
        </Box>
    );
};