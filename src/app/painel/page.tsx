"use client";

import { Fornecedor } from "@/interfaces/fornecedor";
import React from "react";
import Container from "../_components/container";
import { FornecedorMock } from "../mocks/fornecedorMock";
import FornecedorForm from "./fornecedorForm";

const FornecedorPage: React.FC<{}> = () => {
  const [fornecedor, setFornecedor] = React.useState<Fornecedor>(
    {} as Fornecedor
  );

  React.useEffect(() => {
    // getFornecedorById(id).then((data) => {
    // setFornecedor(data);
    setFornecedor(FornecedorMock);
    // });
  }, []);
  return (
    <Container>
      <h1 className="text-2xl font-semibold text-center pb-6 pt-32">
        Cadastro do Fornecedor
      </h1>
      <FornecedorForm
        onSubmit={(fornecedor) => console.log(fornecedor)}
        fornecedor={fornecedor}
      />
    </Container>
  );
};

export default FornecedorPage;
