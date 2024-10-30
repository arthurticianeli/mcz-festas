import { Button } from "flowbite-react";
import React from "react";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  imageSrc: string;
  handleDeleteImage: () => void;
}

const Modal: React.FC<ModalProps> = ({
  show,
  onClose,
  imageSrc,

  handleDeleteImage,
}) => {
  if (!show) {
    return null;
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-5 rounded-2xl relative">
        <img
          src={imageSrc}
          alt="Current"
          className="max-w-[80vw] max-h-[80vh] mx-auto rounded-2xl "
        />

        <div className="w-full flex justify-end mt-6 gap-4">
          <Button
            onClick={() => {
              handleDeleteImage();
              onClose();
            }}
            color="failure"
            className="min-w-28"
          >
            Deletar
          </Button>
          <Button onClick={onClose} color="gray" className="min-w-28">
            Fechar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
