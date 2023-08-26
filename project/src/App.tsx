// import { useState } from 'react'
import './Global.css'
import { FormDataProvider } from './Hooks/FormContext';
import { Home } from './Pages/Home';


function App() {
  // const [count, setCount] = useState(0)

  return (
      <>
      <FormDataProvider>
        <Home />
      </FormDataProvider>
      </>
  )
}

export default App
