import { useEffect, useState } from "react";
import AddContactForm from "../Components/AddContactForm/AddContactForm";
import ContactList from "../Components/CantactList/ContactList";
import { Switch, Route, withRouter } from "react-router-dom";
import ContactMember from "../Components/Contact/Contact";
import getAllContacts from "../Services/getAllContacts";
import postContact from "../Services/postContact";
import deleteContact from "../Services/deleteContact";

const App = ({ history }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    const getContacts = async () =>{
      const { data } = await getAllContacts();
      if(!data.length) {
        history.push("/add-contact");
        return;
      }
      setContacts(data);
    }
    getContacts();
  }, []);

  useEffect(() => {
    // localStorage.setItem("contacts", JSON.stringify(contacts));
    // if(!contacts.length) history.push("/add-contact")
  }, [contacts]);

  const addContactHandler = async (value) => {
    await postContact(value);
    const { data } = await getAllContacts();
    setContacts(data);
  };

  const removeContactHandler = async (id) =>{
    await deleteContact(id);
    const { data } = await getAllContacts();
    setContacts(data);
    if(!data.length) history.push("/add-contact");    
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

export default withRouter(App);
