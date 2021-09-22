import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Contact from "../../images/contact.png";
import { BiArrowBack, BiPencil } from "react-icons/bi";
import getContact from "../../Services/getContact";
import deleteContact from '../../Services/deleteContact';

const ContactMember = ({ location , onDelete, match, history }) => {
  const [contactDetail, setContactDetail] = useState(null);
  const contactId = match.params.ID;

  useEffect(() => {
    if (location.state) {
      const { contact } = location.state;
      setContactDetail(contact);
      return;
    }
    if (contactId) {
    //   const fetchContact = async () => {
    //     try {
    //       const { data } = await getContact(contactId);
    //       setContactDetail(data);
    //     } catch (error) {
    //       history.push("/")
    //     }
    //   };
    //   fetchContact();
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    const index = savedContacts.findIndex(
      (ct) => ct.id === Number(match.params.ID)
    );
    if (index === -1) {
      history.push("/");
      return;
    }
    const selectedContact = { ...savedContacts[index] };
    setContactDetail(selectedContact);
      }
  }, []);

  // const removeContactHandler = async () =>{
  //   try{
  //     await deleteContact(match.params.ID);
  //     history.push('/')
  //   } catch(err) {}
  // }

  return (
    <figure className={`flex flex-col max-w-sm md:max-w-lg mx-auto h-full`}>
      <Link to="/" className={`text-4xl text-yellow-400 w-4`}>
        <BiArrowBack />
      </Link>
      {contactDetail ? (
        <>
          <img
            className={`w-52 md:max-w-sm block mx-auto`}
            src={Contact}
            alt={contactDetail.name}
          />
          <div className={`flex justify-between items-center mt-3`}>
            <div>
              <h1 className={`text-yellow-400 text-xl md:text-3xl font-bold`}>
                {contactDetail.name}
              </h1>
              <h3 className={`text-gray-400 text-xs md:text-sm font-medium`}>
                {contactDetail.email}
              </h3>
            </div>
            <Link to={`/edit-contact-${contactDetail.id}`}
            className={`text-yellow-400 text-2xl px-3 py-1 md:px-4 md:py-2 border border-yellow-400 transition rounded-md hover:text-gray-800 hover:bg-yellow-400`}
            ><BiPencil /></Link>
          </div>
          <button
            onClick={() => onDelete(contactDetail.id)}
            className={`text-red-900 text-base md:text-xl block w-full py-1 md:py-2 text-center mt-auto mb-0 lg:mb-10
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
