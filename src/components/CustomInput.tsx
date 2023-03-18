import React, {
  ChangeEventHandler,
  Dispatch,
  SetStateAction,
  useState,
} from 'react'
import { testPassword } from '../methods/testPassword'
import { validateForm } from '../methods/validateForm'
import { InputProps } from '../types/InputProps'
import { userSchema } from '../validations/UserValidation'

export const CustomInput = ({ id, type, register, errors }: InputProps) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={id} className="input-label">
        {id}
      </label>
      <input className="input" type={type} {...register(id)} />
      <span className="input-error">
        {errors[id] && `${errors[id]?.message}`}
      </span>
    </div>
  )
}
