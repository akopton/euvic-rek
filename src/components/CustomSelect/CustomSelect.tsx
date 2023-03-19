import { Dispatch } from 'react'
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

  return (
    <div className="custom-select">
      <label>Rola</label>
      <div className="custom-select__selected-value">
        {value ? value : 'Wybierz z listy'}
      </div>
      <div className="custom-select__dropdown">
        <ul>
          {roles.map((el, id) => (
            <DropdownItem
              value={el}
              key={id}
              action={action}
              setValue={setValue}
            />
          ))}
        </ul>
      </div>
      <span role={'alert'}>
        {errors.role && errors.role?.message?.toString()}
      </span>
    </div>
  )
}
