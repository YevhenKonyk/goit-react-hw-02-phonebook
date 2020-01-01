import React, { Component } from 'react';
import uuid from 'uuid';
import ContactList from '../ContactList/ContactList';
import styles from './App.module.css';
import Section from '../Section/Section';

const filterContacts = (contacts, filter) =>
  contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Scorpion', phone: '222-33-55' },
      { id: 'id-2', name: 'Sub Zero', phone: '555-88-77' },
      { id: 'id-3', name: 'Syrex', phone: '444-88-99' },
      { id: 'id-4', name: 'Sector', phone: '888-22-44' },
    ],
    name: '',
    phone: '',
    filter: '',
  };

  addContact = contact => {
    const newContact = {
      ...contact,
      id: uuid.v4(),
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, phone } = this.state;
    this.addContact({ name, phone });
    this.reset();
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  reset() {
    this.setState({ name: '', phone: '' });
  }

  render() {
    const { name, phone, filter, contacts } = this.state;
    const filteredContacts = filterContacts(contacts, filter);

    return (
      <>
        <Section>
          <h2 className={styles.title}>Phonebook</h2>
          <form
            name="phonebook"
            onSubmit={this.handleSubmit}
            className={styles.form}
          >
            <label htmlFor="" className={styles.label}>
              Name
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleInputChange}
              id=""
              className={styles.input}
              required
            />
            <label htmlFor="" className={styles.label}>
              Phone (format: xxx-xx-xx)
            </label>
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
              placeholder="xxx-xx-xx"
              required
              name="phone"
              value={phone}
              onChange={this.handleInputChange}
              id=""
              className={styles.input}
            />
            <button
              type="submit"
              title="Add contact"
              className={styles.submitBtn}
              disabled=""
            >
              Add contact
            </button>
          </form>
        </Section>

        <Section>
          <div className={styles.search}>
            <label htmlFor="" className={styles.label}>
              Search by name
            </label>
            <input
              type="text"
              name="filter"
              value={filter}
              placeholder="Search by name..."
              onChange={this.handleInputChange}
              id=""
              className={styles.input}
              required
            />
          </div>
        </Section>

        <Section>
          <ContactList
            items={filteredContacts}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}
