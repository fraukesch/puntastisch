import {Button, Flex, Icon} from '@chakra-ui/react'

import {HashRouter, Link, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home.tsx";
import {Places} from "./pages/Places.tsx";
import {DotsIcon} from "./components/DotsIcon.tsx";
import {Pictures} from './pages/Pictures.tsx';
import {NavigationButton} from './components/NavigationButton.tsx';
import {Friends} from './pages/Friends.tsx';

function App() {
  return (
    <HashRouter>
        <Flex gap={4} m={2}>
            <Link to="/">
                <Button variant='ghost'>
                    <Icon as={DotsIcon}/>
                </Button>
            </Link>
            <Link to='/orte'>
                <NavigationButton path='orte' text='Orte'/>
            </Link>
            <Link to='/fotos'>
                <NavigationButton path='fotos' text='Fotos'/>
            </Link>
            <Link to='/freunde'>
                <NavigationButton path='freunde' text='Freunde'/>
            </Link>
        </Flex>

        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/orte' element={<Places/>} />
            <Route path='/fotos' element={<Pictures/>} />
            <Route path='/freunde' element={<Friends/>} />
        </Routes>
    </HashRouter>
  )
}

export default App
