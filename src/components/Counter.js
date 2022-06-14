import { useState, useEffect } from 'react'

import { BOOOOLIAN_FALLBACK_TEXT } from '../textConsts'

export default function Counter() {
  const [ number, setNumber ] = useState(0)
  const [ boooolian, setBoooolian ] = useState(true)
  
  function delayedIncrease() {
    setTimeout(() => setNumber(number + 1), 1000)
  }

  useEffect(function() {
    // Here we ensure that the number is not being increased if the "boooolian" is false.
    if (boooolian) delayedIncrease()
  }, [number])

  useEffect(function() {
    // Resumes the counter.
    if (boooolian) setNumber(number + 1)
  }, [boooolian])

  // Detecting component unmount in its own hook to prevent its callback from being called unnecessarily.
  useEffect(() => () => console.log('Component did unmount'), [])

  return (
    <div className="App">
      <p>{boooolian ? number : BOOOOLIAN_FALLBACK_TEXT}</p>
      <button onClick={() => setNumber(number + 1)}>Increase count</button>
      <button onClick={() => setNumber(number > 0 ? number - 1 : 0)}>decrease count</button>
      <button onClick={() => setBoooolian(!boooolian)}>Toggle boooolian</button>
    </div>
  );
}
