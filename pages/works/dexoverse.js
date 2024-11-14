import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Centennial-Chan #1">
      <Container>
        <Title>
          Centennial-Chan <Badge>Sept 2024</Badge>
        </Title>
        <P>
          Centennial-Chan
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Author</Meta>
            <span>♡ rize</span>
          </ListItem>
          <ListItem>
            <Meta>Social</Meta>
            <Link href='https://discord.com/invite/tcaD5HC3T4'>
							https://discord.gg/Nzvx6uy8 <ExternalLinkIcon mx="2px" />
						</Link>
          </ListItem>
          <ListItem>
            <Meta>Style</Meta>
            <span>Vibrant</span>
          </ListItem>
          <ListItem>
            <Meta>Comment</Meta>
            <span>"they couldnt make me hate u cen chan"</span>
          </ListItem>
        </List>

        <WorkImage src="/images/congratz.png" alt="CC-1" />
      </Container>
    </Layout>
  )
}

export default Work
