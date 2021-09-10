import { useState } from "react";
import AddContactInput from "../Common/AddContactInput";

const AddContactForm = ({ onSubmit }) => {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
  });

  const changeHandler = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      className={`w-full`}
      method="post"
      onSubmit={() => onSubmit(formValue)}
    >
      <h1 className={`text-3xl mb-6 font-bolder`}>Add Contact</h1>
      <AddContactInput
      type="text"
      placeholder="Name"
      id="name"
      lbl="name"
      name="name"
      onChange={changeHandler} 
      />
      <AddContactInput
      type="email"
      placeholder="Email"
      id="email"
      lbl="email"
      name="email"
      onChange={changeHandler} />
      <button
        className={`text-white font-bold block py-2 px-5 rounded-md bg-blue-500`}
      >
        Add
      </button>
    </form>
  );
};

export default AddContactForm;
