import { Box, Center, Text, Button, Input } from "@chakra-ui/react";
import useAddEvent from '../customHooks/useAddEvent';
import React from 'react'
import { useState } from 'react'
import Link from "next/link";
const addEvent = () => {
    const { title, setTitle, datee, setDatee, time, setTime, location, setLocation, discription, setDiscription,
        invities, setInvities, addEventHandler, loader, setLoader } = useAddEvent()

    return (
        <div>

            <Center>
                <Box m='50px' border={'2px solid'} borderColor='purple' p='20' borderRadius='20px' bg='whiteSmoke'>
                    <Text fontSize={'4xl'} color='purple' fontWeight={'extrabold'}>Add An Event</Text>
                    <Input mt='20px' size={'lg'} value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Enter Title" />
                    <Input mt='20px' size={'lg'} value={datee} onChange={(e) => setDatee(e.target.value)} type="text" placeholder="Enter event Date" />
                    <Input mt='20px' size={'lg'} value={time} onChange={(e) => setTime(e.target.value)} type="text" placeholder="Enter Event Time" />
                    <Input mt='20px' size={'lg'} value={location} onChange={(e) => setLocation(e.target.value)} type="text" placeholder="Enter Event Location" />
                    <Input mt='20px' size={'lg'} value={discription} onChange={(e) => setDiscription(e.target.value)} type="text" placeholder="Enter  Detail" />
                    <Input mt='20px' size={'lg'} value={invities} onChange={(e) => setInvities(e.target.value)} type="text" placeholder="Enter your invities" />
                    {loader ? <button  >Loading...</button> :
                        <Button mt='20px' mr='20px' bg='purple' color='white' onClick={addEventHandler} >Add Event</Button>}
                    <Button mt='20px' color='white' bg='purple' >

                        <Link href='/Events'> RETURN</Link>
                    </Button>




                </Box>
            </Center>
        </div>
    )
}

export default addEvent