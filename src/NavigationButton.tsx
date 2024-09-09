import {useLocation} from 'react-router-dom';
import {Button} from '@chakra-ui/react';

export const NavigationButton = ({path, text}: {path: string, text: string}) => {
    const {pathname} = useLocation();
    return (
        <Button
            colorScheme='black'
            variant='outline'
            isActive={pathname === `/${path}`}
            _active={{
                color: 'white',
                backgroundColor: 'black'
            }}
        >
            {text}
        </Button>
    );
}