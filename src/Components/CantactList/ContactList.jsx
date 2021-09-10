import Contact from "./Contact/Contact";

const ContactList = ({ onDelete, contacts }) => {
    return (
        <section className={`py-5`}>
            <ul>
                {
                    contacts ? 
                    contacts.map(contact => (
                        <Contact key={contact.email} contact={contact} onDelete={() => onDelete(contact.email)} />
                    )) : 
                    null
                }
            </ul>
        </section>
     );
}
 
export default ContactList;