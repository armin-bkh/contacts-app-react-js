import Contact from "./Contact/Contact";

const ContactList = ({ onDelete, contacts }) => {
    return (
        <section className={`py-5`}>
            <ul className={contacts && 'border-t border-gray-300'}>
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