import { Box, Flex } from "@chakra-ui/react"
import { useColorMode, useColorModeValue, ColorModeButton } from "@/components/ui/color-mode";
import Navbar from "@/components/navbar/Navbar";
import { Field, Input } from "@chakra-ui/react";
function Login() {
    return (<>
        <Navbar />
        <Flex w={'100%'} h={'91vh'} bg={useColorModeValue('#131517', 'white')} justifyContent={'center'} alignItems={'center'} color={useColorModeValue('white', 'black')}>
            <Box bg={useColorModeValue('#1A1C20', 'white')} w={'60vw'} height={'80vh'} borderRadius={'10px'} p={'2vh 1.2vw'}>
                <Flex flexDir={'column'} gap={'10px'}>
                    <Box className="logo" w={'3.5vw'} h={'3.5vw'} bg={useColorModeValue('white', 'rgb(26, 106, 255)')} borderRadius={'50%'} p={'5px'} alignItems={'center'}></Box>
                    <Flex color={useColorModeValue('white', 'black')} fontSize={'1.8rem'}>Cadastrar aluno</Flex>
                    <Box display={'flex'} flexDir={'column'} gap={'10px'}>
                        <Flex gap={'15px'} >
                            <Field.Root>
                                <Field.Label>
                                    <Field.RequiredIndicator />
                                    Nome completo
                                </Field.Label>
                                <Input placeholder="seu nome" />
                                <Field.HelperText />
                                <Field.ErrorText />
                            </Field.Root>

                            <Field.Root>
                                <Field.Label>
                                    <Field.RequiredIndicator />
                                    Email
                                </Field.Label>
                                <Input placeholder="me@example.com" />
                                <Field.HelperText />
                                <Field.ErrorText />
                            </Field.Root>
                        </Flex>
                            <Field.Root>
                                <Field.Label>
                                    <Field.RequiredIndicator />
                                    Nome completo
                                </Field.Label>
                                <Input placeholder="seu nome" />
                                <Field.HelperText />
                                <Field.ErrorText />
                            </Field.Root>

                            <Field.Root>
                                <Field.Label>
                                    <Field.RequiredIndicator />
                                    Data de aniversário
                                </Field.Label>
                                <Input placeholder="dd/mm/aaaa" type="date" />
                                <Field.HelperText />
                                <Field.ErrorText />
                            </Field.Root>
                    </Box>

                </Flex>
            </Box>
        </Flex>
        </>
        
    )
}
export default Login