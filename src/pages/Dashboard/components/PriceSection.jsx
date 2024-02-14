import React from 'react'
import CustomCard from '../../../chakra/CustomCard'
import { Button, Flex, HStack, Heading, Icon, Image, Stack, Text } from '@chakra-ui/react'
import { FiArrowUpRight } from "react-icons/fi";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'


const TimeText = ["7:15 PM", "12:55 AM", "5:55 PM", "12:15 PM", "6:35 AM"]


const PriceSection = () => {
  return (
    <>
      <CustomCard minH="100%">
        <Stack>



          <HStack justifyContent="space-between" alignItems="start"  >
            <HStack>
              <Stack>

                <Text fontSize="14px" fontWeight="medium" color="#535D66" >
                  Current Price
                </Text>

                <HStack spacing={3} justifyContent="end" >
                  <HStack>

                    <Heading fontSize="24px" fontWeight="medium" >
                      ₹26,670.25
                    </Heading>
                  </HStack>
                  <HStack>
                    <Icon as={FiArrowUpRight} />
                    <Text fontSize="14px" color="#059669" >
                      0.04%

                    </Text>
                  </HStack>

                </HStack>
              </Stack>

            </HStack>



            <HStack
            //  position={{ base: "absolute", xl: "static" }} right="15px" 
               >
              <Button bg="blue" color="white" _hover={{ bg: "#0F0FE6" }}   >
                <HStack>
                  <Icon as={FaPlusCircle} />
                  <Text>
                    Buy
                  </Text>
                </HStack>
              </Button>
              <Button bg="blue" color="white" _hover={{ bg: "#0F0FE6" }}  >
                <HStack>
                  <Icon as={FaMinusCircle} />
                  <Text>
                    Sell
                  </Text>
                </HStack>
              </Button>


            </HStack>
          </HStack>
          <Tabs variant='soft-rounded' colorScheme='gray'  >
            <Flex justifyContent="end">

            <TabList bg="#F3F3F7" p="3px" >
              {["1H", "1D", "1W", "1M"].map((element,index)=>{
                return(
                  <Tab key={index} borderRadius="md" p="2px 8px" _selected={{ bg: "white" }} >{element}</Tab>

                )
              })}
            </TabList>
            </Flex>
            <TabPanels>
              <TabPanel>
                <Image width="100%" src='src/Images/Graph.svg' />
                <HStack justifyContent="space-between" mt={2} >
                  {TimeText.map((element, index) => {
                    return (
                      <Text key={index} fontSize="14px" color="#797E82" >
                        {element}
                      </Text>
                    )
                  })}

                </HStack>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>






        </Stack>





      </CustomCard >

    </>
  )
}

export default PriceSection
