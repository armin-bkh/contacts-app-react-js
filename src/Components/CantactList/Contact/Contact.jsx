import contactImage from "../../../images/contact.png";
import { Link } from "react-router-dom";

const Contact = ({ contact }) => {
  return (
    <li
      className={`flex justify-between items-center border-b border-gray-500 py-2`}
    >
      <Link
        to={{pathname: `/contact-${contact.id}`, state: { contact }}}
        className={`flex items-center flex-grow`}
      >
        <img
          className={`w-10 h-10 mr-3`}
          src={contactImage}
          alt={contact.name}
        />
        <div className={`flex flex-col`}>
          <span className={`font-bold text-sm text-gray-100`}>{contact.name}</span>
          <span className={`font-medium text-gray-400 text-xs md:text-sm`}>
            {contact.email}
          </span>
        </div>
      </Link>
    </li>
  );
};

export default Contact;
