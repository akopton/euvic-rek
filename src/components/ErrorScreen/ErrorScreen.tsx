import { Dispatch } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'

export const ErrorScreen = ({
  action,
}: {
  action: Dispatch<React.SetStateAction<boolean>>
}) => {
  return (
    <div className="error-screen">
      <div className="error-screen__title">
        <span>404 error</span>
        <span>Page not found.</span>
      </div>
      <div className="error-screen__text">
        <span>Błąd połączenia z serwerem.</span>
        <span>Prosimy spróbować później.</span>
      </div>
      <button className="go-back-btn modal-btn" onClick={() => action(false)}>
        <AiOutlineArrowLeft className="btn-icon" />
        <span className="btn-text">Wróć</span>
      </button>
    </div>
  )
}
