import { useSetAtom } from 'jotai'
import { ActionButton, ActionButtonProps } from './ActionButton'
import { deleteNoteAtom } from '@renderer/store'
import { HiArchiveBoxXMark } from "react-icons/hi2";

export const DeleteNoteButton = ({ ...props }: ActionButtonProps) => {
  const deleteNote = useSetAtom(deleteNoteAtom)

  const handleDelete = async() => {
    await deleteNote();
  }

  return (
    <ActionButton onClick={handleDelete}{...props}>
      <HiArchiveBoxXMark className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}