import '../toast.css'

export function Toast({ messages = [], onClose = () => false }) {
  return (
    <>
      {messages.map(({ message, type }, index) => (
        <div key={index} className={`toast toast-${type}`}>
          <span>{message}</span>
          <button className='toast-btn' onClick={() => onClose(index)}>
            X
          </button>
        </div>
      ))}
    </>
  )
}
