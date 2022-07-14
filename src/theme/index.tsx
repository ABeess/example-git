import { createTheme, CssBaseline, ThemeProvider as MUIThemeProvider } from '@mui/material'
import React, { ReactElement, useMemo } from 'react'
import breakpoints from './breackpoints'
import palette from './palette'
import typography from './typography'
import { PropsType } from '../types/propType'
import ComponentsOverrides from './overrides'

const ThemeProvider = ({ children }: PropsType): ReactElement => {
  const isLight: boolean = true
  const themeOptions: any = {
    palette: isLight ? palette.light : palette.dark,
    typography,
    breakpoints,
    shape: { borderRadius: 8 },
  }

  const theme = createTheme(themeOptions)
  theme.components = ComponentsOverrides(theme)

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  )
}

export default ThemeProvider
