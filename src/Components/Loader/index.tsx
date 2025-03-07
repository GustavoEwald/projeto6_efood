import { ClockLoader } from 'react-spinners'

import { colors } from '../../styles'
import { Container } from './styles'

const Loader = () => (
  <Container>
    <ClockLoader color={colors.pink} size={100} />
  </Container>
)

export default Loader
