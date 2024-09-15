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
          Dexoverse <Badge>Sept 2024</Badge>
        </Title>
        <P>
          Centennial-Chan
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Author</Meta>
            <span> ♡ rize</span>
          </ListItem>
          <ListItem>
            <Meta>Socials</Meta>
            <span>Discord</span>
          </ListItem>
          <ListItem>
            <Meta>Style</Meta>
            <span>5-minute Craft</span>
          </ListItem>
          <ListItem>
            <Meta>Comments</Meta>
            <span>they couldnt make me hate u cen chan</span>
          </ListItem>
        </List>

        <WorkImage src="/images/congratz.png" alt="CC-1" />
      </Container>
    </Layout>
  )
}

export default Work
