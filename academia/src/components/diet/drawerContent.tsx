import { Button, HStack} from "@chakra-ui/react"

import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

const DietDayStatus = function(){
  return (
    <HStack wrap="wrap">
    
          <DrawerRoot size={'lg'}>
            <DrawerBackdrop />
            
            <DrawerTrigger asChild>
        <Button variant="solid" bg={'#074685'} size="sm" color={'white'}>
          Detalhes
        </Button>
      </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Drawer Title</DrawerTitle>
              </DrawerHeader>
              <DrawerBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </DrawerBody>
              <DrawerFooter>
                <DrawerActionTrigger asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerActionTrigger>
                <Button>Save</Button>
              </DrawerFooter>
              <DrawerCloseTrigger />
            </DrawerContent>
          </DrawerRoot>
    </HStack>
  )
}
export default DietDayStatus