import React, { useState } from 'react';
import { guns } from '../../test';
const ArrayExample = () => {
  const [data, setData] = useState(guns);
  const singleRemove = (id) =>{
    const filteredData = data.filter(d => d.id !== id);
    setData(filteredData)
  }

  const handleRemove = () =>{
    setData([])
  }

  const handleChange = (value)=>{
console.log(value)
  }
  return (
  <div>
      <div className='text-center text-3xl mt-6 mb-9'>
      {
       data.map((singleData) => 
        <>
        <p>{singleData.name}</p>
        <button onClickCapture={()=> singleRemove(singleData.id)} className='btn btn-primary mt-4'>Remove</button>
        </>
        )}
    </div>
  <div className='text-center'>
  <button onClick={handleRemove} className='btn btn-error'>Remove All</button>
  <input type= 'text' onChange={(e) => handleChange(e.target.value)}></input>
  </div>
  </div>
  );
};

export default ArrayExample;