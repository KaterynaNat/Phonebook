import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectFilter } from "../../redux/filters/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);

  return (
    <div className="">
      <input
        type="text"
        value={filterValue}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        placeholder="Search by name or phone..."
        className="w-full p-2 border rounded-lg shadow-sm"
      />
    </div>
  );
};

export default SearchBox;
