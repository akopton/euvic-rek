import { FieldValues, UseFormSetValue } from 'react-hook-form'

export const DropdownItem = ({
  value,
  action,
  setValue,
  setShowDropdown,
  handleFieldValid,
}: {
  value: string
  action: React.Dispatch<React.SetStateAction<string>>
  setValue: UseFormSetValue<FieldValues>
  setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>
  handleFieldValid: (value: string) => void
}) => {
  const handleClick = (e: any) => {
    handleFieldValid(e.currentTarget.value)
    setValue('role', e.currentTarget.value.toLowerCase())
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
