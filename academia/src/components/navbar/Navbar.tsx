import { Box, Text, Flex} from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";
const avatar = '/img/avatar.png'
function Navbar(){
    return(
        <Flex w={'100%'} bg={" #101010"} justifyContent={'space-between'} h={'9vh'}>
            <Flex className="menu-title" h={'100%'} alignItems={'center'} fontSize={'1.4rem'} p={'0 1.2vw'}>
                <Text>Dashboard</Text>
            </Flex>
            <Flex className="profile" w={'15%'} h={'100%'} alignItems={'center'} justifyContent={'center'} p={'0 1vw'} gap={'10px'}>
                <Box className="avatar" w={'20%'}>
                    <img src={avatar} alt="" style={{width: '100%'}}/>
                </Box>
                <Box className="profile-texts">
                    <Text>John Doe</Text>
                    <Text fontSize={'0.8rem'}>Recepcionista</Text>
                </Box>
                <IoIosArrowDown/>
            </Flex>
        </Flex>
    )
}
export default Navbar;