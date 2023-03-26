import React, { useState } from 'react';

const ObjectExample = () => {
  const [value, setValue] = useState({
    name: 'Mahabub',
    age: '21',
    hobby: 'Cricket'
  });
  const handleShowMe = () =>{
    setValue({...value, name: 'hasan', age: 54, hobby: 'VS CODE'})
  }

  return (
    <div className='text-center mt-5'>
      <h1>Hello World</h1>
      <p>Name: {value.name}</p>
      <p>Age: {value.age}</p>
      <p>Hobby: {value.hobby}</p>
      <button className='btn btn-primary mt-4' onClick={handleShowMe}>Show Me</button>
    </div>
  );
};

export default ObjectExample;