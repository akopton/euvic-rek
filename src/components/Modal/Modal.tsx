import { Dispatch, useEffect, useState } from 'react'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { NewUser } from '../../types/NewUser'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { postData } from '../../api/postData'
import { ErrorScreen } from '../ErrorScreen/ErrorScreen'

export const Modal = ({
  setIsFormFilled,
}: {
  setIsFormFilled: Dispatch<React.SetStateAction<boolean>>
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [isPending, setIsPending] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const userData = useSelector((state: { user: NewUser }) => state.user)

  const handleClose = () => {
    setIsFormFilled(false)
  }

  const handleSubmit = async () => {
    console.log(userData)
    setIsPending(true)
    postData('/register', userData)
      .then((data) => {
        setIsPending(false)
      })
      .catch((err) => {
        setIsPending(false)
        setError(true)
      })
  }

  return (
    <>
      <div className="modal">
        {isPending ? (
          <div>...</div>
        ) : error ? (
          <ErrorScreen action={setError} />
        ) : (
          <>
            <button onClick={handleClose} className="modal__close-btn">
              <AiOutlineCloseCircle size={35} />
            </button>
            <h2 className="modal__title">Sprawdź swoje dane</h2>

            <ul className="modal__list">
              <li className="list-item">
                <span>Email:</span>
                <span>{userData.email}</span>
              </li>
              <li
                className="list-item"
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span>Hasło:</span>
                  <span>
                    {showPassword
                      ? userData.password
                      : userData.password.split('').map((el) => '*')}
                  </span>
                </div>
                <button
                  type="button"
                  style={{ fontSize: '20px' }}
                  onClick={() => setShowPassword((prevState) => !prevState)}
                >
                  {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
                </button>
              </li>
              <li className="list-item">
                <span>NIP:</span>
                <span>{userData.nip}</span>
              </li>
              <li className="list-item">
                <span>Numer telefonu:</span>
                <span>{userData.phone === '' ? 'brak' : userData.phone}</span>
              </li>
              <li className="list-item">
                <span>Rola użytkownika:</span>
                <span>{userData.role}</span>
              </li>
            </ul>

            <div className="modal__buttons-wrap">
              <button className="go-back-btn modal-btn" onClick={handleClose}>
                Wróć do edycji
              </button>
              <button className="submit-btn modal-btn" onClick={handleSubmit}>
                Potwierdź
              </button>
            </div>
          </>
        )}
      </div>
      <div className="blur" />
    </>
  )
}
