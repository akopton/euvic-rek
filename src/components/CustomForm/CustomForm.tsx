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
    getValues,
    reset,
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
    <form
      className="register-form"
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
    >
      <CustomInput
        id={'email'}
        type={'text'}
        label={'Adres email'}
        register={register}
        errors={errors}
      />
      <CustomInput
        id={'password'}
        type={'password'}
        label={'Hasło'}
        register={register}
        errors={errors}
      />
      <CustomInput
        id={'confirmPassword'}
        type={'password'}
        label={'Potwierdź hasło'}
        register={register}
        errors={errors}
      />
      <CustomInput
        id={'nip'}
        type={'text'}
        label={'Numer NIP'}
        register={register}
        errors={errors}
      />
      <CustomInput
        id={'phone'}
        type={'text'}
        label={'Numer telefonu'}
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

      <span>* - pole wymagane</span>
    </form>
  )
}
