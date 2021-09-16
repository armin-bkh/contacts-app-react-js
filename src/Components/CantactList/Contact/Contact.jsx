import contactImage from "../../../images/contact.png";
import { BiTrash } from "react-icons/bi";
import { Link } from "react-router-dom";

const Contact = ({ onDelete, contact, onSelect }) => {
  return (
    <li
      className={`flex justify-between items-center border-b border-gray-500 py-2`}
    >
      <Link
        onClick={onSelect}
        to={`/contact-${contact.id}`}
        className={`flex items-center`}
      >
        <img
          className={`w-10 h-10 mr-3`}
          src={contactImage}
          alt={contact.name}
        />
        <div className={`flex flex-col`}>
          <span className={`font-bold text-gray-100`}>{contact.name}</span>
          <span className={`font-medium text-gray-400 text-sm`}>
            {contact.email}
          </span>
        </div>
      </Link>
      <button
        className={`text-black bg-yellow-400 px-4 py-2 rounded-md text-xl`}
        onClick={onDelete}
      >
        <BiTrash />
      </button>
    </li>
  );
};

export default Contact;
