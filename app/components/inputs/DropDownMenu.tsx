import React, { ChangeEvent } from 'react';

interface Option {
  value: string;
  label: string;
}

interface DropdownMenuProps {
  options: Option[];
  onSelect: (selectedOption: string) => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ options, onSelect }) => {
  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value;
    onSelect(selectedOption);
  };

  return (
    <select onChange={handleSelect} className='py-5'>
      {options.map((option) => (
        <option key={option.value} value={option.value} className='border-2 rounded-sm'>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default DropdownMenu;
