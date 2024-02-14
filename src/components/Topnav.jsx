import { Button,Box, HStack, Heading, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { BiSolidUserCircle } from "react-icons/bi";
import { FaBars } from "react-icons/fa6";


import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,

} from '@chakra-ui/react'

const Topnav = ({ onOpen, title }) => {




    return (
        <>
            <Box minH="64px" w="full" bg="white"  >

                <HStack maxW="70rem" px="2" fontWeight="medium" justifyContent="space-between" m="0 auto" h="16" >
                    <Icon as={FaBars} fontSize="24px" onClick={onOpen} display={{ base: "block", xl: "none" }} />


                    <Heading fontSize="28px" >{title}</Heading>
                    <Menu>
                        <MenuButton fontSize="35px">
                            <Icon as={BiSolidUserCircle} />
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Log Out</MenuItem>
                            <MenuItem>Support</MenuItem>
                        </MenuList>
                    </Menu>


                </HStack>
            </Box>

        </>
    )
}

export default Topnav
