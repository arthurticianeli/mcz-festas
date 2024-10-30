"use client";
import { Fornecedor } from "@/interfaces/fornecedor";
import { Pagination } from "flowbite-react";
import { useState } from "react";
import Card from "./card";
import Filtro from "./filtro";

const cardsMock: Fornecedor[] = [
  {
    id: "1",
    name: "Fornecedor 1",
    description: "Descrição do fornecedor 1",
    pictures: ["https://picsum.photos/600/400"],
    type: "Buffet",
    email: "",
  },
  {
    id: "1",
    name: "Fornecedor 2",
    description: "Descrição do fornecedor 2",
    pictures: ["https://picsum.photos/600/400"],
    type: "Animador(a)",
    email: "",
  },
  {
    id: "1",
    name: "Fornecedor 3",
    description: "Descrição do fornecedor 3",
    pictures: ["https://picsum.photos/600/400"],
    type: "Boleiro(a)",
    email: "",
  },
  {
    id: "1",
    name: "Fornecedor 4",
    description: "Descrição do fornecedor 4",
    pictures: ["https://picsum.photos/600/400"],
    type: "Doceiro(a)",
    email: "",
  },
  {
    id: "1",
    name: "Fornecedor 5",
    description: "Descrição do fornecedor 5",
    pictures: ["https://picsum.photos/600/400"],
    type: "Buffet",
    email: "",
  },
  {
    id: "1",
    name: "Fornecedor 6",
    description: "Descrição do fornecedor 6",
    pictures: ["https://picsum.photos/600/400"],
    type: "Animador(a)",
    email: "",
  },
];

const Body = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => setCurrentPage(page);
  return (
    <>
      <Filtro />
      <div className="grid grid-flow-row auto-rows-auto grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 pb-6">
        {cardsMock.map((card: Fornecedor) => (
          <Card key={card.name} {...card} />
        ))}
      </div>
      <div className="flex overflow-x-auto sm:justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={100}
          onPageChange={onPageChange}
          previousLabel=""
          nextLabel=""
          showIcons
        />
      </div>
    </>
  );
};

export default Body;
