export const ReplaceAll = (value = '', delimiter = '-', replaced = '') => {
  return value.split(delimiter).join(replaced)
}

export const CapitalizeFirstLetter = (string = '') => {
  if (!string || typeof string !== 'string') {
    return ''
  }
  return string.charAt(0).toUpperCase() + string.slice(1)
}
