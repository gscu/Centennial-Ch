import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 30px;
line-height: 20px;
padding: 10px;

img {
  transition: 800ms ease;
}

&:hover img {
  transition: transform 1.2s ease;
  transform: rotate(360deg);
}
`

const Logo = () => {
  const logoImg = `/images/logo${useColorModeValue('', '-dark')}.png`

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={logoImg} width={20} height={20} alt="logo" />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily='Roboto, sans-serif'
            fontWeight="bold"
            ml={3}
          >
            
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
