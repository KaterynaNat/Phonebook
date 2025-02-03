import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
<nav className="flex gap-6 p-4">
      <NavLink to="/register" className="relative group">
        <button className="relative px-6 py-3 bg-pink-200 text-[#f28cbf] font-bold rounded-full shadow-md 
          hover:bg-pink-300 hover:text-[#f1d3e3] transition duration-300 border-4 border-pink-300 
          before:absolute before:inset-0 before:rounded-full before:opacity-0 
          hover:before:opacity-100 active:scale-95 overflow-visible">
          Register

          {}
          <svg className="absolute top-1/2 left-1/2 w-4 h-4 fill-pink-400 opacity-0 scale-50 transition-all duration-500 group-hover:top-[-25px] group-hover:left-[60px] group-hover:opacity-100 group-hover:scale-100">
            <use href="#icon-star-full"></use>
          </svg>

          <svg className="absolute top-1/2 left-1/2 w-3 h-3 fill-pink-400 opacity-0 scale-50 transition-all duration-500 group-hover:top-[-10px] group-hover:left-[100px] group-hover:opacity-100 group-hover:scale-100">
            <use href="#icon-star-full"></use>
          </svg>

          <svg className="absolute top-1/2 left-1/2 w-5 h-5 fill-pink-400 opacity-0 scale-50 transition-all duration-600 group-hover:top-[50px] group-hover:left-[20px] group-hover:opacity-100 group-hover:scale-100">
            <use href="#icon-star-full"></use>
          </svg>

          <svg className="absolute top-1/2 left-1/2 w-4 h-4 fill-pink-400 opacity-0 scale-50 transition-all duration-600 group-hover:top-[30px] group-hover:left-[-20px] group-hover:opacity-100 group-hover:scale-100">
            <use href="#icon-star-full"></use>
          </svg>
        </button>
      </NavLink>

      <NavLink to="/login" className="relative group">
        <button className="relative px-6 py-3 bg-pink-200 text-[#f28cbf] font-bold rounded-full shadow-md 
          hover:bg-pink-300 hover:text-[#f1d3e3] transition duration-300 border-4 border-pink-300 
          before:absolute before:inset-0 before:rounded-full before:opacity-0 
          hover:before:opacity-100 active:scale-95 overflow-visible">
          Log In

          {}
          <svg className="absolute top-1/2 left-1/2 w-4 h-4 fill-pink-400 opacity-0 scale-50 transition-all duration-500 group-hover:top-[-25px] group-hover:left-[60px] group-hover:opacity-100 group-hover:scale-100">
            <use href="#icon-star-full"></use>
          </svg>

          <svg className="absolute top-1/2 left-1/2 w-3 h-3 fill-pink-400 opacity-0 scale-50 transition-all duration-500 group-hover:top-[-10px] group-hover:left-[100px] group-hover:opacity-100 group-hover:scale-100">
            <use href="#icon-star-full"></use>
          </svg>

          <svg className="absolute top-1/2 left-1/2 w-5 h-5 fill-pink-400 opacity-0 scale-50 transition-all duration-600 group-hover:top-[50px] group-hover:left-[20px] group-hover:opacity-100 group-hover:scale-100">
            <use href="#icon-star-full"></use>
          </svg>

          <svg className="absolute top-1/2 left-1/2 w-4 h-4 fill-pink-400 opacity-0 scale-50 transition-all duration-600 group-hover:top-[30px] group-hover:left-[-20px] group-hover:opacity-100 group-hover:scale-100">
            <use href="#icon-star-full"></use>
          </svg>
        </button>
      </NavLink>
      {}
      <svg style={{ display: "none" }}>
        <symbol id="icon-star-full" viewBox="0 0 32 32">
          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
        </symbol>
      </svg>
    </nav>
  );
};

export default AuthNav;

