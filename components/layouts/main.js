import Head from 'next/head'
import Navbar from '../navbar.js'
import NoSsr from '../no-ssr'
import { Box, Container } from '@chakra-ui/react'
import VoxelCub from '../voxel-cub'
import Footer from '../footer'

const Main = ({ children, router}) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="1hq website" />
        <meta name="author" content="1hq" />
        <meta name="author" content="1hq" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>Centennial-Chan</title>
      </Head>
      
      <Navbar path={router.asPath}/>
      
      <Container maxW="container.md" pt={14}>
        <NoSsr>
          <VoxelCub />
        </NoSsr>
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
