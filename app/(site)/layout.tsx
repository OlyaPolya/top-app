import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
};

export default function AboutLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div>
      {children}
    </div>
  );
}

