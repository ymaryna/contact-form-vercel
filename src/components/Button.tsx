export const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button type='submit' className='px-5 py-3 text-sm font-medium text-center text-white border border-white rounded-full  w-full'>{children}</button>
  )
}
