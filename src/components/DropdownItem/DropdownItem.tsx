import { Dispatch } from 'react'
import { FieldValues, useForm, UseFormRegister } from 'react-hook-form'
import { UseFormStateProps } from 'react-hook-form/dist/types'

export const DropdownItem = ({
  value,
  action,
  setValue,
  setShowDropdown,
}: {
  value: string
  action: React.Dispatch<React.SetStateAction<string>>
  setValue: any
  setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const handleClick = (e: any) => {
    setValue('role', e.currentTarget.value)
    action(e.currentTarget.value)
    setShowDropdown(false)
  }

  return (
    <li>
      <button
        className="dropdown-item"
        value={value}
        type="button"
        onClick={handleClick}
      >
        {value}
      </button>
    </li>
  )
}
