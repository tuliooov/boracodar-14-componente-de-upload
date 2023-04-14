import './globals.css'

export const metadata = {
  title: 'Componente de Upload',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <script src="https://unpkg.com/@phosphor-icons/web" />
      </head>
      <body>{children}</body>
    </html>
  )
}
