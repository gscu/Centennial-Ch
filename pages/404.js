import NextLink from 'next/link'
import { Box, Heading, Text, Container, Divider, Button } from '@chakra-ui/react'

const NotFound = () => {
return (
  <Container>
    <br/>
    <Heading as="h1">ʕ •ᴥ•ʔっ Not Found</Heading>
    <br/>
    <Text css="line-height:10px;">The page you&apos;re looking for was not found.</Text>
    <Divider my={6} />

    <Box my={6} align="center">
      <NextLink href="/">
        <Button colorScheme="teal">Return to home</Button>
      </NextLink>
    </Box>
  </Container>
  )
}

export default NotFound
