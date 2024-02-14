import { Box, Grid, GridItem  } from '@chakra-ui/react'
import React from 'react'
import PortfolioSection from './PortfolioSection';
import PriceSection from './PriceSection';
import TransactionSection from './TransactionSection';
import InfoCard from './InfoCard';





const DashboardContent = () => {
    return (
        <>
            

                <Grid m="auto" mt="30px" gap="6"  width="full" gridTemplateColumns={{ base: "repeat(1,1fr)", lg: "repeat(2,1fr)" }} >
                    <GridItem colSpan={2} >
                        <PortfolioSection/>
                    
                    </GridItem>
                    <GridItem colSpan={{base:"2",xl:"1"}} >
                        <PriceSection/>
                    

                    </GridItem>
                    <GridItem colSpan={{base:"2",xl:"1"}} >
                        <TransactionSection/>
                    

                    </GridItem>
                    <GridItem colSpan={{base:"2",xl:"1"}} >
                        <InfoCard TagbgColor="blue" TagTextColor="white"  TagText="Loan" bgImg="src/Images/Visual1.png"  Disc="Learn more about Loans - Keep your Bitcoin, access it's value without selling it" />
                    

                    </GridItem>

                    <GridItem colSpan={{base:"2",xl:"1"}} >
                        <InfoCard TagbgColor="white" TagTextColor="blue" Cardbg="blue" TagText="Loan" bgImg="src/Images/Visual2.png"  Disc="Learn more about Loans - Keep your Bitcoin, access it's value without selling it" DicsColor="white"  />
                    

                    </GridItem>




                    

                </Grid>



           

        </>
    )
}

export default DashboardContent
