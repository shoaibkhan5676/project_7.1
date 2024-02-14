import { Button, HStack, Heading, Icon, Stack, Tag, Text } from '@chakra-ui/react'
import React from 'react'
import CustomCard from '../../../chakra/CustomCard'
import { FaInfoCircle } from "react-icons/fa";
import { BiSolidDownload } from "react-icons/bi";
import { MdUpload } from "react-icons/md";



const PortfolioSection = () => {
    return (
        <>
            <CustomCard>
                <HStack justifyContent="space-between" alignItems={{base:"flex-start",lg:"center"}} position={{base:"relative",xl:"static"}}  >
                    <HStack spacing={9} flexDirection={{base:"column",lg:"row"}}  alignItems={{base:"flex-start",lg:"center"}}  >
                        <Stack>
                            <HStack>

                                <Text fontSize="14px" fontWeight="medium" color="#535D66" >
                                    Total Portfolio Value
                                </Text>
                                <Icon as={FaInfoCircle} />

                            </HStack>
                            <Heading fontSize="24px" fontWeight="medium" >
                                ₹112,312.24
                            </Heading>
                        </Stack>


                        <Stack>

                            <Text fontSize="14px" fontWeight="medium" color="#535D66" >
                                Wallet Balances
                            </Text>

                            <HStack spacing={3} >
                                <HStack>

                                    <Heading fontSize="24px" fontWeight="medium" >
                                        22.39401000
                                    </Heading>
                                    <Tag>BTC</Tag>
                                </HStack>
                                <HStack>
                                    <Heading fontSize="24px" fontWeight="medium" >
                                        ₹1,300.00

                                    </Heading>
                                    <Tag>INR</Tag>
                                </HStack>

                            </HStack>
                        </Stack>

                    </HStack>



                    <HStack position={{base:"absolute",xl:"static"}} right="15px"   >
                        <Button bg="blue" color="white" _hover={{ bg: "#0F0FE6" }}   >
                            <HStack>
                                <Icon as={BiSolidDownload} />
                                <Text>
                                    Deposit
                                </Text>
                            </HStack>
                        </Button>
                        <Button bg="blue" color="white" _hover={{ bg: "#0F0FE6" }}  >
                            <HStack>
                                <Icon as={MdUpload} />
                                <Text>
                                    Withdraw
                                </Text>
                            </HStack>
                        </Button>


                    </HStack>

                </HStack>

            </CustomCard>

        </>
    )
}

export default PortfolioSection
