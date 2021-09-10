import { useState } from 'react';
import AddContactForm from '../Components/AddContactForm/AddContactForm';

const  App = () => {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (e, value) =>{
    e.preventDefault();
    setContacts([
      ...contacts,
      value
    ])
  }
  return (
    <div className={'w-4/5 mx-auto'}>
      <AddContactForm onSubmit={addContactHandler} />
    </div>
  );
}

export default App;
