import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Link from "next/link";

const Cadastrar = () => {
  return (
    <form className="w-full sm:max-w-md mx-auto px-5 sm:px-0 bg-white flex flex-col gap-4 pt-32 pb-6 items-center">
      <h1 className="text-2xl font-semibold text-center">Cadastro</h1>
      <div className="w-full">
        <div className="mb-2 block">
          <Label htmlFor="email2" value="E-mail" />
        </div>
        <TextInput
          id="email2"
          type="email"
          placeholder="name@email.com"
          required
          shadow
        />
      </div>
      <div className="w-full">
        <div className="mb-2 block">
          <Label htmlFor="password2" value="Senha" />
        </div>
        <TextInput id="password2" type="password" required shadow />
      </div>
      <div className="w-full">
        <div className="mb-2 block">
          <Label htmlFor="repeat-password" value="Repita a senha" />
        </div>
        <TextInput id="repeat-password" type="password" required shadow />
      </div>
      <div className="flex  items-center gap-2">
        <Checkbox id="agree" />
        <Label htmlFor="agree" className="flex flex-wrap">
          Eu concordo com os&nbsp;
          <Link
            href="#"
            className="hover:underline"
            style={{
              color: "#00B5D8",
              cursor: "pointer",
            }}
          >
            termos e condições
          </Link>
        </Label>
      </div>
      <div className="w-full mt-auto">
        <Button gradientDuoTone="purpleToPink" className="w-full">
          Cadastrar
        </Button>
      </div>
    </form>
  );
};

export default Cadastrar;
