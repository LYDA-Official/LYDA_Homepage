import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  theme,
  Image,
} from "@chakra-ui/react"
import LOGO from './assets/logo/LOGO.svg'

export const App = () => (
 
    <Box textAlign="center" fontSize="xl" mt={'132px'}>
      <Grid minH="100vh" >
        <VStack spacing={8}>
         <Image  src={LOGO}/>
         <Text >LYDA Homepage</Text>
         
        </VStack>
      </Grid>
    </Box>
 
)
