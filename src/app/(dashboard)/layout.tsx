import Navbar from '@/components/navbar'
import { Toaster } from '@/components/ui/sonner';


export const revalidate = 300;

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className='min-h-screen'>
  <Navbar />
  {children}
  <Toaster richColors/>
  </div>
}
