import localFont from 'next/font/local';
import Footer from '@/components/Footer';
import '../../styles/globals.css';
import Navbar from '@/components/Navbar';

const clashDisplay = localFont({
  variable: '--font-clash-display',
  src: [
    {
      path: './assets/fonts/ClashDisplay-Extralight.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './assets/fonts/ClashDisplay-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './assets/fonts/ClashDisplay-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './assets/fonts/ClashDisplay-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './assets/fonts/ClashDisplay-Semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './assets/fonts/ClashDisplay-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </head>
      <body className={`${clashDisplay.className} font-sans`}>
        <div className="flex flex-col items-center text-gray-800 dark:text-white relative">
          <Navbar className="absolute top-0 left-0 right-0" />
          <div className="w-full">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
