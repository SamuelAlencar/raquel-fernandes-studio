import React, { useState } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard, faLock } from "@fortawesome/free-solid-svg-icons";
import firebase from "../data/Firebase";
import "../style/tailwind.css";
import Home from "../pages/home";
import Logo from "../assets/logo.png";


export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const login = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, pass)
      .then(() => {
        ReactDOM.render(<Home />, document.getElementById("root"));
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setSuccessMessage("");
      })
      .finally(() => {
        setEmail("");
        setPass("");
      });
  };

  const cadastro = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, pass)
      .then(() => {
        setSuccessMessage("Cadastro realizado com sucesso.");
        setErrorMessage("");
      })
      .catch((error) => {
        setSuccessMessage("");
        setErrorMessage(error.message);
      })
      .finally(() => {
        setEmail("");
        setPass("");
        successMessage("");
        errorMessage("");
      });
  };

  const recuperarSenha = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        setSuccessMessage(`Enviamos um link para o e-mail ${email}`);
        setErrorMessage("");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      })
      .finally(() => {
        setEmail("");
        setPass("");
        successMessage("");
        errorMessage("");
      });
  };

  const activeButtons = () => {
    if (pass && email) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mytheme">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-52 w-auto"
              src={Logo}
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-sans tracking-tight text-rose-700">
              Fa??a login em sua conta
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" value="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Endere??o de email
                </label>
                <input
                  id="username"
                  type="email"
                  placeholder="Digite seu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-rose-700 placeholder-gray-500 focus:z-10 focus:border-rose-500 focus:outline-none focus:ring-rose-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Senha
                </label>
                <input
                  id="password"
                  type="password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  name="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-rose-700 placeholder-gray-500 focus:z-10 focus:border-rose-500 focus:outline-none focus:ring-rose-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-rose-600 focus:ring-rose-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-rose-700"
                >
                  Lembrar-me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-rose-600 hover:text-rose-500"
                  onClick={recuperarSenha}
                >
                  Esqueci minha senha
                </a>
              </div>
            </div>
            <div className="inline-flex w-full">
              <button
                onClick={login}
                disabled={activeButtons()}
                type="button"
                className="group relative flex w-1/2 justify-center rounded-md border border-transparent bg-rose-600 py-2 px-4 text-sm font-medium text-white hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 mr-1.5"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <FontAwesomeIcon icon={faLock} />
                </span>
                Entrar
              </button>
              <button
                type="button"
                onClick={cadastro}
                disabled={activeButtons()}
                className="group relative flex w-1/2 justify-center rounded-md border border-transparent bg-rose-600 py-2 px-4 text-sm font-medium text-white hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 ml-1.5"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <FontAwesomeIcon icon={faIdCard} />
                </span>
                Registro
              </button>
            </div>
            {errorMessage && (
              <div className="bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700">
                {errorMessage}
              </div>
            )}
            {successMessage && (
              <div className="bg-green-100 rounded-lg py-5 px-6 mb-4 text-base text-green-700">
                {successMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
