"use client";

import { Label, TextInput } from "flowbite-react";
import { useEffect, useRef, useState } from "react";

interface DropdownMultiSelectProps {
  label: string;
  options: string[];
}

const DropdownMultiSelect: React.FC<DropdownMultiSelectProps> = ({
  label,
  options,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isInputActive, setIsInputActive] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleAddOption = (option: string) => {
    if (!selectedOptions.includes(option)) {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleRemoveOption = (option: string) => {
    setSelectedOptions(selectedOptions.filter((item) => item !== option));
  };

  const handleInputClick = () => {
    setIsInputActive(true);
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleInputBlur = () => {
    setIsInputActive(false);
    setInputValue("");
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsDropdownOpen(false);
      handleInputBlur();
    }
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsDropdownOpen(true);
    setInputValue(event.target.value);
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(inputValue.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
        handleInputBlur();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [dropdownRef]);

  return (
    <div className="w-full mx-auto">
      <div className="mb-2 block">
        <Label htmlFor="dropdown" value={label} />
      </div>
      <div className="relative" ref={dropdownRef}>
        <TextInput
          id="dropdown"
          value={
            isInputActive
              ? inputValue
              : selectedOptions.length === 0
              ? ""
              : selectedOptions.length === options.length
              ? "Todos"
              : `${selectedOptions.length} selecionado(s)`
          }
          onChange={handleOnChange}
          placeholder={`Adicionar ${label.toLowerCase()}`}
          onClick={handleInputClick}
          readOnly={!isInputActive}
        />
        <svg
          className="w-3.5 h-3.5 absolute right-3 top-2 text-gray-500 mt-1"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          onClick={handleInputClick}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
        {isDropdownOpen && filteredOptions.length > 0 && (
          <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg shadow mt-1">
            {filteredOptions.map((option) => (
              <div key={option} className="p-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={selectedOptions.includes(option)}
                    onChange={() =>
                      selectedOptions.includes(option)
                        ? handleRemoveOption(option)
                        : handleAddOption(option)
                    }
                  />
                  {option}
                </label>
              </div>
            ))}
          </div>
        )}
        {isDropdownOpen && filteredOptions.length === 0 && (
          <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg shadow mt-1">
            <div className="p-2 text-sm">Nenhum resultado encontrado</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownMultiSelect;
