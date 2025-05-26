import type { Metadata } from 'next';
import { Bricolage_Grotesque } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from '@/components/theme-provider';

const bricolage = Bricolage_Grotesque({
    variable: '--font-bricolage',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Converso',
    description: 'Real-time AI Teaching Platform',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider appearance={{ variables: { colorPrimary: '#fe5933' } }}>
            <html lang="en" suppressHydrationWarning>
                <body className={`${bricolage.variable} pb-20 antialiased`}>
                    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                        <Navbar />
                        {children}
                    </ThemeProvider>
                </body>
            </html>
        </ClerkProvider>
    );
}
