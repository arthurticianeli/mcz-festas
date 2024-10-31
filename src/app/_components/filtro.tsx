import { Button, Label, Select, TextInput } from "flowbite-react";
import DropdownMultiSelect from "./DropdownMultiSelect";

const Filtro = () => {
  const bairrosOptions = ["Bairro 1", "Bairro 2", "Bairro 3", "Bairro 4"];
  return (
    <div className="relative grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 p-6 lg:py-8 z-10">
      <div className="w-full mx-auto">
        <div className="mb-2 block">
          <Label htmlFor="search" value="Nome do fornecedor" />
        </div>
        <TextInput id="search" placeholder="Digite" />
      </div>

      <DropdownMultiSelect label="Bairros" options={bairrosOptions} />

      <div className="w-full mx-auto">
        <div className="mb-2 block">
          <Label htmlFor="servicos" value="Tipo de serviço" />
        </div>
        <Select id="servicos" required className="w-full">
          <option>Todos</option>
          <option>Buffet</option>
          <option>Animador(a)</option>
          <option>Boleiro(a)</option>
          <option>Doceiro(a)</option>
        </Select>
      </div>
      <div className="w-full mt-auto">
        <Button gradientDuoTone="purpleToPink" className="w-full">
          Filtrar
        </Button>
      </div>
    </div>
  );
};

export default Filtro;
