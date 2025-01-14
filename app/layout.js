import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import SearchBox from '@/components/Searchbar';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Movie Site',
  description: 'This is a movie database clone',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
       
          <Header />
          <Navbar />
          <SearchBox />
          {children}
        
      </body>
    </html>
  );
}