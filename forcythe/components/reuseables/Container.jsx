import { twMerge } from 'tailwind-merge';

export const Container = ({ children, className }) => {
  return <div className={twMerge('px-4 md:px-6 lg:px-24 max-w-[1440px] mx-auto', className)}>{children}</div>;
};
