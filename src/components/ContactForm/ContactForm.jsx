import React, { Component } from "react";
import PropTypes from 'prop-types';
import { v4 as uuid } from "uuid";
import style from './Style.module.css';


export class ContactForm extends Component{
    nameInputId = uuid();
    numberInputId = uuid();
    state = {
        name: '',
        number: ''
    };
 
handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value, });
    
    };
    
    handleSubmit = e => {
        e.preventDefault();
        
        const obj = {
            name: this.state.name,
            number: this.state.number
        };

        this.props.onSubmit(obj);
      this.reset();
        
    };


    reset = () => {
        this.setState({
            name: '',
            number: ''
        });
    };
       
    render() {
        const { name, number } = this.state;
        const { nameInputId, numberInputId, handleInputChange, handleSubmit } = this;
        return (
            <form onSubmit={handleSubmit} className={style.form}>
                <h1>Phonebook</h1>
          <label htmlFor={nameInputId} className={style.form__title}>Name
        <input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                        value={name}
                        onChange={handleInputChange}
                        id={nameInputId}
                        className={style.form__input}
                        
          />
          </label>
          <label htmlFor={numberInputId} className={style.form__title}>Number
          <input
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    value={number}
                        onChange={handleInputChange}
                        id={numberInputId}
                        className={style.form__input}
/>
         </label> 
          <button className={style.form__button}>Add contact</button>
        </form>
        );
    }
}

ContactForm.propTypes = {
    name: PropTypes.string,
    number: PropTypes.number,
    handleInputChange: PropTypes.func,
    handleSubmit: PropTypes.func,
}