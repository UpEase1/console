import Navbar from '@/components/navbar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className='min-h-screen'>
  <Navbar />
  {children}
  </div>
}
