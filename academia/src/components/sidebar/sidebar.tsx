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
        <Flex w={'100%'} justifyContent={isExpanded ? 'flex-end' : 'center'} p={'10px'} mb={'40px'}>
            <button className="toggle-btn" onClick={toggleSidebar}>
            {isExpanded ? <FaArrowLeft size={'25px'} color="#F15927"/> : <MdOutlineMenu size={'30px'}  color="#F15927"/>}
            </button>
        </Flex>
        
        <Flex className="menu" w={'100%'} flexDir={'column'} justifyContent={'center'} gap={'45px'}>
          <Flex w={'100%'} justifyContent={isExpanded ? 'flex-start': 'center'} flexDir={'row'}><a href="#" className="option"><IoHome size={'25px'} color={'white'}/> {isExpanded ? ' Home' : ''}</a></Flex>
          <Flex w={'100%'} justifyContent={isExpanded ? 'flex-start': 'center'}><a href="#" className="option"><GoPersonFill size={'25px'} color={'white'}/> {isExpanded ?  ' Alunos' : ''}</a></Flex>
          <Flex w={'100%'} justifyContent={isExpanded ? 'flex-start': 'center'}><a href="#" className="option"><GoGraph size={'25px'} color={'white'}/> {isExpanded ? ' Financeiro' : ''}</a></Flex>
          <Flex w={'100%'} justifyContent={isExpanded ? 'flex-start': 'center'}><a href="#" className="option"><IoMdSettings size={'25px'} color={'white'}/> {isExpanded ? ' Configurações' : ''}</a></Flex>
        </Flex>
      </Box>
  );
};

export default Sidebar;