import * as React from "react"
import {
    Flex
} from "@chakra-ui/react"
import {InfoLayout} from '../layouts/about/InfoLayout'
import { PartnersLayout } from "../layouts/about/PartnersLayout"
import { HeaderLayout } from "../layouts/about/HeaderLayout"

export const About = () => {
    return (
       
        <Flex bg={'linear-gradient(276.99deg, #55C2FF -5.6%, #4361EE 56.85%)'} flexDir={'column'}>
             <HeaderLayout/>
            <InfoLayout/>
            <PartnersLayout/>
           
        </Flex>
    )
}