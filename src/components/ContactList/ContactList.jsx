import React, {Component} from "react";
import PropTypes from 'prop-types';
import style from './style.module.css';


export  default class ContactList extends Component {
  render() {
    return (
      <ul className={style.contacts__list} >
        {this.props.contacts.map((el) => (
          <li key={el.id} className={style.contacts__item}>
            {el.name} : {el.number}
           <button
              type="button"
              id={el.id}
            onClick={this.props.handleRemove}
                    className={style.contact__button}
            >
              Delete
            </button>
            </li>            
        ))}
            
        </ul>
         
    );
  }
}
     




ContactList.propTypes = {
    contacts: PropTypes.array,
    handleRemove: PropTypes.func,
}
