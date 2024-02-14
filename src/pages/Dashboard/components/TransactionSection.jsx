import React, { Fragment } from 'react'
import CustomCard from '../../../chakra/CustomCard'
import { Button, Divider, HStack, Icon, Stack, Text } from '@chakra-ui/react'
import { HiCurrencyDollar } from "react-icons/hi";
import { SiBitcoinsv } from "react-icons/si";




const transactions = [
    {
        id: "1",
        icon: HiCurrencyDollar,
        text: "INR Deposit",
        amount: "+ ₹81,123.10",
        timestamp: "2022-06-09 7:06 PM",
        secondamount:"",
    },
    {
        id: "2",
        icon: SiBitcoinsv,
        text: "BTC  Sell",
        amount: "- 12.48513391 BTC",
        timestamp: "2022-06-09 7:06 PM",
        secondamount:"+ ₹81,123.10"
    },
    {
        id: "3",
        icon: HiCurrencyDollar,
        text: "INR Deposit",
        amount: "+ ₹81,123.10",
        timestamp: "2022-06-09 7:06 PM",
        secondamount:""
    },
];





const TransactionSection = () => {
    return (
        <>
            <CustomCard minH="100%" >
                <Text fontSize="14px" color="#535D66" fontWeight="medium" >
                    Recent Transations
                </Text>
                <Stack mt="15px" mb="15px" spacing={3} >

                    {transactions.map((element,index) => {
                        return (


                            <Fragment key={element.id} >
                                {index!==0&&<Divider/>}

                           
                            <HStack  >
                                <HStack width="40px" height="40px" bg="#F3F3F7" borderRadius="full" justifyContent="center" >
                                    <Icon fontSize="18px" as={element.icon} />
                                </HStack>
                                <HStack flexGrow={1} justifyContent="space-between" >
                                    <Stack justifyContent="center" spacing={0} >
                                        <Text fontSize="16px" fontWeight="medium" color="#171717" >{element.text}</Text>
                                        <Text fontSize="14px" color="#797E82" >{element.timestamp}</Text>

                                    </Stack>
                                    <Stack alignItems="end" spacing={0}  >
                                        <Text fontSize="16px" fontWeight="medium" color="#171717" >{element.amount}</Text>
                                        <Text fontSize="14px" color="#797E82" >{element.secondamount}</Text>

                                    </Stack>


                                </HStack>

                            </HStack>
                            </Fragment>
                        )
                    })}







                </Stack>


                <Button w="full" >View All</Button>
            </CustomCard>

        </>
    )
}

export default TransactionSection
