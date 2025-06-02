import {defineStyleConfig, extendTheme} from '@chakra-ui/react';

export const theme = extendTheme({
    fonts: {
        body: 'Ubuntu',
        heading: 'Ubuntu',
    },
    components: {
        Heading: defineStyleConfig({
            defaultProps: {
                size: 'lg'
            }
        })
    }
})