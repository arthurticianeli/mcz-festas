import React from "react";

interface ImageGalleryProps {
  selectedImages: File[];
  openModal: (image: File) => void;
  setCurrentImageIndex: (index: number) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  selectedImages,
  openModal,
  setCurrentImageIndex,
}) => {
  return (
    <div className="col-span-12 grid gap-4 grid-cols-12">
      {selectedImages.map((image, index) => (
        <div
          key={index}
          className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-2"
        >
          <img
            src={URL.createObjectURL(image)}
            alt={`Selected ${index}`}
            className="w-full h-36 object-cover rounded-lg hover:shadow-lg transition-shadow cursor-pointer hover:scale-105"
            onClick={() => {
              openModal(image);
              setCurrentImageIndex(index);
            }}
          />
        </div>
      ))}
      <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-2">
        <label
          htmlFor="pictures"
          className="flex items-center justify-center w-full h-36 bg-gray-100 cursor-pointer rounded-lg border-2 border-dashed border-gray-300 hover:border-gray-400 transition-colors"
        >
          <div className="text-gray-400 text-4xl">+</div>
        </label>
      </div>
    </div>
  );
};

export default ImageGallery;
