import { PropsWithChildren } from 'react';

export const PageTitle = ({ children }: PropsWithChildren) => (
  <h1 className="text-2xl font-bold">{children}</h1>
);
