import { useEffect, useState } from "react";
import AddContactForm from "../Components/AddContactForm/AddContactForm";
import ContactList from "../Components/CantactList/ContactList";
import { Switch, Route, Link } from "react-router-dom";
import ContactMember from "../Components/Contact/Contact";
import { BiPlus } from "react-icons/bi";

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
    <main
      className={
        "relative w-full h-screen overflow-y-auto mx-auto bg-gray-900 py-2 px-5"
      }
    >
      <Switch>
        <Route
          path="/add-contact"
          render={(props) => (
            <AddContactForm onSubmit={addContactHandler} {...props} />
          )}
        />
        <Route
          path="/contact-:ID"
          render={(props) => <ContactMember onDelete={removeContactHandler} {...props} />}
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
