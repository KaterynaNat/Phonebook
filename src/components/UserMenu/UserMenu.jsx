import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import { useEffect } from "react";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    console.log("User logged out, state updated!");
  }, [user]);

  return (
    <div className="flex items-center gap-4">
      <p className="text-pink-700 font-bold">{user.name}</p>
      <button
        onClick={handleLogout}
        className="bg-rose-400 text-white px-4 py-2 rounded-lg hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
