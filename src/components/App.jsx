import React, { useState } from 'react';
import ContactList from './ContactList/ContactList.jsx';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import './app.css';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const contactExists = newContact => {
    for (const contact of contacts) {
      if (contact.name.toLowerCase() === newContact.name.toLowerCase()) {
        return true;
      }
    }
    return false;
  };

  const addContact = newContact => {
    if (contactExists(newContact)) {
      alert('Contact already exists');
    } else {
      setContacts([...contacts, newContact]);
    }
  };

  const handleContactDelete = deletedContact => {
    setContacts(contacts.filter(contact => contact.id !== deletedContact.id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="wrapper">
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <ContactList
        contacts={filteredContacts}
        handleContactDelete={handleContactDelete}
      />
    </div>
  );
};
