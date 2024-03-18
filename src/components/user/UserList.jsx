import { useSelector } from "react-redux";

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
          </tr>
        ))}
        {/*  <tr>
          <td className="px-5 border border-slate-300">Juan</td>
          <td className="px-5 border border-slate-300">Perez</td>
          <td className="px-5 border border-slate-300">juan@correo.com</td>
          <td className="px-5 border border-slate-300">12345</td>
          <td className="px-5 py-3 border border-slate-300">
            <img
              className="h-32"
              src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
            />
          </td>
        </tr>
        <tr>
          <td className="px-5 border border-slate-300">Angela</td>
          <td className="px-5 border border-slate-300">Cardona</td>
          <td className="px-5 border border-slate-300">angela@correo.com</td>
          <td className="px-5 border border-slate-300">34567</td>
          <td className="px-5 py-3 border border-slate-300">
            <img
              className="h-32 mx-auto"
              src="https://retratosbarcelona.com/wp-content/uploads/2022/09/Retratos-Barcelona-Linkedin-Photo-Sydney.jpg"
            />
          </td>
        </tr> */}
      </tbody>
    </table>
  );
};
