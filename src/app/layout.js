import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: 'Affiliate Marketing Platform',
  description: 'Promote products with ease',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <header>
          <h1>Affiliate Platform</h1>
          <nav>
            <a href='/'>Home</a> | <a href='/login'>Login</a> |{' '}
            <a href='/signup'>Sign Up</a>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
