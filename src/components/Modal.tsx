import { Dispatch } from 'react'

export const Modal = ({
  setIsFormFilled
}: {
  setIsFormFilled: Dispatch<React.SetStateAction<boolean>>
}) => {
  const handleClose = () => {
    setIsFormFilled(false)
  }
  return (
    <div className="modal">
      <button onClick={handleClose}>X</button>
      <div>tu jest jakiś modalowy teskt, tu będą dane do sprawdzenia</div>
    </div>
  )
}
