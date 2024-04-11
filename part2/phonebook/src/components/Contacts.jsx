import { Contact } from './Contact';

export function Contacts({ contacts }) {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.name}>
          <Contact contact={contact}/>
        </li>
      ))}
    </ul>
  )
}
