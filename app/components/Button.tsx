'use client';

import { IconType } from "react-icons/lib";

interface ButtonProps{
    label: string,
    onClick : (e: React.MouseEvent<HTMLButtonElement>) => void,
    disabled?:boolean,
    outline?:boolean,
    small?:boolean,
    icon?:IconType
}

const Button: React.FC <ButtonProps> = ({
    label,
    onClick,
    disabled,
    outline,
    small,
    icon:Icon
}) => {
  return (
    <button className={`relative disabled:opacity-70 w-full disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition flex-1 ${outline? 'bg-white':'bg-[#1446A0]'} ${outline? 'border-black':'bg-[#1446A0]'} ${outline? 'text-black':'text-white'} ${small? 'p-1':'p-2'} ${small? 'text-sm':'text-md'} ${small? 'font-light':'font-semibold'} ${small? 'border-[1px]':'border-2'}`}
        onClick={onClick}
        disabled={disabled}
    >
        {label}
        {Icon&&<Icon size={24} className='absolute left-4 top-2'/>}
    </button>
  )
}

export default Button
