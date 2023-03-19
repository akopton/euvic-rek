import { Dispatch, useEffect } from 'react'

export const Modal = ({
  setIsFormFilled,
}: {
  setIsFormFilled: Dispatch<React.SetStateAction<boolean>>
}) => {
  useEffect(() => {
    // get data from redux
  }, [])

  const handleClose = () => {
    setIsFormFilled(false)
  }

  const handleSubmit = () => {
    console.log('sample data')
  }

  return (
    <div className="modal">
      <button onClick={handleClose}>X</button>
      <div>Wprowadzone dane w formularzu</div>
      <div>
        <button onClick={handleClose}>Wróć do edycji</button>
        <button onClick={handleSubmit}>Potwierdź rejestrację</button>
      </div>
    </div>
  )
}
