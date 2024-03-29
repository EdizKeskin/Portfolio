import "@/styles/global.css";
import Navbar from "@/components/Navbar";
import { Montserrat } from "@next/font/google";

export const metadata = {
  title: "Ediz Keskin",
  description: "Ediz Keskin's Homepage",
  referrer: "origin-when-cross-origin",
  keywords: ["Ediz Keskin", "Portfolio", "website", "sharpness", "sharpness_4"],
  colorScheme: "dark",
  creator: "Ediz Keskin",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    title: "Ediz Keskin",
    description: "Ediz Keskin's Homepage",
    url: "https://edizkeskin.com.tr/",
    siteName: "Ediz Keskin",
    images: [
      {
        url: "https://portfolio-nextjs-edizkeskin.vercel.app/card.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/favicon.ico",
    },
  },
  themeColor: "black",
};

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" className={`${montserrat.variable}`}>
      <body className="bg-[#1A202C] min-h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
