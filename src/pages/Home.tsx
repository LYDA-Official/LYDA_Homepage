import * as React from "react"
import {
 Flex
} from "@chakra-ui/react"
import {Intro} from '../layouts/Intro'
import {WhatIsLyda} from '../layouts/WhatIsLyda'
import { SeeForYourself } from "../layouts/SeeForYourself"
import { PreRegistration } from "../layouts/PreRegistration"
import { Roadmap } from "../layouts/Roadmap"

export const Home = () => {
    return (
        <Flex bg={'red'} flexDir={'column'}>
            <Intro/>
            <WhatIsLyda/>
            <Roadmap/>
            <SeeForYourself/>
            <PreRegistration/>
        </Flex>
    )
}