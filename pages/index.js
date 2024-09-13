import { Container, Box, Button, Heading, Image, Link, SimpleGrid, Icon, useColorModeValue } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import NextLink from 'next/link'
import GridItem from '../components/grid-item'
import Logom from '../components/logomotion'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { FiGithub, FiTwitter } from 'react-icons/fi'
const Page = () => {
  return (
    <Layout>
      <Container>
        <Box borderRadius="lg" bg ={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
          Hello there, I&apos;m a hobbyist developer! And night owl by nature.
        </Box>

        <Box display={{md:'flex'}}>
          <Box flexGrow={1}>
            <Heading>
            <Logom/>
            </Heading>
            <p css="line-height:10px"><b></b></p>
            <p css="line-height:10px">Dev <b>&#124;</b> Otaku <b>&#124;</b> Crypto</p>
          </Box>

          <Box flexShrink={0}
            mt={{base: 4, md: 0}}
            ml={{md: 6}}
            align="left">
            <Image borderStyle="transparent" maxWidth="150px" display="inline-block" borderRadius="28px" src="/images/polaroidPic.png" alt="Profile Image"/>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            ꐈ
          </Heading>
          <Paragraph>
            A developer that has a soft spot for bears. And someone who on occasion likes to give it their all, from backend to front. 
            Currently project working off and on {' '}
            <NextLink href="/works/dexoverse"><Link>Dexoverse</Link></NextLink>
            .
          </Paragraph>
          <Box aligh="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            🜸
          </Heading>
          <Paragraph>
           64 bits about me: From the outskirts, my little mind ignited the first time I booted up Windows XP. 
            My eyes lit up in fascination of this new frontier, this Wild West of the Web, unscathed.
          </Paragraph>
          <br/>
          <Paragraph>
            Before I knew it, I became a wiz of this World Wide Web.
            To this day, that old busted up computer remains a relic, which can boot up into the unforeseeable cyberspace.  
          </Paragraph>
        </Section>
        
        <Section delay ={0.3}>
          <Link href="https://github.com" target="_blank">
            <Button variant="ghost" colorScheme="teal"><Icon as={FiGithub} /></Button>
          </Link>
          <Link href="https://twitter.com/1hq" target="_blank">
            <Button variant="ghost" colorScheme="teal"><Icon as={FiTwitter} /></Button>
          </Link>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
