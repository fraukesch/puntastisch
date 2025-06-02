import {defineStyleConfig, extendTheme} from '@chakra-ui/react';

export const theme = extendTheme({
    components: {
        Heading: defineStyleConfig({
            defaultProps: {
                size: 'lg'
            }
        })
    }
})