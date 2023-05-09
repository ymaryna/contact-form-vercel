import kv from '@vercel/kv'

export const KVViewContacts = async () => {
  const keys = await kv.keys('contact-*')

  return <small className='mt-2'>{keys.length} contactos realizados</small>
}
