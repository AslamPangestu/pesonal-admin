export const IsEmpty = (val = '') => (val ? '' : 'Wajib Diisi')
export const FormValidate = (val = {}) => {
  const list = Object.values(val)
  return !list.includes('')
}
