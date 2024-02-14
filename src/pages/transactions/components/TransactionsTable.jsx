import React from 'react'
import CustomCard from '../../../chakra/CustomCard'
import { IoSearch } from "react-icons/io5";

import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Stack,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Tag,
    HStack,
    Text,
    InputGroup,
    InputLeftAddon,
    InputLeftElement,
    Icon,
    Input,
} from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const TransactionsTable = () => {

    const TableTabs = [
        {
            text: "All",
            count: 349,
        },
        {
            text: "Deposit",
            count: 114,
        },
        {
            text: "Withdraw",
            count: 213,
        },
        {
            text: "Trade",
            count: 22,
        },
    ]
    const tableData = [
        {
            id: "HD82NA2H",
            date: "2023-06-20",
            time: "07:00 AM",
            type: {
                name: "INR Deposit",
                tag: "E-Transfer",
            },
            amount: "+₹81,123",
            status: "pending",
        },
        {
            id: "HD82NA4H",
            date: "2023-06-18",
            time: "07:00 AM",
            type: {
                name: "INR Widthdraw",
                tag: "Wire Transfer",
            },
            amount: "-₹55,123",
            status: "processing",
        },
        {
            id: "HD82NA5H",
            date: "2023-06-18",
            time: "07:00 AM",
            type: {
                name: "Buy",
                tag: "BTC",
            },
            amount: "12.0554484 BTC",
            status: "cancelled",
        },
        {
            id: "HD82NA6H",
            date: "2023-06-18",
            time: "07:00 AM",
            type: {
                name: "Sell",
                tag: "BTC",
            },
            amount: "-2.0554484 BTC",
            status: "completed",
        },
        {
            id: "HD82NA7H",
            date: "2023-06-20",
            time: "07:00 AM",
            type: {
                name: "BTC Deposit",
            },
            amount: "+15.5000000",
            status: "pending",
        },
        {
            id: "HD82NA8H",
            date: "2023-06-18",
            time: "07:00 AM",
            type: {
                name: "BTC Widthdraw",
            },
            amount: "-5.05555544",
            status: "completed",
        },
    ];




    const statusColor = {
        pending: "#797E82",
        processing: "#F5A50B",
        completed: "#059669",
        cancelled: "#DC2626",
    };




    const TableHead = ["ID", "Date & Time", "Type", "Amount", "Status"]

    return (
        <>
            <CustomCard>
                <Tabs>
                    <TabList>
                        <HStack justifyContent="space-between" w="full" >
                            <HStack>


                                {TableTabs.map((element, index) => {
                                    return (
                                        <Tab key={index} ><HStack><Text>{element.text}</Text><Tag>{element.count}</Tag></HStack></Tab>

                                    )
                                })}

                            </HStack>
                            <HStack>

                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<Icon as={IoSearch} color="gray.300" />}
                                    />
                                    <Input type="text" placeholder='Search By ID' />

                                </InputGroup>
                            </HStack>


                        </HStack>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <TableContainer>
                                <Table variant='simple'>
                                    <Thead>
                                        <Tr>
                                            {TableHead.map((element, index) => {
                                                return (
                                                    <Th color="#797E82" fontSize="12px" >{element}</Th>

                                                )
                                            })}

                                        </Tr>
                                    </Thead>
                                    <Tbody>

                                        {tableData.map((element, index) => {
                                            return (
                                                <Tr key={index} >
                                                    <Td><Text fontSize="16px" fontWeight="medium">{element.id}</Text></Td>
                                                    <Td><Stack>
                                                        <Text fontSize="16px" fontWeight="medium" color="#171717" >{element.date}</Text>
                                                        <Text fontSize="12px" color="#797E82" >{element.time}</Text>
                                                    </Stack>
                                                    </Td>
                                                    <Td>
                                                        <Stack>
                                                            <Text fontSize="16px" fontWeight="medium" color="#171717" >{element.type.name}</Text>
                                                            <Text fontSize="12px" color="#797E82" >{element.type.tag}</Text>
                                                        </Stack>

                                                    </Td>
                                                    <Td>
                                                        <Stack>
                                                            <Text fontSize="16px" fontWeight="medium" color="#171717" >{element.amount}</Text>
                                                            
                                                        </Stack>

                                                    </Td>
                                                    <Td>
                                                        <Tag borderRadius="lg" bg={statusColor[element.status]} color="white" >
                                                            {element.status}

                                                        </Tag>
                                                    </Td>
                                                </Tr>

                                            )



                                        })}













                                    </Tbody>

                                </Table>
                            </TableContainer>







                        </TabPanel>
                        <TabPanel>
                            <TableContainer>
                                <Table variant='simple'>
                                    <Thead>
                                        <Tr>
                                            {TableHead.map((element, index) => {
                                                return (
                                                    <Th color="#797E82" fontSize="12px" >{element}</Th>

                                                )
                                            })}

                                        </Tr>
                                    </Thead>
                                    <Tbody>

                                        {tableData.map((element, index) => {
                                            return (
                                                <Tr key={index} >
                                                    <Td><Text fontSize="16px" fontWeight="medium">{element.id}</Text></Td>
                                                    <Td><Stack>
                                                        <Text fontSize="16px" fontWeight="medium" color="#171717" >{element.date}</Text>
                                                        <Text fontSize="12px" color="#797E82" >{element.time}</Text>
                                                    </Stack>
                                                    </Td>
                                                    <Td>
                                                        <Stack>
                                                            <Text fontSize="16px" fontWeight="medium" color="#171717" >{element.type.name}</Text>
                                                            <Text fontSize="12px" color="#797E82" >{element.type.tag}</Text>
                                                        </Stack>

                                                    </Td>
                                                    <Td>
                                                        <Stack>
                                                            <Text fontSize="16px" fontWeight="medium" color="#171717" >{element.amount}</Text>
                                                            
                                                        </Stack>

                                                    </Td>
                                                    <Td>
                                                        <Tag borderRadius="lg" bg={statusColor[element.status]} color="white" >
                                                            {element.status}

                                                        </Tag>
                                                    </Td>
                                                </Tr>

                                            )



                                        })}













                                    </Tbody>

                                </Table>
                            </TableContainer>







                        </TabPanel>
                       
                        <TabPanel>
                            <TableContainer>
                                <Table variant='simple'>
                                    <Thead>
                                        <Tr>
                                            {TableHead.map((element, index) => {
                                                return (
                                                    <Th color="#797E82" fontSize="12px" >{element}</Th>

                                                )
                                            })}

                                        </Tr>
                                    </Thead>
                                    <Tbody>

                                        {tableData.map((element, index) => {
                                            return (
                                                <Tr key={index} >
                                                    <Td><Text fontSize="16px" fontWeight="medium">{element.id}</Text></Td>
                                                    <Td><Stack>
                                                        <Text fontSize="16px" fontWeight="medium" color="#171717" >{element.date}</Text>
                                                        <Text fontSize="12px" color="#797E82" >{element.time}</Text>
                                                    </Stack>
                                                    </Td>
                                                    <Td>
                                                        <Stack>
                                                            <Text fontSize="16px" fontWeight="medium" color="#171717" >{element.type.name}</Text>
                                                            <Text fontSize="12px" color="#797E82" >{element.type.tag}</Text>
                                                        </Stack>

                                                    </Td>
                                                    <Td>
                                                        <Stack>
                                                            <Text fontSize="16px" fontWeight="medium" color="#171717" >{element.amount}</Text>
                                                            
                                                        </Stack>

                                                    </Td>
                                                    <Td>
                                                        <Tag borderRadius="lg" bg={statusColor[element.status]} color="white" >
                                                            {element.status}

                                                        </Tag>
                                                    </Td>
                                                </Tr>

                                            )



                                        })}













                                    </Tbody>

                                </Table>
                            </TableContainer>







                        </TabPanel>
                        <TabPanel>
                            <TableContainer>
                                <Table variant='simple'>
                                    <Thead>
                                        <Tr>
                                            {TableHead.map((element, index) => {
                                                return (
                                                    <Th color="#797E82" fontSize="12px" >{element}</Th>

                                                )
                                            })}

                                        </Tr>
                                    </Thead>
                                    <Tbody>

                                        {tableData.map((element, index) => {
                                            return (
                                                <Tr key={index} >
                                                    <Td><Text fontSize="16px" fontWeight="medium">{element.id}</Text></Td>
                                                    <Td><Stack>
                                                        <Text fontSize="16px" fontWeight="medium" color="#171717" >{element.date}</Text>
                                                        <Text fontSize="12px" color="#797E82" >{element.time}</Text>
                                                    </Stack>
                                                    </Td>
                                                    <Td>
                                                        <Stack>
                                                            <Text fontSize="16px" fontWeight="medium" color="#171717" >{element.type.name}</Text>
                                                            <Text fontSize="12px" color="#797E82" >{element.type.tag}</Text>
                                                        </Stack>

                                                    </Td>
                                                    <Td>
                                                        <Stack>
                                                            <Text fontSize="16px" fontWeight="medium" color="#171717" >{element.amount}</Text>
                                                            
                                                        </Stack>

                                                    </Td>
                                                    <Td>
                                                        <Tag borderRadius="lg" bg={statusColor[element.status]} color="white" >
                                                            {element.status}

                                                        </Tag>
                                                    </Td>
                                                </Tr>

                                            )



                                        })}













                                    </Tbody>

                                </Table>
                            </TableContainer>







                        </TabPanel>
                       
                       
                    </TabPanels>
                </Tabs>












            </CustomCard>




        </>
    )
}

export default TransactionsTable
