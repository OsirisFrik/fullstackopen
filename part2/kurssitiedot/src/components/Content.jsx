import { Part } from './Part';

export function Content({ parts }) {
  return (
    <div>
      { parts.map(part => <Part key={part.id} part={part.name} exercises={part.exercises} />)}
      {/* <Part part={props.parts[0][0]} exercises={props.parts[0][1]} /> */}
    </div>
  )
}
