import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: {
    default: "Sefra – 22ND Adidas EP",
    template: "%s | Sefra",
  },
  description: "Official release site for Sefra Wiser's 22ND Adidas EP. Stream, pre-order, and explore release details.",
  metadataBase: new URL("https://example.com"),
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
