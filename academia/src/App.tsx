
import { Flex, Box } from '@chakra-ui/react'
import Navbar from './components/navbar/navbar'
import Sidebar from './components/sidebar/sidebar'
import MainContent from './components/mainContent/mainContent'
function App() {


  return (
   <Flex>
    <Sidebar/>
    <Flex w={'96vw'} flexDir={'column'}>
      <Navbar/>
      <MainContent/>
    </Flex>
   </Flex> 
  )
}

export default App
