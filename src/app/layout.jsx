import { Inter, Poppins } from 'next/font/google';
import ReduxProvider from '@/components/providers/ReduxProvider';
import AuthProvider from '@/components/providers/AuthProvider';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata = {
  title: 'AgriMart - Fresh from Ghana\'s Finest Farms',
  description: 'Connect with local Ghanaian farmers, purchase fresh produce, and support sustainable agriculture.',
  keywords: 'Ghana, agriculture, farmers market, organic produce, farm-to-table, e-commerce',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={inter.className}>
        <ReduxProvider>
          <AuthProvider>
            <div className="flex flex-col min-h-screen bg-[#FFFDF7]">
              <NavBar />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </AuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}