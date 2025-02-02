import { Box, Text, Flex, Color } from "@chakra-ui/react";

import MyLineChart from "../charts/lineChart";
import Example from "../charts/pieChart";
import TopCard from "../card/TopCard";


function MainContent() {
    return (
        <Box bg={'#000000'} color={'black'} p={'2vh 1.2vw'} w={'100%'} >
            <Flex
                css={{
                    "& > div.card": {
                        width: '25%',

                        minH: '18vh',
                        borderRadius: '10px',
                        color: 'rgb(209, 209, 209)',
                        padding: '1vw',
                        fontSize: '1.2rem',
                       bg:'#101010',
                        boxShadow: '0px 3px 10px -3px black',
                        gap: '0.7vh'
                    },
                    "& > div.card > div.card-header":{
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: '1rem'
                    }
            
                }}
                className="cards"
                gap={'1.2vw'}
                w={'100%'}
            >
                <TopCard className="card" cardTitle='Faturamento'  cardValue='R$200.000'/>
                <TopCard className="card" cardTitle='Novos alunos'  cardValue='214'/>
                <TopCard className="card" cardTitle='Cancelamentos'  cardValue='8'/>
                <TopCard className="card" cardTitle='Frequência média'  cardValue='10.000'/>  
                   
            </Flex>

            <Box
                className="charts"
                css={
                    {
                        "& > div.chart": {
                            bg: '#101010',
                            borderRadius: '10px',
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
                gap={'1.2vw'}
                gridTemplateColumns={'repeat(5, 1fr)'}
                mt={'1.2vw'}
            
            >

                <Flex className="chart mediumChart" gridColumn={'span 2'}>
                    <Box className="chartHeader">
                        <Text fontSize={'1.2rem'} ml={'1.5vw'}>Retenção por plano</Text>
                        <Box w={'100%'} h={'100%'}>
                          

                        </Box>

                    </Box>

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
                       
                    </Box>
                </Flex>
            </Box>

        </Box>
    )
}
export default MainContent;