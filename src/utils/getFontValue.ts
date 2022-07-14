interface TypeReponsive {
  sm: number
  md: number
  lg: number
}

export const pxToRem = (value: number): string => {
  return `${value / 16}rem`
}

export const responsiveFontSizes = <T extends TypeReponsive>({
  sm,
  md,
  lg,
}: T) => {
  return {
    '@media (min-width:600px)': {
      fontSize: pxToRem(sm),
    },
    '@media (min-width:900px)': {
      fontSize: pxToRem(md),
    },
    '@media (min-width:1200px)': {
      fontSize: pxToRem(lg),
    },
  }
}
