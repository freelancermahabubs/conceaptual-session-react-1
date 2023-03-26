import React from 'react';
import './Card.css';
// import img1 from '../../img/gun.png'
// import image1 from '../../images/maxx-J5yXIQnmYhM-unsplash.jpg';
const Card = ({name, price, img}) => {
// console.log(props);
// const {name, price, img} = props

  return (
    <div className=''>
      <img className='w-64' src={img} alt="" />
      <h2>{name}</h2>
      <p>{price}</p>
    </div>
  );
};

export default Card;