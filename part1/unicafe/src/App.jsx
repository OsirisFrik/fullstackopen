import { useState } from 'react'
import { Statistics } from './components/Statistics'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <div>
        <h3>Give feedback</h3>
        <button onClick={() => setGood(good + 1)} >Good</button>
        <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
        <button onClick={() => setBad(bad + 1)}>Bad</button>
      </div>
      <hr />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App
