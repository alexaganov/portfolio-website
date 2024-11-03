import type { Metadata } from "next";
import { Alexandria, Kode_Mono} from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const alexandriaSans = Alexandria({
  subsets: ['latin'],
  variable: '--font-sans-serif-primary',
  display: 'swap',
})

const kodeMono = Kode_Mono({
  subsets: ['latin'],
  variable: '--font-mono-primary',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Aleksandr Aganov",
  description: "Senior Frontend Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={clsx(
          "antialiased",
          "bg-primary",
          'text-primary',
          alexandriaSans.className,
          alexandriaSans.variable,
          kodeMono.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
