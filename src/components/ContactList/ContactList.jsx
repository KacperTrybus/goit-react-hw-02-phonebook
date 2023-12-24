// import { Component } from 'react';

function ContactList({ contacts, handleContactDelete }) {
  const displayContacts = () => {
    const contactsArr = contacts.map(contact => (
      <>
        <li key={contact.id} className="contact">
          {contact.name}: {contact.number}
          <button type="button" onClick={() => handleContactDelete(contact)}>
            Delete
          </button>
        </li>
      </>
    ));
    return contactsArr;
  };

  return (
    <div>
      <ol>{displayContacts()}</ol>
    </div>
  );
}

export default ContactList;
