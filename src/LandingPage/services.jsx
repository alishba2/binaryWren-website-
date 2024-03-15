import React from 'react';
import "./landingpage.scss";
import Card from './card';

export default function Services() {

  // Array containing data for each card
  const cardData = [
    {
      icon: 'material-symbols:computer-outline',
      heading: 'Web Application Development',
      text: 'To help businesses successfully communicate with their intended demographic, Saigon Technology provides services that include the complete spectrum of the software development life cycle.'},
    {
        icon: 'material-symbols:computer-outline',
        heading: 'Web Application Development',
        text: 'To help businesses successfully communicate with their intended demographic, Saigon Technology provides services that include the complete spectrum of the software development life cycle.'},
  
    {
        icon: 'material-symbols:computer-outline',
        heading: 'Web Application Development',
        text: 'To help businesses successfully communicate with their intended demographic, Saigon Technology provides services that include the complete spectrum of the software development life cycle.'},
    {
        icon: 'material-symbols:computer-outline',
        heading: 'Web Application Development',
        text: 'To help businesses successfully communicate with their intended demographic, Saigon Technology provides services that include the complete spectrum of the software development life cycle.'},
    {
        icon: 'material-symbols:computer-outline',
        heading: 'Web Application Development',
        text: 'To help businesses successfully communicate with their intended demographic, Saigon Technology provides services that include the complete spectrum of the software development life cycle.'},
  ];

  return (
    <div className='service-container'>
        <div>
        <h3>Our Services</h3>
      <span className='line'></span>
        </div>
     
  
      <div className='service-card'>
      {cardData.map((card, index) => (
        <Card
          key={index}
          icon={card.icon}
          heading={card.heading}
          text={card.text}
        />
      ))}
      </div>
   
    </div>
  );
}
