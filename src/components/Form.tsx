'use client'

import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { toast } from 'sonner'
import confetti from 'canvas-confetti'

export const Form = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    const { email, name, message } = Object.fromEntries(formData.entries())

    // llamamos a la api
    fetch('api/kv-send-message', {
      method: 'POST',
      body: JSON.stringify({ email, name, message }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      if (response.status === 200) {
        toast.success('Mensaje enviado con éxito')
        form.reset()
        void confetti()
      } else {
        toast.error('Hubo un error al enviar el mensaje')
      }
    }).catch(() => {
      toast.error('Hubo un error al enviar el mensaje')
    })
  }
  return (
    <form onSubmit={handleSubmit} className='p-8 space-y-6 border border-white/10 w-full max-w-sm'>
      <Input
        name='email'
        id='email'
        label='Tu Email:'
        type='email'
        placeholder='example@email.com'
        pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
      />

      <Input
        name='name'
        id='name'
        label='Tu Nombre:'
        type='text'
        placeholder='Marina Cid'
      />

      <Input
        name='message'
        id='message'
        label='Tu Mensaje:'
        type='text'
        placeholder='Este es el mensaje que quiero enviar'
      />

      <Button>Enviar mensaje</Button>
    </form>
  )
}
