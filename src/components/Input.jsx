import React from 'react';

const Input = ({ name, onChange }) => {
  return (
    <input
      type='text'
      placeholder='Add Your Todo...'
      name={name}
      className='form-control'
      onChange={onChange}
    />
  );
};

export default Input;
