import Contact from "./Contact/Contact";
import { Link } from "react-router-dom";
import { BiPlus, BiSearch } from "react-icons/bi";
import { useEffect, useState } from "react";
import getAllContacts from "../../Services/getAllContacts";
import deleteContact from "../../Services/deleteContact";

const ContactList = ({ history }) => {
  const [contacts, setContacts] = useState(null);
  const [contactList, setContactList] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const getContacts = async () => {
      try {
        const { data } = await getAllContacts();
        setContacts(data);
        setContactList(data);
        if (!data.length) history.push("/add-contact");
      } catch (err) {}
    };
    getContacts();
  }, []);


  const removeContactHandler = async (id) => {
    try {
      await deleteContact(id);
      const filteredContacts = contacts.filter((ct) => ct.id !== id);
      setContacts(filteredContacts);
      setContactList(filteredContacts);
      if (!filteredContacts.length) history.push("/add-contact");
    } catch (err) {}
  };

  const searchContactsHandler = (e) => {
    setSearch(e.target.value);
    if(!e.target.value.length){
      setContactList(contacts);
      return;
    }
    const searchedContact = contacts.filter(ct => Object.values(ct).join(" ").toLowerCase().includes(e.target.value.toLowerCase()));
    setContactList(searchedContact);
  };

  return (
    <section className={`relative min-h-full py-5 overflow-y-auto`}>
      <header className={`flex  mb-5 items-center justify-between`}>
      <h1 className={`text-3xl text-yellow-400 font-bold`}>Contact's</h1>
      <div className={`relative`}>
        <input className={`border border-yellow-400 px-7 py-2 bg-transparent placeholder-gray-500
         outline-none text-gray-300 rounded-full`} 
        placeholder="search..." type="text" value={search} onChange={searchContactsHandler} />
        <BiSearch className={`absolute right-2 text-xl bottom-3 text-yellow-400`} />
      </div>
      </header>
      <ul className={contacts && "border-t border-gray-500"}>
        {contactList ? (
          contactList.map((contact) => (
            <Contact
              key={contact.id}
              contact={contact}
              onDelete={() => removeContactHandler(contact.id)}
            />
          ))
        ) : (
          <h1 className={`text-yellow-400 text-5xl text-center`}>Loading...</h1>
        )}
      </ul>
      <Link
        to="/add-contact"
        className={`text-xl rounded-full fixed bottom-5 right-10 bg-yellow-400 p-3 text-gray-800`}
      >
        <BiPlus />
      </Link>
    </section>
  );
};

export default ContactList;
