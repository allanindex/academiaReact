import { Box, Text, Flex, Color } from "@chakra-ui/react";
import { VscGraphLine } from "react-icons/vsc";
import { GoPersonFill } from "react-icons/go";
import { FaCalendarTimes } from "react-icons/fa";
import { BsPersonCheck } from "react-icons/bs";
import MyLineChart from "../charts/lineChart";
import Example2 from "../charts/barChart";
import Example from "../charts/pieChart";
import { IoPersonOutline } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";

function MainContent() {
    return (
        <Box bg={'rgb(18, 21, 27)'} h={'97vh'} color={'black'} p={'2vh 0.8vw'} w={'84vw'} borderRadius={'15px'}>
            <Text color={'white'} fontSize={'1.5rem'} mb={'10px'}>Overview</Text>
            <Flex
                css={{
                    "& > div.card": {
                        width: '20%',
                        height: '16vh',
                        borderRadius: '15px',
                        color: 'rgb(209, 209, 209)',
                        padding: '12px',
                        fontSize: '1.2rem',
                        bgGradient: "linear-gradient(45deg, #090A0D, #042042)",
                        boxShadow: '0px 3px 10px -3px black',
                        gap: '0.7vh'
                    },
                    "& > div.cardImpar": {
                        bgGradient: "linear-gradient(45deg, #090A0D, #1e8fd6)",
                    },
                    "& > div.card > div.cardIcon": {
                        borderRadius: '50%',
                        border: '1px solid white',
                        w: '2.1vw',
                        h: '2.1vw',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: "center",

                    },
                    "& > div.card > div.cardValue": {
                        alignItems: 'center',
                        gap: '5px',
                        color: 'white'
                    },
                    "& > div.card > div.cardValue > div.cardFlag": {
                        alignItems: 'center',
                        bg: 'rgb(0, 100, 0)',
                        borderRadius: '10px',
                        fontSize: '0.8rem',
                        w: '2.8vw',
                        h: '2.2h',
                        justifyContent: 'center'

                    },
                }}
                gap={'0.8vw'}
                className="cards"
            >
                <Box display={'flex'} className="card cardImpar" flexDirection={'column'}
                >
                    <Box className="cardIcon">
                        <VscGraphLine size={'20px'} />
                    </Box>
                    <Text>faturamento atual</Text>
                    <Flex className="cardValue">
                        <Text>R$ 183.820</Text>
                        <Flex className="cardFlag">
                            +20%
                        </Flex>
                    </Flex>
                </Box>
                <Box display={'flex'} flexDir={'column'} className="card">
                    <Box className="cardIcon">
                        <IoPersonOutline size={'20px'} />
                    </Box>
                    <Text>
                        Total de alunos
                    </Text>

                    <Flex className="cardValue">
                        <Text>214</Text>
                        <Flex className="cardFlag" >
                            +40%
                        </Flex>
                    </Flex>

                </Box>
                <Box display={'flex'} flexDir={'column'} className="card cardImpar">


                    <Box className="cardIcon">
                        <LuCalendarDays size={'20px'} />
                    </Box>
                    <Text >
                        Clientes irregulares
                    </Text>


                    <Flex className="cardValue">
                        <Text>60</Text>
                        <Flex className="cardFlag">
                            -12%
                        </Flex>
                    </Flex>

                </Box>
                <Box display={'flex'} flexDir={'column'} className="card" >


                    <Box className="cardIcon">
                        <BsPersonCheck size={'20px'} />
                    </Box>
                    <Text>
                        Frequência mensal
                    </Text>


                    <Flex className="cardValue">
                        <Text>30.000</Text>
                        <Flex className="cardFlag">
                            +35%
                        </Flex>
                    </Flex>

                </Box>

            </Flex>

            <Box
                className="charts"
                css={
                    {
                        "& > div.chart": {
                            bg: '#090A0D',
                            borderRadius: '15px',
                            padding: '10px',
                            height: '34vh',
                            color: 'white',
                            p: '25px',
                            pl: '0'

                        },
                        "& > div.bigChart": {
                            flexDir: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start'
                        },
                        "& > div.mediumChart": {
                            flexDir: 'column',
                            justifyContent: 'space-between'
                        },
                    }
                }
                display={'grid'}
                gap={'0.6vw'}
                gridTemplateColumns={'repeat(5, 1fr)'}
                mt={'1vw'}
            >

                <Flex className="chart mediumChart" gridColumn={'span 2'}>
                    <Box className="chartHeader">
                        <Text fontSize={'1.2rem'} ml={'1.5vw'}>Alunos por plano</Text>
                    </Box>
                    <Flex alignItems={'center'} h={'25vh'} justifyContent={'space-between'} p={'0 2vw'}>
                        <Box className="planOptions"
                            css={{
                                "& > div > div > span": {
                                    w: '1vw',
                                    h: '1vw',
                                    borderRadius: '50%',

                                },
                                "& > div > div": {
                                    alignItems: 'center',
                                    gap: '10px',
                                    color: 'rgb(193, 193, 193)'
                                },
                            }}
                        >

                            <Flex flexDir={'column'} gap={'10px'}>
                                <Flex><Box as={'span'} bg={'#042042'}></Box>Premium</Flex>
                                <Flex><Box as={'span'} bg={'#1e8fd6'}></Box>Platinum</Flex>
                                <Flex><Box as={'span'} bg={'#ffffff'}></Box>Basic</Flex>
                            </Flex>


                        </Box>
                        <Box w={'50%'} h={'100%'} display={'block'}
                            css={{
                                "& > div": {
                                    top: '-6vw',
                                    left: '-10vw'

                                }
                            }}
                        >
                            <Example />
                        </Box>
                    </Flex>
                </Flex>
                <Flex gridColumn={'span 3'} className="chart bigChart" >
                    <Box className="chartHeader" >
                        <Text fontSize={'1.2rem'} ml={'1.5vw'}>Alunos matriculados</Text>

                    </Box>
                    <Box w={'100%'} h={'80%'}>
                        <MyLineChart />
                    </Box>
                </Flex>
                <Flex gridColumn={'span 3'} className="chart bigChart" >
                    <Text fontSize={'1.2rem'} ml={'1.5vw'}>Alunos</Text>
                    <Box w={'100%'} h={'80%'}>
                        
                    </Box>
                </Flex>

                <Flex
                    gridColumn={'span 2'}
                    className="chart mediumChart"
                >
                    <Box className="chartHeader" >
                        <Text fontSize={'1.2rem'} ml={'1.5vw'}>Capacidade máxima</Text>
                        <Flex className="filters"></Flex>
                    </Box>
                    <Box w={'100%'} h={'80%'}>
                        <Example2 />
                    </Box>
                </Flex>
            </Box>

        </Box>
    )
}
export default MainContent;