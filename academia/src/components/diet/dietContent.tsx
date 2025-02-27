import { Box, Flex, Button, Card, Image, Text, Badge } from "@chakra-ui/react"
import { useColorMode, useColorModeValue, ColorModeButton } from "@/components/ui/color-mode";
import { MdOutlineNoFood, MdOutlineFitnessCenter } from "react-icons/md";
import Nutrients from '../charts/nutrientsChart';
import { IoFastFoodOutline } from "react-icons/io5";
import { HiOutlineBeaker } from "react-icons/hi";
import { BsClipboardData } from "react-icons/bs";
import WeekProgression from "./weekProgression";


import { IoIosArrowDown } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
const breakfast = "/img/breakfast.jpg";
const dinner = "/img/dinner.jpg";
const lunch = "/img/lunch.jpg";
const snack = "/img/snack.jpg";
function DietContent() {
    return (
        <Box w={'full'} h={'full'} bg={' #060606'}>
            <Box w={'full'} h={'90%'} p={'25px'} display={'grid'} gridTemplateColumns={'repeat(13, 1fr)'} gridTemplateRows={'repeat(2, 1fr)'} gridGap={'20px'} pt={'25px'}
                css={{
                    "& > div": {
                        bg: '#171717',
                        color: 'white',
                        borderRadius: '10px',
                        p: '4% 4% 2% 4%'
                    }
                }}
            >
                <Box gridArea={'1 / 1 / 2 / 7;'}>
                    <Flex flexDir={'column'} h={'100%'} alignItems={'flex-end'}>
                        <Flex justifyContent={'space-between'} alignItems={'center'} mb={'4%'} w={'100%'}>
                            <Text fontSize={'1.2rem'}>Chamados</Text>
                            <Flex alignItems={'center'} gap={'10px'} border={'1px solid rgb(95, 95, 95)'} p={'1.5%'} borderRadius={'10px'}>
                                <Text fontSize={'0.8rem'} color={'rgb(189, 188, 188)'}>Auxílio no aparelho</Text>
                                <IoIosArrowDown />
                            </Flex>
                        </Flex>
                        <Flex flexDir={'column'} gap={'15px'}
                        w={'100%'}
                            css={{
                                "& > div": {
                                    fontSize: "1rem"
                                }
                            }}
                        >
                            <Flex
                                alignItems={'center'}
                                gap={'10px'}
                                color={"#cfcfcf"}
                            >
                                <FaCircle color="#c43b00" />Allan Bispo dos Santos - supino inclinado 029</Flex>
                            <Flex
                                alignItems={'center'}
                                gap={'10px'}
                                color={" #cfcfcf"}
                            >
                                <FaCircle color="#c43b00" />Allan Bispo dos Santos - cadeira extensora 002</Flex>
                            <Flex
                                alignItems={'center'}
                                gap={'10px'}
                                color={"#cfcfcf"}
                            >
                                <FaCircle color="#c43b00" />Allan Bispo dos Santos - recepção</Flex>
                        </Flex>

                        <Button w={'25%'} bg={'rgb(0, 0, 0)'} mt={'2%'}>Detalhes</Button>
                    </Flex>
                </Box>
                <Box gridArea={'1 / 7 / 2 / 14;'}>

                </Box>
                <Box gridArea={'2 / 1 / 3 / 10;'}>

                </Box>
                <Box gridArea={'2 / 10 / 3 / 14;'}>

                </Box>
            </Box>
        </Box>

    )
}
export default DietContent; 