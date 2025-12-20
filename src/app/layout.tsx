import type { Metadata } from "next";
import { Alexandria, Kode_Mono } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { ProfilePage, WithContext } from "schema-dts";
import { resume } from "@/data";

const alexandriaSans = Alexandria({
  subsets: ["latin"],
  variable: "--font-sans-serif-primary",
  display: "swap",
});

const kodeMono = Kode_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const title = "Aleksandr Aganov | Senior Frontend Engineer";
const description =
  "Learn about Aleksandr Aganov, a frontend developer with a focus on practical experience and technical skills. Explore a comprehensive overview of professional background, skills, and personal insights";
const author = "Aleksandr Aganov";
const host = process.env.NEXT_PUBLIC_HOST || "";
const previewImageUrl = `${host}/preview.png`;

export const metadata: Metadata = {
  title,
  authors: {
    name: author,
  },
  alternates: {
    canonical: host,
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
    url: host,
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

const fullName = `${resume.firstName} ${resume.lastName}`;

const jsonLd: WithContext<ProfilePage> = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  dateCreated: new Date("01-08-2024").toISOString(),
  dateModified: new Date().toISOString(),
  name: `${fullName}'s Personal Website`,
  description:
    "Explore a comprehensive overview of my professional background, technical skills, and personal insights into web development and software engineering.",
  inLanguage: "en",
  author: {
    "@type": "Person",
    name: fullName,
  },
  mainEntity: {
    "@type": "Person",
    name: fullName,
    givenName: resume.firstName,
    familyName: resume.lastName,
    alternateName: ["Alex", "Alexsandr", "Alexsander", "Aleks", "Aleksander"],
    jobTitle: "Senior Frontend Developer",
    email: `mailto:${resume.email}`,
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Don State Technical University",
      description: "Graduated with a bachelor's degree in Computer Science",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "Philippines",
    },
    nationality: {
      "@type": "Country",
      name: "Russia",
    },
    knowsLanguage: "English, Russian",
    sameAs: Object.values(resume.socials),
    description:
      "An experienced software engineer specializing in web development.",
  },
};

const JsonLD = () => {
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
          alexandriaSans.className,
          alexandriaSans.variable,
          kodeMono.variable,
        )}
      >
        {children}
        <JsonLD />
      </body>
    </html>
  );
}
