import React, { useState } from 'react'
import { InputProps } from '../../types/InputProps'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'
import { BiCheckCircle } from 'react-icons/bi'

export const CustomInput = ({
  id,
  type,
  label,
  register,
  errors,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [isFieldValid, setIsFieldValid] = useState<boolean>(false)

  const handleFieldValid = (e: any) => {
    if (e.target.value.length > 0 && !errors[id]) setIsFieldValid(true)
    else setIsFieldValid(false)
  }

  return (
    <div className="form-field">
      <div className="input-wrapper">
        <input
          className="input"
          autoComplete="off"
          aria-invalid={errors[id] ? 'true' : 'false'}
          placeholder={id === 'phone' ? `${label}` : `*${label}`}
          type={type !== 'password' ? type : showPassword ? 'text' : 'password'}
          {...register(id, {
            onChange: (value) => handleFieldValid(value),
          })}
          onBlur={handleFieldValid}
          style={{
            border: errors[id]
              ? '2px solid red'
              : isFieldValid
              ? '2px solid green'
              : '2px solid black',
          }}
        />
        <label htmlFor={id} className="input__label">
          {label}
        </label>
        {type === 'password' ? (
          <button
            type="button"
            className="show-password-btn"
            onClick={() => setShowPassword((prevState) => !prevState)}
          >
            {showPassword ? <MdVisibility size={20} /> : <MdVisibilityOff />}
          </button>
        ) : null}
        {isFieldValid && !errors[id] ? (
          <BiCheckCircle
            className="field-correct"
            style={{ right: type === 'password' ? '35px' : '' }}
          />
        ) : null}
      </div>
      <span className="field-error">
        {errors[id] && `${errors[id]?.message}`}
      </span>
    </div>
  )
}
