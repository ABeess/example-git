import Button from './Button'
import CssBaseline from './CssBaseline'
import Drawer from './Drawer'
import Input from './Input'
import Link from './Link'
import List from './List'
import LoadingButton from './LoadingButton'
import Typography from './Typography'

const ComponentsOverrides = (theme: any) => {
  return Object.assign(
    Button(theme),
    CssBaseline(),
    Typography(theme),
    LoadingButton(),
    Drawer(theme),
    Input(theme),
    Link(),
    List(theme)
  )
}

export default ComponentsOverrides
