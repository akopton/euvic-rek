import { Dispatch } from 'react'

export const SelectItem = ({
  value,
  action
}: {
  value: string
  action: Dispatch<React.SetStateAction<string>>
}) => {
  const handleClick = (e: any) => {
    action(e.target.value.toLowerCase())
  }
  return (
    <li>
      <button onClick={handleClick} value={value} type="button">
        {value}
      </button>
    </li>
  )
}
