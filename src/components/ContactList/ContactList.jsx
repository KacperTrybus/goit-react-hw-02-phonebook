import PropTypes from 'prop-types';

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

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  handleContactDelete: PropTypes.func.isRequired,
};

export default ContactList;
