export function Total({ parts }) {
  const total = parts.reduce((acc, { exercises }) => acc + exercises, 0)
  
  return (
    <p>
      Number of exercises: {total}
    </p>
  )
}
