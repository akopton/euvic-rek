export const testPhoneNumber = (phoneNum: string) => {
  const phoneRegex = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/
  if (phoneRegex.test(phoneNum)) return true
  return false
}
