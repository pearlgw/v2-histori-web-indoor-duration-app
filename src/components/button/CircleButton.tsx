import React from 'react'
import { TbLogout2 } from "react-icons/tb";
import { FiRefreshCcw } from "react-icons/fi";

interface CircleButtonProps {
  type?: "logout" | "refresh";
  onClick?: () => void;
}

const CircleButton: React.FC<CircleButtonProps> = ({ type, onClick }) => {
  return (
    <button onClick={onClick} className='flex items-center justify-center w-[35px] h-[35px] bg-white rounded-full shadow-md shadow-gray-200 hover:bg-gray-200  transition-all'>
      {type === 'refresh' ? 
        <FiRefreshCcw className='text-blue-500 font-bold w-4 h-4'/>
          : 
        <TbLogout2 className='text-red-500 font-bold w-4 h-4 mr-1'/>
      }
    </button>
  )
}

export default CircleButton