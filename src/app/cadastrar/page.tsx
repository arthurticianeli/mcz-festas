import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import Link from "next/link";

import Container from "../_components/container";

const Cadastrar = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Container>
        <Card className="max-w-md mx-auto">
          <div className="flex lg:flex-1 mx-auto my-6">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Mcz Festas</span>
              <img src="/assets/logo.png" alt="Logo" />
            </Link>
          </div>
          <h1 className="text-2xl font-semibold text-center">Cadastro</h1>
          <form className="flex max-w-md flex-col gap-4">
            <div>
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
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password2" value="Senha" />
              </div>
              <TextInput id="password2" type="password" required shadow />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="repeat-password" value="Repita a senha" />
              </div>
              <TextInput id="repeat-password" type="password" required shadow />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="agree" />
              <Label htmlFor="agree" className="flex">
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
        </Card>
      </Container>
    </div>
  );
};

export default Cadastrar;
