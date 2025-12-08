import { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: {
    template: "%s - Shopcart online store",
    default: "shopcart online sytore",
  },
  description: "Shopcart online store, your one stop for all your needs",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="font-poppins antialiased">
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            {/* <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#000000",
              color: "#fff",
            },
          }}
        /> */}
            <Footer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
};
export default RootLayout;
