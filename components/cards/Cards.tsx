import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'
import {Card,CardBody,CardFooter,Divider,Heading,Text}from '@chakra-ui/react'
const Cards = () => {
  return (
    <div>
         <Card  border={'1px solid purple'} w='330px'm='20px' >
            <CardBody p='20px'>
                <Heading color='purple'>This is an Event</Heading>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque 
                    eveniet laudantium voluptatum aperiam, amet consectetur sint dolores fugiat
                     velit ea soluta necessitatibus 
                    tempore asperiores id quidem praesentium esse incidunt placeat?</Text>
                  <Divider/>
            <Divider/>

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
            <Divider/>
            <CardFooter>
                This ending
            </CardFooter>
        </Card>
    </div>
  )
}

export default Cards