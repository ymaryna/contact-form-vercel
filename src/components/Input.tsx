export const Input = ({ id, name, label, type, placeholder, pattern, ...props }:
{ id: string, name: string, label: string, type: string, placeholder: string, pattern?: string }
) => {
  return (
    <fieldset>
      <label className='block mb-2 text-sm font-medium text-gray-300' htmlFor={id}>{label}</label>
      <input className='border text-sm rounded-lg block w-full p-2.5 bg-white/5 border-gray-600 placeholder-gray-400 text-white' pattern={pattern} type={type} name={name} id={id} placeholder={placeholder} {...props} />
    </fieldset>
  )
}
