import { Box, Text, Flex } from "@chakra-ui/react";
import { VscGraphLine } from "react-icons/vsc";
import { GoPersonFill } from "react-icons/go";
import { FaCalendarTimes } from "react-icons/fa";
import { BsPersonCheckFill } from "react-icons/bs";
import MyLineChart from "../charts/lineChart";
import Example2 from "../charts/barChart";
import Example from "../charts/pieChart";
function MainContent(){
    return(
        <Box bg={'#e3e3e3'} h={'92vh'} color={'black'} p={'10px 2vw 0 15px'}>
            <Text fontWeight={'bold'}>Overview</Text>
            <Flex
              css={{
                "& > div": {
                  width: '25%',
                  height: '16vh',
                  borderRadius: '10px',
                  color: 'black',
                  padding: '10px',
                  fontSize: '1.2rem',
                  bg: " #ffffff",
                  boxShadow: '0px 3px 10px -3px',
                },
            }}
            gap={'1vw'}
            mt={'10px'}

            >
                <Box  display={'flex'} flexDir={'column'} justifyContent={'space-between'}>
                    <Text>Faturamento atual</Text>
                    <Flex justifyContent={'space-between'}>
                        <Text fontSize={'2rem'}>
                            R$ 87.000
                        </Text>
                        <VscGraphLine size={'50px'}/>
                    </Flex>
                </Box>
                <Box  display={'flex'} flexDir={'column'} justifyContent={'space-between'}>
                    <Text>Novos alunos</Text>
                    <Flex justifyContent={'space-between'}>
                        <Text fontSize={'2rem'}>
                            42
                        </Text>
                        <GoPersonFill size={'50px'}/>
                    </Flex>
                </Box>
                <Box display={'flex'} flexDir={'column'} justifyContent={'space-between'}>
                    <Text>Mensaidades atrasadas</Text>
                    <Flex justifyContent={'space-between'}>
                        <Text fontSize={'2rem'}>
                            19
                        </Text>
                        <FaCalendarTimes size={'50px'}/>
                    </Flex>
                    </Box>
                <Box display={'flex'} flexDir={'column'} justifyContent={'space-between'}>
                    <Text>Assidudade diária</Text>
                    <Flex justifyContent={'space-between'}>
                        <Text fontSize={'2rem'}>
                            200
                        </Text>
                        <BsPersonCheckFill size={'50px'}/>
                    </Flex>
                    </Box>
            </Flex>
            <Box
                css={
                    {
                        "& > div.bigGraph": {
                            bg: 'white',
                            borderRadius: '10px',
                            padding: '10px',
                            height: '30vh',
                            boxShadow: '0px 3px 10px -3px',
                        },
                        "& > div.mediumGraph":{
                            bg: 'white',
                            borderRadius: '10px',
                            p: '10px',
                            boxShadow: '0px 3px 10px -3px',
                        }
                    }
                }
                display={'grid'}
                gap={'10px'}
                gridTemplateColumns={'repeat(5, 1fr)'}
                mt={'10px'}
            >
                <Box gridColumn={'span 3'} className="bigGraph" >
                    <MyLineChart />
                </Box>
                <Box className="mediumGraph"  gridColumn={'span 2'}></Box>
                <Box gridColumn={'span 3'} className="bigGraph" ><Example2/></Box>
                <Box
                    css={{
                        "& > div":{
                            bg: 'white',
                            borderRadius: '10px',
                            w: '50%',
                            p: '10px'

                        }
                    }}
                    display={'flex'}
                    justifyContent={'space-between'}
                    gap={'10px'}
                    bg={'transparent'}
                    p={'0'}
                    gridColumn={'span 2'}
                >
                    <Box boxShadow={'0px 3px 10px -3px'}>
                        <Example />
                    </Box>
                    <Box boxShadow={'0px 3px 10px -3px'}>teste 2.2</Box>
                </Box>
               
                
            </Box>
        </Box>
    )
}
export default MainContent;