import { useEffect, useState } from "react";
import Contact from "../../images/contact.png";

const ContactMember = ({ contactId, history }) => {
  const [contact, setContact] = useState(null);
  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    const selectedContact = savedContacts.filter(
      (ct) => ct.id === contactId
    )[0];
    if (!selectedContact) {
      history.push("/");
      return;
    }
    setContact(selectedContact);
  }, []);
  return (
    <figure className={`flex flex-col`}>
      {contact ? (
        <>
          <img className={`max-w-sm md:max-w-md lg:max-w-lg xl:max-w-3xl block mx-auto`} src={Contact} alt={contact.name} />
          <h1 className={`text-yellow-400 text-3xl font-bold`}>
            {contact.name}
          </h1>
          <h3 className={`text-gray-400 font-medium`}>{contact.email}</h3>
        </>
      ) : (
        <h1 className={`text-5xl text-yellow-400 fot-fold text-center`}>
          Loading...
        </h1>
      )}
    </figure>
  );
};

export default ContactMember;
