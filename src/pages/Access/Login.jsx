// images

import logo from "../../assets/polpoPass.svg";
import lateralImage from "../../img/lateral-image.jpg";

//Librerias
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { login } from "../../redux/thunks";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onsubmit = (data) => {
    const { email, password } = data;
    dispatch(login(email, password));
  };

  return (
    <div className="flex w-full bg-bg-admin">
      <div className="lg:w-1/2 w-full h-screen flex-row bg-bgPrimary">
        <div className="px-10 sm:px-20 md:px-32 lg:px-20 pt-10">
          <div className="">
            <Link to="/">
              <img src={logo} alt="Logo polpoevents" />
            </Link>
            <h1 className="text-5xl font-bold py-8 text-white">
              Iniciar sesion
            </h1>
          </div>
          <form
            onSubmit={handleSubmit(onsubmit)}
            className="justify-center items-center  flex flex-col"
          >
            <div className="mb-6 w-full border pt-1 bg-white">
              <label className="block text-gray-500 text-sm ml-3">
                Direccion de correo electronico
              </label>
              <input
                className=" rounded w-full text-gray-700 px-4 outline-none pb-2"
                type="email"
                autoComplete="off"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Escribe tu correo",
                  },

                  maxLength: {
                    value: 40,
                    message: "Maximo de caracteres 40",
                  },

                  minLength: {
                    value: 2,
                    message: "Minimo de caracteres 2",
                  },

                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Escribe un correo valido",
                  },
                })}
              />
              <p className="text-red-900 text-1s absolute">
                {errors.email && errors.email.message}
              </p>
            </div>
            <div className="mb-6 w-full border pt-1 bg-white">
              <label className="block text-gray-500 text-sm ml-3">
                Contraseña
              </label>
              <input
                className=" rounded w-full text-gray-700 px-4 pb-2 outline-none"
                autoComplete="off"
                type="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Escribe tu contraseña",
                  },

                  maxLength: {
                    value: 25,
                    message: "Maximo de caracteres 25",
                  },

                  minLength: {
                    value: 2,
                    message: "Minimo de caracteres 2",
                  },
                })}
              />
              <p className="text-red-900 text-1s absolute">
                {errors.password && errors.password.message}
              </p>
            </div>
            <div className="w-full">
              <button className="px-4 w-full rounded-lg py-4 hover:bg-bg-violet border-2 border-bg-violet text-white font-bold">
                Iniciar Sesión
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="hidden lg:flex w-1/2">
        <img
          className="bg-cover bg-no-repeat h-screen w-screen"
          src={lateralImage}
          alt=""
        />
      </div>
    </div>
  );
};

export default Login;
