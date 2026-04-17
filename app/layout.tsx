import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

export const metadata = {
  title: 'Lexbridge Website',
  description: '### REFINED PROMPT:

Build a premium business website for a professional services company called &quot;LexBridge.&quot; The target',
  openGraph: {
    title: 'Lexbridge Website',
    description: '### REFINED PROMPT:

Build a premium business website for a professional services company called &quot;LexBridge.&quot; The target',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Lexbridge Website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
