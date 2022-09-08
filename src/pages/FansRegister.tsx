import * as React from "react"
import {
    Flex
} from "@chakra-ui/react"
import { RegisterHeaderLayout } from "../layouts/register/RegisterHeaderLayout"
import { FormLayout } from "../layouts/register/FormLayout"
import PreRegisterFans from '../assets/SVG/PreRegisterFans.svg'

export const FansRegister = () => {
    return (
        <Flex bg={'linear-gradient(276.99deg, #55C2FF -5.6%, #4361EE 56.85%)'} flexDir={'column'} justifyContent='center'>
             <RegisterHeaderLayout image={PreRegisterFans} height={'56.9px'} width={'536px'} title={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. '}/>
             <FormLayout type='creators'/>

        </Flex>
    )
}