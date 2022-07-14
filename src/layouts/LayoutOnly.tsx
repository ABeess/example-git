import styled from '@emotion/styled'
import { Box } from '@mui/system'
import { PropsType } from '../types/propType'

const LayoutOnly = ({ children }: PropsType) => {
  const RootStyle = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100vw',
  })) as typeof Box
  return <RootStyle>{children}</RootStyle>
}

export default LayoutOnly
