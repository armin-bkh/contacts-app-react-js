import Contact from "./Contact/Contact";

const ContactList = ({ onDelete, contacts }) => {
    return (
        <section className={`py-5`}>
            <h1 className={`text-3xl mb-5 text-yellow-400 font-bold`}>Contact's</h1>
            <ul className={contacts && 'border-t border-gray-500'}>
                {
                    contacts ? 
                    contacts.map(contact => (
                        <Contact key={contact.id} contact={contact} onDelete={() => onDelete(contact.id)} />
                    )) : 
                    null
                }
            </ul>
        </section>
     );
}
 
export default ContactList;