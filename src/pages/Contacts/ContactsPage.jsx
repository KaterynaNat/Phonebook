import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectContacts, selectLoading, selectError } from "../../redux/contacts/selectors";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center justify-center p-6">
      {/* Заголовок */}
      <h1 className="text-3xl font-bold text-glitterPink mb-6">Contacts</h1>

      {/* Контейнер для форми */}
      <div className="w-full max-w-lg bg-pink-100 p-6 rounded-lg shadow-lg">
        <ContactForm />
      </div>

      {/* Поле пошуку */}
      <div className="w-full max-w-lg mt-4">
        <SearchBox />
      </div>

      {/* Список контактів */}
      <div className="w-full max-w-lg mt-6">
        {isLoading && <p className="text-center text-rose-300">Loading...</p>}
        {contacts.length === 0 && !isLoading ? (
          <p className="text-center text-rose-400">No contacts found</p>
        ) : (
          <ContactList />
        )}
      </div>

      {/* Помилка (якщо є) */}
      {error && <p className="text-center text-red-500 mt-4">Error: {error}</p>}
    </div>
  );
};

export default ContactsPage;


