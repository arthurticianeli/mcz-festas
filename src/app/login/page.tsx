"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Label, TextInput } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  password: yup.string().required("Senha é obrigatória"),
});

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const router = useRouter();

  const onSubmit = () => {
    const userId = "123";
    router.push(`/fornecedor/cadastro/${userId}`);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full sm:max-w-md mx-auto px-5 sm:px-0 bg-white flex flex-col gap-4 pt-32 pb-6"
    >
      <h1 className="text-2xl font-semibold text-center pb-6">Login</h1>
      <div className="w-full">
        <div className="mb-2 block">
          <Label htmlFor="email1" value="E-mail" />
        </div>
        <TextInput
          id="email1"
          type="email"
          placeholder="nome@email.com"
          {...register("email")}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <div className="w-full">
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Senha" />
        </div>
        <TextInput id="password1" type="password" {...register("password")} />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
      </div>
      <Link
        href="#"
        className="text-sm hover:underline"
        style={{
          color: "#11859c",
          cursor: "pointer",
        }}
      >
        Esqueceu a senha?
      </Link>
      <div className="w-full mt-auto">
        <Button type="submit" gradientDuoTone="purpleToPink" className="w-full">
          Entrar
        </Button>
      </div>
    </form>
  );
};

export default LoginPage;
