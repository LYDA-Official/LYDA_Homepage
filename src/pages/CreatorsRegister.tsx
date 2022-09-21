import * as React from "react"
import {
    Flex,
} from "@chakra-ui/react"
import { RegisterHeaderLayout } from "../layouts/register/RegisterHeaderLayout"
import PreRegisterCreators from '../assets/SVG/PreRegisterCreators.svg'
import { FormLayout } from "../layouts/register/FormLayout"

export const CreatorsRegister = () => {

    return (
        <Flex bg={'linear-gradient(276.99deg, #55C2FF -5.6%, #4361EE 56.85%)'} flexDir={'column'}>
             <RegisterHeaderLayout image={PreRegisterCreators} height={'56.9px'} width={'634.2px'} title={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. '}/>
             <FormLayout type='creators'/>
        </Flex>
    )
}