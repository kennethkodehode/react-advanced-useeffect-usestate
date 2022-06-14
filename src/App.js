import { useState } from 'react'

import Counter from './components/Counter'

export default function App() {
  const [ isVisible, setIsVisible ] = useState(true)
  return (
    <>
      {isVisible && <Counter />}
      <button onClick={() => setIsVisible(!isVisible)}>Toggle counter component</button>
    </>
  )
}
