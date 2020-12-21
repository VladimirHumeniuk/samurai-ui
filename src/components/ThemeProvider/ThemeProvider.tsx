
import React from 'react'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'

type ThemeColorsType = {
  primary: string,
  secondary: string
}

class Theme {
  colors: ThemeColorsType

  constructor(
    colors: ThemeColorsType
  ) {
    this.colors = colors
  }
}

const THEMES = {
  samurai: new Theme({ primary: '#bb403b', secondary: '#61f6fe' }),
  rockerboy: new Theme({ primary: '#111', secondary: '#333' })
}

const ThemeProvider = ({ theme, children }) => {
  return (
    <EmotionThemeProvider theme={THEMES[theme]}>
      { children }
    </EmotionThemeProvider>
  )
}

export { ThemeProvider }