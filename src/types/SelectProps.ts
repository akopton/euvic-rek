import { Dispatch } from 'react'

export type SelectProps = {
  value: string
  action: Dispatch<React.SetStateAction<string>>
  required: boolean
}
