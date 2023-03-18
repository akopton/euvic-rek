import { Dispatch } from 'react'
import { FieldErrors } from 'react-hook-form'
import { FieldValues, UseFormRegister } from 'react-hook-form/dist/types'

export type InputProps = {
  id: string
  type: string
  register: UseFormRegister<FieldValues>
  errors: FieldErrors<FieldValues>
}
