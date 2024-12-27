import ReactQueryProvider from '@/providers/ReactQueryProvider';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <div>{children}</div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
