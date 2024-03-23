import { useCreateUserMutation } from "../../features/api/apiSlice";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { UserForm } from "./UserForm";

export const UserFormCreate = () => {
  const navigate = useNavigate();
  const [createUser] = useCreateUserMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, lastname, email, id, password } = e.target;
    const user = {
      name: name.value,
      lastname: lastname.value,
      email: email.value,
      id: id.value,
      password: password.value,
    };
    try {
      const response = await createUser(user);
      if (response.data.status === "error") {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title:
            "El usuario no pudo ser registrado, por favor verifique los datos",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Usuario Creado Correctamente",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          navigate("/user"); // Hacemos la redireccion
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return <UserForm handleSubmit={handleSubmit} user={null} />;
};
