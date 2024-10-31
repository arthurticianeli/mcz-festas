"use client";

import Container from "@/app/_components/container";
import Modal from "@/app/_components/modal";
import { FornecedorMock } from "@/app/mocks/fornecedorMock";
import { Fornecedor } from "@/interfaces/fornecedor";
import { Button, Carousel } from "flowbite-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function FornecedorPage() {
  // const fornecedor = FornecedorMock;
  const { id } = useParams<{ id: string }>();
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  const [fornecedor, setFornecedor] = useState<Fornecedor>({} as Fornecedor);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    // getFornecedorById(id).then((data) => {
    // setFornecedor(data);
    setFornecedor(FornecedorMock);
    // });
  }, [id]);

  return (
    <Container>
      <main className="flex-grow flex flex-col pt-32">
        <div className="w-full h-56 sm:h-64 sm:w-[50vw] xl:h-80 xl:w-[40vw] 2xl:h-94 2xl:w-[30vw] mx-auto">
          <Carousel>
            {fornecedor.pictures?.map((picture) => (
              <img
                key={picture}
                src={picture}
                alt={fornecedor.name}
                onClick={() => {
                  if (isNotMobile) {
                    openModal(picture);
                  }
                }}
                tabIndex={0}
                role="button"
                style={{ cursor: "pointer" }}
              />
            ))}
          </Carousel>
        </div>

        <div className="flex flex-col gap-4 mt-8">
          <h1 className="text-3xl font-bold">{fornecedor.name}</h1>
          <p className="text-lg">{fornecedor.description}</p>
          <div className="flex flex-wrap gap-4">
            {fornecedor?.whatsapp && (
              <Link href={fornecedor?.whatsapp}>
                <Button color="gray">WhatsApp</Button>
              </Link>
            )}
            {fornecedor?.facebook && (
              <Link href={fornecedor?.facebook}>
                <Button color="gray">Facebook</Button>
              </Link>
            )}
            {fornecedor?.instagram && (
              <Link href={fornecedor?.instagram}>
                <Button color="gray">Instagram</Button>
              </Link>
            )}
            {fornecedor?.site && (
              <Link href={fornecedor?.site}>
                <Button color="gray">Site</Button>
              </Link>
            )}
          </div>
        </div>
        <Modal
          imageSrc={selectedImage}
          onClose={closeModal}
          show={isModalOpen}
        />

        {/* <div className="mt-6">
            <h2 className="text-2xl font-bold">Comentários</h2>

            <div className="mt-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                <div>
                  <h3 className="font-bold">Nome do Usuário</h3>

                  <p>Comentário do usuário</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              <textarea
                className="w-full p-4 border border-gray-300 rounded-md"
                placeholder="Deixe seu comentário"
              />
              <Button color="gray" className="btn btn-primary">
                Enviar
              </Button>
            </div>
          </div> */}
      </main>
    </Container>
  );
}
