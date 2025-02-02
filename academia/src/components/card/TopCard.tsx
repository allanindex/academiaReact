import { SlOptions } from "react-icons/sl";
import { Box, Text, Flex, Color } from "@chakra-ui/react";
import { FaArrowTrendUp } from "react-icons/fa6";
function    TopCard(props:any) {
    return (
        
            <Box display={'flex'} className="card" flexDirection={'column'} justifyContent={'space-between'}>
                <Flex className="card-header">
                    <Text>{props.cardTitle}</Text>
                    <SlOptions />
                </Flex>
                <Flex className="card-value" fontSize={'1.5rem'}>
                    <Text>{props.cardValue}</Text>
                </Flex>
                <Flex className="card-analitcs" fontSize={'0.9rem'} color={'rgb(118, 118, 118)'} alignItems={'center'}>
                    <FaArrowTrendUp color="#11b32c"/>
                    <Text >
                        <Box as={'span'} color={"#11b32c"}>+15% </Box>quanto à semana passada
                    </Text>
                </Flex>
            </Box>
        
    )
}
export default TopCard;