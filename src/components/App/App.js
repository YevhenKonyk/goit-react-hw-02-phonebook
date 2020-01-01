import React, { Component } from 'react';
import uuid from 'uuid';
import ContactList from '../ContactList/ContactList';
import styles from './App.module.css';

export default class App extends Component {
  state = {
    contacts: [],
    name: '',
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
    const { name } = this.state;
    this.addContact({ name });
    this.reset();
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  reset() {
    this.setState({ name: '' });
  }

  render() {
    const { name, contacts } = this.state;

    return (
      <>
        <h2>Phonebook</h2>
        <form
          name="phonebook"
          onSubmit={this.handleSubmit}
          className={styles.form}
        >
          <label htmlFor="" className={styles.label}>
            Contact name
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleInputChange}
            id=""
            className={styles.input}
          />
          <button type="submit" className={styles.submitBtn} disabled="">
            Add contact
          </button>
        </form>

        <ContactList items={contacts} onDeleteContact={this.deleteContact} />
      </>
    );
  }
}
