import { Box, SxProps } from '@mui/material'

import { Icon } from '@iconify/react'

type PropType = {
  icon: string
  sx?: SxProps
  other?: any
}
const Iconify = ({ icon, sx, other }: PropType) => {
  return <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} />
}

export default Iconify
