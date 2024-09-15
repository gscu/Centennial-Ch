import NextLink from 'next/link'
import { Box, Heading, Text, Container, Divider, Image, Button } from '@chakra-ui/react'

const NotFound = () => {
return (
  <Container>
    <br/>

    <Heading as="h1">Not Found</Heading>

    <br/>
    <Text css="line-height:10px;">The page you&apos;re looking for was not found.</Text>
    <Divider my={6} />

    <Box my={6} align="center">
      <NextLink href="/">
        <Button colorScheme="green">Return to home</Button>
      </NextLink>
    </Box>
    <Box flexShrink={0}
      mt={{base: 4, md: 0}}
      ml={{md: 6}}
      align="center">
      <Image borderStyle="transparent" maxWidth="340px" display="inline-block" borderRadius="28px" src="/images/404.png" alt="404"/>
    </Box>
  </Container>
  )
}

export default NotFound
