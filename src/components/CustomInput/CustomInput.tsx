import React, { useState } from 'react'
import { InputProps } from '../../types/InputProps'

export const CustomInput = ({
  id,
  type,
  label,
  register,
  errors,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  return (
    <div>
      <div className="input-wrapper form-field">
        <input
          className="input"
          autoComplete="off"
          placeholder={id === 'phone' ? `${label}` : `*${label}`}
          type={type !== 'password' ? type : showPassword ? 'text' : 'password'}
          {...register(id)}
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
            pokaż
          </button>
        ) : null}
      </div>
      <span className="field-error">
        {errors[id] && `${errors[id]?.message}`}
      </span>
    </div>
  )
}
