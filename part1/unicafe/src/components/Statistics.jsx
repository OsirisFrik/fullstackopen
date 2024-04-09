import { useState } from 'react'
import { useEffect } from 'react'

export function Statistics({
  good,
  neutral,
  bad
}) {
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  useEffect(() => {
    setTotal(good + neutral + bad)
    setAverage((good * 1 + bad * -1) / total)
    setPositive(good / total)
  }, [good, neutral, bad, setTotal, setAverage, setPositive, total])
  
  return (
    <table>
      <tbody>
        <StatisticLine label="Good" value={good} />
        <StatisticLine label="Neutral" value={neutral} />
        <StatisticLine label="Bad" value={bad} />
        <StatisticLine label="Total" value={total} />
        <StatisticLine label="Average" value={average} />
        <StatisticLine label="Positive Feedback" value={positive} />
      </tbody>
    </table>
  )
}

export function StatisticLine({ label, value }) {
  return (
    <tr>
      <td>
        <strong>{label}:</strong>
      </td>
      <td>
        {value}{['Average', 'Positive Feedback'].includes(label) ? '%' : ''}
      </td>
    </tr>
  )
}
