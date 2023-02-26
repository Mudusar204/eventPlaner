import React from 'react'
import styles from '../styles/Home.module.css'

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,

} from '@chakra-ui/react'
import { Card, CardBody, CardFooter, Divider, Heading, Text, Box } from '@chakra-ui/react'
import { Button, Center, Flex } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import useEvents from '../customHooks/useEvents'
import Cards from '../components/cards/Cards'
import { wrap } from 'module'
import Navbar from '../components/navbar/Navbar'
import { useState, useEffect } from 'react'
const events = () => {

  const { addingEvent,deleteHandler } = useEvents()
  const dataFromStore = useSelector((store: any) => store.eventSlice.fireBaseWalyEvents)
  console.log(dataFromStore, 'component ma b aa gya data');

  return (
    <div>
      <Navbar />
      <Flex m='50px' justifyContent='space-around'>
        <Text fontSize='4xl' fontWeight='bold' color='purple' p='10px' borderRadius='20px' border='2px solid purple'
          textShadow='5px 5px 9px rgba(0, 0, 0, 0.5)' >Some Popular Events are Given</Text>
        <Button bg='purple' color={'white'} onClick={addingEvent}>Add A New Event</Button>
      </Flex>
      <Box className={styles.cardItems} >

        <Cards />
        <Cards />
        <Cards />
        <Cards />
        {
          dataFromStore.map((data: any) => {
            return (
              <div>
                <Card border={'1px solid purple'} w='330px' m='20px'>
                  <CardBody p='20px'>

                    <Heading color='purple'>This is an Event for {data.titlea}</Heading>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
                      eveniet laudantium voluptatum aperiam, amet consectetur sint dolores fugiat
                      velit ea soluta necessitatibus
                      tempore asperiores id quidem praesentium esse incidunt placeat?</Text>
                    <Accordion>
                      <AccordionItem>
                        <AccordionButton>
                          <Box as="span" flex='1' textAlign='left'>
                            Show more Detail
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, commodi
                          accusantium. Aspernatur animi quaerat quae iure, nostrum asperiores, maxime rem soluta
                          consequatur temporibus sint minima sunt explicabo perspiciatis fugiat architecto.
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <Text>Location: <Text fontWeight='bold' textTransform='uppercase'>

                      {data.locationa}
                    </Text>
                    </Text>
                    <Text>Date:{data.datea}</Text>
                  </CardFooter>
                  <Button bg='purple'  color='white' onClick={deleteHandler} >Delete this</Button>

                </Card>
              </div>
            )
          })
        }



      </Box>

    </div>
  )
}

export default events