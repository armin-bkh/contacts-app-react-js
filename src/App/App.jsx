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
    <div>
      <AddContactForm onSubmit={addContactHandler} />
    </div>
  );
}

export default App;
