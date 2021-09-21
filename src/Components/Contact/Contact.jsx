import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Contact from "../../images/contact.png";
import { BiArrowBack, BiPencil } from "react-icons/bi";
import getContact from "../../Services/getContact";
import deleteContact from '../../Services/deleteContact';

const ContactMember = ({ location, history, match }) => {
  const [contactDetail, setContactDetail] = useState(null);
  const contactId = match.params.ID;

  useEffect(() => {
    if (location.state) {
      const { contact } = location.state;
      setContactDetail(contact);
      return;
    }
    if (contactId) {
      const fetchContact = async () => {
        try {
          const { data } = await getContact(contactId);
          setContactDetail(data);
        } catch (error) {}
      };
      fetchContact();
    }
  }, []);

  const removeContactHandler = async () =>{
    try{
      await deleteContact(match.params.ID);
      history.push('/')
    } catch(err) {}
  }

  return (
    <figure className={`flex flex-col max-w-sm md:max-w-lg mx-auto h-full`}>
      <Link to="/" className={`text-4xl text-yellow-400 w-4`}>
        <BiArrowBack />
      </Link>
      {contactDetail ? (
        <>
          <img
            className={`w-full lg:max-w-md block mx-auto`}
            src={Contact}
            alt={contactDetail.name}
          />
          <div className={`flex justify-between items-center mt-3`}>
            <div>
              <h1 className={`text-yellow-400 text-3xl font-bold`}>
                {contactDetail.name}
              </h1>
              <h3 className={`text-gray-400 font-medium`}>
                {contactDetail.email}
              </h3>
            </div>
            <Link to={`/edit-contact-${contactDetail.id}`}
            className={`text-yellow-400 text-2xl px-4 py-2 border border-yellow-400 transition rounded-md hover:text-gray-800 hover:bg-yellow-400`}
            ><BiPencil /></Link>
          </div>
          <button
            onClick={removeContactHandler}
            className={`text-red-900 text-xl block w-full py-2 text-center mt-auto mb-10
           border-red-900 border rounded-md hover:bg-red-900 hover:text-gray-900 font-bold transition`}
            
          >
            Remove contact
          </button>
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
