import { Box, Flex, Button, Card, Image, Text, Badge } from "@chakra-ui/react"
import { useColorMode, useColorModeValue, ColorModeButton } from "@/components/ui/color-mode";
import { MdOutlineNoFood, MdOutlineFitnessCenter } from "react-icons/md";
import Nutrients from '../charts/nutrientsChart';
import { IoFastFoodOutline } from "react-icons/io5";
import { HiOutlineBeaker } from "react-icons/hi";
import { BsClipboardData } from "react-icons/bs";
import WeekProgression from "./weekProgression";
import DietDayStatus from "./drawerContent";
const breakfast = "/img/breakfast.jpg";
const dinner = "/img/dinner.jpg";
const lunch = "/img/lunch.jpg";
const snack = "/img/snack.jpg";
function DietContent() {
    return (
        <Box h={'91vh'} width={'full'} bg={useColorModeValue(' #131517', '#c9c9c9')}>
            {/* <WeekProgression /> */}
            <Flex 
            justify={'space-between'}
            >
                <Flex
                    flexDir={'column'}
                    gap={'1.5vw'}
                    pt={'1.5vw'}

                >
                    <Flex
                        p={'0 1.5vw'}
                        color={useColorModeValue('white', 'black')}
                        w={'100%'}
                        gap={'1.5vw'}
                        css={{
                            "& > div": {
                                h: '15vw',
                                w: '14vw',
                                fontSize: '1rem',
                                bg: useColorModeValue('#1A1C20', ' white'),
                                color: useColorModeValue('rgb(255, 255, 255)', 'black'),
                                borderRadius: '5px',
                                border: "none"
                            }
                        }}
                    >
                        <Card.Root overflow="hidden">
                            <Image
                                h={'55%'}
                                src={breakfast}
                            />
                            <Card.Body p={'0.8vw 1vw'}>
                                <Text>Café da manhã</Text>
                            </Card.Body>
                            <Card.Footer pl={'1vw'}>
                                <DietDayStatus />
                            </Card.Footer>
                        </Card.Root>
                        <Card.Root overflow="hidden">
                            <Image
                                h={'55%'}
                                src={snack}
                            />
                            <Card.Body p={'0.8vw 1vw'}>
                                <Text>Lanches</Text>
                            </Card.Body>
                            <Card.Footer pl={'1vw'}>
                            <DietDayStatus />
                            </Card.Footer>
                        </Card.Root>
                        <Card.Root  overflow="hidden">
                            <Image
                                h={'55%'}
                                src={lunch}
                            />
                            <Card.Body p={'0.8vw 1vw'}>
                                <Text>Almoço</Text>
                            </Card.Body>
                            <Card.Footer pl={'1vw'}>
                            <DietDayStatus />
                            </Card.Footer>
                        </Card.Root>
                        <Card.Root  overflow="hidden">
                            <Image
                                h={'55%'}
                                src={dinner}
                            />
                            <Card.Body p={'0.8vw 1vw'}>
                                <Text>Jantar</Text>
                            </Card.Body>
                            <Card.Footer pl={'1vw'}>
                            <DietDayStatus />
                            </Card.Footer>
                        </Card.Root>
                    </Flex>

                    <Flex w={'100%'} p={'0 1.5vw'} flexDir={'column'}
                    gap={'1.5vw'}
                    css={{
                        "& > div.box-chart": {
                        width: '75%',
                        borderRadius: '5px',
                        bg: useColorModeValue('#1A1C20', ' white'),
                        p: '0.8vw',
                        color:'black'
                    }
                    }}
                    >
                        <Flex justifyContent={'space-between'}
                              bg={useColorModeValue('#1A1C20', ' white')}
                              p={'1vw 0.8vw'}
                              borderRadius={'5px'}
                            color={useColorModeValue('white', 'black')}
                            css={{
                                "& > div": {
                                    gap: '0.8vw'
                                },
                            }}
                        >
                            <Flex
                            >
                                <MdOutlineNoFood size={'1.3rem'} /> Calorias consumidas: 2000
                                <Badge variant="solid" colorPalette="green">80%</Badge>
                            </Flex>
                            <Flex>
                                <IoFastFoodOutline size={'1.3rem'} /> Calorias restantes: 500
                                <Badge variant="solid" colorPalette="yellow">20%</Badge>
                            </Flex>
                            <Flex>
                                <MdOutlineFitnessCenter size={'1.3rem'} /> Calorias queimadas: 1200
                                <Badge variant="solid" colorPalette="green">100%</Badge>
                            </Flex>
                        </Flex>
                        <Box className="box-chart">
                            <Nutrients/>
                        </Box>
                    </Flex>
                </Flex>
                
            </Flex>
        </Box>
    )
}
export default DietContent; 