import { Toaster } from 'sonner'
import '@/app/globals.css'

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="ru">
        <body>
        {children}
        <Toaster richColors position="top-center" />
        </body>
        </html>
    )
}