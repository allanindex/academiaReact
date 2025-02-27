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
      <Box className={'sidebar'} p={'0  15px'} w={'18%'}  bg={useColorModeValue('#171717', 'white')}
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
            <Flex gap={'10px'} justifyContent={'space-between'} alignItems={'center'} w={'100%'} color={useColorModeValue('white', 'black')}>
              <Flex gap={'10px'} alignItems={'center'}>
                <Flex h={'4.1vh'} w={'4.1vh'} bg={useColorModeValue('white', 'rgb(26, 106, 255)')} borderRadius={'50%'}  alignItems={'center'}>
                </Flex>
                <Text fontSize={'1.1rem'}>BodyFit</Text>
              </Flex>
              <Flex className="menu-title" h={'100%'} >
                <ColorModeButton color={useColorModeValue('white', 'black')}/>
            </Flex>
            </Flex>
         
        </Flex>
        <Flex className="menu" w={'100%'} flexDir={'column'} justifyContent={'center'} gap={'15px'} 
      p={'15px 5px 0 0'}
       borderRadius={'10px'}
        css={{
          "& > div":{
            p:' 0 10px',
            borderRadius: '5px',
            color: useColorModeValue('rgb(192, 192, 192)', 'black'),
            fontSize: '1rem',
            gap: '10px',
            h: '5.5vh',
          },
          "& > div:hover":{
            color: 'white',
            bg: '#c43b00'
          }
        }}
        >
          <Flex w={'100%'} flexDir={'row'}  alignItems={'center'} justifyContent={'flex-start'}><VscHome size={'20px'} />Home</Flex>
          <Flex w={'100%'} flexDir={'row'}  alignItems={'center'} justifyContent={'flex-start'}><RxPerson size={'20px'} />Aluno</Flex>
          <Flex w={'100%'} flexDir={'row'}  alignItems={'center'}  justifyContent={'flex-start'}><GoGraph size={'20px'} />Financeiro</Flex>
          <Flex w={'100%'} flexDir={'row'}  alignItems={'center'}  justifyContent={'flex-start'}><IoSettingsOutline size={'20px'} />Configurações</Flex>
        </Flex>


      </Box>
  );
};

export default Sidebar;