import type { Metadata } from "next";
import { Alexandria, Kode_Mono } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { Person, WithContext } from "schema-dts";
import { resume } from "@/data";

const alexandriaSans = Alexandria({
  subsets: ["latin"],
  variable: "--font-sans-serif-primary",
  display: "swap",
});

const kodeMono = Kode_Mono({
  subsets: ["latin"],
  variable: "--font-mono-primary",
  display: "swap",
});

const title = "Aleksandr Aganov | Senior Frontend Developer & Web3 Specialist";
const description =
  "Experienced Frontend Developer with expertise in React, TypeScript, and Web3 development. Specializing in responsive, pixel-perfect UIs for web, mobile, and desktop applications. Available for remote roles.";
const author = "Aleksandr Aganov";
const previewImageUrl = "/preview.png";

export const metadata: Metadata = {
  title,
  authors: {
    name: author,
  },
  alternates: {
    canonical: "/",
  },
  applicationName: title,
  creator: author,
  publisher: author,
  description,
  keywords: [
    "Frontend Developer",
    "Senior Frontend Engineer",
    "React Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Responsive Design",
    "Web3 Developer",
    "Blockchain Developer",
    "React JS Development",
    "Next.js Developer",
    "Apps Developer",
    "Dapps Developer",
    "Cross-Platform Development",
    "Freelance Web Developer",
  ],
  openGraph: {
    type: "profile",
    title,
    description,
    firstName: resume.firstName,
    lastName: resume.lastName,
    emails: resume.email,
    url: "/",
    images: {
      url: previewImageUrl,
    },
  },
  twitter: {
    title,
    description,
    images: {
      url: previewImageUrl,
    },
    creator: author,
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const JsonLD = () => {
  const jsonLd: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: `${resume.firstName} ${resume.lastName}`,
    givenName: resume.firstName,
    familyName: resume.lastName,
    jobTitle: "Senior Frontend Developer",
    email: resume.email,
    nationality: "Russian",
    sameAs: Object.values(resume.socials),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
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
          "bg-bg-primary",
          "text-text-primary",
          alexandriaSans.className,
          alexandriaSans.variable,
          kodeMono.variable
        )}
      >
        {children}
        <JsonLD />
      </body>
    </html>
  );
}
