import { Inter } from 'next/font/google';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'AgriMart - Fresh from Ghana\'s Finest Farms',
  description: 'Connect with local Ghanaian farmers, purchase fresh produce, and support sustainable agriculture.',
  keywords: 'Ghana, agriculture, farmers market, organic produce, farm-to-table, e-commerce',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <NavBar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}