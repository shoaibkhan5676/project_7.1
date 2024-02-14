import React from 'react'
import Sidenav from './Sidenav'
import Topnav from './Topnav'
import { Box, Flex, Stack, Text, useDisclosure } from '@chakra-ui/react'
import SideDrawer from './SideDrawer'


const Dashboard = ({children,title}) => {

    const { isOpen, onOpen, onClose } = useDisclosure()



    return (
        <>
            <Flex h="100vh" overflowX="hidden" >

                <Box
                    display={{
                        base: "none",
                        xl: "block"
                    }}
                >

                    <Sidenav />
                </Box>
                <SideDrawer onClose={onClose} isOpen={isOpen} />
                <Stack flexGrow={1} h="100vh" bg="#F3F3F7"  >

                    <Topnav title={title} onOpen={onOpen} />
                    
                    <Box  h="calc(100vh - 64px) "  width="65rem" m="auto" overflowX="hidden" overflowY="auto" pb="30px"  >
                        {children}

                    </Box>






                </Stack>
            </Flex>



        </>
    )
}

export default Dashboard
