import { twMerge } from 'tailwind-merge';


const Paragraph = ({ text, otherStyles }) => {
  return (
    <p
      className={twMerge(
        `font-normal text-[16px] leading-6 md:text-[18px] lg:text-base lg:leading-[32px] `,
        otherStyles,
      )}
    >
      {text}
    </p>
  );
};
export default Paragraph;

export const Heading = ({ children, className }) => {
  return <h1 className={twMerge('text-white text-2xl md:text-4xl font-bold', className)}>{children}</h1>;
};

