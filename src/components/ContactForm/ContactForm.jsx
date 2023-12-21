import { Component } from 'react';
import { customAlphabet } from 'nanoid';
const nanoid = customAlphabet('1234567890abcdef', 10);

export class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      name: '',
      number: '',
      filter: '',
    };
  }

  addContact(contacts) {
    return contacts.map(contact => (
      <li key={contact.id}>
        {contact.name} : {contact.number}
      </li>
    ));
  }

  filterContact() {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  render() {
    return (
      <div className="phonebook">
        <form>
          <h1>Phonebook</h1>
          <div className="phonebook-menu">
            <label className="phonebook-label">Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={e => this.setState({ name: e.target.value })}
            />
            <label className="phonebook-label">Number</label>
            <input
              type="tel"
              name="number"
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={e => this.setState({ number: e.target.value })}
            />
            <button
              type="button"
              className="phonebook-btn"
              onClick={() => {
                const newContact = {
                  id: nanoid(),
                  name: this.state.name,
                  number: this.state.number,
                };
                this.setState(prevState => ({
                  contacts: [...prevState.contacts, newContact],
                  name: '',
                  number: '',
                }));
              }}
            >
              Add Contact
            </button>
          </div>
        </form>
        <h1>Contacts</h1>
        <div className="filter">
          <span>Find contacts by name</span>
          <input
            type="text"
            style={{ width: '150px' }}
            onChange={e => {
              this.setState({ filter: e.target.value });
              this.filterContact();
            }}
          ></input>
        </div>
        <ol>
          {this.addContact(
            this.state.filter ? this.filterContact() : this.state.contacts
          )}
        </ol>
      </div>
    );
  }
}

export default ContactForm;
