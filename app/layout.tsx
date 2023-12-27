import { Metadata } from 'next';
import '../styles/index.scss';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const title = 'Bilal Uçar - Front-end Developer | JavaScript | Angular';
const description =
  'Angular, React, JavaScript, SCSS, Ionic, Firebase gibi teknolojileri kullanıyorum. Front-end alanında kendimi geliştirmeye çalışıyorum.';
const image = 'https://bilalucar.com/images/logo.jpg';

export const metadata: Metadata = {
  title,
  description,
  manifest: '/manifest.json',
  icons: {
    icon: './favicon.ico',
    apple: '/favicon-192x192.png',
  },
  robots: 'follow, index',
  metadataBase: new URL('https://bilalucar.com'),
  openGraph: {
    siteName: title,
    description,
    title,
    images: image,
  },
  twitter: {
    card: 'summary_large_image',
    site: title,
    description,
    title,
    images: image,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
