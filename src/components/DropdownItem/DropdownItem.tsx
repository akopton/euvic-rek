import { Dispatch } from 'react'
import { FieldValues, useForm, UseFormRegister } from 'react-hook-form'
import { UseFormStateProps } from 'react-hook-form/dist/types'

export const DropdownItem = ({
  value,
  action,
  setValue,
}: {
  value: string
  action: React.Dispatch<React.SetStateAction<string>>
  setValue: any
}) => {
  const handleClick = (e: any) => {
    setValue('role', e.currentTarget.value)
    action(e.currentTarget.value)
  }

  return (
    <li>
      <button value={value} type="button" onClick={handleClick}>
        {value}
      </button>
    </li>
  )
}
