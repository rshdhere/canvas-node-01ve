export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Flappy Bird Game</title>
        <meta name="description" content="A simple Flappy Bird game built with Next.js and TypeScript." />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}