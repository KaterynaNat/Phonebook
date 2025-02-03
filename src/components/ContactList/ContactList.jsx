import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div className="space-y-4">
      {filteredContacts.length === 0 ? (
        <p className="text-center text-rose-400">No contacts found</p>
      ) : (
        filteredContacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))
      )}
    </div>
  );
};

export default ContactList;

