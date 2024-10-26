export const getAllFornecedores = async () => {
  return await fetch("http://localhost:3000/api/fornecedores").then((res) =>
    res.json()
  );
};

export const getFornecedorById = async (id: string) => {
  return await fetch(`http://localhost:3000/api/fornecedores/${id}`).then(
    (res) => res.json()
  );
};
