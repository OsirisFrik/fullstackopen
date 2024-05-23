export function Contact({ contact }) {
  return (
    <p>
      {contact.name}: <a href={contact.number}>{contact.number}</a>
    </p>
  )
}
