import { useState } from 'react';
import AddContactForm from '../Components/AddContactForm/AddContactForm';
import ContactList from '../Components/CantactList/ContactList';

const  App = () => {
  const [contacts, setContacts] = useState([]);
  const [errorMes, setErrorMes] = useState('');

  const addContactHandler = (value) =>{
    if(!contacts.some(contact => contact.email === value.email)){
      if(value.name || value.email){
        if(value.name){
          if(value.email){
            setContacts([
              ...contacts,
              value
            ]) 
          } else setErrorMes('contact email is necessary');
        } else setErrorMes('contact name is necessary');
      } else setErrorMes('contact name and contact email in necessary');
      } else setErrorMes('this contact is exist');
  }

  const removeContactHandler = (email) =>{
    const filteredContacts = contacts.filter(contact => contact.email !== email);
    setContacts(filteredContacts);
  }

  return (
    <div className={'w-4/5 mx-auto'}>
      <AddContactForm setErrorMes={setErrorMes} errorMes={errorMes} onSubmit={addContactHandler} />
      <ContactList onDelete={removeContactHandler} contacts={contacts} />
    </div>
  );
}

export default App;
