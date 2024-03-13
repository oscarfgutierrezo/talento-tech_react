export const UserList = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>LastName</th>
          <th>Email</th>
          <th>Identification</th>
          <th>Avatar</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Juan</td>
          <td>Perez</td>
          <td>juan@correo.com</td>
          <td>12345</td>
          <td>
            <img
              className="h-32"
              src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
            />
          </td>
        </tr>
        <tr>
          <td>Angela</td>
          <td>Cardona</td>
          <td>angela@correo.com</td>
          <td>34567</td>
          <td>
            <img
              className="h-32"
              src="https://retratosbarcelona.com/wp-content/uploads/2022/09/Retratos-Barcelona-Linkedin-Photo-Sydney.jpg"
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};
