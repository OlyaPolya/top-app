import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login',
};

export default function LoginLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div>
      {children}
      <div> Авторизация</div>
    </div>
  );
}

