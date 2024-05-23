import { Contact } from './Contact'

export function Contacts({ contacts, deleteHandler = () => false }) {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.name}>
          <Contact contact={contact} />
          <button className='' onClick={() => deleteHandler(contact._id)}>
            delete
          </button>
        </li>
      ))}
    </ul>
  )
}
