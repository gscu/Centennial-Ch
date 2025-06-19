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

const About = () => {
  return (
    <Layout>
      <Container>

        <Box borderRadius="lg" bg ={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
          Nyaa~ I&apos;m Centennial-Chan! The cutest otaku around campus.
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Who We Are
          </Heading>

          <Paragraph>
            This the official Anime Club of Centennial College with the approval of the CCSAI Student Association.
						Who we really are, will always be a group that loves discussing anime and manga. Some of us being cultured connoisseurs.
						With Centennial-Chan as the spirit that will keep on animating for centennial years to come!
          </Paragraph>

          <Box aligh="center" my={4}>
            <NextLink href="https://discord.gg/Bmpbw52zhr" target="_blank">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="green">
                Join Now!
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay ={0.3}>
          <Link href="https://instagram.com/centennialchan" target="_blank">
            <Button variant="ghost" colorScheme="green"><Icon as={FiInstagram} /></Button>
          </Link>

          <Link href="https://twitter.com/centennial_chan" target="_blank">
            <Button variant="ghost" colorScheme="green"><Icon as={FiTwitter} /></Button>
          </Link>
        </Section>

        <Box flexShrink={0}
            mt={{base: 4, md: 0}}
            ml={{md: 6}}
            align="center">
            <Image borderStyle="transparent" maxWidth="150px" display="inline-block" borderRadius="28px" src="/images/congratz.png" alt="Celebration Image"/>
          </Box>

      </Container>
    </Layout>
  )
}

export default About
