import "./sidebar.css";
import { Box, Flex } from "@chakra-ui/react";
import { VscHome } from "react-icons/vsc";
import { RxPerson } from "react-icons/rx";
import { GoGraph } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { Text, Separator  } from "@chakra-ui/react";
import { RiMenuFill } from "react-icons/ri";
import { useColorMode, useColorModeValue, ColorModeButton } from "@/components/ui/color-mode";
import { useState } from "react";
const Sidebar = () => {
const logo =  '/img/logo-dark.png'
const [isExpanded, setExpanded] = useState(false);
  return (
      <Box className={'sidebar'} p={isExpanded?'0 5px':'0 0.5vw'} w={isExpanded?'15%': '4%'}  bg={useColorModeValue('#1A1C20', 'white')}
      minH={'100vh'}
      onMouseEnter={()=>{ 
        setExpanded(true);
      }
      }
      onMouseLeave={()=>{
        setExpanded(false);
      }}
      >
        <Flex w={'100%'}  h={'9vh'} flexDir={'row'} alignItems={'center'} justifyContent={'space-between'}>  
            <Flex justifyContent={isExpanded ? 'flex-start' : 'center'} alignItems={'center'} gap={'10px'} w={'100%'} color={useColorModeValue('white', 'black')}>
              <Flex h={'4.5vh'} w={'4.5vh'} bg={useColorModeValue('white', 'rgb(26, 106, 255)')} borderRadius={'50%'} p={'5px'} alignItems={'center'}>
             
              </Flex>
              <Text fontSize={'1.3rem'}>{isExpanded ? 'BodyFit': ''}</Text>
            </Flex>
         
        </Flex>
        <Flex className="menu" w={'100%'} flexDir={'column'} justifyContent={'center'} gap={'20px'} 
        mt={'8vh'}
        css={{
          "& > div":{
            p:'10px',
            borderRadius: '5px',
            color: useColorModeValue('white', 'black')
          },
          "& > div:hover":{
            color: 'white',
            bg: ' #074685'
          }
        }}
        >
          <Flex w={'100%'}gap={'15px'} flexDir={'row'} h={'6vh'} alignItems={'center'} justifyContent={'flex-start'}><VscHome size={'25px'} /> {isExpanded ? 'Home':''}</Flex>
          <Flex w={'100%'}gap={'15px'} flexDir={'row'} h={'6vh'} alignItems={'center'} justifyContent={'flex-start'}><RxPerson size={'25px'} />{isExpanded ? 'Alunos':''}</Flex>
          <Flex w={'100%'}gap={'15px'} flexDir={'row'} h={'6vh'} alignItems={'center'}  justifyContent={'flex-start'}><GoGraph size={'25px'} />{isExpanded ? 'Financeiro':''}</Flex>
          <Flex w={'100%'}gap={'15px'} flexDir={'row'} h={'6vh'} alignItems={'center'}  justifyContent={'flex-start'}><IoSettingsOutline size={'25px'} /> {isExpanded ? 'Configurações' : ''}</Flex>
        </Flex>


      </Box>
  );
};

export default Sidebar;