import { useColorMode, useColorModeValue, ColorModeButton } from "@/components/ui/color-mode";
import { MdOutlineNoFood, MdOutlineFitnessCenter } from "react-icons/md";
import Nutrients from '../charts/nutrientsChart';
import { IoFastFoodOutline } from "react-icons/io5";
import { HiOutlineBeaker } from "react-icons/hi";
import { BsClipboardData } from "react-icons/bs";
import WeekProgression from "./weekProgression";

import { Box, Flex, Button, Card, Image, Text, Badge } from "@chakra-ui/react"
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
                        p: '2% 4%'
                    }
                }}
            >
                <Box gridArea={'1 / 1 / 2 / 7;'}>
                    <Flex flexDir={'column'} h={'100%'} alignItems={'flex-end'} justifyContent={'space-between'}>
                        <Flex justifyContent={'space-between'} alignItems={'center'} mb={'4%'} w={'100%'}>
                            <Text fontSize={'1.2rem'}>Chamados</Text>
                            <Flex alignItems={'center'} gap={'10px'} border={'1px solid #c43b00'} p={'1.5%'} borderRadius={'10px'}>
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

                        <Button w={'25%'} bg={'#c43b00'} mt={'2%'} borderRadius={'10px'} >Detalhes</Button>
                    </Flex>
                </Box>
                <Box gridArea={'1 / 7 / 2 / 14;'}>
                    <Flex flexDir={'column'} h={'100%'} alignItems={'flex-end'} justifyContent={'space-between'}>
                        <Flex justifyContent={'space-between'} alignItems={'center'} mb={'4%'} w={'100%'}>
                            <Text fontSize={'1.2rem'}>Meus alunos</Text>
                            <Flex alignItems={'center'} gap={'10px'} border={'1px solid rgb(112, 112, 112)'} p={'1.5%'} borderRadius={'10px'}>
                                <Text fontSize={'0.8rem'} color={'rgb(189, 188, 188)'}>Menos frequentes</Text>
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
                                Allan Bispo dos Santos
                                <Badge bg={'rgb(207, 0, 0)'} color={'white'}>14 dias</Badge>
                            </Flex>
                            <Flex
                                alignItems={'center'}
                                gap={'10px'}
                                color={" #cfcfcf"}
                            >
                                Allan Bispo dos Santos
                                <Badge bg={'rgb(88, 80, 0)'} color={'white'}>8 dias</Badge>
                            </Flex>
                            <Flex
                                alignItems={'center'}
                                gap={'10px'}
                                color={"#cfcfcf"}
                            >
                                Allan Bispo dos Santos
                                <Badge bg={'rgb(233, 190, 0)'} color={'white'}>5 dias</Badge>
                            </Flex>
                        </Flex>

                        <Button w={'25%'} bg={'#c43b00'} mt={'2%'} borderRadius={'10px'} >Detalhes</Button>
                    </Flex>
                </Box>
                <Box gridArea={'2 / 1 / 3 / 10;'}>
                    <Flex flexDir={'column'} h={'100%'} alignItems={'flex-end'} justifyContent={'space-between'}>
                        <Flex justifyContent={'space-between'} alignItems={'center'} mb={'4%'} w={'100%'}>
                            <Text fontSize={'1.2rem'}>Agenda</Text>
                            <Flex alignItems={'center'} gap={'10px'} border={'1px solid rgb(112, 112, 112)'} p={'1.5%'} borderRadius={'10px'}>
                                <Text fontSize={'0.8rem'} color={'rgb(189, 188, 188)'}>hoje</Text>
                                <IoIosArrowDown />
                            </Flex>
                        </Flex>
                      </Flex>
                </Box>
                <Box gridArea={'2 / 10 / 3 / 14;'}>
                <Flex flexDir={'column'} h={'100%'} alignItems={'flex-end'} justifyContent={'space-between'}>
                        <Flex justifyContent={'space-between'} alignItems={'center'} mb={'4%'} w={'100%'}>
                            <Text fontSize={'1.2rem'}>Progresso individual</Text>
                            <Flex alignItems={'center'} gap={'10px'} border={'1px solid rgb(112, 112, 112)'} p={'1.5%'} borderRadius={'10px'}>
                                <Text fontSize={'0.8rem'} color={'rgb(189, 188, 188)'}>Este mês</Text>
                                <IoIosArrowDown />
                            </Flex>
                        </Flex>
                      </Flex>
                </Box>
            </Box>
        </Box>

    )
}
export default DietContent; 