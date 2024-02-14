import { Stack, Heading, HStack, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { Link, useLocation } from 'react-router-dom';





const navLinks = [
  {
    icon: RxDashboard,
    text: "Dashboard",
    link: "/",
  },
  {
    icon: BsArrowDownUp,
    text: "Transactions",
    link: "/transactions",
  },
];


const Sidenav = () => {


  const location=useLocation()
  function isActiveLink(link){
    return location.pathname===link
  }




  return (
    <>
      <Stack h="100vh" bg="white" minW={{ base: "100%", xl: "256px" }} p="2" textAlign="center" >
        <Heading fontSize="29px" color="blue" mt="30px" mb="0"  >
          @CODE UP
        </Heading>
        <Stack justifyContent="space-between" h="full" pb="12px" >
          <Stack>
            {navLinks.map((element, index) => {
              return (
                <Link key={index} to={element.link} >
                  <HStack p="12px 16px"
                    bg={isActiveLink(element.link)?"#F3F3F7":"transparent"}


                   color={isActiveLink(element.link)?"#171717":"#797E82"} _hover={{ bg: "#F3F3F7", color: "#171717", }} fontWeight="medium" borderRadius="lg" cursor="pointer" >
                    <Icon as={element.icon} />
                    <Text>
                      {element.text}

                    </Text>
                  </HStack>
                </Link>

              )
            })}


          </Stack>

          <Stack>
            <Link to="/support" >
              <HStack p="12px 16px" _hover={{ bg: "#F3F3F7", color: "#171717", }} color="#797E82" fontWeight="medium" borderRadius="lg" cursor="pointer" >
                <Icon as={BiSupport} />
                <Text>
                  Support

                </Text>
              </HStack>
            </Link>

          </Stack>

        </Stack>





      </Stack>


    </>
  )
}

export default Sidenav
