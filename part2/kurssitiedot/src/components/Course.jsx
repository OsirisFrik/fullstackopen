import { Content } from './Content';
import { Header } from './Header';
import { Total } from './Total';

export function Course({ course }) {
  return (
    <>
      <Header content={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}
