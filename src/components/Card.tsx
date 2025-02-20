import React from 'react';

interface CardProps {
  icon: React.ElementType;
  header: string;
  description: string;
  defaultHover?: boolean;
}

const Card: React.FC<CardProps> = ({ icon: Icon, header, description, defaultHover = false }) => {
  return (
    <div className={`group w-full h-[280px] rounded-t-2xl transition-colors duration-300 ${
      defaultHover ? 'bg-white' : 'hover:bg-[#5376da]'
    }`}>
      <div className='flex flex-col mx-6 mt-5 gap-2'>
        <Icon className={`w-8 h-8 mt-5 transition-colors duration-300 ${
          defaultHover ? 'text-white' : 'text-black group-hover:text-white'
        }`} />
        <h2 className={`text-xl transition-colors duration-300 ${
          defaultHover ? 'text-white' : 'text-black group-hover:text-white'
        }`}>{header}</h2>
        <p className={`text-xs tracking-widest transition-colors duration-300 ${
          defaultHover ? 'text-white' : 'text-black group-hover:text-white'
        }`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
