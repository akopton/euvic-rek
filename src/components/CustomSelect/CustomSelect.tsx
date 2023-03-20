import { Dispatch, useState } from 'react'
import { SelectProps } from '../../types/SelectProps'
import { DropdownItem } from '../DropdownItem/DropdownItem'

export const CustomSelect = ({
  value,
  action,
  errors,
  required,
  setValue,
}: SelectProps) => {
  const roles = [
    'Administrator',
    'Dyrektor',
    'Inspektor',
    'Kierownik',
    'Księgowy',
    'Pełnomocnik',
  ]

  const [showDropdown, setShowDropdown] = useState<boolean>(false)

  return (
    <div className="custom-select__wrapper">
      <label className="custom-select__label">*Rola użytkownika</label>
      <div className="custom-select">
        <button
          className="custom-select__selected-value form-field"
          type="button"
          onClick={() => setShowDropdown((prevState) => !prevState)}
        >
          {value ? value : 'Wybierz z listy'}
          <div
            className="selected-value__icon"
            style={{
              transform: showDropdown ? 'rotate(180deg)' : '',
              transition: '.3s ease',
            }}
          >
            V
          </div>
        </button>
        <ul
          className="custom-select__dropdown"
          style={{
            maxHeight: showDropdown ? '100px' : '0',
            transition: 'max-height .3s ease',
            overflowY: showDropdown ? 'scroll' : 'hidden',
          }}
        >
          {roles.map((el, id) => (
            <DropdownItem
              value={el}
              key={id}
              action={action}
              setValue={setValue}
              setShowDropdown={setShowDropdown}
            />
          ))}
        </ul>
      </div>
      <span role={'alert'} className="field-error">
        {errors.role && errors.role?.message?.toString()}
      </span>
    </div>
  )
}
