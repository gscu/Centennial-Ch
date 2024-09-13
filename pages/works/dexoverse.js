import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Dexoverse">
      <Container>
        <Title>
          Dexoverse <Badge>2022</Badge>
        </Title>
        <P>
          A DEX swap exchange for cryptocurrency on the Ethereum blockchain. Working on smart-swap contract for DEXO currency.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href='https://www.dexoverse.com/'>
              https://www.dexoverse.com/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Network</Meta>
            <span>ERC20 Compatible Wallets</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NextJS, Solidity</span>
          </ListItem>
          <ListItem>
            <Meta>Devpost</Meta>
            <Link href='https://www.ioscu.com/'>
              Crossing Parallels Between DEX and DAO: To rid of CEX. <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage src="/images/anya.jpg" alt="Dexoverse" />
      </Container>
    </Layout>
  )
}

export default Work
