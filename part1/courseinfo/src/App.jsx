import { Content } from './components/Content'
import { Header } from './components/Header'
import { Total } from './components/Total'

function App() {
  const course = {
    title: 'Half Stack application development',
    parts: [
      ['Fundamentals of React', 10],
      ['Using props to pass data', 7],
      ['State of component', 14]
    ],
    total: function total() {
      // eslint-disable-next-line no-unused-vars
      return this.parts.reduce((acc, [_, exercises]) => acc + exercises, 0)
    }
  }

  return (
    <div>
      <Header content={course.title} />
      <Content parts={course.parts} />
      <Total total={course.total()} />
    </div>
  )
}

export default App
