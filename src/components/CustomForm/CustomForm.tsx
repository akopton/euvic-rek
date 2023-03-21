import React, { Dispatch, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { userSchema } from '../../validations/UserValidation'
import { CustomInput } from '../CustomInput/CustomInput'
import { CustomSelect } from '../CustomSelect/CustomSelect'
import { yupResolver } from '@hookform/resolvers/yup'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { update } from '../../redux/userSlice'

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
    mode: 'all',
    resolver: yupResolver(userSchema),
  })

  const dispatch = useDispatch()

  const onSubmit = (data: FieldValues) => {
    dispatch(update(data))
    setIsFormFilled(true)
  }

  return (
    <form
      className="register-form"
      name="register-form"
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
    >
      <label htmlFor="register-form" className="register-form__label">
        Rejestracja
      </label>

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

      <button
        type="submit"
        value="Prześlij"
        className="register-form__submit-btn btn-gradient"
      >
        <span className="submit-btn__text">Prześlij</span>
        <AiOutlineArrowRight className="submit-btn__icon" />
      </button>

      <span>* - pole wymagane</span>
    </form>
  )
}
