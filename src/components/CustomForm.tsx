import React, { Dispatch, useState } from 'react'
import { useForm } from 'react-hook-form'
import { NewUser } from '../types/NewUser'
import { userSchema } from '../validations/UserValidation'
import { CustomButton } from './CustomButton'
import { CustomInput } from './CustomInput'
import { CustomSelect } from './CustomSelect'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller } from 'react-hook-form/dist/controller'

export const CustomForm = ({
  setIsFormFilled,
}: {
  setIsFormFilled: Dispatch<React.SetStateAction<boolean>>
}) => {
  const [email, setEmail] = useState<string>('')
  const [nip, setNip] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [repeatPassword, setRepeatPassword] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [role, setRole] = useState<string>('')
  const [formErrors, setFormErrors] = useState<[]>([])
  const [data, setData] = useState<any>()
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(userSchema),
  })

  const onSubmit = (data: any) => {
    console.log(data)
  }
  return (
    <form
      className="register-form"
      onSubmit={handleSubmit(onSubmit)}
      autoComplete={'off'}
    >
      <CustomInput
        id={'email'}
        type={'text'}
        register={register}
        errors={errors}
      />
      <CustomInput
        id={'password'}
        type={'password'}
        register={register}
        errors={errors}
      />
      <CustomInput
        id={'nip'}
        type={'text'}
        register={register}
        errors={errors}
      />
      <CustomInput
        id={'confirmPassword'}
        type={'password'}
        register={register}
        errors={errors}
      />
      <CustomInput
        id={'phone'}
        type={'text'}
        register={register}
        errors={errors}
      />

      <input type="submit" value="prześlij" />

      {/* <CustomSelect value={role} action={setRole} required={true} /> */}
      {/* <CustomButton action={handleSubmit} /> */}
    </form>
  )
}
