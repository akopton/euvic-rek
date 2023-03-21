import { FieldErrors, FieldValues } from 'react-hook-form'

export type SelectProps = {
  value: string
  errors: FieldErrors<FieldValues>
  action: React.Dispatch<React.SetStateAction<string>>
  setValue: any
}
