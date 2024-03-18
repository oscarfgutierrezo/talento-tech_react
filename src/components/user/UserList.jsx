import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const UserList = () => {
  const users = useSelector((state) => state.users);

  return (
    <table className="my-20 mx-auto text-center border-separate border border-slate-300">
      <thead>
        <tr>
          <th className="px-5 border bg-slate-300 border-slate-300">Name</th>
          <th className="px-5 border bg-slate-300 border-slate-300">
            LastName
          </th>
          <th className="px-5 border bg-slate-300 border-slate-300">Email</th>
          <th className="px-5 border bg-slate-300 border-slate-300">
            Identification
          </th>
          <th className="px-5 border bg-slate-300 border-slate-300">Avatar</th>
          <th className="px-5 border bg-slate-300 border-slate-300">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td className="px-5 border border-slate-300">{user.name}</td>
            <td className="px-5 border border-slate-300">{user.lastname}</td>
            <td className="px-5 border border-slate-300">{user.email}</td>
            <td className="px-5 border border-slate-300">{user.id}</td>
            <td className="px-5 py-3 border border-slate-300">
              <img className="h-32" src={user.img} />
            </td>
            <td className="px-5 border border-slate-300">
              <div className="flex flex-col items-center gap-5">
                <Link
                  to={`/user/${user.id}`}
                  className="px-5 py-1 text-white bg-blue-500 rounded-lg shadow-md shadow-black/70 hover:shadow-none transition-all duration-300"
                >
                  Editar
                </Link>
                <button className="px-5 py-1 text-white bg-red-500 rounded-lg shadow-md shadow-black/70 hover:shadow-none transition-all duration-300">
                  Eliminar
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
