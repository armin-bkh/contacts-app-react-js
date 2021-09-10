import { useState } from 'react';
import AddContactForm from '../Components/AddContactForm/AddContactForm';
import ContactList from '../Components/CantactList/ContactList';

const  App = () => {
  const [contacts, setContacts] = useState([]);
  const [errorMes, setErrorMes] = useState('');

  const addContactHandler = (value) =>{
      if(value.name || value.email){
        if(value.name){
          if(value.email){
            setContacts([
              ...contacts,
              {
                id: contacts.length + 1,
                ...value,
              },
            ]) 
          } else setErrorMes('contact email is necessary');
        } else setErrorMes('contact name is necessary');
      } else setErrorMes('contact name and contact email in necessary');
  }

  const removeContactHandler = (id) =>{
    const filteredContacts = contacts.filter(contact => contact.id !== id);
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
