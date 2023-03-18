import { userSchema } from '../validations/UserValidation'

export const validateForm = async (field: string, value: string) => {
  return await userSchema.validateAt(field, value, { abortEarly: false, strict: true })
}
