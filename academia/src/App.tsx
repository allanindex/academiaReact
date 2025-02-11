
import { Box, Flex } from '@chakra-ui/react'
import Sidebar from './components/sidebar/sidebar'
import MainContent from './components/mainContent/mainContent'
import Navbar from './components/navbar/Navbar'
import Login from './login/Login'
import DietContent from './components/diet/dietContent'
function App() {
  return (
    
    <Flex w={'100%'} flexDir={'row'} >
      <Sidebar />
      <Flex flexDir='column' w={'full'}>
        <Navbar />
        {/* <MainContent /> */}
        <DietContent/>
      </Flex>
    </Flex>
 

  )
}

export default App
