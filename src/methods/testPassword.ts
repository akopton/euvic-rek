export const testPassword = (password: string) => {
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>/?]).{8,}$/
  if (passwordRegex.test(password)) return true
  return false
}
