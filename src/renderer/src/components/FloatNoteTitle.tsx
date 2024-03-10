import { selectedNoteAtom } from '@renderer/store'
import { useAtomValue } from 'jotai'
import  { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const FloatNoteTitle = ( {className, ...props}: ComponentProps<'div'>) => {
    const selectedNote = useAtomValue(selectedNoteAtom)

    if(!selectedNote)
      return (
        <div className={twMerge('flex justify-center', className)} {...props}>
        <span className='text-gray-400 '>A Note</span>
      </div>
    )


  return (
    <div className={twMerge('flex justify-center', className)} {...props}>
        <span className='text-gray-400 '>{selectedNote.title}</span>
    </div>
    
  )
}
