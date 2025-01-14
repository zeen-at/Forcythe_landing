import { twMerge } from 'tailwind-merge'


export const Button = ({ children, className, ...restProps }) => {
    return (
      <button
      className={twMerge(
          'bg-white text-black shadow shadow-[#1018280D] rounded-lg py-[10px] md:py-3 px-5 font-bold hover:bg-blue-800 hover:text-white',
          className,
          )}
          {...restProps}
      >
        {children}
      </button>
    );
  };