import { useEffect, useState } from "react";
import AddContactForm from "../Components/AddContactForm/AddContactForm";
import ContactList from "../Components/CantactList/ContactList";
import { Switch, Route } from "react-router-dom";
import ContactMember from "../Components/Contact/Contact";
import getAllContacts from "../Services/getAllContacts";
import postContact from "../Services/postContact";
import deleteContact from "../Services/deleteContact";
import putContact from "../Services/putContact";
import EditContactForm from "../Components/EditContactForm/EditContactForm";

const App = () => {
  // const [contacts, setContacts] = useState([]);

  // useEffect(() => {
  //   const savedContacts = JSON.parse(localStorage.getItem("contacts"));
  //   const getContacts = async () => {
  //     const { data } = await getAllContacts();
  //     if (!data.length) {
  //       history.push("/add-contact");
  //       return;
  //     }
  //     setContacts(data);
  //   };
  //   getContacts();
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  //   if(!contacts.length) history.push("/add-contact")
  // }, [contacts]);

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
          component={EditContactForm}
        />
        <Route
          path="/add-contact"
          component={AddContactForm}
        />
        <Route
          path="/contact-:ID"
          component={ContactMember}
        />
        <Route
          path="/"
          exact
          component={ContactList}
        />
      </Switch>
    </main>
  );
};

export default App;
