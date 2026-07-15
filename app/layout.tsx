import type { Metadata } from "next";
import "./globals.css";
import { ScrollProgress } from "@/components/ScrollProgress";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jeffreyburns.com"),
  title:
    "DreamSmile by Dr. Jeffrey Burns | Full-Arch Dental Implants | Shenandoah Valley",
  description:
    "DreamSmile by Dr. Jeffrey Burns: full-arch dental implants and same-day teeth in New Market, VA, serving Harrisonburg, Winchester and the Shenandoah Valley. 30+ years, 98%+ success rate. Free consultation.",
  openGraph: {
    type: "website",
    siteName: "Jeffrey S. Burns, DDS",
    title:
      "DreamSmile by Dr. Jeffrey Burns | Full-Arch Dental Implants | Shenandoah Valley",
    description:
      "Full-arch dental implants and same-day teeth in New Market, VA, serving Harrisonburg, Winchester and the Shenandoah Valley. 30+ years, 98%+ success rate. Free consultation.",
    url: "https://www.jeffreyburns.com/",
    images: ["/assets/img/dr-burns-smile.jpg"],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;1,600&family=Amiri:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
