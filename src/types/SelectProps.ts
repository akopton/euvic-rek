import { Dispatch } from 'react'
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  UseFormTrigger,
} from 'react-hook-form'

export type SelectProps = {
  value: string
  errors: FieldErrors<FieldValues>
  action: React.Dispatch<React.SetStateAction<string>>
  required: boolean
  setValue: any
}
