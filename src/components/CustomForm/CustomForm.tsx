import React, { Dispatch, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { userSchema } from '../../validations/UserValidation'
import { CustomInput } from '../CustomInput/CustomInput'
import { CustomSelect } from '../CustomSelect/CustomSelect'
import { yupResolver } from '@hookform/resolvers/yup'

export const CustomForm = ({
  setIsFormFilled,
}: {
  setIsFormFilled: Dispatch<React.SetStateAction<boolean>>
}) => {
  const [role, setRole] = useState<string>('')
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(userSchema),
  })

  const onSubmit = (data: any) => {
    console.log(data)
    // send data to store in redux
    // show data on modal
    setIsFormFilled(true)
  }

  return (
    <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
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
        id={'confirmPassword'}
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
        id={'phone'}
        type={'text'}
        register={register}
        errors={errors}
      />

      <CustomSelect
        value={role}
        errors={errors}
        required={true}
        action={setRole}
        setValue={setValue}
      />

      <input type="submit" value="Prześlij" />
    </form>
  )
}
