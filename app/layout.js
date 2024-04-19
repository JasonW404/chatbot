import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jason404",
  description: "A personal website for Jason",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`
        bg-neutral-100 
        max-w-screen-2xl h-screen 
        mx-auto p-4
        flex flex-col 
        ${inter.className}
        `}>

        <div 
          id="RootBoxShadowWrapper" 
          className="
            flex-grow flex flex-col
            h-full w-full
            rounded-lg shadow-br-md shadow-neutral-600"
        >
          {children}
        </div>

      </body>
    </html>
  );
}
