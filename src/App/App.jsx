import { useEffect, useState } from "react";
import AddContactForm from "../Components/AddContactForm/AddContactForm";
import ContactList from "../Components/CantactList/ContactList";
import { Switch, Route } from "react-router-dom";

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (savedContacts) setContacts(savedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContactHandler = (value) => {
    setContacts([
      ...contacts,
      {
        id: contacts.length + 1,
        ...value,
      },
    ]);
  };

  const removeContactHandler = (id) => {
    const filteredContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(filteredContacts);
  };

  return (
    <main className={"max-w-sm mx-auto bg-gray-900 py-2 px-5"}>
      <Switch>
        <Route
          path="/add-contact"
          render={(props) => (
            <AddContactForm onSubmit={addContactHandler} {...props} />
          )}
        />
        <Route
          path="/"
          exact
          render={(props) => (
            <ContactList
              onDelete={removeContactHandler}
              contacts={contacts}
              {...props}
            />
          )}
        />
      </Switch>
    </main>
  );
};

export default App;
