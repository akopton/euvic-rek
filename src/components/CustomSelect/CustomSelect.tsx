import { Dispatch, useEffect, useRef, useState } from 'react'
import { SelectProps } from '../../types/SelectProps'
import { DropdownItem } from '../DropdownItem/DropdownItem'
import { IoIosArrowDown } from 'react-icons/io'
import { BiCheckCircle } from 'react-icons/bi'

export const CustomSelect = ({
  value,
  action,
  errors,
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
  const [isFieldValid, setIsFieldValid] = useState<boolean>(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleFieldValid = (el: string) => {
    if (el) setIsFieldValid(true)
    else setIsFieldValid(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: any): void => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false)
      }
    }
    document.addEventListener('click', handleClickOutside)

    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <div className="custom-select__wrapper form-field">
      <label className="custom-select__label">*Rola użytkownika</label>
      <div
        className="custom-select"
        style={{
          border: isFieldValid
            ? '2px solid green'
            : errors.role
            ? '2px solid red'
            : showDropdown
            ? '2px solid blue'
            : '',
        }}
        ref={dropdownRef}
      >
        <button
          className="custom-select__selected-value"
          type="button"
          style={{
            border: !showDropdown ? 'none' : '',
            color: value !== '' ? 'black' : '',
          }}
          onClick={() => setShowDropdown((prevState) => !prevState)}
        >
          {value ? value : 'Wybierz z listy...'}
          {isFieldValid ? (
            <BiCheckCircle
              className="field-correct"
              style={{ right: '30px' }}
            />
          ) : null}
          <IoIosArrowDown
            className="selected-value__icon"
            style={{
              transform: showDropdown ? 'rotate(180deg) translateY(50%)' : '',
              color: showDropdown ? 'blue' : '',
              transition: '.3s ease',
            }}
          />
        </button>
        <ul
          className="custom-select__dropdown"
          style={{
            maxHeight: showDropdown ? '100px' : '0',
            transition: 'max-height .3s ease',
            overflowY: showDropdown ? 'scroll' : 'hidden',
            paddingBottom: showDropdown ? '10px' : '',
          }}
        >
          {roles.map((el, id) => (
            <DropdownItem
              key={id}
              value={el}
              action={action}
              setValue={setValue}
              setShowDropdown={setShowDropdown}
              handleFieldValid={handleFieldValid}
            />
          ))}
        </ul>
      </div>
      <span
        role={'alert'}
        className="field-error"
        style={{ marginTop: '55px' }}
      >
        {errors.role && value === '' ? errors.role?.message?.toString() : ''}
      </span>
    </div>
  )
}
