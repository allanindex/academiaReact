import { Box, Color, Flex} from "@chakra-ui/react";
import { IoIosSearch } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import './navbar.css'
const logo = "/img/logo-dark.png"
function Navbar(){
    return(
        <nav>
            <Flex className="logo" w={'30%'} alignItems={'center'} justifyContent={'center'} gap={'10px'}>
                <img src={logo} alt=""/>
                <Box fontSize={'1.3rem'}>
                    <strong>
                        <span className="logo-laranja">Body</span>Fit
                    </strong>
                </Box>
            </Flex>
            <Flex className="profile" w={'30%'} position={'absolute'} right={'2vw'} justifyContent={'flex-end'}>
                <RxAvatar size={'32px'}/>
            </Flex>
        </nav>
    )
}
export default Navbar;