import { Button, Label, TextInput } from "flowbite-react";
import Link from "next/link";

// tirar a login page do layout

const LoginPage = () => {
  return (
    <form className="w-full  sm:max-w-md mx-auto px-5 sm:px-0 bg-white flex flex-col gap-4 pt-32 pb-6">
      <h1 className="text-2xl font-semibold text-center pb-6">Login</h1>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="E-mail" />
        </div>
        <TextInput
          id="email1"
          type="email"
          placeholder="nome@email.com"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Senha" />
        </div>
        <TextInput id="password1" type="password" required />
      </div>
      <Link
        href="#"
        className="text-sm  hover:underline"
        style={{
          color: "#11859c",
          cursor: "pointer",
        }}
      >
        Esqueceu a senha?
      </Link>
      <div className="w-full mt-auto">
        <Button gradientDuoTone="purpleToPink" className="w-full">
          Entrar
        </Button>
      </div>
      <div className="flex items-center gap-2 mx-auto">
        <p>Não tem uma conta?</p>
        <Link
          href="/cadastrar"
          className="text-center text-cyan-600 hover:underline"
          style={{
            color: "#11859c",
            cursor: "pointer",
          }}
        >
          Cadastre-se!
        </Link>
      </div>
    </form>
  );
};

export default LoginPage;
