import Contact from "./Contact/Contact";
import { Link } from "react-router-dom";
import { BiPlus } from "react-icons/bi";

const ContactList = ({ onDelete, contacts, onSelect }) => {
  return (
    <section className={`relative min-h-full py-5 overflow-y-auto`}>
      <h1 className={`text-3xl mb-5 text-yellow-400 font-bold`}>Contact's</h1>
      <ul className={contacts && "border-t border-gray-500"}>
        {contacts
          ? contacts.map((contact) => (
              <Contact
                key={contact.id}
                contact={contact}
                onSelect={() => onSelect(contact.id)}
                onDelete={() => onDelete(contact.id)}
              />
            ))
          : null}
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
