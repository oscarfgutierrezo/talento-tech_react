import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="py-3 text-white bg-gray-700">
      <ul className="w-full flex gap-5 px-10">
        <li>
          <Link
            className="transition-all duration-300 hover:text-yellow-300"
            to="/"
          >
            Home
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
    </nav>
  );
};
