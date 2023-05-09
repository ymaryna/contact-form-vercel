import { Form } from '@/components/Form'
import { KVViewContacts } from '@/components/KVViewContacts'
// import { FormPostgres } from '@/components/FormPostgres'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <main className={`${inter.className} flex min-h-screen flex-col items-center justify-center p-24`}>
      <h2 className='mb-4 text-4xl font-extrabold tracking-tight text-center'>Contacta conmigo</h2>
      <Form />
      <KVViewContacts />
      {/* <FormPostgres /> */}
    </main>
  )
}
