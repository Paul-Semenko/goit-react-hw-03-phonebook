import { Component } from "react";
import { v4 as uuid } from "uuid";
import style from './components/Filter/style.module.css';
import { ContactForm } from "./components/ContactForm/ContactForm";
import ContactList  from './components/ContactList/ContactList';
import Filter from "./components/Filter/Filter";



class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    
  }
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
      
    }

  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
   
  }

  formSubmitHandler = ({ name, number }) => {
    if (!this.state.contacts.find((el) => el.name === name)) {
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, { name, number, id: uuid() }],
      }));
    } else {
      alert(`${name} is already in contacts`);
    }
  };
  
  

handleFilter = () => {
    return this.state.contacts.filter((el) => {
      const arr = el.name.toLowerCase().split(" ");

      for (let i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase().match(this.state.filter) !== null) {
          return true;
        }
      }
      return false;
    });
};
  
  
handleChange = (e) => {
    const regExp = new RegExp(`^${e.target.value.toLowerCase()}`);
    this.setState({
      filter: regExp,
    });
  };


  

 handleRemove = (e) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((elem) => elem.id !== e.target.id),
    }));
  };


  render() {
    const { formSubmitHandler, handleChange, handleFilter, handleRemove } = this;
    return (
      <div>
        <ContactForm
          onSubmit={formSubmitHandler}
        />
        <h2 className={style.contacts__title}>Contacts</h2>
        <Filter handleChange={handleChange} />
        <ContactList contacts={handleFilter()}
          handleRemove={handleRemove}
          />
      </div>
    );

  }
}

    
  


export default App