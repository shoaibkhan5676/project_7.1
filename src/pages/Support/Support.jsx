import { Box, FormControl, FormLabel, Input, Grid, GridItem, Checkbox, HStack, Heading, Stack, Text, Textarea, Button, Tag } from '@chakra-ui/react'
import React from 'react'
import CustomCard from '../../chakra/CustomCard'

const Support = () => {
    return (
        <>
            <Grid m="auto" mt="30px" gap="5" width="full"  >



                <Grid gridTemplateColumns="39% 57%" gap={6} w="100%" >



                    <GridItem colSpan={{ base: "2", xl: "1" }} w="100%">
                        <CustomCard w="100%">
                            <Stack spacing={4} >

                                <Heading fontSize="32px" color="#171717" >
                                    Contact Us
                                </Heading>
                                <Text color="#535D66" fontSize="14px"  >
                                    Have a question or just want to know more? Feel free to reach out to us.
                                </Text>
                            </Stack>

                        </CustomCard>



                    </GridItem>
                    <GridItem colSpan={{ base: "2", xl: "1" }}  >
                        <CustomCard  >

                            <Stack spacing={6} >

                                <Text fontSize="14px" fontWeight="medium">
                                    You will receive response within 24 hours of time of submit.
                                </Text>
                                <HStack>
                                    <FormControl>
                                        <FormLabel>Name</FormLabel>
                                        <Input placeholder="James" />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel>Surname</FormLabel>
                                        <Input placeholder="Arthu" />

                                    </FormControl>
                                </HStack>
                                <FormControl>
                                    <FormLabel>Email</FormLabel>
                                    <Input placeholder="Shoaib@gmail.com" />

                                </FormControl>
                                <FormControl>
                                    <FormLabel>Message</FormLabel>
                                    <Textarea placeholder="Your Message" />

                                </FormControl>
                                <Checkbox defaultChecked>I agree with <Box as='span' color="blur" >Term & Conditons</Box></Checkbox>
                                <Stack>
                                    <Button fontWeight="medium" bg="#D8DDE2" color="#797E82"  >Send a Messge</Button>
                                    <Button fontWeight="medium" >Book a Meeting</Button>
                                </Stack>


                            </Stack>

                        </CustomCard>



                    </GridItem>
                </Grid>



                <Grid gridTemplateColumns="39% 57%" gap={6} >

                    <GridItem colSpan={{ base: "2", xl: "1" }} >
                        <CustomCard>
                            <Stack spacing={2} >

                                <Heading fontSize="32px" color="#171717" >
                                    Live Chat
                                </Heading>
                                <Text color="#535D66" fontSize="14px"  >
                                Don't have time to wait for the answer? Chat with us now.
                                </Text>
                            </Stack>


                        </CustomCard>



                    </GridItem>
                    <GridItem  colSpan={{ base: "2", xl: "1" }} >
                        <CustomCard minH="100%" bg="blue" backgroundImage="src/Images/Visual2.png"   backgroundSize="cover" backgroundPosition="center" backgroundRepeat="no-repeat" >
                            <Stack spacing={4} >
                                <Box>

                                <Tag bg="white" color="blue" borderRadius="xl" >
                                    ChatBot
                                </Tag>
                                </Box>
                                <Text color="white" fontSize="16px"  >
                                Chat with us now </Text>
                            </Stack>

                        </CustomCard>



                    </GridItem>

                </Grid>




            </Grid>




        </>
    )
}

export default Support
