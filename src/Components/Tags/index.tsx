import { Container, TagTitle } from './styles'

type Props = {
  tagTitle: string
}

const Tags = ({ tagTitle }: Props) => (
  <Container>
    <TagTitle>{tagTitle}</TagTitle>
  </Container>
)

export default Tags
