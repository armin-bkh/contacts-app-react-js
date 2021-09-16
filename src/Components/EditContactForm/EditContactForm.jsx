import { useEffect, useState } from "react";
import getContact from "../../Services/getContact";
import AddContactInput from "../Common/AddContactInput";

const EditContactForm = ({match, history, onSubmit }) => {
  const [contact, setContact] = useState({
      name: "",
      email: "",
      id: '',
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (match.params.ID) {
      const fetchContact = async () =>{
        try {
            const { data } = await getContact(match.params.ID)
            setContact(data);
        } catch (error) {
        history.push("/")
        }
        }
        fetchContact();
    }
  }, []);

  const changeHandler = (e) => {
      setError("");
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (contact.name || contact.email) {
      if (contact.name) {
        if (contact.email) {
            onSubmit(contact);
            setContact({
                name: '',
                email: '',
                id: '',
            })
        } else setError("contact email is necessary");
    } else setError("contact name is necessary");
  } else setError("contact name and contact email in necessary");
  };

  return contact ? (
    <form className={`w-full h-full flex flex-col`} onSubmit={submitHandler}>
        <h1 className={`text-3xl mb-6 font-bold text-yellow-400`}>Edit contact</h1>
      <AddContactInput
        type="name"
        placeholder="name"
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
      {error ? <h1 className={`text-red-600`}>{error}</h1> : null}
      <button className={`mt-auto text-gray-700 font-bold block w-full mb-10 py-2 px-5 rounded-md bg-yellow-400`} type="submit">Submit</button>
    </form>
  ) : (
    <h2 className={`text-yellow-400 text-3xl font-bold`}>Loading...</h2>
  );
};

export default EditContactForm;
