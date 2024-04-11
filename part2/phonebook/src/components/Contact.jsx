export function Contact({ contact }) {
  return (
    <div>
      <p>
        {contact.name}: <a href={contact.number}>{contact.number}</a>
      </p>
    </div>
  )
}
