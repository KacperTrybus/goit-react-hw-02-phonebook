import { Component } from 'react';
import { customAlphabet } from 'nanoid';
const nanoid = customAlphabet('1234567890abcdef', 10);

export class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
    };
  }

  newContact = () => {
    const contact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    this.props.addContact(contact);

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <div>
        <form className="phonebook-menu">
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
            onClick={this.newContact}
          >
            Add Contact
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
