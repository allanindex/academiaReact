import { Box, Text } from "@chakra-ui/react";
import {  useColorModeValue } from  "@/components/ui/color-mode";
function Alunos(){
   return(
    <Box p={'2vh 1.2vw'}  bg={useColorModeValue('#131517', ' #e0e0e0')}>
        <Box className="page-header" h={'91vh'}>
            <Text fontSize={'1.5rem'} color={useColorModeValue('white', 'black')}>Alunos matriculados</Text>
        </Box>
    </Box>
   ) 
}
export default Alunos;