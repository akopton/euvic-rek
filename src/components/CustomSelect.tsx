import { Dispatch } from 'react'
import { SelectProps } from '../types/SelectProps'
import { SelectItem } from './SelectItem'

export const CustomSelect = ({ value, action, required }: SelectProps) => {
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
      <span>Rola</span>
      <div className="custom-select__selected-value">
        {value ? value : 'Wybierz z listy'}
      </div>
      <div className="custom-select__dropdown">
        <ul>
          {roles.map((el, id) => (
            <SelectItem value={el} key={id} action={action} />
          ))}
        </ul>
      </div>
    </div>
  )
}
