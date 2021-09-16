import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Contact from "../../images/contact.png";
import { BiArrowBack } from 'react-icons/bi';

const ContactMember = ({ location, history }) => {
  const [contactDetail, setContactDetail] = useState(null);

  useEffect(()=>{
      if(location.state){
        const { contact } = location.state;
        setContactDetail(contact);
      } else history.push("/")
  }, [])
  
  return (
    <figure className={`flex flex-col max-w-sm md:max-w-lg mx-auto`}>
        <Link to="/" className={`text-4xl text-yellow-400`}><BiArrowBack /></Link>
      {contactDetail ? (
        <>
          <img className={`w-full lg:max-w-md block mx-auto`} src={Contact} alt={contactDetail.name} />
          <h1 className={`text-yellow-400 text-3xl font-bold`}>
            {contactDetail.name}
          </h1>
          <h3 className={`text-gray-400 font-medium`}>{contactDetail.email}</h3>
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
