import React from 'react';

interface CardProps {
  icon: React.ElementType;
  header: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ icon: Icon, header, description}) => {
  return (
    <div className="group w-full h-[280px] max-lg:border border border-slate-400 rounded-2xl transition-colors duration-300">
      <div className='flex flex-col mx-6 mt-5 gap-2'>
        <div className='flex text-center justify-center lg:justify-start'>
          <Icon className="flex text-center w-8 h-8 mt-5 transition-colors duration-300 "/>
        </div>
        <h2 className="text-xl transition-colors duration-300">{header}</h2>
        <p className="text-xs tracking-widest transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
