
import { Box, Flex } from '@chakra-ui/react'
import Sidebar from './components/sidebar/sidebar'
import MainContent from './components/mainContent/mainContent'
import Navbar from './components/navbar/Navbar'

function App() {


  return (
    <Flex w={'100%'} flexDir={'row'} >
      <Sidebar />
      <Flex flexDir='column' w={'full'}>
        <Navbar />
        <MainContent />
      </Flex>
    </Flex>

  )
}

export default App
