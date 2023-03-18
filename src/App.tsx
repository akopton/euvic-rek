import React, { useState } from 'react'
import { CustomForm } from './components/CustomForm'
import { Modal } from './components/Modal'

function App() {
  const [isFormFilled, setIsFormFilled] = useState<boolean>(false)

  return (
    <main className="app">
      <h1 className="app-title">Register now!</h1>
      <CustomForm setIsFormFilled={setIsFormFilled} />
      {isFormFilled && <Modal setIsFormFilled={setIsFormFilled} />}
    </main>
  )
}

export default App
