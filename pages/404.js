import NextLink from 'next/link'
import { Box, Heading, Text, Container, Divider, Button } from '@chakra-ui/react'

const NotFound = () => {
return (
  <Layout>
  <Container>
    <br/>
    <Box flexShrink={0}
        mt={{base: 4, md: 0}}
        ml={{md: 6}}
        align="left">
        <Image borderStyle="transparent" maxWidth="150px" display="inline-block" borderRadius="28px" src="/images/polaroidPic.png" alt="Profile Image"/>
    </Box>
              
    <Heading as="h1">Not Found</Heading>
  
    <br/>
    <Text css="line-height:10px;">The page you&apos;re looking for was not found.</Text>
    <Divider my={6} />

    <Box my={6} align="center">
      <NextLink href="/">
        <Button colorScheme="green">Return to home</Button>
      </NextLink>
    </Box>
  </Container>
  </Layout>
  )
}

export default NotFound
