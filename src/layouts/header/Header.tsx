import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
const Header = () => {
  return (
    <div>
      <AppBar position='fixed' color='primary'>
        <Toolbar>
          <IconButton edge='start' color='inherit' aria-label='menu'>
            Test
          </IconButton>
          <Typography variant='h6'>Test</Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
