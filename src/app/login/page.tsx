import { Button, Card, Label, TextInput } from "flowbite-react";
import Link from "next/link";

import Container from "../_components/container";

const Login = () => {
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
          <h1 className="text-2xl font-semibold text-center">Login</h1>
          <form className="flex max-w-md flex-col gap-4">
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
        </Card>
      </Container>
    </div>
  );
};

export default Login;
