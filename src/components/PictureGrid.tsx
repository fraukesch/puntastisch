import {SimpleGrid} from '@chakra-ui/react';
import {PropsWithChildren} from 'react';

export const PictureGrid = ({children}: PropsWithChildren) => (
    <SimpleGrid minChildWidth='400px' gap={6}>
        {children}
    </SimpleGrid>
)