import {Box, Heading, Text, Wrap, WrapItem} from '@chakra-ui/react';
import {PictureCollection} from './PictureCollection.tsx';

export const PictureCollectionWithText = (
    {
        headline,
        text,
        pictures = [],
        picFirst = false,
        video
    }: {
        headline: string,
        text: string,
        pictures?: string[],
        picFirst?: boolean,
        video?: string
    }) => {
    const map = (
        <WrapItem
            width={{
                base: '100%',
                sm: '100%',
                md: 'calc(50% - 0.25rem)'
            }}
            order={{
                base: 1,
                sm: 1,
                md: picFirst ? 1 : 2,
            }}
            flexDir='column'
        >
            {
                video ?
                    <video controls>
                        <source src={video} type='video/webm'/>
                    </video> :
                    !pictures.length ? "Hier fehlt noch ein Bild" :
                        <PictureCollection pictures={pictures} withMaxW={false}/>
            }
        </WrapItem>
    );
    const textBlock = (
        <WrapItem
            width={{
                base: '100%',
                sm: '100%',
                md: 'calc(50% - 0.25rem)'
            }}
            order={{
                base: 2,
                sm: 2,
                md: picFirst ? 2 : 1,
            }}
        >
            <Box>
                <Heading>{headline}</Heading>
                <Text>{text}</Text>
            </Box>
        </WrapItem>
    );
    return (
        <Wrap p={4} mb={4} mt={4} ml={'auto'} mr={'auto'} shadow='md' borderWidth='1px' width='calc(100% - 2rem)' maxW={'1200px'}>
            {picFirst ? map : textBlock}
            {picFirst ? textBlock : map}
        </Wrap>
    )
}