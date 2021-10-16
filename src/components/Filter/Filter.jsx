import React, { Component } from "react";
import PropTypes from 'prop-types';
import style from './style.module.css';

export default class Filter extends Component {
  render() {
    return (
      <>
        <label htmlFor="search" className={style.filter__title}>
          Find contacts by name
        
        <input
          
                    autoComplete="off"
                    id="search"
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]"
                    onChange={(e) => {
                        e.preventDefault();
                        this.props.handleChange(e);
                    }}
                    className={style.filter__input}
            ></input>
            </label>
      </>
    );
  }
}



Filter.propTypes = {
    handleChange: PropTypes.func,
}

