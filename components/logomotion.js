import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 55px;
line-height: 55px;
padding: 10px;
`

const Logom = () => {
  const logoImg = `/images/logo${useColorModeValue('', '-dark')}.png`

  return (
    <a>
      <LogoBox>
        <Image src={logoImg} width={55} height={55} />
      </LogoBox>
    </a>
  )
}

export default Logom
