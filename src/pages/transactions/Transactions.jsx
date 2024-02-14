import { Button, HStack, Icon, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { LuDownload } from "react-icons/lu";
import TransactionsTable from './components/TransactionsTable';


const Transactions = () => {
  return (
    <>
        <Stack mt="20px">
            <HStack justifyContent="end">
                <Button bg="blue" color="white" p="16px 10px" _hover={{ bg: "#0F0FE6" }} >
                    <HStack>

                    <Icon as={LuDownload} />
                    <Text>Export CSV</Text>
                    </HStack>
                </Button>

            </HStack>
            <TransactionsTable/>





        </Stack>
      
    </>
  )
}

export default Transactions
