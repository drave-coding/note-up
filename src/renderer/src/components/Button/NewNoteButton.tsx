import { useSetAtom } from 'jotai'
import { ActionButton, ActionButtonProps } from './ActionButton'


import { createEmptyNoteAtom } from '@renderer/store'
import { HiArchiveBoxArrowDown } from "react-icons/hi2";
export const NewNoteButton = ({ ...props }: ActionButtonProps) => {

  const createEmptyNote = useSetAtom(createEmptyNoteAtom)

  const handleCreation = async() => {
    await createEmptyNote()
  }
  

  return (
    <ActionButton onClick={handleCreation} {...props}>
      <HiArchiveBoxArrowDown className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}