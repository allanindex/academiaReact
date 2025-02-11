import { Box, Flex } from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from "@/components/ui/color-mode";

import { useState } from "react";
import { IoMdMore } from "react-icons/io";

function DietDayStatus() {
    const [expandedNutritionGraph, setExpandedNutritionGraph] = useState(false);
    return (
        <Flex className="diet-day-status" h={'86vh'} justifyContent={'space-between'}>
            <Box className="snacks-per-day">

            </Box>
            <Flex className="nutrition-graph" w={expandedNutritionGraph ? '31vw' : '4vw'} bg={'#1A1C20'} color={useColorModeValue('white', 'black')} flexDir={'colum'} justifyContent={'space-between'}
                onMouseEnter={() => {
                    setExpandedNutritionGraph(true);
                }
                }
                onMouseLeave={() => {
                    setExpandedNutritionGraph(false);
                }}
                overflow={'hidden'}
                transition={'0.2s'}
            >
                <Flex h={'100%'} w={'100%'} alignItems={'center'} justifyContent={'center'} display={expandedNutritionGraph ? 'none' : 'flex'}  >
                    <IoMdMore size={'2.5rem'} />
                </Flex>
                <Flex display={expandedNutritionGraph ? 'flex' : 'none'} flexDir={'column'} w={'100%'} h={'100%'}
                    css={{
                        "& > div:not(:first-child)": {
                            color: ' #c0c0c0',
                            gap: '0.5vw'
                        }
                    }}
                    justifyContent={'space-between'}
                    p={'2vw'}
                >
                   
                </Flex>
            </Flex>
        </Flex>
    )
}

export default DietDayStatus