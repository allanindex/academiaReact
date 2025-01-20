import React, { useState } from "react";
import "./sidebar.css";
import { Box, Container, Flex } from "@chakra-ui/react";
import { MdOutlineMenu } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { GoPersonFill } from "react-icons/go";
import { GoGraph } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";
const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
      <Box className={`sidebar ${isExpanded ? "expanded" : ""}`}  pl={isExpanded ? '2vw' : '0'}>
        <Flex w={'100%'} justifyContent={isExpanded ? 'flex-end' : 'center'} p={'10px'} mb={'45px'}>
            <button className="toggle-btn" onClick={toggleSidebar}>
            {isExpanded ? <FaArrowLeft size={'25px'} color="#F15927"/> : <MdOutlineMenu size={'30px'}  color="#F15927"/>}
            </button>
        </Flex>
        
        <Flex className="menu" w={'100%'} flexDir={'column'} justifyContent={'center'} gap={'10px'} 
        css={{
          "& > div":{
            p:'10px',
            borderRadius: '10px'
          },
          "& > div > a > div > svg:hover":{
            color: '#F15927',
          }
        }}
        >
          <Flex w={'100%'} justifyContent={isExpanded ? 'flex-start': 'center'}><a href="#" className="option"><Box bg={'white'} p={'8px'} borderRadius={'10px'}><IoHome size={'25px'} /></Box> {isExpanded ? ' Home' : ''}</a></Flex>
          <Flex w={'100%'} justifyContent={isExpanded ? 'flex-start': 'center'}><a href="#" className="option"><Box bg={'white'} p={'8px'} borderRadius={'10px'}><GoPersonFill size={'25px'} /></Box> {isExpanded ?  ' Alunos' : ''}</a></Flex>
          <Flex w={'100%'}  justifyContent={isExpanded ? 'flex-start': 'center'}><a href="#" className="option"><Box bg={'white'} p={'8px'} borderRadius={'10px'}><GoGraph size={'25px'} /></Box>{isExpanded ? ' Financeiro' : ''}</a></Flex>
          <Flex w={'100%'}  justifyContent={isExpanded ? 'flex-start': 'center'}><a href="#" className="option"><Box bg={'white'} p={'8px'} borderRadius={'10px'}><IoMdSettings size={'25px'} /> </Box> {isExpanded ? ' Configurações' : ''}</a></Flex>
        </Flex>
      </Box>
  );
};

export default Sidebar;