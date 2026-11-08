import { Archivo, Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PROFILE, SEO, SITE_URL, CERTIFICATIONS, EDUCATION } from "@/content/site";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SEO.title, template: `%s | ${PROFILE.name}` },
  description: SEO.description,
  applicationName: "ghaf.dev",
  authors: [{ name: PROFILE.name, url: SITE_URL }],
  creator: PROFILE.name,
  keywords: [
    "Digital Innovation Expert Africa",
    "Solution Architect Africa",
    "Enterprise AI Architect",
    "AI Engineer Africa",
    "Digital Transformation Specialist",
    "Cloud and DevSecOps Engineer",
    "Enterprise Application Architect",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: SITE_URL,
    siteName: "ghaf.dev",
    title: SEO.title,
    description: SEO.description,
    locale: "en_US",
    firstName: "Abdul-Gafur",
    lastName: "Saeed",
    images: [SEO.image],
  },
  twitter: { card: "summary_large_image", title: SEO.title, description: SEO.description, images: [SEO.image.url] },
  robots: { index: true, follow: true },
};

export const viewport = { themeColor: "#f8f9fb" };

const personLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: PROFILE.name,
      url: SITE_URL,
      image: `${SITE_URL}${PROFILE.photo}`,
      jobTitle: PROFILE.current.role,
      description: SEO.description,
      email: `mailto:${PROFILE.email}`,
      worksFor: { "@type": "Organization", name: PROFILE.current.org, url: "https://au.int" },
      address: { "@type": "PostalAddress", addressLocality: "Addis Ababa", addressCountry: "ET" },
      nationality: { "@type": "Country", name: "Ghana" },
      alumniOf: EDUCATION.map((e) => ({ "@type": "CollegeOrUniversity", name: e.school.replace(/ \(online\)$/, "") })),
      hasCredential: CERTIFICATIONS.map((c) => ({
        "@type": "EducationalOccupationalCredential",
        name: c.name,
        credentialCategory: "certification",
        recognizedBy: { "@type": "Organization", name: c.issuer },
      })),
      knowsAbout: [
        "Enterprise architecture",
        "Solution architecture",
        "Retrieval-augmented generation",
        "Artificial intelligence",
        "Cloud engineering",
        "DevSecOps",
        "Digital transformation",
      ],
      sameAs: [PROFILE.linkedin, PROFILE.github],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "ghaf.dev",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${archivo.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body id="top" className="min-h-screen antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
