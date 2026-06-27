import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Haylemichael Tsega — Senior Backend Engineer",
  description:
    "Senior backend engineer with 4+ years designing production fintech systems, distributed microservices, and payment gateways. Go · Node.js · Kafka · Kubernetes. Open to senior roles globally.",
  keywords: [
    "backend engineer",
    "distributed systems",
    "microservices",
    "fintech",
    "payment gateway",
    "Go engineer",
    "Node.js",
    "Kafka",
    "Kubernetes",
    "Haylemichael Tsega",
    "Ethiopia",
    "remote backend engineer",
    "senior software engineer",
  ],
  authors: [{ name: "Haylemichael Tsega" }],
  creator: "Haylemichael Tsega",
  metadataBase: new URL("https://haile-dev-portifoli.vercel.app"),
  openGraph: {
    title: "Haylemichael Tsega — Senior Backend Engineer",
    description:
      "Building distributed systems that move money, data, and trust at scale. 4+ years in fintech, digital banking, and cloud-native infrastructure.",
    url: "https://haile-dev-portifoli.vercel.app",
    siteName: "Haylemichael Tsega Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haylemichael Tsega — Senior Backend Engineer",
    description:
      "4+ years building production fintech systems. Go · Node.js · Kafka · Kubernetes · Distributed Systems.",
    creator: "@haylemichael",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Haylemichael Tsega",
              jobTitle: "Senior Backend Engineer",
              description:
                "Backend engineer specializing in distributed systems, payment gateways, and microservice architectures.",
              url: "https://haile-dev-portifoli.vercel.app",
              sameAs: [
                "https://github.com/Reman-tsega",
                "https://www.linkedin.com/in/haylemichael-tsega/",
              ],
              knowsAbout: [
                "Distributed Systems",
                "Microservices",
                "Payment Gateways",
                "Go",
                "Node.js",
                "Kafka",
                "Kubernetes",
                "Fintech",
              ],
            }),
          }}
        />
      </head>
      <body className={spaceGrotesk.className}>
        {/* Skip-to-content link for keyboard / screen reader users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-violet-600 focus:text-white focus:rounded-lg focus:text-sm focus:font-semibold"
        >
          Skip to main content
        </a>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
