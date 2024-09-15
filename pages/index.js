import { Container, Box, Button, Heading, Image, Link, SimpleGrid, Icon, useColorModeValue } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import NextLink from 'next/link'
import GridItem from '../components/grid-item'
import Logom from '../components/logomotion'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { FiInstagram, FiTwitter } from 'react-icons/fi'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box borderRadius="lg" bg ={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
          Nyaa~ I&apos;m Centennial-Chan! The cutest otaku around campus.
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Centennial-Chan Anime Club
          </Heading>
          <Paragraph>
            Centennial-Chan is the host of the anime club at Centennial College where she hopes to make lots of neet friends!
            And you can join it too! Keep up-to-date with our latest {' '}
            <NextLink href="/works/dexoverse"><Link>anime activities</Link></NextLink>!
          </Paragraph>
          <Box aligh="center" my={4}>
            <NextLink href="https://discord.gg/Nzvx6uy8" target="_blank">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="green">
                Join Now!
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Box flexShrink={0}
            mt={{base: 4, md: 0}}
            ml={{md: 6}}
            align="left">
            <Image borderStyle="transparent" maxWidth="150px" display="inline-block" borderRadius="28px" src="/images/polaroidPic.png" alt="Profile Image"/>
          </Box>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            🜸
          </Heading>
          <Paragraph>
           Ohio! I am Centennial-Chan. I hope to make non-fictional friends! From my fictional mutuals!
            Please consider signing up to the anime club!
              We talk about, uh, things like anime! Or anime-ish things!
          </Paragraph>
          <br/>
          <Paragraph>
            Oh!
            And I, the wise Centennial-Chan, will give you my Centennial blessing on your upcoming exams, you baka!
              Ganbatte!
          </Paragraph>
        </Section>

        <Section delay ={0.3}>
          <Link href="https://instagram.com/centennialchan" target="_blank">
            <Button variant="ghost" colorScheme="green"><Icon as={FiInstagram} /></Button>
          </Link>
          <Link href="https://twitter.com/centennial_chan" target="_blank">
            <Button variant="ghost" colorScheme="green"><Icon as={FiTwitter} /></Button>
          </Link>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
