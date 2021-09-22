import { useState } from "react";
import postContact from "../../Services/postContact";
import AddContactInput from "../Common/AddContactInput";

const AddContactForm = ({ history, onAdd }) => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
  });
  const [error, setError] = useState('');

  const changeHandler = (e) => {
    setError("");
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const sumbitHandler =  (e) => {
    e.preventDefault();
    if (contact.name || contact.email) {
      if (contact.name) {
        if (contact.email) {
             // await postContact(contact);
            onAdd(contact);
            history.push("/");
        } else setError("contact email is necessary");
      } else setError("contact name is necessary");
    } else setError("contact name and contact email in necessary");
  };

  return (
    <form className={`w-full h-full flex flex-col`} onSubmit={sumbitHandler}>
      <h1 className={`text-3xl mb-6 font-bold text-yellow-400`}>Add Contact</h1>
      <AddContactInput
        type="text"
        placeholder="Name"
        id="name"
        lbl="name"
        name="name"
        value={contact.name}
        onChange={changeHandler}
      />
      <AddContactInput
        type="email"
        placeholder="Email"
        id="email"
        lbl="email"
        name="email"
        value={contact.email}
        onChange={changeHandler}
      />
      {error ? <h6 className={`text-red-600`}>{error}</h6> : null}
      <button
        className={`mt-auto text-gray-700 font-bold block w-full mb-5 lg:mb-10 py-2 px-5 rounded-md bg-yellow-400`}
      >
        Add
      </button>
    </form>
  );
};

export default AddContactForm;
