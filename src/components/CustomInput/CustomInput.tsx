import React, {
  ChangeEventHandler,
  Dispatch,
  SetStateAction,
  useState,
} from 'react'
import { InputProps } from '../../types/InputProps'
import { userSchema } from '../../validations/UserValidation'

export const CustomInput = ({ id, type, register, errors }: InputProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  return (
    <div className="input-wrapper">
      <label htmlFor={id} className="input-label">
        {id}
      </label>
      <input
        className="input"
        type={type !== 'password' ? type : showPassword ? 'text' : 'password'}
        {...register(id)}
      />
      <span className="input-error">
        {errors[id] && `${errors[id]?.message}`}
      </span>
      {type === 'password' ? (
        <div onClick={() => setShowPassword((prevState) => !prevState)}>
          pokaż
        </div>
      ) : null}
    </div>
  )
}
