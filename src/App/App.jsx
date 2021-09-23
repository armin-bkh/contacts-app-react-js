import { useEffect, useState } from "react";
import AddContactForm from "../Components/AddContactForm/AddContactForm";
import ContactList from "../Components/CantactList/ContactList";
import { Switch, Route, withRouter } from "react-router-dom";
import ContactMember from "../Components/Contact/Contact";
import getAllContacts from "../Services/getAllContacts";
import postContact from "../Services/postContact";
import deleteContact from "../Services/deleteContact";
import putContact from "../Services/putContact";
import EditContactForm from "../Components/EditContactForm/EditContactForm";

const App = ({ history }) => {
  const [contacts, setContacts] = useState(null);
  const [contactList, setContactList] = useState(null);

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    setContacts(savedContacts);
    setContactList(savedContacts);
    if (!savedContacts.length) history.push("/add-contact");
    // const getContacts = async () => {
    //   const { data } = await getAllContacts();
    //   if (!data.length) {
    //     history.push("/add-contact");
    //     return;
    //   }
    //   setContacts(data);
    // };
    // getContacts();
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
    // if(!contacts.length) history.push("/add-contact")
    setContactList(contacts);
  }, [contacts]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, { ...contact, id: contacts.length + 1 }]);
  };

  const editContactHandler = (id, contact) => {
    const index = contacts.findIndex((ct) => ct.id === id);
    const cloneContacts = [...contacts];
    cloneContacts[index] = contact;
    setContacts(cloneContacts);
  };

  const removeContactHandler = (id) => {
    const filteredContacts = contacts.filter((ct) => ct.id !== id);
    setContacts(filteredContacts);
    if (!filteredContacts.length) {
      history.push("/add-contact");
      return;
    }
    history.push("/");
  };

  const searchContactsHandler = (search) => {
    if (!search) {
      setContactList(contacts);
      return;
    }
    // const searchedContact = contacts.filter(ct => Object.values(ct).join(" ").toLowerCase().includes(search.toLowerCase()));
    const searchedContact = contacts.filter((ct) =>
      String.prototype
        .concat(ct.name, " ", ct.email)
        .toLowerCase()
        .includes(search.toLowerCase())
    );
    setContactList(searchedContact);
  };

  // const editContactHandler = async (value, id) => {
  //   try {
  //     await putContact(id, value);
  //     const { data } = await getAllContacts();
  //     setContacts(data);
  //     history.push("/");
  //   } catch (error) {}
  // };

  return (
    <main
      className={
        "relative w-full h-screen overflow-y-auto mx-auto bg-gray-900 py-2 px-5"
      }
    >
      <Switch>
        <Route
          path="/edit-contact-:ID"
          render={(props) => (
            <EditContactForm onEdit={editContactHandler} {...props} />
          )}
        />
        <Route
          path="/add-contact"
          render={(props) => (
            <AddContactForm onAdd={addContactHandler} {...props} />
          )}
        />
        <Route
          path="/contact-:ID"
          render={(props) => (
            <ContactMember onDelete={removeContactHandler} {...props} />
          )}
        />
        <Route
          path="/"
          exact
          render={(props) => (
            <ContactList
              contactList={contactList}
              onSearch={searchContactsHandler}
              {...props}
            />
          )}
        />
      </Switch>
    </main>
  );
};

export default withRouter(App);
