import { Fornecedor } from "@/interfaces/fornecedor";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Label, Textarea, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as Yup from "yup";
import ImageGallery from "../../../_components/imagemGalery";
import Modal from "../../../_components/modal";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Nome é obrigatório"),
  email: Yup.string().email("Email inválido").required("Email é obrigatório"),
  facebook: Yup.string().url("URL inválida"),
  instagram: Yup.string().url("URL inválida"),
  site: Yup.string().url("URL inválida"),
  description: Yup.string().required("Descrição é obrigatória"),
  type: Yup.string().required("Tipo é obrigatório"),
  pictures: Yup.array().min(1, "Selecione ao menos uma imagem"),
});

const FornecedorForm: React.FC<{
  fornecedor?: Fornecedor;
  onSubmit: (fornecedor: Fornecedor) => void;
}> = ({ fornecedor, onSubmit }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Fornecedor>({
    resolver: yupResolver(validationSchema),
    defaultValues: fornecedor,
  });

  const pictures = watch("pictures");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<string>("");
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const onSubmitHandler: SubmitHandler<Fornecedor> = (data) => {
    onSubmit(data);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const promises = Array.from(files).map(
        (file) =>
          new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = reject;
            reader.readAsDataURL(file);
          })
      );

      Promise.all(promises).then((images) => {
        setValue("pictures", images);
      });
    }
  };

  const handleDeleteImage = () => {
    if (pictures) {
      setValue(
        "pictures",
        pictures.filter((_, i: number) => i !== currentImageIndex)
      );
    }
  };

  const openModal = (image: string) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="grid grid-cols-12 gap-4 "
    >
      <div className="col-span-12 lg:col-span-5">
        <Label htmlFor="name" value="Nome" />
        <TextInput
          id="name"
          type="text"
          {...register("name")}
          color={errors.name ? "failure" : "gray"}
          helperText={errors.name?.message}
        />
      </div>

      <div className="col-span-12 lg:col-span-5">
        <Label htmlFor="email" value="Email" />
        <TextInput
          id="email"
          type="email"
          {...register("email")}
          color={errors.email ? "failure" : "gray"}
          helperText={errors.email?.message}
        />
      </div>
      <div className="col-span-12 lg:col-span-2">
        <Label htmlFor="type" value="Tipo" />
        <TextInput
          id="type"
          type="text"
          {...register("type")}
          color={errors.type ? "failure" : "gray"}
          helperText={errors.type?.message}
        />
      </div>

      <div className="col-span-12 lg:col-span-4">
        <Label htmlFor="facebook" value="Facebook" />
        <TextInput
          id="facebook"
          type="url"
          {...register("facebook")}
          color={errors.facebook ? "failure" : "gray"}
          helperText={errors.facebook?.message}
        />
      </div>

      <div className="col-span-12 lg:col-span-4">
        <Label htmlFor="instagram" value="Instagram" />
        <TextInput
          id="instagram"
          type="url"
          {...register("instagram")}
          color={errors.instagram ? "failure" : "gray"}
          helperText={errors.instagram?.message}
        />
      </div>

      <div className="col-span-12 lg:col-span-4">
        <Label htmlFor="site" value="Site" />
        <TextInput
          id="site"
          type="url"
          {...register("site")}
          color={errors.site ? "failure" : "gray"}
          helperText={errors.site?.message}
        />
      </div>

      <div className="col-span-12">
        <Label htmlFor="description" value="Descrição" />
        <Textarea
          id="description"
          {...register("description")}
          color={errors.description ? "failure" : "gray"}
          helperText={errors.description?.message}
          className="h-32"
        />
      </div>

      <div className="col-span-12">
        <Label htmlFor="pictures" value={"Imagens selecionadas"} />
        <input
          id="pictures"
          type="file"
          {...register("pictures")}
          className="hidden"
          multiple
          onChange={handleImageChange}
        />

        {errors.pictures && (
          <p className="text-red-500">{errors.pictures.message}</p>
        )}
      </div>

      <ImageGallery
        pictures={pictures}
        openModal={openModal}
        setCurrentImageIndex={setCurrentImageIndex}
      />

      <Modal
        show={isModalOpen}
        onClose={closeModal}
        imageSrc={currentImage}
        handleDeleteImage={handleDeleteImage}
      />

      <div className="col-span-12 lg:col-span-12 flex gap-4 w-full justify-end mt-6">
        <Button
          gradientDuoTone="purpleToPink"
          type="submit"
          className="min-w-28"
        >
          Salvar
        </Button>
        <Button color="gray" className="min-w-28">
          Desativar
        </Button>
      </div>
    </form>
  );
};

export default FornecedorForm;
