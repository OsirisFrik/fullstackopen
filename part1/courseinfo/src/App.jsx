import { Content } from './components/Content'
import { Header } from './components/Header'
import { Total } from './components/Total'

function App() {
  const course = 'Half Stack application development'
  const parts = [
    ['Fundamentals of React', 10],
    ['Using props to pass data', 7],
    ['State of component', 14]
  ]

  // eslint-disable-next-line no-unused-vars
  const sumExercises = parts.reduce((acc, [_, exercises]) => acc + exercises, 0)

  return (
    <div>
      <Header content={course} />
      <Content parts={parts} />
      <Total total={sumExercises} />
    </div>
  )
}

export default App
