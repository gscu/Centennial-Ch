import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbAnya from '../public/images/anya.jpg'
import thumbWave from '../public/images/wave.jpg'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="dexoverse" title="Dexoverse" thumbnail={thumbAnya}>
              A crypto project in the making...
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem id="c" title="Programs for display" thumbnail={thumbWave}>
              Coming soon...
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works