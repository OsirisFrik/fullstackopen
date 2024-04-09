import { Part } from './Part';

export function Content(props) {
  return (
    <div>
      <Part part={props.parts[0][0]} exercises={props.parts[0][1]} />
      <Part part={props.parts[1][0]} exercises={props.parts[1][1]} />
      <Part part={props.parts[2][0]} exercises={props.parts[2][1]} />
    </div>
  )
}
