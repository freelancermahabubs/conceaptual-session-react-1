import React, { useEffect, useState } from 'react';

const Basic = () => {
  const [count, setCount] = useState(0)
  const handleCount = () =>{
   setCount(count + 1);
  };

  useEffect(()=>{
    console.log('hello from useEffect')
  }, [count])
  return (
    <div className='text-center text-3xl mt-6 mb-9'>
      <h1>Count: {count} </h1>
      <button onClick={handleCount} className='btn btn-primary mr-5'>Plus</button>
      <button className='btn btn-error'>Minus</button>
    </div>
  );
};

export default Basic;