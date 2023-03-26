import React, { useEffect, useState } from 'react';

const UseEffectExample = () => {
  const [data, setData] = useState([]);
  useEffect(()=>{
// fetch(`https://api.github.com/users`)
// .then(res => res.json())
// .then(data => setData(data))

const loadUserData = async () =>{
try{
  const URL = `https://api.github.com/users`
const res = await fetch(URL)
const data = await res.json()
setData(data)
}
catch(error){
  console.log(error)
}
};
loadUserData()
// const  loadUserData = async () =>{
//   try {
//     const response = await axios.get('https://api.github.com/users');
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// };
// loadUserData()
  }, [])
  return (
    <div>
      <h1>Hello</h1>
      {
        data.map((singleData) => {
         return <img src={singleData.avatar_url} alt="" />
        })
      }
    </div>
  );
};

export default UseEffectExample;