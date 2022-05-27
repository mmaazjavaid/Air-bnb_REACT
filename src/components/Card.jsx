import React from 'react';
// import person1 from '../images/person1.jpg'
// import person2 from '../images/person2.jpg'
// import person3 from '../images/person3.jpg'
// import person4 from '../images/person4.jpg'
import data from '../components/data'
import Contact from './Contact';
const Card = () => {
    const cardArray=data.map(item=>{
        return <Contact
        key={item.id}
        item={item}
        />
    })
    return (
        <div className='cards-list'>
             {cardArray}
        </div>
 
    );
};

export default Card;