
import { Flex } from '@chakra-ui/react'
import Sidebar from './components/sidebar/sidebar'
import MainContent from './components/mainContent/mainContent'
function App() {


  return (
      <Flex w={'100vw'} flexDir={'row'} h={'100vh'} bg={'#090A0D'} alignItems={'center'}>
        <Sidebar/>
        <MainContent/>
      </Flex> 
  )
}

export default App
