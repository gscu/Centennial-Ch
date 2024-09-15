import { Box } from '@chakra-ui/react'
import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} <Link href='https://www.github.com/gscu'>gscu</Link>. All Rights Reserved.
    </Box>
  )
}

export default Footer
