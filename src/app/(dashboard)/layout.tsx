import Navbar from '@/components/navbar'
import { Toaster } from '@/components/ui/sonner';


export const revalidate = 0;

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className='min-h-screen bg-[#EFF2FB]'>
  <Navbar />
  {children}
  <Toaster richColors/>
  </div>
}
