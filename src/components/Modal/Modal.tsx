import { Dispatch, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { NewUser } from '../../types/NewUser'

export const Modal = ({
  setIsFormFilled,
}: {
  setIsFormFilled: Dispatch<React.SetStateAction<boolean>>
}) => {
  const userData = useSelector((state: { user: NewUser }) => state.user)

  const handleClose = () => {
    setIsFormFilled(false)
  }

  const handleSubmit = () => {
    console.log('sample data')
  }

  return (
    <>
      <div className="modal">
        <button onClick={handleClose}>X</button>
        <div>{userData.email}</div>
        <div>
          <button onClick={handleClose}>Wróć do edycji</button>
          <button onClick={handleSubmit}>Potwierdź rejestrację</button>
        </div>
      </div>
      <div className="blur" />
    </>
  )
}
