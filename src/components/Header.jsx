import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="py-3 px-10 flex justify-between text-white bg-blue-700">
      <ul className="w-full flex gap-5">
        <li>
          <Link
            className="transition-all duration-300 hover:text-yellow-300"
            to="/create-user"
          >
            Create User
          </Link>
        </li>
        <li>
          <Link
            className="transition-all duration-300 hover:text-yellow-300"
            to="/user"
          >
            Users
          </Link>
        </li>
      </ul>
      <Link
        className="transition-all duration-300 hover:text-yellow-300"
        to="/login"
      >
        Login
      </Link>
    </nav>
  );
};
