import { Flex, Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useColorMode, useColorModeValue, ColorModeButton } from "@/components/ui/color-mode";
function WeekProgression() {
    const [selectedDay, setSelectedDay] = useState("Domingo");
    const diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    
   
    useEffect(() => {
        const dateNow = new Date();
        const dayNow = dateNow.getDay();
        setSelectedDay(diasDaSemana[dayNow]);
    }, [])
    
    
    return (
        
        <Flex 
            w={'full'}
            justifyContent={'space-between'}
            h={'5vh'}
            color={useColorModeValue('white', 'black')}
            bg={useColorModeValue(' #1A1C20', 'transparent')}
            borderRadius={'5px'}
            alignItems={'center'}
        

            css={{
                "& > div.weekDay": {
                 width: '14%',
                 display: 'flex',
                 justifyContent: 'center',
                 alignItems: 'center',
                 border: '1px solid rgb(90, 90, 90)',
                 h:'100%',
                 borderRadius: '5px',
                 transition: "background-color 0.3s ease",
                 cursor: 'pointer',
                 color: useColorModeValue('white', 'black'),
                },
                "& > div.weekDay:hover":{
                    bg: ' #074685',
                    color: 'white'
                    
                }
            }}
        >
         {diasDaSemana.map((dia) => (
        <Box
          key={dia}
          onClick={() => setSelectedDay(dia)} 
          border={selectedDay === dia ? "1px solid #074685" : "1px solid rgb(90, 90, 90)"}
          className="weekDay"
          bg={selectedDay === dia ? ' #074685' : useColorModeValue(' #1A1C20', 'rgb(255, 255, 255)')}
          _hover={{ bg: selectedDay === dia ? '#138A36' : 'white' }}
        >
          {dia}
        </Box>
      ))}
        </Flex>
    )
}

export default WeekProgression;