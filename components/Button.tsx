import { PropsWithChildren } from 'react';

interface ButtonProps
  extends PropsWithChildren<React.HTMLAttributes<HTMLButtonElement>> {}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className="py-2 px-4 bg-blue-200 text-blue-600 rounded-md"
      {...props}
    >
      {children}
    </button>
  );
};
