let contacts = [ 
    {
       id:1,
       name: 'Kim Hanbin',
       tag : 'bi',
       imageUrl : '/images/1.jpg',
    },
    {
        id:2,
        name: 'Bobby',
        tag : 'by',
        imageUrl : '/images/2.jpg',
     },
     {
        id:3,
        name: 'Nam Dosan',
        tag : 'dsn',
        imageUrl : '/images/3.jpg',
     },
]

function getContacts(){
   return contacts;
}

function addContact(contact){
   contacts= [...contacts, { id: +new Date(), imageUrl: '/images/2.jpg', ...contact }];
}

function deleteContact(id) {
   contacts = contacts.filter((contact) => contact.id !== id);
 }
  
 export { getContacts, addContact, deleteContact };