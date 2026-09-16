import type { Metadata } from "next";
import "./globals.css";
import { StoreProvider } from "@/components/StoreProvider";
import { I18nProvider } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export const metadata: Metadata={title:"Sweetora — Premium Desserts",description:"Premium shirinliklar va desertlar."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="uz"><body><I18nProvider><StoreProvider><Navbar/><main>{children}</main><Footer/></StoreProvider></I18nProvider></body></html>}