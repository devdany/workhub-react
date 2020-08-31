import Styles from '@src/types/styles'

export const styleToString = (styleObject: Styles) => {
  const temp: any = styleObject
  let result = ''
  Object.keys(styleObject)
  for (const key in styleObject) {
    const value = temp[key]
    result += `${key}: ${value};`
  }
  return result
}