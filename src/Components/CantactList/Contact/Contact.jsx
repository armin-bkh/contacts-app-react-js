import contactImage from "../../../images/contact.png";
import { BiTrash } from "react-icons/bi";

const Contact = ({ onDelete, contact }) => {
  return (
    <li className={`flex justify-between items-center border-b border-gray-300 py-2`}>
      <h4 className={`flex items-center`}>
        <img className={`w-10 h-10 mr-3`} src={contactImage} alt={contact.name} />
        <div className={`flex flex-col`}>
          <span className={`font-bold`}>{contact.name}</span>
          <span className={`font-medium`}>{contact.email}</span>
        </div>
      </h4>
      <button className={`text-white bg-yellow-400 px-5 py-2 rounded-md text-2xl`} onClick={onDelete}>
        <BiTrash />
      </button>
    </li>
  );
};

export default Contact;
