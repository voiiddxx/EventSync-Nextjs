import Footer from "@/components/shared/Footer"
import Header from "@/components/shared/Header"




export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      
        <body suppressHydrationWarning={true}>
            <Header/>{children}<Footer/>
            </body>
      
    )
  }
  