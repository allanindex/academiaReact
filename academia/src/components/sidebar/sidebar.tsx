import "./sidebar.css";
import { Box, Flex } from "@chakra-ui/react";
import { VscHome } from "react-icons/vsc";
import { RxPerson } from "react-icons/rx";
import { GoGraph } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { Text, Separator  } from "@chakra-ui/react";

const Sidebar = () => {
const logo =  '/img/logo-dark.png'
  return (
      <Box className={'sidebar'} p={'20px'} w={'15vw'}>
        <Flex w={'100%'} justifyContent={'flex-start'}  h={'5vh'} alignItems={'center'} gap={'10px'}>  
            <Box h={'4vh'} w={'4vh'} bg={'#2D7DD2'} borderRadius={'50%'} p={'5px'} display={'flex'} alignItems={'center'}>
            <img src={logo} alt="" />
            </Box>
            <Text>BodyFit</Text>
        </Flex>
        <Box
          height={'6.5vh'}
          borderRadius={'10px'}
          padding={'10px'}
          bg={'rgb(131, 131, 131)'}
          m={'2vh 0'}
        >Profile</Box>
        <Separator mb={'2vh'} />
        <Flex className="menu" w={'100%'} flexDir={'column'} justifyContent={'center'} gap={'15px'} 
        css={{
          "& > div":{
            p:'10px',
            borderRadius: '10px',
            color: 'rgb(175, 175, 175)'
          },
          "& > div:hover":{
            color: 'white',
            bg: '#2D7DD2'
          }
        }}
        >
          <Flex w={'100%'}gap={'15px'} flexDir={'row'} h={'5vh'} alignItems={'center'} justifyContent={'flex-start'}><VscHome size={'25px'} /> Home</Flex>
          <Flex w={'100%'}gap={'15px'} flexDir={'row'} h={'5vh'} alignItems={'center'} justifyContent={'flex-start'}><RxPerson size={'25px'} />Alunos</Flex>
          <Flex w={'100%'}gap={'15px'} flexDir={'row'} h={'5vh'} alignItems={'center'}  justifyContent={'flex-start'}><GoGraph size={'25px'} />Financeiro</Flex>
          <Flex w={'100%'}gap={'15px'} flexDir={'row'} h={'5vh'} alignItems={'center'}  justifyContent={'flex-start'}><IoSettingsOutline size={'25px'} /> Configurações</Flex>
        </Flex>
      </Box>
  );
};

export default Sidebar;