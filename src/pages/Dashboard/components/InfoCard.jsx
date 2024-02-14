import React from 'react'
import CustomCard from '../../../chakra/CustomCard'
import { Stack, Tag, Text, Box } from '@chakra-ui/react'

const InfoCard = ({ TagText, Disc,bgImg,TagTextColor,TagbgColor,DicsColor,Cardbg }) => {
    return (
        <>
            <CustomCard bg={Cardbg}  backgroundImage={bgImg} backgroundSize="cover" backgroundPosition="center" backgroundRepeat="no-repeat" >
                <Stack spacing={2} >
                    <Box>

                        <Tag bg={TagbgColor} color={TagTextColor} borderRadius="lg" >{TagText}</Tag>
                    </Box>
                    <Text color={DicsColor} >{Disc}</Text>
                </Stack>
            </CustomCard>

        </>
    )
}

export default InfoCard
