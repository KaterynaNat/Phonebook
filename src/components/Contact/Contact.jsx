import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteContact, updateContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";
import { Button, Modal, Box, Typography, TextField } from "@mui/material";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [newName, setNewName] = useState(contact.name);
  const [newNumber, setNewNumber] = useState(contact.number);

  // 🔴 Видалення контакту
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
    toast.success(`Contact ${contact.name} deleted!`);
    setOpenDelete(false);
  };

  // ✏️ Оновлення контакту (PATCH)
  const handleEdit = () => {
    if (newName.trim() === "" || newNumber.trim() === "") {
      toast.error("Fields cannot be empty!");
      return;
    }

    dispatch(updateContact({ id: contact.id, name: newName, number: newNumber }));
    toast.success(`Contact updated successfully!`);
    setOpenEdit(false);
  };

  return (
    <div className="bg-pink-100 p-4 rounded-lg shadow-md flex justify-between items-center w-full">
      <div className="flex flex-col gap-2">
        {/* Ім'я */}
        <div className="flex items-center gap-3">
          <svg
            className="w-6 h-6 fill-rose-500"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13zM16.961 22.22c4.383-0.866 7.785-2.861 9.014-5.519-0.677 5.249-5.047 9.299-10.339 9.299-3.726 0-6.996-2.009-8.84-5.03 2.2 1.721 6.079 2.056 10.165 1.249zM20 11c0-1.657 0.895-3 2-3s2 1.343 2 3c0 1.657-0.895 3-2 3s-2-1.343-2-3zM11 11.609c-1.306 0-2.417 0.489-2.829 1.172-0.111-0.183-0.171-1.005-0.171-1.211 0-0.971 1.343-1.758 3-1.758s3 0.787 3 1.758c0 0.206-0.061 1.028-0.171 1.211-0.412-0.683-1.522-1.172-2.829-1.172z"></path>
          </svg>
          <span className="text-lg font-semibold text-rose-400">{contact.name}</span>
        </div>

        {/* Номер телефону */}
        <div className="flex items-center gap-3">
          <svg
            className="w-6 h-6 fill-purple-500"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M23 0h-14c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h14c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3zM12 1.5h8v1h-8v-1zM16 30c-1.105 0-2-0.895-2-2s0.895-2 2-2 2 0.895 2 2-0.895 2-2 2zM24 24h-16v-20h16v20z"></path>
          </svg>
          <span className="text-md text-purple-400">{contact.number}</span>
        </div>
      </div>

      {/* Кнопки редагування та видалення */}
      <div className="flex gap-2">
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FFB6C1",
            color: "#FFFFE0",
            "&:hover": { backgroundColor: "#DB7093" },
          }}
          onClick={() => setOpenEdit(true)}
        >
          Edit
        </Button>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#DDA0DD",
            color: "#FFFFE0",
            "&:hover": { backgroundColor: "#BA55D3" },
          }}
          onClick={() => setOpenDelete(true)}
        >
          Delete
        </Button>
      </div>

      {/* 🗑️ Модальне вікно підтвердження видалення */}
      <Modal open={openDelete} onClose={() => setOpenDelete(false)}>
        <Box
          className="bg-white p-6 rounded-lg shadow-lg text-center m-auto w-80"
          sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
        >
          <Typography variant="h6" className="text-purple-400 font-bold">
            Confirm Deletion
          </Typography>
          <Typography className="text-purple-300 mt-2">
            Are you sure you want to delete <strong>{contact.name}</strong>?
          </Typography>
          <div className="flex justify-center gap-4 mt-4">
            <Button  variant="contained"
          sx={{
            backgroundColor: "#FFB6C1",
            color: "#FFFFE0",
            "&:hover": { backgroundColor: "#DB7093" },
          }} 
          onClick={handleDelete}>
              Yes, Delete
            </Button>
            <Button  variant="contained"
          sx={{
            backgroundColor: "#DDA0DD",
            color: "#FFFFE0",
            "&:hover": { backgroundColor: "#BA55D3" },
          }}
          onClick={() => setOpenDelete(false)}>
              Cancel
            </Button>
          </div>
        </Box>
      </Modal>

    {/* ✏️ Модальне вікно редагування контакту */}
<Modal open={openEdit} onClose={() => setOpenEdit(false)}>
  <Box
    className="bg-purple-200 p-6 rounded-lg shadow-lg text-center m-auto w-80"
    sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
  >
    <Typography variant="h6" className="text-pink-300 font-bold">
      Edit Contact
    </Typography>
    
    {/* Поле вводу Імені */}
    <TextField
      label="Name"
      value={newName}
      onChange={(e) => setNewName(e.target.value)}
      fullWidth
      margin="normal"
      sx={{
        backgroundColor: "white",
        borderRadius: "8px",
        "& .MuiOutlinedInput-root": {
          "& fieldset": { borderColor: "#FFB6C1 !important" }, 
          "&:hover fieldset": { borderColor: "#DB7093 !important" },
          "&.Mui-focused fieldset": { borderColor: "transparent !important" },
        },
        "& .MuiInputBase-input": {
          color: "#D81B60",
          caretColor: "#D81B60",
        },
        "& .MuiInputLabel-root": {
          color: "#D81B60 !important",
        },
      }}
    />

    {/* Поле вводу Номеру телефону */}
    <TextField
      label="Phone Number"
      value={newNumber}
      onChange={(e) => setNewNumber(e.target.value)}
      fullWidth
      margin="normal"
      sx={{
        backgroundColor: "white",
        borderRadius: "8px",
        "& .MuiOutlinedInput-root": {
          "& fieldset": { borderColor: "#DDA0DD !important" },
          "&:hover fieldset": { borderColor: "#BA55D3 !important" },
          "&.Mui-focused fieldset": { borderColor: "transparent !important" },
        },
        "& .MuiInputBase-input": {
          color: "#8A2BE2",
          caretColor: "#8A2BE2",
        },
        "& .MuiInputLabel-root": {
          color: "#8A2BE2 !important",
        },
      }}
    />

    {/* Кнопки */}
    <div className="flex justify-between mt-4">
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#FFB6C1",
          color: "#FFFFE0",
          "&:hover": { backgroundColor: "#DB7093" },
        }}
        onClick={handleEdit}
      >
        Save
      </Button>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#DDA0DD",
          color: "#FFFFE0",
          "&:hover": { backgroundColor: "#BA55D3" },
        }}
        onClick={() => setOpenEdit(false)}
      >
        Cancel
      </Button>
    </div>
  </Box>
</Modal>
    </div>
  );
};

export default Contact;
