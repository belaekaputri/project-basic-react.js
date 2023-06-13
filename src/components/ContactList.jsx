import React from 'react';
import ContactItem from './ContactItem';
 
function ContactList({ contacts ,onDelete }) {
 if(contacts.length === 0){
  return(
  <div className="contact-list">
     DATA TIDAK ADA
   </div>
   )
 }
  return (
   <div className="contact-list">
     {
       contacts.map((contact) => (
         <ContactItem key={contact.id}
         id={contact.id}
         onDelete={onDelete} 
         {...contact} />
       ))
     }
   </div>
 );
}

export default ContactList;