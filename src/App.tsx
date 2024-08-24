import {Button, Flex, Icon} from '@chakra-ui/react'

import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {Home} from "./Home.tsx";
import {Places, PlacesButton} from "./Places.tsx";
import {DotsIcon} from "./DotsIcon.tsx";

function App() {
  return (
    <BrowserRouter>
        <Flex gap={5}>
            <Link to="/">
                <Button variant='ghost'>
                    <Icon as={DotsIcon}/>
                </Button>
            </Link>
            <Link to='/orte'>
                <PlacesButton/>
            </Link>
        </Flex>

        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/orte' element={<Places/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
