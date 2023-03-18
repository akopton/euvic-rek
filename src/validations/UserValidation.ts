import * as yup from 'yup'

const passwordRegex =
  /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>/?]).{8,}$/
const phoneRegex =
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/
const emptyRegex = /^$/
export const userSchema = yup.object({
  email: yup
    .string()
    .required('Adres email jest wymagany.')
    .email('Proszę podać prawidłowy adres email.'),
  nip: yup.string().required('Numer NIP jest wymagany.'),
  password: yup
    .string()
    .required('Hasło jest wymagane.')
    .matches(
      passwordRegex,
      'Hasło powinno zawierać conajmniej 8 znaków, jedną dużą literę, jedną małą literę, jedną cyfrę oraz jeden znak specjalny',
    ),
  confirmPassword: yup
    .string()
    .required('Proszę potwierdzić hasło.')
    .oneOf([yup.ref('password')], 'Wprowadzone hasła się nie zgadzają.'),
  phone: yup
    .string()
    .matches(phoneRegex, 'Proszę wprowadzić prawidłowy numer telefonu.'),
  // role: yup.string().required('Proszę wybrać rolę użytkownika.'),
})
