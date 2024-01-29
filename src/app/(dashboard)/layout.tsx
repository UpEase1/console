import Navbar from '@/components/navbar'
import { Toaster } from "@/components/ui/toaster"

export const revalidate = 3600;

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className='min-h-screen'>
  <Navbar />
  {children}
  <Toaster></Toaster>
  </div>
}
