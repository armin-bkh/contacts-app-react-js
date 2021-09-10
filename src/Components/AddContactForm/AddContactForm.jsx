import { useState } from "react";
import AddContactInput from "../Common/AddContactInput";

const AddContactForm = ({ onSubmit, errorMes, setErrorMes }) => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
  });

  const changeHandler = (e) => {
    setErrorMes("");
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const sumbitHandler = (e) =>{
      e.preventDefault();
    onSubmit(contact);
    setContact({
        name: '',
        email: '',
    })
  }

  return (
    <form className={`w-full`} onSubmit={sumbitHandler}>
      <h1 className={`text-3xl mb-6 font-bold`}>Add Contact</h1>
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
      {errorMes ? <h6 className={`text-red-600`}>{errorMes}</h6> : null}
      <button
        className={`text-white font-bold block mt-2 w-full py-2 px-5 rounded-md bg-blue-500`}
      >
        Add
      </button>
    </form>
  );
};

export default AddContactForm;
