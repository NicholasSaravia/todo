import { PropsWithChildren } from 'react';

interface PhoneProps extends PropsWithChildren {
  padding?: boolean;
}

export const Phone = ({ children, padding }: PhoneProps) => {
  return (
    <section
      className={`max-h-[600px] h-full w-full max-w-[320px] rounded-[4.5rem] outline-4 outline-offset-4 border-[12px] bg-white ${
        padding ? 'p-4' : ''
      } py-12 overflow-y-scroll scroll-p-7`}
    >
      {children}
    </section>
  );
};
