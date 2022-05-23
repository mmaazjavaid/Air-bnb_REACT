import React from 'react';
// import person1 from '../images/person1.jpg'
// import person2 from '../images/person2.jpg'
// import person3 from '../images/person3.jpg'
// import person4 from '../images/person4.jpg'

import Contact from './Contact';
const Card = () => {
    return (
        <div className="card">
        <Contact person="person1.jpg" star="star.jpg" price={120} name={"Usama Ijaz"} />
        <Contact person="person2.jpg" star="star.jpg" price={320} name={"Maaz Javaid"} />
        <Contact person="person3.jpg" star="star.jpg" price={250} name={"Wahab Malik"} />
        <Contact person="person4.jpg" star="star.jpg" price={200} name={"Hassan Jamil"} />
        <Contact person="person1.jpg" star="star.jpg" price={120} name={"Usama Ijaz"} />
        </div>
    );
};

export default Card;